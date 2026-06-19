function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

async function readJson(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try { return JSON.parse(req.body); } catch { throw new Error("invalid_json"); }
  }
  let raw = "";
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 16_384) throw new Error("request_too_large");
  }
  try { return JSON.parse(raw || "{}"); } catch { throw new Error("invalid_json"); }
}

function method(req, res, expected) {
  if (req.method === expected) return true;
  res.setHeader("Allow", expected);
  json(res, 405, { error: "请求方法不支持" });
  return false;
}

module.exports = { json, readJson, method };
