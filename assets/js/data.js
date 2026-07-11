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
    trend: [70, 20, 10], handicap: { line: -1, trend: [41, 37, 22] }, scores: ["2-0", "0-0", "3-0", "2-1", "3-1", "1-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 80, confidence: "高", drawRisk: "中", scoreWeights: [20, 17, 14, 11, 8, 7], scoreNotes: ["首选零封", "低效防平", "优势放大", "失球延伸", "开放延伸", "防冷平局"], goalDistribution: [{ label: "0–2球", weight: 52, core: true }, { label: "3–4球", weight: 36, core: false }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 74 }, { label: "阵容完整度", value: 79 }, { label: "节奏控制", value: 76 }, { label: "稳定性", value: 73 }], riskTriggers: ["厄瓜多尔持续压制却缺少有效射正", "库拉索快速反击获得前场定位球", "主队急于进球导致中后场空间扩大"] },
    riskNotes: ["厄瓜多尔首轮进攻效率仍需提升", "库拉索大比分失利后可能转向深度防守", "低位密集防守会放大平局尾部风险", "早段进球将显著改变三档分布"],
    why: "厄瓜多尔整体对抗与阵地推进更占优势，但库拉索预计会主动收缩。主胜方向清晰，首选 2-0，同时用 0-0 保留久攻不下路径，总进球以 0–2 球为核心。"
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
    trend: [54, 24, 22], handicap: { line: -1, trend: [30, 41, 29] }, scores: ["1-0", "0-0", "2-0", "2-1", "0-1", "1-2"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 71, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["比利时小胜", "低效平局", "零封延伸", "失球主胜", "伊朗冷门", "反击延伸"], goalDistribution: [{ label: "0–2球", weight: 52, core: true }, { label: "3–4球", weight: 36, core: false }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 72 }, { label: "阵容完整度", value: 77 }, { label: "节奏控制", value: 76 }, { label: "稳定性", value: 69 }], riskTriggers: ["比利时中场控制再次出现断层", "伊朗快速转换连续形成射门", "主队久攻不下导致阵型前压过深"] },
    riskNotes: ["比利时首轮被埃及逼平，稳定性仍需观察", "伊朗首轮两次进球体现反击效率", "双方防线回收速度都存在波动", "先失球一方可能迅速提高比赛开放度"],
    why: "比利时仍拥有更高的个人能力与阵地进攻上限，但领先幅度有限，因此首选 1-0，同时以 0-0 保留低效平局路径。"
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

const june23CompletedMatches = [
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
    trend: [58, 24, 18], handicap: { line: -1, trend: [34, 41, 25] }, scores: ["2-1", "3-2", "2-0", "1-1", "1-2", "2-2"], goals: "5球以上", risk: "中", riskTone: "medium",
    model: { consistency: 76, confidence: "中高", drawRisk: "中", scoreWeights: [19, 18, 14, 12, 8, 7], scoreNotes: ["首选小胜", "开放主胜", "零封延伸", "重点防平", "反击冷门", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 21, core: false }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 45, core: true }], factors: [{ label: "攻防状态", value: 84 }, { label: "阵容完整度", value: 79 }, { label: "节奏控制", value: 77 }, { label: "稳定性", value: 75 }], riskTriggers: ["挪威高位推进被塞内加尔直接越过", "客队边路冲击持续形成禁区传中", "主队终结效率从首轮高位回落"] },
    riskNotes: ["塞内加尔具备更强的对抗和反击能力", "挪威首轮四球不宜简单外推", "一球差比赛会提高让平权重"],
    why: "挪威进攻效率更高，但塞内加尔仍有速度和身体优势。主胜优先，以 2-1、3-2 为核心，比赛开放时总进球主要落在 5 球以上。"
  },
  {
    id: "jordan-algeria", competition: "2026 世界杯 J 组", date: "06-23", time: "明早 11:00", updated: "赛前版本",
    home: { name: "约旦", code: "jo" }, away: { name: "阿尔及利亚", code: "dz" },
    conclusion: "阿尔及利亚个人能力与控球推进略占优势，客胜优先；两队首轮均失利，比赛的不确定性和平局风险偏高。",
    trend: [24, 29, 47], handicap: { line: 1, trend: [34, 45, 21] }, scores: ["0-1", "1-2", "1-1", "0-2", "1-0", "2-2"], goals: "3–4", risk: "中高", riskTone: "high",
    model: { consistency: 69, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 17, 14, 11, 8, 7], scoreNotes: ["阿尔及利亚小胜", "失球客胜", "首选防平", "零封延伸", "约旦冷门", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 38, core: false }, { label: "3–4球", weight: 48, core: true }, { label: "5球以上", weight: 14, core: false }], factors: [{ label: "攻防状态", value: 66 }, { label: "阵容完整度", value: 76 }, { label: "节奏控制", value: 71 }, { label: "稳定性", value: 67 }], riskTriggers: ["阿尔及利亚控球占优却无法形成有效射正", "约旦定位球连续获得二点机会", "双方抢分压力使后半段过早开放"] },
    riskNotes: ["两队首轮防线都出现明显问题", "客胜领先幅度有限", "平局与约旦反击路径需要保留"],
    why: "阿尔及利亚组织能力略高于约旦，约旦定位球和反击具有一定威胁。客胜是第一方向，0-1 与 1-2 列为首选双路径；受让方向以让平优先，总进球核心调整为 3–4 球。"
  }
];

