export type PortfolioImage = {
  src: string;
  alt: string;
  placeholder: string;
};

export type SocialNote = {
  id: string;
  title: string;
  cover: PortfolioImage;
  likes: string;
  favorites: string;
  comments: string;
  url: string;
};

export type SocialAccount = {
  id: string;
  name: string;
  operationPeriod: string;
  followers: string;
  likesAndFavorites: string;
  topPost: string;
  url: string;
  profile: PortfolioImage;
  performance?: PortfolioImage;
  notes: SocialNote[];
};

const emptyImage = (alt: string, placeholder: string): PortfolioImage => ({
  src: "",
  alt,
  placeholder,
});

const emptyNote = (id: string): SocialNote => ({
  id,
  title: "原笔记标题待补充",
  cover: emptyImage("小红书代表笔记封面", "代表笔记封面"),
  likes: "—",
  favorites: "—",
  comments: "—",
  url: "",
});

export const profile = {
  name: "朱墨",
  englishName: "Momo",
  personalSiteUrl: "",
  stats: [
    { value: "1.3W+", label: "单账号粉丝" },
    { value: "46W+", label: "累计获赞" },
    { value: "10W", label: "单篇最高点赞" },
    { value: "6", label: "账号矩阵" },
  ],
};

// 后续拿到真实素材后，只需要替换这里的文字、链接和图片路径。
export const socialAccounts: SocialAccount[] = [
  {
    id: "featured-account",
    name: "重点账号名称待补充",
    operationPeriod: "运营时间待补充",
    followers: "待补充",
    likesAndFavorites: "待补充",
    topPost: "待补充",
    url: "",
    profile: emptyImage("重点小红书账号首页截图", "账号首页截图"),
    performance: emptyImage("重点账号后台数据截图", "账号阶段数据原始截图"),
    notes: [emptyNote("featured-note-1"), emptyNote("featured-note-2"), emptyNote("featured-note-3")],
  },
  {
    id: "account-02",
    name: "账号名称待补充",
    operationPeriod: "运营时间待补充",
    followers: "待补充",
    likesAndFavorites: "待补充",
    topPost: "待补充",
    url: "",
    profile: emptyImage("小红书账号首页截图", "账号首页截图"),
    notes: [emptyNote("account-02-note-1"), emptyNote("account-02-note-2"), emptyNote("account-02-note-3")],
  },
];

export const productWorks = [
  {
    id: "ai-tarot",
    title: "AI 塔罗在线占卜网站",
    tags: ["AI", "Web", "Product"],
    url: "",
    hero: emptyImage("AI 塔罗在线占卜网站首页", "网站首页大截图"),
    screenshots: [
      emptyImage("AI 塔罗网站核心页面一", "核心页面截图 01"),
      emptyImage("AI 塔罗网站核心页面二", "核心页面截图 02"),
      emptyImage("AI 塔罗网站核心页面三", "核心页面截图 03"),
    ],
  },
];

export const contact = {
  email: "邮箱待补充",
  emailUrl: "",
  phone: "",
};
