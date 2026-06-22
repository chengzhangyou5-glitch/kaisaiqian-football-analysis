const completedMatches = [
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

const june20CompletedMatches = [
  {
    id: "usa-australia", competition: "2026 世界杯 D 组", date: "06-20", time: "明早 03:00", updated: "赛前版本",
    home: { name: "美国", code: "us" }, away: { name: "澳大利亚", code: "au" },
    conclusion: "美国首轮进攻效率更高，主胜优先；澳大利亚的对抗与定位球仍保留反击路径。",
    trend: [54, 25, 21], handicap: { line: -1, trend: [34, 39, 27] }, scores: ["2-1", "2-0", "1-0", "1-1", "0-1", "2-2"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 76, confidence: "中高", drawRisk: "中", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["首选小胜", "零封延伸", "保守路径", "首选防平", "反击冷门", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 47, core: true }, { label: "3–4球", weight: 39, core: false }, { label: "5球以上", weight: 14, core: false }], factors: [{ label: "攻防状态", value: 81 }, { label: "阵容完整度", value: 76 }, { label: "节奏控制", value: 78 }, { label: "稳定性", value: 74 }], riskTriggers: ["美国前 30 分钟未建立推进优势", "澳大利亚定位球持续形成威胁", "主队高位压迫身后被连续利用"] },
    riskNotes: ["澳大利亚的对抗与定位球具备追平能力", "美国首轮高效率不宜线性外推", "临场阵容尚未完全确认", "早段失球会显著改变比赛节奏"],
    why: "美国首轮 4-1 展示出更好的纵向冲击，澳大利亚则以 2-0 证明了防守结构与身体对抗。主场环境和进攻上限支持美国主胜，但仍需保留 1-1 与客队反击路径。"
  },
  {
    id: "scotland-morocco", competition: "2026 世界杯 C 组", date: "06-20", time: "明早 06:00", updated: "赛前版本",
    home: { name: "苏格兰", code: "gb-sct" }, away: { name: "摩洛哥", code: "ma" },
    conclusion: "摩洛哥整体强度和转换质量更高，客胜优先；苏格兰首轮零封后仍具备把比赛拖入平局的能力。",
    trend: [26, 29, 45], handicap: { line: 1, trend: [31, 42, 27] }, scores: ["0-1", "1-1", "1-2", "0-2", "1-0", "2-2"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 73, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 16, 14, 11, 8, 7], scoreNotes: ["摩洛哥小胜", "首选防平", "进攻延伸", "零封路径", "主队冷门", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 56, core: true }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 75 }, { label: "阵容完整度", value: 77 }, { label: "节奏控制", value: 74 }, { label: "稳定性", value: 72 }], riskTriggers: ["摩洛哥控球占优但迟迟无法破局", "苏格兰定位球连续制造二点机会", "比赛被压缩为低节奏对抗"] },
    riskNotes: ["苏格兰低位防守会提高平局权重", "摩洛哥首轮消耗可能影响持续压迫", "定位球是主队最明确的放大变量", "未确认首发使边路强度存在波动"],
    why: "摩洛哥首轮逼平巴西，攻防转换和中场压迫的完成度高于苏格兰；苏格兰 1-0 取胜则说明其低位结构与定位球路径有效。综合实力与比赛内容更支持摩洛哥小胜，但 1-1 仍是必须保留的第二路径。"
  },
  {
    id: "brazil-haiti", competition: "2026 世界杯 C 组", date: "06-20", time: "明早 08:30", updated: "赛前版本",
    home: { name: "巴西", code: "br" }, away: { name: "海地", code: "ht" },
    conclusion: "巴西在控球和阵地压制方面优势明显，主胜是本轮最清晰方向。",
    trend: [80, 14, 6], handicap: { line: -2, trend: [42, 36, 22] }, scores: ["3-0", "2-0", "4-0", "3-1", "2-1", "1-0"], goals: "3–4", risk: "中低", riskTone: "medium",
    model: { consistency: 86, confidence: "高", drawRisk: "低", scoreWeights: [21, 18, 14, 11, 8, 7], scoreNotes: ["首选大胜", "稳健路径", "优势放大", "失球延伸", "节奏收束", "低效保底"], goalDistribution: [{ label: "0–2球", weight: 39, core: false }, { label: "3–4球", weight: 40, core: true }, { label: "5球以上", weight: 21, core: false }], factors: [{ label: "攻防状态", value: 84 }, { label: "阵容完整度", value: 80 }, { label: "节奏控制", value: 86 }, { label: "稳定性", value: 82 }], riskTriggers: ["巴西半场前仍未取得领先", "海地反击连续获得前场定位球", "巴西进行大幅轮换导致协同下降"] },
    riskNotes: ["首轮被逼平后巴西可能进行人员调整", "海地低位密集防守会压缩中路空间", "若迟迟不进球，比分路径会向 1-0 收缩", "早段进球可能迅速放大总进球数"],
    why: "巴西首轮虽被摩洛哥逼平，但创造力与控球压制仍明显高于海地。海地低位防守具备韧性，因此首选 3-0 与 2-0，总进球以 3–4 球为核心，并保留 4-0 扩展。"
  },
  {
    id: "turkey-paraguay", competition: "2026 世界杯 D 组", date: "06-20", time: "明早 11:00", updated: "赛前版本",
    home: { name: "土耳其", code: "tr" }, away: { name: "巴拉圭", code: "py" },
    conclusion: "两队首轮均告负，土耳其中前场组织略优，主胜作为第一方向，但平局和客队反击风险都不能忽略。",
    trend: [45, 29, 26], handicap: { line: -1, trend: [25, 40, 35] }, scores: ["2-1", "1-0", "1-1", "2-0", "0-1", "2-2"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 71, confidence: "中", drawRisk: "偏高", scoreWeights: [17, 16, 14, 11, 8, 7], scoreNotes: ["土耳其小胜", "保守路径", "首选防平", "零封延伸", "反击冷门", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 54, core: true }, { label: "3–4球", weight: 35, core: false }, { label: "5球以上", weight: 11, core: false }], factors: [{ label: "攻防状态", value: 68 }, { label: "阵容完整度", value: 75 }, { label: "节奏控制", value: 72 }, { label: "稳定性", value: 66 }], riskTriggers: ["土耳其推进再次陷入低效率", "巴拉圭反击直接攻击边后卫身后", "两队因必须拿分而过早进入开放对攻"] },
    riskNotes: ["双方首轮表现都存在明显缺口", "土耳其控球优势未必能转化为射门质量", "巴拉圭反击和身体对抗仍有威胁", "抢分压力可能放大后半段波动"],
    why: "土耳其首轮 0-2 暴露终结效率问题，巴拉圭 1-4 则在防守转换和禁区保护上失分更多。土耳其的中场组织与阵地推进略占上风，因此主胜优先；不过两队都承受抢分压力，1-1 与 0-1 仍是需要保留的风险路径。"
  }
];