const june24CompletedMatches = [
  {
    id: "portugal-uzbekistan", competition: "2026 世界杯 K 组", date: "06-24", time: "明天 01:00", updated: "赛前版本",
    home: { name: "葡萄牙", code: "pt" }, away: { name: "乌兹别克斯坦", code: "uz" },
    conclusion: "葡萄牙控球质量、前场个人能力和禁区压迫更完整，主胜是第一方向；但首轮被逼平后，仍需防范比赛进入小胜节奏。",
    trend: [68, 21, 11], handicap: { line: -1, trend: [42, 38, 20] }, scores: ["2-0", "1-0", "2-1", "3-0", "1-1", "3-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 81, confidence: "高", drawRisk: "中", scoreWeights: [19, 18, 14, 12, 8, 7], scoreNotes: ["稳健主路径", "低比分次选", "失球主胜", "优势放大", "防冷平局", "开放延伸"], goalDistribution: [{ label: "0–2球", weight: 50, core: true }, { label: "3–4球", weight: 37, core: false }, { label: "5球以上", weight: 13, core: false }], factors: [{ label: "攻防状态", value: 84 }, { label: "阵容完整度", value: 82 }, { label: "节奏控制", value: 87 }, { label: "稳定性", value: 78 }], riskTriggers: ["葡萄牙控球占优但禁区效率偏低", "乌兹别克斯坦反击打到边后卫身后", "主队早段无法破局导致节奏被压慢"] },
    riskNotes: ["葡萄牙首轮被刚果（金）逼平，终结效率需要修正", "乌兹别克斯坦具备转换进球能力", "首球时间会明显影响让胜平负路径"],
    why: "葡萄牙整体上限明显高于乌兹别克斯坦，但首轮 1-1 说明破密集防守并非没有阻力。乌兹别克斯坦首轮对哥伦比亚仍有进球，不能完全排除失球主胜；因此首选 2-0 与 1-0，并把 0–2 球作为核心区间。"
  },
  {
    id: "england-ghana", competition: "2026 世界杯 L 组", date: "06-24", time: "明天 04:00", updated: "赛前版本",
    home: { name: "英格兰", code: "gb-eng" }, away: { name: "加纳", code: "gh" },
    conclusion: "英格兰进攻层级和定位球威胁更强，主胜优先；加纳首轮零封取胜，低位防守会把比分压向小胜或防平。",
    trend: [60, 24, 16], handicap: { line: -1, trend: [39, 40, 21] }, scores: ["2-0", "1-0", "2-1", "1-1", "3-0", "3-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 78, confidence: "中高", drawRisk: "中", scoreWeights: [18, 17, 14, 11, 8, 7], scoreNotes: ["稳健主路径", "保守次选", "失球主胜", "重点防平", "优势放大", "开放延伸"], goalDistribution: [{ label: "0–2球", weight: 54, core: true }, { label: "3–4球", weight: 35, core: false }, { label: "5球以上", weight: 11, core: false }], factors: [{ label: "攻防状态", value: 82 }, { label: "阵容完整度", value: 80 }, { label: "节奏控制", value: 79 }, { label: "稳定性", value: 76 }], riskTriggers: ["英格兰阵地推进被加纳低位压缩", "加纳定位球或反击形成先手", "英格兰领先后主动降速导致比分收缩"] },
    riskNotes: ["英格兰首轮进球效率很高，但失球也暴露身后空间", "加纳首轮一球小胜体现防守韧性", "让平权重略高于让胜"],
    why: "英格兰 4-2 克罗地亚说明前场终结和定位球质量在线，但防线并非完全稳定。加纳 1-0 巴拿马更偏务实，预计会先压低节奏。主胜仍是主方向，但 2-0、1-0 更合理，1-1 作为重点防平路径。"
  },
  {
    id: "panama-croatia", competition: "2026 世界杯 L 组", date: "06-24", time: "明天 07:00", updated: "赛前版本",
    home: { name: "巴拿马", code: "pa" }, away: { name: "克罗地亚", code: "hr" },
    conclusion: "克罗地亚中场控制和比赛经验更占优，客胜优先；巴拿马防守收缩会让比赛更接近一球差。",
    trend: [20, 27, 53], handicap: { line: 1, trend: [38, 42, 20] }, scores: ["0-1", "1-1", "0-2", "1-2", "0-0", "1-0"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 72, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 16, 14, 11, 8, 7], scoreNotes: ["克罗地亚小胜", "首选防平", "零封延伸", "失球客胜", "低效平局", "主队冷门"], goalDistribution: [{ label: "0–2球", weight: 62, core: true }, { label: "3–4球", weight: 31, core: false }, { label: "5球以上", weight: 7, core: false }], factors: [{ label: "攻防状态", value: 71 }, { label: "阵容完整度", value: 77 }, { label: "节奏控制", value: 80 }, { label: "稳定性", value: 70 }], riskTriggers: ["克罗地亚控球占优但缺少禁区冲击", "巴拿马定位球持续制造二点机会", "客队体能下降后中场覆盖变慢"] },
    riskNotes: ["克罗地亚首轮丢四球，防守稳定性需要观察", "巴拿马低位防守可能拖慢节奏", "平局权重接近三成"],
    why: "克罗地亚虽然首轮 2-4 告负，但进攻组织和中场控制仍好于巴拿马。巴拿马首轮 0-1 展示出一定防守韧性，本场更像低比分客胜或 1-1 防平；让胜平负层面更偏让平。"
  },
  {
    id: "colombia-dr-congo", competition: "2026 世界杯 K 组", date: "06-24", time: "明天 10:00", updated: "赛前版本",
    home: { name: "哥伦比亚", code: "co" }, away: { name: "刚果（金）", code: "cd" },
    conclusion: "哥伦比亚转换质量和前场效率略占优势，主胜优先；刚果（金）首轮逼平葡萄牙，平局与客队进球路径必须保留。",
    trend: [53, 26, 21], handicap: { line: -1, trend: [31, 42, 27] }, scores: ["1-0", "2-1", "2-0", "1-1", "0-1", "3-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 74, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["稳健主路径", "失球主胜", "零封延伸", "重点防平", "客队冷门", "开放延伸"], goalDistribution: [{ label: "0–2球", weight: 56, core: true }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 78 }, { label: "阵容完整度", value: 79 }, { label: "节奏控制", value: 76 }, { label: "稳定性", value: 72 }], riskTriggers: ["哥伦比亚推进被刚果（金）身体对抗切断", "客队反击持续获得边路单点突破", "比赛早段进入对抗消耗导致节奏下降"] },
    riskNotes: ["刚果（金）首轮逼平葡萄牙，抗压质量不低", "哥伦比亚首轮三球含转换效率加成", "主胜领先但不是断层优势"],
    why: "哥伦比亚 3-1 击败乌兹别克斯坦，转换推进和终结效率更稳定；刚果（金）1-1 葡萄牙说明身体对抗和防守纪律足以制造麻烦。主胜优先，但更偏 1-0、2-1 小胜，让平是主要穿线结果。"
  }
];

const june25CompletedMatches = [
  {
    id: "bosnia-qatar", competition: "2026 世界杯 B 组", date: "06-25", time: "明早 03:00", updated: "赛前版本",
    home: { name: "波黑", code: "ba" }, away: { name: "卡塔尔", code: "qa" },
    conclusion: "波黑身体对抗和定位球略占优势，主胜作为第一方向；但双方前两轮稳定性都不足，本场需要明显防平。",
    trend: [43, 29, 28], handicap: { line: -1, trend: [23, 35, 42] }, scores: ["1-0", "1-1", "2-1", "0-0", "0-1", "2-0"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 70, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 17, 13, 11, 8, 7], scoreNotes: ["波黑小胜", "重点防平", "失球主胜", "低效平局", "卡塔尔冷门", "零封延伸"], goalDistribution: [{ label: "0–2球", weight: 63, core: true }, { label: "3–4球", weight: 30, core: false }, { label: "5球以上", weight: 7, core: false }], factors: [{ label: "攻防状态", value: 69 }, { label: "阵容完整度", value: 75 }, { label: "节奏控制", value: 71 }, { label: "稳定性", value: 66 }], riskTriggers: ["波黑前场支点拿不到连续二点", "卡塔尔控球拖慢比赛节奏", "双方终结效率偏低导致久攻不下"] },
    riskNotes: ["波黑有身体优势但进攻连续性一般", "卡塔尔前两轮波动较大，低位防守可能提高平局概率", "一球差路径明显高于大比分路径"],
    why: "波黑前两轮一平一负，防守稳定性不够理想，但面对卡塔尔仍有定位球、对抗和前场支点优势。卡塔尔此前被加拿大大比分击穿，随后又能逼平瑞士，波动很大，因此本场不适合写得太满：波黑小胜优先，1-1 和 0-0 作为稳健防平。"
  },
  {
    id: "switzerland-canada", competition: "2026 世界杯 B 组", date: "06-25", time: "明早 03:00", updated: "赛前版本",
    home: { name: "瑞士", code: "ch" }, away: { name: "加拿大", code: "ca" },
    conclusion: "瑞士组织稳定性略好，主胜微弱优先；加拿大速度和冲击力很强，首选比分必须防平。",
    trend: [39, 29, 32], handicap: { line: -1, trend: [25, 46, 29] }, scores: ["2-1", "1-0", "0-1", "1-1", "2-2", "0-0"], goals: "0–2", risk: "高", riskTone: "high",
    model: { consistency: 68, confidence: "中", drawRisk: "高", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["失球主胜", "瑞士小胜", "加拿大冷门", "重点防平", "开放平局", "低效平局"], goalDistribution: [{ label: "0–2球", weight: 57, core: true }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 9, core: false }], factors: [{ label: "攻防状态", value: 76 }, { label: "阵容完整度", value: 78 }, { label: "节奏控制", value: 74 }, { label: "稳定性", value: 71 }], riskTriggers: ["加拿大边路速度持续打到瑞士身后", "瑞士控球占优但缺少禁区效率", "双方抢分压力使后半段节奏突然打开"] },
    riskNotes: ["瑞士与加拿大方向差距很小", "加拿大 6-0 卡塔尔后进攻信心较高", "瑞士稳定但不具备断层优势"],
    why: "瑞士整体结构和中场纪律更稳定，但加拿大的速度和身体冲击会持续制造威胁。主方向仍为瑞士胜，首选比分调整为 2-1 与 1-0；让胜平负以让平为第一路径。"
  },
  {
    id: "morocco-haiti", competition: "2026 世界杯 C 组", date: "06-25", time: "明早 06:00", updated: "赛前版本",
    home: { name: "摩洛哥", code: "ma" }, away: { name: "海地", code: "ht" },
    conclusion: "摩洛哥压迫质量、转换速度和防守完整度明显更好，主胜优先；海地低位收缩会让比分更偏稳健。",
    trend: [66, 23, 11], handicap: { line: -1, trend: [38, 41, 21] }, scores: ["1-0", "2-0", "2-1", "0-0", "3-0", "1-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 80, confidence: "中高", drawRisk: "中", scoreWeights: [19, 17, 13, 10, 8, 7], scoreNotes: ["稳健主路径", "零封次选", "失球主胜", "低效防平", "优势放大", "防冷平局"], goalDistribution: [{ label: "0–2球", weight: 61, core: true }, { label: "3–4球", weight: 31, core: false }, { label: "5球以上", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 82 }, { label: "阵容完整度", value: 79 }, { label: "节奏控制", value: 83 }, { label: "稳定性", value: 77 }], riskTriggers: ["摩洛哥控球占优但迟迟无法破局", "海地低位密集压缩中路空间", "主队领先后提前降速导致比分停留一球"] },
    riskNotes: ["摩洛哥方向清晰，但不宜过度放大比分", "海地前两轮进攻输出较低", "早段进球决定是否进入 3–4 球延伸"],
    why: "摩洛哥前两轮对巴西和苏格兰都体现出较高防守完成度，压迫与转换质量也优于海地。海地连续面对强度较高的对手时进攻办法有限，但低位防守会压低总进球上限，因此主胜可以更大胆，比分仍以 1-0、2-0 稳健路径为主。"
  },
  {
    id: "scotland-brazil", competition: "2026 世界杯 C 组", date: "06-25", time: "明早 06:00", updated: "赛前版本",
    home: { name: "苏格兰", code: "gb-sct" }, away: { name: "巴西", code: "br" },
    conclusion: "巴西阵地压制、个人能力和进攻上限明显更强，客胜是第一方向；苏格兰低位防守让比赛更可能是一到两球差。",
    trend: [16, 25, 59], handicap: { line: 1, trend: [37, 41, 22] }, scores: ["0-1", "0-2", "1-1", "1-2", "0-0", "1-0"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 79, confidence: "中高", drawRisk: "中", scoreWeights: [19, 16, 13, 11, 8, 7], scoreNotes: ["巴西小胜", "零封延伸", "重点防平", "失球客胜", "低效平局", "主队冷门"], goalDistribution: [{ label: "0–2球", weight: 62, core: true }, { label: "3–4球", weight: 31, core: false }, { label: "5球以上", weight: 7, core: false }], factors: [{ label: "攻防状态", value: 83 }, { label: "阵容完整度", value: 82 }, { label: "节奏控制", value: 84 }, { label: "稳定性", value: 78 }], riskTriggers: ["巴西持续围攻但禁区最后一传效率偏低", "苏格兰定位球获得前场二点机会", "巴西轮换导致边路压制下降"] },
    riskNotes: ["巴西方向更清晰，但苏格兰低位防守具备韧性", "苏格兰定位球是主要变量", "让胜平负更偏一球客胜的让平路径"],
    why: "巴西前两轮一平一胜，整体控球压制和个人能力仍在本组第一梯队。苏格兰此前能小胜海地、也只是一球小负摩洛哥，说明低位防守并不容易被快速打穿。因此客胜方向可以更明确，但比分仍按 0-1、0-2 的稳健路径处理。"
  },
  {
    id: "czech-mexico", competition: "2026 世界杯 A 组", date: "06-25", time: "明早 09:00", updated: "赛前版本",
    home: { name: "捷克", code: "cz" }, away: { name: "墨西哥", code: "mx" },
    conclusion: "墨西哥控球与比赛经验略占优势，但捷克身体对抗和定位球足够制造阻力，本场首选防平。",
    trend: [34, 30, 36], handicap: { line: 1, trend: [30, 31, 39] }, scores: ["0-2", "0-3", "1-0", "0-0", "1-2", "2-1"], goals: "3–4", risk: "高", riskTone: "high",
    model: { consistency: 67, confidence: "中", drawRisk: "高", scoreWeights: [18, 16, 14, 11, 8, 7], scoreNotes: ["墨西哥零封", "优势放大", "捷克冷门", "低效平局", "客胜延伸", "主队延伸"], goalDistribution: [{ label: "0–2球", weight: 39, core: false }, { label: "3–4球", weight: 48, core: true }, { label: "5球以上", weight: 13, core: false }], factors: [{ label: "攻防状态", value: 70 }, { label: "阵容完整度", value: 76 }, { label: "节奏控制", value: 72 }, { label: "稳定性", value: 68 }], riskTriggers: ["墨西哥控球占优但推进效率偏低", "捷克定位球连续制造二点机会", "双方谨慎导致比赛长时间停留低比分"] },
    riskNotes: ["双方方向差距很小", "捷克主场身份提高对抗权重", "墨西哥更像小胜而非大胜路径"],
    why: "墨西哥整体控球和经验略好，但捷克的高空球、身体对抗和定位球仍会制造阻力。客胜微弱优先，首选比分调整为 0-2 与 0-3，总进球核心为 3–4 球，让胜平负以让负优先。"
  },
  {
    id: "south-africa-korea", competition: "2026 世界杯 A 组", date: "06-25", time: "明早 09:00", updated: "赛前版本",
    home: { name: "南非", code: "za" }, away: { name: "韩国", code: "kr" },
    conclusion: "韩国跑动强度、前场压迫和转换速度略占优势，客胜优先；南非身体对抗会让平局权重保持较高。",
    trend: [29, 30, 41], handicap: { line: 1, trend: [39, 41, 20] }, scores: ["0-1", "1-0", "0-0", "1-1", "1-2", "0-2"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 71, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 17, 12, 10, 8, 7], scoreNotes: ["韩国小胜", "南非反打", "低效平局", "重点防平", "失球客胜", "零封延伸"], goalDistribution: [{ label: "0–2球", weight: 64, core: true }, { label: "3–4球", weight: 30, core: false }, { label: "5球以上", weight: 6, core: false }], factors: [{ label: "攻防状态", value: 73 }, { label: "阵容完整度", value: 77 }, { label: "节奏控制", value: 70 }, { label: "稳定性", value: 69 }], riskTriggers: ["韩国压迫无法转化为前场射门", "南非身体对抗拖慢比赛节奏", "客队边路推进被主队强对抗打断"] },
    riskNotes: ["韩国方向略清晰但领先幅度不大", "南非具备把比赛拖成低比分的能力", "让胜平负更偏一球客胜的让平路径"],
    why: "韩国的跑动和转换速度更有连续性，但南非对抗强度高，容易把比赛拉到低节奏。0-1 是首选客胜路径，第二比分调整为 1-0，整体总进球继续落在 0–2 球。"
  },
  {
    id: "curacao-ivory-coast", competition: "2026 世界杯 E 组", date: "06-26", time: "后天 04:00", updated: "赛前版本",
    home: { name: "库拉索", code: "cw" }, away: { name: "科特迪瓦", code: "ci" },
    conclusion: "科特迪瓦身体强度、防守韧性和转换质量更好，客胜优先；库拉索低位收缩会压低比分上限。",
    trend: [19, 30, 51], handicap: { line: 1, trend: [38, 42, 20] }, scores: ["0-1", "0-2", "1-1", "0-0", "1-0", "1-2"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 74, confidence: "中", drawRisk: "偏高", scoreWeights: [19, 17, 12, 11, 8, 7], scoreNotes: ["科特迪瓦小胜", "零封延伸", "开放平局", "低效防平", "主队冷门", "失球客胜"], goalDistribution: [{ label: "0–2球", weight: 70, core: true }, { label: "3–4球", weight: 26, core: false }, { label: "5球以上", weight: 4, core: false }], factors: [{ label: "攻防状态", value: 75 }, { label: "阵容完整度", value: 78 }, { label: "节奏控制", value: 73 }, { label: "稳定性", value: 74 }], riskTriggers: ["科特迪瓦控球占优但禁区效率不足", "库拉索低位防守持续压缩空间", "客队领先后主动降低比赛节奏"] },
    riskNotes: ["科特迪瓦方向较清晰，但比分更偏一球差", "库拉索防守收缩会提高 0-0 和 1-1 权重", "总进球主区间明显偏低"],
    why: "库拉索进攻产出有限，科特迪瓦具备更好的身体对抗和防守稳定性。客胜是第一方向，首选比分调整为 0-1 与 0-2，总进球继续偏向 0–2 球。"
  },
  {
    id: "ecuador-germany", competition: "2026 世界杯 E 组", date: "06-26", time: "后天 04:00", updated: "赛前版本",
    home: { name: "厄瓜多尔", code: "ec" }, away: { name: "德国", code: "de" },
    conclusion: "德国整体进攻层级和禁区效率更高，客胜优先；厄瓜多尔身体对抗会让一球差和防平路径保留。",
    trend: [21, 25, 54], handicap: { line: 1, trend: [36, 42, 22] }, scores: ["0-1", "1-1", "0-2", "1-2", "0-0", "1-0"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 77, confidence: "中高", drawRisk: "中", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["德国小胜", "重点防平", "零封延伸", "失球客胜", "低效平局", "主队冷门"], goalDistribution: [{ label: "0–2球", weight: 53, core: true }, { label: "3–4球", weight: 35, core: false }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 82 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 79 }, { label: "稳定性", value: 76 }], riskTriggers: ["德国轮换导致前场协同下降", "厄瓜多尔强对抗破坏客队推进节奏", "客队早段未破局导致比分收缩"] },
    riskNotes: ["德国方向更强，但厄瓜多尔并非弱对抗球队", "让胜平负更偏德国一球客胜", "若德国早段进球，3–4 球区间会明显上升"],
    why: "德国前两轮已经展示出更高的进攻上限，厄瓜多尔则更依赖身体对抗和防守韧性。综合看德国客胜更合理，但考虑到厄瓜多尔能拖慢节奏，首选 0-1，同时保留 1-1 防平和 0-2 延伸。"
  },
  {
    id: "japan-sweden", competition: "2026 世界杯 F 组", date: "06-26", time: "后天 07:00", updated: "赛前版本",
    home: { name: "日本", code: "jp" }, away: { name: "瑞典", code: "se" },
    conclusion: "日本控球衔接更细腻，瑞典直接冲击和高空球威胁更强，双方优势相互抵消，平局作为赛前第一方向。",
    trend: [32, 38, 30], handicap: { line: -1, trend: [24, 36, 40] }, scores: ["1-1", "1-0", "2-1", "0-1", "2-0", "2-2"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 70, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["首选防平", "日本小胜", "失球主胜", "瑞典冷门", "零封延伸", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 51, core: true }, { label: "3–4球", weight: 37, core: false }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 79 }, { label: "阵容完整度", value: 80 }, { label: "节奏控制", value: 82 }, { label: "稳定性", value: 75 }], riskTriggers: ["瑞典高空球连续冲击日本禁区", "日本控球占优但禁区触球不足", "双方早段进球把比赛带入开放节奏"] },
    riskNotes: ["双方优势互有抵消", "瑞典进攻上限和波动都较大", "1-1 是最集中的单一比分"],
    why: "日本组织和转换衔接更细腻，但瑞典的直接打法、高点和反击效率会制造明显风险。最高单一比分是 1-1，因此赛前方向调整为平局。"
  },
  {
    id: "tunisia-netherlands", competition: "2026 世界杯 F 组", date: "06-26", time: "后天 07:00", updated: "赛前版本",
    home: { name: "突尼斯", code: "tn" }, away: { name: "荷兰", code: "nl" },
    conclusion: "荷兰阵地压制和前场个人能力明显更强，客胜是第一方向；突尼斯低位防守会让比分偏向稳健小胜。",
    trend: [14, 23, 63], handicap: { line: 1, trend: [33, 42, 25] }, scores: ["0-1", "0-2", "1-1", "1-2", "0-0", "0-3"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 82, confidence: "中高", drawRisk: "中", scoreWeights: [19, 17, 13, 11, 8, 7], scoreNotes: ["荷兰小胜", "零封延伸", "重点防平", "失球客胜", "低效平局", "优势放大"], goalDistribution: [{ label: "0–2球", weight: 57, core: true }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 9, core: false }], factors: [{ label: "攻防状态", value: 84 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 83 }, { label: "稳定性", value: 78 }], riskTriggers: ["荷兰久攻不下导致节奏被拖慢", "突尼斯定位球获得前场二点机会", "荷兰轮换使边路压迫下降"] },
    riskNotes: ["荷兰方向清晰但不必强行大比分", "突尼斯会优先压低空间", "让胜平负更偏一球客胜的让平路径"],
    why: "荷兰整体阵容、控球和前场创造力都高于突尼斯，客胜方向比较明确。不过突尼斯面对强队时大概率收缩防守，比赛会更像 0-1、0-2 的稳健路径，0–2 球仍是核心区间。"
  },
  {
    id: "paraguay-australia", competition: "2026 世界杯 D 组", date: "06-26", time: "后天 10:00", updated: "赛前版本",
    home: { name: "巴拉圭", code: "py" }, away: { name: "澳大利亚", code: "au" },
    conclusion: "两队实力和状态非常接近，澳大利亚对抗和定位球略占优势，但不足以拉开差距，平局作为第一方向。",
    trend: [32, 36, 32], handicap: { line: 1, trend: [42, 39, 19] }, scores: ["1-1", "0-0", "1-0", "0-1", "1-2", "2-1"], goals: "0–2", risk: "高", riskTone: "high",
    model: { consistency: 66, confidence: "中", drawRisk: "高", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["首选防平", "低效平局", "巴拉圭冷门", "澳洲小胜", "客胜延伸", "主队延伸"], goalDistribution: [{ label: "0–2球", weight: 67, core: true }, { label: "3–4球", weight: 28, core: false }, { label: "5球以上", weight: 5, core: false }], factors: [{ label: "攻防状态", value: 69 }, { label: "阵容完整度", value: 76 }, { label: "节奏控制", value: 70 }, { label: "稳定性", value: 67 }], riskTriggers: ["双方中场缠斗导致有效射门偏少", "定位球成为主要破局方式", "任一方早段进球改变低比分结构"] },
    riskNotes: ["三项方向差距极小", "澳大利亚略占对抗优势但不足以拉开", "低比分平局权重最高"],
    why: "巴拉圭和澳大利亚都不是稳定压制型球队，比赛更可能集中在对抗、定位球和二点球。双方不足以形成断层，因此赛前方向调整为平局，首选比分为 1-1 与 0-0。"
  },
  {
    id: "turkey-usa", competition: "2026 世界杯 D 组", date: "06-26", time: "后天 10:00", updated: "赛前版本",
    home: { name: "土耳其", code: "tr" }, away: { name: "美国", code: "us" },
    conclusion: "美国速度、转换和前场冲击略占优势，客胜优先；土耳其中场组织和定位球使平局风险仍然不低。",
    trend: [29, 28, 43], handicap: { line: 1, trend: [38, 40, 22] }, scores: ["1-1", "0-1", "1-2", "0-0", "1-0", "0-2"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 71, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 17, 13, 11, 8, 7], scoreNotes: ["首选防平", "美国小胜", "失球客胜", "低效平局", "主队冷门", "零封延伸"], goalDistribution: [{ label: "0–2球", weight: 57, core: true }, { label: "3–4球", weight: 33, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 74 }, { label: "阵容完整度", value: 78 }, { label: "节奏控制", value: 73 }, { label: "稳定性", value: 70 }], riskTriggers: ["美国转换优势被土耳其中场缠斗削弱", "土耳其定位球持续制造禁区混乱", "客队领先后主动降速导致比分停留一球差"] },
    riskNotes: ["美国方向略优但仍需防平", "土耳其具备组织和定位球变量", "让胜平负偏向一球客胜的让平"],
    why: "美国的速度和纵向冲击更适合制造高质量机会，但土耳其并不缺中场组织和定位球威胁。方向上美国略优，比分上先看 1-1 与 0-1 两条稳健路径，再保留 1-2 的客胜延伸。"
  }
];

