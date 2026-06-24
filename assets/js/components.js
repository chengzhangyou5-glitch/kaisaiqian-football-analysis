import { matches, historyRecords, metrics } from "./data.js?v=20260625-rollover";

const flag = (team) => `<img class="team-flag" src="https://flagcdn.com/w160/${team.code}.png" alt="${team.name}队旗" width="80" height="54">`;
const icon = (name) => `<i class="ri-${name}" aria-hidden="true"></i>`;
const teamCodes = {
  "墨西哥":"mx", "南非":"za", "韩国":"kr", "捷克":"cz", "加拿大":"ca", "波黑":"ba",
  "卡塔尔":"qa", "瑞士":"ch", "美国":"us", "巴拉圭":"py", "巴西":"br", "摩洛哥":"ma",
  "海地":"ht", "苏格兰":"gb-sct", "澳大利亚":"au", "土耳其":"tr", "德国":"de", "库拉索":"cw",
  "荷兰":"nl", "日本":"jp", "科特迪瓦":"ci", "厄瓜多尔":"ec", "瑞典":"se", "突尼斯":"tn",
  "西班牙":"es", "佛得角":"cv", "比利时":"be", "埃及":"eg", "沙特阿拉伯":"sa", "乌拉圭":"uy",
  "伊朗":"ir", "新西兰":"nz", "法国":"fr", "塞内加尔":"sn", "伊拉克":"iq", "挪威":"no",
  "阿根廷":"ar", "阿尔及利亚":"dz", "奥地利":"at", "约旦":"jo", "加纳":"gh", "巴拿马":"pa",
  "英格兰":"gb-eng", "克罗地亚":"hr", "葡萄牙":"pt", "刚果（金）":"cd", "乌兹别克斯坦":"uz", "哥伦比亚":"co"
};
const pdfLink = (id, label) => `<a class="icon-button download-button" href="output/pdf/${id}-analysis.pdf" download="${label}-分析.pdf" aria-label="下载${label} PDF">${icon("file-download-line")}<span>下载 PDF</span></a>`;

export function pageIntro(kicker, title, description, aside = "") {
  return `<header class="page-intro">
    <div><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${description}</p></div>${aside}
  </header>`;
}

export function matchCard(match, featured = false) {
  return `<article class="match-card ${featured ? "is-featured" : ""}" data-open-match="${match.id}" tabindex="0" role="link" aria-label="查看${match.home.name}对${match.away.name}完整分析">
    <div class="card-topline"><span class="competition-pill">${icon("football-line")}${match.competition}</span><time>${icon("time-line")}${match.time}</time></div>
    <div class="teams-row">
      <div class="team">${flag(match.home)}<strong>${match.home.name}</strong></div>
      <div class="versus"><b>VS</b><small>模型更新 ${match.updated}</small></div>
      <div class="team">${flag(match.away)}<strong>${match.away.name}</strong></div>
    </div>
    <div class="compact-trend" aria-label="胜平负趋势：主胜${match.trend[0]}%，平局${match.trend[1]}%，客胜${match.trend[2]}%">
      <div class="trend-labels"><span>主胜 <b>${match.trend[0]}%</b></span><span>平 <b>${match.trend[1]}%</b></span><span>客胜 <b>${match.trend[2]}%</b></span></div>
      <div class="stacked-bar"><i style="width:${match.trend[0]}%"></i><i style="width:${match.trend[1]}%"></i><i style="width:${match.trend[2]}%"></i></div>
    </div>
    <div class="quick-stats"><div><span>首选比分路径</span><strong>${match.scores.slice(0, 2).join(" / ")}</strong></div><div><span>总进球区间</span><strong>${match.goals} 球</strong></div></div>
    <div class="conclusion-line">${icon("lightbulb-flash-line")}<p>${match.conclusion}</p></div>
    <div class="risk-line"><span>风险等级</span><b class="risk-badge ${match.riskTone}">${match.risk}<i></i></b></div>
    <button class="primary-button card-button" type="button" data-open-match="${match.id}">查看完整分析 ${icon("arrow-right-line")}</button>
  </article>`;
}

