const state = {
  role: "brand",
  page: "promotions",
  query: "",
  detailCountryOpen: false,
  brandHasCampaigns: false,
  language: "zh",
  topbarMenu: {
    languageOpen: false,
    userOpen: false,
  },
  publishDraft: {
    platformMenuOpen: false,
    countryMenuOpen: false,
    areaMenuOpen: false,
    creatorTypeMenuOpen: false,
    followerPopoverOpen: false,
    region: "东南亚",
    platforms: ["TikTok", "YouTube"],
    countries: ["澳大利亚", "新西兰", "巴布亚新几内亚", "北马里亚纳", "法属波利尼西亚", "斐济", "关岛", "基里巴斯"],
    areas: ["东南亚"],
    creatorTypes: ["美妆", "生活方式"],
    budgetTotal: "",
    unitPriceMin: "100",
    unitPriceMax: "200",
    followerMinK: "10.00",
    followerMaxK: "20.00",
  },
  collaboratorFilters: {
    campaign: "",
    creator: "",
    platforms: [],
    platformMenuOpen: false,
  },
  confirmedCollaborators: [],
  appliedCampaigns: [],
  pendingApplyCampaign: "",
  talentSearchFilters: {
    keyword: "",
    platform: "全部",
    region: "全部",
    followerCount: "全部",
    followerGender: "全部",
    followerAge: "全部",
    recent28: "全部",
    priceRange: "全部",
    engagement: "全部",
    category: "全部",
    contract: "全部",
    expanded: false,
  },
  promotionFilters: {
    name: "",
    status: "",
    startDate: "",
  },
  opportunityFilters: {
    platformMenuOpen: false,
    tagMenuOpen: false,
    followerMenuOpen: false,
    amountMenuOpen: false,
    platforms: [],
    tags: [],
    region: "",
    followerMin: 0,
    followerMax: 1000000,
    amountMin: 0,
    amountMax: 100000,
    settlement: "",
    deliveryStart: "",
    deliveryEnd: "",
  },
  tabs: {
    collaborators: "pending",
    taskReview: "applicants",
    invitations: "all",
    myProjects: "active",
    account: "company",
  },
  publishStep: 0,
};

const assets = {
  avatar: "assets/images/brand-avatar.png",
  creatorMap: "assets/images/creator-map.png",
  strip: "assets/images/campaign-strip.png",
  creatorPreview: "assets/images/creator-preview.png",
  delivery: "assets/images/delivery-preview.png",
  flagCN: "assets/images/flag-cn.svg",
  flagEN: "assets/images/flag-us.svg",
  flagUS: "assets/images/flag-us.svg",
  creatorAvatarPending: "assets/images/creator-avatar-illu-back.jpg",
  talentAvatar1: "assets/images/talent-avatar-01.jpg",
  talentAvatar2: "assets/images/talent-avatar-02.jpg",
  talentAvatar3: "assets/images/talent-avatar-03.jpg",
  talentAvatar4: "assets/images/talent-avatar-04.jpg",
  tiktokLogo: "assets/images/logo-tiktok.svg",
  youtubeLogo: "assets/images/logo-youtube.svg",
  twitchLogo: "assets/images/logo-twitch.svg",
  instagramLogo: "assets/images/logo-instagram.svg",
  opportunityGame: "assets/images/opportunity-game.svg",
  opportunityRetail: "assets/images/opportunity-retail.svg",
  opportunityLive: "assets/images/opportunity-live.svg",
};

const taskDetailProfile = {
  taskName: "MINISO 夏季新品内容合作",
  displayTitle: "Miniso - 英国站 2026.06",
  brandName: "名创优品（MINISO）官方旗舰店",
  brandLabel: "Miniso",
  contactName: "王雨薇",
  contactRole: "品牌市场负责人",
  platforms: [
    { key: "tiktok", name: "TikTok", logo: assets.tiktokLogo },
    { key: "youtube", name: "YouTube", logo: assets.youtubeLogo },
  ],
  contentType: "短视频（30-60 秒）",
  creatorTypes: ["生活", "时尚"],
  targetCountries: [
    { code: "US", name: "美国" },
    { code: "GB", name: "英国" },
    { code: "SG", name: "新加坡" },
    { code: "JP", name: "日本" },
    { code: "KR", name: "韩国" },
    { code: "FR", name: "法国" },
    { code: "DE", name: "德国" },
    { code: "IT", name: "意大利" },
    { code: "ES", name: "西班牙" },
    { code: "CA", name: "加拿大" },
    { code: "AU", name: "澳大利亚" },
  ],
  followerRequirement: "粉丝数 ≥ 50 万",
  deadline: "2026/06/30",
  budget: "￥6,000",
  productLink: "https://www.miniso.com/",
  settlementType: "定制视频 · 60 秒",
  settlementMethod: "固定价",
  settlementPeriod: "以合作协议为准",
  contentSpec:
    "视频前 10 秒需清晰展示产品并口播核心卖点；画面需包含包装与使用场景；避免使用存在版权风险的背景音乐；发布后 7 天内回传数据截图。",
};

const applicationDetail = {
  applicantName: "李沐晨",
  accountName: "沐晨工作室",
  accountPlatform: "抖音",
  quote: "￥1,200",
  // 可选：none / platform_review / brand_review / approved / rejected
  statusKey: "none",
  feedbackTime: "2026-06-06 14:20:11",
  rejectReason:
    "报价信息填写不完整；请补充“包含几次修改/是否支持素材授权”等说明，并重新提交审核。",
};

function applicationStatusView(key) {
  const map = {
    none: { label: "未报名", cls: "draft", tip: "你还未报名该任务，点击按钮即可提交报名信息。" },
    platform_review: { label: "已报名，待平台审核", cls: "pending", tip: "平台正在校验账号、报价与报名理由。" },
  };
  return map[key] || map.platform_review;
}

function platformBadges(platforms) {
  return `
    <div class="platform-badges" aria-label="推广平台">
      ${platforms
        .map(
          (p) => `
          <span class="platform-badge">
            <img src="${p.logo}" alt="${p.name}" />
            <span>${p.name}</span>
          </span>
        `,
        )
        .join("")}
    </div>
  `;
}

function countryChips(countries, options = {}) {
  const { compact = false } = options;
  if (!compact || countries.length <= 3) {
    return `
      <div class="country-chips" aria-label="目标国家">
        ${countries.map((c) => `<span class="country-chip">${c.code} ${c.name}</span>`).join("")}
      </div>
    `;
  }
  const visible = countries.slice(0, 3);
  const hidden = countries.slice(3);
  return `
    <div class="country-chips" aria-label="目标国家">
      ${visible.map((c) => `<span class="country-chip">${c.code} ${c.name}</span>`).join("")}
      <div class="country-overflow ${state.detailCountryOpen ? "open" : ""}">
        <button
          type="button"
          class="country-chip more"
          data-action="toggle-country-list"
          aria-expanded="${state.detailCountryOpen ? "true" : "false"}"
          aria-label="查看其余 ${hidden.length} 个国家"
        >
          +${hidden.length}
        </button>
        <div class="country-popover" role="dialog" aria-label="目标国家/地区列表">
          <div class="country-popover-title">目标国家/地区（共 ${countries.length} 个）</div>
          <div class="country-popover-list">
            ${countries.map((c) => `<span class="country-chip">${c.code} ${c.name}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function countryTextList(countries) {
  return countries.map((item) => `${item.code} ${item.name}`).join("、");
}

function regionTextToCountries(region = "") {
  const map = {
    US: { code: "US", name: "美国" },
    UK: { code: "GB", name: "英国" },
    EN: { code: "GB", name: "英国" },
    CN: { code: "CN", name: "中国" },
    JP: { code: "JP", name: "日本" },
    SG: { code: "SG", name: "新加坡" },
  };
  return String(region)
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => map[item.toUpperCase()] || { code: item.toUpperCase(), name: item });
}

function opportunityRegionDisplay(region = "") {
  const text = String(region || "-");
  return `
    <div class="region-inline-overflow" tabindex="0">
      <span class="region-inline-text" title="${text}">${text}</span>
      <div class="country-popover" role="dialog" aria-label="推广地区详情">
        <div class="country-popover-title">推广地区</div>
        <div class="country-popover-list">
          <span class="country-chip">${text}</span>
        </div>
      </div>
    </div>
  `;
}

function simpleChips(items) {
  return `<div class="simple-chips">${items.map((item) => `<span class="simple-chip">${item}</span>`).join("")}</div>`;
}

function platformLogo(platformName = "") {
  const normalized = String(platformName || "").toLowerCase();
  if (normalized.includes("tiktok")) return `<img class="platform-logo-inline" src="${assets.tiktokLogo}" alt="TikTok" />`;
  if (normalized.includes("youtube")) return `<img class="platform-logo-inline" src="${assets.youtubeLogo}" alt="YouTube" />`;
  return `<span class="platform-logo-fallback">${platformName || "-"}</span>`;
}

function videoPlaceholder(title = "最近发布视频") {
  const safeTitle = String(title || "最近发布视频");
  return `<span class="video-placeholder" title="${safeTitle}"><span class="video-play" aria-hidden="true">▶</span><span>视频</span></span>`;
}

function regionBadge(region) {
  if (!region) return "-";
  const code = region.code || "";
  const name = region.name || code || "-";
  const flag = code === "US" ? assets.flagUS : "";
  return `
    <span class="region-badge">
      ${flag ? `<img src="${flag}" alt="" />` : ""}
      <span>${name}</span>
    </span>
  `;
}

function creatorInfoCell(row, showId = true) {
  return `
    <div class="row-title collab-creator-two-lines">
      <img src="${row.avatar || assets.creatorPreview}" alt="" />
      <span>
        <strong class="creator-name">${row.creator}</strong>
        <small class="creator-subline">${showId ? row.creatorId || "-" : ""}${showId ? " · " : ""}${row.platform || "-"}</small>
      </span>
    </div>
  `;
}