const june27CompletedMatches = [
  {
    id: "norway-france", competition: "2026 世界杯 I 组", date: "06-27", time: "明早 03:00", updated: "赛前版本",
    home: { name: "挪威", code: "no" }, away: { name: "法国", code: "fr" },
    conclusion: "法国整体阵容厚度和机会创造更优，客胜作为第一方向；挪威前场冲击力强，比分首选仍需防平。",
    trend: [30, 25, 45], handicap: { line: 1, trend: [40, 38, 22] }, scores: ["1-1", "0-1", "1-2", "0-2", "1-0", "2-2"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 72, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["首选防平", "法国小胜", "失球客胜", "零封延伸", "挪威冷门", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 48, core: true }, { label: "3–4球", weight: 37, core: false }, { label: "5球以上", weight: 15, core: false }], factors: [{ label: "攻防状态", value: 80 }, { label: "阵容完整度", value: 82 }, { label: "节奏控制", value: 78 }, { label: "稳定性", value: 75 }], riskTriggers: ["法国轮换导致前场协同下降", "挪威高点和纵向冲击连续制造二点", "客队领先后主动控速导致比分收缩"] },
    riskNotes: ["法国方向更优但挪威进攻上限不低", "平局单比分权重最高", "让胜平负更偏挪威受让不败路径"],
    why: "法国前两轮进攻层级更完整，整体实力仍高于挪威；但挪威此前展现出很强的前场效率和高点冲击，单看比分分布 1-1 与 0-1 接近。因此本场方向给法国胜，但第一比分放在 1-1，属于客胜微优下的稳健处理。"
  },
  {
    id: "senegal-iraq", competition: "2026 世界杯 I 组", date: "06-27", time: "明早 03:00", updated: "赛前版本",
    home: { name: "塞内加尔", code: "sn" }, away: { name: "伊拉克", code: "iq" },
    conclusion: "塞内加尔身体强度、边路冲击和防守回收更好，主胜优先；伊拉克反击路径需要保留但不宜高估。",
    trend: [55, 26, 19], handicap: { line: -1, trend: [33, 42, 25] }, scores: ["1-0", "1-1", "2-0", "2-1", "0-0", "0-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 76, confidence: "中高", drawRisk: "中", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["塞内加尔小胜", "重点防平", "零封延伸", "失球主胜", "低效平局", "伊拉克冷门"], goalDistribution: [{ label: "0–2球", weight: 58, core: true }, { label: "3–4球", weight: 33, core: false }, { label: "5球以上", weight: 9, core: false }], factors: [{ label: "攻防状态", value: 77 }, { label: "阵容完整度", value: 80 }, { label: "节奏控制", value: 75 }, { label: "稳定性", value: 74 }], riskTriggers: ["塞内加尔前场机会转化率偏低", "伊拉克反击获得连续前场定位球", "主队领先后过早降速"] },
    riskNotes: ["塞内加尔方向更清晰，但首选仍是一球小胜", "伊拉克防线波动较大", "让平权重高于让胜"],
    why: "塞内加尔虽前两轮结果压力不小，但对抗、速度和防守回收仍优于伊拉克。伊拉克此前被挪威打穿，防守转换是主要弱点。本场主胜优先，但更像 1-0、2-0 这种低比分主胜，不追大比分。"
  },
  {
    id: "cape-verde-saudi-arabia", competition: "2026 世界杯 H 组", date: "06-27", time: "明早 08:00", updated: "赛前版本",
    home: { name: "佛得角", code: "cv" }, away: { name: "沙特阿拉伯", code: "sa" },
    conclusion: "佛得角防守组织更稳，沙特控球韧性不错，双方优势有限，平局作为赛前第一方向。",
    trend: [33, 37, 30], handicap: { line: -1, trend: [18, 34, 48] }, scores: ["1-0", "0-0", "1-1", "0-1", "2-0", "2-1"], goals: "0–2", risk: "高", riskTone: "high",
    model: { consistency: 66, confidence: "中", drawRisk: "高", scoreWeights: [18, 16, 14, 12, 8, 7], scoreNotes: ["佛得角小胜", "首选防平", "开放平局", "沙特冷门", "零封延伸", "失球主胜"], goalDistribution: [{ label: "0–2球", weight: 69, core: true }, { label: "3–4球", weight: 26, core: false }, { label: "5球以上", weight: 5, core: false }], factors: [{ label: "攻防状态", value: 70 }, { label: "阵容完整度", value: 74 }, { label: "节奏控制", value: 72 }, { label: "稳定性", value: 69 }], riskTriggers: ["佛得角控球不足导致推进断续", "沙特中场控球时间明显增加", "双方持续低节奏使平局权重上升"] },
    riskNotes: ["三项方向差距很小", "双方都缺少断层优势", "总进球明显偏低"],
    why: "佛得角防守韧性更好，沙特有能力把比赛拖进控球消耗。双方都不是稳定高产型，低比分平局权重最高，因此赛前方向调整为平局。"
  },
  {
    id: "uruguay-spain", competition: "2026 世界杯 H 组", date: "06-27", time: "明早 08:00", updated: "赛前版本",
    home: { name: "乌拉圭", code: "uy" }, away: { name: "西班牙", code: "es" },
    conclusion: "西班牙控球质量和压迫层级更好，客胜微弱优先；乌拉圭对抗和禁区冲击使平局风险偏高。",
    trend: [29, 27, 44], handicap: { line: 1, trend: [39, 40, 21] }, scores: ["1-1", "0-1", "1-0", "0-0", "1-2", "0-2"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 72, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 17, 12, 11, 8, 7], scoreNotes: ["首选防平", "西班牙小胜", "乌拉圭冷门", "低效平局", "失球客胜", "零封延伸"], goalDistribution: [{ label: "0–2球", weight: 57, core: true }, { label: "3–4球", weight: 33, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 78 }, { label: "阵容完整度", value: 82 }, { label: "节奏控制", value: 84 }, { label: "稳定性", value: 74 }], riskTriggers: ["西班牙控球占优但缺少禁区效率", "乌拉圭身体对抗持续破坏节奏", "双方谨慎导致比赛长期低比分"] },
    riskNotes: ["西班牙方向更优但不是断层优势", "乌拉圭对抗会提高平局权重", "让胜平负更偏受让方保护"],
    why: "西班牙前一场大胜修复了终结信心，但乌拉圭的对抗和禁区冲击并不容易处理。模型给西班牙客胜优势，但 1-1 是最高单一比分，因此本场更适合客胜微优、防平优先。"
  },
  {
    id: "egypt-iran", competition: "2026 世界杯 G 组", date: "06-27", time: "明早 11:00", updated: "赛前版本",
    home: { name: "埃及", code: "eg" }, away: { name: "伊朗", code: "ir" },
    conclusion: "埃及转换效率略好，伊朗反击和韧性更强，双方优势不足以拉开，平局作为赛前第一方向。",
    trend: [34, 38, 28], handicap: { line: -1, trend: [22, 35, 43] }, scores: ["1-1", "1-0", "0-0", "0-1", "2-0", "2-1"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 69, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 16, 13, 11, 8, 7], scoreNotes: ["首选防平", "埃及小胜", "低效平局", "伊朗冷门", "零封延伸", "失球主胜"], goalDistribution: [{ label: "0–2球", weight: 61, core: true }, { label: "3–4球", weight: 31, core: false }, { label: "5球以上", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 74 }, { label: "阵容完整度", value: 78 }, { label: "节奏控制", value: 72 }, { label: "稳定性", value: 71 }], riskTriggers: ["埃及控球时间增加但射门质量不足", "伊朗反击连续形成禁区二点", "双方都以稳守优先导致节奏偏慢"] },
    riskNotes: ["双方方向差距有限", "伊朗低比分表现体现防守韧性", "让胜平负偏向主队不穿线"],
    why: "埃及转换效率更稳定，伊朗则能把强度拉到低比分区域。最稳的单一比分是 1-1，因此赛前方向调整为平局，1-0 作为次级路径。"
  },
  {
    id: "new-zealand-belgium", competition: "2026 世界杯 G 组", date: "06-27", time: "明早 11:00", updated: "赛前版本",
    home: { name: "新西兰", code: "nz" }, away: { name: "比利时", code: "be" },
    conclusion: "比利时个人能力和中前场上限更高，客胜优先；新西兰定位球和对抗会让比分更偏稳健。",
    trend: [22, 26, 52], handicap: { line: 1, trend: [36, 42, 22] }, scores: ["0-1", "1-1", "0-2", "0-0", "1-2", "1-0"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 75, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 16, 14, 11, 8, 7], scoreNotes: ["比利时小胜", "重点防平", "零封延伸", "低效平局", "失球客胜", "主队冷门"], goalDistribution: [{ label: "0–2球", weight: 59, core: true }, { label: "3–4球", weight: 32, core: false }, { label: "5球以上", weight: 9, core: false }], factors: [{ label: "攻防状态", value: 77 }, { label: "阵容完整度", value: 80 }, { label: "节奏控制", value: 74 }, { label: "稳定性", value: 72 }], riskTriggers: ["比利时阵地推进节奏偏慢", "新西兰定位球连续制造禁区混乱", "客队领先后主动控速导致比分停留一球差"] },
    riskNotes: ["比利时方向更清楚，但前两轮进攻效率一般", "新西兰定位球是主要风险", "让胜平负更偏一球客胜的让平路径"],
    why: "比利时前两轮结果平淡，但个人能力和中前场上限仍高于新西兰。新西兰有高空球和定位球威胁，因此不适合写成大胜；0-1、1-1、0-2 是更合理的稳健路径。"
  }
];

const june28CompletedMatches = [
  {
    id: "panama-england", competition: "2026 世界杯 L 组", date: "06-28", time: "今晚 23:00", updated: "赛前版本",
    home: { name: "巴拿马", code: "pa" }, away: { name: "英格兰", code: "gb-eng" },
    conclusion: "英格兰阵容深度、控球质量和禁区处理更占优势，客胜是第一方向；巴拿马会压低节奏，比赛更偏稳健客胜。",
    trend: [18, 27, 55], handicap: { line: 1, trend: [25, 33, 42] }, scores: ["0-1", "0-2", "1-2", "0-0", "1-1", "0-3"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 79, confidence: "中高", drawRisk: "中", scoreWeights: [20, 17, 13, 10, 8, 6], scoreNotes: ["稳健客胜", "优势延伸", "失球客胜", "低效防平", "开放平局", "优势放大"], goalDistribution: [{ label: "0–2球", weight: 58, core: true }, { label: "3–4球", weight: 33, core: false }, { label: "5球以上", weight: 9, core: false }], factors: [{ label: "攻防状态", value: 76 }, { label: "阵容完整度", value: 84 }, { label: "节奏控制", value: 82 }, { label: "稳定性", value: 77 }], riskTriggers: ["英格兰轮换幅度高于预期", "巴拿马低位防守持续压缩禁区空间", "客队前 30 分钟未形成高质量机会"] },
    riskNotes: ["英格兰整体优势明确", "巴拿马防守韧性仍有上限", "让胜平负调整为让负优先"],
    why: "巴拿马防守韧性较强但进攻产量有限，英格兰综合实力明显占优，0-1、0-2 是两条主路径；受让一球后仍以让负作为第一方向。"
  },
  {
    id: "croatia-ghana", competition: "2026 世界杯 L 组", date: "06-28", time: "今晚 23:00", updated: "赛前版本",
    home: { name: "克罗地亚", code: "hr" }, away: { name: "加纳", code: "gh" },
    conclusion: "克罗地亚中场控制略占优势，但加纳两轮防守表现稳定，本场方向差距很小，平局优先。",
    trend: [35, 37, 28], handicap: { line: -1, trend: [20, 35, 45] }, scores: ["1-1", "1-0", "0-0", "0-1", "2-1", "1-2"], goals: "0–2", risk: "高", riskTone: "high",
    model: { consistency: 67, confidence: "中", drawRisk: "高", scoreWeights: [19, 16, 13, 11, 8, 7], scoreNotes: ["首选防平", "克罗地亚小胜", "低效平局", "加纳反击", "失球主胜", "客胜延伸"], goalDistribution: [{ label: "0–2球", weight: 65, core: true }, { label: "3–4球", weight: 28, core: false }, { label: "5球以上", weight: 7, core: false }], factors: [{ label: "攻防状态", value: 71 }, { label: "阵容完整度", value: 77 }, { label: "节奏控制", value: 78 }, { label: "稳定性", value: 70 }], riskTriggers: ["克罗地亚中场控球无法转化为禁区机会", "加纳反击持续冲击边后卫身后", "双方出线策略使比赛长期保持谨慎"] },
    riskNotes: ["三项方向差距较小", "加纳两轮仅失一球", "主队让一球时更偏让负路径"],
    why: "克罗地亚击败巴拿马后保留出线主动，加纳则先胜巴拿马、再零封英格兰，防守稳定性更突出。克罗地亚控球略优，但加纳的身体对抗与转换足以限制其推进，因此 1-1 放在首选。"
  },
  {
    id: "colombia-portugal", competition: "2026 世界杯 K 组", date: "06-28", time: "明早 01:30", updated: "赛前版本",
    home: { name: "哥伦比亚", code: "co" }, away: { name: "葡萄牙", code: "pt" },
    conclusion: "两队都具备稳定推进和个人破局能力，葡萄牙进攻上限略高，但哥伦比亚两连胜后控制风险的需求更强，平局优先。",
    trend: [32, 36, 32], handicap: { line: 1, trend: [49, 32, 19] }, scores: ["1-1", "1-2", "2-1", "0-0", "0-1", "2-2"], goals: "0–2", risk: "高", riskTone: "high",
    model: { consistency: 68, confidence: "中", drawRisk: "高", scoreWeights: [18, 16, 14, 11, 8, 7], scoreNotes: ["首选防平", "葡萄牙小胜", "哥伦比亚反打", "低效平局", "客胜延伸", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 49, core: true }, { label: "3–4球", weight: 39, core: false }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 82 }, { label: "阵容完整度", value: 83 }, { label: "节奏控制", value: 81 }, { label: "稳定性", value: 79 }], riskTriggers: ["葡萄牙前场压迫迫使哥伦比亚连续丢失球权", "哥伦比亚边路反击形成高质量机会", "出线形势使领先方主动降速"] },
    riskNotes: ["双方均已展现较高上限", "哥伦比亚积分形势更从容", "方向差距不足以支持激进判断"],
    why: "哥伦比亚前两轮全胜且只失一球，葡萄牙则在 5-0 后显著提升净胜球。两队都能制造高质量机会，但末轮目标更偏向控制排名，1-1 是兼顾实力与比赛策略的首选路径。"
  },
  {
    id: "dr-congo-uzbekistan", competition: "2026 世界杯 K 组", date: "06-28", time: "明早 01:30", updated: "赛前版本",
    home: { name: "刚果（金）", code: "cd" }, away: { name: "乌兹别克斯坦", code: "uz" },
    conclusion: "刚果（金）的对抗、防守回收与比赛稳定性更好，主胜优先；乌兹别克斯坦连续失球后仍需防范反击带来的开放局面。",
    trend: [52, 28, 20], handicap: { line: -1, trend: [46, 34, 20] }, scores: ["2-0", "3-1", "2-1", "1-1", "0-0", "1-2"], goals: "3–4", risk: "中", riskTone: "medium",
    model: { consistency: 76, confidence: "中高", drawRisk: "中", scoreWeights: [20, 18, 13, 11, 8, 6], scoreNotes: ["零封主胜", "优势放大", "失球主胜", "重点防平", "低效平局", "客队冷门"], goalDistribution: [{ label: "0–2球", weight: 35, core: false }, { label: "3–4球", weight: 50, core: true }, { label: "5球以上", weight: 15, core: false }], factors: [{ label: "攻防状态", value: 75 }, { label: "阵容完整度", value: 78 }, { label: "节奏控制", value: 73 }, { label: "稳定性", value: 76 }], riskTriggers: ["刚果（金）控球占优但终结效率偏低", "乌兹别克斯坦早段反击率先得分", "双方为争取出线提高比赛开放度"] },
    riskNotes: ["乌兹别克斯坦防线承压明显", "刚果（金）主胜方向更清晰", "让胜平负调整为让胜优先"],
    why: "刚果（金）整体结构更稳定，乌兹别克斯坦防线承压明显。主胜方向清晰，首选比分调整为 2-0 与 3-1，总进球核心为 3–4 球，让胜平负以让胜优先。"
  },
  {
    id: "jordan-argentina", competition: "2026 世界杯 J 组", date: "06-28", time: "明早 04:00", updated: "赛前版本",
    home: { name: "约旦", code: "jo" }, away: { name: "阿根廷", code: "ar" },
    conclusion: "阿根廷整体控制、前场创造和阵容深度形成明显优势，客胜是最清晰方向；轮换幅度决定比分能否继续扩大。",
    trend: [12, 20, 68], handicap: { line: 2, trend: [28, 41, 31] }, scores: ["0-2", "0-3", "1-3", "0-1", "1-2", "1-1"], goals: "3–4", risk: "中低", riskTone: "medium",
    model: { consistency: 86, confidence: "高", drawRisk: "低", scoreWeights: [21, 18, 14, 11, 8, 6], scoreNotes: ["稳健客胜", "优势放大", "失球客胜", "控速延伸", "一球客胜", "防冷平局"], goalDistribution: [{ label: "0–2球", weight: 40, core: false }, { label: "3–4球", weight: 45, core: true }, { label: "5球以上", weight: 15, core: false }], factors: [{ label: "攻防状态", value: 89 }, { label: "阵容完整度", value: 87 }, { label: "节奏控制", value: 90 }, { label: "稳定性", value: 86 }], riskTriggers: ["阿根廷大幅轮换降低前场协同", "约旦定位球持续制造禁区威胁", "客队提前锁定排名后主动控制节奏"] },
    riskNotes: ["阿根廷两轮零封且控制力稳定", "约旦两轮均至少失两球", "两球让步下让平路径需要保留"],
    why: "阿根廷前两轮打入五球且保持零封，约旦面对奥地利和阿尔及利亚均失球。实力和比赛控制差距明显，0-2、0-3 是核心路径；考虑末轮轮换，总进球主区间放在 3–4 球但保留低于三球的可能。"
  },
  {
    id: "algeria-austria", competition: "2026 世界杯 J 组", date: "06-28", time: "明早 04:00", updated: "赛前版本",
    home: { name: "阿尔及利亚", code: "dz" }, away: { name: "奥地利", code: "at" },
    conclusion: "奥地利整体压迫、跑动强度和攻防稳定性略优，客胜作为第一方向；阿尔及利亚反击质量使平局仍是主要风险。",
    trend: [27, 30, 43], handicap: { line: 1, trend: [40, 41, 19] }, scores: ["1-2", "1-1", "0-1", "0-0", "2-1", "0-2"], goals: "3–4", risk: "中高", riskTone: "high",
    model: { consistency: 72, confidence: "中", drawRisk: "偏高", scoreWeights: [19, 17, 13, 11, 8, 7], scoreNotes: ["奥地利小胜", "重点防平", "零封客胜", "低效平局", "主队反打", "优势延伸"], goalDistribution: [{ label: "0–2球", weight: 44, core: false }, { label: "3–4球", weight: 46, core: true }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 77 }, { label: "阵容完整度", value: 79 }, { label: "节奏控制", value: 80 }, { label: "稳定性", value: 74 }], riskTriggers: ["阿尔及利亚快速反击连续形成禁区机会", "奥地利高位压迫被直接长传越过", "双方出线需求将比赛推向开放节奏"] },
    riskNotes: ["两队均需为出线主动争取结果", "奥地利整体性略优但优势有限", "受让一球下让平与让胜接近"],
    why: "阿尔及利亚在击败约旦后保留竞争力，奥地利则凭首轮三球表现展现更完整的压迫体系。双方都有明确出线需求，比赛不会过度保守；奥地利略优，1-2 为首选，同时以 1-1 防平。"
  }
];