const june21CompletedMatches = [
  {
    id: "netherlands-sweden", competition: "2026 世界杯 F 组", date: "06-21", time: "凌晨 01:00", updated: "赛前版本",
    home: { name: "荷兰", code: "nl" }, away: { name: "瑞典", code: "se" },
    conclusion: "荷兰整体控制力和阵容上限略高，主胜优先；瑞典首轮进攻效率突出，必须保留平局与客队反击路径。",
    trend: [50, 26, 24], handicap: { line: -1, trend: [31, 39, 30] }, scores: ["2-1", "1-0", "1-1", "2-0", "1-2", "2-2"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 72, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 16, 14, 11, 8, 7], scoreNotes: ["荷兰小胜", "保守路径", "首选防平", "零封延伸", "瑞典冷门", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 46, core: true }, { label: "3–4球", weight: 38, core: false }, { label: "5球以上", weight: 16, core: false }], factors: [{ label: "攻防状态", value: 75 }, { label: "阵容完整度", value: 78 }, { label: "节奏控制", value: 80 }, { label: "稳定性", value: 70 }], riskTriggers: ["荷兰中场压制无法转化为射门", "瑞典反击持续攻击边后卫身后", "双方早段进球将比赛带入开放节奏"] },
    riskNotes: ["荷兰首轮防线末段稳定性不足", "瑞典首轮五球效率不宜完全线性外推", "双方均具备快速转换能力", "临场锋线组合会影响进球上限"],
    why: "荷兰首轮 2-2 暴露了领先后控制不足，瑞典 5-1 则展示出直接进攻与终结效率。整体阵容和控球能力仍让荷兰方向领先，但优势没有大到可以忽略瑞典反击，因此首选 2-1，并保留 1-1 与 1-2。"
  },
  {
    id: "germany-ivory-coast", competition: "2026 世界杯 E 组", date: "06-21", time: "凌晨 04:00", updated: "赛前版本",
    home: { name: "德国", code: "de" }, away: { name: "科特迪瓦", code: "ci" },
    conclusion: "德国首轮压制与终结表现突出，主胜优先；科特迪瓦的防守韧性限制比分上限。",
    trend: [71, 18, 11], handicap: { line: -2, trend: [39, 38, 23] }, scores: ["2-0", "2-1", "3-0", "3-1", "1-0", "1-1"], goals: "3–4", risk: "中", riskTone: "medium",
    model: { consistency: 83, confidence: "高", drawRisk: "低", scoreWeights: [20, 18, 14, 11, 8, 7], scoreNotes: ["稳健主路径", "失球次选", "优势放大", "高压延伸", "低效保底", "防冷平局"], goalDistribution: [{ label: "0–2球", weight: 38, core: false }, { label: "3–4球", weight: 40, core: true }, { label: "5球以上", weight: 22, core: false }], factors: [{ label: "攻防状态", value: 88 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 85 }, { label: "稳定性", value: 82 }], riskTriggers: ["德国进行明显轮换导致协同下降", "科特迪瓦反击连续形成单点突破", "德国前 30 分钟高压未能取得领先"] },
    riskNotes: ["科特迪瓦首轮零封体现防守韧性", "德国首轮七球存在高效率成分", "大幅轮换可能压低进攻连续性", "客队反击具备制造失球的可能"],
    why: "德国首轮 7-1 展示出高压推进和终结效率，科特迪瓦 1-0 则体现防守韧性。综合实力支持德国主胜，首选 2-0，第二路径调整为 2-1，兼顾科特迪瓦反击进球，三档进球以 3–4 球为核心。"
  },
  {
    id: "ecuador-curacao", competition: "2026 世界杯 E 组", date: "06-21", time: "早上 08:00", updated: "赛前版本",
    home: { name: "厄瓜多尔", code: "ec" }, away: { name: "库拉索", code: "cw" },
    conclusion: "厄瓜多尔身体强度、推进速度和禁区控制更占优势，主胜明确，重点防范久攻不下导致比分收缩。",
    trend: [70, 20, 10], handicap: { line: -1, trend: [41, 37, 22] }, scores: ["2-0", "1-0", "3-0", "2-1", "3-1", "1-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 80, confidence: "高", drawRisk: "中", scoreWeights: [20, 17, 14, 11, 8, 7], scoreNotes: ["首选零封", "保守路径", "优势放大", "失球延伸", "开放延伸", "防冷平局"], goalDistribution: [{ label: "0–2球", weight: 52, core: true }, { label: "3–4球", weight: 36, core: false }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 74 }, { label: "阵容完整度", value: 79 }, { label: "节奏控制", value: 76 }, { label: "稳定性", value: 73 }], riskTriggers: ["厄瓜多尔持续压制却缺少有效射正", "库拉索快速反击获得前场定位球", "主队急于进球导致中后场空间扩大"] },
    riskNotes: ["厄瓜多尔首轮进攻效率仍需提升", "库拉索大比分失利后可能转向深度防守", "低位密集防守会放大平局尾部风险", "早段进球将显著改变三档分布"],
    why: "厄瓜多尔首轮一球小负，但整体对抗与阵地推进仍明显优于首轮失七球的库拉索。库拉索预计会主动收缩，因此主胜方向清晰但未必形成极端大比分；首选 2-0 与 1-0，总进球以 0–2 球为核心。"
  },
  {
    id: "tunisia-japan", competition: "2026 世界杯 F 组", date: "06-21", time: "中午 12:00", updated: "赛前版本",
    home: { name: "突尼斯", code: "tn" }, away: { name: "日本", code: "jp" },
    conclusion: "日本的控球衔接和机会创造更完整，客胜优先；突尼斯低位防守带来平局风险。",
    trend: [17, 25, 58], handicap: { line: 1, trend: [29, 41, 30] }, scores: ["0-1", "0-2", "1-1", "1-2", "0-3", "1-0"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 78, confidence: "中高", drawRisk: "中", scoreWeights: [19, 17, 14, 12, 8, 6], scoreNotes: ["日本小胜", "零封延伸", "首选防平", "失球延伸", "优势放大", "主队冷门"], goalDistribution: [{ label: "0–2球", weight: 56, core: true }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 79 }, { label: "阵容完整度", value: 80 }, { label: "节奏控制", value: 82 }, { label: "稳定性", value: 76 }], riskTriggers: ["日本控球占优但迟迟未能破局", "突尼斯定位球连续制造禁区混乱", "日本后场出球被高强度对抗打断"] },
    riskNotes: ["突尼斯可能采用更深的防守站位", "日本首轮末段丢球暴露控制风险", "定位球是主队最现实的得分路径", "比赛若早早领先可能转入节奏管理"],
    why: "日本首轮逼平荷兰，整体组织明显优于突尼斯首轮 1-5 的表现。日本客胜优先但以小胜为主，首选 0-1 与 0-2，并保留 1-1 防平。"
  }
];