function uniqueCampaignNames() {
  return [...new Set(collaborations.map((x) => x.campaign))].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function applyCollaboratorFilters(rows) {
  const campaignQ = state.collaboratorFilters.campaign.trim().toLowerCase();
  const creatorQ = state.collaboratorFilters.creator.trim().toLowerCase();
  const platforms = state.collaboratorFilters.platforms;
  return rows
    .filter((row) => !campaignQ || row.campaign.toLowerCase().includes(campaignQ))
    .filter((row) => !creatorQ || row.creator.toLowerCase().includes(creatorQ))
    .filter((row) => !platforms.length || platforms.includes(row.platform));
}

function collaboratorKey(row) {
  return `${row.creatorId || row.creator}__${row.campaign}`;
}

function isConfirmedCollaboration(row) {
  return state.confirmedCollaborators.includes(collaboratorKey(row));
}

const brandNav = [
  ["promotions", "活动管理", "活"],
  ["talentManagement", "达人管理", "管"],
  ["collaborators", "合作达人", "合", "child"],
  ["talentSearch", "达人搜索", "搜", "child"],
  ["account", "账户管理", "账"],
];

const creatorNav = [
  ["opportunityHall", "机会大厅", "机"],
  ["invitations", "合作邀请", "邀"],
  ["myProjects", "我的任务", "任"],
  ["revenue", "我的收益", "收"],
  ["personalCenter", "个人中心", "个"],
];

const navLabels = Object.fromEntries([...brandNav, ...creatorNav].map(([id, label]) => [id, label]));

const campaigns = [
  {
    name: "全境封锁-全球活动",
    product: "全境封锁",
    region: "美国、日本、新加坡 +18",
    joined: 5,
    publishedCreators: 2,
    works: 2,
    budget: "$999",
    start: "2026-6-5 10:59:20",
    status: "进行中",
    statusClass: "running",
  },
  {
    name: "新手游推广-幻影",
    product: "绝密幻影",
    region: "美国、日本、英国",
    joined: 1,
    publishedCreators: 1,
    works: 1,
    budget: "$2,000",
    start: "2026-6-4 10:59:20",
    status: "草稿",
    statusClass: "draft",
  },
  {
    name: "电商广告-小天鹅",
    product: "小天鹅",
    region: "UK、CN、EN",
    joined: 0,
    publishedCreators: 0,
    works: 0,
    budget: "$1,600",
    start: "2026-6-3 10:59:20",
    status: "已到期",
    statusClass: "expired",
  },
  {
    name: "MINISO 夏季新品内容合作",
    product: "香氛与收纳系列",
    region: "美国、日本、英国",
    joined: 0,
    publishedCreators: 0,
    works: 0,
    budget: "$2,000",
    start: "2026-6-12 09:30:00",
    status: "审核中",
    statusClass: "pending",
  },
  {
    name: "其他活动",
    product: "展示推广的产品名称",
    region: "全球",
    joined: 5,
    publishedCreators: 2,
    works: 2,
    budget: "$999",
    start: "2026-6-1 10:59:20",
    status: "进行中",
    statusClass: "running",
  },
];

const creators = [
  {
    name: "Mika Studio",
    avatar: assets.talentAvatar1,
    category: "游戏",
    platform: "TikTok",
    fans: "744.15万",
    avgViews: "161.10万",
    recent: "1.42万",
    country: "US / UK",
    age: "16-25",
    gender: "女性 81.52%",
    price: "$2,000",
    engagement: "3.5%",
    contract: "未签约",
  },
  {
    name: "Nova Plays",
    avatar: assets.talentAvatar2,
    category: "购物与零售",
    platform: "YouTube",
    fans: "161.10万",
    avgViews: "42.8万",
    recent: "1297",
    country: "JP / CN",
    age: "18-30",
    gender: "女性 79.8%",
    price: "$800",
    engagement: "4.1%",
    contract: "已签约",
  },
  {
    name: "Kira Live",
    avatar: assets.talentAvatar4,
    category: "运动户外",
    platform: "Twitch",
    fans: "58.20万",
    avgViews: "18.4万",
    recent: "856",
    country: "UK",
    age: "18-30",
    gender: "男性 63.4%",
    price: "$1,200",
    engagement: "5.2%",
    contract: "未签约",
  },
  {
    name: "Luna Trend",
    avatar: assets.talentAvatar3,
    category: "美妆",
    platform: "TikTok",
    fans: "289.40万",
    avgViews: "68.5万",
    recent: "1.06万",
    country: "US / TH",
    age: "18-24",
    gender: "女性 88.3%",
    price: "$1,200",
    engagement: "6.2%",
    contract: "已签约",
  },
  {
    name: "Retail Spark",
    avatar: assets.talentAvatar2,
    category: "购物与零售",
    platform: "YouTube",
    fans: "92.30万",
    avgViews: "24.7万",
    recent: "782",
    country: "JP / MY",
    age: "25-34",
    gender: "女性 74.2%",
    price: "$650",
    engagement: "4.6%",
    contract: "未签约",
  },
  {
    name: "Aiden Motion",
    avatar: assets.talentAvatar4,
    category: "运动户外",
    platform: "TikTok",
    fans: "136.80万",
    avgViews: "31.9万",
    recent: "1650",
    country: "DE / UK",
    age: "18-30",
    gender: "男性 57.4%",
    price: "$1,100",
    engagement: "5.8%",
    contract: "已签约",
  },
  {
    name: "Momo Beauty Lab",
    avatar: assets.talentAvatar3,
    category: "美妆",
    platform: "YouTube",
    fans: "87.60万",
    avgViews: "19.3万",
    recent: "1320",
    country: "TH / VN",
    age: "18-30",
    gender: "女性 90.1%",
    price: "$950",
    engagement: "7.1%",
    contract: "未签约",
  },
  {
    name: "Tech Otto",
    avatar: assets.talentAvatar2,
    category: "科技与数码",
    platform: "YouTube",
    fans: "305.00万",
    avgViews: "72.6万",
    recent: "3850",
    country: "US / DE",
    age: "25-34",
    gender: "男性 68.7%",
    price: "$2,600",
    engagement: "3.9%",
    contract: "已签约",
  },
  {
    name: "Daily Miki",
    avatar: assets.talentAvatar1,
    category: "购物与零售",
    platform: "TikTok",
    fans: "142.10万",
    avgViews: "28.2万",
    recent: "920",
    country: "MY / UK",
    age: "18-30",
    gender: "女性 76.8%",
    price: "$880",
    engagement: "5.4%",
    contract: "未签约",
  },
  {
    name: "Kenji Shopping",
    avatar: assets.talentAvatar2,
    category: "购物与零售",
    platform: "YouTube",
    fans: "118.70万",
    avgViews: "35.4万",
    recent: "1100",
    country: "JP / US",
    age: "25-34",
    gender: "女性 70.5%",
    price: "$1,400",
    engagement: "4.8%",
    contract: "已签约",
  },
  {
    name: "Finance Mia",
    avatar: assets.talentAvatar1,
    category: "理财与投资",
    platform: "Instagram",
    fans: "66.80万",
    avgViews: "8.4万",
    recent: "620",
    country: "US / UK",
    age: "25-34",
    gender: "女性 62.4%",
    price: "$700",
    engagement: "3.2%",
    contract: "未签约",
  },
  {
    name: "App Leo",
    avatar: assets.talentAvatar4,
    category: "软件与应用",
    platform: "TikTok",
    fans: "54.20万",
    avgViews: "12.9万",
    recent: "540",
    country: "ID / TH",
    age: "18-24",
    gender: "男性 60.2%",
    price: "$520",
    engagement: "6.4%",
    contract: "未签约",
  },
  {
    name: "Foodie Nara",
    avatar: assets.talentAvatar3,
    category: "食品饮料",
    platform: "Instagram",
    fans: "98.50万",
    avgViews: "15.6万",
    recent: "870",
    country: "JP / KR",
    age: "18-30",
    gender: "女性 73.6%",
    price: "$980",
    engagement: "5.1%",
    contract: "已签约",
  },
];

const collaborations = [
  {
    creator: "Mika Studio",
    creatorId: "@mika_studio_official",
    avatar: assets.creatorAvatarPending,
    platform: "TikTok",
    fans: "744.15万",
    contentTags: ["游戏", "测评", "剧情短片"],
    audienceRegion: { code: "US", name: "美国" },
    audienceGender: "女性 81.52%",
    audienceAge: "18-24 岁占比最高",
    recentVideo: "《全境封锁》新版本 3 分钟速看",
    avgViews: "161.10万",
    campaign: "全境封锁-全球活动",
    campaignInfo: {
      name: "全境封锁-全球活动",
      product: "全境封锁",
      platform: "TikTok",
      region: "美国、英国、加拿大",
      budget: "$999",
      deadline: "2026-6-10",
      requirement: "游戏 / 剧情类创作者优先，粉丝数≥50万",
    },
    type: "视频",
    settlement: "固定价",
    price: "99",
    status: "已接单待确认",
    statusClass: "pending",
    progress: "脚本待确认",
    due: "2026-6-10",
    acceptTime: "2026-6-6 14:21:09",
    note: "已发送合作协议，等待确认。",
  },
  {
    creator: "Nova Plays",
    creatorId: "@nova_plays",
    avatar: assets.creatorAvatarPending,
    platform: "YouTube",
    fans: "161.10万",
    contentTags: ["购物", "零售"],
    audienceRegion: { code: "US", name: "美国" },
    audienceGender: "女性 79.8%",
    audienceAge: "18-30 岁",
    recentVideo: "MINISO 夏季新品开箱",
    avgViews: "42.8万",
    campaign: "全境封锁2-上线活动",
    type: "直播",
    settlement: "固定价",
    price: "80",
    status: "进行中",
    statusClass: "running",
    progress: "内容制作中",
    due: "2026-6-5",
    note: "已确认脚本，等待初稿。",
  },
  {
    creator: "Kira Live",
    creatorId: "@kiralive_stream",
    avatar: assets.creatorAvatarPending,
    platform: "Twitch",
    fans: "58.20万",
    contentTags: ["运动", "直播"],
    audienceRegion: { code: "US", name: "美国" },
    audienceGender: "男性 63.4%",
    audienceAge: "18-30 岁",
    recentVideo: "夏季运动装备测评",
    avgViews: "18.4万",
    campaign: "2026春季新品出海推广",
    type: "曝光",
    settlement: "按曝光量区间现金结算",
    price: "200",
    status: "已发布",
    statusClass: "published",
    progress: "效果追踪",
    due: "2026-6-1",
    publishTime: "2026-6-1 19:00:03",
    settleAmount: "$180",
    tracking: "曝光 186K · 点击 2.3K",
    note: "数据已回传，待结算确认。",
  },
  {
    creator: "Luna Trend",
    creatorId: "@luna.trend_daily",
    avatar: assets.creatorAvatarPending,
    platform: "TikTok",
    fans: "289.40万",
    contentTags: ["美妆", "开箱", "生活方式"],
    audienceRegion: { code: "US", name: "美国" },
    audienceGender: "女性 88.3%",
    audienceAge: "18-24 岁",
    recentVideo: "夏季氛围感妆容分享",
    avgViews: "68.5万",
    campaign: "MINISO 夏季新品内容合作",
    campaignInfo: {
      name: "MINISO 夏季新品内容合作",
      product: "香氛与收纳系列",
      platform: "TikTok",
      region: "美国、日本、英国",
      budget: "$2,000",
      deadline: "2026-6-18",
      requirement: "美妆 / 生活方式达人优先，粉丝数≥20万",
    },
    type: "视频",
    settlement: "固定价",
    price: "120",
    status: "已接单待确认",
    statusClass: "pending",
    progress: "脚本待确认",
    due: "2026-6-18",
    acceptTime: "2026-6-8 10:13:22",
    note: "已上传脚本，等待品牌确认。",
  },
  {
    creator: "Retail Spark",
    creatorId: "@retail_spark",
    avatar: assets.creatorAvatarPending,
    platform: "YouTube",
    fans: "92.30万",
    contentTags: ["购物", "零售", "探店"],
    audienceRegion: { code: "JP", name: "日本" },
    audienceGender: "女性 74.2%",
    audienceAge: "18-30 岁",
    recentVideo: "百元以内居家好物推荐",
    avgViews: "24.7万",
    campaign: "电商广告-小天鹅",
    campaignInfo: {
      name: "电商广告-小天鹅",
      product: "小天鹅家电",
      platform: "YouTube",
      region: "日本、英国、德国",
      budget: "$1,600",
      deadline: "2026-6-16",
      requirement: "购物与零售内容达人优先",
    },
    type: "视频",
    settlement: "固定价",
    price: "150",
    status: "已接单待确认",
    statusClass: "pending",
    progress: "资料待确认",
    due: "2026-6-16",
    acceptTime: "2026-6-8 18:42:05",
    note: "已确认报价，等待投放资料。",
  },
  {
    creator: "Aiden Motion",
    creatorId: "@aidenmotion.fit",
    avatar: assets.creatorAvatarPending,
    platform: "TikTok",
    fans: "136.80万",
    contentTags: ["运动户外", "健身", "穿搭"],
    audienceRegion: { code: "DE", name: "德国" },
    audienceGender: "男性 57.4%",
    audienceAge: "18-30 岁",
    recentVideo: "一周训练计划 vlog",
    avgViews: "31.9万",
    campaign: "2026春季新品出海推广",
    campaignInfo: {
      name: "2026春季新品出海推广",
      product: "春季运动系列",
      platform: "TikTok",
      region: "德国、英国、美国",
      budget: "$999",
      deadline: "2026-6-14",
      requirement: "运动户外创作者优先",
    },
    type: "视频",
    settlement: "固定价",
    price: "110",
    status: "已接单待确认",
    statusClass: "pending",
    progress: "合同待确认",
    due: "2026-6-14",
    acceptTime: "2026-6-9 09:01:18",
    note: "等待合同回签。",
  },
  {
    creator: "Pixel Hero",
    creatorId: "@pixelhero.games",
    avatar: assets.creatorAvatarPending,
    platform: "TikTok",
    fans: "214.50万",
    contentTags: ["游戏", "攻略", "测评"],
    audienceRegion: { code: "UK", name: "英国" },
    audienceGender: "男性 72.1%",
    audienceAge: "18-24 岁",
    recentVideo: "新游首日体验",
    avgViews: "56.2万",
    campaign: "全境封锁-全球活动",
    type: "视频",
    settlement: "固定价",
    price: "180",
    status: "进行中",
    statusClass: "running",
    progress: "初稿待提交",
    due: "2026-6-12",
    note: "已确认脚本，等待初稿交付。",
  },
  {
    creator: "Momo Beauty Lab",
    creatorId: "@momo.beautylab",
    avatar: assets.creatorAvatarPending,
    platform: "YouTube",
    fans: "87.60万",
    contentTags: ["美妆", "护肤"],
    audienceRegion: { code: "TH", name: "泰国" },
    audienceGender: "女性 90.1%",
    audienceAge: "18-30 岁",
    recentVideo: "夏季护肤空瓶记",
    avgViews: "19.3万",
    campaign: "MINISO 夏季新品内容合作",
    type: "视频",
    settlement: "固定价",
    price: "95",
    status: "进行中",
    statusClass: "running",
    progress: "待发布",
    due: "2026-6-11",
    note: "终稿已确认，等待达人发布日期。",
  },
  {
    creator: "Tech Otto",
    creatorId: "@tech.otto.review",
    avatar: assets.creatorAvatarPending,
    platform: "YouTube",
    fans: "305.00万",
    contentTags: ["科技数码", "测评", "开箱"],
    audienceRegion: { code: "US", name: "美国" },
    audienceGender: "男性 68.7%",
    audienceAge: "25-34 岁",
    recentVideo: "三款耳机横评",
    avgViews: "72.6万",
    campaign: "新手游推广-幻影",
    type: "直播",
    settlement: "固定价",
    price: "260",
    status: "进行中",
    statusClass: "running",
    progress: "素材审核中",
    due: "2026-6-15",
    note: "已收齐素材包，品牌内部审核中。",
  },
  {
    creator: "Daily Miki",
    creatorId: "@dailymiki_home",
    avatar: assets.creatorAvatarPending,
    platform: "TikTok",
    fans: "142.10万",
    contentTags: ["生活方式", "家居", "收纳"],
    audienceRegion: { code: "MY", name: "马来西亚" },
    audienceGender: "女性 76.8%",
    audienceAge: "18-30 岁",
    recentVideo: "租房收纳技巧合集",
    avgViews: "28.2万",
    campaign: "MINISO 夏季新品内容合作",
    type: "视频",
    settlement: "固定价",
    price: "88",
    status: "已发布",
    statusClass: "published",
    progress: "效果追踪",
    due: "2026-6-2",
    publishTime: "2026-6-2 20:18:42",
    settleAmount: "$88",
    tracking: "曝光 94K · 点击 1.1K",
    note: "内容表现稳定，预计本周结算。",
  },
  {
    creator: "Kenji Shopping",
    creatorId: "@kenji.shopping",
    avatar: assets.creatorAvatarPending,
    platform: "YouTube",
    fans: "118.70万",
    contentTags: ["购物", "好物推荐"],
    audienceRegion: { code: "JP", name: "日本" },
    audienceGender: "女性 70.5%",
    audienceAge: "25-34 岁",
    recentVideo: "日系居家单品推荐",
    avgViews: "35.4万",
    campaign: "电商广告-小天鹅",
    type: "视频",
    settlement: "固定价",
    price: "140",
    status: "已发布",
    statusClass: "published",
    progress: "效果追踪",
    due: "2026-6-3",
    publishTime: "2026-6-3 11:06:27",
    settleAmount: "$140",
    tracking: "曝光 121K · 点击 1.8K",
    note: "评论反馈积极，建议二次合作。",
  },
  {
    creator: "Outdoor Jace",
    creatorId: "@outdoorjace",
    avatar: assets.creatorAvatarPending,
    platform: "Twitch",
    fans: "66.40万",
    contentTags: ["运动户外", "直播", "装备测评"],
    audienceRegion: { code: "DE", name: "德国" },
    audienceGender: "男性 61.8%",
    audienceAge: "18-30 岁",
    recentVideo: "露营装备直播测评",
    avgViews: "16.8万",
    campaign: "2026春季新品出海推广",
    type: "直播",
    settlement: "按曝光量区间现金结算",
    price: "220",
    status: "已发布",
    statusClass: "published",
    progress: "效果追踪",
    due: "2026-6-4",
    publishTime: "2026-6-4 17:33:10",
    settleAmount: "$205",
    tracking: "曝光 143K · 点击 2.0K",
    note: "直播表现优于预期，已进入复盘阶段。",
  },
];

const creatorCampaigns = [
  {
    name: "Title-任务名",
    tag: "游戏种草",
    requirement: "粉丝数≥50万",
    region: "EN / UK / CN",
    budget: "$9,999",
    platform: "TikTok / INS",
    deadline: "2024/09/09",
  },
  {
    name: "MINISO 夏季新品内容合作",
    tag: "购物与零售",
    requirement: "粉丝数≥20万",
    region: "UK",
    budget: "$2,000",
    platform: "TikTok",
    deadline: "2026/06/30",
  },
  {
    name: "全境封锁2-上线活动",
    tag: "直播",
    requirement: "游戏创作者",
    region: "US / JP",
    budget: "$1,200",
    platform: "YouTube",
    deadline: "2026/06/20",
  },
  {
    name: "Anker 充电配件新品推广",
    tag: "科技数码",
    requirement: "粉丝数≥30万",
    region: "US / UK / DE / FR / IT / ES",
    budget: "$2,800",
    platform: "TikTok / YouTube",
    deadline: "2026/07/08",
  },
  {
    name: "椰子水夏季饮品种草",
    tag: "食品饮料",
    requirement: "生活方式 / 美食达人",
    region: "SG / MY / TH / VN / ID / PH",
    budget: "$1,600",
    platform: "Instagram / TikTok",
    deadline: "2026/07/12",
  },
];

const invitations = [
  {
    task: "全境封锁-全球活动",
    type: "短视频",
    settlement: "固定价",
    quote: "99",
    time: "2026-6-5 10:59:20",
    publish: "-",
    status: "待接单",
    statusClass: "pending",
  },
  {
    task: "全境封锁2-上线活动",
    type: "直播",
    settlement: "固定价",
    quote: "80",
    time: "2026-6-4 10:59:20",
    publish: "-",
    status: "已合作",
    statusClass: "running",
  },
];

const projectRows = [
  {
    task: "全境封锁-全球活动",
    type: "短视频",
    settlement: "固定价",
    quote: "99",
    start: "2026-6-5 10:59:20",
    progress: "待提交",
    status: "合作中",
    statusClass: "running",
    timeline: [
      { time: "2026-06-05 10:59", title: "任务开始合作", detail: "达人已确认合作，等待首次提交产物。", result: "进行中" },
      { time: "2026-06-06 18:20", title: "广告主补充要求", detail: "补充了开场口播与产品露出要求。", result: "待提交产物" },
    ],
    finalStatus: "待提交产物",
  },
  {
    task: "全境封锁2-上线活动",
    type: "直播",
    settlement: "固定价",
    quote: "80",
    start: "2026-6-4 10:59:20",
    progress: "待平台审核",
    status: "合作中",
    statusClass: "pending",
    timeline: [
      { time: "2026-06-04 10:59", title: "任务开始合作", detail: "达人接单成功，进入直播素材准备阶段。", result: "进行中" },
      { time: "2026-06-05 13:42", title: "达人提交产物", detail: "已提交直播脚本与封面物料。", result: "待平台审核" },
      { time: "2026-06-05 16:10", title: "平台审核中", detail: "平台正在审核素材规范与版权信息。", result: "审核中" },
    ],
    finalStatus: "待平台审核",
  },
  {
    task: "MINISO 夏季新品内容合作",
    type: "短视频",
    settlement: "固定价",
    quote: "99",
    start: "2026-6-2 10:59:20",
    progress: "审核被拒",
    status: "合作中",
    statusClass: "rejected",
    rejectReason:
      "内容露出时长不足：需在前 10 秒清晰展示产品并口播核心卖点；同时检测到背景音乐存在版权风险。请按规范修改后重新提交。",
    timeline: [
      { time: "2026-06-02 10:59", title: "任务开始合作", detail: "达人确认合作并接收广告主脚本要求。", result: "进行中" },
      { time: "2026-06-03 15:08", title: "达人提交产物", detail: "提交第一版短视频与说明文档。", result: "待平台审核" },
      { time: "2026-06-03 18:40", title: "平台审核完成", detail: "平台审核通过，转交广告主审核。", result: "平台审核通过" },
      { time: "2026-06-04 11:25", title: "广告主审核完成", detail: "广告主反馈产品露出不足且音乐存在版权风险。", result: "广告主审核拒绝" },
    ],
    finalStatus: "审核被拒",
  },
  {
    task: "小米无线蓝牙耳机",
    type: "短视频",
    settlement: "固定价",
    quote: "120",
    start: "2026-6-1 10:59:20",
    progress: "已完成发布",
    status: "已完成",
    statusClass: "done",
    timeline: [
      { time: "2026-06-01 10:59", title: "任务开始合作", detail: "达人确认合作，进入创作排期。", result: "进行中" },
      { time: "2026-06-02 09:15", title: "达人提交产物", detail: "提交视频初稿与发布说明。", result: "待平台审核" },
      { time: "2026-06-02 12:00", title: "平台审核完成", detail: "平台审核通过，内容符合发布规范。", result: "平台审核通过" },
      { time: "2026-06-02 17:30", title: "广告主审核完成", detail: "广告主确认内容可发布。", result: "广告主审核通过" },
      { time: "2026-06-03 20:10", title: "最终发布完成", detail: "内容已按计划发布，数据开始回流。", result: "已完成发布" },
    ],
    finalStatus: "已完成发布",
  },
];

const pageRoot = document.getElementById("pageRoot");
const navList = document.getElementById("navList");
const modalRoot = document.getElementById("modalRoot");
const toastRoot = document.getElementById("toastRoot");
const globalSearch = document.getElementById("globalSearch");

function renderTopbar() {
  const actions = document.querySelector(".topbar-actions");
  if (!actions) return;

  const langFlag = state.language === "en" ? assets.flagEN : assets.flagCN;
  const langLabel = state.language === "en" ? "English" : "中文";

  actions.innerHTML = `
    <div class="topbar-dropdown ${state.topbarMenu.languageOpen ? "open" : ""}" data-dropdown-scope="language">
      <button class="ghost-button dropdown-trigger" data-action="toggle-language-menu" aria-label="切换语言">
        <img class="flag-icon" src="${langFlag}" alt="" />
        <span>${langLabel}</span>
        <span class="caret" aria-hidden="true">▾</span>
      </button>
      <div class="dropdown-menu" data-dropdown="language">
        <button class="dropdown-item" data-action="set-language" data-lang="zh">
          <img class="flag-icon" src="${assets.flagCN}" alt="" /><span>中文</span>
        </button>
        <button class="dropdown-item" data-action="set-language" data-lang="en">
          <img class="flag-icon" src="${assets.flagEN}" alt="" /><span>English</span>
        </button>
      </div>
    </div>

    <button class="icon-button topbar-icon" data-action="toast" data-message="通知中心暂无新的系统提醒" aria-label="通知">🔔</button>

    <div class="topbar-dropdown ${state.topbarMenu.userOpen ? "open" : ""}" data-dropdown-scope="user">
      <button class="ghost-button dropdown-trigger" data-action="toggle-user-menu" aria-label="账号菜单">
        <span class="avatar">MA</span>
        <span class="user-name">meetin. admin</span>
        <span class="caret" aria-hidden="true">▾</span>
      </button>
      <div class="dropdown-menu" data-dropdown="user">
        <button class="dropdown-item danger" data-action="logout">退出登录</button>
      </div>
    </div>
  `;
}

function isCreatorPage(page) {
  return creatorNav.some(([id]) => id === page) || ["taskDetail", "applications"].includes(page);
}

function getActiveNav() {
  return state.role === "brand" ? brandNav : creatorNav;
}

function go(page) {
  window.location.hash = page;
}

function setRole(role) {
  state.role = role;
  document.querySelectorAll(".role-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.role === role);
  });
  const first = role === "brand" ? "promotions" : "opportunityHall";
  go(first);
}