function trendPanel(title, labels, values, note) {
  const max = Math.max(...values);
  return `<section class="detail-panel trend-panel"><h2>${title}</h2>
    <div class="bar-list">${values.map((value, i) => `<div class="bar-row"><div><span>${labels[i]}</span><b class="${value === max ? "is-strong" : ""}">${value}%</b></div><div class="bar-track"><i class="${value === max ? "is-strong" : ""}" style="width:${value}%"></i></div></div>`).join("")}</div>
    <p class="panel-note">${note}</p></section>`;
}

function directionMeta(match) {
  const directions = [
    { label: `${match.home.name}胜`, short: "主胜", value: match.trend[0] },
    { label: "平局", short: "平局", value: match.trend[1] },
    { label: `${match.away.name}胜`, short: "客胜", value: match.trend[2] }
  ].sort((a, b) => b.value - a.value);
  return { main: directions[0], second: directions[1], lead: directions[0].value - directions[1].value };
}

function directionSummary(match) {
  const direction = directionMeta(match);
  const coreGoals = match.model.goalDistribution.filter(item => item.core).map(item => item.label).join("、");
  const handicapMax = Math.max(...match.handicap.trend);
  const handicapDirection = ["让胜", "让平", "让负"][match.handicap.trend.indexOf(handicapMax)];
  return `<section class="direction-summary" aria-label="本场核心摘要">
    <div class="direction-main"><span>${icon("focus-3-line")}本场主方向</span><strong>${direction.main.label}</strong><small>${direction.main.value}% · 当前最高权重</small></div>
    <div class="summary-item"><span>方向置信度</span><b>${match.model.confidence}</b><small>平局风险 ${match.model.drawRisk}</small></div>
    <div class="summary-item"><span>领先幅度</span><b>${direction.lead}%</b><small>${direction.main.short}领先${direction.second.short}</small></div>
    <div class="summary-item"><span>比分主路径</span><b>${match.scores.slice(0, 2).join(" / ")}</b><small>首选双路径</small></div>
    <div class="summary-item"><span>总进球区间</span><b>${match.goals}</b><small>${coreGoals}为核心</small></div>
    <div class="summary-item"><span>让胜平负</span><b>${handicapDirection}</b><small>主队 ${match.handicap.line > 0 ? "+" : ""}${match.handicap.line} 球 · ${handicapMax}%</small></div>
    <div class="summary-item risk"><span>风险等级</span><b>${match.risk}</b><small>${match.model.riskTriggers[0]}</small></div>
  </section>`;
}

function modelEvidencePanel(match, historical = false) {
  return `<section class="detail-panel model-evidence-panel"><div class="model-panel-head"><div><span>${historical ? "HISTORICAL MODEL" : "MODEL CONSENSUS"}</span><h2>模型一致度</h2></div><strong>${match.model.consistency}%</strong></div>
    <div class="factor-list">${match.model.factors.map(item => `<div class="factor-row"><div><span>${item.label}</span><b>${item.value}</b></div><div class="factor-track"><i style="width:${item.value}%"></i></div></div>`).join("")}</div>
  </section>`;
}

function scorePathPanel(match, historical = false) {
  const groups = [
    { label: "首选", start: 0, className: "primary" },
    { label: "次选", start: 2, className: "secondary" },
    { label: "延伸", start: 4, className: "extension" }
  ];
  return `<section class="detail-panel score-panel score-path-panel"><div class="score-panel-head"><div><span>6 条模型路径</span><h2>比分路径</h2></div><small>首选 2 · 次选 2 · 延伸 2</small></div>
    <div class="score-path-groups">${groups.map(group => `<div class="score-path-group ${group.className}"><strong>${group.label}</strong><div>${match.scores.slice(group.start, group.start + 2).map((score, offset) => {
      const index = group.start + offset;
      return `<article class="score-path-card"><div><b>${score}</b><span>${match.model.scoreWeights[index]}%</span></div><small>${match.model.scoreNotes[index]}</small></article>`;
    }).join("")}</div></div>`).join("")}</div>
    <p class="panel-note">${historical ? "前两项为原始锁定比分，后四项依据原赛前方向结构化扩展，仅用于统一呈现。" : "概率为单一比分权重，六条路径用于覆盖主方向、平局保护与冷门风险。"}</p>
  </section>`;
}

function historyTags(record) {
  return [...record.tags, record.handicap.hit ? "让球命中" : "让球未中"];
}