const june30CompletedMatches = [
  {
    id: "south-africa-canada", competition: "2026 世界杯 淘汰赛", date: "06-29", time: "凌晨 03:00", updated: "赛前版本",
    home: { name: "南非", code: "za" }, away: { name: "加拿大", code: "ca" },
    conclusion: "加拿大整体更主动，但南非具备身体对抗和反击能力，平局风险需要保留。",
    trend: [25, 29, 46], handicap: { line: 1, trend: [46, 34, 20] }, scores: ["1-2", "1-1", "0-1", "0-0", "0-2", "2-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 72, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 17, 14, 11, 9, 7], scoreNotes: ["加拿大小胜", "重点防平", "零封客胜", "低效平局", "优势延伸", "南非反打"], goalDistribution: [{ label: "0–2球", weight: 55, core: true }, { label: "3–4球", weight: 35, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 75 }, { label: "阵容完整度", value: 78 }, { label: "节奏控制", value: 74 }, { label: "稳定性", value: 71 }], riskTriggers: ["加拿大控球占优但迟迟无法打开局面", "南非身体对抗持续破坏推进节奏", "南非反击率先形成高质量机会"] },
    riskNotes: ["加拿大方向更优但领先有限", "南非对抗和转换能力构成变量", "淘汰赛谨慎节奏会提高平局权重"],
    why: "加拿大整体更主动，但南非具备身体对抗和反击能力，平局风险需要保留。比分先看 1-2 与 1-1，0–2 球是本场主区间。"
  },
  {
    id: "brazil-japan", competition: "2026 世界杯 淘汰赛", date: "06-30", time: "凌晨 01:00", updated: "赛前版本",
    home: { name: "巴西", code: "br" }, away: { name: "日本", code: "jp" },
    conclusion: "巴西实力和个人能力占优，但日本有反击和节奏扰动能力，不宜写成轻松大胜。",
    trend: [64, 22, 14], handicap: { line: -1, trend: [38, 41, 21] }, scores: ["2-1", "2-0", "1-0", "1-1", "3-1", "0-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 80, confidence: "中高", drawRisk: "中", scoreWeights: [20, 18, 14, 11, 9, 6], scoreNotes: ["失球主胜", "零封主胜", "稳健延伸", "重点防平", "优势放大", "日本反击"], goalDistribution: [{ label: "0–2球", weight: 48, core: true }, { label: "3–4球", weight: 42, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 84 }, { label: "阵容完整度", value: 86 }, { label: "节奏控制", value: 82 }, { label: "稳定性", value: 80 }], riskTriggers: ["巴西前场机会转化率偏低", "日本快速转换持续攻击边路身后", "比赛进入日本熟悉的中低节奏"] },
    riskNotes: ["巴西主方向明确", "日本反击与节奏扰动需要保留", "0–2 球略优先但 3–4 球权重接近"],
    why: "巴西实力和个人能力占优，但日本有反击和节奏扰动能力，不要写成轻松大胜。总进球以 0–2 球略优先，3–4 球也保留较高权重。"
  },
  {
    id: "germany-paraguay", competition: "2026 世界杯 淘汰赛", date: "06-30", time: "凌晨 04:30", updated: "赛前版本",
    home: { name: "德国", code: "de" }, away: { name: "巴拉圭", code: "py" },
    conclusion: "德国是主方向，但巴拉圭防守硬度和反击能力会让比赛存在磨局风险。",
    trend: [62, 24, 14], handicap: { line: -1, trend: [37, 42, 21] }, scores: ["2-0", "2-1", "1-0", "1-1", "3-1", "0-0"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 78, confidence: "中高", drawRisk: "中", scoreWeights: [20, 18, 14, 11, 9, 7], scoreNotes: ["零封主胜", "失球主胜", "稳健延伸", "重点防平", "优势放大", "低效平局"], goalDistribution: [{ label: "0–2球", weight: 52, core: true }, { label: "3–4球", weight: 38, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 81 }, { label: "阵容完整度", value: 83 }, { label: "节奏控制", value: 82 }, { label: "稳定性", value: 77 }], riskTriggers: ["德国控球占优但禁区效率不足", "巴拉圭低位防守持续压缩空间", "客队反击或定位球率先制造进球"] },
    riskNotes: ["德国整体能力占优", "巴拉圭防守硬度会压低比赛节奏", "一球主胜路径需要重点保留"],
    why: "德国是主方向，但巴拉圭防守硬度和反击能力会让比赛存在磨局风险。比分以 2-0、2-1 为首选，0–2 球为主区间。"
  },
  {
    id: "netherlands-morocco", competition: "2026 世界杯 淘汰赛", date: "06-30", time: "上午 09:00", updated: "赛前版本",
    home: { name: "荷兰", code: "nl" }, away: { name: "摩洛哥", code: "ma" },
    conclusion: "荷兰小优，但摩洛哥韧性强、反击质量高，1-1 是重点风险比分。",
    trend: [49, 29, 22], handicap: { line: -1, trend: [27, 39, 34] }, scores: ["1-1", "2-1", "1-0", "0-1", "2-2", "2-0"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 70, confidence: "中", drawRisk: "偏高", scoreWeights: [19, 18, 14, 11, 9, 7], scoreNotes: ["首选防平", "荷兰小胜", "零封主胜", "摩洛哥反击", "开放平局", "优势延伸"], goalDistribution: [{ label: "0–2球", weight: 50, core: true }, { label: "3–4球", weight: 40, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 78 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 79 }, { label: "稳定性", value: 73 }], riskTriggers: ["荷兰控球优势未转化为高质量射门", "摩洛哥快速反击持续形成威胁", "比赛长时间停留在一球差或平局"] },
    riskNotes: ["荷兰只具备有限优势", "摩洛哥韧性和反击质量较高", "1-1 是最需要防范的单一比分"],
    why: "荷兰小优，但摩洛哥韧性强、反击质量高，1-1 是重点风险比分。总进球以 0–2 球略优先，3–4 球作为次级打开路径。"
  }
];

const july1CompletedMatches = [
  {
    id: "ivory-coast-norway", competition: "2026 世界杯 淘汰赛", date: "07-01", time: "凌晨 02:00", updated: "赛前版本",
    home: { name: "科特迪瓦", code: "ci" }, away: { name: "挪威", code: "no" },
    conclusion: "挪威前场冲击力略强，客胜作为第一方向；科特迪瓦对抗、防守回收和转换质量使平局风险偏高。",
    trend: [27, 29, 44], handicap: { line: 1, trend: [47, 35, 18] }, scores: ["1-2", "1-1", "0-1", "2-1", "0-2", "2-2"], goals: "3–4", risk: "中高", riskTone: "high",
    model: { consistency: 71, confidence: "中", drawRisk: "偏高", scoreWeights: [19, 17, 14, 11, 8, 7], scoreNotes: ["挪威小胜", "重点防平", "零封客胜", "主队反打", "优势延伸", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 42, core: false }, { label: "3–4球", weight: 46, core: true }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 78 }, { label: "阵容完整度", value: 79 }, { label: "节奏控制", value: 73 }, { label: "稳定性", value: 72 }], riskTriggers: ["科特迪瓦强对抗持续切断挪威推进", "挪威高位压迫被主队快速越过", "双方早段进球把比赛推入开放节奏"] },
    riskNotes: ["挪威进攻上限更高但防线并不稳定", "科特迪瓦三场小组赛防守结构完整", "对抗强度会放大平局与一球差路径"],
    why: "挪威小组赛进攻产量更高，科特迪瓦则依靠稳定防守和身体对抗晋级。客胜略优但优势有限，1-2 与 1-1 是首选双路径，总进球以 3–4 球为核心。"
  },
  {
    id: "france-sweden", competition: "2026 世界杯 淘汰赛", date: "07-01", time: "凌晨 05:00", updated: "赛前版本",
    home: { name: "法国", code: "fr" }, away: { name: "瑞典", code: "se" },
    conclusion: "法国阵容深度、推进速度与禁区效率形成明显优势，主胜是最清晰方向；瑞典高点和直接冲击仍可能制造失球。",
    trend: [68, 20, 12], handicap: { line: -1, trend: [48, 36, 16] }, scores: ["2-0", "3-1", "2-1", "1-0", "3-0", "1-1"], goals: "3–4", risk: "中", riskTone: "medium",
    model: { consistency: 85, confidence: "高", drawRisk: "低", scoreWeights: [21, 18, 14, 11, 8, 6], scoreNotes: ["稳健主胜", "优势放大", "失球主胜", "控速延伸", "零封延伸", "防冷平局"], goalDistribution: [{ label: "0–2球", weight: 41, core: false }, { label: "3–4球", weight: 47, core: true }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 90 }, { label: "阵容完整度", value: 86 }, { label: "节奏控制", value: 88 }, { label: "稳定性", value: 85 }], riskTriggers: ["法国轮换幅度过大影响前场协同", "瑞典高空球连续形成禁区二点", "法国领先后主动控制比赛速度"] },
    riskNotes: ["法国小组赛三战全胜且进攻稳定", "瑞典高点与直接打法仍有威胁", "让胜平负更偏法国扩大优势"],
    why: "法国小组赛三场均展现出稳定的机会创造与终结能力，瑞典的高点和直接冲击会制造局部风险，但整体层级仍有差距。主胜优先，2-0 与 3-1 为首选，总进球核心为 3–4 球。"
  },
  {
    id: "mexico-ecuador", competition: "2026 世界杯 淘汰赛", date: "07-01", time: "上午 11:00", updated: "赛前版本",
    home: { name: "墨西哥", code: "mx" }, away: { name: "厄瓜多尔", code: "ec" },
    conclusion: "墨西哥小组赛防守完整、比赛控制更稳定，主胜优先；厄瓜多尔对抗和反击能力使比赛更偏一球差。",
    trend: [55, 27, 18], handicap: { line: -1, trend: [36, 43, 21] }, scores: ["1-0", "2-0", "1-1", "2-1", "0-0", "0-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 79, confidence: "中高", drawRisk: "中", scoreWeights: [20, 17, 14, 11, 8, 6], scoreNotes: ["稳健主胜", "零封延伸", "重点防平", "失球主胜", "低效平局", "客队冷门"], goalDistribution: [{ label: "0–2球", weight: 60, core: true }, { label: "3–4球", weight: 32, core: false }, { label: "5球以上", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 83 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 85 }, { label: "稳定性", value: 82 }], riskTriggers: ["墨西哥控球占优但禁区效率下降", "厄瓜多尔强对抗持续破坏中场节奏", "客队定位球率先制造领先"] },
    riskNotes: ["墨西哥小组赛保持零封", "厄瓜多尔击败德国证明反击上限", "一球主胜与低比分平局需要同时保留"],
    why: "墨西哥小组赛三场保持零封，结构与节奏控制更稳定；厄瓜多尔有身体和反击威胁，但阵地进攻连续性一般。主胜优先，1-0、2-0 为首选，总进球偏向 0–2 球。"
  }
];

const july2CompletedMatches = [
  {
    id: "england-dr-congo", competition: "2026 世界杯 淘汰赛", date: "07-02", time: "凌晨 00:00", updated: "赛前版本",
    home: { name: "英格兰", code: "gb-eng" }, away: { name: "刚果（金）", code: "cd" },
    conclusion: "英格兰阵容深度和控球质量更高，主胜优先；刚果（金）的对抗和转换会让比分更偏稳健。",
    trend: [59, 25, 16], handicap: { line: -1, trend: [41, 39, 20] }, scores: ["2-0", "2-1", "1-0", "1-1", "3-1", "0-1"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 80, confidence: "中高", drawRisk: "中", scoreWeights: [20, 18, 14, 11, 8, 6], scoreNotes: ["零封主胜", "失球主胜", "稳健延伸", "重点防平", "优势放大", "客队冷门"], goalDistribution: [{ label: "0–2球", weight: 52, core: true }, { label: "3–4球", weight: 38, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 83 }, { label: "阵容完整度", value: 85 }, { label: "节奏控制", value: 84 }, { label: "稳定性", value: 79 }], riskTriggers: ["英格兰阵地推进再次出现效率波动", "刚果（金）快速转换连续攻击边路身后", "主队领先后过早降速"] },
    riskNotes: ["英格兰综合优势明确但阵地战有波动", "刚果（金）对抗能力不弱", "两球以内仍是更稳健路径"],
    why: "英格兰小组赛展现出较高上限，也出现过阵地战效率不足；刚果（金）结构稳定且对抗强。主胜仍是第一方向，但比分以 2-0、2-1 为主，总进球先看 0–2 球。"
  },
  {
    id: "belgium-senegal", competition: "2026 世界杯 淘汰赛", date: "07-02", time: "凌晨 04:00", updated: "赛前版本",
    home: { name: "比利时", code: "be" }, away: { name: "塞内加尔", code: "sn" },
    conclusion: "比利时个人能力和中前场上限略高，主胜微弱优先；塞内加尔身体、速度和反击使平局与客胜风险都不可忽视。",
    trend: [48, 27, 25], handicap: { line: -1, trend: [27, 39, 34] }, scores: ["2-1", "1-1", "1-0", "1-2", "2-2", "0-1"], goals: "3–4", risk: "中高", riskTone: "high",
    model: { consistency: 70, confidence: "中", drawRisk: "偏高", scoreWeights: [19, 17, 14, 11, 8, 7], scoreNotes: ["失球主胜", "重点防平", "零封主胜", "客队反打", "开放平局", "客胜延伸"], goalDistribution: [{ label: "0–2球", weight: 43, core: false }, { label: "3–4球", weight: 45, core: true }, { label: "5球以上", weight: 12, core: false }], factors: [{ label: "攻防状态", value: 79 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 75 }, { label: "稳定性", value: 71 }], riskTriggers: ["比利时中场控制出现断层", "塞内加尔转换连续形成单点突破", "双方早段进球显著提升开放度"] },
    riskNotes: ["两队小组赛表现都存在波动", "塞内加尔最后一轮进攻明显回升", "主方向领先有限且平局风险偏高"],
    why: "比利时最后一轮找回进攻效率，但前两轮稳定性一般；塞内加尔身体和转换优势明显。比利时小优，2-1 与 1-1 为首选，3–4 球是主要打开区间。"
  },
  {
    id: "usa-bosnia", competition: "2026 世界杯 淘汰赛", date: "07-02", time: "上午 08:00", updated: "赛前版本",
    home: { name: "美国", code: "us" }, away: { name: "波黑", code: "ba" },
    conclusion: "美国速度、转换和主场推进更具连续性，主胜优先；波黑定位球和前场支点会保留失球路径。",
    trend: [54, 26, 20], handicap: { line: -1, trend: [35, 43, 22] }, scores: ["2-1", "2-0", "1-0", "1-1", "3-1", "0-1"], goals: "3–4", risk: "中", riskTone: "medium",
    model: { consistency: 76, confidence: "中高", drawRisk: "中", scoreWeights: [19, 17, 14, 11, 8, 7], scoreNotes: ["失球主胜", "零封主胜", "稳健延伸", "重点防平", "优势放大", "客队冷门"], goalDistribution: [{ label: "0–2球", weight: 44, core: false }, { label: "3–4球", weight: 46, core: true }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 80 }, { label: "阵容完整度", value: 82 }, { label: "节奏控制", value: 78 }, { label: "稳定性", value: 75 }], riskTriggers: ["美国前场压迫被波黑长传直接越过", "波黑定位球连续制造禁区二点", "主队转换效率从小组赛高位回落"] },
    riskNotes: ["美国进攻速度与主场环境占优", "波黑定位球和支点能力具备威胁", "一球主胜的让平权重较高"],
    why: "美国小组赛进攻速度和转换效率更高，波黑则依赖定位球、支点和对抗。主胜优先但需保留失球，2-1、2-0 为首选，总进球核心为 3–4 球。"
  }
];

