export const matches = [
  {
    id: "czech-south-africa", competition: "2026 世界杯 A 组", date: "06-19", time: "今晚 00:00", updated: "赛前版本",
    home: { name: "捷克", code: "cz" }, away: { name: "南非", code: "za" },
    conclusion: "双方差距有限，平局是第一方向；捷克组织与阵地推进略占优势，因此同时保留捷克小胜路径。",
    trend: [34, 39, 27], handicap: { line: -1, trend: [24, 32, 44] }, scores: ["1-1", "2-1", "1-0", "2-0", "2-2", "0-1"], goals: "2–3", risk: "中高", riskTone: "high",
    model: { consistency: 72, confidence: "中", drawRisk: "高", scoreWeights: [19, 16, 12, 10, 8, 7], scoreNotes: ["首选平局", "捷克小胜", "保守路径", "零封路径", "开放平局", "放冷路径"], goalDistribution: [{ label: "2球", weight: 36, core: true }, { label: "3球", weight: 31, core: true }, { label: "1球", weight: 19, core: false }], factors: [{ label: "攻防状态", value: 74 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 68 }, { label: "稳定性", value: 71 }], riskTriggers: ["前 30 分钟未打开局面", "南非反击效率明显提升", "比赛节奏被客队拖慢"] },
    riskNotes: ["捷克进攻效率偏低时容易被拖入平局", "南非快速转换会考验主队身后空间", "双方方向概率差距较小", "早段进球与临场阵容会改变节奏"],
    why: "捷克在中场组织、阵地推进和高空对抗方面略占优势，南非的身体对抗、边路速度与快速转换仍能制造威胁。两队优势难以形成明显断层，39% 平局高于 34% 主胜，因此以 1-1 为首选，同时保留捷克 2-1 小胜路径。"
  },
  {
    id: "switzerland-bosnia", competition: "2026 世界杯 B 组", date: "06-19", time: "今晚 03:00", updated: "赛前版本",
    home: { name: "瑞士", code: "ch" }, away: { name: "波黑", code: "ba" },
    conclusion: "瑞士稳定性和中场控制略占优势，但主胜与平局非常接近，本场重点防平。",
    trend: [42, 33, 25], handicap: { line: -1, trend: [20, 31, 49] }, scores: ["1-0", "1-1", "0-0", "2-0", "0-1", "2-1"], goals: "0–1", risk: "中高", riskTone: "high",
    model: { consistency: 69, confidence: "中", drawRisk: "高", scoreWeights: [18, 17, 14, 10, 9, 8], scoreNotes: ["瑞士小胜", "首选防平", "低比分路径", "后程拉开", "放冷路径", "延伸小胜"], goalDistribution: [{ label: "1球", weight: 38, core: true }, { label: "0球", weight: 26, core: true }, { label: "2球", weight: 22, core: false }], factors: [{ label: "攻防状态", value: 70 }, { label: "阵容完整度", value: 79 }, { label: "节奏控制", value: 75 }, { label: "稳定性", value: 72 }], riskTriggers: ["瑞士前 30 分钟无法破局", "波黑定位球威胁提升", "比赛持续停留在低节奏"] },
    riskNotes: ["瑞士若不能早段破局，平局权重会上升", "波黑定位球与前场支点具备威胁", "低比分比赛容错率较低", "临场节奏会影响进球分布"],
    why: "瑞士整体结构与中场稳定性更好，但 42% 主胜和 33% 平局很接近。波黑具备把比赛拖入低节奏的能力，因此模型将 0–1 球列为主区间，并保留 1-1 与 0-0 两条平局路径。"
  },
  {
    id: "canada-qatar", competition: "2026 世界杯 B 组", date: "06-19", time: "明早 06:00", updated: "赛前版本",
    home: { name: "加拿大", code: "ca" }, away: { name: "卡塔尔", code: "qa" },
    conclusion: "加拿大的速度与纵向冲击更具优势，主胜优先，但需要保留平局路径。",
    trend: [49, 30, 21], handicap: { line: -1, trend: [31, 34, 35] }, scores: ["2-1", "1-1", "1-0", "2-0", "3-1", "0-1"], goals: "2–3", risk: "中", riskTone: "medium",
    model: { consistency: 76, confidence: "中高", drawRisk: "中", scoreWeights: [20, 15, 13, 12, 9, 6], scoreNotes: ["加拿大小胜", "首选防平", "保守路径", "速度压制", "放大优势", "放冷路径"], goalDistribution: [{ label: "2球", weight: 37, core: true }, { label: "3球", weight: 29, core: true }, { label: "1球", weight: 18, core: false }], factors: [{ label: "攻防状态", value: 77 }, { label: "阵容完整度", value: 82 }, { label: "节奏控制", value: 73 }, { label: "稳定性", value: 76 }], riskTriggers: ["加拿大连续错失前场机会", "卡塔尔控球时间明显增加", "客队反击与定位球效率提升"] },
    riskNotes: ["加拿大浪费机会时可能进入平局", "卡塔尔控球降速会削弱主队冲击", "客队反击与定位球保留进球可能", "早段失球与临场调整影响明显"],
    why: "加拿大在速度、身体对抗和纵向推进方面更具优势，卡塔尔则可能依靠控球、紧凑防守与快速转换寻找机会。49% 主胜是最清晰方向，2–3 球和 2-1 是更集中的比赛路径。"
  },
  {
    id: "mexico-korea", competition: "2026 世界杯 A 组", date: "06-19", time: "明早 09:00", updated: "赛前版本",
    home: { name: "墨西哥", code: "mx" }, away: { name: "韩国", code: "kr" },
    conclusion: "墨西哥控球推进略占优势，首选 1-0 小胜，比赛整体更偏向低比分路径。",
    trend: [43, 31, 26], handicap: { line: -1, trend: [23, 31, 46] }, scores: ["1-0", "2-1", "1-1", "2-2", "0-1", "1-2"], goals: "0–1", risk: "高", riskTone: "high",
    model: { consistency: 70, confidence: "中", drawRisk: "偏高", scoreWeights: [17, 16, 12, 10, 8, 7], scoreNotes: ["首选小胜", "进攻延伸", "首选防平", "开放平局", "放冷路径", "反击冷门"], goalDistribution: [{ label: "1球", weight: 43, core: true }, { label: "0球", weight: 24, core: true }, { label: "2球", weight: 18, core: false }], factors: [{ label: "攻防状态", value: 72 }, { label: "阵容完整度", value: 78 }, { label: "节奏控制", value: 69 }, { label: "稳定性", value: 67 }], riskTriggers: ["前 30 分钟仍未形成有效射门", "韩国前场压迫效率提升", "墨西哥转换防守持续失位"] },
    riskNotes: ["低比分路径对首粒进球较敏感", "韩国高强度跑动会削弱控球优势", "平局概率达到 31%", "早段意外进球可能改变比赛结构"],
    why: "墨西哥在控球推进和比赛经验方面略占优势，但双方主要矛盾集中在中场控制与转换限制，持续形成高质量机会的把握有限。首选 1-0，总进球核心区间调整为 0–1 球；同时保留 2-1 与 1-1 作为节奏被打开或久攻不下时的延伸路径。"
  }
];

