export type Work = {
  slug: string;
  title: string;
  eyebrow: string;
  category: string;
  summary: string;
  date: string;
  readingTime: string;
  tags: string[];
  tone: "sage" | "rose" | "sand" | "ink";
  capability: string;
  note?: string;
};

export const writings: Work[] = [
  {
    slug: "rainy-night-platform",
    title: "末班车到站以前",
    eyebrow: "ORIGINAL FICTION · 原创短篇",
    category: "原创短篇",
    summary: "以一场错过与重逢，练习克制对白、关系留白与情绪回收。",
    date: "2026.07",
    readingTime: "约 6 分钟",
    tags: ["关系张力", "潜台词", "都市"],
    tone: "rose",
    capability: "人物心理描写、潜台词、关系张力与情绪节奏",
    note: "为本作品集撰写的非商业原创练习",
  },
  {
    slug: "character-voice-practice",
    title: "他没有说出口的晚安",
    eyebrow: "CHARACTER VOICE · 人物片段",
    category: "人物片段",
    summary: "用三组短对话建立角色辨识度，并让关心藏在回避里。",
    date: "2026.07",
    readingTime: "约 4 分钟",
    tags: ["对白练习", "角色辨识", "克制表达"],
    tone: "sand",
    capability: "角色语言风格、信息差设计与情感表达",
    note: "原创角色练习，不对应任何商业游戏",
  },
];

export const analyses: Work[] = [
  {
    slug: "how-romantic-scene-works",
    title: "一段心动剧情是怎样被设计出来的",
    eyebrow: "GAME OBSERVATION · 剧情拆解",
    category: "剧情分析",
    summary: "从期待建立、动作细节和潜台词三个层次，拆解心动感的生成机制。",
    date: "2026.07",
    readingTime: "约 8 分钟",
    tags: ["情绪曲线", "台词分析", "玩家代入"],
    tone: "sage",
    capability: "剧情结构拆解、玩家情绪洞察与可执行优化",
    note: "通用方法练习，案例已做匿名化处理",
  },
  {
    slug: "companionship-event-review",
    title: "轻玩法如何建立陪伴感",
    eyebrow: "EVENT REVIEW · 活动复盘",
    category: "活动复盘",
    summary: "从每日回访动机出发，分析剧情解锁节奏、操作负担与角色反馈。",
    date: "2026.07",
    readingTime: "约 7 分钟",
    tags: ["活动复盘", "留存", "陪伴感"],
    tone: "ink",
    capability: "用户路径、活动节奏、留存动机与风险判断",
    note: "非商业分析练习，不包含未公开项目信息",
  },
];

export const projects: Work[] = [
  {
    slug: "letters-from-tomorrow",
    title: "「来自明天的信」版本活动策划案",
    eyebrow: "PROJECT STORY · 独立练习项目",
    category: "活动策划",
    summary: "以七日书信互动串联剧情、轻玩法、奖励与站外传播的一套完整方案。",
    date: "2026.07",
    readingTime: "约 10 分钟",
    tags: ["用户洞察", "玩法流程", "传播文案"],
    tone: "sand",
    capability: "活动框架、玩法流程、文案需求、美术协作与风险优化",
    note: "个人独立完成的非商业策划练习",
  },
];

export const accounts = [
  {
    slug: "big-dog-reading-account",
    title: "比格大王在假装进步",
    source: "腾讯微信读书内容运营",
    category: "阅读与成长",
    role: "独立负责 · 0—1 搭建",
    period: "约半年",
    metrics: ["0 → 1.3 万粉", "累计 46 万赞", "单篇最高曝光 48 万", "单篇最高获赞 10 万"],
    summary: "从定位、选题和文案，到发布测试与数据复盘，形成稳定的内容增长闭环。",
    tone: "sage" as const,
  },
  {
    slug: "tencent-account-matrix",
    title: "腾讯多赛道账号矩阵",
    source: "腾讯微信读书内容运营",
    category: "6 个内容赛道",
    role: "内容策划 · 文案 · 数据复盘",
    period: "实习期间",
    metrics: ["并行负责 6 个账号", "差异化用户定位", "投放测试", "流量分配"],
    summary: "不是把一条内容复制六遍，而是为六类用户重新回答：她为什么愿意停下来？",
    tone: "sand" as const,
  },
  {
    slug: "original-fiction-account",
    title: "原创剧情内容账号",
    source: "个人内容项目",
    category: "原创剧情与人物关系",
    role: "独立运营 · 独立创作",
    period: "持续更新",
    metrics: ["约 5000 粉丝", "原创剧情", "人物关系", "评论反馈复盘"],
    summary: "围绕人物冲突、对白与悬念持续创作，并从用户反馈检验情绪是否真正抵达。",
    tone: "rose" as const,
  },
];

export const allWorks = [...analyses, ...projects, ...writings];

export const navItems = [
  ["/about", "Understand Me"],
  ["/projects", "Project Stories"],
  ["/accounts", "Media Accounts"],
  ["/writing", "Writing Gallery"],
  ["/analysis", "Game Notes"],
  ["/resume", "Resume"],
] as const;