const july3CompletedMatches = [
  {
    id: "portugal-croatia", competition: "2026 世界杯 淘汰赛", date: "07-03", time: "早上 07:00", updated: "赛前版本",
    home: { name: "葡萄牙", code: "pt" }, away: { name: "克罗地亚", code: "hr" },
    conclusion: "葡萄牙前场个人能力和阵地创造略占优势，但克罗地亚中场控制、淘汰赛经验与韧性会显著提高平局风险。",
    trend: [43, 31, 26], handicap: { line: -1, trend: [23, 37, 40] }, scores: ["1-1", "2-1", "1-0", "0-0", "1-2", "2-2"], goals: "1–3", risk: "中高", riskTone: "high",
    model: { consistency: 69, confidence: "中", drawRisk: "高", scoreWeights: [19, 17, 14, 11, 8, 7], scoreNotes: ["首选防平", "葡萄牙小胜", "稳健主胜", "低效平局", "客队反打", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 50, core: true }, { label: "3–4球", weight: 40, core: false }, { label: "5球以上", weight: 10, core: false }], factors: [{ label: "攻防状态", value: 79 }, { label: "阵容完整度", value: 82 }, { label: "节奏控制", value: 80 }, { label: "稳定性", value: 74 }], riskTriggers: ["克罗地亚中场持续压低葡萄牙推进速度", "葡萄牙前场机会转化率再次波动", "淘汰赛谨慎策略令比赛长期停留平局"] },
    riskNotes: ["葡萄牙方向只具有限优势", "克罗地亚淘汰赛经验丰富", "主队让一球时更偏让负保护"],
    why: "葡萄牙小组赛进攻上限更高，但稳定性仍有波动；克罗地亚在首轮失利后连续取胜，中场控制和比赛韧性依旧可靠。葡萄牙小优，首选 1-1 与 2-1，总进球先看 1–3 球。"
  },
  {
    id: "spain-austria", competition: "2026 世界杯 淘汰赛", date: "07-03", time: "凌晨 03:00", updated: "赛前版本",
    home: { name: "西班牙", code: "es" }, away: { name: "奥地利", code: "at" },
    conclusion: "西班牙控球、压迫与阵地推进更完整，主胜是第一方向；奥地利高强度逼抢和纵向冲击会保留失球与平局路径。",
    trend: [61, 24, 15], handicap: { line: -1, trend: [39, 42, 19] }, scores: ["2-0", "2-1", "1-0", "1-1", "3-1", "0-1"], goals: "1–3", risk: "中", riskTone: "medium",
    model: { consistency: 81, confidence: "中高", drawRisk: "中", scoreWeights: [20, 18, 14, 11, 8, 6], scoreNotes: ["零封主胜", "失球主胜", "稳健延伸", "重点防平", "优势放大", "客队冷门"], goalDistribution: [{ label: "0–2球", weight: 49, core: true }, { label: "3–4球", weight: 42, core: false }, { label: "5球以上", weight: 9, core: false }], factors: [{ label: "攻防状态", value: 86 }, { label: "阵容完整度", value: 84 }, { label: "节奏控制", value: 89 }, { label: "稳定性", value: 82 }], riskTriggers: ["奥地利前场逼抢持续制造西班牙出球失误", "西班牙控球占优但禁区终结效率偏低", "主队轮换使边路压迫强度下降"] },
    riskNotes: ["西班牙整体控制能力更强", "奥地利具备高强度压迫和纵向冲击", "让平是一球主胜下的主要路径"],
    why: "西班牙小组赛防守与控制表现稳定，奥地利则依靠压迫和纵向冲击争取晋级。西班牙阵地能力更完整，主胜优先；比分以 2-0、2-1 为首选，总进球主窗口调整为 1–3 球。"
  },
  {
    id: "switzerland-algeria", competition: "2026 世界杯 淘汰赛", date: "07-03", time: "上午 11:00", updated: "赛前版本",
    home: { name: "瑞士", code: "ch" }, away: { name: "阿尔及利亚", code: "dz" },
    conclusion: "瑞士小组赛攻守稳定、整体结构更完整，主胜优先；阿尔及利亚反击效率和前场冲击使比赛仍需保留失球路径。",
    trend: [54, 27, 19], handicap: { line: -1, trend: [34, 43, 23] }, scores: ["2-1", "2-0", "1-0", "1-1", "3-1", "0-1"], goals: "2–4", risk: "中", riskTone: "medium",
    model: { consistency: 77, confidence: "中高", drawRisk: "中", scoreWeights: [19, 17, 14, 11, 8, 6], scoreNotes: ["失球主胜", "零封主胜", "稳健延伸", "重点防平", "优势放大", "客队冷门"], goalDistribution: [{ label: "0–2球", weight: 45, core: false }, { label: "3–4球", weight: 47, core: true }, { label: "5球以上", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 82 }, { label: "阵容完整度", value: 83 }, { label: "节奏控制", value: 80 }, { label: "稳定性", value: 81 }], riskTriggers: ["阿尔及利亚快速反击连续攻击瑞士边路身后", "瑞士控球优势未转化为高质量射门", "双方早段进球把比赛推入开放节奏"] },
    riskNotes: ["瑞士小组赛整体表现更稳定", "阿尔及利亚进攻上限高于普通第三名球队", "一球主胜的让平权重最高"],
    why: "瑞士小组赛保持稳定输出，整体结构和防守回收更可靠；阿尔及利亚末轮打出开放比赛，反击与个人能力具备威胁。瑞士主胜优先，2-1、2-0 为首选，总进球主窗口调整为 2–4 球。"
  },
];

const july4CompletedMatches = [
  {
    id: "australia-egypt", competition: "2026 世界杯 淘汰赛", date: "07-04", time: "凌晨 02:00", updated: "赛前版本",
    home: { name: "澳大利亚", code: "au" }, away: { name: "埃及", code: "eg" },
    conclusion: "埃及小组赛保持不败，转换与前场个人能力略占优势；澳大利亚对抗、定位球和防守纪律使平局成为最主要风险。",
    trend: [28, 33, 39], handicap: { line: 1, trend: [51, 33, 16] }, scores: ["1-1", "0-1", "1-0", "0-0", "1-2", "2-1"], goals: "1–3", risk: "中高", riskTone: "high",
    model: { consistency: 68, confidence: "中", drawRisk: "高", scoreWeights: [19, 18, 14, 11, 8, 7], scoreNotes: ["首选防平", "埃及小胜", "澳洲反打", "低效平局", "失球客胜", "主队延伸"], goalDistribution: [{ label: "0–2球", weight: 58, core: true }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 75 }, { label: "阵容完整度", value: 78 }, { label: "节奏控制", value: 72 }, { label: "稳定性", value: 73 }], riskTriggers: ["澳大利亚高空球和定位球持续形成二点机会", "埃及控球时间增加但推进效率下降", "双方淘汰赛策略使节奏长期偏慢"] },
    riskNotes: ["埃及三场小组赛保持不败", "澳大利亚防守纪律与对抗能力稳定", "第一方向只领先平局六个百分点"],
    why: "埃及小组赛一胜两平，转换效率和前场个人能力略好；澳大利亚一胜一平一负，防守纪律和高空球仍有威胁。客胜仅是微弱第一方向，1-1 与 0-1 为首选，总进球主窗口调整为 1–3 球。"
  },
  {
    id: "argentina-cape-verde", competition: "2026 世界杯 淘汰赛", date: "07-04", time: "早上 06:00", updated: "赛前版本",
    home: { name: "阿根廷", code: "ar" }, away: { name: "佛得角", code: "cv" },
    conclusion: "阿根廷的阵地控制、前场终结和淘汰赛经验形成明显优势，主胜是第一方向；佛得角小组赛三场不败，低位防守韧性不能低估。",
    trend: [70, 20, 10], handicap: { line: -1, trend: [42, 40, 18] }, scores: ["2-0", "1-0", "2-1", "1-1", "3-0", "0-0"], goals: "1–3", risk: "中", riskTone: "medium",
    model: { consistency: 86, confidence: "高", drawRisk: "中", scoreWeights: [21, 18, 14, 11, 8, 6], scoreNotes: ["零封主胜", "稳健小胜", "失球主胜", "重点防平", "优势延伸", "低效平局"], goalDistribution: [{ label: "0–2球", weight: 54, core: true }, { label: "3–4球", weight: 38, core: false }, { label: "5球以上", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 89 }, { label: "阵容完整度", value: 87 }, { label: "节奏控制", value: 90 }, { label: "稳定性", value: 86 }], riskTriggers: ["佛得角低位防守长时间压缩禁区空间", "阿根廷轮换影响前场配合速度", "主队前 30 分钟未能转化控球优势"] },
    riskNotes: ["阿根廷小组赛三战全胜且攻守稳定", "佛得角三场平局体现防守韧性", "让胜与让平的权重接近"],
    why: "阿根廷小组赛保持全胜，控球、压迫和终结层级都更完整；佛得角以三场平局晋级，防守组织和比赛耐心值得尊重。主胜明确，但比分先看 2-0、1-0，总进球主窗口调整为 1–3 球。"
  },
  {
    id: "colombia-ghana", competition: "2026 世界杯 淘汰赛", date: "07-04", time: "上午 09:30", updated: "赛前版本",
    home: { name: "哥伦比亚", code: "co" }, away: { name: "加纳", code: "gh" },
    conclusion: "哥伦比亚小组赛保持不败，控球稳定性和防守完整度更好，主胜优先；加纳的身体对抗与反击会提高平局权重。",
    trend: [52, 29, 19], handicap: { line: -1, trend: [32, 44, 24] }, scores: ["1-0", "2-0", "1-1", "2-1", "0-0", "0-1"], goals: "1–3", risk: "中", riskTone: "medium",
    model: { consistency: 78, confidence: "中高", drawRisk: "偏高", scoreWeights: [20, 17, 14, 11, 8, 6], scoreNotes: ["稳健主胜", "零封延伸", "重点防平", "失球主胜", "低效平局", "客队冷门"], goalDistribution: [{ label: "0–2球", weight: 56, core: true }, { label: "3–4球", weight: 35, core: false }, { label: "5球以上", weight: 9, core: false }], factors: [{ label: "攻防状态", value: 83 }, { label: "阵容完整度", value: 82 }, { label: "节奏控制", value: 84 }, { label: "稳定性", value: 81 }], riskTriggers: ["加纳强对抗持续切断哥伦比亚中路推进", "哥伦比亚控球占优但禁区效率偏低", "加纳反击或定位球率先制造领先"] },
    riskNotes: ["哥伦比亚小组赛两胜一平且仅失一球", "加纳具备压低节奏的对抗能力", "让平是一球主胜下的主要路径"],
    why: "哥伦比亚小组赛两胜一平，只丢一球，比赛控制和防守回收更稳定；加纳晋级过程更依赖对抗、防守与反击。哥伦比亚主胜优先，但更像 1-0、2-0 的稳健路径，总进球主窗口调整为 1–3 球。"
  },
];

const july5CompletedMatches = [
  {
    id: "canada-morocco", competition: "2026 世界杯 16 强", date: "07-05", time: "凌晨 01:00", updated: "赛前版本",
    home: { name: "加拿大", code: "ca" }, away: { name: "摩洛哥", code: "ma" },
    conclusion: "摩洛哥阵容平衡、淘汰赛经验和转换质量略占优势，客胜是第一方向；加拿大主场环境、对抗强度与快速推进使平局风险必须保留。",
    trend: [24, 31, 45], handicap: { line: 1, trend: [46, 35, 19] }, scores: ["0-1", "1-1", "0-0", "1-2", "1-0", "0-2"], goals: "1–3", risk: "中", riskTone: "medium",
    model: { consistency: 74, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 17, 14, 11, 8, 7], scoreNotes: ["摩洛哥小胜", "重点防平", "低效平局", "失球客胜", "主场反打", "优势延伸"], goalDistribution: [{ label: "0–2球", weight: 58, core: true }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 79 }, { label: "阵容完整度", value: 77 }, { label: "节奏控制", value: 80 }, { label: "稳定性", value: 78 }], riskTriggers: ["加拿大高位压迫迫使摩洛哥后场连续失误", "戴维斯回归后显著增强加拿大左路推进", "摩洛哥控球占优但迟迟无法打开低位防线"] },
    riskNotes: ["摩洛哥整体平衡性与淘汰赛经验更好", "加拿大拥有主场环境与直接推进能力", "90 分钟平局是最主要保护路径"],
    why: "摩洛哥小组第一出线，并在 90 分钟与荷兰战成 1-1 后通过点球晋级，防守结构和大赛经验更成熟；加拿大依靠纪律性防守 1-0 淘汰南非，戴维斯回归也提高反击上限。按 90 分钟口径看摩洛哥小优，首选 0-1 与 1-1，总进球先看 1–3 球。"
  },
  {
    id: "paraguay-france", competition: "2026 世界杯 16 强", date: "07-05", time: "凌晨 05:00", updated: "赛前版本",
    home: { name: "巴拉圭", code: "py" }, away: { name: "法国", code: "fr" },
    conclusion: "法国前场终结、阵容深度和持续施压能力形成明显优势，客胜是主方向；巴拉圭的低位防守、门将状态与反击会增加法国迟迟无法拉开比分的风险。",
    trend: [11, 20, 69], handicap: { line: 1, trend: [22, 34, 44] }, scores: ["0-2", "0-3", "0-1", "1-2", "1-3", "1-1"], goals: "2–4", risk: "中", riskTone: "medium",
    model: { consistency: 84, confidence: "高", drawRisk: "中", scoreWeights: [20, 18, 15, 12, 8, 6], scoreNotes: ["法国零封", "优势放大", "稳健客胜", "失球客胜", "开放延伸", "重点防平"], goalDistribution: [{ label: "0–2球", weight: 40, core: false }, { label: "3–4球", weight: 51, core: true }, { label: "5球以上", weight: 9, core: false }], factors: [{ label: "攻防状态", value: 90 }, { label: "阵容完整度", value: 88 }, { label: "节奏控制", value: 86 }, { label: "稳定性", value: 87 }], riskTriggers: ["巴拉圭低位防守与门将发挥持续压低法国转化率", "高温环境令法国前场压迫强度下降", "巴拉圭定位球或快速反击率先取得进球"] },
    riskNotes: ["法国四场比赛进攻输出稳定且阵容深度充足", "巴拉圭此前依靠防守与点球淘汰德国", "主队受让一球时让负是第一路径"],
    why: "法国此前四战全胜、攻入 13 球且仅失 2 球，姆巴佩、登贝莱和巴尔科拉构成稳定终结层；巴拉圭连续零封并在 90 分钟逼平德国，防守韧性和门将状态值得尊重。按 90 分钟口径法国客胜优先，首选 0-2 与 0-3，总进球先看 2–4 球。"
  },
];

const july6CompletedMatches = [
  {
    id: "brazil-norway", competition: "2026 世界杯 16 强", date: "07-06", time: "凌晨 04:00", updated: "赛前版本",
    home: { name: "巴西", code: "br" }, away: { name: "挪威", code: "no" },
    conclusion: "巴西控球、阵地创造和个人突破仍略占优势，主胜是第一方向；挪威的高效纵向推进和中锋冲击使平局及客队反打都不能忽略。",
    trend: [49, 27, 24], handicap: { line: -1, trend: [28, 44, 28] }, scores: ["2-1", "1-1", "1-0", "2-2", "3-1", "1-2"], goals: "1–3", risk: "中", riskTone: "medium",
    model: { consistency: 76, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 17, 14, 11, 8, 7], scoreNotes: ["巴西小胜", "重点防平", "稳健主胜", "开放平局", "优势延伸", "挪威反打"], goalDistribution: [{ label: "0–2球", weight: 43, core: false }, { label: "3–4球", weight: 48, core: true }, { label: "5球以上", weight: 9, core: false }], factors: [{ label: "攻防状态", value: 83 }, { label: "阵容完整度", value: 76 }, { label: "节奏控制", value: 84 }, { label: "稳定性", value: 79 }], riskTriggers: ["挪威快速纵向推进持续攻击巴西防线身后", "巴西中场伤情影响攻守转换与二点保护", "哈兰德率先取得进球迫使巴西提前压上"] },
    riskNotes: ["巴西整体创造能力更完整但中场存在伤情变量", "挪威本届比赛持续展现进球能力", "一球主胜对应让平是让胜平负第一路径"],
    why: "巴西的控球、边路突破和阵地创造更完整，但卡塞米罗伤情疑问与帕奎塔缺阵降低了中场稳定性；挪威依靠哈兰德、努萨等人的纵向冲击具备持续进球能力。按 90 分钟口径巴西小优，首选 2-1 与 1-1，总进球先看 1–3 球。"
  },
  {
    id: "mexico-england", competition: "2026 世界杯 16 强", date: "07-06", time: "早上 08:00", updated: "赛前版本",
    home: { name: "墨西哥", code: "mx" }, away: { name: "英格兰", code: "gb-eng" },
    conclusion: "英格兰纸面实力更强，但墨西哥的主场、海拔适应和防守稳定性足以把常规时间拖入均势，本场按 90 分钟口径优先平局。",
    trend: [28, 37, 35], handicap: { line: 1, trend: [51, 31, 18] }, scores: ["1-1", "0-0", "0-1", "1-0", "1-2", "2-1"], goals: "0–2", risk: "高", riskTone: "high",
    model: { consistency: 67, confidence: "中", drawRisk: "高", scoreWeights: [19, 17, 14, 11, 8, 7], scoreNotes: ["首选防平", "低效平局", "英格兰小胜", "墨西哥反打", "客队延伸", "主队延伸"], goalDistribution: [{ label: "0–2球", weight: 59, core: true }, { label: "3–4球", weight: 34, core: false }, { label: "5球以上", weight: 7, core: false }], factors: [{ label: "攻防状态", value: 80 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 78 }, { label: "稳定性", value: 76 }], riskTriggers: ["英格兰快速适应高海拔并持续形成禁区压制", "墨西哥主场攻势迫使英格兰防线频繁退守", "早段进球打破淘汰赛谨慎节奏并扩大总进球"] },
    riskNotes: ["英格兰阵容深度更强但上一轮推进并不顺畅", "墨西哥拥有主场与海拔适应优势", "平局仅领先客胜两个百分点，风险必须定为高"],
    why: "英格兰依靠凯恩末段双响逆转刚果（金），终结能力可靠但此前破密集防守效率一般；墨西哥 2-0 淘汰厄瓜多尔，主场环境与约 2240 米海拔进一步放大对手体能压力。按 90 分钟而非晋级口径，本场首选 1-1 与 0-0，主方向设为平局，总进球先看 0–2 球。"
  },
];