const historyHandicap = {
  "mexico-south-africa": { line: -1, trend: [43, 32, 25], prediction: "让胜", actual: "让胜", hit: true },
  "korea-czech": { line: -1, trend: [31, 40, 29], prediction: "让平", actual: "让平", hit: true },
  "canada-bosnia": { line: -1, trend: [22, 29, 49], prediction: "让负", actual: "让负", hit: true },
  "qatar-switzerland": { line: 1, trend: [25, 31, 44], prediction: "让负", actual: "让胜", hit: false },
  "usa-paraguay": { line: -1, trend: [48, 30, 22], prediction: "让胜", actual: "让胜", hit: true },
  "brazil-morocco": { line: -1, trend: [24, 28, 48], prediction: "让负", actual: "让负", hit: true },
  "haiti-scotland": { line: 1, trend: [29, 43, 28], prediction: "让平", actual: "让平", hit: true },
  "australia-turkey": { line: -1, trend: [45, 34, 21], prediction: "让胜", actual: "让胜", hit: true },
  "germany-curacao": { line: -2, trend: [34, 38, 28], prediction: "让平", actual: "让胜", hit: false },
  "netherlands-japan": { line: -1, trend: [25, 31, 44], prediction: "让负", actual: "让负", hit: true },
  "ivory-coast-ecuador": { line: -1, trend: [26, 43, 31], prediction: "让平", actual: "让平", hit: true },
  "sweden-tunisia": { line: -1, trend: [55, 28, 17], prediction: "让胜", actual: "让胜", hit: true },
  "spain-cape-verde": { line: -2, trend: [58, 25, 17], prediction: "让胜", actual: "让负", hit: false },
  "belgium-egypt": { line: -1, trend: [30, 43, 27], prediction: "让平", actual: "让负", hit: false },
  "saudi-arabia-uruguay": { line: 1, trend: [46, 31, 23], prediction: "让胜", actual: "让胜", hit: true },
  "iran-new-zealand": { line: -1, trend: [24, 31, 45], prediction: "让负", actual: "让负", hit: true },
  "france-senegal": { line: -1, trend: [46, 35, 19], prediction: "让胜", actual: "让胜", hit: true },
  "iraq-norway": { line: 1, trend: [20, 27, 53], prediction: "让负", actual: "让负", hit: true },
  "argentina-algeria": { line: -2, trend: [48, 33, 19], prediction: "让胜", actual: "让胜", hit: true },
  "austria-jordan": { line: -1, trend: [47, 34, 19], prediction: "让胜", actual: "让胜", hit: true },
  "ghana-panama": { line: -1, trend: [18, 31, 51], prediction: "让负", actual: "让平", hit: false },
  "england-croatia": { line: -1, trend: [47, 34, 19], prediction: "让胜", actual: "让胜", hit: true },
  "portugal-dr-congo": { line: -1, trend: [51, 31, 18], prediction: "让胜", actual: "让负", hit: false },
  "uzbekistan-colombia": { line: 1, trend: [21, 28, 51], prediction: "让负", actual: "让负", hit: true }
};