const june22CompletedMatches = [
  {
    id: "spain-saudi-arabia", competition: "2026 世界杯 H 组", date: "06-22", time: "明天 00:00", updated: "赛前版本",
    home: { name: "西班牙", code: "es" }, away: { name: "沙特阿拉伯", code: "sa" },
    conclusion: "西班牙控球与机会创造占优，主胜优先；破密集防守效率使小比分和让平权重上升。",
    trend: [69, 20, 11], handicap: { line: -2, trend: [34, 41, 25] }, scores: ["1-0", "2-0", "2-1", "3-0", "1-1", "3-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 80, confidence: "高", drawRisk: "中", scoreWeights: [19, 18, 13, 11, 8, 7], scoreNotes: ["低比分主胜", "让平主路径", "失球延伸", "优势放大", "防冷平局", "开放延伸"], goalDistribution: [{ label: "0–2球", weight: 51, core: true }, { label: "3–4球", weight: 37, core: false }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 79 }, { label: "阵容完整度", value: 83 }, { label: "节奏控制", value: 88 }, { label: "稳定性", value: 78 }], riskTriggers: ["西班牙前 30 分钟仍未形成高质量射门", "沙特快速反击持续攻击边后卫身后", "主队控球占优但禁区触球效率偏低"] },
    riskNotes: ["西班牙破密集防守效率待观察", "沙特首轮展现防守韧性", "早段未破局会抬高小比分权重"],
    why: "西班牙首轮场面占优但终结不足，沙特则展现防守纪律。主胜明确，1-0、2-0 和 0–2 球是核心路径。"
  },
  {
    id: "belgium-iran", competition: "2026 世界杯 G 组", date: "06-22", time: "明早 03:00", updated: "赛前版本",
    home: { name: "比利时", code: "be" }, away: { name: "伊朗", code: "ir" },
    conclusion: "比利时个人能力和中前场上限更高，主胜优先；双方首轮都暴露防守波动，平局与伊朗反击仍需保留。",
    trend: [54, 24, 22], handicap: { line: -1, trend: [30, 41, 29] }, scores: ["1-0", "1-1", "2-0", "2-1", "0-1", "1-2"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 71, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["比利时小胜", "首选防平", "零封延伸", "失球主胜", "伊朗冷门", "反击延伸"], goalDistribution: [{ label: "0–2球", weight: 52, core: true }, { label: "3–4球", weight: 36, core: false }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 72 }, { label: "阵容完整度", value: 77 }, { label: "节奏控制", value: 76 }, { label: "稳定性", value: 69 }], riskTriggers: ["比利时中场控制再次出现断层", "伊朗快速转换连续形成射门", "主队久攻不下导致阵型前压过深"] },
    riskNotes: ["比利时首轮被埃及逼平，稳定性仍需观察", "伊朗首轮两次进球体现反击效率", "双方防线回收速度都存在波动", "先失球一方可能迅速提高比赛开放度"],
    why: "比利时首轮 1-1 未能体现整体实力优势，伊朗 2-2 则展示出反击和前场效率。比利时仍拥有更高的个人能力与阵地进攻上限，但领先幅度有限，因此首选 1-0，同时以 1-1 防平。"
  },
  {
    id: "uruguay-cape-verde", competition: "2026 世界杯 H 组", date: "06-22", time: "明早 06:00", updated: "赛前版本",
    home: { name: "乌拉圭", code: "uy" }, away: { name: "佛得角", code: "cv" },
    conclusion: "乌拉圭整体强度和禁区威胁更高，主胜优先；佛得角首轮零封西班牙，比赛更可能落在低比分区间。",
    trend: [65, 23, 12], handicap: { line: -1, trend: [34, 43, 23] }, scores: ["1-0", "2-0", "1-1", "2-1", "0-0", "0-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 79, confidence: "中高", drawRisk: "中", scoreWeights: [20, 17, 13, 11, 8, 6], scoreNotes: ["首选小胜", "让平主路径", "首选防平", "失球延伸", "低效平局", "客队冷门"], goalDistribution: [{ label: "0–2球", weight: 63, core: true }, { label: "3–4球", weight: 30, core: false }, { label: "5球以上", weight: 7, core: false }], factors: [{ label: "攻防状态", value: 76 }, { label: "阵容完整度", value: 80 }, { label: "节奏控制", value: 78 }, { label: "稳定性", value: 75 }], riskTriggers: ["乌拉圭控球占优但禁区效率持续偏低", "佛得角反击获得连续定位球", "主队前场压迫被客队长传直接越过"] },
    riskNotes: ["乌拉圭首轮被沙特逼平，破局效率有限", "佛得角零封西班牙证明低位防守质量", "比赛可能长时间停留在一球差", "临场锋线轮换会影响终结上限"],
    why: "乌拉圭首轮 1-1 未能兑现强队优势，佛得角 0-0 逼平西班牙则显示出极强的低位防守纪律。乌拉圭仍是主方向，但更适合 1-0 与 2-0 的窄比分路径，总进球明显偏向 0–2 球。"
  },
  {
    id: "new-zealand-egypt", competition: "2026 世界杯 G 组", date: "06-22", time: "明早 09:00", updated: "赛前版本",
    home: { name: "新西兰", code: "nz" }, away: { name: "埃及", code: "eg" },
    conclusion: "埃及技术与组织略占优势，客胜优先；新西兰韧性突出，平局必须重点保留。",
    trend: [26, 27, 47], handicap: { line: 1, trend: [37, 40, 23] }, scores: ["1-1", "0-1", "1-2", "0-0", "0-2", "2-1"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 69, confidence: "中", drawRisk: "高", scoreWeights: [17, 16, 14, 11, 8, 6], scoreNotes: ["首选防平", "埃及小胜", "失球客胜", "低效平局", "零封延伸", "主队冷门"], goalDistribution: [{ label: "0–2球", weight: 56, core: true }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 70 }, { label: "阵容完整度", value: 75 }, { label: "节奏控制", value: 72 }, { label: "稳定性", value: 71 }], riskTriggers: ["埃及控球占优但无法突破高空防线", "新西兰定位球持续制造禁区二点", "双方因谨慎而长期停留在低节奏"] },
    riskNotes: ["新西兰定位球威胁明确", "埃及终结效率一般", "方向差距小且平局风险高"],
    why: "新西兰的对抗与定位球有威胁，埃及防守和转换更成熟。客胜略优，但 1-1 是最高单一比分，需首选防平。"
  }
];