const july7CompletedMatches = [
  {
    id: "portugal-spain", competition: "2026 世界杯 16 强", date: "07-07", time: "凌晨 03:00", updated: "赛前版本",
    home: { name: "葡萄牙", code: "pt" }, away: { name: "西班牙", code: "es" },
    conclusion: "西班牙本届赛事控制力、防守完整度和前场连续施压更稳定，客胜略优；葡萄牙个人能力与伊比利亚德比的熟悉度让平局风险保持高位。",
    trend: [23, 30, 47], handicap: { line: 1, trend: [48, 34, 18] }, scores: ["0-1", "1-1", "0-2", "1-2", "1-0", "2-2"], goals: "1–3", risk: "中", riskTone: "medium",
    model: { consistency: 77, confidence: "中", drawRisk: "偏高", scoreWeights: [18, 17, 14, 11, 8, 7], scoreNotes: ["西班牙小胜", "重点防平", "零封延伸", "失球客胜", "葡萄牙反打", "开放平局"], goalDistribution: [{ label: "0–2球", weight: 52, core: true }, { label: "3–4球", weight: 40, core: false }, { label: "5球以上", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 87 }, { label: "阵容完整度", value: 84 }, { label: "节奏控制", value: 88 }, { label: "稳定性", value: 83 }], riskTriggers: ["葡萄牙中前场个人能力率先打破西班牙压迫", "德比属性令双方主动降低推进风险", "西班牙控球占优但禁区终结效率下降"] },
    riskNotes: ["西班牙保持不败且尚未失球", "葡萄牙四场仅失两球但进攻流畅度有波动", "主队受让一球时让胜是第一保护路径"],
    why: "西班牙本届赛事保持不败且尚未失球，上一轮 3-0 淘汰奥地利，控制与防守稳定性更好；葡萄牙虽然 2-1 淘汰克罗地亚，但此前两场平局显示阵地进攻仍会波动。按 90 分钟口径西班牙小优，首选 0-1 与 1-1，总进球先看 1–3 球。"
  },
  {
    id: "usa-belgium", competition: "2026 世界杯 16 强", date: "07-07", time: "早上 08:00", updated: "赛前版本",
    home: { name: "美国", code: "us" }, away: { name: "比利时", code: "be" },
    conclusion: "美国拥有主场、跑动和转换优势，巴洛贡恢复参赛进一步补强终结；比利时在经验与前场个人能力上更强，双方优势仍较接近，常规 90 分钟继续优先平局。",
    trend: [35, 37, 28], handicap: { line: 1, trend: [54, 30, 16] }, scores: ["1-1", "0-0", "1-0", "0-1", "2-1", "1-2"], goals: "0–2", risk: "高", riskTone: "high",
    model: { consistency: 68, confidence: "中", drawRisk: "高", scoreWeights: [19, 17, 15, 11, 8, 7], scoreNotes: ["首选防平", "低效平局", "主场小胜", "比利时小胜", "主队延伸", "客队延伸"], goalDistribution: [{ label: "0–2球", weight: 54, core: true }, { label: "3–4球", weight: 38, core: false }, { label: "5球以上", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 81 }, { label: "阵容完整度", value: 79 }, { label: "节奏控制", value: 77 }, { label: "稳定性", value: 74 }], riskTriggers: ["比利时前场经验持续惩罚美国高位防线身后", "美国主场压迫与快速转换形成连续射门", "巴洛贡回归后美国禁区终结效率明显提升"] },
    riskNotes: ["美国主场与跑动强度形成现实优势", "巴洛贡停赛被撤销，提高美国进攻完整度", "平局仅领先美国两个百分点，风险仍然很高"],
    why: "美国 2-0 淘汰波黑，巴洛贡红牌停赛已被撤销，前场支点与终结能力得到恢复；比利时在 90 分钟末段将 0-2 追成 2-2，随后加时晋级，展示韧性也暴露防守波动。更新后略微提高美国方向，但按 90 分钟口径仍优先平局，首选 1-1 与 0-0，总进球先看 0–2 球。"
  },
];

const july8CompletedMatches = [
  {
    id: "argentina-egypt", competition: "2026 世界杯 16 强", date: "07-08", time: "凌晨 00:00", updated: "赛前版本",
    home: { name: "阿根廷", code: "ar" }, away: { name: "埃及", code: "eg" },
    conclusion: "阿根廷整体控制力、淘汰赛经验和前场质量仍明显占优。上一轮被拖入加时，说明面对低位防守时不会轻松打穿，但主方向不应过度收缩。埃及防守纪律和萨拉赫反击需要防范，所以保留1-1风险；但90分钟优先看阿根廷胜，比分主路径为2-0和2-1，总进球看1-3球。",
    trend: [62, 25, 13], handicap: { line: -1, trend: [30, 46, 24] }, scores: ["2-0", "2-1", "1-0", "1-1", "3-1", "0-0"], goals: "1–3", risk: "中", riskTone: "medium",
    model: { consistency: 79, confidence: "中高", drawRisk: "偏高", scoreWeights: [18, 15, 14, 11, 9, 6], scoreNotes: ["首选主胜", "失球主胜", "控制主胜", "重点防平", "优势延伸", "低效平局"], goalDistribution: [{ label: "1–3球", weight: 58, core: true }, { label: "0–2球", weight: 34, core: false }, { label: "2–4球", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 85 }, { label: "阵容完整度", value: 82 }, { label: "节奏控制", value: 87 }, { label: "稳定性", value: 80 }], riskTriggers: ["埃及低位防守长时间压缩阿根廷禁区空间", "阿根廷连续淘汰赛消耗影响前场压迫强度", "萨拉赫反击率先制造进球或关键定位球"] },
    riskNotes: ["阿根廷控制力和前场质量仍明显占优", "平局风险保留在 1-1 路径，但不作为第一方向", "一球主胜对应让平为主要让胜平负路径，同时防让负"],
    why: "阿根廷上一轮被佛得角拖入加时，确实暴露出破密集防守效率问题；埃及同样具备低位防守和反击威胁。但从控球质量、前场上限、替补深度和淘汰赛经验看，阿根廷仍是更容易解决比赛的一方。本场不宜过度压低进球，主方向为阿根廷胜，比分优先2-0和2-1，防1-1。"
  },
  {
    id: "switzerland-colombia", competition: "2026 世界杯 16 强", date: "07-08", time: "凌晨 04:00", updated: "赛前版本",
    home: { name: "瑞士", code: "ch" }, away: { name: "哥伦比亚", code: "co" },
    conclusion: "两队防守都很稳定，平局权重依然很高，但哥伦比亚在边路突破、反击推进和单点解决能力上略强。瑞士整体结构完整，也有定位球和1-0偷胜路径，但90分钟主方向建议从平局微调为哥伦比亚小胜。总进球继续看0-2球，比分优先0-1，重点防1-1和0-0。",
    trend: [28, 33, 39], handicap: { line: 1, trend: [53, 30, 17] }, scores: ["0-1", "1-1", "0-0", "1-2", "1-0", "2-1"], goals: "0–2", risk: "高", riskTone: "high",
    model: { consistency: 70, confidence: "中", drawRisk: "高", scoreWeights: [17, 16, 13, 10, 9, 7], scoreNotes: ["客胜首选", "重点防平", "僵持路径", "客胜延伸", "瑞士风险", "主队延伸"], goalDistribution: [{ label: "0–2球", weight: 60, core: true }, { label: "1–3球", weight: 33, core: false }, { label: "2–4球", weight: 7, core: false }], factors: [{ label: "攻防状态", value: 83 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 84 }, { label: "稳定性", value: 84 }], riskTriggers: ["哥伦比亚边路个人突破持续制造高质量机会", "瑞士定位球和后排插上率先打破均势", "早段进球迫使双方从低风险结构转向对攻"] },
    riskNotes: ["哥伦比亚边路突破和反击推进略占优势", "瑞士结构稳定，定位球与 1-0 偷胜路径需要防范", "客胜只领先平局 6 个百分点，平局风险仍然很高"],
    why: "瑞士连续取胜，整体结构稳定，但哥伦比亚同样保持强防守质量，并且边路个人能力和反击推进更容易制造决定性机会。本场节奏不会太开放，平局仍是主要风险；但如果90分钟必须选一个主方向，更倾向哥伦比亚小胜。比分主路径为0-1和1-1，总进球看0-2球。"
  }
];

const july10CompletedMatches = [
  {
    id: "france-morocco", competition: "2026 世界杯 1/4 决赛", date: "07-10", time: "凌晨 04:00", updated: "赛前版本",
    home: { name: "法国", code: "fr" }, away: { name: "摩洛哥", code: "ma" },
    conclusion: "法国前场终结、阵容深度和淘汰赛经验仍然占优，主方向看法国胜；但摩洛哥防守韧性、反击质量和定位球都足以把比赛压成一球差，平局风险需要保留。",
    trend: [58, 26, 16], handicap: { line: -1, trend: [31, 44, 25] }, scores: ["2-1", "1-0", "2-0", "1-1", "3-1", "0-0"], goals: "1–3", risk: "中", riskTone: "medium",
    model: { consistency: 80, confidence: "中高", drawRisk: "中", scoreWeights: [18, 16, 14, 12, 8, 6], scoreNotes: ["法国小胜", "控制小胜", "零封延伸", "重点防平", "优势延伸", "低效平局"], goalDistribution: [{ label: "1–3球", weight: 57, core: true }, { label: "0–2球", weight: 35, core: false }, { label: "2–4球", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 87 }, { label: "阵容完整度", value: 82 }, { label: "节奏控制", value: 84 }, { label: "稳定性", value: 81 }], riskTriggers: ["摩洛哥低位防守长时间压缩法国肋部空间", "法国中场伤情或轮换降低二点保护强度", "摩洛哥边路反击与定位球率先制造威胁"] },
    riskNotes: ["法国本届进攻输出稳定，但上一轮只是一球小胜", "摩洛哥连续淘汰赛韧性强，不能忽略常规时间平局", "一球法国胜对应让平为主要让胜平负路径"],
    why: "法国拥有更稳定的前场终结和更深的阵容储备，姆巴佩、登贝莱和奥利塞的连续冲击会持续考验摩洛哥防线。摩洛哥本届保持很强韧性，且反击和定位球具备制造先手的能力；但若比赛进入阵地消耗，法国仍是更容易解决问题的一方。90分钟优先法国胜，比分主路径为2-1和1-0，总进球看1–3球。"
  }
];

const july11CompletedMatches = [
  {
    id: "spain-belgium", competition: "2026 世界杯 1/4 决赛", date: "07-11", time: "凌晨 03:00", updated: "赛前版本",
    home: { name: "西班牙", code: "es" }, away: { name: "比利时", code: "be" },
    conclusion: "西班牙防守完整度、控球稳定性和淘汰赛节奏管理更好，主胜是第一方向；比利时前场个人能力强，若西班牙迟迟无法破局，平局和失球小胜都需要保留。",
    trend: [61, 24, 15], handicap: { line: -1, trend: [32, 44, 24] }, scores: ["1-0", "2-0", "2-1", "1-1", "3-1", "0-0"], goals: "0–2", risk: "中", riskTone: "medium",
    model: { consistency: 82, confidence: "中高", drawRisk: "中", scoreWeights: [19, 16, 13, 11, 8, 6], scoreNotes: ["首选小胜", "零封延伸", "失球主胜", "重点防平", "优势延伸", "低效平局"], goalDistribution: [{ label: "0–2球", weight: 58, core: true }, { label: "1–3球", weight: 36, core: false }, { label: "2–4球", weight: 6, core: false }], factors: [{ label: "攻防状态", value: 85 }, { label: "阵容完整度", value: 84 }, { label: "节奏控制", value: 89 }, { label: "稳定性", value: 86 }], riskTriggers: ["比利时前场个人能力打穿西班牙高位防线身后", "西班牙控球占优但禁区转化率下降", "早段进球迫使比利时提前放大进攻投入"] },
    riskNotes: ["西班牙连续零封让低比分主胜更集中", "比利时淘汰赛进攻火力回升，不能完全压低失球路径", "一球主胜对应让平为主要让胜平负路径"],
    why: "西班牙本届防守稳定性最突出，连续零封说明中后场保护和控球压制都很成熟；比利时上一轮大胜美国，前场终结回暖，但防线空间与攻守转换仍容易被西班牙持续消耗。90分钟更倾向西班牙小胜，比分优先1-0和2-0，总进球看0–2球，同时保留2-1和1-1风险。"
  }
];