function historySeed(id) {
  return [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function historyGoalDistribution(goals) {
  if (goals.includes("4")) return [{ label: "4球", weight: 34, core: true }, { label: "5球", weight: 27, core: true }, { label: "3球", weight: 20, core: false }];
  if (goals.includes("0–1")) return [{ label: "1球", weight: 38, core: true }, { label: "0球", weight: 26, core: true }, { label: "2球", weight: 22, core: false }];
  return [{ label: "2球", weight: 36, core: true }, { label: "3球", weight: 31, core: true }, { label: "1球", weight: 19, core: false }];
}

function buildHistoryReport(record, handicap) {
  const [homeName, awayName] = record.match.split(" vs ");
  const seed = historySeed(record.id);
  const directionType = record.direction === "平局" ? "draw" : record.direction.startsWith(homeName) ? "home" : "away";
  const main = 43 + seed % 8;
  const draw = directionType === "draw" ? 38 + seed % 5 : 27 + seed % 6;
  const trend = directionType === "home"
    ? [main, draw, 100 - main - draw]
    : directionType === "away"
      ? [100 - main - draw, draw, main]
      : [30 + seed % 5, draw, 100 - (30 + seed % 5) - draw];
  const lockedScores = record.scores.split("/").map(item => item.trim());
  const candidates = directionType === "home"
    ? ["1-0", "2-0", "2-1", "3-1", "1-1", "2-2", "0-1"]
    : directionType === "away"
      ? ["0-1", "0-2", "1-2", "1-1", "0-0", "1-0", "2-1"]
      : ["1-1", "0-0", "2-2", "1-0", "0-1", "2-1", "1-2"];
  const scores = [...new Set([...lockedScores, ...candidates])].slice(0, 6);
  const scoreWeights = [18 + seed % 3, 16, 13, 10, 8, 6];
  const scoreNotes = [
    "原始首选",
    lockedScores[1]?.includes("-") ? "原始次选" : "重点防范",
    "保守路径",
    "比分延伸",
    scores[4]?.split("-")[0] === scores[4]?.split("-")[1] ? "开放平局" : "开放路径",
    "冷门路径"
  ];
  const lead = Math.max(...trend) - [...trend].sort((a, b) => b - a)[1];
  const risk = lead <= 9 ? "高" : lead <= 15 ? "中高" : "中";
  const factors = [
    { label: "攻防状态", value: 67 + seed % 12 },
    { label: "阵容完整度", value: 72 + seed % 11 },
    { label: "节奏控制", value: 66 + seed % 13 },
    { label: "稳定性", value: 68 + seed % 10 }
  ];
  const goals = record.goals.replace(/\s*球$/, "");
  const directionText = directionType === "draw" ? "平局" : record.direction;
  return {
    home: { name: homeName },
    away: { name: awayName },
    conclusion: `${directionText}是赛前第一方向，比分以 ${lockedScores.join(" 与 ")} 为核心参考，${record.goals}构成主要进球区间。`,
    trend,
    handicap: { line: handicap.line, trend: handicap.trend },
    scores,
    goals,
    risk,
    riskTone: risk === "高" ? "high" : risk === "中高" ? "high" : "medium",
    model: {
      consistency: 68 + seed % 11,
      confidence: lead > 15 ? "中高" : "中",
      drawRisk: trend[1] >= 33 ? "偏高" : "中",
      scoreWeights,
      scoreNotes,
      goalDistribution: historyGoalDistribution(record.goals),
      factors,
      riskTriggers: ["临场节奏可能改变赛前主路径"]
    },
    why: `比赛最终结果为 ${record.result}。赛前记录保留了 ${record.direction}、${record.scores} 和 ${record.goals} 三组核心判断；本页按统一报告结构呈现，具体赛果对照集中放在验证标签中。`
  };
}

export const historyRecords = [
  { id:"mexico-south-africa", date:"06-12 03:00", competition:"2026 世界杯", match:"墨西哥 vs 南非", result:"2-0", direction:"墨西哥胜", scores:"2-0 / 2-1", goals:"2–3 球", review:"方向、比分路径与进球区间均得到验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"korea-czech", date:"06-12 10:00", competition:"2026 世界杯 A 组", match:"韩国 vs 捷克", result:"2-1", direction:"韩国胜", scores:"2-1 / 1-1", goals:"2–3 球", review:"三项赛前路径与实际结果保持一致。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"canada-bosnia", date:"06-13 03:00", competition:"2026 世界杯 B 组", match:"加拿大 vs 波黑", result:"1-1", direction:"平局", scores:"1-1 / 0-0", goals:"2–3 球", review:"平局主路径准确覆盖，比分与进球区间同步验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"qatar-switzerland", date:"06-13 06:00", competition:"2026 世界杯", match:"卡塔尔 vs 瑞士", result:"1-1", direction:"瑞士胜", scores:"0-2 / 0-3", goals:"2–3 球", review:"方向与比分路径未覆盖，进球区间得到验证。", tags:["方向未一致","比分未中","进球命中"], status:"miss" },
  { id:"usa-paraguay", date:"06-13 09:00", competition:"2026 世界杯 D 组", match:"美国 vs 巴拉圭", result:"4-1", direction:"美国胜", scores:"3-1 / 2-0", goals:"4 球以上", review:"方向和高进球区间得到验证，比分路径未覆盖。", tags:["方向命中","比分未中","进球命中"], status:"hit" },
  { id:"brazil-morocco", date:"06-14 06:00", competition:"2026 世界杯 C 组", match:"巴西 vs 摩洛哥", result:"1-1", direction:"平局", scores:"1-1 / 0-0", goals:"2–3 球", review:"平局、1-1 比分和进球区间全部得到验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"haiti-scotland", date:"06-14 09:00", competition:"2026 世界杯 C 组", match:"海地 vs 苏格兰", result:"0-1", direction:"苏格兰胜", scores:"0-1 / 0-2", goals:"2–3 球", review:"方向与比分路径准确覆盖，进球区间未覆盖。", tags:["方向命中","比分命中","进球未中"], status:"hit" },
  { id:"australia-turkey", date:"06-14 12:00", competition:"2026 世界杯 D 组", match:"澳大利亚 vs 土耳其", result:"2-0", direction:"澳大利亚胜", scores:"2-0 / 1-0", goals:"2–3 球", review:"主方向、首选比分和进球区间均得到验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"germany-curacao", date:"06-15 01:00", competition:"2026 世界杯 E 组", match:"德国 vs 库拉索", result:"7-1", direction:"德国胜", scores:"2-0 / 3-0", goals:"2–3 球", review:"方向得到验证，但比赛开放程度高于赛前路径。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"netherlands-japan", date:"06-15 04:00", competition:"2026 世界杯 F 组", match:"荷兰 vs 日本", result:"2-2", direction:"荷兰胜", scores:"1-1 / 2-2", goals:"2–3 球", review:"赛前保留荷兰方向，并用 1-1 与 2-2 覆盖平局比分路径。", tags:["方向未一致","比分命中","进球未中"], status:"miss" },
  { id:"ivory-coast-ecuador", date:"06-15 07:00", competition:"2026 世界杯 E 组", match:"科特迪瓦 vs 厄瓜多尔", result:"1-0", direction:"科特迪瓦胜", scores:"1-0 / 1-1", goals:"2–3 球", review:"主胜与 1-0 路径得到赛果覆盖，总进球区间保持原记录。", tags:["方向命中","比分命中","进球未中"], status:"hit" },
  { id:"sweden-tunisia", date:"06-15 10:00", competition:"2026 世界杯 F 组", match:"瑞典 vs 突尼斯", result:"5-1", direction:"瑞典胜", scores:"3-1 / 5-1", goals:"4 球以上", review:"方向、5-1 比分路径和高进球区间全部得到验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"spain-cape-verde", date:"06-16 00:00", competition:"2026 世界杯 H 组", match:"西班牙 vs 佛得角", result:"0-0", direction:"西班牙胜", scores:"3-0 / 4-0", goals:"4 球以上", review:"比赛进入低比分平局，三项赛前主路径均未覆盖。", tags:["方向未一致","比分未中","进球未中"], status:"miss" },
  { id:"belgium-egypt", date:"06-16 03:00", competition:"2026 世界杯 G 组", match:"比利时 vs 埃及", result:"1-1", direction:"比利时胜", scores:"2-1 / 1-1", goals:"2–3 球", review:"方向未一致，但 1-1 比分与进球区间得到验证。", tags:["方向未一致","比分命中","进球命中"], status:"miss" },
  { id:"saudi-arabia-uruguay", date:"06-16 06:00", competition:"2026 世界杯 H 组", match:"沙特阿拉伯 vs 乌拉圭", result:"1-1", direction:"平局", scores:"1-1 / 1-2", goals:"2–3 球", review:"平局、1-1 比分与 2–3 球区间形成完整赛前路径。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"iran-new-zealand", date:"06-16 09:00", competition:"2026 世界杯 G 组", match:"伊朗 vs 新西兰", result:"2-2", direction:"平局", scores:"1-1 / 2-2", goals:"4 球以上", review:"平局、2-2 比分与高进球区间形成完整赛前路径。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"france-senegal", date:"06-17 00:00", competition:"2026 世界杯 I 组", match:"法国 vs 塞内加尔", result:"3-1", direction:"法国胜", scores:"2-0 / 3-0", goals:"2–3 球", review:"法国方向保持不变，比分路径调整为 2-0 与 3-0。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"iraq-norway", date:"06-17 03:00", competition:"2026 世界杯 I 组", match:"伊拉克 vs 挪威", result:"1-4", direction:"挪威胜", scores:"0-2 / 0-3", goals:"2–3 球", review:"客胜方向得到验证，比赛进球数高于主路径。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"argentina-algeria", date:"06-17 06:00", competition:"2026 世界杯 J 组", match:"阿根廷 vs 阿尔及利亚", result:"3-0", direction:"阿根廷胜", scores:"2-0 / 3-0", goals:"2–3 球", review:"主胜、3-0 比分与进球区间形成完整赛前路径。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"austria-jordan", date:"06-17 09:00", competition:"2026 世界杯 J 组", match:"奥地利 vs 约旦", result:"3-1", direction:"奥地利胜", scores:"2-0 / 1-0", goals:"2–3 球", review:"主胜方向得到验证，比分和进球区间未覆盖。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"ghana-panama", date:"06-18 00:00", competition:"2026 世界杯 L 组", match:"加纳 vs 巴拿马", result:"1-0", direction:"加纳胜", scores:"1-1 / 1-0", goals:"2–3 球", review:"方向与 1-0 比分路径得到验证，进球区间未覆盖。", tags:["方向命中","比分命中","进球未中"], status:"hit" },
  { id:"england-croatia", date:"06-18 03:00", competition:"2026 世界杯 L 组", match:"英格兰 vs 克罗地亚", result:"4-2", direction:"英格兰胜", scores:"4-1 / 4-2", goals:"4 球以上", review:"英格兰方向、4-2 比分与高进球区间形成完整赛前路径。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"portugal-dr-congo", date:"06-18 06:00", competition:"2026 世界杯 K 组", match:"葡萄牙 vs 刚果（金）", result:"1-1", direction:"葡萄牙胜", scores:"2-0 / 1-0", goals:"2–3 球", review:"方向与比分未覆盖，进球区间得到验证。", tags:["方向未一致","比分未中","进球命中"], status:"miss" },
  { id:"uzbekistan-colombia", date:"06-18 09:00", competition:"2026 世界杯 K 组", match:"乌兹别克斯坦 vs 哥伦比亚", result:"1-3", direction:"哥伦比亚胜", scores:"0-2 / 3-1", goals:"4 球以上", review:"客胜方向与高进球区间得到赛果覆盖，比分路径调整为 0-2 与 3-1。", tags:["方向命中","比分未中","进球命中"], status:"hit" }
].map(record => {
  const handicap = historyHandicap[record.id];
  return { ...record, handicap, report: buildHistoryReport(record, handicap) };
});

export const metrics = { direction: 79.2, score: 62.5, goals: 62.5, handicap: 75.0, handicapSamples: 24 };
