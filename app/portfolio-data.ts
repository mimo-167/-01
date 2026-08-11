export type PortfolioImage = {
  src: string;
  alt: string;
  placeholder: string;
  aspectRatio?: string;
};

export type PortfolioEvidence = PortfolioImage & {
  caption: string;
  layout: "portrait" | "wide";
};

export type ProductScreenshot = PortfolioImage & {
  caption: string;
  layout: "wide" | "feature" | "portrait";
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
  performance?: PortfolioEvidence[];
  notes: SocialNote[];
};

const emptyImage = (alt: string, placeholder: string): PortfolioImage => ({
  src: "",
  alt,
  placeholder,
});

export const profile = {
  name: "朱墨",
  englishName: "Momo",
  personalSiteUrl: "https://momo-portfolio.zxkpg.uk/",
  stats: [
    { value: "1.3W+", label: "单账号粉丝" },
    { value: "47.4W", label: "获赞与收藏" },
    { value: "10W+", label: "单篇最高点赞" },
    { value: "6", label: "账号矩阵" },
  ],
};

export const socialAccounts: SocialAccount[] = [
  {
    id: "big-king-progress",
    name: "比格大王在假装进步",
    operationPeriod: "2025年4月—2026年1月",
    followers: "1.3 万",
    likesAndFavorites: "47.4 万",
    topPost: "10 万+赞",
    url: "https://xhslink.cn/m/1eq9CCllgpr",
    profile: {
      src: "/portfolio/xiaohongshu/big-profile.png",
      alt: "比格大王在假装进步小红书账号首页截图",
      placeholder: "账号首页截图",
      aspectRatio: "1080 / 2414",
    },
    performance: [
      {
        src: "/portfolio/xiaohongshu/big-data-account-overview.jpg",
        alt: "比格大王在假装进步数据中心账号概览截图",
        placeholder: "账号概览数据",
        aspectRatio: "1080 / 2278",
        caption: "账号概览与基础数据",
        layout: "portrait",
      },
      {
        src: "/portfolio/xiaohongshu/big-data-audience.jpg",
        alt: "比格大王在假装进步粉丝性别年龄城市兴趣分布截图",
        placeholder: "粉丝画像数据",
        aspectRatio: "1080 / 2256",
        caption: "粉丝画像与兴趣分布",
        layout: "portrait",
      },
      {
        src: "/portfolio/xiaohongshu/big-performance.jpg",
        alt: "比格大王在假装进步账号粉丝分析核心指标截图",
        placeholder: "粉丝分析核心指标",
        aspectRatio: "1638 / 476",
        caption: "粉丝增长与活跃粉丝占比",
        layout: "wide",
      },
      {
        src: "/portfolio/xiaohongshu/big-data-core-trends.jpg",
        alt: "比格大王在假装进步核心指标与曝光趋势截图",
        placeholder: "核心指标趋势",
        aspectRatio: "1280 / 858",
        caption: "核心指标与曝光趋势",
        layout: "wide",
      },
    ],
    notes: [
      {
        id: "big-phone-anxiety",
        title: "宝宝 其实你不喜欢边焦虑边玩手机的 对吗",
        cover: {
          src: "/portfolio/xiaohongshu/big-note-crying.jpg",
          alt: "哭泣的小比格插画",
          placeholder: "笔记配图",
          aspectRatio: "1132 / 1080",
        },
        likes: "10万+",
        favorites: "1.9万",
        comments: "996",
        url: "https://www.xiaohongshu.com/explore/6810ba53000000002100bc89",
      },
      {
        id: "big-after-gaokao",
        title: "宝宝 你不是说高考完就要做这些的吗？",
        cover: {
          src: "/portfolio/xiaohongshu/big-note-crying.jpg",
          alt: "哭泣的小比格插画",
          placeholder: "笔记配图",
          aspectRatio: "1132 / 1080",
        },
        likes: "2.9万",
        favorites: "5776",
        comments: "489",
        url: "https://www.xiaohongshu.com/explore/68516bfc0000000021009da9",
      },
      {
        id: "big-anti-anxiety",
        title: "一个很牛的反焦虑心法",
        cover: {
          src: "/portfolio/xiaohongshu/big-note-mindset.jpg",
          alt: "一个很牛的面试心法小比格插画",
          placeholder: "笔记配图",
          aspectRatio: "1084 / 1080",
        },
        likes: "1.9万",
        favorites: "5929",
        comments: "199",
        url: "https://www.xiaohongshu.com/explore/6825cfba0000000021006182",
      },
      {
        id: "big-interview-mindset",
        title: "一个巨牛的面试心态",
        cover: {
          src: "/portfolio/xiaohongshu/big-note-mindset.jpg",
          alt: "一个很牛的面试心法小比格插画",
          placeholder: "笔记配图",
          aspectRatio: "1084 / 1080",
        },
        likes: "8735",
        favorites: "5386",
        comments: "134",
        url: "https://www.xiaohongshu.com/explore/680b8eec000000001d01eb25",
      },
    ],
  },
  {
    id: "she-evolution",
    name: "SHE进化论",
    operationPeriod: "2025年11月—2026年1月",
    followers: "8462",
    likesAndFavorites: "29.6 万",
    topPost: "4863 赞 / 6086 收藏",
    url: "https://xhslink.cn/m/7MAAfrKP37G",
    profile: {
      src: "/portfolio/xiaohongshu/she-profile.jpg",
      alt: "SHE进化论小红书账号首页截图",
      placeholder: "账号首页截图",
      aspectRatio: "1080 / 2414",
    },
    notes: [
      {
        id: "she-growth",
        title: "看着自己成长真的好爽！",
        cover: emptyImage("视频代表笔记暂未展示", "视频展示待确认"),
        likes: "4863",
        favorites: "6086",
        comments: "4",
        url: "https://www.xiaohongshu.com/explore/6943e2cb000000001f00cffe",
      },
    ],
  },
  {
    id: "chestnut-crisp",
    name: "一颗栗子酥",
    operationPeriod: "2025年7月—2026年1月",
    followers: "4895",
    likesAndFavorites: "11.0 万",
    topPost: "9770 赞",
    url: "https://xhslink.cn/m/7smAnr1BZuy",
    profile: {
      src: "/portfolio/xiaohongshu/chestnut-profile.jpg",
      alt: "一颗栗子酥小红书账号首页截图",
      placeholder: "账号首页截图",
      aspectRatio: "1080 / 2414",
    },
    notes: [
      {
        id: "chestnut-independent-girlfriend",
        title: "爱黏人的女朋友突然开始独立了 2",
        cover: {
          src: "/portfolio/xiaohongshu/chestnut-independent.jpeg",
          alt: "爱黏人的女朋友突然开始独立了笔记截图",
          placeholder: "代表笔记封面",
          aspectRatio: "1080 / 1440",
        },
        likes: "9770",
        favorites: "1356",
        comments: "1839",
        url: "",
      },
      {
        id: "chestnut-game-return",
        title: "退游后，你推来找你了",
        cover: {
          src: "/portfolio/xiaohongshu/chestnut-game-return-v2-01.png",
          alt: "退游后，你推来找你了笔记封面",
          placeholder: "代表笔记封面",
          aspectRatio: "1080 / 1440",
        },
        likes: "2678",
        favorites: "225",
        comments: "244",
        url: "",
      },
    ],
  },
  {
    id: "quiet-letters",
    name: "她也不爱说话",
    operationPeriod: "2025年8月—2025年9月",
    followers: "3574",
    likesAndFavorites: "16.1 万",
    topPost: "1.1 万赞",
    url: "https://xhslink.cn/m/1r9iV8Nf2tj",
    profile: {
      src: "/portfolio/xiaohongshu/quiet-profile.jpg",
      alt: "她也不爱说话小红书账号首页截图",
      placeholder: "账号首页截图",
      aspectRatio: "1080 / 2414",
    },
    notes: [
      {
        id: "quiet-confession-letters",
        title: "告白信合集：总有一封属于你",
        cover: {
          src: "/portfolio/xiaohongshu/quiet-confession.webp",
          alt: "告白信合集总有一封属于你笔记截图",
          placeholder: "代表笔记封面",
          aspectRatio: "1080 / 1443",
        },
        likes: "1.1万",
        favorites: "6091",
        comments: "39",
        url: "https://www.xiaohongshu.com/explore/68aad75c000000001d036057",
      },
    ],
  },
  {
    id: "reading-now",
    name: "正在书入中",
    operationPeriod: "2025年9月—2026年1月",
    followers: "4613",
    likesAndFavorites: "8.2 万",
    topPost: "5834 赞（已上传样本）",
    url: "https://xhslink.cn/m/2Bz5p5lEgRs",
    profile: emptyImage("正在书入中账号首页截图尚未上传", "账号首页截图待补充"),
    notes: [
      {
        id: "reading-bankrupt-heir",
        title: "高富帅破产后，和跟班小弟在一起了",
        cover: {
          src: "/portfolio/xiaohongshu/reading-rich.jpeg",
          alt: "高富帅破产后和跟班小弟在一起了笔记截图",
          placeholder: "代表笔记封面",
          aspectRatio: "1080 / 1058",
        },
        likes: "2741",
        favorites: "813",
        comments: "203",
        url: "",
      },
      {
        id: "reading-white-paper",
        title: "鉴宝专家说我爸收藏的一张白纸价值10万",
        cover: {
          src: "/portfolio/xiaohongshu/reading-paper.jpeg",
          alt: "鉴宝专家说我爸收藏的一张白纸价值10万笔记截图",
          placeholder: "代表笔记封面",
          aspectRatio: "727 / 727",
        },
        likes: "5834",
        favorites: "593",
        comments: "218",
        url: "",
      },
    ],
  },
  {
    id: "snack-reviewer",
    name: "电子榨菜品鉴大王",
    operationPeriod: "未提供",
    followers: "1709",
    likesAndFavorites: "22.3 万",
    topPost: "1.5 万赞（已上传样本）",
    url: "https://xhslink.cn/m/8nhy8Ska4OR",
    profile: emptyImage("电子榨菜品鉴大王账号首页截图尚未上传", "账号首页截图待补充"),
    notes: [
      {
        id: "snack-xiha",
        title: "女人中的女人！嘻哈硬刚酒桌骚扰！",
        cover: {
          src: "/portfolio/xiaohongshu/snack-xiha.png",
          alt: "女人中的女人嘻哈硬刚酒桌骚扰笔记截图",
          placeholder: "代表笔记封面",
          aspectRatio: "1080 / 1443",
        },
        likes: "1.2万",
        favorites: "571",
        comments: "394",
        url: "",
      },
      {
        id: "snack-shuqi",
        title: "舒淇：那些创伤一直在，但我不再会被困住了",
        cover: {
          src: "/portfolio/xiaohongshu/snack-shuqi.png",
          alt: "舒淇那些创伤一直在但我不再会被困住了笔记截图",
          placeholder: "代表笔记封面",
          aspectRatio: "1210 / 1080",
        },
        likes: "1.5万",
        favorites: "2803",
        comments: "658",
        url: "",
      },
    ],
  },
];