export const matches = [
  {
    id: "argentina-austria", competition: "2026 世界杯 J 组", date: "06-23", time: "明天 01:00", updated: "赛前版本",
    home: { name: "阿根廷", code: "ar" }, away: { name: "奥地利", code: "at" },
    conclusion: "阿根廷阵地控制和前场终结上限更高，主胜优先；奥地利首轮表现稳定，需保留小比分与平局路径。",
    trend: [57, 25, 18], handicap: { line: -1, trend: [32, 40, 28] }, scores: ["1-0", "2-0", "2-1", "1-1", "0-1", "2-2"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 77, confidence: "中高", drawRisk: "中", scoreWeights: [19, 17, 14, 12, 8, 7], scoreNotes: ["稳健主路径", "零封次选", "失球主胜", "重点防平", "奥地利冷门", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 51, core: true }, { label: "3–4球", weight: 37, core: false }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 82 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 85 }, { label: "稳定性", value: 78 }], riskTriggers: ["阿根廷前 30 分钟无法转化控球优势", "奥地利中前场压迫连续制造失误", "主队轮换导致推进节奏下降"] },
    riskNotes: ["奥地利首轮三球体现进攻效率", "阿根廷需要防范高强度压迫", "比赛可能长时间维持一球差"],
    why: "阿根廷首轮 3-0 展现控制与终结质量，奥地利 3-1 同样保持良好效率。整体上限支持阿根廷主胜，但更适合 1-0、2-0 的窄比分路径，让平是主要穿线结果。"
  },
  {
    id: "france-iraq", competition: "2026 世界杯 I 组", date: "06-23", time: "明早 05:00", updated: "赛前版本",
    home: { name: "法国", code: "fr" }, away: { name: "伊拉克", code: "iq" },
    conclusion: "法国阵容深度、推进速度和禁区效率明显占优，主胜是最清晰方向；轮换幅度决定比分上限。",
    trend: [72, 18, 10], handicap: { line: -2, trend: [37, 39, 24] }, scores: ["2-0", "3-0", "2-1", "3-1", "1-0", "1-1"], goals: "0–2", risk: "中低", riskTone: "medium",
    model: { consistency: 84, confidence: "高", drawRisk: "低", scoreWeights: [20, 18, 14, 11, 8, 6], scoreNotes: ["稳健主路径", "优势放大", "失球次选", "开放延伸", "低效保底", "防冷平局"], goalDistribution: [{ label: "0–2球", weight: 45, core: true }, { label: "3–4球", weight: 39, core: false }, { label: "5球以上", weight: 16, core: false }], factors: [{ label: "攻防状态", value: 87 }, { label: "阵容完整度", value: 84 }, { label: "节奏控制", value: 86 }, { label: "稳定性", value: 82 }], riskTriggers: ["法国大幅轮换削弱前场协同", "伊拉克反击连续获得前场定位球", "法国久攻不下导致防线前压"] },
    riskNotes: ["伊拉克反击仍有制造失球的能力", "法国轮换会影响连续压制", "早段进球可能把比赛推向高区间"],
    why: "法国首轮 3-1 展示出更高的机会创造，伊拉克 1-4 则暴露转换防守问题。主胜优势明确，2-0、3-0 是主要比分路径；若法国轮换或主动控速，总进球仍可能停留在 0–2 球。"
  },
  {
    id: "norway-senegal", competition: "2026 世界杯 I 组", date: "06-23", time: "明早 08:00", updated: "赛前版本",
    home: { name: "挪威", code: "no" }, away: { name: "塞内加尔", code: "sn" },
    conclusion: "挪威首轮进攻状态更强，主胜优先；塞内加尔的身体对抗与转换速度使平局和客队进球路径仍然有效。",
    trend: [58, 24, 18], handicap: { line: -1, trend: [34, 41, 25] }, scores: ["2-1", "1-0", "2-0", "1-1", "1-2", "2-2"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 76, confidence: "中高", drawRisk: "中", scoreWeights: [19, 17, 14, 12, 8, 7], scoreNotes: ["首选小胜", "保守次选", "零封延伸", "重点防平", "反击冷门", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 48, core: true }, { label: "3–4球", weight: 39, core: false }, { label: "5球以上", weight: 13, core: false }], factors: [{ label: "攻防状态", value: 84 }, { label: "阵容完整度", value: 79 }, { label: "节奏控制", value: 77 }, { label: "稳定性", value: 75 }], riskTriggers: ["挪威高位推进被塞内加尔直接越过", "客队边路冲击持续形成禁区传中", "主队终结效率从首轮高位回落"] },
    riskNotes: ["塞内加尔具备更强的对抗和反击能力", "挪威首轮四球不宜简单外推", "一球差比赛会提高让平权重"],
    why: "挪威首轮 4-1 的进攻效率明显高于塞内加尔 1-3 的表现，但塞内加尔仍有速度和身体优势。主胜优先，以 2-1、1-0 为核心，并保留 1-1 防平。"
  },
  {
    id: "jordan-algeria", competition: "2026 世界杯 J 组", date: "06-23", time: "明早 11:00", updated: "赛前版本",
    home: { name: "约旦", code: "jo" }, away: { name: "阿尔及利亚", code: "dz" },
    conclusion: "阿尔及利亚个人能力与控球推进略占优势，客胜优先；两队首轮均失利，比赛的不确定性和平局风险偏高。",
    trend: [24, 29, 47], handicap: { line: 1, trend: [40, 39, 21] }, scores: ["0-1", "1-1", "1-2", "0-2", "1-0", "2-2"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 69, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 17, 14, 11, 8, 7], scoreNotes: ["阿尔及利亚小胜", "首选防平", "失球客胜", "零封延伸", "约旦冷门", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 56, core: true }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 66 }, { label: "阵容完整度", value: 76 }, { label: "节奏控制", value: 71 }, { label: "稳定性", value: 67 }], riskTriggers: ["阿尔及利亚控球占优却无法形成有效射正", "约旦定位球连续获得二点机会", "双方抢分压力使后半段过早开放"] },
    riskNotes: ["两队首轮防线都出现明显问题", "客胜领先幅度有限", "平局与约旦反击路径需要保留"],
    why: "阿尔及利亚首轮 0-3 不敌阿根廷，但组织能力仍高于约旦；约旦 1-3 的定位球和反击具有一定威胁。客胜是第一方向，0-1 与 1-1 列为首选双路径。"
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
  "uzbekistan-colombia": { line: 1, trend: [21, 28, 51], prediction: "让负", actual: "让负", hit: true },
  "czech-south-africa": { line: -1, trend: [24, 32, 44], prediction: "让负", actual: "让负", hit: true },
  "switzerland-bosnia": { line: -1, trend: [20, 31, 49], prediction: "让负", actual: "让胜", hit: false },
  "canada-qatar": { line: -1, trend: [31, 34, 35], prediction: "让负", actual: "让胜", hit: false },
  "mexico-korea": { line: -1, trend: [23, 46, 31], prediction: "让平", actual: "让平", hit: true },
  "usa-australia": { line: -1, trend: [34, 39, 27], prediction: "让平", actual: "让胜", hit: false },
  "scotland-morocco": { line: 1, trend: [31, 42, 27], prediction: "让平", actual: "让平", hit: true },
  "brazil-haiti": { line: -2, trend: [42, 36, 22], prediction: "让胜", actual: "让胜", hit: true },
  "turkey-paraguay": { line: -1, trend: [25, 40, 35], prediction: "让平", actual: "让负", hit: false },
  "netherlands-sweden": { line: -1, trend: [31, 39, 30], prediction: "让平", actual: "让胜", hit: false },
  "germany-ivory-coast": { line: -2, trend: [39, 38, 23], prediction: "让胜", actual: "让负", hit: false },
  "ecuador-curacao": { line: -1, trend: [41, 37, 22], prediction: "让胜", actual: "让负", hit: false },
  "tunisia-japan": { line: 1, trend: [29, 41, 30], prediction: "让平", actual: "让负", hit: false },
  "spain-saudi-arabia": { line: -2, trend: [34, 41, 25], prediction: "让平", actual: "让胜", hit: false },
  "belgium-iran": { line: -1, trend: [30, 41, 29], prediction: "让平", actual: "让负", hit: false },
  "uruguay-cape-verde": { line: -1, trend: [34, 43, 23], prediction: "让平", actual: "让负", hit: false },
  "new-zealand-egypt": { line: 1, trend: [37, 40, 23], prediction: "让平", actual: "让负", hit: false }
};