function pageTitle(page = state.page) {
  return navLabels[page] || "Meetinfluencer";
}

function renderNav() {
  navList.innerHTML = getActiveNav()
    .map(
      ([id, label, icon, level]) => `
        <button class="nav-item ${level === "child" ? "child" : ""} ${state.page === id ? "active" : ""}" data-nav="${id}">
          <span class="nav-icon">${icon}</span>
          <span>${label}</span>
        </button>
      `,
    )
    .join("");
}

function renderShellState() {
  state.role = isCreatorPage(state.page) ? "creator" : "brand";
  document.querySelectorAll(".role-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.role === state.role);
  });
  renderNav();
}

function render() {
  renderShellState();
  renderTopbar();
  const renderer = pages[state.page] || pages.promotions;
  pageRoot.innerHTML = renderer();
}

function pageHeader(_eyebrow, title, _subcopy, actions = "") {
  return `
    <div class="page-head">
      <div>
        <h1>${title}</h1>
      </div>
      <div class="actions">${actions}</div>
    </div>
  `;
}

function metrics(items) {
  return `
    <div class="grid metrics">
      ${items
        .map(
          (item) => `
          <div class="metric-card">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
            <small>${item.delta}</small>
          </div>
        `,
        )
        .join("")}
    </div>
  `;
}

function status(label, cls) {
  return `<span class="status ${cls}">${label}</span>`;
}

function normalizeDateFilter(dateValue) {
  if (!dateValue) return "";
  const [year, month, day] = dateValue.split("-");
  return `${year}-${Number(month)}-${Number(day)}`;
}

function parseCompactNumber(value) {
  if (value === null || value === undefined) return 0;
  const str = String(value).trim();
  if (!str) return 0;
  const cleaned = str.replace(/,/g, "");
  const num = parseFloat(cleaned);
  if (Number.isNaN(num)) return 0;
  if (cleaned.includes("万")) return num * 10000;
  if (/k/i.test(cleaned)) return num * 1000;
  if (/m/i.test(cleaned)) return num * 1000000;
  return num;
}

function parseMoneyUSD(value) {
  if (!value) return 0;
  return parseCompactNumber(String(value).replace(/\$/g, ""));
}

function parsePercent(value) {
  if (!value) return 0;
  const n = parseFloat(String(value).replace("%", ""));
  return Number.isNaN(n) ? 0 : n;
}

function countryCodeFromName(name) {
  const map = {
    美国: "US",
    日本: "JP",
    韩国: "KR",
    印尼: "ID",
    泰国: "TH",
    越南: "VN",
    马来西亚: "MY",
    英国: "UK",
    德国: "DE",
  };
  return map[name] || "";
}

function filterCreators(list) {
  const f = state.talentSearchFilters;
  const keyword = f.keyword.trim().toLowerCase();
  const regionCode = f.region === "全部" ? "" : countryCodeFromName(f.region);
  const follower = (row) => parseCompactNumber(row.fans);
  const recent = (row) => parseCompactNumber(row.recent);
  const price = (row) => parseMoneyUSD(row.price);
  const engagement = (row) => parsePercent(row.engagement);

  return list
    .filter((row) => !keyword || row.name.toLowerCase().includes(keyword))
    .filter((row) => f.platform === "全部" || row.platform === f.platform)
    .filter((row) => !regionCode || String(row.country || "").includes(regionCode))
    .filter((row) => f.category === "全部" || row.category === f.category)
    .filter((row) => f.contract === "全部" || row.contract === f.contract)
    .filter((row) => {
      if (f.followerCount === "全部") return true;
      const n = follower(row);
      if (f.followerCount === "0-10万") return n >= 0 && n < 100000;
      if (f.followerCount === "10-50万") return n >= 100000 && n < 500000;
      if (f.followerCount === "50-200万") return n >= 500000 && n < 2000000;
      if (f.followerCount === "200万+") return n >= 2000000;
      return true;
    })
    .filter((row) => {
      if (f.followerGender === "全部") return true;
      if (f.followerGender === "女性为主") return String(row.gender || "").includes("女性");
      if (f.followerGender === "男性为主") return String(row.gender || "").includes("男性");
      return true;
    })
    .filter((row) => {
      if (f.followerAge === "全部") return true;
      if (f.followerAge === "16-24") return String(row.age || "").includes("16") || String(row.age || "").includes("25");
      if (f.followerAge === "18-30") return String(row.age || "") === "18-30";
      if (f.followerAge === "30+") return String(row.age || "").includes("30");
      return true;
    })
    .filter((row) => {
      if (f.recent28 === "全部") return true;
      const n = recent(row);
      if (f.recent28 === ">500") return n > 500;
      if (f.recent28 === ">1000") return n > 1000;
      if (f.recent28 === ">1万") return n > 10000;
      return true;
    })
    .filter((row) => {
      if (f.priceRange === "全部") return true;
      const n = price(row);
      if (f.priceRange === "$0-500") return n >= 0 && n < 500;
      if (f.priceRange === "$500-1K") return n >= 500 && n < 1000;
      if (f.priceRange === "$1K-3K") return n >= 1000 && n < 3000;
      if (f.priceRange === "$3K-10K") return n >= 3000 && n < 10000;
      if (f.priceRange === "$10K+") return n >= 10000;
      return true;
    })
    .filter((row) => {
      if (f.engagement === "全部") return true;
      const n = engagement(row);
      if (f.engagement === ">1%") return n > 1;
      if (f.engagement === ">3%") return n > 3;
      if (f.engagement === ">5%") return n > 5;
      if (f.engagement === ">10%") return n > 10;
      return true;
    });
}

function getFilteredCampaigns() {
  const source = state.brandHasCampaigns ? campaigns : [];
  const q = state.query.trim().toLowerCase();
  const promotionName = state.promotionFilters.name.trim().toLowerCase();
  const promotionStatus = state.promotionFilters.status.trim();
  const promotionStartDate = normalizeDateFilter(state.promotionFilters.startDate);
  return source
    .filter((row) => !q || JSON.stringify(row).toLowerCase().includes(q))
    .filter((row) => !promotionName || row.name.toLowerCase().includes(promotionName))
    .filter((row) => !promotionStatus || row.status === promotionStatus)
    .filter((row) => !promotionStartDate || row.start.startsWith(promotionStartDate));
}

function hasActivePromotionFilters() {
  return Boolean(state.promotionFilters.name || state.promotionFilters.status || state.promotionFilters.startDate || state.query.trim());
}

function campaignRows(source = getFilteredCampaigns()) {
  return source
    .map(
      (row) => `
      <tr>
        <td>
          <div class="row-title">
            <img src="${assets.avatar}" alt="" />
            <span><strong>${row.name}</strong><small>${row.product}</small></span>
          </div>
        </td>
        <td>${row.region}</td>
        <td>${row.joined}</td>
        <td>${row.publishedCreators}</td>
        <td>${row.works}</td>
        <td class="money">${row.budget}</td>
        <td>${row.start}</td>
        <td>${status(row.status, row.statusClass)}</td>
        <td>
          <div class="actions">
            <button class="link-button" data-action="open-publish">编辑</button>
            <button class="link-button" data-action="modal-invite">邀请达人</button>
            <button class="link-button" data-nav="taskReview">查看详情</button>
            <button class="link-button" data-action="toast" data-message="已将 ${row.name} 移入删除确认队列">删除</button>
          </div>
        </td>
      </tr>
    `,
    )
    .join("");
}

function promotionEmptyState() {
  return `
    <div class="promotion-empty-state">
      <div class="promotion-empty-hero">
        <div class="promotion-empty-icon" aria-hidden="true">发</div>
        <div class="promotion-empty-copy">
          <p class="promotion-empty-eyebrow">首次开始推广</p>
          <h3>先创建你的第一个推广活动</h3>
          <p class="subcopy">发布任务后，你可以统一管理推广状态、预算、达人报名与作品交付。首次创建只需要填写推广信息、达人要求和预算设置。</p>
        </div>
        <div class="promotion-empty-cta">
          <button class="primary-button" data-action="open-publish">+ 创建活动</button>
        </div>
      </div>
      <div class="promotion-empty-benefits">
        <div class="promotion-benefit-card">
          <strong>1. 创建任务</strong>
          <p>填写产品、平台、国家地区、达人要求和预算，快速生成可报名的合作任务。</p>
        </div>
        <div class="promotion-benefit-card">
          <strong>2. 邀约达人</strong>
          <p>任务发布后开始接收报名，也可以主动邀请合适的达人参与推广。</p>
        </div>
        <div class="promotion-benefit-card">
          <strong>3. 跟踪交付</strong>
          <p>在活动管理中查看任务状态、参与达人、作品数量和预算使用进度。</p>
        </div>
      </div>
      <div class="promotion-empty-list">
        <span>支持多平台推广</span>
        <span>可按国家地区投放</span>
        <span>支持达人邀约与报名</span>
        <span>支持交付审核和进度跟踪</span>
      </div>
    </div>
  `;
}

function talentRows(source = creators) {
  const q = state.query.trim().toLowerCase();
  return source
    .filter((row) => !q || JSON.stringify(row).toLowerCase().includes(q))
    .map(
      (row) => `
      <tr>
        <td>
          <div class="row-title">
            <img src="${row.avatar || assets.creatorPreview}" alt="" />
            <span><strong>${row.name}</strong><small>${row.platform} · ${row.category}</small></span>
          </div>
        </td>
        <td>${row.gender}</td>
        <td>${row.fans}</td>
        <td>${row.age}</td>
        <td>${row.recent}</td>
        <td>${row.avgViews}</td>
        <td>${row.country}</td>
        <td>${row.price || "-"}</td>
        <td>
          <div class="actions">
            <button class="link-button" data-action="drawer-creator" data-name="${row.name}">查看</button>
            <button class="link-button" data-action="modal-invite">邀请</button>
          </div>
        </td>
      </tr>
    `,
    )
    .join("");
}

function collaborationRows() {
  const activeTab = state.tabs.collaborators;
  const visible = applyCollaboratorFilters(
    collaborations.filter((row) => {
      if (activeTab === "pending") return row.status.includes("待确认") && !isConfirmedCollaboration(row);
      if (activeTab === "active") return row.status === "进行中" || isConfirmedCollaboration(row);
      if (activeTab === "published") return row.status === "已发布";
      return true;
    }),
  );
  return visible
    .map(
      (row) =>
        activeTab === "pending"
          ? `
            <tr>
              <td>
                ${creatorInfoCell(row, true)}
              </td>
              <td>${row.fans || "-"}</td>
              <td>${row.contentTags ? `<div class="tag-nowrap">${simpleChips(row.contentTags)}</div>` : "-"}</td>
              <td>${regionBadge(row.audienceRegion)}</td>
              <td>${row.audienceGender || "-"}</td>
              <td>${row.audienceAge || "-"}</td>
              <td>${videoPlaceholder(row.recentVideo)}</td>
              <td>${row.avgViews || "-"}</td>
              <td><button class="link-button" data-action="modal-campaign-info" data-campaign="${encodeURIComponent(row.campaign)}"> ${row.campaign}</button></td>
              <td>${row.acceptTime || "-"}</td>
              <td>${row.settlement}</td>
              <td class="money">${row.price}</td>
              <td>${status(row.status, row.statusClass)}</td>
              <td>
                <div class="actions">
                  <button class="link-button" data-action="confirm-collaboration" data-collab-key="${encodeURIComponent(collaboratorKey(row))}" data-creator="${row.creator}">确认</button>
                  <button class="link-button" data-action="toast" data-message="已拒绝 ${row.creator} 的合作">拒绝</button>
                </div>
              </td>
            </tr>
          `
          :
          activeTab === "active"
            ? `
              <tr>
                <td>${creatorInfoCell(row, true)}</td>
                <td><button class="link-button" data-action="modal-campaign-info" data-campaign="${encodeURIComponent(row.campaign)}">${row.campaign}</button></td>
                <td>${row.type}</td>
                <td>${row.settlement}</td>
                <td>${row.due}</td>
                <td>${row.progress}</td>
                <td>${row.note || "-"}</td>
                <td>
                  <div class="actions">
                    <button class="link-button" data-action="modal-review">要求修改</button>
                    <button class="link-button" data-action="drawer-delivery">查看详情</button>
                  </div>
                </td>
              </tr>
            `
            : `
              <tr>
                <td>${creatorInfoCell(row, true)}</td>
                <td><button class="link-button" data-action="modal-campaign-info" data-campaign="${encodeURIComponent(row.campaign)}">${row.campaign}</button></td>
                <td>${row.type}</td>
                <td>${row.settlement}</td>
                <td>${row.progress}</td>
                <td>${row.publishTime || "-"}</td>
                <td class="money">${row.settleAmount || "-"}</td>
                <td>${row.note || "-"}</td>
                <td>${row.tracking || "-"}</td>
                <td>
                  <div class="actions">
                    <button class="link-button" data-action="drawer-delivery">查看详情</button>
                  </div>
                </td>
              </tr>
            `,
    )
    .join("");
}