export const productWorks = [
  {
    id: "ai-tarot",
    title: "AI 塔罗在线占卜网站",
    tags: ["AI", "Web", "Product"],
    url: "https://tarot.zxkpg.uk/",
    hero: {
      src: "/portfolio/products/tarot-home.png",
      alt: "星月塔罗网站首页，展示月亮、星空与塔罗牌主视觉",
      placeholder: "星月塔罗网站首页",
      aspectRatio: "2160 / 1187",
    },
    screenshots: [
      {
        src: "/portfolio/products/tarot-spreads.png",
        alt: "星月塔罗牌阵选择页面",
        placeholder: "牌阵选择页面",
        aspectRatio: "2160 / 1187",
        caption: "牌阵选择",
        layout: "wide",
      },
      {
        src: "/portfolio/products/tarot-blog.png",
        alt: "星月塔罗博客文章列表页面",
        placeholder: "塔罗博客页面",
        aspectRatio: "2160 / 1187",
        caption: "塔罗博客",
        layout: "wide",
      },
      {
        src: "/portfolio/products/tarot-card-selection.png",
        alt: "未来恋人塔罗占卜的沉浸式选牌页面",
        placeholder: "互动选牌页面",
        aspectRatio: "2160 / 1187",
        caption: "沉浸式互动选牌",
        layout: "feature",
      },
      {
        src: "/portfolio/products/tarot-future-lover.png",
        alt: "星月塔罗未来恋人占卜结果分享长图",
        placeholder: "未来恋人结果长图",
        aspectRatio: "1080 / 1350",
        caption: "占卜结果分享长图",
        layout: "portrait",
      },
    ] satisfies ProductScreenshot[],
  },
];

export const contact = {
  email: "zhum57@mail2.sysu.edu.cn",
  emailUrl: "mailto:zhum57@mail2.sysu.edu.cn",
  phone: "13245799217",
};