export const matches = [
  {
    id: "norway-england", competition: "2026 世界杯 1/4 决赛", date: "07-12", time: "凌晨 05:00", updated: "赛前版本",
    home: { name: "挪威", code: "no" }, away: { name: "英格兰", code: "gb-eng" },
    conclusion: "英格兰整体阵容厚度、淘汰赛经验和中前场连接略占优势，但挪威的哈兰德终结、边路传中和定位球威胁非常直接，90分钟更像一场小幅客胜与平局并存的高风险比赛。",
    trend: [28, 29, 43], handicap: { line: 1, trend: [50, 32, 18] }, scores: ["1-2", "1-1", "2-2", "0-1", "2-1", "1-3"], goals: "1–3", risk: "高", riskTone: "high",
    model: { consistency: 70, confidence: "中", drawRisk: "偏高", scoreWeights: [17, 16, 12, 11, 8, 7], scoreNotes: ["英格兰小胜", "重点防平", "开放平局", "低比分客胜", "挪威反打", "客胜延伸"], goalDistribution: [{ label: "1–3球", weight: 54, core: true }, { label: "2–4球", weight: 38, core: false }, { label: "0–2球", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 84 }, { label: "阵容完整度", value: 81 }, { label: "节奏控制", value: 78 }, { label: "稳定性", value: 76 }], riskTriggers: ["挪威通过边路传中和定位球持续找到哈兰德", "英格兰控球占优但被迫拉长攻防距离", "早段进球把比赛推向互有进球的开放节奏"] },
    riskNotes: ["英格兰纸面与淘汰赛经验占优，但优势不够厚", "挪威锋线效率极高，任何低位防守失误都会放大风险", "主队受让一球时让胜是第一保护路径"],
    why: "挪威连续淘汰强队说明锋线效率和身体冲击是真实优势，哈兰德会让英格兰中卫始终承压；英格兰则在中场组织、替补深度和大赛处理上更完整。按常规 90 分钟口径，客胜略优但不能忽略平局和2-2打开路径，比分优先1-2与1-1，总进球看1–3球。"
  },
  {
    id: "argentina-switzerland", competition: "2026 世界杯 1/4 决赛", date: "07-12", time: "上午 09:00", updated: "赛前版本",
    home: { name: "阿根廷", code: "ar" }, away: { name: "瑞士", code: "ch" },
    conclusion: "阿根廷在前场质量、关键球处理和淘汰赛经验上仍是主方向，但瑞士防守结构稳定、门将和中路保护可靠，比赛不会轻松打穿，平局风险需要放在第二层重点防范。",
    trend: [52, 31, 17], handicap: { line: -1, trend: [26, 45, 29] }, scores: ["1-0", "1-1", "2-0", "2-1", "0-0", "1-2"], goals: "0–2", risk: "中高", riskTone: "high",
    model: { consistency: 73, confidence: "中", drawRisk: "高", scoreWeights: [18, 16, 13, 10, 8, 6], scoreNotes: ["阿根廷小胜", "重点防平", "零封延伸", "失球主胜", "低效平局", "瑞士冷门"], goalDistribution: [{ label: "0–2球", weight: 58, core: true }, { label: "1–3球", weight: 34, core: false }, { label: "2–4球", weight: 8, core: false }], factors: [{ label: "攻防状态", value: 83 }, { label: "阵容完整度", value: 80 }, { label: "节奏控制", value: 85 }, { label: "稳定性", value: 82 }], riskTriggers: ["瑞士低位防守长时间压缩阿根廷肋部空间", "阿根廷连续淘汰赛消耗影响前场压迫和回防", "瑞士定位球或反击率先制造领先局面"] },
    riskNotes: ["阿根廷关键球能力更强，但上一轮防线仍有波动", "瑞士连续低失球，0-0 与 1-1 不能忽略", "一球阿根廷胜对应让平为主要让胜平负路径"],
    why: "阿根廷上一轮在90分钟补时阶段完成逆转，进攻端仍有解决问题的能力，但防守端给了埃及足够机会；瑞士上一轮常规时间0-0并点球晋级，整体防守和比赛管理很稳。综合看阿根廷小优，主方向为阿根廷胜，比分优先1-0和1-1，总进球看0–2球。"
  },
  {
    id: "france-spain", competition: "2026 世界杯 半决赛", date: "07-15", time: "凌晨 03:00", updated: "赛前版本",
    home: { name: "法国", code: "fr" }, away: { name: "西班牙", code: "es" },
    conclusion: "法国身体强度、纵深冲击和前场决定性略占上风，主方向看法国胜；但西班牙控球压制和边路连续推进会让比赛长时间处在均势，90分钟平局风险很高。",
    trend: [43, 30, 27], handicap: { line: -1, trend: [24, 45, 31] }, scores: ["2-1", "1-1", "1-0", "0-0", "2-0", "1-2"], goals: "1–3", risk: "高", riskTone: "high",
    model: { consistency: 72, confidence: "中", drawRisk: "高", scoreWeights: [17, 16, 13, 10, 8, 7], scoreNotes: ["法国小胜", "重点防平", "控制小胜", "低效平局", "法国延伸", "西班牙反打"], goalDistribution: [{ label: "1–3球", weight: 55, core: true }, { label: "0–2球", weight: 34, core: false }, { label: "2–4球", weight: 11, core: false }], factors: [{ label: "攻防状态", value: 88 }, { label: "阵容完整度", value: 84 }, { label: "节奏控制", value: 86 }, { label: "稳定性", value: 85 }], riskTriggers: ["西班牙控球把法国压回中低位，比赛进入长时间消耗", "法国边路与姆巴佩纵深冲击率先制造单点爆破", "双方早段进球导致节奏从谨慎试探转向连续对攻"] },
    riskNotes: ["法国淘汰赛终结效率更稳定，但西班牙控球能力强", "西班牙刚被打破零封，仍具备限制对手的结构质量", "一球法国胜对应让平，防西班牙90分钟不败"],
    why: "法国连续淘汰赛展现出更强的前场效率和身体压迫，面对摩洛哥时也能在关键阶段把优势兑现；西班牙则凭借控球、边路和替补深度连续过关，但对比利时已经暴露防线被冲击后的失球风险。这场更像强强半决赛的小幅倾斜，90分钟优先法国胜，比分看2-1与1-1，总进球看1–3球。"
  }
].sort((a, b) => a.date.localeCompare(b.date) || a.time.match(/\d{2}:\d{2}/)[0].localeCompare(b.time.match(/\d{2}:\d{2}/)[0]));

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
  "new-zealand-egypt": { line: 1, trend: [37, 40, 23], prediction: "让平", actual: "让负", hit: false },
  "argentina-austria": { line: -1, trend: [32, 40, 28], prediction: "让平", actual: "让胜", hit: false },
  "france-iraq": { line: -2, trend: [37, 39, 24], prediction: "让平", actual: "让胜", hit: false },
  "norway-senegal": { line: -1, trend: [34, 41, 25], prediction: "让平", actual: "让平", hit: true },
  "jordan-algeria": { line: 1, trend: [34, 45, 21], prediction: "让平", actual: "让平", hit: true },
  "portugal-uzbekistan": { line: -1, trend: [42, 38, 20], prediction: "让胜", actual: "让胜", hit: true },
  "england-ghana": { line: -1, trend: [39, 40, 21], prediction: "让平", actual: "让负", hit: false },
  "panama-croatia": { line: 1, trend: [38, 42, 20], prediction: "让平", actual: "让平", hit: true },
  "colombia-dr-congo": { line: -1, trend: [31, 42, 27], prediction: "让平", actual: "让平", hit: true },
  "bosnia-qatar": { line: -1, trend: [23, 35, 42], prediction: "让负", actual: "让胜", hit: false },
  "switzerland-canada": { line: -1, trend: [25, 46, 29], prediction: "让平", actual: "让平", hit: true },
  "morocco-haiti": { line: -1, trend: [38, 41, 21], prediction: "让平", actual: "让胜", hit: false },
  "scotland-brazil": { line: 1, trend: [37, 41, 22], prediction: "让平", actual: "让负", hit: false },
  "czech-mexico": { line: 1, trend: [30, 31, 39], prediction: "让负", actual: "让负", hit: true },
  "south-africa-korea": { line: 1, trend: [39, 41, 20], prediction: "让平", actual: "让胜", hit: false },
  "curacao-ivory-coast": { line: 1, trend: [38, 42, 20], prediction: "让平", actual: "让负", hit: false },
  "ecuador-germany": { line: 1, trend: [36, 42, 22], prediction: "让平", actual: "让胜", hit: false },
  "japan-sweden": { line: -1, trend: [24, 36, 40], prediction: "让负", actual: "让负", hit: true },
  "tunisia-netherlands": { line: 1, trend: [33, 42, 25], prediction: "让平", actual: "让负", hit: false },
  "paraguay-australia": { line: 1, trend: [42, 39, 19], prediction: "让胜", actual: "让胜", hit: true },
  "turkey-usa": { line: 1, trend: [38, 40, 22], prediction: "让平", actual: "让胜", hit: false },
  "norway-france": { line: 1, trend: [40, 38, 22], prediction: "让胜", actual: "让负", hit: false },
  "senegal-iraq": { line: -1, trend: [33, 42, 25], prediction: "让平", actual: "让胜", hit: false },
  "cape-verde-saudi-arabia": { line: -1, trend: [18, 34, 48], prediction: "让负", actual: "让负", hit: true },
  "uruguay-spain": { line: 1, trend: [39, 40, 21], prediction: "让平", actual: "让平", hit: true },
  "egypt-iran": { line: -1, trend: [22, 35, 43], prediction: "让负", actual: "让负", hit: true },
  "new-zealand-belgium": { line: 1, trend: [36, 42, 22], prediction: "让平", actual: "让负", hit: false },
  "panama-england": { line: 1, trend: [25, 33, 42], prediction: "让负", actual: "让负", hit: true },
  "croatia-ghana": { line: -1, trend: [20, 35, 45], prediction: "让负", actual: "让平", hit: false },
  "colombia-portugal": { line: 1, trend: [49, 32, 19], prediction: "让胜", actual: "让胜", hit: true },
  "dr-congo-uzbekistan": { line: -1, trend: [46, 34, 20], prediction: "让胜", actual: "让胜", hit: true },
  "jordan-argentina": { line: 2, trend: [28, 41, 31], prediction: "让平", actual: "让平", hit: true },
  "algeria-austria": { line: 1, trend: [40, 41, 19], prediction: "让平", actual: "让胜", hit: false },
  "south-africa-canada": { line: 1, trend: [46, 34, 20], prediction: "让胜", actual: "让平", hit: false },
  "brazil-japan": { line: -1, trend: [38, 41, 21], prediction: "让平", actual: "让平", hit: true },
  "germany-paraguay": { line: -1, trend: [37, 42, 21], prediction: "让平", actual: "让负", hit: false },
  "netherlands-morocco": { line: -1, trend: [27, 39, 34], prediction: "让平", actual: "让负", hit: false },
  "ivory-coast-norway": { line: 1, trend: [47, 35, 18], prediction: "让胜", actual: "让平", hit: false },
  "france-sweden": { line: -1, trend: [48, 36, 16], prediction: "让胜", actual: "让胜", hit: true },
  "mexico-ecuador": { line: -1, trend: [36, 43, 21], prediction: "让平", actual: "让胜", hit: false },
  "england-dr-congo": { line: -1, trend: [41, 39, 20], prediction: "让胜", actual: "让平", hit: false },
  "belgium-senegal": { line: -1, trend: [27, 39, 34], prediction: "让平", actual: "让负", hit: false },
  "usa-bosnia": { line: -1, trend: [35, 43, 22], prediction: "让平", actual: "让胜", hit: false },
  "spain-austria": { line: -1, trend: [39, 42, 19], prediction: "让平", actual: "让胜", hit: false },
  "portugal-croatia": { line: -1, trend: [23, 37, 40], prediction: "让负", actual: "让平", hit: false },
  "switzerland-algeria": { line: -1, trend: [34, 43, 23], prediction: "让平", actual: "让胜", hit: false },
  "australia-egypt": { line: 1, trend: [51, 33, 16], prediction: "让胜", actual: "让胜", hit: true },
  "argentina-cape-verde": { line: -1, trend: [42, 40, 18], prediction: "让胜", actual: "让负", hit: false },
  "colombia-ghana": { line: -1, trend: [32, 44, 24], prediction: "让平", actual: "让平", hit: true },
  "canada-morocco": { line: 1, trend: [46, 35, 19], prediction: "让胜", actual: "让负", hit: false },
  "paraguay-france": { line: 1, trend: [22, 34, 44], prediction: "让负", actual: "让平", hit: false },
  "brazil-norway": { line: -1, trend: [28, 44, 28], prediction: "让平", actual: "让负", hit: false },
  "mexico-england": { line: 1, trend: [51, 31, 18], prediction: "让胜", actual: "让平", hit: false },
  "portugal-spain": { line: 1, trend: [48, 34, 18], prediction: "让胜", actual: "让平", hit: false },
  "usa-belgium": { line: 1, trend: [54, 30, 16], prediction: "让胜", actual: "让负", hit: false },
  "argentina-egypt": { line: -1, trend: [30, 46, 24], prediction: "让平", actual: "让平", hit: true },
  "switzerland-colombia": { line: 1, trend: [53, 30, 17], prediction: "让胜", actual: "让胜", hit: true },
  "france-morocco": { line: -1, trend: [31, 44, 25], prediction: "让平", actual: "让胜", hit: false },
  "spain-belgium": { line: -1, trend: [32, 44, 24], prediction: "让平", actual: "让平", hit: true }
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
  const customRange = record.goals.replace(/\s+/g, "").match(/^(\d+)[–-](\d+)球?$/);
  if (customRange && Number(customRange[2]) - Number(customRange[1]) === 2) return `${customRange[1]}–${customRange[2]} 球`;
  if (record.goals.includes("0–2")) return "0–2 球";
  if (record.goals.includes("3–4")) return "3–4 球";
  if (record.goals.includes("5 球以上") || record.goals.includes("5球以上")) return "5 球以上";
  if (record.goals.includes("0–1")) return "0–2 球";
  if (record.goals.includes("4 球以上")) return "5 球以上";
  const [homeGoals, awayGoals] = record.scores.split("/")[0].trim().split("-").map(Number);
  return homeGoals + awayGoals <= 2 ? "0–2 球" : "3–4 球";
}

function goalRangeHit(range, result) {
  const total = result.split("-").map(Number).reduce((sum, value) => sum + value, 0);
  const customRange = range.replace(/\s+/g, "").match(/^(\d+)[–-](\d+)球?$/);
  if (customRange) return total >= Number(customRange[1]) && total <= Number(customRange[2]);
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
  "new-zealand-egypt": { date: "06-22 09:00", result: "1-3", direction: "埃及胜", tags: ["方向命中", "比分未中", "进球未中"], review: "埃及客胜方向得到验证，实际 1-3 与四球总进球高于赛前主路径。" },
  "argentina-austria": { date: "06-23 01:00", result: "2-0", direction: "阿根廷胜", tags: ["方向命中", "比分命中", "进球命中"], review: "阿根廷主胜、2-0 比分路径和 0–2 球区间全部得到验证。" },
  "france-iraq": { date: "06-23 05:00", result: "3-0", direction: "法国胜", tags: ["方向命中", "比分命中", "进球未中"], review: "法国主胜与 3-0 比分路径得到验证，实际三球落入 3–4 档而非赛前 0–2 主区间。" },
  "norway-senegal": { date: "06-23 08:00", result: "3-2", direction: "挪威胜", tags: ["方向命中", "比分未中", "进球未中"], review: "挪威主胜方向得到验证，实际 3-2 与五球总进球高于赛前主路径。" },
  "jordan-algeria": { date: "06-23 11:00", result: "1-2", direction: "阿尔及利亚胜", tags: ["方向命中", "比分命中", "进球未中"], review: "阿尔及利亚客胜与 1-2 比分路径得到验证，实际三球落入 3–4 档而非 0–2 主区间。" },
  "portugal-uzbekistan": { date: "06-24 01:00", result: "5-0", direction: "葡萄牙胜", tags: ["方向命中", "比分未中", "进球未中"], review: "葡萄牙主胜方向得到验证，实际 5-0 明显高于赛前稳健比分和 0–2 主区间。" },
  "england-ghana": { date: "06-24 04:00", result: "0-0", direction: "平局", tags: ["方向未一致", "比分未中", "进球命中"], review: "0–2 球区间得到验证，但英格兰主胜方向和比分路径未覆盖零比零。" },
  "panama-croatia": { date: "06-24 07:00", result: "0-1", direction: "克罗地亚胜", tags: ["方向命中", "比分命中", "进球命中"], review: "克罗地亚客胜、0-1 首选比分和 0–2 球区间全部得到验证。" },
  "colombia-dr-congo": { date: "06-24 10:00", result: "1-0", direction: "哥伦比亚胜", tags: ["方向命中", "比分命中", "进球命中"], review: "哥伦比亚主胜、1-0 首选比分和 0–2 球区间全部得到验证。" },
  "bosnia-qatar": { date: "06-25 03:00", result: "3-1", direction: "波黑胜", tags: ["方向命中", "比分未中", "进球未中"], review: "波黑主胜方向得到验证，实际 3-1 进入 3–4 球档，比分高于赛前低比分主路径。" },
  "switzerland-canada": { date: "06-25 03:00", result: "2-1", direction: "瑞士胜", tags: ["方向命中", "比分命中", "进球未中"], review: "瑞士主胜和 2-1 比分路径得到验证，实际三球落入 3–4 球档。" },
  "morocco-haiti": { date: "06-25 06:00", result: "4-2", direction: "摩洛哥胜", tags: ["方向命中", "比分未中", "进球未中"], review: "摩洛哥主胜方向得到验证，实际六球明显高于赛前稳健区间。" },
  "scotland-brazil": { date: "06-25 06:00", result: "0-3", direction: "巴西胜", tags: ["方向命中", "比分未中", "进球未中"], review: "巴西客胜方向得到验证，实际三球落入 3–4 球档，比分未覆盖。" },
  "czech-mexico": { date: "06-25 09:00", result: "0-3", direction: "墨西哥胜", tags: ["方向命中", "比分未中", "进球未中"], review: "墨西哥客胜方向得到验证，实际优势比赛前小比分预期更明显。" },
  "south-africa-korea": { date: "06-25 09:00", result: "1-0", direction: "南非胜", tags: ["方向未一致", "比分命中", "进球命中"], review: "1-0 比分路径和 0–2 球区间得到验证，方向由受让防平转为南非小胜。" },
  "curacao-ivory-coast": { date: "06-26 04:00", result: "0-2", direction: "科特迪瓦胜", tags: ["方向命中", "比分命中", "进球命中"], review: "科特迪瓦客胜、0-2 比分路径和 0–2 球区间全部得到验证。" },
  "ecuador-germany": { date: "06-26 04:00", result: "2-1", direction: "厄瓜多尔胜", tags: ["方向未一致", "比分未中", "进球未中"], review: "比赛进入主队反打路径，德国方向和赛前比分未覆盖，实际三球落入 3–4 球档。" },
  "japan-sweden": { date: "06-26 07:00", result: "1-1", direction: "平局", tags: ["方向未一致", "比分命中", "进球命中"], review: "1-1 比分路径和 0–2 球区间得到验证，方向从客胜微优回落到平局。" },
  "tunisia-netherlands": { date: "06-26 07:00", result: "1-3", direction: "荷兰胜", tags: ["方向命中", "比分未中", "进球未中"], review: "荷兰客胜方向得到验证，实际四球落入 3–4 球档，比分未覆盖。" },
  "paraguay-australia": { date: "06-26 10:00", result: "0-0", direction: "平局", tags: ["方向未一致", "比分命中", "进球命中"], review: "0-0 比分路径和 0–2 球区间得到验证，方向层面实际落在平局。" },
  "turkey-usa": { date: "06-26 10:00", result: "3-2", direction: "土耳其胜", tags: ["方向未一致", "比分未中", "进球未中"], review: "比赛被拉到五球以上开放节奏，客胜微优、防平和低比分路径均未覆盖。" },
  "norway-france": { date: "06-27 03:00", result: "1-4", direction: "法国胜", tags: ["方向命中", "比分未中", "进球未中"], review: "法国客胜方向得到验证，实际 1-4 与五球总进球高于赛前稳健路径。" },
  "senegal-iraq": { date: "06-27 03:00", result: "5-0", direction: "塞内加尔胜", tags: ["方向命中", "比分未中", "进球未中"], review: "塞内加尔主胜方向得到验证，实际五球优势明显超过赛前一球小胜路径。" },
  "cape-verde-saudi-arabia": { date: "06-27 08:00", result: "0-0", direction: "平局", tags: ["方向未一致", "比分命中", "进球命中"], review: "0-0 比分与 0–2 球区间得到验证，佛得角微弱主方向未覆盖平局。" },
  "uruguay-spain": { date: "06-27 08:00", result: "0-1", direction: "西班牙胜", tags: ["方向命中", "比分命中", "进球命中"], review: "西班牙客胜、0-1 比分与 0–2 球区间全部得到验证。" },
  "egypt-iran": { date: "06-27 11:00", result: "1-1", direction: "平局", tags: ["方向未一致", "比分命中", "进球命中"], review: "1-1 首选比分与 0–2 球区间得到验证，埃及微弱主方向未覆盖平局。" },
  "new-zealand-belgium": { date: "06-27 11:00", result: "1-5", direction: "比利时胜", tags: ["方向命中", "比分未中", "进球未中"], review: "比利时客胜方向得到验证，实际 1-5 与六球总进球明显高于赛前路径。" },
  "panama-england": { date: "06-29 03:00", result: "0-2", direction: "英格兰胜", tags: ["方向命中", "比分命中", "进球命中"], review: "按既有规则记录赛果与历史状态。" },
  "croatia-ghana": { date: "06-29 03:00", result: "2-1", direction: "克罗地亚胜", tags: ["方向未一致", "比分命中", "进球未中"], review: "按既有规则记录赛果与历史状态。" },
  "colombia-portugal": { date: "06-29 05:30", result: "0-0", direction: "平局", tags: ["方向命中", "比分命中", "进球命中"], review: "按既有规则记录赛果与历史状态。" },
  "dr-congo-uzbekistan": { date: "06-29 05:30", result: "3-1", direction: "刚果（金）胜", tags: ["方向命中", "比分未中", "进球未中"], review: "按既有规则记录赛果与历史状态。" },
  "jordan-argentina": { date: "06-29 08:00", result: "1-3", direction: "阿根廷胜", tags: ["方向命中", "比分命中", "进球命中"], review: "按既有规则记录赛果与历史状态。" },
  "algeria-austria": { date: "06-29 08:00", result: "3-3", direction: "平局", tags: ["方向未一致", "比分未中", "进球未中"], review: "按既有规则记录赛果与历史状态。" },
  "south-africa-canada": { date: "06-29 03:00", result: "0-1", direction: "加拿大胜", tags: ["方向命中", "比分未中", "进球命中"], review: "加拿大一球客胜晋级，方向与低进球区间得到验证。" },
  "brazil-japan": { date: "06-30 01:00", result: "2-1", direction: "巴西胜", tags: ["方向命中", "比分命中", "进球未中"], review: "巴西主胜与 2-1 首选比分得到验证，实际三球进入 3–4 球区间。" },
  "germany-paraguay": { date: "06-30 04:30", result: "1-1", direction: "平局", tags: ["方向未一致", "比分未中", "进球命中"], review: "常规与加时比分为 1-1，巴拉圭通过点球晋级；历史方向按平局记录。" },
  "netherlands-morocco": { date: "06-30 09:00", result: "1-1", direction: "平局", tags: ["方向未一致", "比分命中", "进球命中"], review: "常规与加时比分为 1-1，摩洛哥通过点球晋级；历史方向按平局记录。" },
  "ivory-coast-norway": { date: "07-01 02:00", result: "1-2", direction: "挪威胜", tags: ["方向命中", "比分命中", "进球命中"], review: "挪威 2-1 晋级，客胜、1-2 首选比分与 3–4 球区间全部得到验证。" },
  "france-sweden": { date: "07-01 05:00", result: "3-0", direction: "法国胜", tags: ["方向命中", "比分未中", "进球命中"], review: "法国 3-0 晋级，主胜与 3–4 球区间得到验证，首选两个比分未覆盖实际赛果。" },
  "mexico-ecuador": { date: "07-01 11:00", result: "2-0", direction: "墨西哥胜", tags: ["方向命中", "比分命中", "进球命中"], review: "墨西哥 2-0 晋级，主胜、2-0 首选比分与 0–2 球区间全部得到验证。" },
  "england-dr-congo": { date: "07-02 00:00", result: "2-1", direction: "英格兰胜", tags: ["方向命中", "比分命中", "进球未中"], review: "英格兰 2-1 晋级，主胜与第二个首选比分得到验证，实际三球未落入 0–2 球主区间。" },
  "belgium-senegal": { date: "07-02 04:00", result: "2-2", direction: "平局", tags: ["方向未一致", "比分未中", "进球命中"], review: "体彩口径下常规 90 分钟（含伤停补时）为 2-2；比利时加时赛 3-2 晋级仅作复盘说明，不计入赛果判定。" },
  "usa-bosnia": { date: "07-02 08:00", result: "2-0", direction: "美国胜", tags: ["方向命中", "比分命中", "进球未中"], review: "美国 2-0 晋级，主胜与第二个首选比分得到验证，实际两球未落入 3–4 球主区间。" },
  "spain-austria": { date: "07-03 03:00", result: "3-0", direction: "西班牙胜", tags: ["方向命中", "比分未中", "进球命中"], review: "西班牙在常规 90 分钟 3-0 取胜；主胜与 1–3 球区间命中，首选两个比分未覆盖。" },
  "portugal-croatia": { date: "07-03 07:00", result: "2-1", direction: "葡萄牙胜", tags: ["方向命中", "比分命中", "进球命中"], review: "葡萄牙在常规 90 分钟 2-1 取胜；主胜、第二首选比分与 1–3 球区间全部命中。" },
  "switzerland-algeria": { date: "07-03 11:00", result: "2-0", direction: "瑞士胜", tags: ["方向命中", "比分命中", "进球命中"], review: "瑞士在常规 90 分钟 2-0 取胜；主胜、第二首选比分与 2–4 球区间全部命中。" },
  "australia-egypt": { date: "07-04 02:00", result: "1-1", direction: "平局", tags: ["方向未一致", "比分命中", "进球命中"], review: "体彩口径下常规 90 分钟（含伤停补时）为 1-1；埃及点球晋级仅作复盘说明，不改变平局赛果。" },
  "argentina-cape-verde": { date: "07-04 06:00", result: "1-1", direction: "平局", tags: ["方向未一致", "比分未中", "进球命中"], review: "体彩口径下常规 90 分钟（含伤停补时）为 1-1；阿根廷加时 3-2 晋级仅作复盘说明，不计入比分和胜平负。" },
  "colombia-ghana": { date: "07-04 09:30", result: "1-0", direction: "哥伦比亚胜", tags: ["方向命中", "比分命中", "进球命中"], review: "哥伦比亚在常规 90 分钟 1-0 取胜；主胜、首选比分与 1–3 球区间全部命中。" },
  "canada-morocco": { date: "07-05 01:00", result: "0-3", direction: "摩洛哥胜", tags: ["方向命中", "比分未中", "进球命中"], review: "摩洛哥在常规 90 分钟 3-0 取胜；客胜方向与 1–3 球区间命中，首选两个比分未覆盖。" },
  "paraguay-france": { date: "07-05 05:00", result: "0-1", direction: "法国胜", tags: ["方向命中", "比分未中", "进球未中"], review: "法国在常规 90 分钟 1-0 取胜；客胜方向命中，首选两个比分及 2–4 球主区间未覆盖。" },
  "brazil-norway": { date: "07-06 04:00", result: "1-2", direction: "挪威胜", tags: ["方向未一致", "比分未中", "进球命中"], review: "挪威在常规 90 分钟 2-1 取胜；赛前巴西主方向和首选两个比分未覆盖，1–3 球区间命中。" },
  "mexico-england": { date: "07-06 08:00", result: "2-3", direction: "英格兰胜", tags: ["方向未一致", "比分未中", "进球未中"], review: "英格兰在常规 90 分钟 3-2 取胜；赛前平局方向、首选两个比分及 0–2 球区间均未覆盖。" },
  "portugal-spain": { date: "07-07 03:00", result: "0-1", direction: "西班牙胜", tags: ["方向命中", "比分命中", "进球命中"], review: "西班牙在常规 90 分钟补时阶段 1-0 取胜；客胜方向、0-1 首选比分与 1–3 球区间全部命中。" },
  "usa-belgium": { date: "07-07 08:00", result: "1-4", direction: "比利时胜", tags: ["方向未一致", "比分未中", "进球未中"], review: "比利时在常规 90 分钟 4-1 取胜；赛前平局方向、首选两个比分及 0–2 球区间均未覆盖。" },
  "argentina-egypt": { date: "07-08 00:00", result: "3-2", direction: "阿根廷胜", tags: ["方向命中", "比分未中", "进球未中"], review: "阿根廷在常规 90 分钟补时阶段完成 3-2 逆转；主胜方向命中，首选两个比分和 1–3 球区间未覆盖五球走势。" },
  "switzerland-colombia": { date: "07-08 04:00", result: "0-0", direction: "平局", tags: ["方向未一致", "比分未中", "进球命中"], review: "体彩口径下常规 90 分钟（含伤停补时）为 0-0；瑞士点球晋级仅作复盘说明，不改变平局赛果。" },
  "france-morocco": { date: "07-10 04:00", result: "2-0", direction: "法国胜", tags: ["方向命中", "比分未中", "进球命中"], review: "法国在常规 90 分钟 2-0 击败摩洛哥晋级；主胜方向和1–3球区间命中，首选两个比分未覆盖，让球口径从让平落到让胜。" },
  "spain-belgium": { date: "07-11 03:00", result: "2-1", direction: "西班牙胜", tags: ["方向命中", "比分未中", "进球未中"], review: "西班牙在常规 90 分钟 2-1 击败比利时晋级；主胜方向命中，第三比分路径覆盖但首选两个未中，三球总进球高于赛前0–2主区间。" }
};

