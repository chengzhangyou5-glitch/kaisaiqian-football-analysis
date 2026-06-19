const crypto = require("node:crypto");
const { getAdminSupabase } = require("../../lib/supabase");
const { sha256 } = require("../../lib/session");
const { json, readJson, method } = require("../../lib/http");

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(req, res) {
  if (!method(req, res, "POST")) return;
  try {
    const { email = "", password = "", activationCode = "" } = await readJson(req);
    const normalizedEmail = String(email).trim().toLowerCase();
    const normalizedCode = String(activationCode).trim().toUpperCase();
    if (!EMAIL.test(normalizedEmail)) return json(res, 400, { error: "请输入有效邮箱地址" });
    if (String(password).length < 8) return json(res, 400, { error: "密码至少需要 8 位" });
    if (!normalizedCode) return json(res, 400, { error: "请输入激活码" });

    const admin = getAdminSupabase();
    const codeHash = sha256(normalizedCode);
    const { data: code, error: codeError } = await admin.from("activation_codes")
      .select("id,expires_at")
      .eq("code_hash", codeHash)
      .eq("status", "issued")
      .maybeSingle();
    if (codeError) return json(res, 500, { error: "激活码校验失败，请稍后重试" });
    if (!code || (code.expires_at && new Date(code.expires_at).getTime() <= Date.now())) {
      if (code?.id) await admin.from("activation_codes").update({ status: "expired" }).eq("id", code.id);
      return json(res, 400, { error: "激活码无效、未发放、已使用或已过期" });
    }

    const { data: created, error: createError } = await admin.auth.admin.createUser({
      email: normalizedEmail,
      password: String(password),
      email_confirm: true,
      user_metadata: { signup_source: "activation_code" }
    });
    if (createError) {
      const duplicate = /already|registered|exists/i.test(createError.message);
      return json(res, duplicate ? 409 : 400, { error: duplicate ? "该邮箱已注册，请直接登录" : "账号创建失败，请检查邮箱和密码" });
    }

    const userId = created.user.id;
    const { data: redeemedCodeId, error: redeemError } = await admin.rpc("redeem_activation_code", {
      p_code_hash: codeHash,
      p_user_id: userId
    });
    if (redeemError || !redeemedCodeId) {
      await admin.auth.admin.deleteUser(userId);
      return json(res, 400, { error: redeemError ? "激活码校验失败，请稍后重试" : "激活码无效、未发放、已使用或已过期" });
    }

    json(res, 201, { ok: true, message: "账号创建成功，请登录" });
  } catch (error) {
    console.error("register_failed", crypto.randomUUID(), error);
    json(res, 500, { error: "注册暂时不可用，请稍后重试" });
  }
};
