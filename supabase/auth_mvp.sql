-- 开赛前 Auth MVP
-- 在 Supabase Dashboard -> SQL Editor 中整段运行。

create extension if not exists pgcrypto;

do $$ begin
  create type public.activation_code_status as enum ('available', 'issued', 'used', 'expired');
exception when duplicate_object then null;
end $$;

create table if not exists public.activation_codes (
  id uuid primary key default gen_random_uuid(),
  code_hash text not null unique,
  code_hint text not null,
  status public.activation_code_status not null default 'available',
  expires_at timestamptz,
  issued_at timestamptz,
  used_at timestamptz,
  used_by uuid unique references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  constraint activation_code_expiry_check check (expires_at is null or expires_at > created_at)
);

create index if not exists activation_codes_status_idx on public.activation_codes(status);

create table if not exists public.app_sessions (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  token_hash text not null unique,
  device_id text not null,
  user_agent text,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  expires_at timestamptz not null,
  revoked_at timestamptz,
  constraint app_sessions_device_id_check check (char_length(device_id) between 1 and 100)
);

create index if not exists app_sessions_active_user_idx
  on public.app_sessions(user_id, expires_at)
  where revoked_at is null;

alter table public.activation_codes enable row level security;
alter table public.app_sessions enable row level security;

-- 一次生成 1-100 个激活码。明文只在本次查询结果中出现，请立即保存。
create or replace function public.create_activation_codes(
  p_count integer,
  p_expires_at timestamptz default null
)
returns table (activation_code text, code_status public.activation_code_status, expires_at timestamptz)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_code text;
  v_index integer;
begin
  if p_count < 1 or p_count > 100 then
    raise exception 'activation_code_count_out_of_range';
  end if;
  if p_expires_at is not null and p_expires_at <= now() then
    raise exception 'activation_code_expiry_invalid';
  end if;
  for v_index in 1..p_count loop
    v_code := 'KSQ-' || upper(encode(gen_random_bytes(6), 'hex'));
    insert into public.activation_codes(code_hash, code_hint, expires_at)
    values (encode(digest(v_code, 'sha256'), 'hex'), right(v_code, 4), p_expires_at);
    activation_code := v_code;
    code_status := 'available'::public.activation_code_status;
    expires_at := p_expires_at;
    return next;
  end loop;
end;
$$;

-- 发放给客户后，将 available 改为 issued；只有 issued 状态可以注册。
create or replace function public.issue_activation_codes(p_codes text[])
returns integer
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_updated integer;
begin
  update public.activation_codes
     set status = case when expires_at is not null and expires_at <= now()
                       then 'expired'::public.activation_code_status
                       else 'issued'::public.activation_code_status end,
         issued_at = case when expires_at is null or expires_at > now() then now() else issued_at end
   where code_hash in (
     select encode(digest(upper(trim(code)), 'sha256'), 'hex') from unnest(p_codes) as code
   )
     and status = 'available';
  get diagnostics v_updated = row_count;
  return v_updated;
end;
$$;

create or replace function public.redeem_activation_code(p_code_hash text, p_user_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code public.activation_codes%rowtype;
begin
  select * into v_code from public.activation_codes where code_hash = p_code_hash for update;
  if not found or v_code.status <> 'issued' then
    return null;
  end if;
  if v_code.expires_at is not null and v_code.expires_at <= now() then
    update public.activation_codes set status = 'expired' where id = v_code.id;
    return null;
  end if;
  update public.activation_codes
     set status = 'used', used_at = now(), used_by = p_user_id
   where id = v_code.id;
  return v_code.id;
end;
$$;

-- 同一设备重新登录会替换旧 session；第三个不同设备会被原子拒绝。
create or replace function public.create_app_session(
  p_id uuid,
  p_user_id uuid,
  p_token_hash text,
  p_device_id text,
  p_user_agent text,
  p_expires_at timestamptz
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_active_count integer;
begin
  perform pg_advisory_xact_lock(hashtextextended(p_user_id::text, 0));
  update public.app_sessions
     set revoked_at = now()
   where user_id = p_user_id and device_id = p_device_id
     and revoked_at is null and expires_at > now();
  select count(*) into v_active_count
    from public.app_sessions
   where user_id = p_user_id and revoked_at is null and expires_at > now();
  if v_active_count >= 2 then
    raise exception 'device_limit_reached';
  end if;
  insert into public.app_sessions(id, user_id, token_hash, device_id, user_agent, expires_at)
  values (p_id, p_user_id, p_token_hash, p_device_id, p_user_agent, p_expires_at);
end;
$$;

create or replace function public.close_app_session(p_session_id uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update public.app_sessions set revoked_at = coalesce(revoked_at, now()) where id = p_session_id;
$$;

revoke all on table public.activation_codes from public, anon, authenticated;
revoke all on table public.app_sessions from public, anon, authenticated;
revoke all on function public.create_activation_codes(integer, timestamptz) from public, anon, authenticated;
revoke all on function public.issue_activation_codes(text[]) from public, anon, authenticated;
revoke all on function public.redeem_activation_code(text, uuid) from public, anon, authenticated;
revoke all on function public.create_app_session(uuid, uuid, text, text, text, timestamptz) from public, anon, authenticated;
revoke all on function public.close_app_session(uuid) from public, anon, authenticated;

grant execute on function public.create_activation_codes(integer, timestamptz) to service_role;
grant execute on function public.issue_activation_codes(text[]) to service_role;
grant execute on function public.redeem_activation_code(text, uuid) to service_role;
grant execute on function public.create_app_session(uuid, uuid, text, text, text, timestamptz) to service_role;
grant execute on function public.close_app_session(uuid) to service_role;
grant select, insert, update, delete on table public.activation_codes to service_role;
grant select, insert, update, delete on table public.app_sessions to service_role;

-- 将已过期但尚未访问的激活码状态同步为 expired（可随时手动运行）。
update public.activation_codes
   set status = 'expired'
 where status in ('available', 'issued') and expires_at is not null and expires_at <= now();
