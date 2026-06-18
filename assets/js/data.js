export const matches = [
  {
    id: "czech-south-africa", href: "czech-south-africa.html", competition: "2026 世界杯 A 组", date: "06-19", time: "今晚 00:00", updated: "赛前版本",
    home: { name: "捷克", code: "cz" }, away: { name: "南非", code: "za" },
    conclusion: "捷克整体组织和阵地推进略占优势，主胜是第一方向；但双方差距有限，平局风险较高。",
    trend: [43, 30, 27], handicap: null, scores: ["2-1", "1-1", "1-0"], goals: "2–3", risk: "中高", riskTone: "high", halftime: null,
    riskNotes: ["捷克进攻效率偏低时容易被拖入平局", "南非快速转换会考验主队身后空间", "双方方向概率差距较小", "早段进球与临场阵容会改变节奏"],
    why: "捷克在中场组织、阵地推进和高空对抗方面略占优势，更可能主动掌握球权；南非的身体对抗、边路速度与快速转换仍能制造威胁。43% 主胜与 30% 平局并未形成明显断层，因此结论是捷克小优，同时重点防范平局路径。"
  },
  {
    id: "switzerland-bosnia", href: "switzerland-bosnia.html", competition: "2026 世界杯 B 组", date: "06-19", time: "今晚 03:00", updated: "赛前版本",
    home: { name: "瑞士", code: "ch" }, away: { name: "波黑", code: "ba" },
    conclusion: "瑞士稳定性和中场控制略占优势，但主胜与平局非常接近，本场重点防平。",
    trend: [42, 33, 25], handicap: null, scores: ["1-0", "1-1", "0-0"], goals: "0–1", risk: "中高", riskTone: "high", halftime: null,
    riskNotes: ["瑞士若不能早段破局，平局权重会上升", "波黑定位球与前场支点具备威胁", "低比分比赛容错率较低", "临场节奏会影响进球分布"],
    why: "瑞士整体结构与中场稳定性更好，但 42% 主胜和 33% 平局很接近。波黑具备把比赛拖入低节奏的能力，因此模型将 0–1 球列为主区间，并保留 1-1 与 0-0 两条平局路径。"
  },
  {
    id: "canada-qatar", href: "canada-qatar.html", competition: "2026 世界杯 B 组", date: "06-19", time: "明早 06:00", updated: "赛前版本",
    home: { name: "加拿大", code: "ca" }, away: { name: "卡塔尔", code: "qa" },
    conclusion: "加拿大的速度与纵向冲击更具优势，主胜优先，但需要保留平局路径。",
    trend: [49, 30, 21], handicap: null, scores: ["2-1", "1-1", "1-0"], goals: "2–3", risk: "中", riskTone: "medium", halftime: null,
    riskNotes: ["加拿大浪费机会时可能进入平局", "卡塔尔控球降速会削弱主队冲击", "客队反击与定位球保留进球可能", "早段失球与临场调整影响明显"],
    why: "加拿大在速度、身体对抗和纵向推进方面更具优势，卡塔尔则可能依靠控球、紧凑防守与快速转换寻找机会。49% 主胜是最清晰方向，2–3 球和 2-1 是更集中的比赛路径。"
  },
  {
    id: "mexico-korea", href: "mexico-korea.html", competition: "2026 世界杯 A 组", date: "06-19", time: "明早 09:00", updated: "赛前版本",
    home: { name: "墨西哥", code: "mx" }, away: { name: "韩国", code: "kr" },
    conclusion: "墨西哥控球推进略占优势，但韩国的跑动与转换会持续制造压力。",
    trend: [43, 31, 26], handicap: null, scores: ["1-1", "2-1", "1-0"], goals: "2–3", risk: "高", riskTone: "high", halftime: null,
    riskNotes: ["墨西哥转换防守存在身后风险", "韩国高强度跑动会削弱控球优势", "平局概率达到 31%", "早段进球与换人会放大波动"],
    why: "墨西哥在控球推进和比赛经验方面略占优势，韩国的跑动强度、转换速度与前场冲击会持续制造压力。43% 主胜与 31% 平局没有拉开明显差距，因此这是一场需要充分提示风险的比赛。"
  }
];

