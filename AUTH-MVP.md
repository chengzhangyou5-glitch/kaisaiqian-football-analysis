# 开赛前 Auth MVP

本分支为静态站增加 Supabase Auth、一次性激活码和服务端 session。原有比赛数据结构与报告视觉未改动；首页、完整报告数据模块和 PDF 均由 `/api/protected` 校验后提供。

## 1. Supabase 初始化

在 Supabase Dashboard 的 **SQL Editor** 中完整运行 [`supabase/auth_mvp.sql`](supabase/auth_mvp.sql)。脚本会创建：

- `activation_codes`：激活码哈希、`available / issued / used / expired` 状态和使用记录。
- `app_sessions`：设备 session、有效期与退出/撤销状态。
- 激活码生成、发放、核销以及原子创建/关闭 session 的数据库函数。

激活码明文不入库，表中只保存 SHA-256 哈希和末四位提示。

然后在 **Authentication -> Sign In / Providers -> Email** 保持邮箱密码登录启用，并关闭允许公开创建新用户的选项（`Allow new users to sign up`）。服务端使用 Secret Key 的 `admin.createUser` 仍可为通过激活码的客户创建账号；登录接口还会二次检查该用户是否有 `used` 激活码记录。

## 2. 创建第一批激活码

在 SQL Editor 中生成 10 个、有效期到 2026 年 12 月 31 日的激活码：

```sql
select * from public.create_activation_codes(10, '2026-12-31 23:59:59+08');
```

立刻复制查询结果中的 `activation_code`，明文不会再次显示。新码初始为 `available`。把其中两枚发给客户前，将它们标为 `issued`：

```sql
select public.issue_activation_codes(array[
  'KSQ-第一枚实际激活码',
  'KSQ-第二枚实际激活码'
]);
```

只有 `issued` 且未过期的激活码可注册，注册成功后自动变为 `used`。查看状态：

```sql
select code_hint, status, issued_at, used_at, expires_at
from public.activation_codes
order by created_at desc;
```

## 3. Vercel 环境变量

在 Vercel Project Settings -> Environment Variables 中为 Production、Preview（按需也为 Development）填写：

| 名称 | 值 |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase Publishable Key |
| `SUPABASE_SECRET_KEY` | Supabase Secret Key，仅服务端使用 |
| `SESSION_SECRET` | 至少 32 字符的高强度随机字符串 |

可用以下命令生成 `SESSION_SECRET`：

```powershell
node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"
```

不要给 Secret Key 添加 `NEXT_PUBLIC_` 前缀，也不要提交 `.env.local`。部署时把仓库导入 Vercel，Framework Preset 选 **Other**，Build Command 留空，安装命令使用 `npm install`，然后部署。

## 4. 本地运行

```powershell
Copy-Item .env.example .env.local
# 编辑 .env.local，填入真实值
npm install
npm run check
npx vercel dev
```

打开 `http://localhost:3000/activate.html`。本地测试使用真实 Supabase 测试项目；不要对生产用户库做破坏性测试。

## 5. 测试两台设备限制

1. 创建并 `issued` 一枚激活码，在 `/activate.html` 创建测试账号。
2. 普通浏览器登录，作为设备 A。
3. 无痕窗口或另一浏览器登录，作为设备 B（不同浏览器存储会生成不同 `ksq_device_id`）。
4. 第三种浏览器、另一台电脑或另一个全新浏览器配置文件登录，必须收到：`该账号当前已达到 2 台设备同时在线上限，请退出其他设备后再登录。`
5. 在设备 A 点击右上角退出按钮，再在设备 C 登录，应成功。
6. 可在 SQL Editor 验证：

```sql
select user_id, device_id, created_at, expires_at, revoked_at
from public.app_sessions
order by created_at desc;
```

同一浏览器再次登录会替换该设备的旧 session，不会额外占用一个设备名额。session 默认 30 天过期；退出登录会立即写入 `revoked_at` 并释放名额。
