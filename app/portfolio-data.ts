export type PortfolioImage = {
  src: string;
  alt: string;
  placeholder: string;
  aspectRatio?: string;
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

export const profile = {
  name: "朱墨",
  englishName: "Momo",
  personalSiteUrl: "",
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
    operationPeriod: "约半年",
    followers: "1.3 万",
    likesAndFavorites: "47.4 万",
    topPost: "10 万+赞",
    url: "",
    profile: {
      src: "/portfolio/xiaohongshu/big-profile.png",
      alt: "比格大王在假装进步小红书账号首页截图",
      placeholder: "账号首页截图",
      aspectRatio: "1080 / 2414",
    },
    performance: {
      src: "/portfolio/xiaohongshu/big-performance.jpg",
      alt: "比格大王在假装进步账号粉丝分析核心指标截图",
      placeholder: "账号阶段数据原始截图",
      aspectRatio: "1638 / 476",
    },
    notes: [
      {
        id: "big-phone-anxiety",
        title: "宝宝 其实你不喜欢边焦虑边玩手机的 对吗",
        cover: emptyImage("笔记图片尚未上传", "图片稍后补充"),
        likes: "10万+",
        favorites: "1.9万",
        comments: "996",
        url: "https://www.xiaohongshu.com/explore/6810ba53000000002100bc89",
      },
      {
        id: "big-after-gaokao",
        title: "宝宝 你不是说高考完就要做这些的吗？",
        cover: emptyImage("笔记图片尚未上传", "图片稍后补充"),
        likes: "2.9万",
        favorites: "5776",
        comments: "489",
        url: "https://www.xiaohongshu.com/explore/68516bfc0000000021009da9",
      },
      {
        id: "big-anti-anxiety",
        title: "一个很牛的反焦虑心法",
        cover: emptyImage("笔记图片尚未上传", "图片稍后补充"),
        likes: "1.9万",
        favorites: "5929",
        comments: "199",
        url: "https://www.xiaohongshu.com/explore/6825cfba0000000021006182",
      },
      {
        id: "big-interview-mindset",
        title: "一个巨牛的面试心态",
        cover: emptyImage("笔记图片尚未上传", "图片稍后补充"),
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
    operationPeriod: "资料未提供",
    followers: "8462",
    likesAndFavorites: "29.6 万",
    topPost: "4863 赞 / 6086 收藏",
    url: "",
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
    operationPeriod: "资料未提供",
    followers: "4895",
    likesAndFavorites: "11.0 万",
    topPost: "9770 赞",
    url: "",
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
        cover: emptyImage("该笔记图片待整理", "图片稍后补充"),
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
    operationPeriod: "资料未提供",
    followers: "3574",
    likesAndFavorites: "16.1 万",
    topPost: "1.1 万赞",
    url: "",
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
    operationPeriod: "资料未提供",
    followers: "资料未提供",
    likesAndFavorites: "资料未提供",
    topPost: "5834 赞（已上传样本）",
    url: "",
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
    operationPeriod: "资料未提供",
    followers: "资料未提供",
    likesAndFavorites: "资料未提供",
    topPost: "1.5 万赞（已上传样本）",
    url: "",
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
