const crypto = require("node:crypto");
const { getPublicSupabase, getAdminSupabase } = require("../../lib/supabase");
const { SESSION_SECONDS, sha256, makeCookie } = require("../../lib/session");
const { json, readJson, method } = require("../../lib/http");

const LIMIT_MESSAGE = "该账号当前已达到 2 台设备同时在线上限，请退出其他设备后再登录。";

module.exports = async function handler(req, res) {
  if (!method(req, res, "POST")) return;
  try {
    const { email = "", password = "", deviceId = "" } = await readJson(req);
    const normalizedDeviceId = String(deviceId).trim();
    if (!normalizedDeviceId || normalizedDeviceId.length > 100) return json(res, 400, { error: "无法识别当前设备，请刷新页面后重试" });

    const { data: auth, error: authError } = await getPublicSupabase().auth.signInWithPassword({
      email: String(email).trim().toLowerCase(),
      password: String(password)
    });
    if (authError || !auth.user) return json(res, 401, { error: "账号或密码不正确" });

    // Supabase Auth 中存在、但没有成功核销激活码的用户不能进入客户站。
    const admin = getAdminSupabase();
    const { data: activation, error: activationError } = await admin.from("activation_codes")
      .select("id")
      .eq("used_by", auth.user.id)
      .eq("status", "used")
      .maybeSingle();
    if (activationError) {
      console.error("activation_lookup_failed", activationError);
      return json(res, 500, { error: "登录暂时不可用，请稍后重试" });
    }
    if (!activation) return json(res, 403, { error: "该账号尚未通过有效激活码激活" });

    const sessionId = crypto.randomUUID();
    const sessionToken = crypto.randomBytes(32).toString("base64url");
    const expiresAt = new Date(Date.now() + SESSION_SECONDS * 1000).toISOString();
    const userAgent = String(req.headers["user-agent"] || "unknown").slice(0, 500);
    const { error: sessionError } = await admin.rpc("create_app_session", {
      p_id: sessionId,
      p_user_id: auth.user.id,
      p_token_hash: sha256(sessionToken),
      p_device_id: normalizedDeviceId,
      p_user_agent: userAgent,
      p_expires_at: expiresAt
    });
    if (sessionError) {
      if (/device_limit_reached/.test(sessionError.message)) return json(res, 409, { error: LIMIT_MESSAGE, code: "DEVICE_LIMIT_REACHED" });
      console.error("session_create_failed", sessionError);
      return json(res, 500, { error: "登录暂时不可用，请稍后重试" });
    }

    res.setHeader("Set-Cookie", makeCookie(sessionId, sessionToken, req));
    json(res, 200, { ok: true });
  } catch (error) {
    console.error("login_failed", error);
    json(res, 500, { error: "登录暂时不可用，请稍后重试" });
  }
};