export const historyRecords = [
  { id:"mexico-south-africa", href:"mexico-south-africa.html", date:"06-12 03:00", competition:"2026 世界杯", match:"墨西哥 vs 南非", result:"2-0", direction:"墨西哥胜", scores:"2-0 / 2-1", goals:"2–3 球", review:"方向、比分路径与进球区间均得到验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"korea-czech", href:"korea-czech.html", date:"06-12 10:00", competition:"2026 世界杯 A 组", match:"韩国 vs 捷克", result:"2-1", direction:"韩国胜", scores:"2-1 / 1-1", goals:"2–3 球", review:"三项赛前路径与实际结果保持一致。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"canada-bosnia", href:"canada-bosnia.html", date:"06-13 03:00", competition:"2026 世界杯 B 组", match:"加拿大 vs 波黑", result:"1-1", direction:"平局", scores:"1-1 / 0-0", goals:"2–3 球", review:"平局主路径准确覆盖，比分与进球区间同步验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"qatar-switzerland", href:"qatar-switzerland.html", date:"06-13 06:00", competition:"2026 世界杯", match:"卡塔尔 vs 瑞士", result:"1-1", direction:"瑞士胜", scores:"0-2 / 0-3", goals:"2–3 球", review:"方向与比分路径未覆盖，进球区间得到验证。", tags:["方向未一致","比分未中","进球命中"], status:"miss" },
  { id:"usa-paraguay", href:"usa-paraguay.html", date:"06-13 09:00", competition:"2026 世界杯 D 组", match:"美国 vs 巴拉圭", result:"4-1", direction:"美国胜", scores:"3-1 / 2-0", goals:"4 球以上", review:"方向和高进球区间得到验证，比分路径未覆盖。", tags:["方向命中","比分未中","进球命中"], status:"hit" },
  { id:"brazil-morocco", href:"brazil-morocco.html", date:"06-14 06:00", competition:"2026 世界杯 C 组", match:"巴西 vs 摩洛哥", result:"1-1", direction:"平局", scores:"1-1 / 0-0", goals:"2–3 球", review:"平局、1-1 比分和进球区间全部得到验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"haiti-scotland", href:"haiti-scotland.html", date:"06-14 09:00", competition:"2026 世界杯 C 组", match:"海地 vs 苏格兰", result:"0-1", direction:"苏格兰胜", scores:"0-1 / 0-2", goals:"2–3 球", review:"方向与比分路径准确覆盖，进球区间未覆盖。", tags:["方向命中","比分命中","进球未中"], status:"hit" },
  { id:"australia-turkey", href:"australia-turkey.html", date:"06-14 12:00", competition:"2026 世界杯 D 组", match:"澳大利亚 vs 土耳其", result:"2-0", direction:"澳大利亚胜", scores:"2-0 / 1-0", goals:"2–3 球", review:"主方向、首选比分和进球区间均得到验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"germany-curacao", href:"germany-curacao.html", date:"06-15 01:00", competition:"2026 世界杯 E 组", match:"德国 vs 库拉索", result:"7-1", direction:"德国胜", scores:"2-0 / 3-0", goals:"2–3 球", review:"方向得到验证，但比赛开放程度高于赛前路径。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"netherlands-japan", href:"netherlands-japan.html", date:"06-15 04:00", competition:"2026 世界杯 F 组", match:"荷兰 vs 日本", result:"2-2", direction:"荷兰胜", scores:"1-0 / 1-1", goals:"2–3 球", review:"实际比赛进入开放平局，三项主路径均未覆盖。", tags:["方向未一致","比分未中","进球未中"], status:"miss" },
  { id:"ivory-coast-ecuador", href:"ivory-coast-ecuador.html", date:"06-15 07:00", competition:"2026 世界杯 E 组", match:"科特迪瓦 vs 厄瓜多尔", result:"1-0", direction:"平局", scores:"1-1 / 0-0", goals:"2–3 球", review:"低比分方向成立，但赛前主路径没有覆盖胜负结果。", tags:["方向未一致","比分未中","进球未中"], status:"miss" },
  { id:"sweden-tunisia", href:"sweden-tunisia.html", date:"06-15 10:00", competition:"2026 世界杯 F 组", match:"瑞典 vs 突尼斯", result:"5-1", direction:"瑞典胜", scores:"3-1 / 5-1", goals:"4 球以上", review:"方向、5-1 比分路径和高进球区间全部得到验证。", tags:["方向命中","比分命中","进球命中"], status:"hit" },
  { id:"spain-cape-verde", href:"spain-cape-verde.html", date:"06-16 00:00", competition:"2026 世界杯 H 组", match:"西班牙 vs 佛得角", result:"0-0", direction:"西班牙胜", scores:"3-0 / 4-0", goals:"4 球以上", review:"比赛进入低比分平局，三项赛前主路径均未覆盖。", tags:["方向未一致","比分未中","进球未中"], status:"miss" },
  { id:"belgium-egypt", href:"belgium-egypt.html", date:"06-16 03:00", competition:"2026 世界杯 G 组", match:"比利时 vs 埃及", result:"1-1", direction:"比利时胜", scores:"2-1 / 1-1", goals:"2–3 球", review:"方向未一致，但 1-1 比分与进球区间得到验证。", tags:["方向未一致","比分命中","进球命中"], status:"miss" },
  { id:"saudi-arabia-uruguay", href:"saudi-arabia-uruguay.html", date:"06-16 06:00", competition:"2026 世界杯 H 组", match:"沙特阿拉伯 vs 乌拉圭", result:"1-1", direction:"乌拉圭胜", scores:"0-2 / 1-2", goals:"2–3 球", review:"方向与比分未覆盖，进球区间得到验证。", tags:["方向未一致","比分未中","进球命中"], status:"miss" },
  { id:"iran-new-zealand", href:"iran-new-zealand.html", date:"06-16 09:00", competition:"2026 世界杯 G 组", match:"伊朗 vs 新西兰", result:"2-2", direction:"伊朗胜", scores:"1-0 / 1-1", goals:"4 球以上", review:"方向和比分未覆盖，高进球区间得到验证。", tags:["方向未一致","比分未中","进球命中"], status:"miss" },
  { id:"france-senegal", href:"france-senegal.html", date:"06-17 00:00", competition:"2026 世界杯 I 组", match:"法国 vs 塞内加尔", result:"3-1", direction:"法国胜", scores:"2-0 / 2-1", goals:"2–3 球", review:"法国方向得到验证，比分和进球区间未覆盖。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"iraq-norway", href:"iraq-norway.html", date:"06-17 03:00", competition:"2026 世界杯 I 组", match:"伊拉克 vs 挪威", result:"1-4", direction:"挪威胜", scores:"0-2 / 0-3", goals:"2–3 球", review:"客胜方向得到验证，比赛进球数高于主路径。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"argentina-algeria", href:"argentina-algeria.html", date:"06-17 06:00", competition:"2026 世界杯 J 组", match:"阿根廷 vs 阿尔及利亚", result:"3-0", direction:"阿根廷胜", scores:"2-0 / 1-0", goals:"2–3 球", review:"方向与进球区间得到验证，比分路径未覆盖。", tags:["方向命中","比分未中","进球命中"], status:"hit" },
  { id:"austria-jordan", href:"austria-jordan.html", date:"06-17 09:00", competition:"2026 世界杯 J 组", match:"奥地利 vs 约旦", result:"3-1", direction:"奥地利胜", scores:"2-0 / 1-0", goals:"2–3 球", review:"主胜方向得到验证，比分和进球区间未覆盖。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"ghana-panama", href:"ghana-panama.html", date:"06-18 00:00", competition:"2026 世界杯 L 组", match:"加纳 vs 巴拿马", result:"1-0", direction:"加纳胜", scores:"1-1 / 1-0", goals:"2–3 球", review:"方向与 1-0 比分路径得到验证，进球区间未覆盖。", tags:["方向命中","比分命中","进球未中"], status:"hit" },
  { id:"england-croatia", href:"england-croatia.html", date:"06-18 03:00", competition:"2026 世界杯 L 组", match:"英格兰 vs 克罗地亚", result:"4-2", direction:"英格兰胜", scores:"2-1 / 1-1", goals:"2–3 球", review:"英格兰方向得到验证，比赛开放程度高于赛前路径。", tags:["方向命中","比分未中","进球未中"], status:"hit" },
  { id:"portugal-dr-congo", href:"portugal-dr-congo.html", date:"06-18 06:00", competition:"2026 世界杯 K 组", match:"葡萄牙 vs 刚果（金）", result:"1-1", direction:"葡萄牙胜", scores:"2-0 / 1-0", goals:"2–3 球", review:"方向与比分未覆盖，进球区间得到验证。", tags:["方向未一致","比分未中","进球命中"], status:"miss" },
  { id:"uzbekistan-colombia", href:"uzbekistan-colombia.html", date:"06-18 09:00", competition:"2026 世界杯 K 组", match:"乌兹别克斯坦 vs 哥伦比亚", result:"1-3", direction:"哥伦比亚胜", scores:"0-2 / 0-1", goals:"2–3 球", review:"客胜方向得到验证，比分和进球区间未覆盖。", tags:["方向命中","比分未中","进球未中"], status:"hit" }
];

export const metrics = { direction: 66.7, score: 37.5, goals: 54.2, halftime: null };