function historyValidationItems(record) {
  return [
    { key: "direction", label: "赛前方向", value: record.direction, hit: record.status === "hit" },
    { key: "score", label: "比分路径", value: record.scores, hit: record.tags.includes("比分命中") },
    { key: "goals", label: "进球区间", value: record.goals, hit: record.tags.includes("进球命中") },
    { key: "handicap", label: `让胜平负 · 主队 ${record.handicap.line > 0 ? "+" : ""}${record.handicap.line}`, value: record.handicap.prediction, detail: `实际 ${record.handicap.actual}`, hit: record.handicap.hit }
  ];
}

function historyValidationCell(item) {
  return `<div class="history-data-cell is-${item.hit ? "hit" : "miss"}"><span>${item.label}<em>${item.hit ? "中" : "未中"}</em></span><strong>${item.value}</strong>${item.detail ? `<small>${item.detail}</small>` : ""}</div>`;
}

function renderTags(tags, extraClass = "") {
  return `<div class="tag-row ${extraClass}">${tags.map(tag => `<span class="${tag.includes("未") ? "miss" : tag.includes("待") ? "pending" : ""}">${tag}</span>`).join("")}</div>`;
}

export function upcomingPage() {
  return `<div class="page page-upcoming">
    ${pageIntro("MATCH INTELLIGENCE", "待赛分析", `已更新 ${matches.length} 场 · 开赛前持续更新`, `<div class="update-chip">${icon("pulse-line")}模型状态正常</div>`)}
    <div class="match-grid">${matches.map((m, i) => matchCard(m, i === 0)).join("")}</div>
    <section class="trust-strip"><div>${icon("shield-check-line")}<span><b>只做赛前记录</b><small>开赛后锁定，历史可回看</small></span></div><div>${icon("focus-3-line")}<span><b>结论先行</b><small>不懂球也能快速扫读</small></span></div><div>${icon("database-2-line")}<span><b>模型持续更新</b><small>时间与版本清楚可见</small></span></div></section>
  </div>`;
}

export function detailPage(id) {
  const match = matches.find((item) => item.id === id) || matches[0];
  return `<div class="page page-detail">
    <div class="detail-toolbar"><button class="text-button" type="button" data-action="back">${icon("arrow-left-line")}返回待赛</button><span>比赛详情</span>${pdfLink(match.id, `${match.home.name}-${match.away.name}`)}</div>
    <section class="match-hero">
      <div class="card-topline"><span class="competition-pill">${icon("football-line")}${match.competition}</span><span class="risk-inline ${match.riskTone}">${icon("alarm-warning-line")}风险 ${match.risk}</span></div>
      <div class="teams-row large"><div class="team">${flag(match.home)}<strong>${match.home.name}</strong></div><div class="versus"><b>VS</b><small>${match.time}</small></div><div class="team">${flag(match.away)}<strong>${match.away.name}</strong></div></div>
      <p class="updated-line">${icon("refresh-line")}模型更新：${match.updated}</p>
    </section>
    ${directionSummary(match)}
    <div class="detail-layout">
      <div class="detail-primary">
        <section class="detail-panel conclusion-panel"><h2>${icon("line-chart-line")}本场结论</h2><p>${match.conclusion}</p></section>
        ${scorePathPanel(match)}
        ${trendPanel("胜平负趋势", ["主胜", "平局", "客胜"], match.trend, "主路径更明确，但平局仍然需要留意。")}
        ${trendPanel(`让胜平负趋势 · 主队 ${match.handicap.line > 0 ? "+" : ""}${match.handicap.line}`, ["让胜", "让平", "让负"], match.handicap.trend, "模型让球线采用主队视角，用于比较穿线、走到让平或未穿线的结果路径。")}
        ${modelEvidencePanel(match)}
      </div>
      <aside class="detail-secondary">
        <section class="detail-panel goals-panel"><h2>总进球区间</h2><div class="goals-value"><strong>${match.goals}</strong><div><span>三档区间：已启用</span><span>概率分布：已重算</span></div></div><div class="goal-scale">${match.model.goalDistribution.map(item => `<i class="${item.core ? "active" : ""}"></i>`).join("")}</div><div class="goal-distribution">${match.model.goalDistribution.map(item => `<span class="${item.core ? "core" : ""}"><b>${item.label}</b><small>${item.weight}%${item.core ? " · 核心" : ""}</small></span>`).join("")}</div><p>三档概率用于展示比赛总进球的主要分布与延伸风险。</p></section>
        <section class="detail-panel risk-panel"><h2>${icon("shield-line")}风险触发条件（${match.risk}）</h2><ul>${match.model.riskTriggers.map(note => `<li>${icon("alarm-warning-line")}${note}</li>`).join("")}</ul></section>
        <section class="detail-panel why-panel"><h2>${icon("brain-line")}为什么这样看</h2><p>${match.why}</p></section>
      </aside>
    </div>
  </div>`;
}

