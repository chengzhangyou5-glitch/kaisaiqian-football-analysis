const REQUIRED_ENV = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  "SUPABASE_SECRET_KEY",
  "SESSION_SECRET"
];

function getConfig() {
  const missing = REQUIRED_ENV.filter((name) => !process.env[name]);
  if (missing.length) throw new Error(`缺少环境变量：${missing.join(", ")}`);
  if (process.env.SESSION_SECRET.length < 32) throw new Error("SESSION_SECRET 至少需要 32 个字符");
  return {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    publishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    secretKey: process.env.SUPABASE_SECRET_KEY,
    sessionSecret: process.env.SESSION_SECRET
  };
}

module.exports = { getConfig, REQUIRED_ENV };