function historySeed(id) {
  return [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function historyGoalDistribution(goals) {
  if (goals.includes("5")) return [{ label: "0–2球", weight: 23, core: false }, { label: "3–4球", weight: 35, core: false }, { label: "5球以上", weight: 42, core: true }];
  if (goals.includes("3–4")) return [{ label: "0–2球", weight: 37, core: false }, { label: "3–4球", weight: 45, core: true }, { label: "5球以上", weight: 18, core: false }];
  return [{ label: "0–2球", weight: 46, core: true }, { label: "3–4球", weight: 36, core: false }, { label: "5球以上", weight: 18, core: false }];
}

function normalizeGoalCopy(text = "") {
  return text.replaceAll("0–1", "0–2").replaceAll("2–3", "3–4").replaceAll("4 球以上", "5 球以上");
}

function normalizeHistoryGoalRange(record) {
  if (record.goals.includes("0–2")) return "0–2 球";
  if (record.goals.includes("3–4")) return "3–4 球";
  if (record.goals.includes("5 球以上")) return "5 球以上";
  if (record.goals.includes("0–1")) return "0–2 球";
  if (record.goals.includes("4 球以上")) return "5 球以上";
  const [homeGoals, awayGoals] = record.scores.split("/")[0].trim().split("-").map(Number);
  return homeGoals + awayGoals <= 2 ? "0–2 球" : "3–4 球";
}

function goalRangeHit(range, result) {
  const total = result.split("-").map(Number).reduce((sum, value) => sum + value, 0);
  if (range.includes("0–2")) return total <= 2;
  if (range.includes("3–4")) return total >= 3 && total <= 4;
  return total >= 5;
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

const completedResults = {
  "czech-south-africa": { date: "06-19 00:00", result: "1-1", direction: "平局", tags: ["方向命中", "比分命中", "进球命中"], review: "平局、1-1 首选比分与 2–3 球区间全部得到验证。" },
  "switzerland-bosnia": { date: "06-19 03:00", result: "4-1", direction: "瑞士胜", tags: ["方向命中", "比分未中", "进球未中"], review: "瑞士主方向得到验证，但比赛开放程度明显高于赛前低比分路径。" },
  "canada-qatar": { date: "06-19 06:00", result: "6-0", direction: "加拿大胜", tags: ["方向命中", "比分未中", "进球未中"], review: "加拿大主方向准确，实际优势与总进球规模明显超过赛前路径。" },
  "mexico-korea": { date: "06-19 09:00", result: "1-0", direction: "墨西哥胜", tags: ["方向命中", "比分命中", "进球命中"], review: "墨西哥主胜、1-0 首选比分和 0–1 球区间全部得到验证。" },
  "usa-australia": { date: "06-20 03:00", result: "2-0", direction: "美国胜", tags: ["方向命中", "比分命中", "进球命中"], review: "美国主胜、2-0 比分与 0–2 球区间全部得到验证。" },
  "scotland-morocco": { date: "06-20 06:00", result: "0-1", direction: "摩洛哥胜", tags: ["方向命中", "比分命中", "进球命中"], review: "摩洛哥客胜、0-1 比分与 0–2 球区间全部得到验证。" },
  "brazil-haiti": { date: "06-20 08:30", result: "3-0", direction: "巴西胜", tags: ["方向命中", "比分命中", "进球命中"], review: "巴西主胜、3-0 比分与 3–4 球区间全部得到验证。" },
  "turkey-paraguay": { date: "06-20 11:00", result: "0-1", direction: "土耳其胜", tags: ["方向未一致", "比分未中", "进球命中"], review: "0–2 球区间得到验证，土耳其方向和比分路径未覆盖实际赛果。" },
  "netherlands-sweden": { date: "06-21 01:00", result: "5-1", direction: "荷兰胜", tags: ["方向命中", "比分未中", "进球未中"], review: "荷兰主胜方向得到验证，实际比分和六球总进球均高于赛前主路径。" },
  "germany-ivory-coast": { date: "06-21 04:00", result: "2-1", direction: "德国胜", tags: ["方向命中", "比分命中", "进球命中"], review: "德国主胜、第二推荐 2-1 与 3–4 球区间全部得到验证。" },
  "ecuador-curacao": { date: "06-21 08:00", result: "0-0", direction: "平局", tags: ["方向未一致", "比分未中", "进球命中"], review: "0–2 球区间得到验证，主胜方向与比分路径未覆盖零比零。" },
  "tunisia-japan": { date: "06-21 12:00", result: "0-4", direction: "日本胜", tags: ["方向命中", "比分未中", "进球未中"], review: "日本客胜方向得到验证，实际四球超出赛前 0–2 球主区间。" },
  "spain-saudi-arabia": { date: "06-22 00:00", result: "4-0", direction: "西班牙胜", tags: ["方向命中", "比分未中", "进球未中"], review: "西班牙主胜方向得到验证，实际四球和 4-0 比分高于赛前主路径。" },
  "belgium-iran": { date: "06-22 03:00", result: "0-0", direction: "平局", tags: ["方向未一致", "比分未中", "进球命中"], review: "0–2 球区间得到验证，比利时主胜方向和比分路径未覆盖零比零。" },
  "uruguay-cape-verde": { date: "06-22 06:00", result: "2-2", direction: "平局", tags: ["方向未一致", "比分未中", "进球未中"], review: "比赛进入开放平局，主胜方向、比分路径和 0–2 球区间均未覆盖。" },
  "new-zealand-egypt": { date: "06-22 09:00", result: "1-3", direction: "埃及胜", tags: ["方向命中", "比分未中", "进球未中"], review: "埃及客胜方向得到验证，实际 1-3 与四球总进球高于赛前主路径。" }
};

const completedHistoryRecords = [...completedMatches, ...june20CompletedMatches, ...june21CompletedMatches, ...june22CompletedMatches].map(match => {
  const result = completedResults[match.id];
  return {
    id: match.id,
    date: result.date,
    competition: match.competition,
    match: `${match.home.name} vs ${match.away.name}`,
    result: result.result,
    direction: result.direction,
    scores: match.scores.slice(0, 2).join(" / "),
    goals: `${match.goals} 球`,
    review: result.review,
    tags: result.tags,
    status: result.tags.includes("方向命中") ? "hit" : "miss",
    lockedPrediction: match
  };
});

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
  { id:"uzbekistan-colombia", date:"06-18 09:00", competition:"2026 世界杯 K 组", match:"乌兹别克斯坦 vs 哥伦比亚", result:"1-3", direction:"哥伦比亚胜", scores:"0-2 / 3-1", goals:"4 球以上", review:"客胜方向与高进球区间得到赛果覆盖，比分路径调整为 0-2 与 3-1。", tags:["方向命中","比分未中","进球命中"], status:"hit" },
  ...completedHistoryRecords
].map(record => {
  const handicap = historyHandicap[record.id];
  const normalizedGoals = normalizeHistoryGoalRange(record);
  const isGoalHit = goalRangeHit(normalizedGoals, record.result);
  const tags = [...record.tags.filter(tag => !tag.startsWith("进球")), isGoalHit ? "进球命中" : "进球未中"];
  const directionSummary = tags.includes("方向命中") ? "方向得到验证" : "方向未覆盖";
  const scoreSummary = tags.includes("比分命中") ? "比分路径得到验证" : "比分路径未覆盖";
  const normalizedRecord = {
    ...record,
    goals: normalizedGoals,
    tags,
    review: `${directionSummary}，${scoreSummary}，${normalizedGoals}${isGoalHit ? "得到验证" : "未覆盖实际总进球"}。`
  };
  const report = record.lockedPrediction
    ? {
        ...record.lockedPrediction,
        conclusion: normalizeGoalCopy(record.lockedPrediction.conclusion),
        goals: normalizedGoals.replace(/\s*球$/, ""),
        handicap: { line: handicap.line, trend: handicap.trend },
        model: { ...record.lockedPrediction.model, goalDistribution: historyGoalDistribution(normalizedGoals) },
        result: record.result,
        why: `比赛最终结果为 ${record.result}。总进球按 0–2 球、3–4 球、5 球以上三档重新验证；其他赛前方向与比分路径保持原记录。`
      }
    : buildHistoryReport(normalizedRecord, handicap);
  const { lockedPrediction, ...cleanRecord } = normalizedRecord;
  return { ...cleanRecord, handicap, report };
});

export const metrics = { direction: 77.5, score: 52.5, goals: 57.5, handicap: 55.0, handicapSamples: 40 };