export function historyDetailPage(id) {
  const record = historyRecords.find((item) => item.id === id) || historyRecords[0];
  const report = record.report;
  const tags = historyTags(record);
  const home = { ...report.home, code: teamCodes[report.home.name] || "un" };
  const away = { ...report.away, code: teamCodes[report.away.name] || "un" };
  const actualGoals = record.result.split("-").map(Number).reduce((sum, value) => sum + value, 0);
  return `<div class="page page-detail page-history-detail">
    <div class="detail-toolbar"><button class="text-button" type="button" data-action="back-history">${icon("arrow-left-line")}返回准确率</button><span>历史预测详情</span>${pdfLink(record.id, `${home.name}-${away.name}`)}</div>
    <section class="match-hero history-match-hero">
      <div class="card-topline"><span class="competition-pill">${icon("football-line")}${record.competition}</span><span class="history-record-pill">已完赛记录</span></div>
      <div class="teams-row large"><div class="team">${flag(home)}<strong>${home.name}</strong></div><div class="versus history-result"><b>${record.result}</b><small>实际结果</small></div><div class="team">${flag(away)}<strong>${away.name}</strong></div></div>
      <p class="updated-line">${icon("shield-check-line")}赛前记录已锁定 · ${record.date}</p>
    </section>
    ${directionSummary(report)}
    <div class="detail-layout">
      <div class="detail-primary">
        <section class="detail-panel conclusion-panel"><h2>${icon("line-chart-line")}本场结论</h2><p>${report.conclusion}</p></section>
        ${scorePathPanel(report, true)}
        ${trendPanel("胜平负趋势", ["主胜", "平局", "客胜"], report.trend, "保留赛前主方向与平局保护，不在趋势卡中展示赛后对错。")}
        ${trendPanel(`让胜平负趋势 · 主队 ${report.handicap.line > 0 ? "+" : ""}${report.handicap.line}`, ["让胜", "让平", "让负"], report.handicap.trend, "模型让球线采用主队视角，赛果对照统一收纳在验证标签中。")}
        ${modelEvidencePanel(report, true)}
      </div>
      <aside class="detail-secondary">
        <section class="detail-panel goals-panel"><h2>总进球区间</h2><div class="goals-value"><strong>${report.goals}</strong><div><span>赛前三档核心区间</span><span>实际进球：${actualGoals} 球</span></div></div><div class="goal-scale">${report.model.goalDistribution.map(item => `<i class="${item.core ? "active" : ""}"></i>`).join("")}</div><div class="goal-distribution">${report.model.goalDistribution.map(item => `<span class="${item.core ? "core" : ""}"><b>${item.label}</b><small>${item.weight}%${item.core ? " · 核心" : ""}</small></span>`).join("")}</div><p>实际赛果为 ${record.result}，具体对照结果统一查看验证标签。</p></section>
        <section class="detail-panel validation-summary"><h2>${icon("shield-check-line")}验证标签</h2>${renderTags(tags, "large-tags")}</section>
        <section class="detail-panel why-panel"><h2>${icon("brain-line")}复盘说明</h2><p>${report.why}</p></section>
      </aside>
    </div>
  </div>`;
}

function historyCard(record) {
  const validation = historyValidationItems(record);
  const hits = validation.filter(item => item.hit).length;
  const overall = hits === validation.length ? "perfect" : hits <= 1 ? "low" : "mixed";
  return `<article class="history-card is-${overall}" data-history-id="${record.id}">
    <div class="history-card-head"><div><span>${record.competition} · ${record.date}</span><h3>${record.match}</h3></div><div class="history-hit-summary is-${overall}"><span>命中</span><b>${hits}/${validation.length}</b><div aria-label="四项验证中 ${hits} 项命中">${validation.map(item => `<i class="${item.hit ? "hit" : "miss"}"></i>`).join("")}</div></div></div>
    <div class="history-core"><div class="history-data-cell actual"><span>实际结果</span><strong>${record.result}</strong></div>${validation.map(historyValidationCell).join("")}</div>
    <div class="history-expand" hidden><p>${record.report.conclusion}</p><button class="outline-button" type="button" data-open-history="${record.id}">查看完整报告 ${icon("arrow-right-line")}</button></div>
  </article>`;
}

