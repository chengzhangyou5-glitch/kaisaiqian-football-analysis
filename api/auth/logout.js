const { getAdminSupabase } = require("../../lib/supabase");
const { decodeCookie, clearCookie } = require("../../lib/session");
const { json, method } = require("../../lib/http");

module.exports = async function handler(req, res) {
  if (!method(req, res, "POST")) return;
  const cookie = decodeCookie(req);
  if (cookie?.sid) {
    const { error } = await getAdminSupabase().rpc("close_app_session", { p_session_id: cookie.sid });
    if (error) {
      console.error("logout_revoke_failed", error);
      return json(res, 503, { error: "退出失败，请稍后重试" });
    }
  }
  res.setHeader("Set-Cookie", clearCookie(req));
  json(res, 200, { ok: true });
};
