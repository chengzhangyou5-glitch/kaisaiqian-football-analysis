const { requireSession } = require("../../lib/session");
const { json, method } = require("../../lib/http");

module.exports = async function handler(req, res) {
  if (!method(req, res, "GET")) return;
  const session = await requireSession(req);
  if (!session) return json(res, 401, { authenticated: false });
  json(res, 200, { authenticated: true, expiresAt: session.expires_at });
};