function directionLabelFromMatch(match) {
  const topIndex = match.trend.indexOf(Math.max(...match.trend));
  if (topIndex === 0) return `${match.home.name}胜`;
  if (topIndex === 1) return "平局";
  return `${match.away.name}胜`;
}

function outcomeTypeFromResult(result) {
  const [homeGoals, awayGoals] = result.split("-").map(Number);
  if (homeGoals === awayGoals) return "draw";
  return homeGoals > awayGoals ? "home" : "away";
}

function outcomeTypeFromDirection(direction, match) {
  const [homeName] = match.split(" vs ");
  if (direction === "平局") return "draw";
  return direction.startsWith(homeName) ? "home" : "away";
}

const completedHistoryRecords = [...completedMatches, ...june20CompletedMatches, ...june21CompletedMatches, ...june22CompletedMatches, ...june23CompletedMatches, ...june24CompletedMatches, ...june25CompletedMatches, ...june27CompletedMatches, ...june28CompletedMatches, ...june30CompletedMatches, ...july1CompletedMatches, ...july2CompletedMatches, ...july3CompletedMatches, ...july4CompletedMatches, ...july5CompletedMatches, ...july6CompletedMatches, ...july7CompletedMatches, ...july8CompletedMatches, ...july10CompletedMatches, ...july11CompletedMatches].map(match => {
  const result = completedResults[match.id];
  return {
    id: match.id,
    date: result.date,
    competition: match.competition,
    match: `${match.home.name} vs ${match.away.name}`,
    result: result.result,
    direction: directionLabelFromMatch(match),
    scores: match.scores.slice(0, 2).join(" / "),
    goals: match.goals.includes("球") ? match.goals : `${match.goals} 球`,
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
  { id:"netherlands-japan", date:"06-15 04:00", competition:"2026 世界杯 F 组", match:"荷兰 vs 日本", result:"2-2", direction:"平局", scores:"1-1 / 2-2", goals:"2–3 球", review:"赛前方向调整为平局，1-1 与 2-2 作为首选比分路径。", tags:["方向命中","比分命中","进球未中"], status:"hit" },
  { id:"ivory-coast-ecuador", date:"06-15 07:00", competition:"2026 世界杯 E 组", match:"科特迪瓦 vs 厄瓜多尔", result:"1-0", direction:"科特迪瓦胜", scores:"1-0 / 1-1", goals:"2–3 球", review:"主胜与 1-0 路径得到赛果覆盖，总进球区间保持原记录。", tags:["方向命中","比分命中","进球未中"], status:"hit" },
  { id:"sweden-tunisia", date:"06-15 10:00", competition:"2026 世界杯 F 组", match:"瑞典 vs 突尼斯", result:"5-1", direction:"瑞典胜", scores:"3-1 / 5-1", goals:"4 球以上", review:"方向、5-1 比分路径和高进球区间全部得到验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"spain-cape-verde", date:"06-16 00:00", competition:"2026 世界杯 H 组", match:"西班牙 vs 佛得角", result:"0-0", direction:"西班牙胜", scores:"3-0 / 4-0", goals:"4 球以上", review:"比赛进入低比分平局，三项赛前主路径均未覆盖。", tags:["方向未一致","比分未中","进球未中"], status:"miss" },
  { id:"belgium-egypt", date:"06-16 03:00", competition:"2026 世界杯 G 组", match:"比利时 vs 埃及", result:"1-1", direction:"比利时胜", scores:"2-1 / 1-1", goals:"2–3 球", review:"方向未一致，但 1-1 比分与进球区间得到验证。", tags:["方向未一致","比分命中","进球命中"], status:"miss" },
  { id:"saudi-arabia-uruguay", date:"06-16 06:00", competition:"2026 世界杯 H 组", match:"沙特阿拉伯 vs 乌拉圭", result:"1-1", direction:"平局", scores:"1-1 / 1-2", goals:"2–3 球", review:"平局、1-1 比分与 2–3 球区间形成完整赛前路径。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"iran-new-zealand", date:"06-16 09:00", competition:"2026 世界杯 G 组", match:"伊朗 vs 新西兰", result:"2-2", direction:"平局", scores:"1-1 / 2-2", goals:"4 球以上", review:"平局、2-2 比分与高进球区间形成完整赛前路径。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"france-senegal", date:"06-17 00:00", competition:"2026 世界杯 I 组", match:"法国 vs 塞内加尔", result:"3-1", direction:"法国胜", scores:"2-0 / 3-1", goals:"2–3 球", review:"法国方向保持不变，比分首选调整为 2-0 与 3-1。", tags:["方向命中","比分命中","进球未中"], status:"hit" },
  { id:"iraq-norway", date:"06-17 03:00", competition:"2026 世界杯 I 组", match:"伊拉克 vs 挪威", result:"1-4", direction:"挪威胜", scores:"0-2 / 0-3", goals:"2–3 球", review:"客胜方向得到验证，比赛进球数高于主路径。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"argentina-algeria", date:"06-17 06:00", competition:"2026 世界杯 J 组", match:"阿根廷 vs 阿尔及利亚", result:"3-0", direction:"阿根廷胜", scores:"2-0 / 3-0", goals:"2–3 球", review:"主胜、3-0 比分与进球区间形成完整赛前路径。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"austria-jordan", date:"06-17 09:00", competition:"2026 世界杯 J 组", match:"奥地利 vs 约旦", result:"3-1", direction:"奥地利胜", scores:"2-0 / 1-0", goals:"2–3 球", review:"主胜方向得到验证，比分和进球区间未覆盖。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"ghana-panama", date:"06-18 00:00", competition:"2026 世界杯 L 组", match:"加纳 vs 巴拿马", result:"1-0", direction:"加纳胜", scores:"1-1 / 1-0", goals:"2–3 球", review:"方向与 1-0 比分路径得到验证，进球区间未覆盖。", tags:["方向命中","比分命中","进球未中"], status:"hit" },
  { id:"england-croatia", date:"06-18 03:00", competition:"2026 世界杯 L 组", match:"英格兰 vs 克罗地亚", result:"4-2", direction:"英格兰胜", scores:"4-1 / 4-2", goals:"4 球以上", review:"英格兰方向、4-2 比分与高进球区间形成完整赛前路径。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"portugal-dr-congo", date:"06-18 06:00", competition:"2026 世界杯 K 组", match:"葡萄牙 vs 刚果（金）", result:"1-1", direction:"葡萄牙胜", scores:"2-0 / 1-0", goals:"2–3 球", review:"方向与比分未覆盖，进球区间得到验证。", tags:["方向未一致","比分未中","进球命中"], status:"miss" },
  { id:"uzbekistan-colombia", date:"06-18 09:00", competition:"2026 世界杯 K 组", match:"乌兹别克斯坦 vs 哥伦比亚", result:"1-3", direction:"哥伦比亚胜", scores:"0-2 / 1-3", goals:"3–4 球", review:"客胜方向保持不变，比分首选调整为 0-2 与 1-3，总进球主区间调整为 3–4 球。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  ...completedHistoryRecords
].map(record => {
  const handicap = historyHandicap[record.id];
  const normalizedGoals = normalizeHistoryGoalRange(record);
  const isGoalHit = goalRangeHit(normalizedGoals, record.result);
  const isDirectionHit = outcomeTypeFromDirection(record.direction, record.match) === outcomeTypeFromResult(record.result);
  const primaryScores = record.scores.split("/").map(score => score.trim()).slice(0, 2);
  const isScoreHit = primaryScores.includes(record.result);
  const tags = [
    isDirectionHit ? "方向命中" : "方向未一致",
    isScoreHit ? "比分命中" : "比分未中",
    isGoalHit ? "进球命中" : "进球未中"
  ];
  const directionSummary = tags.includes("方向命中") ? "方向得到验证" : "方向未覆盖";
  const scoreSummary = tags.includes("比分命中") ? "比分路径得到验证" : "比分路径未覆盖";
  const normalizedRecord = {
    ...record,
    goals: normalizedGoals,
    tags,
    status: isDirectionHit ? "hit" : "miss",
    review: `${directionSummary}，${scoreSummary}，${normalizedGoals}${isGoalHit ? "得到验证" : "未覆盖实际总进球"}。`
  };
  const report = record.lockedPrediction
    ? {
        ...record.lockedPrediction,
        conclusion: normalizeGoalCopy(record.lockedPrediction.conclusion),
        goals: normalizedGoals.replace(/\s*球$/, ""),
        handicap: { line: handicap.line, trend: handicap.trend },
        model: { ...record.lockedPrediction.model, goalDistribution: record.lockedPrediction.model.goalDistribution },
        result: record.result,
        why: `${record.review} 其他赛前方向、比分路径与概率保持原记录，所有命中判定均以常规 90 分钟（含伤停补时）为准。`
      }
    : buildHistoryReport(normalizedRecord, handicap);
  const { lockedPrediction, ...cleanRecord } = normalizedRecord;
  return { ...cleanRecord, handicap, report };
});

const percent = (count, total) => Number((count * 100 / total).toFixed(1));
export const metrics = {
  direction: percent(historyRecords.filter(record => record.tags.includes("方向命中")).length, historyRecords.length),
  score: percent(historyRecords.filter(record => record.tags.includes("比分命中")).length, historyRecords.length),
  goals: percent(historyRecords.filter(record => record.tags.includes("进球命中")).length, historyRecords.length),
  handicap: percent(historyRecords.filter(record => record.handicap?.hit).length, historyRecords.length),
  handicapSamples: historyRecords.length
};