function applicantRows() {
  return creators
    .map(
      (row) => `
      <tr>
        <td>
          <div class="row-title">
            <img src="${row.avatar || assets.creatorPreview}" alt="" />
            <span><strong>${row.name}</strong><small>${row.platform} · ${row.category}</small></span>
          </div>
        </td>
        <td>${row.gender}</td>
        <td>${row.fans}</td>
        <td>${row.age}</td>
        <td>${row.avgViews}</td>
        <td>显示达人报名信息..</td>
        <td>${status("申请报名", "pending")}</td>
        <td>
          <div class="actions">
            <button class="link-button" data-action="toast" data-message="已确认 ${row.name} 的报名">确认</button>
            <button class="link-button" data-action="toast" data-message="已拒绝 ${row.name} 的报名">拒绝</button>
            <button class="link-button" data-action="drawer-creator" data-name="${row.name}">查看</button>
          </div>
        </td>
      </tr>
    `,
    )
    .join("");
}

function deliveryRowsForReview() {
  return collaborations
    .map(
      (row) => `
      <tr>
        <td>${creatorInfoCell(row, true)}</td>
        <td>${row.type}</td>
        <td>${row.progress}</td>
        <td>${row.due}</td>
        <td>${row.status === "已发布" ? "2026-6-1 19:00:03" : "-"}</td>
        <td>${status(row.status, row.statusClass)}</td>
        <td>
          <div class="actions">
            <button class="link-button" data-action="modal-review">要求修改</button>
            <button class="link-button" data-action="drawer-delivery">查看详情</button>
            <button class="link-button" data-action="toast" data-message="已完成发布确认">确认内容</button>
          </div>
        </td>
      </tr>
    `,
    )
    .join("");
}

function applicationRows() {
  return `
    <tr>
      <td><strong>任务标题</strong><br /><span class="muted">报名账号 · Mika Studio</span></td>
      <td>当时填写的报名理由</td>
      <td>${status("等待平台审核", "pending")}</td>
      <td>-</td>
      <td>-</td>
      <td><button class="link-button" data-nav="taskDetail">查看任务</button></td>
    </tr>
  `;
}

function invitationRows() {
  const tab = state.tabs.invitations;
  const visible = invitations.filter((row) => {
    if (tab === "pending") return row.status === "待接单";
    if (tab === "accepted") return row.status === "已合作";
    return true;
  });
  return visible
    .map(
      (row) => `
      <tr>
        <td><strong>${row.task}</strong><br /><span class="muted">${row.time}</span></td>
        <td>${row.type}</td>
        <td>${row.settlement}</td>
        <td class="money">${row.quote}</td>
        <td>${row.publish}</td>
        <td>${status(row.status, row.statusClass)}</td>
        <td>
          <div class="actions">
            <button class="link-button" data-action="accept-invite">确认</button>
            <button class="link-button" data-action="reject-invite">拒绝</button>
          </div>
        </td>
      </tr>
    `,
    )
    .join("");
}

