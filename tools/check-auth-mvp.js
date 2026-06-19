const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const jsFiles = [
  "api/auth/register.js", "api/auth/login.js", "api/auth/logout.js", "api/auth/me.js",
  "api/protected.js", "lib/config.js", "lib/http.js", "lib/session.js", "lib/supabase.js",
  "assets/js/auth.js"
];
for (const file of jsFiles) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  // Parse CommonJS/server files and the standalone browser IIFE without executing them.
  new Function(source);
}

const vercel = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));
const routes = JSON.stringify(vercel.routes);
for (const protectedPath of ["index", "detail", "history", "search", "components", "data", "output/pdf"]) {
  assert.match(routes, new RegExp(protectedPath.replace("/", "\\/")), `${protectedPath} must be protected`);
}

const sql = fs.readFileSync(path.join(root, "supabase/auth_mvp.sql"), "utf8");
for (const state of ["available", "issued", "used", "expired"]) assert.match(sql, new RegExp(`'${state}'`));
assert.match(sql, /v_active_count >= 2/);
assert.match(sql, /pg_advisory_xact_lock/);
assert.match(fs.readFileSync(path.join(root, "api/auth/login.js"), "utf8"), /该账号当前已达到 2 台设备同时在线上限，请退出其他设备后再登录。/);

const envExample = fs.readFileSync(path.join(root, ".env.example"), "utf8");
for (const envName of ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY", "SUPABASE_SECRET_KEY", "SESSION_SECRET"]) {
  assert.match(envExample, new RegExp(`^${envName}=`, "m"));
}

process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_test";
process.env.SUPABASE_SECRET_KEY = "sb_secret_test";
process.env.SESSION_SECRET = "test-secret-that-is-longer-than-thirty-two-characters";
const { makeCookie, decodeCookie } = require(path.join(root, "lib/session"));
const request = { headers: {} };
const cookie = makeCookie("11111111-1111-4111-8111-111111111111", "token-value", request).split(";")[0];
assert.equal(decodeCookie({ headers: { cookie } }).sid, "11111111-1111-4111-8111-111111111111");
assert.equal(decodeCookie({ headers: { cookie: `${cookie}tampered` } }), null);

console.log("Auth MVP static checks passed.");
