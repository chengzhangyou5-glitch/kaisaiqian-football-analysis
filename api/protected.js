const fs = require("node:fs");
const path = require("node:path");
const { requireSession } = require("../lib/session");

const FILES = {
  index: ["index.html", "text/html; charset=utf-8"],
  detail: ["detail.html", "text/html; charset=utf-8"],
  history: ["history.html", "text/html; charset=utf-8"],
  search: ["search.html", "text/html; charset=utf-8"],
  components: ["assets/js/components.js", "text/javascript; charset=utf-8"],
  data: ["assets/js/data.js", "text/javascript; charset=utf-8"]
};

module.exports = async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.statusCode = 405;
    return res.end("Method Not Allowed");
  }
  const session = await requireSession(req);
  if (!session) {
    if (req.query.file === "index" || ["detail", "history", "search"].includes(req.query.file)) {
      const nextPath = req.query.file === "index" ? "/" : `/${req.query.file}.html`;
      res.statusCode = 302;
      res.setHeader("Location", `/login.html?next=${encodeURIComponent(nextPath)}`);
      return res.end();
    }
    res.statusCode = 401;
    res.setHeader("Cache-Control", "no-store");
    return res.end("Unauthorized");
  }

  let selected = FILES[req.query.file];
  if (req.query.file === "pdf" && /^[a-z0-9-]+-analysis\.pdf$/.test(req.query.path || "")) {
    selected = [`output/pdf/${req.query.path}`, "application/pdf"];
  }
  if (!selected) { res.statusCode = 404; return res.end("Not Found"); }
  const absolute = path.join(process.cwd(), selected[0]);
  if (!fs.existsSync(absolute)) { res.statusCode = 404; return res.end("Not Found"); }
  res.setHeader("Content-Type", selected[1]);
  res.setHeader("Cache-Control", "private, no-store");
  if (req.method === "HEAD") return res.end();
  fs.createReadStream(absolute).pipe(res);
};
