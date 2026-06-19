const crypto = require("node:crypto");
const { getConfig } = require("./config");
const { getAdminSupabase } = require("./supabase");

const COOKIE_NAME = "ksq_session";
const SESSION_SECONDS = 60 * 60 * 24 * 30;

const b64url = (input) => Buffer.from(input).toString("base64url");
const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
const sign = (value) => crypto.createHmac("sha256", getConfig().sessionSecret).update(value).digest("base64url");

function parseCookies(header = "") {
  const cookies = {};
  for (const part of header.split(";")) {
    const [key, ...value] = part.trim().split("=");
    if (!key || !value.length) continue;
    try { cookies[key] = decodeURIComponent(value.join("=")); } catch { /* Ignore malformed cookies. */ }
  }
  return cookies;
}

function makeCookie(sessionId, token, req) {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = b64url(JSON.stringify({ sid: sessionId, token, exp: expiresAt }));
  const secure = process.env.NODE_ENV === "production" || req.headers["x-forwarded-proto"] === "https";
  return `${COOKIE_NAME}=${payload}.${sign(payload)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_SECONDS}${secure ? "; Secure" : ""}`;
}

function clearCookie(req) {
  const secure = process.env.NODE_ENV === "production" || req.headers["x-forwarded-proto"] === "https";
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure ? "; Secure" : ""}`;
}

function decodeCookie(req) {
  const raw = parseCookies(req.headers.cookie)[COOKIE_NAME];
  if (!raw) return null;
  const separator = raw.lastIndexOf(".");
  if (separator < 1) return null;
  const payload = raw.slice(0, separator);
  const supplied = Buffer.from(raw.slice(separator + 1));
  const expected = Buffer.from(sign(payload));
  if (supplied.length !== expected.length || !crypto.timingSafeEqual(supplied, expected)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!data.sid || !data.token || !data.exp || data.exp <= Date.now() / 1000) return null;
    return data;
  } catch { return null; }
}

async function requireSession(req) {
  const cookie = decodeCookie(req);
  if (!cookie) return null;
  const admin = getAdminSupabase();
  const { data, error } = await admin.from("app_sessions")
    .select("id,user_id,token_hash,expires_at,revoked_at")
    .eq("id", cookie.sid)
    .maybeSingle();
  if (error || !data || data.revoked_at || new Date(data.expires_at).getTime() <= Date.now()) return null;
  const supplied = Buffer.from(sha256(cookie.token));
  const expected = Buffer.from(data.token_hash);
  if (supplied.length !== expected.length || !crypto.timingSafeEqual(supplied, expected)) return null;
  return { ...data, token_hash: undefined };
}

module.exports = { COOKIE_NAME, SESSION_SECONDS, sha256, makeCookie, clearCookie, decodeCookie, requireSession };