function projectTableRows() {
  const tab = state.tabs.myProjects;
  const visible = projectRows.filter((row) => (tab === "done" ? row.status === "已完成" : row.status !== "已完成"));
  return visible
    .map(
      (row) => `
      <tr>
        <td><button class="inline-link" data-action="open-task-detail"><strong>${row.task}</strong></button><br /><span class="muted">${row.start}</span></td>
        <td>${row.type}</td>
        <td>${row.settlement}</td>
        <td class="money">${row.quote}</td>
        <td>
          <div class="progress-cell">
            <span>${row.progress}</span>
            ${
              row.progress === "审核被拒"
                ? `<button class="inline-link" data-action="modal-reject-reason" data-task="${encodeURIComponent(
                    row.task,
                  )}" data-reason="${encodeURIComponent(row.rejectReason || "暂无被拒原因")}">查看详情</button>`
                : ""
            }
          </div>
        </td>
        <td>${status(row.status, row.statusClass)}</td>
        <td>
          <div class="actions">
            ${row.status === "已完成" ? "" : `<button class="link-button" data-action="modal-upload">提交产物</button>`}
            <button class="link-button" data-action="drawer-project-progress" data-task="${encodeURIComponent(row.task)}">查看详情</button>
          </div>
        </td>
      </tr>
    `,
    )
    .join("");
}

function renderPromotions() {
  const filteredCampaigns = getFilteredCampaigns();
  const showOnboardingEmpty = !state.brandHasCampaigns;
  const showFilteredEmpty = !showOnboardingEmpty && filteredCampaigns.length === 0;
  return `
    ${pageHeader(
      "广告主工作台",
      "活动管理",
      showOnboardingEmpty ? "完成首次任务创建后，即可开始管理活动、达人报名和交付进度。" : "集中查看活动、预算、达人参与和发布状态。",
      showOnboardingEmpty ? "" : `<button class="primary-button" data-action="open-publish">+ 新建活动</button>`,
    )}
    ${
      showOnboardingEmpty
        ? metrics([
            { label: "进行中活动", value: "0", delta: "创建后开始统计" },
            { label: "已参加达人", value: "0", delta: "发布任务后可查看" },
            { label: "已发布作品", value: "0", delta: "交付后自动汇总" },
            { label: "总预算", value: "$0", delta: "创建任务后累计" },
          ])
        : metrics([
            { label: "进行中活动", value: "12", delta: "+18% 本周" },
            { label: "已参加达人", value: "64", delta: "+9 人" },
            { label: "已发布作品", value: "28", delta: "+6 条" },
            { label: "总预算", value: "$18.6K", delta: "利用率 72%" },
          ])
    }
    <div style="margin-top:16px">
      <div class="table-card">
        <div class="table-head">
          <h2>${showOnboardingEmpty ? "开始你的第一次活动" : "活动列表"}</h2>
          ${
            showOnboardingEmpty
              ? `<span class="muted">任务创建完成后，会展示在这里</span>`
              : `
                <div class="filter-bar" style="margin:0">
                  <input
                    class="input"
                    type="search"
                    placeholder="搜索活动名称"
                    value="${state.promotionFilters.name}"
                    data-promotion-filter="name"
                  />
                  <select class="select" data-promotion-filter="status">
                    <option value="">活动状态</option>
                    <option value="进行中" ${state.promotionFilters.status === "进行中" ? "selected" : ""}>进行中</option>
                    <option value="草稿" ${state.promotionFilters.status === "草稿" ? "selected" : ""}>草稿</option>
                    <option value="已到期" ${state.promotionFilters.status === "已到期" ? "selected" : ""}>已到期</option>
                  </select>
                  <input
                    class="input"
                    type="date"
                    value="${state.promotionFilters.startDate}"
                    data-promotion-filter="startDate"
                    aria-label="推广发起时间"
                  />
                  <button class="ghost-button" data-action="reset-promotion-filters">重置</button>
                </div>
              `
          }
        </div>
        ${
          showOnboardingEmpty
            ? promotionEmptyState()
            : `
              <div class="table-wrap sticky-cols">
                <table class="campaign-table">
                  <thead>
                    <tr>
                      <th>活动名称</th><th>活动地区</th><th>已参加达人数</th><th>已发布达人数</th><th>作品数</th><th>预算</th><th>活动发起时间</th><th>状态</th><th>操作</th>
                    </tr>
                  </thead>
                  <tbody>${showFilteredEmpty ? emptyRow(9) : campaignRows(filteredCampaigns)}</tbody>
                </table>
              </div>
            `
        }
      </div>
    </div>
  `;
}

function renderPublishTask() {
  return `
    ${pageHeader(
      "任务创建",
      "发布任务",
      "按推广信息、达人要求、投放预算三步创建完整推广任务。",
      `<button class="primary-button" data-action="open-publish">打开发布弹窗</button>`,
    )}
    <div class="panel">
      ${publishForm(false)}
      ${publishControls(false)}
    </div>
  `;
}

function publishForm(inModal = true) {
  const steps = ["推广信息", "达人要求", "投放预算"];
  const step = state.publishStep;
  const draft = state.publishDraft;
  const publishPlatforms = [
    { name: "TikTok", logo: assets.tiktokLogo },
    { name: "YouTube", logo: assets.youtubeLogo },
    { name: "Twitch", logo: assets.twitchLogo },
    { name: "Instagram", logo: assets.instagramLogo },
  ];
  const publishAreas = ["东南亚", "大洋洲", "独联体", "欧洲", "非洲", "中东", "东亚", "南亚", "北美"];

  const chipsView = (items, removeAction, limit = 8) => {
    const visible = items.slice(0, limit);
    const hidden = Math.max(0, items.length - visible.length);
    return `
      <div class="ms-chips">
        ${visible
          .map(
            (x) => `
            <span class="ms-chip">
              <span>${x}</span>
              <span class="ms-chip-x" role="button" tabindex="0" data-action="${removeAction}" data-value="${encodeURIComponent(x)}" aria-label="移除 ${x}">×</span>
            </span>
          `,
          )
          .join("")}
        ${hidden ? `<span class="ms-more">+${hidden}</span>` : ""}
      </div>
    `;
  };
  const stepper = `
    <div class="stepper">
      ${steps
        .map(
          (name, index) =>
            `<div class="step ${index === step ? "active" : ""} ${index < step ? "completed" : ""}">${index + 1}. ${name}</div>`,
        )
        .join("")}
    </div>
  `;

  const body =
    step === 0
      ? `
        <div class="form-grid">
          ${field("推广项目名称", `<input class="input" placeholder="请输入推广项目名称" value="MINISO 夏季新品内容合作" />`, true)}
          ${field(
            "推广平台",
            `
            <div class="multi-select-input ${draft.platformMenuOpen ? "open" : ""}" data-ms-scope="publish-platform">
              <div class="ms-trigger" role="button" tabindex="0" data-action="toggle-publish-platform-menu" aria-expanded="${draft.platformMenuOpen ? "true" : "false"}">
                ${
                  draft.platforms.length
                    ? chipsView(draft.platforms, "remove-publish-platform", 6)
                    : `<span class="ms-placeholder">请选择推广平台</span>`
                }
                <span class="ms-caret" aria-hidden="true">▾</span>
              </div>
              <div class="dropdown-menu ms-menu">
                ${publishPlatforms
                  .map(
                    (p) => `
                    <label class="dropdown-check option-with-icon">
                      <input type="checkbox" ${draft.platforms.includes(p.name) ? "checked" : ""} data-action="toggle-publish-platform" data-value="${p.name}" />
                      <img class="option-icon" src="${p.logo}" alt="" />
                      <span>${p.name}</span>
                    </label>
                  `,
                  )
                  .join("")}
              </div>
            </div>
          `,
            true,
          )}
          ${field(
            "推广地区",
            `
            <div class="multi-select-input ${draft.areaMenuOpen ? "open" : ""}" data-ms-scope="publish-area">
              <div class="ms-trigger" role="button" tabindex="0" data-action="toggle-publish-area-menu" aria-expanded="${draft.areaMenuOpen ? "true" : "false"}">
                ${
                  draft.areas.length
                    ? chipsView(draft.areas, "remove-publish-area", 6)
                    : `<span class="ms-placeholder">请选择推广地区</span>`
                }
                <span class="ms-caret" aria-hidden="true">▾</span>
              </div>
              <div class="dropdown-menu ms-menu">
                ${publishAreas
                  .map(
                    (a) => `
                    <label class="dropdown-check">
                      <input type="checkbox" ${draft.areas.includes(a) ? "checked" : ""} data-action="toggle-publish-area" data-value="${encodeURIComponent(a)}" />
                      <span>${a}</span>
                    </label>
                  `,
                  )
                  .join("")}
              </div>
            </div>
          `,
            true,
          )}
          ${field("推广产品", `<input class="input" placeholder="请输入产品名称" value="MINISO 香氛系列" />`, true)}
          ${field("产品链接", `<input class="input" placeholder="请输入产品链接" value="https://www.miniso.com/" />`)}
          ${field("产品描述", `<textarea class="textarea" placeholder="请输入产品描述">新品香氛系列，适合生活方式与美妆垂类内容。</textarea>`, false, "full")}
          ${field("产品图片 / 附件", `<button class="ghost-button" data-action="toast" data-message="文件已加入上传队列">+ 上传文件</button><small class="muted">支持 PDF、PNG、JPG、JPEG，10M 以内</small>`, false, "full")}
        </div>
      `
      : step === 1
        ? `
          <div class="form-grid">
            ${field("达人粉丝数量", `<select class="select"><option>请选择作者粉丝数量</option><option>>200K</option><option>50万以上</option><option>200万以上</option></select>`, true)}
            ${field("合作达人数量", `<input class="input" placeholder="请输入期望合作的创作者数量" value="12 位" />`, true)}
            ${field("达人类型要求", `<select class="select"><option>游戏</option><option>购物与零售</option><option>美妆</option><option>运动户外</option></select>`)}
            ${field("合作类型", `<div class="chips">${["全片", "插片", "直播", "社区post", "视频下方link", "评论置顶", "视频投流", "素材授权", "Shorts"].map((x, i) => `<button class="chip ${i < 2 ? "active" : ""}" data-action="toggle-chip">${x}</button>`).join("")}</div>`, false, "full")}
            ${field("内容要求", `<textarea class="textarea" placeholder="请填写内容要求">请简述内容需求。如有指定素材、文案或脚本，请提供链接或附件。</textarea>`, true, "full")}
            ${field("链接", `<input class="input" placeholder="请输入素材、脚本或参考内容链接" />`, false, "full")}
            ${field("附件", `<button class="ghost-button" data-action="toast" data-message="附件已加入上传队列">+ 上传附件</button><small class="muted">支持 PDF、PNG、JPG、JPEG，10M 以内</small>`, false, "full")}
          </div>
        `
        : `
          <div class="form-grid">
            ${field(
              "总预算",
              `<div class="money-single">
                <input class="input" placeholder="请输入平台预算" value="${draft.budgetTotal || ""}" data-publish-field="budgetTotal" />
                <span class="money-suffix">USD</span>
              </div>`,
              true,
            )}
            ${field(
              "达人单价",
              `<div class="money-range">
                <input class="input" placeholder="最低" value="${draft.unitPriceMin || ""}" data-publish-field="unitPriceMin" />
                <span class="money-range-sep">—</span>
                <input class="input" placeholder="最高" value="${draft.unitPriceMax || ""}" data-publish-field="unitPriceMax" />
                <span class="money-suffix">USD</span>
              </div>`,
              true,
            )}
            ${field("结算方式", `<select class="select"><option>固定价</option><option>固定CPM</option><option>按曝光量区间现金结算</option><option>虚拟道具</option></select>`, true)}
            ${field("结算周期", `<select class="select"><option>按7天实际曝光量结算</option><option>按3天实际曝光量结算</option><option>按14天实际曝光量结算</option></select>`)}
            ${field("达人报名时间", `<input class="input" value="2026-06-11 ~ 2026-06-20" />`)}
            ${field("项目截至日期", `<input class="input" value="2026-06-30" />`)}
            ${field("期望效果", `<select class="select"><option>曝光</option><option>点击</option><option>转化</option></select>`)}
            ${field("预估效果", `<input class="input" value="80K" />`)}
          </div>
        `;

  return `${stepper}${body}`;
}

function publishControls(inModal = true) {
  const step = state.publishStep;
  return `
    <div class="modal-foot modal-foot-split" ${inModal ? 'id="publishModalFoot"' : ""} style="${
      inModal ? "" : "padding-left:0;padding-right:0;padding-bottom:0"
    }">
      <div class="modal-foot-left">
        <button class="ghost-button" data-action="toast" data-message="草稿已保存">保存草稿</button>
      </div>
      <div class="modal-foot-right">
        ${step === 0 ? "" : `<button class="ghost-button" data-action="publish-prev">上一步</button>`}
        <button class="primary-button" data-action="${step === 2 ? "submit-publish" : "publish-next"}">${step === 2 ? "提交" : "下一步"}</button>
      </div>
    </div>
  `;
}

function field(label, control, required = false, extra = "") {
  return `
    <div class="field ${extra}">
      <label>${required ? `<span class="required">*</span> ` : ""}${label}</label>
      ${control}
    </div>
  `;
}

function renderTaskReview() {
  const tab = state.tabs.taskReview;
  return `
    ${pageHeader(
      "任务详情",
      "查看任务",
      "审核报名达人、追踪交付状态，并处理内容修改意见。",
      `<button class="secondary-button" data-nav="promotions">返回活动管理</button>`,
    )}
    <div class="grid two-col">
      <div class="panel hero-strip">
        <img src="${assets.strip}" alt="" />
        <div class="panel-content">
          <h2>XXXX任务详情</h2>
          <p class="subcopy">达人要求：≥200万粉丝 · 游戏 / 直播 · 预算固定价 $2000.00 USD。</p>
          <div class="mini-stats">
            <div class="mini-stat"><span>全部报名达人</span><strong>55</strong></div>
            <div class="mini-stat"><span>达人交付情况</span><strong>9</strong></div>
            <div class="mini-stat"><span>待审核内容</span><strong>3</strong></div>
          </div>
        </div>
      </div>
      <div class="panel">
        <h2>招募价格</h2>
        <p class="subcopy">结算方式：固定价；结算周期：以合作协议为准。</p>
        <div class="note-box" style="margin-top:12px">预算(固定价) $2000.00 USD · 合作类型：定制视频-60秒</div>
      </div>
    </div>
    <div class="table-card" style="margin-top:16px">
      <div class="table-head">
        <div class="tabs" style="margin:0">
          ${tabButton("taskReview", "applicants", "全部报名达人(55)")}
          ${tabButton("taskReview", "deliveries", "达人交付情况(9)")}
        </div>
        <button class="ghost-button" data-action="toast" data-message="筛选条件已更新">全部 / 进行中 / 已取消</button>
      </div>
      <div class="table-wrap">
        ${
          tab === "applicants"
            ? `<table><thead><tr><th>达人基本信息</th><th>受众性别</th><th>粉丝数</th><th>受众年龄</th><th>平均曝光量</th><th>报名理由</th><th>状态</th><th>操作</th></tr></thead><tbody>${applicantRows()}</tbody></table>`
            : `<table><thead><tr><th>达人基本信息</th><th>合作类型</th><th>交付状态</th><th>交付截至日期</th><th>预约发布日期</th><th>状态</th><th>操作</th></tr></thead><tbody>${deliveryRowsForReview()}</tbody></table>`
        }
      </div>
    </div>
  `;
}

function renderTalentManagement() {
  return `
    ${pageHeader(
      "达人管理",
      "达人管理",
      "原型中该页为空白，这里补齐为达人 CRM 概览入口，承接达人搜索与合作达人页面。",
      `<button class="primary-button" data-nav="talentSearch">查找达人</button>`,
    )}
    ${metrics([
      { label: "CRM 达人", value: "2,381", delta: "+126 本月" },
      { label: "已签约", value: "486", delta: "20.4%" },
      { label: "可邀约", value: "1,842", delta: "+7.6%" },
      { label: "平均互动率", value: "4.2%", delta: "+0.3%" },
    ])}
    <div class="grid two-col" style="margin-top:16px">
      <div class="table-card">
        <div class="table-head"><h2>近期达人池</h2><button class="secondary-button" data-nav="talentSearch">进入达人搜索</button></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>达人</th><th>分类</th><th>粉丝数</th><th>平均曝光量</th><th>互动率</th><th>状态</th><th>操作</th></tr></thead>
            <tbody>
              ${creators
                .map(
                  (row) => `<tr><td><strong>${row.name}</strong><br /><span class="muted">${row.platform}</span></td><td>${row.category}</td><td>${row.fans}</td><td>${row.avgViews}</td><td>${row.engagement}</td><td>${status("未签约", "pending")}</td><td><button class="link-button" data-action="modal-invite">邀请</button></td></tr>`,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <h2>CRM 管理</h2>
        <div class="timeline">
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>达人入库</strong><p>自动同步达人搜索页的邀请记录和报价区间。</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>合作沉淀</strong><p>已合作达人会进入商单合作达人池，保留交付表现。</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>二次邀约</strong><p>按平台、分类、国家、互动率快速筛选复用。</p></div></div>
        </div>
      </div>
    </div>
  `;
}

function renderCollaborators() {
  const activeTab = state.tabs.collaborators;
  const pendingCols = 14;
  const activeCols = 8;
  const publishedCols = 10;
  const platformOptions = ["YouTube", "TikTok", "Instagarm", "Twitch", "Twitter", "Facebook", "Others"];
  const selectedPlatforms = state.collaboratorFilters.platforms;
  const confirmedCount = state.confirmedCollaborators.length;
  return `
    ${pageHeader(
      "合作管理",
      "合作达人",
      "查看商单合作达人在待确认、进行中、已发布阶段的交付进度。",
      `<button class="primary-button" data-action="modal-invite">邀请达人</button>`,
    )}
    <div class="filter-bar sticky">
      <div class="select-search">
        <input
          class="input"
          type="search"
          placeholder="搜索推广活动名称"
          list="campaignOptions"
          value="${state.collaboratorFilters.campaign}"
          data-collab-filter="campaign"
        />
        <datalist id="campaignOptions">
          ${uniqueCampaignNames().map((name) => `<option value="${name}"></option>`).join("")}
        </datalist>
      </div>
      <input
        class="input"
        type="search"
        placeholder="搜索达人名称"
        value="${state.collaboratorFilters.creator}"
        data-collab-filter="creator"
      />
      <div class="multi-select ${state.collaboratorFilters.platformMenuOpen ? "open" : ""}">
        <button class="ghost-button" type="button" data-action="toggle-collab-platform-menu">
          平台：${selectedPlatforms.length ? selectedPlatforms.join("、") : "全部"}
          <span class="caret" aria-hidden="true">▾</span>
        </button>
        <div class="dropdown-menu" data-dropdown="collab-platforms">
          <label class="dropdown-check">
            <input type="checkbox" ${selectedPlatforms.length === 0 ? "checked" : ""} data-action="toggle-collab-platform-all" />
            <span>全部</span>
          </label>
          <div class="dropdown-divider"></div>
          ${platformOptions
            .map(
              (p) => `
              <label class="dropdown-check">
                <input type="checkbox" ${selectedPlatforms.includes(p) ? "checked" : ""} data-action="toggle-collab-platform" data-platform="${p}" />
                <span>${p}</span>
              </label>
            `,
            )
            .join("")}
          <div class="dropdown-divider"></div>
          <button class="dropdown-item" data-action="reset-collab-filters">清空筛选</button>
        </div>
      </div>
      <button class="ghost-button" data-action="reset-collab-filters">重置</button>
    </div>
    <div class="tabs">
      ${tabButton("collaborators", "pending", `待确认(${55 - confirmedCount})`)}
      ${tabButton("collaborators", "active", `进行中(${6 + confirmedCount})`)}
      ${tabButton("collaborators", "published", "已发布(9)")}
    </div>
    <div class="table-card">
      <div class="table-head">
        <h2>商单合作达人</h2>
      </div>
      <div class="table-wrap ${activeTab === "pending" || activeTab === "published" ? "sticky-cols" : ""}">
        <table class="${
          activeTab === "pending"
            ? "collab-pending-table"
            : activeTab === "active"
              ? "collab-active-table"
              : "collab-published-table"
        }">
          <thead>
            ${
              activeTab === "pending"
                ? `<tr><th>达人基本信息</th><th>粉丝数</th><th>内容标签</th><th>国家/地区</th><th>受众性别</th><th>受众年龄</th><th>最近发布视频</th><th>平均曝光量</th><th>所属任务</th><th>接单时间</th><th>结算方式</th><th>报价(USD)</th><th>状态</th><th>操作</th></tr>`
                : activeTab === "active"
                  ? `<tr><th>达人基本信息</th><th>所属任务</th><th>合作类型</th><th>结算方式</th><th>预计交付日期</th><th>交付进度</th><th>备注</th><th>操作</th></tr>`
                  : `<tr><th>达人基本信息</th><th>所属任务</th><th>合作类型</th><th>结算方式</th><th>交付进度</th><th>发布时间</th><th>结算金额</th><th>备注</th><th>效果追踪</th><th>操作</th></tr>`
            }
          </thead>
          <tbody>${
            collaborationRows() ||
            emptyRow(
              activeTab === "pending" ? pendingCols : activeTab === "active" ? activeCols : publishedCols,
            )
          }</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderTalentSearch() {
  const platforms = ["全部", "TikTok", "YouTube", "Twitch", "Instagram"];
  const regions = ["全部", "美国", "日本", "韩国", "印尼", "泰国", "越南", "马来西亚", "英国", "德国"];
  const categories = ["全部", "购物与零售", "游戏", "美妆", "运动户外", "理财与投资", "软件与应用", "食品饮料", "科技与数码"];
  const visibleCats = state.talentSearchFilters.expanded ? categories : categories.slice(0, 8);
  const filteredCreators = filterCreators(creators);
  return `
    ${pageHeader(
      "达人搜索",
      "达人搜索",
      "按达人分类、签约状态、平台与表现数据筛选创作者。",
      `<button class="secondary-button" data-nav="collaborators">合作达人</button>`,
    )}
    <div class="talent-search-fixed">
      <div class="talent-search-top">
        <div class="search-box-inline">
          <span aria-hidden="true">⌕</span>
          <input
            class="input search-input"
            type="search"
            placeholder="输入达人 UID、昵称或 HashTag 关键词搜索"
            value="${state.talentSearchFilters.keyword}"
            data-talent-filter="keyword"
          />
        </div>
        <button class="primary-button search-button" data-action="toast" data-message="已应用搜索条件">搜索</button>
      </div>

      <div class="panel talent-filter-panel">
        <div class="filter-row">
          <div class="filter-label">平台</div>
          <div class="filter-content">
            <div class="chips chips-nowrap">
              ${platforms
                .map(
                  (x) =>
                    `<button class="chip ${state.talentSearchFilters.platform === x ? "active" : ""}" data-action="set-talent-platform" data-platform="${x}">${x}</button>`,
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-label">国家/地区</div>
          <div class="filter-content">
            <div class="chips chips-nowrap">
              ${regions
                .map(
                  (x) =>
                    `<button class="chip ${state.talentSearchFilters.region === x ? "active" : ""}" data-action="set-talent-region" data-region="${x}">${x}</button>`,
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-label">粉丝信息：</div>
          <div class="filter-content filter-selects follower-info-selects">
            <select class="select" data-talent-filter="followerCount">
              ${["全部", "0-10万", "10-50万", "50-200万", "200万+"]
                .map((x) => `<option value="${x}" ${state.talentSearchFilters.followerCount === x ? "selected" : ""}>粉丝数：${x}</option>`)
                .join("")}
            </select>
            <select class="select" data-talent-filter="followerGender">
              ${["全部", "女性为主", "男性为主"]
                .map((x) => `<option value="${x}" ${state.talentSearchFilters.followerGender === x ? "selected" : ""}>粉丝性别：${x}</option>`)
                .join("")}
            </select>
            <select class="select" data-talent-filter="followerAge">
              ${["全部", "16-24", "18-30", "30+"]
                .map((x) => `<option value="${x}" ${state.talentSearchFilters.followerAge === x ? "selected" : ""}>粉丝年龄：${x}</option>`)
                .join("")}
            </select>
            <select class="select" data-talent-filter="recent28">
              ${["全部", ">500", ">1000", ">1万"]
                .map((x) => `<option value="${x}" ${state.talentSearchFilters.recent28 === x ? "selected" : ""}>近28天涨粉数：${x}</option>`)
                .join("")}
            </select>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-label">报价范围</div>
          <div class="filter-content">
            <div class="chips chips-nowrap">
              ${["全部", "$0-500", "$500-1K", "$1K-3K", "$3K-10K", "$10K+"]
                .map(
                  (x) =>
                    `<button class="chip ${state.talentSearchFilters.priceRange === x ? "active" : ""}" data-action="set-talent-price" data-price="${x}">${x}</button>`,
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-label">互动率</div>
          <div class="filter-content">
            <div class="chips chips-nowrap">
              ${["全部", ">1%", ">3%", ">5%", ">10%"]
                .map(
                  (x) =>
                    `<button class="chip ${state.talentSearchFilters.engagement === x ? "active" : ""}" data-action="set-talent-engagement" data-engagement="${x}">${x}</button>`,
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-label">达人分类</div>
          <div class="filter-content">
            <div class="chips chips-nowrap">
              ${visibleCats
                .map(
                  (x) =>
                    `<button class="chip ${state.talentSearchFilters.category === x ? "active" : ""}" data-action="set-talent-category" data-category="${x}">${x}</button>`,
                )
                .join("")}
            </div>
          </div>
          <button class="ghost-button filter-expand" data-action="toggle-talent-category-expand">
            ${state.talentSearchFilters.expanded ? "收起" : "展开"}
          </button>
        </div>
        <div class="filter-row">
          <div class="filter-label">达人筛选：</div>
          <div class="filter-content">
            <select class="select" data-talent-filter="contract">
              ${[
                { value: "全部", text: "签约状态" },
                { value: "已签约", text: "已签约" },
                { value: "未签约", text: "未签约" },
              ]
                .map((x) => `<option value="${x.value}" ${state.talentSearchFilters.contract === x.value ? "selected" : ""}>${x.text}</option>`)
                .join("")}
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="table-card talent-list-card">
      <div class="table-head"><h2>达人列表</h2><button class="primary-button" data-action="modal-invite">批量邀请</button></div>
      <div class="table-wrap talent-list-scroll">
        <table>
          <thead><tr><th>达人列表</th><th>受众性别</th><th>粉丝数</th><th>受众年龄</th><th>最近发布视频</th><th>平均曝光量</th><th>受众国家</th><th>报价</th><th>操作</th></tr></thead>
          <tbody>${talentRows(filteredCreators)}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAccount() {
  const tab = state.tabs.account;
  return `
    <div class="account-page">
    ${pageHeader(
      "设置中心",
      "账户管理",
      "维护企业信息、产品信息、联系人信息与账号安全设置。",
      `<button class="primary-button" data-action="save-account">保存</button>`,
    )}
    <div class="tabs">
      ${tabButton("account", "company", "企业信息")}
      ${tabButton("account", "product", "产品信息")}
      ${tabButton("account", "contact", "联系信息")}
      ${tabButton("account", "security", "账号信息")}
    </div>
    <div class="panel account-panel">${accountPanel(tab)}</div>
    </div>
  `;
}

function accountPanel(tab) {
  if (tab === "product") {
    return `
      <div class="section-row" style="margin-bottom:14px">
        <h2>产品信息</h2>
        <button class="secondary-button" data-action="modal-product">+ 添加产品</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>产品名称</th><th>产品链接</th><th>产品描述</th><th>产品图片</th><th>操作</th></tr></thead>
          <tbody>
            <tr>
              <td>MINISO 香氛系列</td>
              <td>https://td2.qq.com/main.shtml?wg_ad_from=shopbannerIntraCompanyCompetitionClassB</td>
              <td>面向生活方式内容创作者的新品推广。</td>
              <td><img src="${assets.avatar}" alt="" style="width:44px;height:44px;border-radius:8px" /></td>
              <td><button class="link-button" data-action="modal-product">修改</button> <button class="link-button" data-action="toast" data-message="产品删除确认已打开">删除</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
  if (tab === "contact") {
    return `<div class="form-grid">
      ${field("联系人姓名", `<input class="input" placeholder="请输入联系人姓名" value="Levy Li" />`, true)}
      ${field("职位", `<select class="select"><option>请选择职位</option><option>Marketing Manager</option><option>Brand Owner</option></select>`)}
      ${field("邮箱", `<input class="input" value="645644162@gmail.com" />`, true)}
      ${field(
        "手机号",
        `<div class="phone-field">
          <select class="select phone-code" aria-label="国家/地区区号">
            <option>中国 +86</option>
            <option>美国 +1</option>
            <option>英国 +44</option>
            <option>日本 +81</option>
            <option>韩国 +82</option>
            <option>新加坡 +65</option>
            <option>澳大利亚 +61</option>
            <option>加拿大 +1</option>
            <option>法国 +33</option>
            <option>德国 +49</option>
          </select>
          <input class="input phone-number" placeholder="请输入手机号" inputmode="tel" />
        </div>`,
      )}
    </div>`;
  }
  if (tab === "security") {
    return `<div class="form-grid">
      ${field("账号邮箱", `<input class="input" value="645644162@gmail.com" />`)}
      ${field("当前角色", `<input class="input" value="广告主管理员" />`)}
      <div class="field full"><button class="secondary-button" data-action="toast" data-message="重置密码邮件已发送">重置密码</button></div>
    </div>`;
  }
  return `<div class="form-grid">
    ${field("公司名称", `<input class="input" placeholder="请输入公司名称" value="Meetinfluencer Brand Team" />`, true)}
    ${field("国家地区", `<select class="select"><option>请选择国家地区</option><option>中国</option><option>美国</option><option>英国</option></select>`, true)}
    ${field("所属行业", `<select class="select"><option>请选择所属行业</option><option>游戏</option><option>购物与零售</option><option>美妆</option></select>`)}
    ${field("公司规模", `<select class="select"><option>请选择公司规模</option><option>&lt;15</option><option>15-50</option><option>50-100</option><option>100-500</option><option>500-2000</option><option>&gt;2000</option></select>`)}
  </div>`;
}

function opportunityFilters() {
  const filters = state.opportunityFilters;
  const platformLabel = filters.platforms.length ? `推广平台：${filters.platforms.join("、")}` : "推广平台：";
  const regionLabel = filters.region ? `推广国家/地区：${filters.region}` : "推广国家/地区：";
  const tagLabel = filters.tags.length ? `类型：${filters.tags.join("、")}` : "类型：";
  const followerLabel =
    filters.followerMin || filters.followerMax !== 1000000
      ? `粉丝量要求：${filters.followerMin.toLocaleString()} - ${filters.followerMax.toLocaleString()}`
      : "粉丝量要求：";
  const amountLabel =
    filters.amountMin || filters.amountMax !== 100000
      ? `金额范围：${filters.amountMin.toLocaleString()} - ${filters.amountMax.toLocaleString()}`
      : "金额范围：";
  return `
    <div class="opportunity-filter-panel">
      <div class="filter-control dropdown-filter">
        <button class="filter-trigger" data-action="toggle-opportunity-menu" data-menu="platform">
          <span>${platformLabel}</span><span class="chevron">⌄</span>
        </button>
        ${filters.platformMenuOpen ? opportunityMenu("platform", ["YouTube", "TikTok", "Instagram", "Twitch", "Twitter", "Facebook", "Others"], filters.platforms) : ""}
      </div>

      <div class="filter-control">
        <select class="filter-trigger native-select" data-filter-field="region" aria-label="推广国家/地区">
          <option value="">${regionLabel}</option>
          <option ${filters.region === "美国" ? "selected" : ""}>美国</option>
          <option ${filters.region === "英国" ? "selected" : ""}>英国</option>
          <option ${filters.region === "日本" ? "selected" : ""}>日本</option>
          <option ${filters.region === "中国" ? "selected" : ""}>中国</option>
          <option ${filters.region === "新加坡" ? "selected" : ""}>新加坡</option>
        </select>
      </div>

      <div class="filter-control dropdown-filter">
        <button class="filter-trigger" data-action="toggle-opportunity-menu" data-menu="tag">
          <span>${tagLabel}</span><span class="chevron">⌄</span>
        </button>
        ${filters.tagMenuOpen ? opportunityMenu("tag", ["游戏种草", "购物与零售", "美妆", "直播", "短视频", "软件与应用", "食品饮料"], filters.tags) : ""}
      </div>

      <div class="filter-control dropdown-filter follower-filter">
        <button class="filter-trigger" data-action="toggle-opportunity-menu" data-menu="follower">
          <span>${followerLabel}</span><span class="chevron">⌄</span>
        </button>
        ${filters.followerMenuOpen ? followerPopover() : ""}
      </div>

      <div class="filter-control amount-filter">
        <button class="filter-trigger" data-action="toggle-opportunity-menu" data-menu="amount">
          <span>${amountLabel}</span><span class="chevron">⌄</span>
        </button>
        ${filters.amountMenuOpen ? amountPopover() : ""}
      </div>

      <div class="filter-control date-filter">
        <div class="date-inputs">
          <span class="date-label">交付时间：</span>
          <input class="filter-input" type="date" value="${filters.deliveryStart}" data-filter-field="deliveryStart" aria-label="开始日期" />
          <span class="date-arrow">→</span>
          <input class="filter-input" type="date" value="${filters.deliveryEnd}" data-filter-field="deliveryEnd" aria-label="结束日期" />
        </div>
      </div>

      <div class="filter-actions">
        <button class="reset-filter-button" data-action="reset-opportunity-filters">重置</button>
      </div>
    </div>
  `;
}

function opportunityMenu(type, options, selected) {
  return `
    <div class="filter-menu">
      ${options
        .map(
          (item) => `
          <label class="filter-check">
            <input type="checkbox" ${selected.includes(item) ? "checked" : ""} data-action="toggle-opportunity-option" data-type="${type}" data-value="${item}" />
            <span>${item}</span>
          </label>
        `,
        )
        .join("")}
    </div>
  `;
}

function amountPopover() {
  const filters = state.opportunityFilters;
  return `
    <div class="amount-popover">
      <label class="field">
        <span>结算方式</span>
        <select class="select amount-settlement" data-filter-field="settlement">
          <option value="">请选择结算方式</option>
          <option ${filters.settlement === "固定价" ? "selected" : ""}>固定价</option>
          <option ${filters.settlement === "固定CPM" ? "selected" : ""}>固定CPM</option>
          <option ${filters.settlement === "按曝光量区间现金结算" ? "selected" : ""}>按曝光量区间现金结算</option>
          <option ${filters.settlement === "虚拟道具" ? "selected" : ""}>虚拟道具</option>
        </select>
      </label>
      <div class="amount-range-title">金额范围</div>
      <div class="amount-input-row">
        <div class="amount-input-wrap"><input class="filter-input" type="number" min="0" max="100000" value="${filters.amountMin}" data-filter-field="amountMin" /><span>USD</span></div>
        <span class="amount-dash">-</span>
        <div class="amount-input-wrap"><input class="filter-input" type="number" min="0" max="100000" value="${filters.amountMax}" data-filter-field="amountMax" /><span>USD</span></div>
      </div>
      <div class="amount-slider" aria-hidden="true">
        <span class="slider-line"></span>
        <span class="slider-thumb left"></span>
        <span class="slider-thumb right"></span>
        <div class="slider-scale"><span>0</span><span>10</span><span>100</span><span>1K</span><span>10K</span><span>100K</span></div>
      </div>
      <div class="amount-popover-actions">
        <button class="link-button" data-action="reset-amount-filter">重置</button>
        <div>
          <button class="ghost-button" data-action="toggle-opportunity-menu" data-menu="amount">取消</button>
          <button class="primary-button" data-action="confirm-amount-filter">确认</button>
        </div>
      </div>
    </div>
  `;
}

function followerPopover() {
  const filters = state.opportunityFilters;
  return `
    <div class="filter-popover compact-popover">
      <div class="amount-range-title">粉丝量要求</div>
      <div class="amount-input-row">
        <div class="amount-input-wrap"><input class="filter-input" type="number" min="0" max="1000000" value="${filters.followerMin}" data-filter-field="followerMin" /></div>
        <span class="amount-dash">-</span>
        <div class="amount-input-wrap"><input class="filter-input" type="number" min="0" max="1000000" value="${filters.followerMax}" data-filter-field="followerMax" /></div>
      </div>
      <div class="amount-popover-actions">
        <button class="link-button" data-action="reset-follower-filter">重置</button>
        <div>
          <button class="ghost-button" data-action="toggle-opportunity-menu" data-menu="follower">取消</button>
          <button class="primary-button" data-action="confirm-follower-filter">确认</button>
        </div>
      </div>
    </div>
  `;
}

function renderOpportunityHall() {
  return `
    ${pageHeader(
      "",
      "机会大厅",
      "",
      `<button class="secondary-button" data-nav="applications">查看报名进度</button>`,
    )}
    ${opportunityFilters()}
    <div class="cards-grid">
      ${creatorCampaigns
        .map(
          (item) => `
        <article class="campaign-card opportunity-card-clickable" data-action="open-task-detail" data-campaign="${encodeURIComponent(item.name)}">
          <div class="campaign-cover-wrap">
            <div class="cover cover-placeholder" aria-hidden="true">插图占位</div>
          </div>
          <h2>${item.name}</h2>
          <div class="campaign-title-tags">
            <span class="chip active">${item.tag}</span>
            <span class="deadline-chip">截止 ${item.deadline}</span>
          </div>
          <div class="campaign-price-highlight">
            <div>
              <span>招募价格</span>
              <strong>${item.budget}</strong>
            </div>
            ${
              state.appliedCampaigns.includes(item.name)
                ? `<button class="secondary-button campaign-apply-button applied" data-action="toast" data-message="你已报名该任务，当前状态为待平台审核">已报名</button>`
                : `<button class="primary-button campaign-apply-button" data-action="modal-apply" data-campaign="${encodeURIComponent(item.name)}">报名</button>`
            }
          </div>
          <div class="mini-stats">
            <div class="mini-stat"><span>粉丝要求</span><strong>${item.requirement}</strong></div>
            <div class="mini-stat"><span>推广平台</span><strong>${item.platform}</strong></div>
            <div class="mini-stat region-stat"><span>推广地区</span>${opportunityRegionDisplay(item.region)}</div>
          </div>
        </article>
      `,
        )
        .join("")}
    </div>
  `;
}

function renderTaskDetail() {
  const statusView = applicationStatusView(applicationDetail.statusKey);
  return `
    ${pageHeader(
      "达人端",
      "任务详情",
      "查看任务信息、达人要求、内容要求与招募价格。",
      `<button class="secondary-button" data-nav="opportunityHall">返回机会大厅</button>`,
    )}
    <div class="task-detail-layout">
      <div class="panel task-summary-card">
        <div class="task-summary-head">任务名称</div>
        <div class="task-summary-body">
          <div class="task-brand-block">
            <div class="task-brand-logo" aria-hidden="true"><span>MINI</span><span>SOU</span></div>
            <div class="task-brand-copy">
              <div class="task-brand-name">${taskDetailProfile.brandLabel}</div>
              <div class="task-title">${taskDetailProfile.displayTitle}</div>
              <div class="task-summary-grid">
                <div class="task-info-item">
                  <span>截止报名时间</span>
                  <strong>${taskDetailProfile.deadline}</strong>
                </div>
                <div class="task-info-item">
                  <span>推广国家/地区</span>
                  <div>${countryChips(taskDetailProfile.targetCountries, { compact: true })}</div>
                </div>
                <div class="task-info-item">
                  <span>推广平台</span>
                  <div>${platformBadges(taskDetailProfile.platforms)}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="task-hero-action">
            ${
              applicationDetail.statusKey === "none"
                ? `<button class="primary-button task-apply-button" data-action="modal-apply">立即报名</button>`
                : `<div class="task-status-block">${status(statusView.label, statusView.cls)}<small>${statusView.tip}</small></div>`
            }
          </div>
        </div>
      </div>

      <div class="panel task-section-card">
        <h2>达人要求</h2>
        <div class="task-requirement-grid">
          <div class="task-requirement-item">
            <span>粉丝量</span>
            <strong>${taskDetailProfile.followerRequirement}</strong>
          </div>
          <div class="task-requirement-item">
            <span>期望达人类型</span>
            <div>${simpleChips(taskDetailProfile.creatorTypes)}</div>
          </div>
          <div class="task-requirement-item">
            <span>内容形式</span>
            <strong>${taskDetailProfile.contentType}</strong>
          </div>
        </div>
      </div>

      <div class="panel task-section-card">
        <h2>内容要求</h2>
        <div class="task-content-block">
          <p>产品链接：${taskDetailProfile.productLink}</p>
          <p>推广平台：${taskDetailProfile.platforms.map((item) => item.name).join("、")}</p>
          <p>目标国家：${countryTextList(taskDetailProfile.targetCountries)}</p>
          <p>期望发布时间：${taskDetailProfile.deadline}</p>
          <p>达人粉丝要求：${taskDetailProfile.followerRequirement}</p>
          <p>内容形式：${taskDetailProfile.contentType}</p>
          <p>详细要求：${taskDetailProfile.contentSpec}</p>
        </div>
      </div>

      <div class="panel task-section-card">
        <h2>招募价格</h2>
        <div class="task-price-grid">
          <div class="task-price-card">
            <span>报价</span>
            <strong>${taskDetailProfile.budget}</strong>
            <small>单条内容报价</small>
          </div>
          <div class="task-price-card">
            <span>合作类型</span>
            <strong>${taskDetailProfile.settlementType}</strong>
            <small>按约定内容规格交付</small>
          </div>
          <div class="task-price-card">
            <span>结算方式</span>
            <strong>${taskDetailProfile.settlementMethod}</strong>
            <small>按确认合作价格结算</small>
          </div>
          <div class="task-price-card">
            <span>结算周期</span>
            <strong>${taskDetailProfile.settlementPeriod}</strong>
            <small>以合作协议说明为准</small>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderApplications() {
  return `
    ${pageHeader(
      "报名管理",
      "查看我的报名",
      "跟踪已报名任务的审核状态、反馈时间和备注。",
      `<button class="primary-button" data-nav="opportunityHall">继续找机会</button>`,
    )}
    <div class="table-card">
      <div class="table-head"><h2>已报名记录</h2><span class="muted">共 1 条</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>报名任务</th><th>报名理由</th><th>报名状态</th><th>反馈时间</th><th>备注</th><th>操作</th></tr></thead>
          <tbody>${applicationRows()}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderInvitations() {
  return `
    ${pageHeader(
      "邀请管理",
      "合作邀请",
      "处理品牌方主动发来的接单邀请。",
      `<button class="secondary-button" data-nav="myProjects">我的任务</button>`,
    )}
    <div class="tabs">
      ${tabButton("invitations", "all", "全部（2）")}
      ${tabButton("invitations", "pending", "待确认接单")}
      ${tabButton("invitations", "accepted", "已合作")}
    </div>
    <div class="table-card">
      <div class="table-head"><h2>任务名称</h2><button class="ghost-button" data-action="toast" data-message="邀请状态已刷新">刷新</button></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>任务名称</th><th>合作类型</th><th>结算方式</th><th>报价(USD)</th><th>期望发布时间</th><th>状态</th><th>操作</th></tr></thead>
          <tbody>${invitationRows()}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderMyProjects() {
  return `
    ${pageHeader(
      "任务管理",
      "我的任务",
      "管理合作中和已完成任务，提交产物并查看交付进度。",
      "",
    )}
    <div class="filter-bar sticky">
      <input class="input" placeholder="搜索或选择任务名称" />
      <select class="select"><option>全部平台</option><option>YouTube</option><option>TikTok</option><option>Instagram</option><option>Twitch</option><option>Twitter</option><option>Facebook</option><option>Others</option></select>
      <select class="select"><option>请选择交付进度</option><option>脚本待提交</option><option>初稿待确认</option><option>待发布</option><option>审核被拒</option></select>
    </div>
    <div class="tabs">
      ${tabButton("myProjects", "active", "合作中")}
      ${tabButton("myProjects", "done", "已完成")}
    </div>
    <div class="table-card">
      <div class="table-head"><h2>任务列表</h2></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>任务名称</th><th>合作类型</th><th>结算方式</th><th>报价(USD)</th><th>交付进度</th><th>状态</th><th>操作</th></tr></thead>
          <tbody>${projectTableRows()}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderRevenue() {
  return `
    ${pageHeader(
      "收益中心",
      "我的收益",
      "该入口出现在原型导航中，但源文件夹没有独立收益页面；这里补齐为收益概览。",
      `<button class="secondary-button" data-nav="myProjects">返回我的任务</button>`,
    )}
    ${metrics([
      { label: "待结算金额", value: "$280", delta: "2 个项目" },
      { label: "本月收益", value: "$1.2K", delta: "+12%" },
      { label: "已完成发布", value: "9", delta: "+3 条" },
      { label: "实际完成值", value: "186K", delta: "曝光" },
    ])}
    <div class="panel" style="margin-top:16px">
      <h2>结算明细</h2>
      <p class="subcopy">收益页可继续接入付款状态、发票信息和提现记录。</p>
    </div>
  `;
}

function renderPersonalCenter() {
  return `
    ${pageHeader(
      "账号资料",
      "个人中心",
      "管理达人账号资料、平台账号、联系方式和收款信息。",
      `<button class="primary-button" data-action="toast" data-message="个人资料已保存">保存</button>`,
    )}
    <div class="grid two-col">
      <div class="panel">
        <div class="form-grid">
          ${field("达人名称", `<input class="input" value="Mika Studio" />`, true)}
          ${field("联系人", `<input class="input" value="Levy Li" />`)}
          ${field("邮箱", `<input class="input" value="645644162@gmail.com" />`, true)}
          ${field(
            "手机号",
            `<div class="phone-field">
              <select class="select phone-code" aria-label="国家/地区区号">
                <option>中国 +86</option>
                <option>美国 +1</option>
                <option>英国 +44</option>
                <option>日本 +81</option>
                <option>新加坡 +65</option>
              </select>
              <input class="input phone-number" placeholder="请输入手机号" inputmode="tel" />
            </div>`,
          )}
          ${field("内容领域", `<div class="chips"><button class="chip active" data-action="toggle-chip">游戏</button><button class="chip active" data-action="toggle-chip">生活方式</button><button class="chip" data-action="toggle-chip">美妆</button><button class="chip" data-action="toggle-chip">购物与零售</button></div>`, false, "full")}
          ${field("个人简介", `<textarea class="textarea">专注 TikTok / YouTube 游戏与生活方式内容，擅长短视频种草、直播转化和产品测评。</textarea>`, false, "full")}
        </div>
      </div>
      <div class="panel">
        <h2>平台账号</h2>
        <div class="timeline" style="margin-top:14px">
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>TikTok · Mika Studio</strong><p>粉丝数 744.15万 · 平均曝光量 161.10万</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>YouTube · Nova Plays</strong><p>粉丝数 161.10万 · 互动率 4.1%</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>收款信息</strong><p>固定价任务可按平台结算周期进入收益中心。</p></div></div>
        </div>
      </div>
    </div>
  `;
}

function tabButton(scope, value, label) {
  return `<button class="tab ${state.tabs[scope] === value ? "active" : ""}" data-tab="${scope}" data-value="${value}">${label}</button>`;
}

function emptyRow(colspan) {
  return `<tr><td colspan="${colspan}"><div class="empty-state"><strong>暂无匹配结果</strong><span class="muted">请调整筛选条件后重试。</span></div></td></tr>`;
}

const pages = {
  promotions: renderPromotions,
  publishTask: renderPublishTask,
  taskReview: renderTaskReview,
  talentManagement: renderTalentManagement,
  collaborators: renderCollaborators,
  talentSearch: renderTalentSearch,
  account: renderAccount,
  opportunityHall: renderOpportunityHall,
  taskDetail: renderTaskDetail,
  applications: renderApplications,
  invitations: renderInvitations,
  myProjects: renderMyProjects,
  revenue: renderRevenue,
  personalCenter: renderPersonalCenter,
};

function openModal(content, small = false) {
  modalRoot.innerHTML = `
    <div class="modal-backdrop" data-action="close-overlay"></div>
    <div class="modal ${small ? "small" : ""}" role="dialog" aria-modal="true">
      ${content}
    </div>
  `;
}

function openPublishModal() {
  openModal(`
    <div class="modal-head">
      <div><h2>发布任务</h2><p class="subcopy">填写推广信息、达人要求和投放预算。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">${publishForm(true)}</div>
    ${publishControls(true)}
  `);
}

function openSamplePromotionsModal() {
  openModal(
    `
    <div class="modal-head">
      <div><h2>活动列表示例</h2><p class="subcopy">这里展示创建后的活动列表示意，方便你提前了解列表结构与字段信息。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="table-card sample-table-card">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>活动名称</th><th>活动地区</th><th>已参加达人数</th><th>已发布达人数</th><th>作品数</th><th>预算</th><th>活动发起时间</th><th>状态</th>
              </tr>
            </thead>
            <tbody>
              ${campaigns
                .slice(0, 3)
                .map(
                  (row) => `
                    <tr>
                      <td><strong>${row.name}</strong><br /><span class="muted">${row.product}</span></td>
                      <td>${row.region}</td>
                      <td>${row.joined}</td>
                      <td>${row.publishedCreators}</td>
                      <td>${row.works}</td>
                      <td class="money">${row.budget}</td>
                      <td>${row.start}</td>
                      <td>${status(row.status, row.statusClass)}</td>
                    </tr>
                  `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">关闭</button>
      <button class="primary-button" data-action="load-sample-promotions">使用示例列表</button>
    </div>
  `,
    false,
  );
}

function openCampaignInfoModal(campaignName = "") {
  const target = collaborations.find((item) => item.campaign === campaignName)?.campaignInfo || campaigns.find((item) => item.name === campaignName);
  if (!target) {
    toast("未找到任务信息", "查看失败");
    return;
  }

  openModal(
    `
    <div class="modal-head">
      <div><h2>任务信息</h2><p class="subcopy">${target.name || campaignName}</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        ${field("任务名称", `<div class="note-box">${target.name || "-"}</div>`, false)}
        ${field("推广平台", `<div class="note-box">${target.platform || "-"}</div>`, false)}
        ${field("推广产品", `<div class="note-box">${target.product || "-"}</div>`, false)}
        ${field("推广地区", `<div class="note-box">${target.region || "-"}</div>`, false)}
        ${field("预算", `<div class="note-box">${target.budget || "-"}</div>`, false)}
        ${field("截止时间", `<div class="note-box">${target.deadline || "-"}</div>`, false)}
        ${field("达人要求", `<div class="note-box">${target.requirement || "请查看任务详情页"}</div>`, false, "full")}
      </div>
    </div>
    <div class="modal-foot">
      <button class="primary-button" data-action="close-overlay">我知道了</button>
    </div>
  `,
    false,
  );
}

function refreshPublishModal() {
  const body = modalRoot.querySelector(".modal-body");
  if (body) {
    body.innerHTML = publishForm(true);
    body.scrollTop = 0;
  }
  const foot = modalRoot.querySelector("#publishModalFoot");
  if (foot) foot.outerHTML = publishControls(true);
  if (state.page === "publishTask") render();
}

function openInviteModal() {
  openModal(
    `
    <div class="modal-head">
      <div><h2>邀请达人</h2><p class="subcopy">选择推广活动并发送合作邀请。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        ${field("推广活动名称", `<select class="select">${campaigns.map((row) => `<option>${row.name}</option>`).join("")}</select>`, true)}
        ${field("合作类型", `<select class="select"><option>短视频</option><option>直播</option><option>曝光</option></select>`)}
        ${field("报价(USD)", `<input class="input" value="99" />`, true)}
        ${field("期望发布时间", `<input class="input" value="2026-06-20 19:00" />`)}
        ${field("邀请备注", `<textarea class="textarea">欢迎参与新品推广，期待你的创意内容。</textarea>`, false, "full")}
      </div>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">取消</button>
      <button class="primary-button" data-action="confirm-invite">发送邀请</button>
    </div>
  `,
    false,
  );
}

function openReviewModal() {
  openModal(
    `
    <div class="modal-head">
      <div><h2>修改要求</h2><p class="subcopy">填写修改意见，达人将根据反馈重新提交审核。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      ${field(
        "交付截至日期（开始时间-结束时间）",
        `<div class="date-range">
          <input class="input" type="date" aria-label="开始时间" />
          <span class="date-range-sep">-</span>
          <input class="input" type="date" aria-label="结束时间" />
        </div>`,
        true,
        "full",
      )}
      ${field("修改意见", `<textarea class="textarea" placeholder="请输入修改意见">请加强产品露出，并在视频前 10 秒补充核心卖点。</textarea>`, true, "full")}
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">取消</button>
      <button class="primary-button" data-action="toast-close" data-message="修改意见已发送给达人">确认</button>
    </div>
  `,
    true,
  );
}

function openApplyModal() {
  openModal(
    `
    <div class="modal-head">
      <div><h2>立即报名</h2><p class="subcopy">选择报名账号，并填写报名理由。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        ${field("报名账号", `<select class="select"><option>Mika Studio · TikTok</option><option>Nova Plays · YouTube</option></select>`, true)}
        ${field("报名理由", `<textarea class="textarea">我的频道受众与该活动高度匹配，可在 7 天内完成脚本、拍摄和发布。</textarea>`, true, "full")}
      </div>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">取消</button>
      <button class="primary-button" data-action="submit-apply">提交报名</button>
    </div>
  `,
    false,
  );
}

function openUploadModal() {
  openModal(
    `
    <div class="modal-head">
      <div><h2>提交产物</h2><p class="subcopy">请根据广告主要求的内容上传脚本/视频提交。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        ${field("内容说明", `<textarea class="textarea" placeholder="请填写本次提交内容说明，例如：脚本版本、视频时长、修改点说明等。"></textarea>`, true, "full")}
        ${field("内容链接", `<input class="input" placeholder="请输入链接地址，支持 http 和 https" />`, false, "full")}
        ${field("附件", `<button class="ghost-button" data-action="toast" data-message="附件已加入上传队列">+ 上传文件</button>`, false, "full")}
      </div>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">取消</button>
      <button class="primary-button" data-action="toast-close" data-message="内容已提交，等待平台审核">提交</button>
    </div>
  `,
    false,
  );
}

function openProjectProgressDrawer(taskName = "任务") {
  const project = projectRows.find((row) => row.task === taskName) || projectRows[0];
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div>
          <h2>${project.task}</h2>
          <p class="subcopy">达人交付进度与审核流转详情。</p>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        <div class="mini-stats">
          <div class="mini-stat"><span>合作类型</span><strong>${project.type}</strong></div>
          <div class="mini-stat"><span>当前进度</span><strong>${project.progress}</strong></div>
          <div class="mini-stat"><span>最终状态</span><strong>${project.finalStatus || project.progress}</strong></div>
        </div>
        <div class="timeline" style="margin-top:16px">
          ${(project.timeline || [])
            .map(
              (item) => `
              <div class="timeline-item">
                <span class="timeline-dot"></span>
                <div>
                  <strong>${item.title}</strong>
                  <p>${item.time}</p>
                  <p>${item.detail}</p>
                  <div class="note-box" style="margin-top:8px">审核结果：${item.result}</div>
                </div>
              </div>
            `,
            )
            .join("")}
        </div>
      </div>
      <div class="drawer-foot">
        <button class="ghost-button" data-action="close-overlay">关闭</button>
        ${project.status === "已完成" ? "" : `<button class="primary-button" data-action="modal-upload">提交产物</button>`}
      </div>
    </aside>
  `;
}

function openProductModal() {
  openModal(
    `
    <div class="modal-head">
      <div><h2>添加产品</h2><p class="subcopy">补充产品名称、链接、描述和图片。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        ${field("产品名称", `<input class="input" placeholder="请输入产品名称" />`, true)}
        ${field("产品链接", `<input class="input" placeholder="请输入产品链接" />`)}
        ${field("产品描述", `<textarea class="textarea" placeholder="请输入产品描述"></textarea>`, false, "full")}
        ${field("产品图片", `<button class="ghost-button" data-action="toast" data-message="产品图片已加入上传队列">+ 上传文件</button><small class="muted">支持 PDF、PNG、JPG、JPEG，10M 以内</small>`, false, "full")}
      </div>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">取消</button>
      <button class="primary-button" data-action="toast-close" data-message="产品信息已保存">确定</button>
    </div>
  `,
    false,
  );
}

function openRejectReasonModal(taskName = "项目", reason = "暂无被拒原因") {
  openModal(
    `
    <div class="modal-head">
      <div><h2>审核被拒原因</h2><p class="subcopy">${taskName}</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="note-box">${reason}</div>
      <p class="subcopy" style="margin-top:12px">你可以根据被拒原因修改内容后再次提交。</p>
    </div>
    <div class="modal-foot">
      <button class="primary-button" data-action="close-overlay">我知道了</button>
    </div>
  `,
    true,
  );
}

function openCreatorDrawer(name = "Mika Studio") {
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div><h2>${name}</h2><p class="subcopy">达人基本信息与近期内容表现。</p></div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        <img class="image-banner" src="${assets.creatorPreview}" alt="" />
        <div class="mini-stats">
          <div class="mini-stat"><span>粉丝数</span><strong>744.15万</strong></div>
          <div class="mini-stat"><span>平均曝光量</span><strong>161.10万</strong></div>
          <div class="mini-stat"><span>互动率</span><strong>3.5%</strong></div>
        </div>
        <div class="note-box">受众国家：US / UK；受众年龄：16-25；受众性别：女性 81.52%。内容标签：游戏、直播、测评。</div>
      </div>
      <div class="drawer-foot">
        <button class="ghost-button" data-action="close-overlay">关闭</button>
        <button class="primary-button" data-action="modal-invite">邀请合作</button>
      </div>
    </aside>
  `;
}

function openDeliveryDrawer() {
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div><h2>达人交付情况</h2><p class="subcopy">内容制作中 · 待验收。</p></div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        <div class="deliver-placeholders single" aria-label="交付内容占位">
          <div class="deliver-item"><span class="deliver-badge">附件</span><span class="deliver-desc">交付附件（占位）</span></div>
        </div>
        <div class="timeline" style="margin-top:16px">
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>脚本待确认</strong><p>达人已提交脚本，请审核内容。</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>内容制作中</strong><p>预计交付日期 2026-6-10。</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>待发布</strong><p>确认内容后进入发布节点。</p></div></div>
        </div>
      </div>
      <div class="drawer-foot">
        <button class="secondary-button" data-action="modal-review">要求修改</button>
        <button class="primary-button" data-action="toast-close" data-message="已确认达人内容">确认内容</button>
      </div>
    </aside>
  `;
}

function closeOverlay() {
  modalRoot.innerHTML = "";
}

function toast(message, title = "操作成功") {
  const item = document.createElement("div");
  item.className = "toast";
  item.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
  toastRoot.appendChild(item);
  setTimeout(() => item.remove(), 2600);
}

function handleAction(action, target) {
  const message = target.dataset.message || "已完成操作";
  if (action === "open-publish") openPublishModal();
  if (action === "toggle-publish-platform-menu") {
    state.publishDraft.platformMenuOpen = !state.publishDraft.platformMenuOpen;
    state.publishDraft.countryMenuOpen = false;
    state.publishDraft.areaMenuOpen = false;
    render();
    return;
  }
  if (action === "toggle-publish-country-menu") {
    state.publishDraft.countryMenuOpen = !state.publishDraft.countryMenuOpen;
    state.publishDraft.platformMenuOpen = false;
    state.publishDraft.areaMenuOpen = false;
    render();
    return;
  }
  if (action === "toggle-publish-area-menu") {
    state.publishDraft.areaMenuOpen = !state.publishDraft.areaMenuOpen;
    state.publishDraft.platformMenuOpen = false;
    state.publishDraft.countryMenuOpen = false;
    render();
    return;
  }
  if (action === "toggle-publish-platform") {
    const value = target.dataset.value || "";
    const next = new Set(state.publishDraft.platforms);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    state.publishDraft.platforms = [...next];
    render();
    return;
  }
  if (action === "remove-publish-platform") {
    const value = decodeURIComponent(target.dataset.value || "");
    state.publishDraft.platforms = state.publishDraft.platforms.filter((x) => x !== value);
    render();
    return;
  }
  if (action === "set-publish-region") {
    state.publishDraft.region = target.dataset.region || state.publishDraft.region;
    render();
    return;
  }
  if (action === "toggle-publish-country") {
    const value = decodeURIComponent(target.dataset.value || "");
    const next = new Set(state.publishDraft.countries);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    state.publishDraft.countries = [...next];
    render();
    return;
  }
  if (action === "remove-publish-country") {
    const value = decodeURIComponent(target.dataset.value || "");
    state.publishDraft.countries = state.publishDraft.countries.filter((x) => x !== value);
    render();
    return;
  }
  if (action === "toggle-publish-area") {
    const value = decodeURIComponent(target.dataset.value || "");
    const next = new Set(state.publishDraft.areas);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    state.publishDraft.areas = [...next];
    render();
    return;
  }
  if (action === "remove-publish-area") {
    const value = decodeURIComponent(target.dataset.value || "");
    state.publishDraft.areas = state.publishDraft.areas.filter((x) => x !== value);
    render();
    return;
  }
  if (action === "toggle-publish-creator-types") {
    state.publishDraft.creatorTypeMenuOpen = !state.publishDraft.creatorTypeMenuOpen;
    state.publishDraft.platformMenuOpen = false;
    state.publishDraft.countryMenuOpen = false;
    state.publishDraft.followerPopoverOpen = false;
    render();
    return;
  }
  if (action === "toggle-publish-creator-type") {
    const value = decodeURIComponent(target.dataset.value || "");
    const next = new Set(state.publishDraft.creatorTypes);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    state.publishDraft.creatorTypes = [...next];
    render();
    return;
  }
  if (action === "remove-publish-creator-type") {
    const value = decodeURIComponent(target.dataset.value || "");
    state.publishDraft.creatorTypes = state.publishDraft.creatorTypes.filter((x) => x !== value);
    render();
    return;
  }
  if (action === "toggle-publish-followers") {
    state.publishDraft.followerPopoverOpen = !state.publishDraft.followerPopoverOpen;
    state.publishDraft.creatorTypeMenuOpen = false;
    state.publishDraft.platformMenuOpen = false;
    state.publishDraft.countryMenuOpen = false;
    render();
    return;
  }
  if (action === "clear-publish-followers") {
    state.publishDraft.followerMinK = "";
    state.publishDraft.followerMaxK = "";
    state.publishDraft.followerPopoverOpen = false;
    render();
    return;
  }
  if (action === "confirm-publish-followers") {
    state.publishDraft.followerPopoverOpen = false;
    toast("粉丝数量要求已更新");
    render();
    return;
  }
  if (action === "toggle-language-menu") {
    state.topbarMenu.languageOpen = !state.topbarMenu.languageOpen;
    state.topbarMenu.userOpen = false;
    renderTopbar();
    return;
  }
  if (action === "toggle-user-menu") {
    state.topbarMenu.userOpen = !state.topbarMenu.userOpen;
    state.topbarMenu.languageOpen = false;
    renderTopbar();
    return;
  }
  if (action === "set-language") {
    state.language = target.dataset.lang === "en" ? "en" : "zh";
    document.documentElement.lang = state.language === "en" ? "en" : "zh-CN";
    state.topbarMenu.languageOpen = false;
    renderTopbar();
    toast(state.language === "en" ? "已切换为英文（演示）" : "已切换为中文");
    return;
  }
  if (action === "logout") {
    state.topbarMenu.userOpen = false;
    renderTopbar();
    toast("已退出登录（演示）");
    return;
  }
  if (action === "toggle-collab-platform-menu") {
    state.collaboratorFilters.platformMenuOpen = !state.collaboratorFilters.platformMenuOpen;
    render();
    return;
  }
  if (action === "toggle-opportunity-menu") {
    const menu = target.dataset.menu;
    state.opportunityFilters.platformMenuOpen = menu === "platform" ? !state.opportunityFilters.platformMenuOpen : false;
    state.opportunityFilters.tagMenuOpen = menu === "tag" ? !state.opportunityFilters.tagMenuOpen : false;
    state.opportunityFilters.followerMenuOpen = menu === "follower" ? !state.opportunityFilters.followerMenuOpen : false;
    state.opportunityFilters.amountMenuOpen = menu === "amount" ? !state.opportunityFilters.amountMenuOpen : false;
    render();
    return;
  }
  if (action === "toggle-opportunity-option") {
    const type = target.dataset.type;
    const value = target.dataset.value || "";
    const key = type === "platform" ? "platforms" : "tags";
    const next = new Set(state.opportunityFilters[key]);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    state.opportunityFilters[key] = [...next];
    render();
    return;
  }
  if (action === "reset-opportunity-filters") {
    state.opportunityFilters = {
      platformMenuOpen: false,
      tagMenuOpen: false,
      followerMenuOpen: false,
      amountMenuOpen: false,
      platforms: [],
      tags: [],
      region: "",
      followerMin: 0,
      followerMax: 1000000,
      amountMin: 0,
      amountMax: 100000,
      settlement: "",
      deliveryStart: "",
      deliveryEnd: "",
    };
    render();
    return;
  }
  if (action === "reset-follower-filter") {
    state.opportunityFilters.followerMin = 0;
    state.opportunityFilters.followerMax = 1000000;
    render();
    return;
  }
  if (action === "confirm-follower-filter") {
    state.opportunityFilters.followerMenuOpen = false;
    render();
    toast("粉丝量范围已确认");
    return;
  }
  if (action === "reset-amount-filter") {
    state.opportunityFilters.amountMin = 0;
    state.opportunityFilters.amountMax = 100000;
    state.opportunityFilters.settlement = "";
    render();
    return;
  }
  if (action === "confirm-amount-filter") {
    state.opportunityFilters.amountMenuOpen = false;
    render();
    toast("金额范围已确认");
    return;
  }
  if (action === "apply-opportunity-filters") {
    state.opportunityFilters.platformMenuOpen = false;
    state.opportunityFilters.tagMenuOpen = false;
    state.opportunityFilters.amountMenuOpen = false;
    render();
    toast("机会大厅筛选已应用");
    return;
  }
  if (action === "toggle-collab-platform") {
    const platform = target.dataset.platform || "";
    const next = new Set(state.collaboratorFilters.platforms);
    if (next.has(platform)) next.delete(platform);
    else next.add(platform);
    state.collaboratorFilters.platforms = [...next];
    render();
    return;
  }
  if (action === "toggle-collab-platform-all") {
    state.collaboratorFilters.platforms = [];
    render();
    return;
  }
  if (action === "confirm-collaboration") {
    const key = decodeURIComponent(target.dataset.collabKey || "");
    if (key && !state.confirmedCollaborators.includes(key)) {
      state.confirmedCollaborators.push(key);
    }
    render();
    toast(`已确认 ${target.dataset.creator || "达人"} 的合作，已移入进行中`);
    return;
  }
  if (action === "reset-collab-filters") {
    state.collaboratorFilters.campaign = "";
    state.collaboratorFilters.creator = "";
    state.collaboratorFilters.platforms = [];
    state.collaboratorFilters.platformMenuOpen = false;
    render();
    return;
  }
  if (action === "set-talent-category") {
    state.talentSearchFilters.category = target.dataset.category || "全部";
    render();
    return;
  }
  if (action === "set-talent-platform") {
    state.talentSearchFilters.platform = target.dataset.platform || "全部";
    render();
    return;
  }
  if (action === "set-talent-region") {
    state.talentSearchFilters.region = target.dataset.region || "全部";
    render();
    return;
  }
  if (action === "set-talent-price") {
    state.talentSearchFilters.priceRange = target.dataset.price || "全部";
    render();
    return;
  }
  if (action === "set-talent-engagement") {
    state.talentSearchFilters.engagement = target.dataset.engagement || "全部";
    render();
    return;
  }
  if (action === "toggle-talent-category-expand") {
    state.talentSearchFilters.expanded = !state.talentSearchFilters.expanded;
    render();
    return;
  }
  if (action === "preview-sample-promotions") {
    openSamplePromotionsModal();
    return;
  }
  if (action === "modal-campaign-info") {
    openCampaignInfoModal(decodeURIComponent(target.dataset.campaign || ""));
    return;
  }
  if (action === "load-sample-promotions") {
    state.brandHasCampaigns = true;
    closeOverlay();
    render();
    return;
  }
  if (action === "reset-promotion-filters") {
    state.promotionFilters = { name: "", status: "", startDate: "" };
    render();
    return;
  }
  if (action === "toggle-country-list") {
    state.detailCountryOpen = !state.detailCountryOpen;
    render();
    return;
  }
  if (action === "publish-next") {
    state.publishStep = Math.min(2, state.publishStep + 1);
    refreshPublishModal();
  }
  if (action === "publish-prev") {
    state.publishStep = Math.max(0, state.publishStep - 1);
    refreshPublishModal();
  }
  if (action === "submit-publish") {
    state.publishStep = 0;
    state.brandHasCampaigns = true;
    closeOverlay();
    toast("推广任务已提交，已进入审核与邀约流程");
    if (state.page !== "promotions") go("promotions");
    render();
  }
  if (action === "modal-invite") openInviteModal();
  if (action === "confirm-invite") {
    closeOverlay();
    toast("合作邀请已发送给达人");
  }
  if (action === "modal-review") openReviewModal();
  if (action === "modal-apply") {
    const campaignName = decodeURIComponent(target.dataset.campaign || "");
    if (campaignName && state.appliedCampaigns.includes(campaignName)) {
      toast("你已报名该任务，当前不支持重新报名", "无法重复报名");
      return;
    }
    if (!campaignName && applicationDetail.statusKey && applicationDetail.statusKey !== "none") {
      toast("你已报名该任务，当前不支持重新报名", "无法重复报名");
      return;
    }
    state.pendingApplyCampaign = campaignName;
    openApplyModal();
  }
  if (action === "submit-apply") {
    closeOverlay();
    if (state.pendingApplyCampaign && !state.appliedCampaigns.includes(state.pendingApplyCampaign)) {
      state.appliedCampaigns.push(state.pendingApplyCampaign);
    } else {
      applicationDetail.statusKey = "platform_review";
    }
    state.pendingApplyCampaign = "";
    toast("报名已提交，当前状态为已报名，待平台审核");
    render();
  }
  if (action === "open-task-detail") {
    go("taskDetail");
    return;
  }
  if (action === "modal-upload") openUploadModal();
  if (action === "drawer-project-progress") {
    openProjectProgressDrawer(decodeURIComponent(target.dataset.task || "任务"));
    return;
  }
  if (action === "modal-product") openProductModal();
  if (action === "modal-reject-reason") {
    const taskName = decodeURIComponent(target.dataset.task || "项目");
    const reason = decodeURIComponent(target.dataset.reason || "暂无被拒原因");
    openRejectReasonModal(taskName, reason);
  }
  if (action === "drawer-creator") openCreatorDrawer(target.dataset.name);
  if (action === "drawer-delivery") openDeliveryDrawer();
  if (action === "accept-invite") toast("已确认接单，任务已加入我的项目");
  if (action === "reject-invite") toast("已拒绝该合作邀请");
  if (action === "save-account") toast("账户信息已保存");
  if (action === "toggle-chip") target.classList.toggle("active");
  if (action === "toast") toast(message);
  if (action === "toast-close") {
    closeOverlay();
    toast(message);
  }
  if (action === "close-overlay") closeOverlay();
}

document.addEventListener("click", (event) => {
  // close topbar dropdowns when clicking outside
  if (!event.target.closest("[data-dropdown-scope]")) {
    if (state.topbarMenu.languageOpen || state.topbarMenu.userOpen) {
      state.topbarMenu.languageOpen = false;
      state.topbarMenu.userOpen = false;
      renderTopbar();
    }
  }

  if (!event.target.closest(".country-overflow")) {
    if (state.detailCountryOpen) {
      state.detailCountryOpen = false;
      render();
    }
  }

  if (!event.target.closest("[data-ms-scope]")) {
    if (
      state.publishDraft.platformMenuOpen ||
      state.publishDraft.countryMenuOpen ||
      state.publishDraft.areaMenuOpen ||
      state.publishDraft.creatorTypeMenuOpen ||
      state.publishDraft.followerPopoverOpen
    ) {
      state.publishDraft.platformMenuOpen = false;
      state.publishDraft.countryMenuOpen = false;
      state.publishDraft.areaMenuOpen = false;
      state.publishDraft.creatorTypeMenuOpen = false;
      state.publishDraft.followerPopoverOpen = false;
      render();
    }
  }

  if (!event.target.closest(".multi-select")) {
    if (state.collaboratorFilters.platformMenuOpen) {
      state.collaboratorFilters.platformMenuOpen = false;
      render();
    }
  }

  const navTarget = event.target.closest("[data-nav]");
  if (navTarget) {
    go(navTarget.dataset.nav);
    document.querySelector(".sidebar")?.classList.remove("open");
    return;
  }

  const tabTarget = event.target.closest("[data-tab]");
  if (tabTarget) {
    state.tabs[tabTarget.dataset.tab] = tabTarget.dataset.value;
    render();
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    handleAction(actionTarget.dataset.action, actionTarget);
  }
});

document.querySelectorAll(".role-option").forEach((btn) => {
  btn.addEventListener("click", () => setRole(btn.dataset.role));
});

document.addEventListener("input", (event) => {
  const fieldTarget = event.target.closest("[data-publish-field]");
  if (!fieldTarget) return;
  const key = fieldTarget.dataset.publishField;
  state.publishDraft[key] = fieldTarget.value;
});

document.addEventListener("input", (event) => {
  const filterTarget = event.target.closest("[data-promotion-filter]");
  if (!filterTarget) return;
  state.promotionFilters[filterTarget.dataset.promotionFilter] = filterTarget.value;
  render();
});

document.addEventListener("change", (event) => {
  const filterTarget = event.target.closest("[data-promotion-filter]");
  if (!filterTarget) return;
  state.promotionFilters[filterTarget.dataset.promotionFilter] = filterTarget.value;
  render();
});

document.addEventListener("input", (event) => {
  const filterTarget = event.target.closest("[data-collab-filter]");
  if (!filterTarget) return;
  state.collaboratorFilters[filterTarget.dataset.collabFilter] = filterTarget.value;
  render();
});

document.addEventListener("change", (event) => {
  const filterTarget = event.target.closest("[data-collab-filter]");
  if (!filterTarget) return;
  state.collaboratorFilters[filterTarget.dataset.collabFilter] = filterTarget.value;
  render();
});

document.addEventListener("input", (event) => {
  const filterTarget = event.target.closest("[data-talent-filter]");
  if (!filterTarget) return;
  const key = filterTarget.dataset.talentFilter;
  state.talentSearchFilters[key] = filterTarget.value;
  render();
});

document.addEventListener("change", (event) => {
  const filterTarget = event.target.closest("[data-talent-filter]");
  if (!filterTarget) return;
  const key = filterTarget.dataset.talentFilter;
  const raw = String(filterTarget.value || "");
  state.talentSearchFilters[key] = raw;
  render();
});

function syncOpportunityFilter(target) {
  const key = target.dataset.filterField;
  if (!key) return false;
  if (["followerMin", "followerMax", "amountMin", "amountMax"].includes(key)) {
    const max = key.startsWith("follower") ? 1000000 : 100000;
    const value = Number(target.value || 0);
    state.opportunityFilters[key] = Math.min(max, Math.max(0, value));
  } else {
    state.opportunityFilters[key] = target.value;
  }
  return true;
}

document.addEventListener("input", (event) => {
  const filterTarget = event.target.closest("[data-filter-field]");
  if (!filterTarget) return;
  if (syncOpportunityFilter(filterTarget)) render();
});

document.addEventListener("change", (event) => {
  const filterTarget = event.target.closest("[data-filter-field]");
  if (!filterTarget) return;
  if (syncOpportunityFilter(filterTarget)) render();
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});

globalSearch?.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

window.addEventListener("hashchange", () => {
  const next = window.location.hash.replace("#", "") || "promotions";
  state.page = pages[next] ? next : "promotions";
  render();
});

if (!window.location.hash) {
  window.location.hash = "promotions";
} else {
  state.page = pages[window.location.hash.replace("#", "")] ? window.location.hash.replace("#", "") : "promotions";
}

render();