export function historyPage() {
  return `<div class="page page-history">
    ${pageIntro("VERIFICATION CENTER", "历史验证中心", `近 ${historyRecords.length} 场赛前分析表现 · 持续更新`)}
    <section class="metric-hero"><div class="metric-main"><span>近 ${historyRecords.length} 场胜平负方向一致率</span><strong>${metrics.direction}%</strong><small>基于已完赛场次统计</small></div><div class="metric-grid"><div><span>比分路径参考率</span><b>${metrics.score}%</b><small>${Math.round(metrics.score * historyRecords.length / 100)}/${historyRecords.length} 场比分覆盖</small></div><div><span>总进球区间参考率</span><b>${metrics.goals}%</b><small>${Math.round(metrics.goals * historyRecords.length / 100)}/${historyRecords.length} 场区间覆盖</small></div><div><span>让胜平负参考率</span><b>${metrics.handicap}%</b><small>${Math.round(metrics.handicap * metrics.handicapSamples / 100)}/${metrics.handicapSamples} 场方向覆盖</small></div></div></section>
    <section class="history-section"><div class="section-heading"><div><p class="eyebrow">RECORDS</p><h2>历史场次明细</h2></div><div class="history-heading-meta"><div class="history-legend"><span><i class="hit"></i>命中</span><span><i class="miss"></i>未中</span></div><span>${historyRecords.length} 场记录</span></div></div><div class="history-list">${historyRecords.map(historyCard).join("")}</div></section>
  </div>`;
}

export function searchPage(query = "") {
  const normalized = query.trim().toLowerCase();
  const filtered = normalized ? historyRecords.filter(r => `${r.match}${r.date}${r.competition}`.toLowerCase().includes(normalized)) : historyRecords.slice(0, 4);
  return `<div class="page page-search">
    ${pageIntro("MATCH ARCHIVE", "搜索历史场次", "输入球队、赛事或日期，回看当时的完整判断")}
    <div class="search-box">${icon("search-line")}<input id="history-search" type="search" value="${query}" placeholder="输入球队、赛事或日期" autocomplete="off"><kbd>ESC</kbd></div>
    <div class="search-meta"><span>${query ? `找到 ${filtered.length} 场相关记录` : "最近查看"}</span>${query ? `<button type="button" data-action="clear-search">清除搜索</button>` : ""}</div>
    <div class="search-results">${filtered.length ? filtered.map(record => `<article class="search-result">
      <div class="search-result-top"><div><span>${record.competition} · ${record.date}</span><h2>${record.match}</h2></div><b class="history-record-pill">已完赛</b></div>
      <div class="result-flow"><div><span>赛前方向</span><strong>${record.direction}</strong></div>${icon("arrow-right-line")}<div><span>实际结果</span><strong>${record.result}</strong></div></div>
      <div class="search-handicap-line"><span>让胜平负 · 主队 ${record.handicap.line > 0 ? "+" : ""}${record.handicap.line}</span><strong>${record.handicap.prediction}</strong><small>实际 ${record.handicap.actual}</small></div>
      <p>${record.report.conclusion}</p><button class="outline-button" type="button" data-open-history="${record.id}">查看完整报告 ${icon("arrow-right-line")}</button>
    </article>`).join("") : `<div class="empty-state">${icon("history-line")}<h2>没有找到相关场次</h2><p>换一个球队名、赛事或日期试试。</p></div>`}</div>
  </div>`;
}

export function noticeModal() {
  return `<div class="modal-icon">${icon("notification-3-line")}</div><p class="eyebrow">LIVE UPDATE</p><h2 id="modal-title">开赛前持续更新</h2><p>待赛场次会根据最新公开足球情报更新模型时间。比赛开始后，分析内容将锁定并进入历史验证。</p><button class="primary-button" type="button" data-action="close-modal">明白</button>`;
}
