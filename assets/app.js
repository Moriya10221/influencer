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
  brandNotifications: {
    unreadCount: 2,
    items: [
      {
        id: "notify-apply-1",
        type: "applicant",
        task: "MINISO 夏季新品内容合作",
        time: "刚刚",
        title: "达人报名提醒",
        content: "Luna Trend 报名了「MINISO 夏季新品内容合作」，请尽快处理报名审核。",
        cta: "去审核",
      },
      {
        id: "notify-deliver-1",
        type: "deliverable",
        task: "MINISO 夏季新品内容合作",
        time: "5 分钟前",
        title: "产物验收提醒",
        content: "Momo Beauty Lab 已提交「MINISO 夏季新品内容合作」产物内容，请及时查看验收。",
        cta: "去验收",
      },
    ],
  },
  creatorNotifications: {
    unreadCount: 3,
    items: [
      {
        id: "c-notify-apply-approved",
        type: "apply_approved",
        task: "MINISO 夏季新品内容合作",
        time: "10 分钟前",
        title: "报名结果",
        content: "你报名的「MINISO 夏季新品内容合作」已通过审核，已进入合作流程。",
        cta: "查看报名",
        statusKey: "approved",
      },
      {
        id: "c-notify-apply-rejected",
        type: "apply_rejected",
        task: "Anker 充电配件新品推广",
        time: "2 小时前",
        title: "报名结果",
        content: "你报名的「Anker 充电配件新品推广」未通过审核，可查看原因并调整后重新提交。",
        cta: "查看原因",
        statusKey: "rejected",
      },
      {
        id: "c-notify-deliver-approved",
        type: "deliverable_approved",
        task: "全境封锁-全球活动",
        time: "昨天",
        title: "产物审核结果",
        content: "你提交的产物已通过审核，可按排期发布并回传链接。",
        cta: "查看结果",
      },
    ],
  },
  publishDraft: {
    platformMenuOpen: false,
    countryMenuOpen: false,
    areaMenuOpen: false,
    creatorTypeMenuOpen: false,
    followerPopoverOpen: false,
    region: "东南亚",
    campaignName: "MINISO 夏季新品内容合作",
    platforms: ["TikTok", "YouTube"],
    countries: [],
    areas: [],
    productName: "MINISO 香氛系列",
    productType: "实物商品",
    productLink: "",
    productDesc: "新品香氛系列，适合生活方式与美妆垂类内容。",
    activePlatform: "TikTok",
    creatorTypes: ["美妆", "生活方式"],
    cooperationTypes: ["全片", "插片"],
    contentRequirement: "请突出产品核心卖点，前 10 秒完成产品露出，并保留真实体验表达。",
    requirementLink: "",
    creatorCount: "12",
    unitPriceMin: "100",
    unitPriceMax: "200",
    followerMinK: "10.00",
    followerMaxK: "20.00",
    registrationRange: "2026-06-11 ~ 2026-06-20",
    projectDeadline: "2026-06-30",
    expectedEffect: "曝光",
    estimatedEffect: "80K",
    matchDrawerOpen: false,
    matchedSource: "all",
    matchedCreators: ["Mika Studio", "Nova Plays"],
    platformConfigs: {
      TikTok: {
        creatorCount: "",
        followerMinK: "50",
        followerMaxK: "200",
        creatorTypes: ["美妆", "生活方式"],
        cooperationTypes: ["全片"],
        contentRequirement: "强调前 10 秒产品露出与核心卖点口播，支持生活方式场景化种草。",
        platformBudget: "3000",
        unitPriceMin: "100",
        unitPriceMax: "200",
        settlement: "固定价",
        settlementCycle: "按7天实际曝光量结算",
      },
      YouTube: {
        creatorCount: "",
        followerMinK: "20",
        followerMaxK: "100",
        creatorTypes: ["测评", "科技数码"],
        cooperationTypes: ["长视频"],
        contentRequirement: "适合测评/开箱内容，需保留产品功能点拆解与购买引导。",
        platformBudget: "5000",
        unitPriceMin: "300",
        unitPriceMax: "500",
        settlement: "固定价",
        settlementCycle: "按14天实际曝光量结算",
      },
    },
  },
  collaboratorFilters: {
    campaign: "",
    creator: "",
    platforms: [],
    platformMenuOpen: false,
  },
  myTalentFilters: {
    keyword: "",
    cooperationStatus: "全部",
    cooperationTimes: "全部",
    platform: "全部",
    category: "全部",
    engagement: "全部",
    exposure30d: "全部",
    qualityTier: "全部",
    priceRange: "全部",
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
    regionMenuOpen: false,
    tagMenuOpen: false,
    followerMenuOpen: false,
    amountMenuOpen: false,
    platforms: [],
    regions: [],
    tags: [],
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
    emailInvitesAdmin: "inviteList",
    adminReviewHistory: "全部",
    payoutAdmin: "all",
  },
  officialTaskFormOpen: false,
  invitationFilters: {
    keyword: "",
    type: "全部",
  },
  creatorTaskDetail: {
    name: "",
    backTo: "opportunityHall",
  },
  loginBannerUploadTargetId: "",
  revenuePayoutDraft: {
    method: "paypal",
    holder: "Moriya",
    currency: "USD",
    country: "德国",
    email: "mo********@gmail.com",
    iban: "DE89 3704 0044 0532 0130 00",
    bankName: "Deutsche Bank",
    swift: "DEUTDEFF",
    note: "请在备注中说明其他收款方式",
    isDefault: true,
  },
  socialAuthDraft: {
    platform: "TikTok",
    method: "oauth",
  },
  myTalentDetail: {
    name: "Mika Studio",
    tab: "ledger",
  },
  inviteTalentSource: "recommend",
  inviteSelectedCreators: ["Mika Studio", "Nova Plays"],
  creatorProjectDetailTask: "",
  adminFilters: {
    reviewType: "全部",
    reviewResult: "全部",
    reviewKeyword: "",
    reviewTarget: "全部",
    selectedCampaign: "MINISO 夏季新品内容合作",
    campaignFulfillmentKeyword: "",
    selectedAdvertiser: "MINISO 官方旗舰店",
    advertiserKeyword: "",
    advertiserEmail: "",
    advertiserStatus: "全部",
    advertiserJoinedStart: "",
    advertiserJoinedEnd: "",
    advertiserCampaignKeyword: "",
    advertiserCampaignStatus: "全部",
    influencerKeyword: "",
    influencerPlatform: "全部",
    influencerStatus: "全部",
    selectedInfluencer: "Mika Studio",
    officialTaskKeyword: "",
    officialTaskStatus: "全部",
    officialTaskCreatedStart: "",
    officialTaskCreatedEnd: "",
  },
  officialTaskDraft: {
    taskName: "官方任务：MINISO 夏季新品英国站招募",
    platforms: "TikTok、YouTube",
    region: "英国、德国、法国",
    productName: "MINISO 香氛与收纳系列",
    productLink: "https://www.miniso.com/",
    productDesc: "官方任务，主打夏季香氛与居家收纳场景种草。",
    creatorTypes: "生活方式、美妆、零售",
    creatorCount: "15",
    followerRange: "50K - 200K",
    cooperationTypes: "全片、插片、Shorts",
    contentRequirement: "突出产品卖点，前 10 秒完成露出，并结合真实生活场景拍摄。",
    budget: "8000",
    expectedEffect: "曝光 120K",
    settlement: "固定价",
    settlementCycle: "按7天实际曝光量结算",
    registrationRange: "2026-06-15 ~ 2026-06-25",
    deadline: "2026-07-05",
    note: "官方任务自动跳过审核，发布后直接进入招募中。",
  },
  publishStep: 0,
};

const assets = {
  avatar: "assets/images/brand-avatar.png",
  creatorMap: "assets/images/creator-map.png",
  strip: "assets/images/campaign-strip.png",
  taskDetailBanner: "assets/images/task-detail-banner.jpg",
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

const applicationRecords = [
  {
    task: "MINISO 夏季新品内容合作",
    account: "Mika Studio",
    reason: "账号内容与美妆生活方式受众匹配，过往测评数据稳定。",
    statusKey: "approved",
    feedbackTime: "2026-06-10 09:20",
    note: "恭喜您报名成功，请等待下一流程。",
  },
  {
    task: "全境封锁2-上线活动",
    account: "Nova Plays",
    reason: "过往游戏开箱和上线首发内容表现稳定，受众与任务方向匹配。",
    statusKey: "platform_review",
    feedbackTime: "-",
    note: "",
  },
  {
    task: "Anker 充电配件新品推广",
    account: "Tech Otto",
    reason: "科技数码垂类匹配，历史长视频转化表现较好。",
    statusKey: "brand_review",
    feedbackTime: "2026-06-11 15:40",
    note: "",
  },
  {
    task: "椰子水东南亚饮品种草",
    account: "Daily Miki",
    reason: "生活方式内容与快消饮品场景匹配，适合东南亚受众传播。",
    statusKey: "rejected",
    feedbackTime: "2026-06-09 18:10",
    note: "当前报价与内容方向不匹配。",
  },
];

function applicationStatusView(key) {
  const map = {
    none: { label: "未报名", cls: "draft", tip: "你还未报名该任务，点击按钮即可提交报名信息。" },
    platform_review: { label: "审核中", cls: "pending", tip: "平台正在校验账号、报价与报名理由。" },
    brand_review: { label: "审核中", cls: "pending", tip: "平台审核已通过，等待广告主确认合作名单。" },
    approved: { label: "报名通过", cls: "success", tip: "报名已通过，任务已进入合作流程，请按要求完成交付。" },
    rejected: { label: "报名未通过", cls: "rejected", tip: "报名未通过，可查看原因。" },
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
  const tokens = parseRegionTokens(region);
  const visible = tokens.slice(0, 3);
  const hiddenCount = Math.max(tokens.length - visible.length, 0);
  const text = visible.join(" / ") || "-";
  return `
    <div class="region-inline-overflow" tabindex="0">
      <span class="region-inline-text" title="${tokens.join(" / ") || text}">${text}</span>
      ${hiddenCount ? `<span class="region-inline-more">+${hiddenCount}</span>` : ""}
      <div class="country-popover" role="dialog" aria-label="推广地区详情">
        <div class="country-popover-title">推广地区</div>
        <div class="country-popover-list">
          ${(tokens.length ? tokens : [text]).map((item) => `<span class="country-chip">${item}</span>`).join("")}
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

function socialPlatformIcon(platformName = "") {
  const normalized = String(platformName || "").toLowerCase();
  if (normalized.includes("tiktok")) return `<img src="${assets.tiktokLogo}" alt="" />`;
  if (normalized.includes("youtube")) return `<img src="${assets.youtubeLogo}" alt="" />`;
  if (normalized.includes("twitch")) return `<img src="${assets.twitchLogo}" alt="" />`;
  if (normalized.includes("instagram")) return `<img src="${assets.instagramLogo}" alt="" />`;
  if (normalized.includes("twitter")) return `<span class="social-letter x">X</span>`;
  if (normalized.includes("facebook")) return `<span class="social-letter fb">f</span>`;
  return `<span class="social-letter">${String(platformName || "-").slice(0, 1)}</span>`;
}

function creatorSocialPlatforms() {
  return [
    {
      name: "TikTok",
      statusText: "已认证",
      statusClass: "success",
      accounts: ["Mika Studio", "Mika Beauty Lab"],
      metrics: "最高粉丝 744.15万",
      usage: "报名合作任务、数据回传",
      updatedAt: "2026-06-12",
    },
    {
      name: "YouTube",
      statusText: "已认证",
      statusClass: "success",
      accounts: ["Nova Plays"],
      metrics: "平均互动率 4.1%",
      usage: "长视频合作、品牌邀约",
      updatedAt: "2026-06-10",
    },
    {
      name: "Instagram",
      statusText: "审核中",
      statusClass: "pending",
      accounts: ["mika.trend"],
      metrics: "预计 1 个工作日内完成",
      usage: "内容种草、图片素材",
      updatedAt: "2026-06-15",
    },
    { name: "Twitch", statusText: "未认证", statusClass: "muted", accounts: [], metrics: "可添加直播账号", usage: "-", updatedAt: "-" },
    { name: "Twitter", statusText: "未认证", statusClass: "muted", accounts: [], metrics: "可添加社媒账号", usage: "-", updatedAt: "-" },
    { name: "Facebook", statusText: "未认证", statusClass: "muted", accounts: [], metrics: "可添加主页或个人号", usage: "-", updatedAt: "-" },
  ];
}

function parseRegionTokens(region = "") {
  return String(region || "")
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeDateTimeInput(value = "") {
  return String(value || "").replace(" ", "T");
}

function opportunityCover(item) {
  if (item.cover) {
    return `<img class="cover" src="${item.cover}" alt="${item.name}" />`;
  }
  return `
    <div class="cover cover-placeholder ${item.isOfficial ? "official-cover-placeholder" : ""}" aria-hidden="true">
      <div class="cover-placeholder-copy">
        <strong>${item.isOfficial ? "官方任务" : "任务插图"}</strong>
      </div>
    </div>
  `;
}

function opportunityOfficialBadge(item) {
  if (!item.isOfficial) return "";
  return `<span class="official-ribbon">官方</span>`;
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
      <button class="avatar-button" data-action="drawer-creator" data-name="${row.creator}" aria-label="查看 ${row.creator} 达人详情">
        <img src="${row.avatar || assets.creatorPreview}" alt="" />
      </button>
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
  ["talentManagement", "达人管理", "达"],
  ["talentSearch", "达人搜索", "搜", "child"],
  ["myTalents", "合作达人", "合", "child"],
  ["collaborators", "合作管理", "合"],
  ["account", "账户管理", "账"],
];

const creatorNav = [
  ["opportunityHall", "机会大厅", "机"],
  ["invitations", "合作邀请", "邀"],
  ["myProjects", "我的任务", "任"],
  ["revenue", "我的收益", "收"],
  ["socialAuth", "社媒认证", "媒"],
  ["personalCenter", "个人中心", "个"],
];

const operatorNav = [
  ["adminDashboard", "数据看板", "数"],
  ["usersAdmin", "用户管理", "用"],
  ["advertiserList", "广告主管理", "广", "child", "新"],
  ["influencerListAdmin", "达人管理", "达", "child"],
  ["emailInvitesAdmin", "达人邀约", "邀", "child"],
  ["reviewCenter", "审核管理", "审"],
  ["campaignReviewAdmin", "活动审核", "活", "child"],
  ["creatorApplicationReviewAdmin", "报名审核", "报", "child"],
  ["creatorDeliverableReviewAdmin", "产物审核", "产", "child"],
  ["officialTaskCreate", "官方任务", "官", undefined, "新"],
  ["operationsManagementAdmin", "运营管理", "运"],
  ["loginPageConfigAdmin", "登录页配置", "登", "child"],
  ["gameTagsAdmin", "标签管理", "标", "child"],
  ["payoutAdmin", "财务管理", "财"],
  ["settingsAdmin", "系统设置", "设"],
];

const navLabels = Object.fromEntries([...brandNav, ...creatorNav, ...operatorNav].map(([id, label]) => [id, label]));

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
    statusClass: "pending",
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
    contract: "未收藏",
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
    contract: "已收藏",
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
    contract: "未收藏",
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
    contract: "已收藏",
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
    contract: "未收藏",
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
    contract: "已收藏",
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
    contract: "未收藏",
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
    contract: "已收藏",
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
    contract: "未收藏",
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
    contract: "已收藏",
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
    contract: "未收藏",
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
    contract: "未收藏",
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
    contract: "已收藏",
  },
];

const myTalentRows = [
  {
    name: "Mika Studio",
    uid: "@mika_studio",
    avatar: assets.talentAvatar1,
    platform: "TikTok",
    region: ["US", "UK"],
    followers: "744.15万",
    categories: ["游戏", "生活方式", "测评"],
    totalOrders: 6,
    validOrders: 5,
    completionRate: "83%",
    qualityTier: "S级优质",
    avgExposure: "161.10万",
    avgEngagement: "3.5%",
    avgClicks: "2.8%",
    totalBudget: "$11,800",
    settledBudget: "$8,400",
    pendingSettlement: "$2,000",
    baseQuote: "$2,000",
    statusTags: ["有进行中的任务", "历史合作"],
    hasActive: true,
    weakWarning: false,
    audienceGender: "女性 81.52%",
    audienceAge: "18-24",
    audienceCountries: ["US", "UK", "CA"],
    formats: ["全片", "切片", "直播"],
    styleTags: ["剧情种草", "开箱测评"],
    taskLedger: [
      { campaign: "MINISO 夏季新品内容合作", createdAt: "2026-06-02 11:20", platform: "TikTok", region: "英国 / 美国", cooperationStatus: "履约中", flow: "报名→运营初审→广告主复审→内容提交→内容双审", budget: "$2,000", deliverable: "已提交脚本 / 已提交视频", reviewStatus: "待审核", publishLink: "-", exposure: "-", likes: "-", interaction: "-", publishAt: "-", settlementStatus: "待结算" },
      { campaign: "全境封锁-全球活动", createdAt: "2026-05-18 15:40", platform: "TikTok", region: "美国 / 英国", cooperationStatus: "已完成", flow: "报名→运营初审→广告主复审→内容提交→内容双审→发布确认", budget: "$2,300", deliverable: "已提交脚本 / 已提交视频", reviewStatus: "审核通过", publishLink: "tiktok.com/@mika_studio/video/001", exposure: "126K", likes: "11.2K", interaction: "4.1%", publishAt: "2026-05-29 20:15", settlementStatus: "已结算" },
      { campaign: "Anker 充电配件新品推广", createdAt: "2026-04-09 09:30", platform: "YouTube", region: "德国 / 英国", cooperationStatus: "已完成", flow: "报名→运营初审→广告主复审→内容提交→内容双审→发布确认", budget: "$1,850", deliverable: "已提交脚本 / 已提交视频", reviewStatus: "审核通过", publishLink: "youtube.com/watch?v=anker88", exposure: "98K", likes: "6.1K", interaction: "3.8%", publishAt: "2026-04-18 18:00", settlementStatus: "已结算" },
    ],
    deliverables: [
      { campaign: "MINISO 夏季新品内容合作", type: "短视频", submittedAt: "2026-06-10 18:20", review: "待审核", rejectReason: "-", publishStatus: "未发布", effect: "-", action: "预览内容" },
      { campaign: "全境封锁-全球活动", type: "短视频", submittedAt: "2026-05-27 17:00", review: "通过", rejectReason: "-", publishStatus: "已发布", effect: "126K / 4.1%", action: "预览内容" },
      { campaign: "Anker 充电配件新品推广", type: "脚本", submittedAt: "2026-04-15 10:30", review: "通过", rejectReason: "-", publishStatus: "已发布", effect: "98K / 3.8%", action: "预览内容" },
    ],
    quality: {
      responseTime: "平均 3.2 小时",
      deliveryCycle: "平均 4.5 天",
      overdueCount: "1 次",
      signupReject: "1 次 / 14%",
      opsReject: "2 次 / 高曝光镜头不足、品牌露出偏弱、CTA不明确",
      brandReject: "1 次 / 品牌卖点表达不充分、脚本节奏偏慢、标题不聚焦",
    },
    settlements: [
      { campaign: "全境封锁-全球活动", quote: "$2,300", completedAt: "2026-05-29 20:15", cycle: "7 天曝光核算", billAt: "2026-06-06 10:00", status: "已结算", note: "已完成打款" },
      { campaign: "MINISO 夏季新品内容合作", quote: "$2,000", completedAt: "-", cycle: "14 天曝光核算", billAt: "-", status: "待结算", note: "待发布后生成账单" },
    ],
    communications: [
      { time: "2026-06-11 09:20", type: "系统消息", content: "达人已提交短视频初稿，待广告主复审。" },
      { time: "2026-06-11 16:40", type: "人工留言", content: "适合生活方式新品复投，可继续做英国站种草。" },
    ],
  },
  {
    name: "Nova Plays",
    uid: "@novaplays",
    avatar: assets.talentAvatar2,
    platform: "YouTube",
    region: ["JP", "CN"],
    followers: "161.10万",
    categories: ["科技", "软件", "测评"],
    totalOrders: 4,
    validOrders: 3,
    completionRate: "75%",
    qualityTier: "A级良好",
    avgExposure: "42.80万",
    avgEngagement: "4.1%",
    avgClicks: "3.3%",
    totalBudget: "$4,200",
    settledBudget: "$3,200",
    pendingSettlement: "$800",
    baseQuote: "$800",
    statusTags: ["历史合作"],
    hasActive: false,
    weakWarning: false,
    audienceGender: "女性 79.8%",
    audienceAge: "18-30",
    audienceCountries: ["JP", "CN", "SG"],
    formats: ["全片", "长视频"],
    styleTags: ["开箱测评", "功能拆解"],
    taskLedger: [
      { campaign: "Anker 充电配件新品推广", createdAt: "2026-05-05 13:20", platform: "YouTube", region: "日本 / 中国", cooperationStatus: "已完成", flow: "报名→运营初审→广告主复审→内容提交→内容双审→发布确认", budget: "$800", deliverable: "已提交脚本 / 已提交视频", reviewStatus: "审核通过", publishLink: "youtube.com/watch?v=nova001", exposure: "42.8K", likes: "3.2K", interaction: "4.1%", publishAt: "2026-05-18 20:00", settlementStatus: "已结算" },
      { campaign: "MINISO 夏季新品内容合作", createdAt: "2026-03-11 17:10", platform: "YouTube", region: "日本", cooperationStatus: "已完成", flow: "报名→运营初审→广告主复审→内容提交→内容双审→发布确认", budget: "$1,100", deliverable: "已提交脚本 / 已提交视频", reviewStatus: "审核通过", publishLink: "youtube.com/watch?v=miniso77", exposure: "55K", likes: "4.6K", interaction: "4.5%", publishAt: "2026-03-26 19:30", settlementStatus: "已结算" },
    ],
    deliverables: [
      { campaign: "Anker 充电配件新品推广", type: "长视频", submittedAt: "2026-05-14 16:00", review: "通过", rejectReason: "-", publishStatus: "已发布", effect: "42.8K / 4.1%", action: "预览内容" },
      { campaign: "MINISO 夏季新品内容合作", type: "脚本", submittedAt: "2026-03-18 10:20", review: "通过", rejectReason: "-", publishStatus: "已发布", effect: "55K / 4.5%", action: "预览内容" },
    ],
    quality: {
      responseTime: "平均 6.8 小时",
      deliveryCycle: "平均 5.2 天",
      overdueCount: "0 次",
      signupReject: "0 次 / 0%",
      opsReject: "1 次 / 信息密度不足、标题不够聚焦、镜头切换偏慢",
      brandReject: "0 次 / -",
    },
    settlements: [
      { campaign: "Anker 充电配件新品推广", quote: "$800", completedAt: "2026-05-18 20:00", cycle: "7 天曝光核算", billAt: "2026-05-26 12:00", status: "已结算", note: "正常完成结算" },
      { campaign: "MINISO 夏季新品内容合作", quote: "$1,100", completedAt: "2026-03-26 19:30", cycle: "14 天曝光核算", billAt: "2026-04-09 11:00", status: "已结算", note: "复投合作表现稳定" },
    ],
    communications: [
      { time: "2026-05-12 10:00", type: "系统消息", content: "任务通过审核，进入内容制作阶段。" },
      { time: "2026-05-28 14:00", type: "人工留言", content: "适合品牌功能型产品复投，沟通成本较低。" },
    ],
  },
  {
    name: "Luna Trend",
    uid: "@lunatrend_daily",
    avatar: assets.talentAvatar3,
    platform: "Instagram",
    region: ["US", "TH"],
    followers: "289.40万",
    categories: ["美妆", "生活", "购物零售"],
    totalOrders: 3,
    validOrders: 2,
    completionRate: "67%",
    qualityTier: "B级一般",
    avgExposure: "68.50万",
    avgEngagement: "6.2%",
    avgClicks: "4.4%",
    totalBudget: "$3,600",
    settledBudget: "$2,400",
    pendingSettlement: "$1,200",
    baseQuote: "$1,200",
    statusTags: ["有进行中的任务", "历史合作"],
    hasActive: true,
    weakWarning: true,
    audienceGender: "女性 88.3%",
    audienceAge: "18-24",
    audienceCountries: ["US", "TH", "MY"],
    formats: ["图文", "切片", "全片"],
    styleTags: ["高颜值种草", "生活方式"],
    taskLedger: [
      { campaign: "MINISO 夏季新品内容合作", createdAt: "2026-06-01 09:00", platform: "Instagram", region: "美国 / 泰国", cooperationStatus: "履约中", flow: "报名→运营初审→广告主复审→内容提交", budget: "$1,200", deliverable: "已提交脚本 / 未提交视频", reviewStatus: "待运营审核", publishLink: "-", exposure: "-", likes: "-", interaction: "-", publishAt: "-", settlementStatus: "未到结算周期" },
      { campaign: "美妆新品春季种草", createdAt: "2026-02-14 18:00", platform: "Instagram", region: "美国", cooperationStatus: "已完成", flow: "报名→运营初审→广告主复审→内容提交→内容双审→发布确认", budget: "$1,400", deliverable: "已提交脚本 / 已提交视频", reviewStatus: "审核通过", publishLink: "instagram.com/p/luna88", exposure: "83K", likes: "8.8K", interaction: "7.6%", publishAt: "2026-02-27 21:20", settlementStatus: "已结算" },
      { campaign: "轻食饮品试饮计划", createdAt: "2025-12-20 12:20", platform: "Instagram", region: "泰国", cooperationStatus: "已取消", flow: "报名→运营初审→广告主复审", budget: "$1,000", deliverable: "未提交脚本 / 未提交视频", reviewStatus: "已驳回", publishLink: "-", exposure: "-", likes: "-", interaction: "-", publishAt: "-", settlementStatus: "未到结算周期" },
    ],
    deliverables: [
      { campaign: "MINISO 夏季新品内容合作", type: "图文", submittedAt: "2026-06-09 15:40", review: "待审核", rejectReason: "-", publishStatus: "未发布", effect: "-", action: "预览内容" },
      { campaign: "轻食饮品试饮计划", type: "脚本", submittedAt: "2025-12-28 10:00", review: "驳回", rejectReason: "品牌露出不足", publishStatus: "未发布", effect: "-", action: "预览内容" },
    ],
    quality: {
      responseTime: "平均 11.5 小时",
      deliveryCycle: "平均 6.8 天",
      overdueCount: "2 次",
      signupReject: "1 次 / 20%",
      opsReject: "2 次 / 品牌露出不足、封面风格不符、互动引导偏弱",
      brandReject: "1 次 / 卖点不突出、发布时间延后、素材重拍",
    },
    settlements: [
      { campaign: "美妆新品春季种草", quote: "$1,400", completedAt: "2026-02-27 21:20", cycle: "7 天曝光核算", billAt: "2026-03-06 09:30", status: "已结算", note: "已完成对账" },
      { campaign: "MINISO 夏季新品内容合作", quote: "$1,200", completedAt: "-", cycle: "7 天曝光核算", billAt: "-", status: "待结算", note: "等待内容发布确认" },
    ],
    communications: [
      { time: "2026-06-09 16:10", type: "系统消息", content: "达人已提交图文素材，等待平台审核。" },
      { time: "2026-06-09 18:00", type: "人工留言", content: "适合美妆类活动，但需加强对发布时间和脚本质量的跟进。" },
    ],
  },
  {
    name: "Tech Otto",
    uid: "@tech_otto",
    avatar: assets.talentAvatar4,
    platform: "Others",
    region: ["DE", "UK"],
    followers: "305.00万",
    categories: ["科技", "软件"],
    totalOrders: 0,
    validOrders: 0,
    completionRate: "0%",
    qualityTier: "C级较差",
    avgExposure: "9.80万",
    avgEngagement: "3.9%",
    avgClicks: "-",
    totalBudget: "$0",
    settledBudget: "$0",
    pendingSettlement: "$0",
    baseQuote: "$2,600",
    statusTags: ["历史合作"],
    hasActive: false,
    weakWarning: false,
    audienceGender: "男性 68.7%",
    audienceAge: "25-34",
    audienceCountries: ["DE", "UK"],
    formats: ["长视频", "切片"],
    styleTags: ["数码拆解", "硬件评测"],
    taskLedger: [],
    deliverables: [],
    quality: {
      responseTime: "-",
      deliveryCycle: "-",
      overdueCount: "0 次",
      signupReject: "0 次 / 0%",
      opsReject: "0 次 / -",
      brandReject: "0 次 / -",
    },
    settlements: [],
    communications: [
      { time: "2026-06-01 12:10", type: "人工留言", content: "暂未合作，先纳入科技类达人池观察。" },
    ],
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
    status: "待确认合作",
    tag: "核心游戏达人",
    applyReason: "受众与该活动高度匹配，可在 7 天内完成脚本、拍摄和发布，并提供 2 次修改。",
    statusClass: "pending",
    progress: "待确认合作",
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
    status: "待确认合作",
    tag: "潜力测评达人",
    applyReason: "擅长开箱测评与中长视频内容，可按品牌要求补充对比段落并引导转化。",
    statusClass: "pending",
    progress: "待确认合作",
    due: "2026-6-5",
    acceptTime: "2026-6-7 09:10:12",
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
    status: "待确认合作",
    tag: "高转化生活方式达人",
    applyReason: "近 30 天同类内容互动率高，可结合真实生活场景拍摄并强化产品露出。",
    statusClass: "pending",
    progress: "待确认合作",
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
    status: "待确认合作",
    tag: "零售种草达人",
    applyReason: "频道受众为高频购物人群，可提供清单式种草与价格对比，提高转化率。",
    statusClass: "pending",
    progress: "待确认合作",
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
    status: "待确认合作",
    tag: "运动户外达人",
    applyReason: "可用训练 vlog + 产品穿搭露出组合形式，保证自然植入与稳定曝光。",
    statusClass: "pending",
    progress: "待确认合作",
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
    tag: "头部游戏达人",
    statusClass: "running",
    progress: "内容制作中",
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
    tag: "美妆达人",
    statusClass: "running",
    progress: "待发布",
    due: "2026-6-11",
    note: "终稿已确认，等待达人发布日期。",
  },
  {
    creator: "Ava Glow",
    creatorId: "@ava.glow.daily",
    avatar: assets.creatorAvatarPending,
    platform: "TikTok",
    fans: "196.80万",
    contentTags: ["美妆", "香氛", "生活方式"],
    audienceRegion: { code: "US", name: "美国" },
    audienceGender: "女性 84.6%",
    audienceAge: "18-30 岁",
    recentVideo: "夏日随身香氛包开箱",
    avgViews: "36.4万",
    campaign: "MINISO 夏季新品内容合作",
    type: "视频",
    settlement: "固定价",
    price: "120",
    status: "进行中",
    tag: "生活方式达人",
    statusClass: "running",
    progress: "待审核",
    due: "2026-6-13",
    note: "达人已提交视频终稿，等待广告主确认或提出修改意见。",
    applyTime: "2026-6-7 10:20:00",
    approveTime: "2026-6-7 15:40:00",
    submitTime: "2026-6-12 18:40:00",
    platformReviewTime: "2026-6-12 20:10:00",
    deliverables: [
      {
        badge: "脚本终稿",
        title: "60 秒竖版脚本",
        desc: "已补充前 5 秒品牌露出，并加入香氛卖点与收纳场景说明。",
        meta: "提交于 2026-6-12 18:40 · v2",
        link: "https://docs.google.com/doc/miniso-script-v2",
        attachment: { name: "脚本对照稿_v2.pdf", size: "1.2MB" },
      },
      {
        badge: "视频终稿",
        title: "主视频 MP4",
        desc: "封面、口播与字幕已齐备，等待广告主确认后排期发布。",
        meta: "时长 00:58 · 1080 × 1920",
        link: "https://drive.google.com/file/d/miniso-video-final",
        attachment: { name: "视频预览版.mp4", size: "48MB" },
      },
      {
        badge: "发布文案",
        title: "Caption + Hashtag",
        desc: "#MINISO夏日香氛 #SummerEssentials #RoomRefresh",
        meta: "含品牌 @ 提及与落地页链接位",
        link: "https://docs.google.com/doc/miniso-caption",
      },
    ],
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
    status: "待审核",
    tag: "科技数码达人",
    statusClass: "pending",
    progress: "内容审核中",
    due: "2026-6-15",
    note: "已收齐素材包，品牌内部审核中。",
    deliverables: [
      {
        badge: "视频初稿",
        title: "15 分钟直播切片 MP4",
        desc: "围绕「幻影」手游核心玩法进行实机演示与讲解，前 30 秒突出画面表现力。",
        meta: "提交于 2026-6-14 16:20 · 时长 15:02",
        link: "https://drive.google.com/file/d/techotto-demo",
        attachment: { name: "直播切片_幻影_v1.mp4", size: "126MB" },
      },
    ],
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
    tag: "家居生活达人",
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
    tag: "购物推荐达人",
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
    tag: "户外直播达人",
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
    tags: ["游戏种草", "短视频", "剧情互动", "官方任务"],
    requirement: "粉丝数≥50万",
    region: "EN / UK / CN",
    budget: "$9,999",
    platform: "TikTok / INS",
    deadline: "2024/09/09",
    isOfficial: true,
    cover: "",
  },
  {
    name: "MINISO 夏季新品内容合作",
    tag: "购物与零售",
    tags: ["购物与零售", "种草", "生活方式"],
    requirement: "粉丝数≥20万",
    region: "UK",
    budget: "$2,000",
    platform: "TikTok",
    deadline: "2026/06/30",
    cover: "",
  },
  {
    name: "全境封锁2-上线活动",
    tag: "直播",
    tags: ["直播", "游戏", "开黑互动", "赛事热点"],
    requirement: "游戏创作者",
    region: "US / JP",
    budget: "$1,200",
    platform: "YouTube",
    deadline: "2026/06/20",
    cover: "",
  },
  {
    name: "Anker 充电配件新品推广",
    tag: "科技数码",
    tags: ["科技数码", "开箱", "长视频测评"],
    requirement: "粉丝数≥30万",
    region: "US / UK / DE / FR / IT / ES",
    budget: "$2,800",
    platform: "TikTok / YouTube",
    deadline: "2026/07/08",
    isOfficial: true,
    cover: "",
  },
  {
    name: "椰子水夏季饮品种草",
    tag: "食品饮料",
    tags: ["食品饮料", "生活方式", "短视频", "东南亚本地化"],
    requirement: "生活方式 / 美食达人",
    region: "SG / MY / TH / VN / ID / PH",
    budget: "$1,600",
    platform: "Instagram / TikTok",
    deadline: "2026/07/12",
    cover: "",
  },
];

const adminReviewHistoryRows = [
  {
    taskName: "MINISO 夏季新品内容合作",
    target: "MINISO 官方旗舰店",
    reviewType: "任务审核",
    result: "已通过",
    reviewer: "运营 · Amy",
    time: "2026-06-12 10:23",
    reason: "信息完整，符合平台投放规范。",
  },
  {
    taskName: "Anker 充电配件新品推广",
    target: "Anker",
    reviewType: "任务审核",
    result: "已拒绝",
    reviewer: "运营 · Jerry",
    time: "2026-06-12 14:08",
    reason: "缺少产品链接与补充素材，已退回广告主补充。",
  },
  {
    taskName: "MINISO 夏季新品内容合作",
    target: "达人报名审核 · Mika Studio",
    reviewType: "达人报名",
    result: "已通过",
    reviewer: "运营 · Amy",
    time: "2026-06-13 09:15",
    reason: "粉丝画像和内容方向符合 Brief。",
  },
  {
    taskName: "全境封锁2-上线活动",
    target: "达人报名审核 · Tech Otto",
    reviewType: "达人报名",
    result: "已拒绝",
    reviewer: "运营 · Leon",
    time: "2026-06-13 11:42",
    reason: "平台账号垂类不匹配，互动率低于招募要求。",
  },
  {
    taskName: "MINISO 夏季新品内容合作",
    target: "内容审核 · Nova Plays",
    reviewType: "内容审核",
    result: "已通过",
    reviewer: "运营 · Amy",
    time: "2026-06-14 16:20",
    reason: "品牌露出、口播与素材规范均符合要求。",
  },
  {
    taskName: "椰子水夏季饮品种草",
    target: "内容审核 · Daily Miki",
    reviewType: "内容审核",
    result: "已拒绝",
    reviewer: "运营 · Jerry",
    time: "2026-06-14 18:05",
    reason: "首屏露出不足，需补充饮用场景与 Hashtag。",
  },
];

const adminDeliverableReviewDetails = [
  {
    taskName: "MINISO 夏季新品内容合作",
    creator: "Mika Studio",
    platform: "TikTok",
    submittedAt: "2026-06-14 09:35",
    version: "v3 终稿",
    summary: "达人已提交脚本、视频终稿与发布文案，等待运营确认品牌露出、口播顺序与素材规范。",
    attachments: [
      { badge: "脚本", title: "60 秒短视频脚本", desc: "已补全前 5 秒品牌露出、产品卖点口播与结尾 CTA。", meta: "文件：MINISO_script_v3.docx" },
      { badge: "视频", title: "竖版终稿视频", desc: "1080 × 1920，时长 00:58，含字幕、Logo 与片尾落地页引导。", meta: "文件：MINISO_final_v3.mp4" },
      { badge: "文案", title: "Caption + Hashtag", desc: "#MINISO夏日新品 #RoomRefresh #SummerEssentials，含品牌 @ 提及。", meta: "文件：caption_v3.txt" },
    ],
  },
  {
    taskName: "椰子水夏季饮品种草",
    creator: "Daily Miki",
    platform: "TikTok",
    submittedAt: "2026-06-14 11:20",
    version: "v1 初稿",
    summary: "达人已提交首版视频与文案，当前重点核对首屏露出、饮用场景与 Hashtag 使用是否完整。",
    attachments: [
      { badge: "视频", title: "首版视频样片", desc: "展示开箱与饮用片段，但首屏品牌露出仍较弱，待审核决定是否退回修改。", meta: "文件：coconut_v1.mp4" },
      { badge: "文案", title: "发布说明", desc: "已提交短文案与话题标签，待确认是否补充饮用感受与品牌卖点表达。", meta: "文件：caption_v1.txt" },
    ],
  },
];

const adminCampaignFulfillmentRows = [
  {
    campaign: "MINISO 夏季新品内容合作",
    advertiser: "MINISO 官方旗舰店",
    platform: "TikTok",
    creator: "Mika Studio",
    creatorId: "MKTK-0192",
    cooperationStatus: "已确认合作",
    deliverableStatus: "内容审核中",
    operationReview: "已通过",
    brandReview: "审核中（待广告主确认）",
    publishStatus: "待发布",
    trackingStatus: "未开始",
    settlementStatus: "未结算",
    due: "2026-06-18",
  },
  {
    campaign: "MINISO 夏季新品内容合作",
    advertiser: "MINISO 官方旗舰店",
    platform: "YouTube",
    creator: "Nova Plays",
    creatorId: "MYTB-0241",
    cooperationStatus: "履约中",
    deliverableStatus: "待发布",
    operationReview: "已通过",
    brandReview: "已通过",
    publishStatus: "待发布",
    trackingStatus: "未开始",
    settlementStatus: "未结算",
    due: "2026-06-19",
  },
  {
    campaign: "MINISO 夏季新品内容合作",
    advertiser: "MINISO 官方旗舰店",
    platform: "TikTok",
    creator: "Daily Miki",
    creatorId: "MKTK-0308",
    cooperationStatus: "履约中",
    deliverableStatus: "效果追踪",
    operationReview: "已通过",
    brandReview: "已通过",
    publishStatus: "已发布",
    trackingStatus: "追踪中",
    settlementStatus: "待结算",
    due: "2026-06-12",
  },
  {
    campaign: "Anker 充电配件新品推广",
    advertiser: "Anker",
    platform: "YouTube",
    creator: "Tech Otto",
    creatorId: "AYTB-0128",
    cooperationStatus: "待广告主确认",
    deliverableStatus: "未开始",
    operationReview: "已通过",
    brandReview: "待确认",
    publishStatus: "-",
    trackingStatus: "-",
    settlementStatus: "-",
    due: "2026-07-08",
  },
];

const adminAdvertiserRows = [
  { name: "MINISO 官方旗舰店", contact: "王雨薇", email: "brand@miniso.com", companyScale: "500-2000人", industry: "购物与零售", region: "英国 / 德国 / 法国", activeTasks: 3, status: "正常", statusClass: "running", joinedAt: "2026-03-12 10:23:18" },
  { name: "Anker", contact: "Luna Chen", email: "marketing@anker.com", companyScale: "100-500人", industry: "科技数码", region: "美国 / 加拿大", activeTasks: 2, status: "正常", statusClass: "running", joinedAt: "2026-02-18 14:06:52" },
  { name: "椰子水饮品事业部", contact: "Mika Guo", email: "coco@drink.com", companyScale: "15-50人", industry: "食品饮料", region: "东南亚", activeTasks: 1, status: "停用", statusClass: "rejected", joinedAt: "2026-05-06 09:18:33" },
];

const adminAdvertiserCampaignRows = [
  { advertiser: "MINISO 官方旗舰店", name: "MINISO 夏季新品内容合作", platform: "TikTok / YouTube", creators: 3, published: 1, budget: "$8,000", status: "进行中", statusClass: "running", requirement: "≥200万粉丝", cooperationType: "定制视频-60秒" },
  { advertiser: "MINISO 官方旗舰店", name: "MINISO 英国开学季选品合作", platform: "TikTok", creators: 5, published: 2, budget: "$5,200", status: "招募中", statusClass: "pending", requirement: "≥50万粉丝", cooperationType: "短视频种草 / 开箱测评" },
  { advertiser: "Anker", name: "Anker 充电配件新品推广", platform: "YouTube", creators: 1, published: 0, budget: "$3,500", status: "待审核", statusClass: "pending", requirement: "≥30万粉丝", cooperationType: "长视频测评" },
];

const officialTaskRows = [
  { name: "官方任务：MINISO 夏季新品英国站招募", platform: "TikTok / YouTube", cooperationType: "全片 / 插片", applicants: 18, collaborators: 6, published: 2, budget: "$8,000", status: "招募中", statusClass: "pending", createdAt: "2026-06-14 20:00", region: "英国 / 德国 / 法国" },
  { name: "官方任务：Anker 北美开箱合作", platform: "YouTube", cooperationType: "开箱测评", applicants: 12, collaborators: 4, published: 1, budget: "$5,600", status: "进行中", statusClass: "running", createdAt: "2026-06-10 14:20", region: "美国 / 加拿大" },
  { name: "官方任务：椰子水东南亚饮品种草", platform: "TikTok", cooperationType: "短视频种草", applicants: 26, collaborators: 8, published: 8, budget: "$4,200", status: "已结束", statusClass: "done", createdAt: "2026-06-02 10:10", region: "新加坡 / 马来西亚 / 泰国" },
];

const adminInfluencerRows = [
  { avatar: assets.talentAvatar1, name: "Mika Studio", platform: "TikTok", tags: "游戏 / 测评 / 剧情短片", followers: "744.1万", status: "正常", statusClass: "running", advertiserCount: 3, advertisers: ["MINISO 官方旗舰店", "Anker", "平台官方"], taskCount: 6, tasks: ["MINISO 夏季新品内容合作", "Anker 充电配件新品推广", "官方任务：MINISO 夏季新品英国站招募"] },
  { avatar: assets.talentAvatar2, name: "Nova Plays", platform: "YouTube", tags: "科技数码 / 开箱 / 测评", followers: "161.1万", status: "正常", statusClass: "running", advertiserCount: 2, advertisers: ["MINISO 官方旗舰店", "平台官方"], taskCount: 4, tasks: ["MINISO 夏季新品内容合作", "官方任务：Anker 北美开箱合作"] },
  { avatar: assets.talentAvatar3, name: "Daily Miki", platform: "TikTok", tags: "家居生活 / 收纳 / 种草", followers: "82.4万", status: "停用", statusClass: "rejected", advertiserCount: 1, advertisers: ["椰子水饮品事业部"], taskCount: 2, tasks: ["椰子水夏季饮品种草"] },
  { avatar: assets.talentAvatar4, name: "Tech Otto", platform: "YouTube", tags: "科技数码 / 开箱 / 长视频", followers: "53.8万", status: "正常", statusClass: "running", advertiserCount: 1, advertisers: ["Anker"], taskCount: 3, tasks: ["Anker 充电配件新品推广"] },
];

const adminFulfillmentTimelineMap = {
  "MINISO 夏季新品内容合作::MKTK-0192": [
    { title: "报名通过", desc: "2026-06-10 09:20 运营通过达人报名，进入合作确认环节。" },
    { title: "确认合作", desc: "2026-06-11 14:35 达人确认合作，正式启动内容创作。" },
    { title: "提交初稿", desc: "2026-06-13 18:10 达人提交第一版短视频，进入平台合规审核环节。" },
    { title: "平台审核通过", desc: "2026-06-14 09:00 平台审核通过，内容流转至广告主侧审核。" },
    { title: "广告主审核中", desc: "2026-06-14 10:30 视频已提交广告主复核，等待广告主确认/反馈修改意见。" },
  ],
  "MINISO 夏季新品内容合作::MYTB-0241": [
    { title: "报名通过", desc: "2026-06-09 12:10 平台审核通过该达人报名。" },
    { title: "脚本确认", desc: "2026-06-11 16:00 广告主确认拍摄脚本与卖点。" },
    { title: "待发布", desc: "2026-06-15 19:30 内容通过审核，等待达人按排期发布。" },
  ],
  "MINISO 夏季新品内容合作::MKTK-0308": [
    { title: "报名通过", desc: "2026-06-07 08:30 进入正式合作。" },
    { title: "内容发布", desc: "2026-06-11 21:00 达人已完成发布，进入数据回流阶段。" },
    { title: "效果追踪", desc: "2026-06-13 10:20 已回传首轮曝光与互动数据。" },
  ],
  "Anker 充电配件新品推广::AYTB-0128": [
    { title: "报名通过", desc: "2026-06-10 11:10 平台审核通过达人报名。" },
    { title: "待广告主确认", desc: "2026-06-11 13:40 当前等待广告主确认最终合作名单。" },
  ],
};

const publishAreaGroups = [
  { area: "东南亚", countries: ["新加坡", "马来西亚", "泰国", "越南", "印度尼西亚", "菲律宾"] },
  { area: "大洋洲", countries: ["澳大利亚", "新西兰", "斐济", "关岛", "巴布亚新几内亚"] },
  { area: "欧洲", countries: ["英国", "德国", "法国", "意大利", "西班牙", "荷兰"] },
  { area: "北美", countries: ["美国", "加拿大", "墨西哥"] },
  { area: "东亚", countries: ["日本", "韩国", "中国香港", "中国台湾"] },
  { area: "南亚", countries: ["印度", "巴基斯坦", "孟加拉国"] },
  { area: "中东", countries: ["阿联酋", "沙特阿拉伯", "卡塔尔"] },
  { area: "非洲", countries: ["南非", "尼日利亚", "肯尼亚"] },
  { area: "独联体", countries: ["俄罗斯", "哈萨克斯坦", "乌兹别克斯坦"] },
];

const invitations = [
  {
    task: "全境封锁-全球活动",
    advertiser: "平台官方",
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
    advertiser: "平台官方",
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
    progress: "待提交产物",
    status: "合作中",
    statusClass: "running",
    timeline: [
      { time: "2026-06-05 10:59", title: "任务开始合作", detail: "已与广告主确认合作，等待下一步安排。", result: "确认合作" },
      { time: "2026-06-06 18:20", title: "广告主补充要求", detail: "补充了开场口播与产品露出要求。", result: "待提交产物" },
    ],
    finalStatus: "-",
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

const loginPageBannerRows = [
  { id: "banner-1", name: "图1", title: "官方任务与活动招募", size: "900 × 1500", status: "启用中", statusClass: "done", updatedAt: "2026-06-15 10:30", tone: "pink" },
  { id: "banner-2", name: "图2", title: "品牌合作与达人增长", size: "900 × 1500", status: "启用中", statusClass: "done", updatedAt: "2026-06-12 16:45", tone: "blue" },
  { id: "banner-3", name: "图3", title: "平台数据与履约管理", size: "900 × 1500", status: "备用", statusClass: "pending", updatedAt: "2026-06-10 09:20", tone: "orange" },
];

const payoutRows = [
  {
    id: "payout-1",
    campaign: "幻境之门（Gate of Mirage）TK推广",
    subtitle: "幻境之门（Gate of Mirage）",
    creator: "645644162",
    amount: "USD 0",
    account: "PAYPAL ••••.com",
    status: "已打款",
    statusClass: "done",
    note: "2026-06-11 已完成人工打款登记。",
  },
  {
    id: "payout-2",
    campaign: "飞行员2.0TK推广",
    subtitle: "飞行员2.0",
    creator: "645644162",
    amount: "USD 0",
    account: "PAYPAL ••••.com",
    status: "已打款",
    statusClass: "done",
    note: "2026-06-09 已完成人工打款登记。",
  },
  {
    id: "payout-3",
    campaign: "MINISO 夏季新品内容合作",
    subtitle: "MINISO 英国站项目",
    creator: "Mika Studio",
    amount: "USD 1,200",
    account: "PAYPAL mika@studio.com",
    status: "待打款",
    statusClass: "pending",
    note: "达人已完成履约，等待运营线下打款。",
    rejectReason: "",
  },
];

const pageRoot = document.getElementById("pageRoot");
const navList = document.getElementById("navList");
const modalRoot = document.getElementById("modalRoot");
const toastRoot = document.getElementById("toastRoot");
const globalSearch = document.getElementById("globalSearch");

function ensureRoleOptions() {
  const roleSwitch = document.querySelector(".role-switch");
  if (!roleSwitch || roleSwitch.querySelector('[data-role="operator"]')) return;
  roleSwitch.insertAdjacentHTML("beforeend", `<button class="role-option" data-role="operator">运营</button>`);
  roleSwitch.querySelectorAll(".role-option").forEach((btn) => {
    btn.removeEventListener?.("click", btn.__roleHandler || (() => {}));
    const handler = () => setRole(btn.dataset.role);
    btn.__roleHandler = handler;
    btn.addEventListener("click", handler);
  });
}

function renderTopbar() {
  const actions = document.querySelector(".topbar-actions");
  if (!actions) return;

  const langFlag = state.language === "en" ? assets.flagEN : assets.flagCN;
  const langLabel = state.language === "en" ? "English" : "中文";
  const roleAction =
    state.role === "brand"
      ? `<button class="primary-button" data-action="open-publish">+ 创建活动</button>`
      : state.role === "operator"
        ? `<button class="primary-button" data-nav="officialTaskCreate">+ 创建官方任务</button>`
        : `<button class="primary-button" data-nav="opportunityHall">查看机会大厅</button>`;
  const userLabel = state.role === "operator" ? "运营后台" : state.role === "creator" ? "达人工作台" : "广告主工作台";
  const unreadCount =
    state.role === "brand"
      ? state.brandNotifications.unreadCount
      : state.role === "creator"
        ? state.creatorNotifications.unreadCount
        : 0;
  const unreadLabel = unreadCount > 99 ? "99+" : String(unreadCount);

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

    <button class="icon-button topbar-icon ${unreadCount > 0 ? "has-notice" : ""}" data-action="open-notifications" aria-label="通知">
      🔔
      ${unreadCount > 0 ? `<span class="topbar-notice-badge" aria-label="${unreadLabel} 条未读通知">${unreadLabel}</span>` : ""}
    </button>
    ${roleAction}

    <div class="topbar-dropdown ${state.topbarMenu.userOpen ? "open" : ""}" data-dropdown-scope="user">
      <button class="ghost-button dropdown-trigger" data-action="toggle-user-menu" aria-label="账号菜单">
        <span class="avatar">MA</span>
        <span class="user-name">${userLabel}</span>
        <span class="caret" aria-hidden="true">▾</span>
      </button>
      <div class="dropdown-menu" data-dropdown="user">
        <button class="dropdown-item danger" data-action="logout">退出登录</button>
      </div>
    </div>
  `;
}

function isCreatorPage(page) {
  return creatorNav.some(([id]) => id === page) || ["taskDetail", "applications", "projectProgress", "notificationRecords"].includes(page);
}

function isOperatorPage(page) {
  return operatorNav.some(([id]) => id === page) || ["advertiserProfile", "advertiserCampaigns", "campaignFulfillment", "influencerDetailAdmin", "notificationRecords"].includes(page);
}

function getActiveNav() {
  if (state.role === "operator") return operatorNav;
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
  const first = role === "brand" ? "promotions" : role === "creator" ? "opportunityHall" : "adminDashboard";
  go(first);
}

function pageTitle(page = state.page) {
  return navLabels[page] || "Meetinfluencer";
}

function normalizePage(page) {
  return page;
}

function resolveOperatorRelatedPage(page = state.page) {
  if (["advertiserProfile", "advertiserCampaigns"].includes(page)) return "advertiserList";
  if (page === "influencerDetailAdmin") return "influencerListAdmin";
  return page;
}

function isGroupedNavItemActive(navItems, id, level) {
  const currentPage = state.role === "operator" ? resolveOperatorRelatedPage(state.page) : state.page === "myTalentProfile" ? "myTalents" : state.page;
  if (currentPage === id) return true;
  if (level === "child") return false;
  const currentIndex = navItems.findIndex(([navId]) => navId === id);
  if (currentIndex < 0) return false;
  for (let index = currentIndex + 1; index < navItems.length; index += 1) {
    const [childId, , , childLevel] = navItems[index];
    if (childLevel !== "child") break;
    if (currentPage === childId) return true;
  }
  return false;
}

function renderNav() {
  navList.innerHTML = getActiveNav()
    .map(
      ([id, label, icon, level, badge]) => `
        <button class="nav-item ${level === "child" ? "child" : ""} ${isGroupedNavItemActive(getActiveNav(), id, level) ? "active" : ""}" data-nav="${id}">
          <span class="nav-icon">${icon}</span>
          <span class="nav-label">${label}</span>
          ${badge ? `<span class="nav-badge">${badge}</span>` : ""}
        </button>
      `,
    )
    .join("");
}

function renderShellState() {
  ensureRoleOptions();
  state.role = isOperatorPage(state.page) ? "operator" : isCreatorPage(state.page) ? "creator" : "brand";
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
          <div class="metric-card ${item.nav ? "clickable" : ""}" ${item.nav ? `data-nav="${item.nav}"` : ""}>
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

function resetTalentSearchFilters() {
  state.talentSearchFilters = {
    ...state.talentSearchFilters,
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
  };
}

function renderTalentSelectedConditions() {
  const f = state.talentSearchFilters;
  const items = [
    ["platform", "平台", f.platform],
    ["region", "国家/地区", f.region],
    ["followerCount", "粉丝数", f.followerCount],
    ["followerGender", "粉丝性别", f.followerGender],
    ["followerAge", "粉丝年龄", f.followerAge],
    ["recent28", "近28天涨粉数", f.recent28],
    ["priceRange", "报价范围", f.priceRange],
    ["engagement", "互动率", f.engagement],
    ["category", "达人分类", f.category],
    ["contract", "收藏状态", f.contract],
  ].filter(([, , value]) => value && value !== "全部");

  return `
    <div class="selected-filter-row">
      <div class="selected-filter-label">已选条件：</div>
      <div class="selected-filter-chips">
        ${
          items.length
            ? items
                .map(
                  ([key, label, value]) => `
                    <button class="selected-filter-chip" data-action="remove-talent-selected-filter" data-filter-key="${key}" type="button">
                      <span>${label}：${value}</span>
                      <span class="selected-filter-x" aria-hidden="true">×</span>
                    </button>
                  `,
                )
                .join("")
            : `<span class="selected-filter-empty">暂无筛选条件</span>`
        }
      </div>
      <button class="selected-filter-clear" data-action="clear-talent-selected-filters" ${items.length ? "" : "disabled"} type="button">全部清除</button>
    </div>
  `;
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
          <p>在活动管理页，可查看任务状态、合作达人交付进度，全程把控合作履约情况</p>
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
  const countryFlagMap = { US: "🇺🇸", UK: "🇬🇧", JP: "🇯🇵", CN: "🇨🇳", TH: "🇹🇭", MY: "🇲🇾", ID: "🇮🇩" };
  const countryView = (value = "") => {
    const code = String(value).split("/")[0]?.trim() || "-";
    return `<span class="country-one">${countryFlagMap[code] || "🏳️"} ${code}</span>`;
  };
  return source
    .filter((row) => !q || JSON.stringify(row).toLowerCase().includes(q))
    .map(
      (row) => `
      <tr>
        <td><input type="checkbox" aria-label="选择 ${row.name}" /></td>
        <td>
          <div class="row-title">
            <button class="avatar-button" data-action="drawer-creator" data-name="${row.name}" aria-label="查看 ${row.name} 达人档案">
              <img src="${row.avatar || assets.creatorPreview}" alt="" />
            </button>
            <span><strong>${row.name}</strong><small>${row.platform} · ${row.category}</small></span>
          </div>
        </td>
        <td>${countryView(row.country)}</td>
        <td>${row.gender}</td>
        <td>${row.fans}</td>
        <td>${row.age}</td>
        <td>${row.recent}</td>
        <td>${row.avgViews}</td>
        <td>${row.price || "-"}</td>
        <td>
          <div class="actions talent-row-actions">
            <button class="icon-link-button ${row.contract === "已收藏" ? "active" : ""}" data-action="toggle-talent-favorite" data-name="${encodeURIComponent(row.name)}" title="${row.contract === "已收藏" ? "取消收藏" : "收藏"}" aria-label="${row.contract === "已收藏" ? "取消收藏" : "收藏"}">${row.contract === "已收藏" ? "♥" : "♡"}</button>
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
              <td>
                ${
                  row.applyReason
                    ? `<div class="reason-cell"><span class="reason-text" title="${row.applyReason}">${row.applyReason}</span><button class="inline-link" data-action="open-reason" data-reason="${encodeURIComponent(row.applyReason)}">查看</button></div>`
                    : "-"
                }
              </td>
              <td>${row.acceptTime || "-"}</td>
              <td>${row.settlement}</td>
              <td class="money">${row.price}</td>
              <td>${status("申请报名", "pending")}</td>
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
                <td>${row.progress === "待确认合作" ? "合作中" : row.progress}</td>
                <td>${row.note || "-"}</td>
                <td>
                  <div class="actions">
                    <button class="link-button" data-action="drawer-delivery" data-creator="${encodeURIComponent(row.creatorId || row.creator)}">查看详情</button>
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
                    <button class="link-button" data-action="drawer-delivery" data-creator="${encodeURIComponent(row.creatorId || row.creator)}">查看详情</button>
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
    .filter((row) => ["进行中", "待审核", "已发布"].includes(row.status))
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
            <button class="link-button" data-action="drawer-delivery" data-creator="${encodeURIComponent(row.creatorId || row.creator)}">查看详情</button>
          </div>
        </td>
      </tr>
    `,
    )
    .join("");
}

function applicationRows() {
  return applicationRecords
    .map((row) => {
      const statusView = applicationStatusView(row.statusKey);
      return `
        <tr>
          <td><strong>${row.task}</strong></td>
          <td>${row.account}</td>
          <td>${row.reason}</td>
          <td>${status(statusView.label, statusView.cls)}</td>
          <td>${row.feedbackTime}</td>
          <td>${row.note}</td>
          <td><button class="link-button" data-action="open-task-detail" data-task="${encodeURIComponent(row.task)}" data-status="${row.statusKey}">查看任务</button></td>
        </tr>
      `;
    })
    .join("");
}

function invitationRows() {
  const tab = state.tabs.invitations;
  const visible = invitations.filter((row) => {
    if (tab === "pending") return row.status === "待接单";
    if (tab === "accepted") return row.status === "已合作";
    return true;
  });
  return visible
    .filter((row) => !state.invitationFilters.keyword || row.task.includes(state.invitationFilters.keyword))
    .filter((row) => state.invitationFilters.type === "全部" || row.type === state.invitationFilters.type)
    .map(
      (row) => `
      <tr>
        <td><button class="inline-link" data-action="open-task-detail" data-task="${encodeURIComponent(row.task)}"><strong>${row.task}</strong></button></td>
        <td>${row.time}</td>
        <td>${row.type}</td>
        <td>${row.settlement}</td>
        <td class="money">${row.quote}</td>
        <td>${row.publish}</td>
        <td>${status(row.status, row.statusClass)}</td>
        <td>
          <div class="actions">
            ${
              row.status === "待接单"
                ? `<button class="link-button" data-action="accept-invite" data-task="${encodeURIComponent(row.task)}">确认</button><button class="link-button" data-action="reject-invite" data-task="${encodeURIComponent(row.task)}">拒绝</button>`
                : `<span class="muted">-</span>`
            }
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
        <td><button class="inline-link" data-action="open-task-detail" data-task="${encodeURIComponent(row.task)}"><strong>${row.task}</strong></button><br /><span class="muted">${row.start}</span></td>
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
      "活动创建",
      "创建活动",
      "一页完成推广信息、达人要求和投放预算配置。多平台活动可分别设置要求与预算。",
      `<button class="secondary-button" data-nav="promotions">返回活动管理</button>`,
    )}
    <div class="publish-page-form">
      ${renderPublishOnePageForm()}
      <div class="panel publish-page-actions">
        <button class="ghost-button" data-action="toast" data-message="草稿已保存">保存草稿</button>
        <button class="primary-button" data-action="submit-publish">确认发布</button>
      </div>
    </div>
    ${state.publishDraft.matchDrawerOpen ? renderPublishMatchDrawer() : ""}
  `;
}

function renderPublishOnePageForm() {
  const draft = state.publishDraft;
  ensurePublishDraftPlatforms();
  const matchReady = canOpenPublishMatch();
  const publishPlatforms = [
    { name: "TikTok", logo: assets.tiktokLogo },
    { name: "YouTube", logo: assets.youtubeLogo },
    { name: "Twitch", logo: assets.twitchLogo },
    { name: "Instagram", logo: assets.instagramLogo },
  ];
  const platformLogos = Object.fromEntries(publishPlatforms.map((item) => [item.name, item.logo]));
  const creatorTypeOptions = ["购物与零售", "游戏", "美妆", "运动户外", "理财与投资", "软件与应用", "食品饮料", "科技数码", "生活方式", "测评"];
  const cooperationTypeOptions = ["全片", "插片", "直播", "长视频", "Shorts", "社区post", "素材授权"];
  const settlementCycleOptions = ["按7天实际曝光量结算", "按3天实际曝光量结算", "按14天实际曝光量结算"];

  const chipsView = (items, removeAction, limit = 8, logos = {}) => {
    const visible = items.slice(0, limit);
    const hidden = Math.max(0, items.length - visible.length);
    return `
      <div class="ms-chips">
        ${visible
          .map(
            (x) => `
            <span class="ms-chip">
              ${logos[x] ? `<img class="ms-chip-logo" src="${logos[x]}" alt="" />` : ""}
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

  return `
    <section class="panel publish-section-card">
      <div class="publish-section-head">
        <div>
          <h2>推广信息</h2>
          <p class="subcopy">先定义活动基础信息。平台和地区可多选。</p>
        </div>
      </div>
      <div class="form-grid">
        ${field("活动名称", `<input class="input" maxlength="200" placeholder="请输入活动名称" value="${draft.campaignName || ""}" data-publish-field="campaignName" />`, true, "with-counter")}
        ${field(
          "推广平台",
          `
          <div class="multi-select-input ${draft.platformMenuOpen ? "open" : ""}" data-ms-scope="publish-platform">
            <div class="ms-trigger" role="button" tabindex="0" data-action="toggle-publish-platform-menu" aria-expanded="${draft.platformMenuOpen ? "true" : "false"}">
              ${draft.platforms.length ? chipsView(draft.platforms, "remove-publish-platform", 6, platformLogos) : `<span class="ms-placeholder">请选择推广平台</span>`}
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
              ${draft.countries.length ? chipsView(draft.countries, "remove-publish-country", 6) : `<span class="ms-placeholder">请选择推广国家/地区</span>`}
              <span class="ms-caret" aria-hidden="true">▾</span>
            </div>
            <div class="dropdown-menu ms-menu">
              ${publishAreaGroups
                .map(
                  (group) => `
                  <div class="publish-area-group">
                    <label class="dropdown-check publish-area-parent">
                      <input type="checkbox" ${draft.areas.includes(group.area) ? "checked" : ""} data-action="toggle-publish-area" data-value="${encodeURIComponent(group.area)}" />
                      <span>${group.area}</span>
                    </label>
                    <div class="publish-area-children">
                      ${group.countries
                        .map(
                          (country) => `
                          <label class="dropdown-check publish-area-child">
                            <input type="checkbox" ${draft.countries.includes(country) ? "checked" : ""} data-action="toggle-publish-country" data-value="${encodeURIComponent(country)}" data-area="${encodeURIComponent(group.area)}" />
                            <span>${country}</span>
                          </label>
                        `,
                        )
                        .join("")}
                    </div>
                  </div>
                `,
                )
                .join("")}
            </div>
          </div>
        `,
          true,
        )}
        ${field("推广产品", `<input class="input" placeholder="请输入产品名称" value="${draft.productName || ""}" data-publish-field="productName" />`, true)}
        ${field("产品链接", `<input class="input" placeholder="请输入产品链接" value="${draft.productLink || ""}" data-publish-field="productLink" />`)}
        ${field("产品描述", `<textarea class="textarea" placeholder="请输入产品描述" data-publish-field="productDesc">${draft.productDesc || ""}</textarea>`, false, "full")}
        ${field("产品图片 / 附件", `<button class="ghost-button" data-action="toast" data-message="文件已加入上传队列">+ 上传文件</button><small class="muted">支持 PDF、PNG、JPG、JPEG，10M 以内</small>`, false, "full")}
      </div>
    </section>

    <section class="panel publish-section-card">
      <div class="publish-section-head">
        <div>
          <h2>按平台配置达人要求与预算</h2>
          <p class="subcopy">不同平台的内容形式、粉丝门槛和预算可分别设置，便于后续精准匹配达人。</p>
        </div>
      </div>
      <div class="publish-platform-config-list">
        ${draft.platforms
          .map((platform, index) => {
            const config = draft.platformConfigs[platform] || defaultPublishPlatformConfig(platform);
            const statusInfo = publishPlatformConfigStatus(config);
            return `
              <article class="publish-platform-config-card">
                <div class="publish-platform-config-head">
                  <div>
                    <h3>${platformLogos[platform] ? `<img src="${platformLogos[platform]}" alt="" />` : ""}${platform}</h3>
                    <span class="publish-status ${statusInfo.cls}">${statusInfo.text}</span>
                  </div>
                  ${
                    index > 0
                      ? `<button class="ghost-button" data-action="copy-previous-platform-requirements" data-platform="${platform}">沿用上一平台要求</button>`
                      : ""
                  }
                </div>
                <div class="form-grid">
                  ${field(
                    "达人粉丝数量",
                    `<div class="money-range">
                      <input class="input" placeholder="最低(K)" value="${config.followerMinK || ""}" data-platform-name="${platform}" data-platform-field="followerMinK" />
                      <span class="money-range-sep">—</span>
                      <input class="input" placeholder="最高(K)" value="${config.followerMaxK || ""}" data-platform-name="${platform}" data-platform-field="followerMaxK" />
                      <span class="money-suffix">K</span>
                    </div>`,
                    true,
                  )}
                  ${field("合作达人数量", `<input class="input" placeholder="请输入人数" value="${config.creatorCount || ""}" data-platform-name="${platform}" data-platform-field="creatorCount" />`, true)}
                  ${field(
                    "达人标签",
                    `
                    <div class="multi-select-input ${draft.creatorTypeMenuOpen && draft.creatorTagMenuPlatform === platform ? "open" : ""}" data-ms-scope="publish-creator-tags">
                      <div class="ms-trigger" role="button" tabindex="0" data-action="toggle-publish-creator-types" data-platform="${platform}" aria-expanded="${draft.creatorTypeMenuOpen && draft.creatorTagMenuPlatform === platform ? "true" : "false"}">
                        ${
                          (config.creatorTypes || []).length
                            ? `<div class="ms-chips">${(config.creatorTypes || [])
                                .slice(0, 6)
                                .map(
                                  (item) => `
                                  <span class="ms-chip">
                                    <span>${item}</span>
                                    <span class="ms-chip-x" role="button" tabindex="0" data-action="remove-platform-creator-type" data-platform="${platform}" data-value="${encodeURIComponent(item)}" aria-label="移除 ${item}">×</span>
                                  </span>
                                `,
                                )
                                .join("")}</div>`
                            : `<span class="ms-placeholder">请选择达人标签</span>`
                        }
                        <span class="ms-caret" aria-hidden="true">▾</span>
                      </div>
                      <div class="dropdown-menu ms-menu">
                        ${creatorTypeOptions
                          .map(
                            (item) => `
                            <label class="dropdown-check">
                              <input type="checkbox" ${(config.creatorTypes || []).includes(item) ? "checked" : ""} data-action="toggle-platform-creator-type" data-platform="${platform}" data-value="${encodeURIComponent(item)}" />
                              <span>${item}</span>
                            </label>
                          `,
                          )
                          .join("")}
                      </div>
                    </div>
                    `,
                    true,
                    "full",
                  )}
                  ${field(
                    "合作类型",
                    `<div class="chips platform-config-chips">${cooperationTypeOptions
                      .map(
                        (item) =>
                          `<button class="chip ${(config.cooperationTypes || []).includes(item) ? "active" : ""}" data-action="toggle-platform-cooperation-type" data-platform="${platform}" data-value="${encodeURIComponent(item)}">${item}</button>`,
                      )
                      .join("")}</div>`,
                    true,
                    "full",
                  )}
                  ${field("内容要求", `<textarea class="textarea" placeholder="请填写 ${platform} 内容要求" data-platform-name="${platform}" data-platform-field="contentRequirement">${config.contentRequirement || ""}</textarea>`, true, "full")}
                  ${field(
                    "平台预算",
                    `<div class="money-single">
                      <input class="input" placeholder="请输入预算" value="${config.platformBudget || ""}" data-platform-name="${platform}" data-platform-field="platformBudget" />
                      <span class="money-suffix">USD</span>
                    </div>`,
                    true,
                  )}
                  ${field(
                    "单人单价",
                    `<div class="money-range">
                      <input class="input" placeholder="最低" value="${config.unitPriceMin || ""}" data-platform-name="${platform}" data-platform-field="unitPriceMin" />
                      <span class="money-range-sep">—</span>
                      <input class="input" placeholder="最高" value="${config.unitPriceMax || ""}" data-platform-name="${platform}" data-platform-field="unitPriceMax" />
                      <span class="money-suffix">USD</span>
                    </div>`,
                    false,
                  )}
                  ${field(
                    "结算方式",
                    `<select class="select" data-platform-name="${platform}" data-platform-field="settlement">
                      <option value="固定价" ${config.settlement === "固定价" ? "selected" : ""}>固定价</option>
                      <option value="固定CPM" ${config.settlement === "固定CPM" ? "selected" : ""}>固定CPM</option>
                      <option value="按曝光量区间现金结算" ${config.settlement === "按曝光量区间现金结算" ? "selected" : ""}>按曝光量区间现金结算</option>
                    </select>`,
                    true,
                  )}
                  ${field(
                    "结算周期",
                    `<select class="select" data-platform-name="${platform}" data-platform-field="settlementCycle">
                      ${settlementCycleOptions.map((item) => `<option value="${item}" ${config.settlementCycle === item ? "selected" : ""}>${item}</option>`).join("")}
                    </select>`,
                  )}
                  ${field(
                    "期望效果",
                    `<select class="select" data-publish-field="expectedEffect">
                      <option value="曝光" ${draft.expectedEffect === "曝光" ? "selected" : ""}>曝光</option>
                      <option value="点击" ${draft.expectedEffect === "点击" ? "selected" : ""}>点击</option>
                      <option value="转化" ${draft.expectedEffect === "转化" ? "selected" : ""}>转化</option>
                    </select>`,
                    true,
                  )}
                  ${field("预估效果", `<input class="input" value="${draft.estimatedEffect || ""}" placeholder="80K" data-publish-field="estimatedEffect" />`)}
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
      <div class="form-grid" style="margin-top:12px">
        ${field("达人报名时间", `<input class="input" value="${draft.registrationRange || ""}" placeholder="2026-06-11 ~ 2026-06-20" data-publish-field="registrationRange" />`)}
        ${field("项目截至日期", `<input class="input" value="${draft.projectDeadline || ""}" placeholder="2026-06-30" data-publish-field="projectDeadline" />`, true)}
      </div>
    </section>

    <section class="panel publish-section-card">
      <div class="publish-section-head">
        <div>
          <h2>交付信息</h2>
        </div>
      </div>
      <div class="form-grid">
        ${field("参考链接", `<input class="input" placeholder="请输入素材、脚本或参考内容链接" value="${draft.requirementLink || ""}" data-publish-field="requirementLink" />`, false, "full")}
        ${field("附件", `<button class="ghost-button" data-action="toast" data-message="附件已加入上传队列">+ 上传附件</button><small class="muted">支持 PDF、PNG、JPG、JPEG，10M 以内</small>`, false, "full")}
      </div>
    </section>

    <section class="panel publish-section-card publish-match-section">
      <div class="publish-section-head">
        <div>
          <h2>匹配达人</h2>
          <p class="subcopy">${matchReady ? "必填信息已完整，可以查看系统匹配的达人列表。" : "请先填写完整必填信息，再查看匹配达人。"}</p>
        </div>
        <button class="secondary-button" data-action="open-publish-match-drawer" ${matchReady ? "" : "disabled"}>查看匹配达人</button>
      </div>
    </section>
  `;
}

function defaultPublishPlatformConfig(platformName = "") {
  return {
    creatorCount: "",
    followerMinK: "",
    followerMaxK: "",
    creatorTypes: [],
    cooperationTypes: [],
    contentRequirement: "",
    platformBudget: "",
    unitPriceMin: "",
    unitPriceMax: "",
    settlement: "固定价",
    settlementCycle: "按7天实际曝光量结算",
    platformName,
  };
}

function ensurePublishDraftPlatforms() {
  const draft = state.publishDraft;
  if (!Array.isArray(draft.platforms) || draft.platforms.length === 0) draft.platforms = ["TikTok"];
  if (!draft.platformConfigs) draft.platformConfigs = {};
  draft.platforms.forEach((platform) => {
    if (!draft.platformConfigs[platform]) draft.platformConfigs[platform] = defaultPublishPlatformConfig(platform);
  });
  Object.keys(draft.platformConfigs).forEach((key) => {
    if (!draft.platforms.includes(key)) delete draft.platformConfigs[key];
  });
  if (!draft.activePlatform || !draft.platforms.includes(draft.activePlatform)) {
    draft.activePlatform = draft.platforms[0];
  }
}

function publishPlatformConfigStatus(config) {
  if (!config) return { text: "未配置", cls: "empty" };
  const requiredCount = 5;
  const doneCount = [
    config.followerMinK && config.followerMaxK,
    config.creatorTypes && config.creatorTypes.length,
    config.cooperationTypes && config.cooperationTypes.length,
    config.contentRequirement && config.contentRequirement.trim(),
    config.platformBudget,
  ].filter(Boolean).length;
  if (doneCount === 0) return { text: "未配置", cls: "empty" };
  if (doneCount < requiredCount) return { text: "待补充", cls: "pending" };
  return { text: "已完成", cls: "done" };
}

function canOpenPublishMatch() {
  const draft = state.publishDraft;
  ensurePublishDraftPlatforms();
  const baseReady = [
    draft.campaignName && draft.campaignName.trim(),
    draft.platforms && draft.platforms.length,
    draft.countries && draft.countries.length,
    draft.productName && draft.productName.trim(),
    draft.registrationRange && draft.registrationRange.trim(),
    draft.projectDeadline && draft.projectDeadline.trim(),
    draft.expectedEffect && draft.expectedEffect.trim(),
  ].every(Boolean);
  const platformReady = draft.platforms.every((platform) => publishPlatformConfigStatus(draft.platformConfigs[platform]).cls === "done");
  return baseReady && platformReady;
}

function getPublishAreaGroup(area = "") {
  return publishAreaGroups.find((group) => group.area === area);
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
  const publishPlatformLogos = Object.fromEntries(publishPlatforms.map((item) => [item.name, item.logo]));
  const publishAreas = publishAreaGroups;
  const productTypeOptions = ["实物商品", "虚拟商品", "应用/软件", "服务体验", "品牌活动"];
  const creatorTypeOptions = ["购物与零售", "游戏", "美妆", "运动户外", "理财与投资", "软件与应用", "食品饮料", "科技数码", "生活方式", "测评"];
  const cooperationTypeOptions = ["全片", "插片", "直播", "长视频", "Shorts", "社区post", "素材授权"];
  const settlementCycleOptions = ["按7天实际曝光量结算", "按3天实际曝光量结算", "按14天实际曝光量结算"];

  ensurePublishDraftPlatforms();
  const activePlatform = draft.activePlatform;
  const activeConfig = draft.platformConfigs[activePlatform] || defaultPublishPlatformConfig(activePlatform);

  const chipsView = (items, removeAction, limit = 8, logos = {}) => {
    const visible = items.slice(0, limit);
    const hidden = Math.max(0, items.length - visible.length);
    return `
      <div class="ms-chips">
        ${visible
          .map(
            (x) => `
            <span class="ms-chip">
              ${logos[x] ? `<img class="ms-chip-logo" src="${logos[x]}" alt="" />` : ""}
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

  const platformTabs = `
    <div class="publish-platform-tabs">
      ${draft.platforms
        .map((platform) => {
          const statusInfo = publishPlatformConfigStatus(draft.platformConfigs[platform]);
          return `
            <button class="publish-platform-tab ${platform === activePlatform ? "active" : ""}" data-action="select-publish-platform-tab" data-platform="${platform}">
              ${publishPlatformLogos[platform] ? `<img src="${publishPlatformLogos[platform]}" alt="" />` : ""}
              <span>${platform}</span>
              <em class="publish-status ${statusInfo.cls}">${statusInfo.text}</em>
            </button>
          `;
        })
        .join("")}
    </div>
  `;

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
          ${field("活动名称", `<input class="input" maxlength="200" placeholder="请输入活动名称" value="${draft.campaignName || ""}" data-publish-field="campaignName" />`, true, "with-counter")}
          ${field(
            "推广平台",
            `
            <div class="multi-select-input ${draft.platformMenuOpen ? "open" : ""}" data-ms-scope="publish-platform">
              <div class="ms-trigger" role="button" tabindex="0" data-action="toggle-publish-platform-menu" aria-expanded="${draft.platformMenuOpen ? "true" : "false"}">
                ${
                  draft.platforms.length
                    ? chipsView(draft.platforms, "remove-publish-platform", 6, publishPlatformLogos)
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
                    ? chipsView(draft.countries, "remove-publish-country", 6)
                    : `<span class="ms-placeholder">请选择推广国家/地区</span>`
                }
                <span class="ms-caret" aria-hidden="true">▾</span>
              </div>
              <div class="dropdown-menu ms-menu">
                ${publishAreas
                  .map(
                    (group) => `
                    <div class="publish-area-group">
                      <label class="dropdown-check publish-area-parent">
                        <input type="checkbox" ${draft.areas.includes(group.area) ? "checked" : ""} data-action="toggle-publish-area" data-value="${encodeURIComponent(group.area)}" />
                        <span>${group.area}</span>
                      </label>
                      <div class="publish-area-children">
                        ${group.countries
                          .map(
                            (country) => `
                            <label class="dropdown-check publish-area-child">
                              <input type="checkbox" ${draft.countries.includes(country) ? "checked" : ""} data-action="toggle-publish-country" data-value="${encodeURIComponent(country)}" data-area="${encodeURIComponent(group.area)}" />
                              <span>${country}</span>
                            </label>
                          `,
                          )
                          .join("")}
                      </div>
                    </div>
                  `,
                  )
                  .join("")}
              </div>
            </div>
          `,
            true,
          )}
          ${field("推广产品", `<input class="input" placeholder="请输入产品名称" value="${draft.productName || ""}" data-publish-field="productName" />`, true)}
          ${field("产品链接", `<input class="input" placeholder="请输入产品链接" value="${draft.productLink || ""}" data-publish-field="productLink" />`)}
          ${field("产品描述", `<textarea class="textarea" placeholder="请输入产品描述" data-publish-field="productDesc">${draft.productDesc || ""}</textarea>`, false, "full")}
          ${field("产品图片 / 附件", `<button class="ghost-button" data-action="toast" data-message="文件已加入上传队列">+ 上传文件</button><small class="muted">支持 PDF、PNG、JPG、JPEG，10M 以内</small>`, false, "full")}
        </div>
      `
      : step === 1
        ? `
          <div class="publish-page-stack">
            ${platformTabs}
            <section class="publish-section-card">
              <div class="publish-section-head">
                <div>
                  <h3>${activePlatform} 达人要求</h3>
                </div>
                <div class="publish-toolbar">
                  ${
                    draft.platforms.indexOf(activePlatform) > 0
                      ? `<button class="ghost-button" data-action="copy-previous-platform-requirements">沿用上一个平台要求</button>`
                      : ``
                  }
                </div>
              </div>
              <div class="form-grid">
                ${field(
                  "达人粉丝数量",
                  `<div class="range-popover-field ${draft.followerPopoverOpen ? "open" : ""}">
                    <button class="input range-display" data-action="toggle-publish-followers" type="button">${activeConfig.followerMinK && activeConfig.followerMaxK ? `${activeConfig.followerMinK}K - ${activeConfig.followerMaxK}K` : "请选择粉丝数量范围"}</button>
                    <div class="range-popover">
                      <div class="money-range">
                        <input class="input" placeholder="最低(K)" value="${activeConfig.followerMinK || ""}" data-platform-field="followerMinK" />
                        <span class="money-range-sep">—</span>
                        <input class="input" placeholder="最高(K)" value="${activeConfig.followerMaxK || ""}" data-platform-field="followerMaxK" />
                        <span class="money-suffix">K</span>
                      </div>
                    </div>
                  </div>`,
                  true,
                )}
                ${field("合作达人数量", `<input class="input" placeholder="请填写合作达人数量" value="${activeConfig.creatorCount || ""}" data-platform-field="creatorCount" />`, true)}
                ${field(
                  "达人标签",
                  `
                  <div class="multi-select-input ${draft.creatorTypeMenuOpen ? "open" : ""}" data-ms-scope="publish-creator-tags">
                    <div class="ms-trigger" role="button" tabindex="0" data-action="toggle-publish-creator-types" aria-expanded="${draft.creatorTypeMenuOpen ? "true" : "false"}">
                      ${
                        (activeConfig.creatorTypes || []).length
                          ? chipsView(activeConfig.creatorTypes, "remove-platform-creator-type", 6)
                          : `<span class="ms-placeholder">请选择达人标签</span>`
                      }
                      <span class="ms-caret" aria-hidden="true">▾</span>
                    </div>
                    <div class="dropdown-menu ms-menu">
                      ${creatorTypeOptions
                        .map(
                          (item) => `
                          <label class="dropdown-check">
                            <input type="checkbox" ${(activeConfig.creatorTypes || []).includes(item) ? "checked" : ""} data-action="toggle-platform-creator-type" data-value="${encodeURIComponent(item)}" />
                            <span>${item}</span>
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
                  "合作类型",
                  `<select class="select" data-platform-field="cooperationTypeSingle">
                    <option value="">请选择合作类型</option>
                    ${cooperationTypeOptions.map((item) => `<option value="${item}" ${(activeConfig.cooperationTypes || [])[0] === item ? "selected" : ""}>${item}</option>`).join("")}
                  </select>`,
                  true,
                  "full",
                )}
                ${field("内容要求", `<textarea class="textarea" placeholder="请填写内容要求" data-platform-field="contentRequirement">${activeConfig.contentRequirement || ""}</textarea>`, true, "full")}
                ${field("链接", `<input class="input" placeholder="请输入素材、脚本或参考内容链接" value="${draft.requirementLink || ""}" data-publish-field="requirementLink" />`, false, "full")}
                ${field("附件", `<button class="ghost-button" data-action="toast" data-message="附件已加入上传队列">+ 上传附件</button><small class="muted">支持 PDF、PNG、JPG、JPEG，10M 以内</small>`, false, "full")}
                ${field("达人报名时间", `<input class="input" value="${draft.registrationRange || ""}" placeholder="2026-06-11 ~ 2026-06-20" data-publish-field="registrationRange" />`)}
                ${field("项目截至日期", `<input class="input" value="${draft.projectDeadline || ""}" placeholder="2026-06-30" data-publish-field="projectDeadline" />`, true)}
              </div>
            </section>
          </div>
        `
        : `
          <div class="publish-page-stack">
            ${platformTabs}
            <section class="publish-section-card">
              <div class="publish-section-head">
                <div>
                  <h3>${activePlatform} 平台预算与结算</h3>
                  <p class="subcopy">按平台分别设置预算、单价与结算规则。</p>
                </div>
                <div class="publish-toolbar">
                  <button class="ghost-button" data-action="copy-current-budget-all">同步到所有平台</button>
                </div>
              </div>
              <div class="form-grid">
                ${field(
                  "平台预算",
                  `<div class="money-single">
                    <input class="input" placeholder="请输入平台预算" value="${activeConfig.platformBudget || ""}" data-platform-field="platformBudget" />
                    <span class="money-suffix">USD</span>
                  </div>`,
                  true,
                )}
                ${field(
                  "单人单价",
                  `<div class="money-range">
                    <input class="input" placeholder="最低" value="${activeConfig.unitPriceMin || ""}" data-platform-field="unitPriceMin" />
                    <span class="money-range-sep">—</span>
                    <input class="input" placeholder="最高" value="${activeConfig.unitPriceMax || ""}" data-platform-field="unitPriceMax" />
                    <span class="money-suffix">USD</span>
                  </div>`,
                  false,
                )}
                ${field(
                  "结算方式",
                  `<select class="select" data-platform-field="settlement">
                    <option value="固定价" ${activeConfig.settlement === "固定价" ? "selected" : ""}>固定价</option>
                    <option value="固定CPM" ${activeConfig.settlement === "固定CPM" ? "selected" : ""}>固定CPM</option>
                    <option value="按曝光量区间现金结算" ${activeConfig.settlement === "按曝光量区间现金结算" ? "selected" : ""}>按曝光量区间现金结算</option>
                  </select>`,
                  true,
                )}
                ${field(
                  "结算周期",
                  `<select class="select" data-platform-field="settlementCycle">
                    ${settlementCycleOptions
                      .map((item) => `<option value="${item}" ${activeConfig.settlementCycle === item ? "selected" : ""}>${item}</option>`)
                      .join("")}
                  </select>`,
                )}
                ${field(
                  "期望效果",
                  `<select class="select" data-publish-field="expectedEffect">
                    <option value="曝光" ${draft.expectedEffect === "曝光" ? "selected" : ""}>曝光</option>
                    <option value="点击" ${draft.expectedEffect === "点击" ? "selected" : ""}>点击</option>
                    <option value="转化" ${draft.expectedEffect === "转化" ? "selected" : ""}>转化</option>
                  </select>`,
                  true,
                )}
                ${field("预估效果", `<input class="input" value="${draft.estimatedEffect || ""}" placeholder="80K" data-publish-field="estimatedEffect" />`)}
              </div>
            </section>

            <section class="publish-section-card">
              <div class="publish-section-head">
                <div>
                  <h3>匹配达人</h3>
                  <p class="subcopy">发布前可先查看系统推荐与收藏达人，定向选择候选人。</p>
                </div>
              </div>
              <div class="publish-match-summary">
                <div class="note-box">
                  ${
                    draft.matchedCreators.length
                      ? `已选择候选达人 ${draft.matchedCreators.length} 位：${draft.matchedCreators.join("、")}`
                      : "尚未选择候选达人，可点击“查看匹配达人”进行定向选择。"
                  }
                </div>
              </div>
            </section>
          </div>
        `;

  return `${stepper}${body}`;
}

function publishCandidatePool() {
  return [
    { name: "Mika Studio", platform: "TikTok", type: "美妆 / 生活方式", fans: "744.15万", match: "92%", source: "system", avatar: assets.talentAvatar1 },
    { name: "Nova Plays", platform: "YouTube", type: "测评 / 科技数码", fans: "161.10万", match: "88%", source: "favorite", avatar: assets.talentAvatar2 },
    { name: "Luna Trend", platform: "TikTok", type: "美妆", fans: "289.40万", match: "90%", source: "system", avatar: assets.talentAvatar3 },
    { name: "Tech Otto", platform: "YouTube", type: "科技数码", fans: "305.00万", match: "86%", source: "favorite", avatar: assets.talentAvatar2 },
    { name: "Daily Miki", platform: "TikTok", type: "生活方式 / 零售", fans: "142.10万", match: "84%", source: "system", avatar: assets.talentAvatar1 },
  ];
}

function renderPublishMatchDrawer() {
  const draft = state.publishDraft;
  const source = draft.matchedSource || "all";
  const candidates = publishCandidatePool().filter((item) => {
    if (source === "all") return true;
    return item.source === source;
  });
  return `
    <div class="publish-match-layer">
      <div class="drawer-backdrop" data-action="close-publish-match-drawer"></div>
      <aside class="drawer" role="dialog" aria-modal="true">
        <div class="drawer-head">
          <div>
            <h2>查看匹配达人</h2>
            <p class="subcopy">根据当前任务信息，筛选系统推荐与收藏达人供你定向选择。</p>
          </div>
          <button class="close-button" data-action="close-publish-match-drawer" aria-label="关闭">×</button>
        </div>
        <div class="drawer-body">
          <div class="tabs">
            <button class="tab ${source === "all" ? "active" : ""}" data-action="set-publish-match-source" data-source="all">全部</button>
            <button class="tab ${source === "system" ? "active" : ""}" data-action="set-publish-match-source" data-source="system">系统推荐</button>
            <button class="tab ${source === "favorite" ? "active" : ""}" data-action="set-publish-match-source" data-source="favorite">我的收藏</button>
          </div>
          <div class="table-card" style="margin-top:14px">
            <div class="table-wrap">
              <table>
                <thead><tr><th>选择</th><th>达人</th><th>平台</th><th>类型</th><th>粉丝数</th><th>匹配度</th><th>来源</th></tr></thead>
                <tbody>
                  ${candidates
                    .map(
                      (item) => `
                      <tr>
                        <td><input type="checkbox" ${draft.matchedCreators.includes(item.name) ? "checked" : ""} data-action="toggle-publish-match-creator" data-name="${encodeURIComponent(item.name)}" /></td>
                        <td>
                          <div class="row-title">
                            <img src="${item.avatar}" alt="" />
                            <span><strong>${item.name}</strong><small>${item.type}</small></span>
                          </div>
                        </td>
                        <td>${item.platform}</td>
                        <td>${item.type}</td>
                        <td>${item.fans}</td>
                        <td>${item.match}</td>
                        <td>${item.source === "favorite" ? "我的收藏" : "系统推荐"}</td>
                      </tr>
                    `,
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="drawer-foot">
          <button class="ghost-button" data-action="close-publish-match-drawer">取消</button>
          <button class="primary-button" data-action="close-publish-match-drawer">确认选择</button>
        </div>
      </aside>
    </div>
  `;
}

function renderPublishModalContent() {
  return `
    <div class="modal-head">
      <div><h2>发布任务</h2><p class="subcopy">填写推广信息、达人要求和投放预算。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">${publishForm(true)}</div>
    ${publishControls(true)}
    ${state.publishDraft.matchDrawerOpen ? renderPublishMatchDrawer() : ""}
  `;
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
        ${step === 2 ? `<button class="ghost-button" data-action="open-publish-match-drawer" ${canOpenPublishMatch() ? "" : "disabled"}>查看匹配达人</button>` : ""}
        <button class="primary-button" data-action="${step === 2 ? "submit-publish" : "publish-next"}">${step === 2 ? "确认发布" : "下一步"}</button>
      </div>
    </div>
  `;
}

function field(label, control, required = false, extra = "") {
  const counter = extra.split(" ").includes("with-counter") ? `<span class="field-counter">${String(state.publishDraft.campaignName || "").length}/200</span>` : "";
  return `
    <div class="field ${extra}">
      <label>${required ? `<span class="required">*</span> ` : ""}${label}${counter}</label>
      ${control}
    </div>
  `;
}

function renderTaskReview() {
  const tab = state.tabs.taskReview;
  const deliveryRowsCount = collaborations.filter((row) => ["进行中", "待审核", "已发布"].includes(row.status)).length;
  const taskName = "MINISO 夏季新品内容合作";
  return `
    ${pageHeader(
      "任务详情",
      "查看任务",
      "审核报名达人、追踪交付状态，并处理内容修改意见。",
      `<button class="ghost-button" data-action="open-page-notes" data-page="taskReview">查看说明</button><button class="secondary-button" data-nav="promotions">返回活动管理</button>`,
    )}
    <div class="grid two-col">
      <div class="panel hero-strip">
        <img src="${assets.taskDetailBanner}" alt="" />
        <div class="panel-content">
          <h2>${taskName}</h2>
          <p class="subcopy">达人要求：≥200万粉丝 · 游戏 / 直播 · 预算固定价 $2000.00 USD。<button class="inline-link task-review-detail-link" data-action="modal-campaign-info" data-campaign="${encodeURIComponent(taskName)}">任务详情</button></p>
          <div class="mini-stats">
            <div class="mini-stat"><span>全部报名达人</span><strong>55</strong></div>
            <div class="mini-stat"><span>已合作达人</span><strong>${deliveryRowsCount}</strong></div>
            <div class="mini-stat"><span>待审核内容</span><strong>3</strong></div>
          </div>
        </div>
      </div>
      <div class="panel">
        <h2>招募价格</h2>
        <p class="subcopy">结算方式：固定价；结算周期：以合作协议为准。</p>
        <div class="note-box task-review-price-box" style="margin-top:12px">
          <div><span>预算(固定价)</span><strong>$2000.00 USD</strong></div>
          <div><span>合作类型</span><strong>定制视频-60秒</strong></div>
        </div>
      </div>
    </div>
    <div class="table-card" style="margin-top:16px">
      <div class="table-head">
        <div class="tabs" style="margin:0">
          ${tabButton("taskReview", "applicants", "全部报名达人(55)")}
          ${tabButton("taskReview", "deliveries", `已合作达人(${deliveryRowsCount})`)}
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

function openPageNotesDrawer(page = "") {
  const pageName = page || state.page;
  const content =
    pageName === "taskReview"
      ? `
        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div>
              <strong>页面目标</strong>
              <p>这个页面承接广告主审核达人报名、查看交付进度，以及处理内容修改意见的主流程。</p>
            </div>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div>
              <strong>区块说明</strong>
              <p>顶部卡片展示任务概要和招募价格；下方 Tab 分成“全部报名达人”和“已合作达人”两类工作区。</p>
            </div>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div>
              <strong>状态规则</strong>
              <p>交付列表中的“状态”与“交付状态”分开表达业务阶段，其中查看详情会按当前数据动态展示节点和可执行动作。</p>
            </div>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div>
              <strong>后续建议</strong>
              <p>建议继续补充版本记录、驳回原因历史、审核人信息，以及任务满额后的自动拒绝说明。</p>
            </div>
          </div>
        </div>
      `
      : `<div class="note-box">当前页面暂未配置说明内容。</div>`;

  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div>
          <h2>页面说明</h2>
          <p class="subcopy">${pageName === "taskReview" ? "广告主端 · 查看任务" : "原型页面说明"}</p>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        ${content}
      </div>
    </aside>
  `;
}

function renderTalentManagement() {
  return `${pageHeader("达人管理", "达人管理", "")}<div class="panel"><div class="empty-state"><strong>页面暂未配置内容</strong><span class="muted">此页先留空，暂不展示具体模块。</span></div></div>`;
  const recentRows = creators.slice(0, 6);
  return `
    ${pageHeader(
      "达人资源",
      "达人资源",
      "承接广告主投前选人的资源总览，聚合达人池、筛选策略与常用入口。",
      `<button class="primary-button" data-nav="talentSearch">查找达人</button>`,
    )}
    ${metrics([
      { label: "资源池达人", value: "2,381", delta: "+126 本月" },
      { label: "收藏达人", value: "486", delta: "可快速邀约" },
      { label: "可邀约", value: "1,842", delta: "+7.6%" },
      { label: "平均互动率", value: "4.2%", delta: "+0.3%" },
    ])}
    <div style="margin-top:16px">
      <div class="table-card">
        <div class="table-head"><h2>近期达人池</h2><button class="secondary-button" data-nav="talentSearch">进入达人搜索</button></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>达人</th><th>分类</th><th>粉丝数</th><th>平均曝光量</th><th>互动率</th><th>操作</th></tr></thead>
            <tbody>
              ${recentRows
                .map(
                  (row) => `
                    <tr>
                      <td>
                        <div class="row-title">
                          <button class="avatar-button" data-action="drawer-creator" data-name="${row.name}" aria-label="查看 ${row.name} 达人详情">
                            <img src="${row.avatar || assets.creatorPreview}" alt="" />
                          </button>
                          <span><strong>${row.name}</strong><small>${row.platform}</small></span>
                        </div>
                      </td>
                      <td>${row.category}</td>
                      <td>${row.fans}</td>
                      <td>${row.avgViews}</td>
                      <td>${row.engagement}</td>
                      <td>
                        <div class="actions">
                          <button class="link-button" data-action="toast" data-message="${row.contract === "已收藏" ? "已在收藏列表中" : `已收藏 ${row.name}`}">${row.contract === "已收藏" ? "已收藏" : "收藏"}</button>
                          <button class="link-button" data-action="modal-invite">邀请</button>
                        </div>
                      </td>
                    </tr>
                  `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderCollaborators() {
  const activeTab = state.tabs.collaborators;
  const pendingCols = 15;
  const activeCols = 8;
  const publishedCols = 10;
  const platformOptions = ["YouTube", "TikTok", "Instagarm", "Twitch", "Twitter", "Facebook", "Others"];
  const selectedPlatforms = state.collaboratorFilters.platforms;
  const basePendingCount = collaborations.filter((row) => row.status.includes("待确认")).length;
  const baseActiveCount = collaborations.filter((row) => row.status === "进行中").length;
  const basePublishedCount = collaborations.filter((row) => row.status === "已发布").length;
  const confirmedCount = state.confirmedCollaborators.length;
  return `
    ${pageHeader(
      "合作管理",
      "合作管理",
      "查看已合作达人在待确认、进行中、已发布阶段的交付进度与审核状态。",
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
      ${tabButton("collaborators", "pending", `待确认(${Math.max(basePendingCount - confirmedCount, 0)})`)}
      ${tabButton("collaborators", "active", `进行中(${baseActiveCount + confirmedCount})`)}
      ${tabButton("collaborators", "published", `已发布(${basePublishedCount})`)}
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
                ? `<tr><th>达人基本信息</th><th>粉丝数</th><th>内容标签</th><th>国家/地区</th><th>受众性别</th><th>受众年龄</th><th>最近发布视频</th><th>平均曝光量</th><th>所属任务</th><th>报名理由</th><th>接单时间</th><th>结算方式</th><th>报价(USD)</th><th>状态</th><th>操作</th></tr>`
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
  const platforms = ["全部", "TikTok", "YouTube", "Twitch", "Instagram", "Facebook", "Twitter", "Others"];
  const regions = ["全部", "美国", "日本", "韩国", "印尼", "泰国", "越南", "马来西亚", "英国", "德国"];
  const categories = ["全部", "购物与零售", "游戏", "美妆", "运动户外", "理财与投资", "软件与应用", "食品饮料", "科技与数码"];
  const visibleCats = state.talentSearchFilters.expanded ? categories : categories.slice(0, 8);
  const filteredCreators = filterCreators(creators);
  return `
    ${pageHeader(
      "达人搜索",
      "达人搜索",
      "按达人分类、收藏状态、平台与表现数据筛选创作者。",
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
        <div class="filter-row talent-contract-row">
          <div class="filter-label">达人筛选：</div>
          <div class="filter-content">
            <select class="select" data-talent-filter="contract">
              ${[
                { value: "全部", text: "收藏状态" },
                { value: "已收藏", text: "已收藏" },
                { value: "未收藏", text: "未收藏" },
              ]
                .map((x) => `<option value="${x.value}" ${state.talentSearchFilters.contract === x.value ? "selected" : ""}>${x.text}</option>`)
                .join("")}
            </select>
          </div>
        </div>
        ${renderTalentSelectedConditions()}
      </div>
    </div>
    <div class="table-card talent-list-card">
      <div class="table-head"><h2>达人列表</h2><button class="primary-button" data-action="modal-invite">批量邀请</button></div>
      <div class="table-wrap talent-list-scroll">
        <table>
          <thead><tr><th><input type="checkbox" aria-label="全选达人" /></th><th>达人信息</th><th>国家/地区</th><th>受众性别</th><th>粉丝数</th><th>受众年龄</th><th>最近发布视频</th><th>平均曝光量</th><th>报价</th><th>操作</th></tr></thead>
          <tbody>${talentRows(filteredCreators)}</tbody>
        </table>
      </div>
    </div>
  `;
}

function filterMyTalents(list = myTalentRows) {
  const f = state.myTalentFilters;
  const keyword = String(f.keyword || "").trim().toLowerCase();

  return list
    .filter((row) => {
      if (!keyword) return true;
      return [row.name, row.uid, row.platform, ...(row.categories || []), ...(row.styleTags || [])].join(" ").toLowerCase().includes(keyword);
    })
    .filter(
      (row) =>
        f.cooperationStatus === "全部" ||
        (f.cooperationStatus === "有进行中的任务" && row.statusTags.includes("有进行中的任务")) ||
        (f.cooperationStatus === "历史合作" && row.statusTags.includes("历史合作")),
    )
    .filter((row) => {
      if (f.cooperationTimes === "全部") return true;
      if (f.cooperationTimes === "0次（仅收藏）") return row.totalOrders === 0;
      if (f.cooperationTimes === "1次") return row.totalOrders === 1;
      if (f.cooperationTimes === "2-3次") return row.totalOrders >= 2 && row.totalOrders <= 3;
      if (f.cooperationTimes === "4次及以上") return row.totalOrders >= 4;
      return true;
    })
    .filter((row) => f.platform === "全部" || row.platform === f.platform)
    .filter((row) => f.category === "全部" || row.categories.includes(f.category))
    .filter((row) => {
      if (f.engagement === "全部") return true;
      const value = parsePercent(row.avgEngagement);
      if (f.engagement === "1%+") return value >= 1;
      if (f.engagement === ">3%") return value > 3;
      if (f.engagement === ">5%") return value > 5;
      if (f.engagement === ">10%") return value > 10;
      return true;
    })
    .filter((row) => {
      if (f.exposure30d === "全部") return true;
      const value = parseCompactNumber(row.avgExposure);
      if (f.exposure30d === "0-10w") return value < 100000;
      if (f.exposure30d === "10w-50w") return value >= 100000 && value < 500000;
      if (f.exposure30d === "50w-200w") return value >= 500000 && value < 2000000;
      if (f.exposure30d === "200w+") return value >= 2000000;
      return true;
    })
    .filter((row) => f.qualityTier === "全部" || row.qualityTier === f.qualityTier)
    .filter((row) => {
      if (f.priceRange === "全部") return true;
      const value = parseMoneyUSD(row.baseQuote);
      if (f.priceRange === "$0-500") return value >= 0 && value < 500;
      if (f.priceRange === "$500-1K") return value >= 500 && value < 1000;
      if (f.priceRange === "$1K-3K") return value >= 1000 && value < 3000;
      if (f.priceRange === "$3K-10K") return value >= 3000 && value < 10000;
      if (f.priceRange === "$10K+") return value >= 10000;
      return true;
    });
}

function resetMyTalentFilters() {
  state.myTalentFilters = {
    keyword: "",
    cooperationStatus: "全部",
    cooperationTimes: "全部",
    platform: "全部",
    category: "全部",
    engagement: "全部",
    exposure30d: "全部",
    qualityTier: "全部",
    priceRange: "全部",
  };
}

function renderMyTalentSelectedConditions() {
  const f = state.myTalentFilters;
  const items = [
    ["cooperationStatus", "合作状态", f.cooperationStatus],
    ["cooperationTimes", "合作次数", f.cooperationTimes],
    ["platform", "达人平台", f.platform],
    ["category", "垂类分类", f.category],
    ["engagement", "平均互动率", f.engagement],
    ["exposure30d", "近30天平均曝光量", f.exposure30d],
    ["qualityTier", "履约质量", f.qualityTier],
    ["priceRange", "报价区间", f.priceRange],
  ].filter(([, , value]) => value && value !== "全部");

  return `
    <div class="selected-filter-row">
      <div class="selected-filter-label">已选条件：</div>
      <div class="selected-filter-chips">
        ${
          items.length
            ? items
                .map(
                  ([key, label, value]) => `
                    <button class="selected-filter-chip" data-action="remove-my-talent-filter" data-filter-key="${key}" type="button">
                      <span>${label}：${value}</span>
                      <span class="selected-filter-x" aria-hidden="true">×</span>
                    </button>
                  `,
                )
                .join("")
            : `<span class="selected-filter-empty">暂无筛选条件</span>`
        }
      </div>
    </div>
  `;
}

function myTalentStatusBadges(tags = []) {
  return `<div class="my-talent-status-list">${tags.map((item) => `<span class="my-talent-status-chip">${item}</span>`).join("")}</div>`;
}

function myTalentRegionTags(codes = []) {
  const flagMap = { US: "🇺🇸", UK: "🇬🇧", JP: "🇯🇵", CN: "🇨🇳", TH: "🇹🇭", MY: "🇲🇾", DE: "🇩🇪", CA: "🇨🇦", SG: "🇸🇬" };
  return `<div class="country-chips">${codes.map((code) => `<span class="country-chip">${flagMap[code] || "🌐"} ${code}</span>`).join("")}</div>`;
}

function myTalentRegionText(codes = []) {
  return `<span class="my-talent-region-text">${(codes || []).join(" / ") || "-"}</span>`;
}

function renderMyTalents() {
  const filteredRows = filterMyTalents();
  const platforms = ["全部", "TikTok", "YouTube", "Instagram", "Twitch", "Facebook", "Twitter", "Others"];
  const categories = ["全部", "购物零售", "游戏", "美妆", "科技", "生活", "理财", "软件", "食品饮料"];
  const completionTooltip =
    "履约完成率 = 已完成履约任务数 / 已确认合作任务总数。已确认合作后被取消、长期逾期或最终未交付的任务，会计入未完成并拉低该比例。";

  return `
    ${pageHeader(
      "我的达人",
      "我的达人",
      "按达人聚合历史合作、履约表现、投放效果与结算信息，支持复投评估与合作台账追溯。",
      `<button class="secondary-button" data-action="toast" data-message="已导出当前列表">导出当前列表</button><button class="primary-button" data-action="modal-invite">批量邀请达人</button>`,
    )}
    <div class="panel my-talents-filter-panel">
      <div class="talent-search-top">
        <div class="search-box-inline">
          <span aria-hidden="true">⌕</span>
          <input class="input search-input" type="search" placeholder="搜索达人昵称 / UID / 标签关键词" value="${state.myTalentFilters.keyword}" data-my-talent-filter="keyword" />
        </div>
        <div class="filter-action-row">
          <button class="ghost-button" data-action="reset-my-talent-filters">重置筛选</button>
          <button class="secondary-button" data-action="toast" data-message="已导出当前列表">导出当前列表</button>
          <button class="primary-button" data-action="modal-invite">批量邀请达人</button>
        </div>
      </div>
      <div class="filter-row">
        <div class="filter-label">合作状态</div>
        <div class="filter-content"><div class="chips chips-nowrap">${["全部", "有进行中的任务", "历史合作"].map((item) => `<button class="chip ${state.myTalentFilters.cooperationStatus === item ? "active" : ""}" data-action="set-my-talent-filter" data-key="cooperationStatus" data-value="${item}">${item}</button>`).join("")}</div></div>
      </div>
      <div class="filter-row">
        <div class="filter-label">合作次数</div>
        <div class="filter-content"><div class="chips chips-nowrap">${["全部", "0次（仅收藏）", "1次", "2-3次", "4次及以上"].map((item) => `<button class="chip ${state.myTalentFilters.cooperationTimes === item ? "active" : ""}" data-action="set-my-talent-filter" data-key="cooperationTimes" data-value="${item}">${item}</button>`).join("")}</div></div>
      </div>
      <div class="filter-row">
        <div class="filter-label">达人平台</div>
        <div class="filter-content"><div class="chips chips-nowrap">${platforms.map((item) => `<button class="chip ${state.myTalentFilters.platform === item ? "active" : ""}" data-action="set-my-talent-filter" data-key="platform" data-value="${item}">${item}</button>`).join("")}</div></div>
      </div>
      <div class="filter-row">
        <div class="filter-label">垂类分类</div>
        <div class="filter-content"><div class="chips chips-nowrap">${categories.map((item) => `<button class="chip ${state.myTalentFilters.category === item ? "active" : ""}" data-action="set-my-talent-filter" data-key="category" data-value="${item}">${item}</button>`).join("")}</div></div>
      </div>
      <div class="filter-row">
        <div class="filter-label">平均互动率</div>
        <div class="filter-content"><div class="chips chips-nowrap">${["全部", "1%+", ">3%", ">5%", ">10%"].map((item) => `<button class="chip ${state.myTalentFilters.engagement === item ? "active" : ""}" data-action="set-my-talent-filter" data-key="engagement" data-value="${item}">${item}</button>`).join("")}</div></div>
      </div>
      <div class="filter-row">
        <div class="filter-label">近30天平均曝光量</div>
        <div class="filter-content"><div class="chips chips-nowrap">${["全部", "0-10w", "10w-50w", "50w-200w", "200w+"].map((item) => `<button class="chip ${state.myTalentFilters.exposure30d === item ? "active" : ""}" data-action="set-my-talent-filter" data-key="exposure30d" data-value="${item}">${item}</button>`).join("")}</div></div>
      </div>
      <div class="filter-row">
        <div class="filter-label">履约质量分层</div>
        <div class="filter-content"><div class="chips chips-nowrap">${["全部", "S级优质", "A级良好", "B级一般", "C级较差"].map((item) => `<button class="chip ${state.myTalentFilters.qualityTier === item ? "active" : ""}" data-action="set-my-talent-filter" data-key="qualityTier" data-value="${item}">${item}</button>`).join("")}</div></div>
      </div>
      <div class="filter-row">
        <div class="filter-label">报价区间 USD</div>
        <div class="filter-content"><div class="chips chips-nowrap">${["全部", "$0-500", "$500-1K", "$1K-3K", "$3K-10K", "$10K+"].map((item) => `<button class="chip ${state.myTalentFilters.priceRange === item ? "active" : ""}" data-action="set-my-talent-filter" data-key="priceRange" data-value="${item}">${item}</button>`).join("")}</div></div>
      </div>
      ${renderMyTalentSelectedConditions()}
    </div>
    <div class="panel my-talent-batch-bar">
      <strong>批量操作</strong>
      <div class="filter-action-row">
        <button class="secondary-button" data-action="modal-invite">批量发起合作邀约</button>
        <button class="ghost-button" data-action="toast" data-message="已导出达人合作汇总 Excel">导出达人数据</button>
        <button class="ghost-button" data-action="toast" data-message="已批量移除收藏">批量取消收藏</button>
      </div>
    </div>
    <div class="table-card my-talent-list-card">
      <div class="table-head"><h2>达人总列表</h2><span class="muted">按达人聚合当前广告主全部历史合作与进行中任务</span></div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" aria-label="全选达人" /></th>
              <th>达人卡片</th>
              <th>粉丝体量</th>
              <th>垂类标签</th>
              <th>合作总单数</th>
              <th>有效履约单数</th>
              <th><span class="th-label-with-help">履约完成率<button class="th-help-button" type="button" aria-label="查看履约完成率说明"><span class="th-help-icon">i</span><span class="th-help-popover">${completionTooltip}</span></button></span></th>
              <th>平均单条曝光</th>
              <th>平均互动率</th>
              <th>累计投放预算</th>
              <th>待结算金额</th>
              <th>合作状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${
              filteredRows.length
                ? filteredRows
                    .map(
                      (row) => `
                        <tr class="my-talent-row ${row.qualityTier.startsWith("S") ? "tier-s" : ""}">
                          <td><input type="checkbox" aria-label="选择 ${row.name}" /></td>
                          <td class="my-talent-main-cell">
                            ${row.hasActive ? `<span class="row-corner-badge">进行中</span>` : ""}
                            <div class="row-title">
                              <button class="avatar-button" data-action="open-my-talent-drawer" data-name="${encodeURIComponent(row.name)}" aria-label="查看 ${row.name} 达人详情">
                                <img src="${row.avatar}" alt="" />
                              </button>
                              <span>
                                <strong>${row.name}</strong>
                                <small>${row.uid} · ${socialPlatformIcon(row.platform)} ${row.platform}</small>
                              </span>
                            </div>
                            <div class="my-talent-region-line">${myTalentRegionTags(row.region)}</div>
                          </td>
                          <td>${row.followers}</td>
                          <td>${simpleChips(row.categories)}</td>
                          <td>${row.totalOrders}</td>
                          <td>${row.validOrders}</td>
                          <td><div class="my-talent-rate"><strong>${row.completionRate}</strong><span class="tier-pill">${row.qualityTier}</span></div></td>
                          <td>${row.avgExposure}</td>
                          <td>${row.avgEngagement}</td>
                          <td>${row.totalBudget}</td>
                          <td>${row.pendingSettlement}</td>
                          <td>${myTalentStatusBadges(row.statusTags)}${row.weakWarning ? `<small class="weak-warning-inline">历史曾有中途放弃 / 多次驳回</small>` : ""}</td>
                          <td><div class="table-actions-inline"><button class="link-button" data-action="open-my-talent-drawer" data-name="${encodeURIComponent(row.name)}">查看详情</button><button class="link-button" data-action="close-and-nav" data-page="collaborators">发起邀约</button><button class="link-button" data-action="toast" data-message="已取消收藏 ${row.name}">取消收藏</button></div></td>
                        </tr>
                      `,
                    )
                    .join("")
                : emptyRow(13)
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderMyTalentSelectedConditions() {
  const f = state.myTalentFilters;
  const items = [
    ["cooperationStatus", "合作状态", f.cooperationStatus],
    ["cooperationTimes", "合作次数", f.cooperationTimes],
    ["platform", "达人平台", f.platform],
    ["category", "垂类分类", f.category],
    ["engagement", "平均互动率", f.engagement],
    ["exposure30d", "近30天平均曝光量", f.exposure30d],
    ["qualityTier", "履约质量", f.qualityTier],
    ["priceRange", "报价区间", f.priceRange],
  ].filter(([, , value]) => value && value !== "全部");

  return `
    <div class="selected-filter-row my-talent-selected-row">
      <div class="selected-filter-label">已选条件：</div>
      <div class="selected-filter-chips">
        ${
          items.length
            ? items
                .map(
                  ([key, label, value]) => `
                    <button class="selected-filter-chip" data-action="remove-my-talent-filter" data-filter-key="${key}" type="button">
                      <span>${label}：${value}</span>
                      <span class="selected-filter-x" aria-hidden="true">×</span>
                    </button>
                  `,
                )
                .join("")
            : `<span class="selected-filter-empty">暂无筛选条件</span>`
        }
      </div>
      <button class="selected-filter-clear" data-action="clear-my-talent-selected-filters" ${items.length ? "" : "disabled"} type="button">清除全部</button>
    </div>
  `;
}

function myTalentSelect(label, key, options) {
  const current = state.myTalentFilters[key] || "全部";
  return `
    <label class="compact-filter-field">
      <span>${label}</span>
      <select class="select compact-filter-select" data-my-talent-filter="${key}">
        ${options.map((item) => `<option value="${item}" ${current === item ? "selected" : ""}>${item}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderMyTalents() {
  const filteredRows = filterMyTalents();
  const platforms = ["全部", "TikTok", "YouTube", "Instagram", "Twitch", "Facebook", "Twitter", "Others"];
  const categories = ["全部", "购物零售", "游戏", "美妆", "科技", "生活", "理财", "软件", "食品饮料"];

  return `
    ${pageHeader("合作达人", "合作达人", "围绕达人聚合历史合作、履约表现、投放效果与结算信息，支持复投评估和合作台账追溯。", "")}
    <div class="panel my-talents-filter-panel compact-my-talent-filter">
      <div class="talent-search-top">
        <div class="search-box-inline">
          <span aria-hidden="true">⌕</span>
          <input class="input search-input" type="search" placeholder="搜索达人昵称 / UID / 标签关键词" value="${state.myTalentFilters.keyword}" data-my-talent-filter="keyword" />
        </div>
      </div>
      <div class="compact-filter-grid">
        ${myTalentSelect("合作状态", "cooperationStatus", ["全部", "有进行中的任务", "历史合作"])}
        ${myTalentSelect("合作次数", "cooperationTimes", ["全部", "0次（仅收藏）", "1次", "2-3次", "4次及以上"])}
        ${myTalentSelect("达人平台", "platform", platforms)}
        ${myTalentSelect("垂类分类", "category", categories)}
        ${myTalentSelect("平均互动率", "engagement", ["全部", "1%+", ">3%", ">5%", ">10%"])}
        ${myTalentSelect("近30天曝光", "exposure30d", ["全部", "0-10w", "10w-50w", "50w-200w", "200w+"])}
        ${myTalentSelect("履约质量", "qualityTier", ["全部", "S级优质", "A级良好", "B级一般", "C级较差"])}
        ${myTalentSelect("报价区间", "priceRange", ["全部", "$0-500", "$500-1K", "$1K-3K", "$3K-10K", "$10K+"])}
      </div>
      ${renderMyTalentSelectedConditions()}
    </div>
    <div class="table-card my-talent-list-card">
      <div class="table-head">
        <div>
          <h2>达人总列表</h2>
          <span class="muted">按达人聚合当前广告主全部历史合作与进行中任务</span>
        </div>
        <button class="primary-button" data-action="modal-invite">批量邀请达人</button>
      </div>
      <div class="table-wrap my-talent-sticky-wrap">
        <table class="my-talent-table">
          <thead>
            <tr>
              <th><input type="checkbox" aria-label="全选达人" /></th>
              <th>达人基础信息</th>
              <th>国家/地区</th>
              <th>粉丝体量</th>
              <th>垂类标签</th>
              <th>合作总单数</th>
              <th>有效履约单数</th>
              <th>履约完成率</th>
              <th>平均单条曝光</th>
              <th>平均互动率</th>
              <th>累计合作金额</th>
              <th>待结算金额</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${
              filteredRows.length
                ? filteredRows
                    .map(
                      (row) => `
                        <tr class="my-talent-row ${row.qualityTier.startsWith("S") ? "tier-s" : ""}">
                          <td><input type="checkbox" aria-label="选择 ${row.name}" /></td>
                          <td class="my-talent-main-cell">
                            ${row.hasActive ? `<span class="row-corner-badge">进行中</span>` : ""}
                            <div class="row-title my-talent-title-line">
                              <button class="avatar-button" data-action="open-my-talent-drawer" data-name="${encodeURIComponent(row.name)}" aria-label="查看 ${row.name} 达人详情">
                                <img src="${row.avatar}" alt="" />
                              </button>
                              <span class="my-talent-name-stack">
                              <span class="my-talent-name-row"><strong>${row.name}</strong><span class="my-talent-platform-icon">${socialPlatformIcon(row.platform)}</span></span>
                                <small>${row.uid} · ${row.platform}</small>
                              </span>
                            </div>
                          </td>
                          <td>${myTalentRegionText(row.region)}</td>
                          <td>${row.followers}</td>
                          <td><div class="my-talent-tag-line">${simpleChips(row.categories)}</div></td>
                          <td>${row.totalOrders}</td>
                          <td>${row.validOrders}</td>
                          <td><div class="my-talent-rate"><strong>${row.completionRate}</strong><span class="tier-pill">${row.qualityTier}</span></div></td>
                          <td>${row.avgExposure}</td>
                          <td>${row.avgEngagement}</td>
                          <td>${row.totalBudget}</td>
                          <td>${row.pendingSettlement}</td>
                          <td>
                            <div class="table-actions-inline my-talent-actions">
                              <button class="link-button" data-action="open-my-talent-profile" data-name="${encodeURIComponent(row.name)}">查看详情</button>
                              <button class="link-button" data-action="open-my-talent-invite" data-name="${encodeURIComponent(row.name)}">发起邀约</button>
                              <button class="icon-link-button active" data-action="toggle-talent-favorite" data-name="${encodeURIComponent(row.name)}" title="取消收藏" aria-label="取消收藏">♥</button>
                            </div>
                          </td>
                        </tr>
                      `,
                    )
                    .join("")
                : emptyRow(13)
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderMyTalentDrawerTab(profile) {
  const activeTab = state.myTalentDetail.tab || "ledger";

  if (activeTab === "ledger") {
    return `
      <div class="panel my-talent-inner-panel">
        <div class="table-head"><h2>合作任务台账</h2><span class="muted">按时间倒序展示该达人与当前广告主全部合作任务</span></div>
        <div class="my-talent-tab-filters">
          <input class="input" value="2026-01-01 ~ 2026-06-30" />
          <select class="select"><option>全部合作状态</option><option>履约中</option><option>已完成</option><option>已拒绝</option></select>
          <select class="select"><option>全部结算状态</option><option>待结算</option><option>已结算</option></select>
        </div>
        <div class="table-wrap">
          <table class="my-talent-ledger-table">
            <thead><tr><th>活动名称</th><th>合作时间</th><th>平台 / 地区</th><th>合作状态</th><th>当前履约节点</th><th>合作预算</th><th>交付信息</th><th>审核状态</th><th>发布数据</th><th>结算状态</th><th class="sticky-action-col">操作</th></tr></thead>
            <tbody>
              ${
                profile.taskLedger.length
                  ? profile.taskLedger
                      .map(
                        (item) => `
                          <tr>
                            <td><strong>${item.campaign}</strong></td>
                            <td>${item.createdAt}</td>
                            <td>${item.platform}<br /><small>${item.region}</small></td>
                            <td>${status(item.cooperationStatus, item.cooperationStatus.includes("完成") ? "done" : item.cooperationStatus.includes("拒绝") || item.cooperationStatus.includes("取消") ? "rejected" : "running")}</td>
                            <td>${item.reviewStatus === "待审核" ? "待审核" : item.publishLink === "-" ? "待发布" : "已发布"}</td>
                            <td>${item.budget}</td>
                            <td>${item.deliverable}</td>
                            <td>${item.reviewStatus}</td>
                            <td>${item.publishLink === "-" ? "-" : `${item.exposure} / ${item.interaction}`}</td>
                            <td>${item.settlementStatus}</td>
                            <td class="sticky-action-col"><div class="table-actions-inline"><button class="link-button" data-action="modal-campaign-info" data-campaign="${encodeURIComponent(item.campaign)}">查看任务详情</button><button class="link-button" data-action="open-my-talent-content" data-name="${encodeURIComponent(profile.name)}" data-campaign="${encodeURIComponent(item.campaign)}">查看交付内容</button></div></td>
                          </tr>
                        `,
                      )
                      .join("")
                  : emptyRow(11)
              }
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (activeTab === "deliverables") {
    return `
      <div class="panel my-talent-inner-panel">
        <div class="table-head"><h2>交付内容档案</h2><span class="muted">汇总该达人提交过的脚本、视频和图文产物</span></div>
        <div class="my-talent-tab-filters">
          <input class="input" value="全部活动内容" />
          <select class="select"><option>全部审核状态</option><option>待审核</option><option>通过</option><option>驳回</option></select>
          <select class="select"><option>全部发布状态</option><option>未发布</option><option>已发布</option></select>
        </div>
        <div class="table-wrap">
          <table class="my-talent-deliverable-table">
            <thead><tr><th>所属活动</th><th>内容类型</th><th>提交时间</th><th>审核结果</th><th>发布状态</th><th>数据效果</th><th>素材说明</th><th class="sticky-action-col">操作</th></tr></thead>
            <tbody>
              ${
                profile.deliverables.length
                  ? profile.deliverables
                      .map(
                        (item) => `
                          <tr>
                            <td>${item.campaign}</td>
                            <td>${item.type}</td>
                            <td>${item.submittedAt}</td>
                            <td>${status(item.review, item.review === "通过" ? "done" : item.review === "驳回" ? "rejected" : "pending")}${item.rejectReason !== "-" ? `<small class="weak-warning-inline">驳回原因：${item.rejectReason}</small>` : ""}</td>
                            <td>${item.publishStatus}</td>
                            <td>${item.effect}</td>
                            <td>${item.type === "短视频" ? "含脚本、视频封面与成片链接" : item.type === "脚本" ? "含脚本正文与镜头说明" : "含图文素材与发布文案"}</td>
                            <td class="sticky-action-col"><div class="table-actions-inline"><button class="link-button" data-action="open-my-talent-content" data-name="${encodeURIComponent(profile.name)}" data-campaign="${encodeURIComponent(item.campaign)}">预览内容</button><button class="link-button" data-action="toast" data-message="已下载素材占位文件">下载素材</button></div></td>
                          </tr>
                        `,
                      )
                      .join("")
                  : emptyRow(8)
              }
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (activeTab === "quality") {
    return `
      <div class="grid two-col my-talent-quality-grid">
        <div class="panel">
          <div class="panel-head"><h2>履约时效统计</h2></div>
          <div class="timeline">
            <div class="timeline-item"><span class="timeline-dot"></span><div><strong>平均接单响应时长</strong><p>${profile.quality.responseTime}</p></div></div>
            <div class="timeline-item"><span class="timeline-dot"></span><div><strong>平均内容交付周期</strong><p>${profile.quality.deliveryCycle}</p></div></div>
            <div class="timeline-item"><span class="timeline-dot"></span><div><strong>逾期交付次数</strong><p>${profile.quality.overdueCount}</p></div></div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-head"><h2>审核驳回统计</h2></div>
          <div class="timeline">
            <div class="timeline-item"><span class="timeline-dot"></span><div><strong>报名阶段驳回</strong><p>${profile.quality.signupReject}</p></div></div>
            <div class="timeline-item"><span class="timeline-dot"></span><div><strong>内容初审运营驳回 TOP3</strong><p>${profile.quality.opsReject}</p></div></div>
            <div class="timeline-item"><span class="timeline-dot"></span><div><strong>内容复审广告主驳回 TOP3</strong><p>${profile.quality.brandReject}</p></div></div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-head"><h2>曝光对比图</h2></div>
          <div class="chart-placeholder">柱状图占位：历次合作曝光对比</div>
        </div>
        <div class="panel">
          <div class="panel-head"><h2>驳回原因分布</h2></div>
          <div class="chart-placeholder">饼图占位：驳回原因占比</div>
        </div>
        <div class="panel full">
          <div class="panel-head"><h2>互动率变化趋势</h2></div>
          <div class="chart-placeholder wide">折线图占位：历次合作互动率变化</div>
        </div>
      </div>
    `;
  }

  if (activeTab === "settlements") {
    return `
      <div class="panel my-talent-inner-panel">
        <div class="table-head"><h2>结算账单明细</h2><span class="muted">按账单周期沉淀单达人历史结算记录</span></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>活动名称</th><th>合作报价</th><th>发布完成时间</th><th>结算周期</th><th>账单生成时间</th><th>结算状态</th><th>结算备注</th><th>操作</th></tr></thead>
            <tbody>
              ${
                profile.settlements.length
                  ? profile.settlements
                      .map(
                        (item) => `
                          <tr>
                            <td>${item.campaign}</td>
                            <td>${item.quote}</td>
                            <td>${item.completedAt}</td>
                            <td>${item.cycle}</td>
                            <td>${item.billAt}</td>
                            <td>${status(item.status, item.status === "已结算" ? "done" : "pending")}</td>
                            <td>${item.note}</td>
                            <td><button class="link-button" data-action="open-my-talent-settlement" data-name="${encodeURIComponent(profile.name)}" data-campaign="${encodeURIComponent(item.campaign)}">查看结算单详情</button></td>
                          </tr>
                        `,
                      )
                      .join("")
                  : emptyRow(8)
              }
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  return `
    <div class="panel my-talent-inner-panel">
      <div class="table-head"><h2>沟通记录</h2><span class="muted">系统通知与人工备注沉淀在同一时间轴中</span></div>
      <div class="timeline">
        ${profile.communications
          .map(
            (item) => `
              <div class="timeline-item">
                <span class="timeline-dot"></span>
                <div>
                  <strong>${item.type}</strong>
                  <span class="timeline-time">${item.time}</span>
                  <p>${item.content}</p>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function openMyTalentContentModal(name = "", campaign = "") {
  const profile = myTalentRows.find((item) => item.name === name) || myTalentRows[0];
  const matched = profile.deliverables.find((item) => item.campaign === campaign) || profile.deliverables[0];
  openModal(`
    <div class="modal-head">
      <div><h2>交付内容预览</h2><p class="subcopy">${profile.name} · ${matched?.campaign || campaign}</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="deliver-placeholders single">
        <div class="deliver-item"><span class="deliver-badge">${matched?.type || "内容"}</span><span class="deliver-desc">${matched?.review || "待审核"} · ${matched?.publishStatus || "-"}</span></div>
      </div>
      <div class="note-box" style="margin-top:12px">当前原型展示脚本 / 视频 / 图文预览占位。正式系统可在此查看素材、审核意见与发布链接。</div>
    </div>
    <div class="drawer-foot">
      <button class="ghost-button" data-action="close-overlay">关闭</button>
      <button class="primary-button" data-action="toast-close" data-message="已下载素材占位文件">下载素材</button>
    </div>
  `);
}

function openMyTalentSettlementModal(name = "", campaign = "") {
  const profile = myTalentRows.find((item) => item.name === name) || myTalentRows[0];
  const matched = profile.settlements.find((item) => item.campaign === campaign) || profile.settlements[0];
  openModal(`
    <div class="modal-head">
      <div><h2>结算单详情</h2><p class="subcopy">${profile.name} · ${matched?.campaign || campaign}</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="mini-stats">
        <div class="mini-stat"><span>合作报价</span><strong>${matched?.quote || "-"}</strong></div>
        <div class="mini-stat"><span>结算周期</span><strong>${matched?.cycle || "-"}</strong></div>
        <div class="mini-stat"><span>结算状态</span><strong>${matched?.status || "-"}</strong></div>
      </div>
      <div class="note-box" style="margin-top:12px">${matched?.note || "暂无结算备注"}</div>
    </div>
    <div class="drawer-foot">
      <button class="ghost-button" data-action="close-overlay">关闭</button>
    </div>
  `);
}

function renderMyTalentOverview(profile, isDrawer = false) {
  return `
    <div class="my-talent-overview-grid compact">
      <div class="panel my-talent-hero-panel">
        <div class="my-talent-hero-head">
          <div class="row-title">
            <img src="${profile.avatar}" alt="" />
            <span>
              <strong>${profile.name}</strong>
              <small>${profile.uid} · ${profile.platform} · ${profile.region.join(" / ")}</small>
            </span>
          </div>
          <div class="my-talent-hero-chips">
            ${profile.statusTags.map((item) => `<span class="simple-chip">${item}</span>`).join("")}
          </div>
        </div>
        <div class="my-talent-hero-meta">
          <div><span>粉丝体量</span><strong>${profile.followers}</strong></div>
          <div><span>受众画像</span><strong>${profile.audienceGender} · ${profile.audienceAge}</strong></div>
          <div><span>受众国家</span>${myTalentRegionTags(profile.audienceCountries)}</div>
          <div><span>合作报价</span><strong>${profile.baseQuote}</strong><small>${profile.formats.join(" / ")}</small></div>
        </div>
        <div class="my-talent-hero-tags">
          <span>达人标签</span>
          ${simpleChips([...profile.categories, ...profile.styleTags])}
        </div>
      </div>
      <div class="panel my-talent-business-panel">
        <div class="my-talent-kpi-grid">
          <div class="mini-stat"><span>总对接任务</span><strong>${profile.totalOrders} 单</strong></div>
          <div class="mini-stat"><span>成功履约发布</span><strong>${profile.validOrders} 单</strong></div>
          <div class="mini-stat"><span>中途放弃 / 驳回</span><strong>${Math.max(0, profile.totalOrders - profile.validOrders)} 单</strong></div>
          <div class="mini-stat"><span>履约完成率</span><strong>${profile.completionRate}</strong><small>${profile.qualityTier}</small></div>
        </div>
        <div class="my-talent-summary-note">
          <strong>合作判断</strong>
          <p>${profile.hasActive ? "当前有进行中的合作任务，适合继续跟进审核与交付节奏。" : "当前无进行中的合作任务，适合复盘历史合作表现并评估复投。"}${profile.weakWarning ? " 需关注历史履约风险。" : ""}</p>
        </div>
      </div>
      <div class="panel my-talent-metric-strip">
        <div class="mini-stat"><span>平均曝光</span><strong>${profile.avgExposure}</strong></div>
        <div class="mini-stat"><span>平均互动率</span><strong>${profile.avgEngagement}</strong></div>
        <div class="mini-stat"><span>平均点击跳转</span><strong>${profile.avgClicks}</strong></div>
        <div class="mini-stat"><span>累计消耗总预算</span><strong>${profile.totalBudget}</strong></div>
        <div class="mini-stat"><span>已结算金额</span><strong>${profile.settledBudget}</strong></div>
        <div class="mini-stat"><span>待结算金额</span><strong>${profile.pendingSettlement}</strong></div>
      </div>
    </div>
  `;
}

function openMyTalentDrawer(name = "Mika Studio") {
  const profile = myTalentRows.find((item) => item.name === name) || myTalentRows[0];
  state.myTalentDetail.name = profile.name;
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer my-talent-drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div><h2>${profile.name}</h2><p class="subcopy">${profile.uid} · ${profile.platform} · ${profile.region.join(" / ")}</p></div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        ${renderMyTalentOverview(profile, true)}
        <div class="tabs my-talent-tabs">
          <button class="tab ${state.myTalentDetail.tab === "ledger" ? "active" : ""}" data-action="set-my-talent-tab" data-tab="ledger">合作任务台账</button>
          <button class="tab ${state.myTalentDetail.tab === "deliverables" ? "active" : ""}" data-action="set-my-talent-tab" data-tab="deliverables">交付内容档案</button>
          <button class="tab ${state.myTalentDetail.tab === "quality" ? "active" : ""}" data-action="set-my-talent-tab" data-tab="quality">履约质量分析</button>
          <button class="tab ${state.myTalentDetail.tab === "settlements" ? "active" : ""}" data-action="set-my-talent-tab" data-tab="settlements">结算账单明细</button>
          <button class="tab ${state.myTalentDetail.tab === "communication" ? "active" : ""}" data-action="set-my-talent-tab" data-tab="communication">沟通记录</button>
        </div>
        ${renderMyTalentDrawerTab(profile)}
      </div>
    </aside>
  `;
}

function renderMyTalentProfile() {
  const profile = myTalentRows.find((item) => item.name === state.myTalentDetail.name) || myTalentRows[0];
  state.myTalentDetail.name = profile.name;
  return `
    ${pageHeader(
      "合作达人",
      profile.name,
      "查看该达人与当前广告主的历史合作、履约表现、交付和结算情况。",
      `<button class="secondary-button" data-nav="myTalents">返回合作达人</button>`,
    )}
    <div class="my-talent-profile-page">
      ${renderMyTalentOverview(profile)}
      ${renderMyTalentDrawerTab(profile)}
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
    return `
      <div class="account-security-panel">
        <h2>账号信息</h2>
        <div class="form-grid">
          ${field("邮箱 *", `<input class="input readonly-input" value="645644162@qq.com" readonly disabled />`, true, "full")}
          ${field("密码 *", `<input class="input readonly-input" value="******" readonly disabled />`, true, "full")}
        </div>
        <div class="account-security-actions">
          <button class="secondary-button" data-action="toast" data-message="重置密码邮件已发送">重置密码</button>
        </div>
      </div>
    `;
  }
  return `<div class="form-grid">
    ${field("公司名称", `<input class="input" placeholder="请输入公司名称" value="Meetinfluencer Brand Team" />`, true)}
    ${field("国家地区", `<select class="select"><option>请选择国家地区</option><option>中国</option><option>美国</option><option>英国</option></select>`, true)}
    ${field("所属行业", `<select class="select"><option>请选择所属行业</option><option>游戏</option><option>购物与零售</option><option>美妆</option></select>`, true)}
    ${field("公司规模", `<select class="select"><option>请选择公司规模</option><option>&lt;15</option><option>15-50</option><option>50-100</option><option>100-500</option><option>500-2000</option><option>&gt;2000</option></select>`, true)}
  </div>`;
}

function opportunityFilters() {
  const filters = state.opportunityFilters;
  const platformLabel = filters.platforms.length ? `推广平台：${filters.platforms.join("、")}` : "推广平台：";
  const regionLabel = filters.regions.length ? `推广国家/地区：${filters.regions.join("、")}` : "推广国家/地区：";
  const tagLabel = filters.tags.length ? `类型：${filters.tags.join("、")}` : "类型：";
  const followerLabel =
    filters.followerMin || filters.followerMax !== 1000000
      ? `粉丝量要求：${filters.followerMin.toLocaleString()} - ${filters.followerMax.toLocaleString()}`
      : "粉丝量要求：";
  const amountLabel =
    filters.amountMin || filters.amountMax !== 100000
      ? `预算金额：${filters.amountMin.toLocaleString()} - ${filters.amountMax.toLocaleString()}`
      : "预算金额：";
  return `
    <div class="opportunity-filter-panel">
      <div class="filter-control dropdown-filter">
        <button class="filter-trigger" data-action="toggle-opportunity-menu" data-menu="platform">
          <span>${platformLabel}</span><span class="chevron">⌄</span>
        </button>
        ${filters.platformMenuOpen ? opportunityMenu("platform", ["YouTube", "TikTok", "Instagram", "Twitch", "Twitter", "Facebook", "Others"], filters.platforms) : ""}
      </div>

      <div class="filter-control dropdown-filter">
        <button class="filter-trigger" data-action="toggle-opportunity-menu" data-menu="region">
          <span>${regionLabel}</span><span class="chevron">⌄</span>
        </button>
        ${filters.regionMenuOpen ? opportunityMenu("region", ["美国", "英国", "日本", "中国", "新加坡"], filters.regions) : ""}
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
      <div class="amount-range-title">预算金额</div>
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

function opportunityTagSummary(tags = []) {
  const visible = tags.slice(0, 3);
  const hidden = tags.slice(3);
  return `
    <div class="campaign-tag-overflow">
      ${visible.map((item) => `<span class="chip active">${item}</span>`).join("")}
      ${
        hidden.length
          ? `<span class="chip active more">+${hidden.length}</span>
             <div class="country-popover">
               <div class="country-popover-title">更多标签</div>
               <div class="country-popover-list">${hidden.map((item) => `<span class="country-chip">${item}</span>`).join("")}</div>
             </div>`
          : ""
      }
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
  const filters = state.opportunityFilters;
  const regionCodeMap = {
    美国: "US",
    英国: "UK",
    日本: "JP",
    中国: "CN",
    新加坡: "SG",
  };
  const filteredCampaigns = creatorCampaigns.filter((item) => {
    const matchesPlatform =
      !filters.platforms.length || filters.platforms.some((platform) => item.platform.includes(platform));
    const matchesRegion =
      !filters.regions.length ||
      filters.regions.some((region) => item.region.includes(regionCodeMap[region] || region));
    const matchesTag =
      !filters.tags.length || filters.tags.some((tag) => (item.tags || [item.tag]).includes(tag));
    return matchesPlatform && matchesRegion && matchesTag;
  });
  const cardApplyStateMap = {
    "Title-任务名": {
      label: "立即报名",
      cls: "draft",
      tip: "你还未报名该任务，可直接提交报名信息进入审核流程。",
      action: (item) => `<button class="primary-button campaign-apply-button" data-action="modal-apply" data-campaign="${encodeURIComponent(item.name)}">立即报名</button>`,
    },
    "MINISO 夏季新品内容合作": {
      label: "已报名：待审核",
      cls: "pending",
      tip: "报名信息已提交，平台 / 广告主会按流程继续审核。",
      action: () => `<span class="status pending">已报名：待审核</span>`,
    },
    "全境封锁2-上线活动": {
      label: "报名通过",
      cls: "success",
      tip: "报名审核通过后，任务会进入正式合作与交付阶段。",
      action: () => `<span class="status success">报名通过</span>`,
    },
  };
  return `
    ${pageHeader(
      "",
      "机会大厅",
      "",
      `<button class="secondary-button" data-nav="applications">查看报名进度</button>`,
    )}
    ${opportunityFilters()}
    <div class="cards-grid">
      ${filteredCampaigns
        .map(
          (item) => {
            const applyState = cardApplyStateMap[item.name] || null;
            return `
        <article class="campaign-card opportunity-card-clickable" data-action="open-task-detail" data-campaign="${encodeURIComponent(item.name)}" data-status="${applyState ? (applyState.cls === "draft" ? "none" : applyState.cls === "success" ? "approved" : "platform_review") : state.appliedCampaigns.includes(item.name) ? "platform_review" : "none"}">
          <div class="campaign-cover-wrap">
            ${opportunityOfficialBadge(item)}
            ${opportunityCover(item)}
          </div>
          <h2>${item.name}</h2>
          <div class="campaign-title-tags">
            ${opportunityTagSummary(item.tags || [item.tag])}
            <span class="deadline-chip">截止 ${item.deadline}</span>
          </div>
          <div class="campaign-price-highlight">
            <div>
              <span>招募价格</span>
              <strong>${item.budget}</strong>
            </div>
            ${
              applyState
                ? applyState.action(item)
                : state.appliedCampaigns.includes(item.name)
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
      `;
          },
        )
        .join("")}
    </div>
  `;
}

function renderTaskDetailBody(showApply = true) {
  const statusView = applicationStatusView(applicationDetail.statusKey);
  const selectedTitle = state.creatorTaskDetail.name || taskDetailProfile.displayTitle;
  const matchedCampaign = creatorCampaigns.find((item) => item.name === selectedTitle);
  const detailProfile = {
    ...taskDetailProfile,
    displayTitle: selectedTitle,
    brandLabel: matchedCampaign?.isOfficial ? "平台官方" : taskDetailProfile.brandLabel,
  };
  return `
    <div class="task-detail-layout">
      <div class="panel task-summary-card">
        <div class="task-summary-head">任务名称</div>
        <div class="task-summary-body">
          <div class="task-brand-block">
            <div class="task-brand-logo" aria-hidden="true"><span>MINI</span><span>SOU</span></div>
            <div class="task-brand-copy">
              <div class="task-brand-name">${detailProfile.brandLabel}</div>
              <div class="task-title">${detailProfile.displayTitle}</div>
              <div class="task-summary-grid">
                <div class="task-info-item">
                  <span>截止报名时间</span>
                  <strong>${detailProfile.deadline}</strong>
                </div>
                <div class="task-info-item">
                  <span>推广国家/地区</span>
                  <div>${countryChips(detailProfile.targetCountries, { compact: true })}</div>
                </div>
                <div class="task-info-item">
                  <span>推广平台</span>
                  <div>${platformBadges(detailProfile.platforms)}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="task-hero-action">
            ${
              !showApply
                ? ``
                : applicationDetail.statusKey === "none"
                ? `<button class="primary-button task-apply-button" data-action="modal-apply">立即报名</button>`
                : `<div class="task-status-block">${status(statusView.label, statusView.cls)}</div>`
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

function renderTaskDetail() {
  const backTo = state.creatorTaskDetail.backTo || "opportunityHall";
  const backLabel =
    backTo === "myProjects"
      ? "返回我的任务"
      : backTo === "invitations"
        ? "返回合作邀请"
        : backTo === "applications"
          ? "返回报名进度"
          : "返回机会大厅";
  return `
    ${pageHeader(
      "达人端",
      "任务详情",
      "查看任务信息、达人要求、内容要求与招募价格。",
      `<button class="secondary-button" data-nav="${backTo}">${backLabel}</button>`,
    )}
    ${renderTaskDetailBody()}
  `;
}

function renderProjectProgressPage() {
  const taskName = state.creatorProjectDetailTask || projectRows[0]?.task || "任务";
  const project = projectRows.find((row) => row.task === taskName) || projectRows[0];
  return `
    ${pageHeader(
      "达人端",
      "交付进度详情",
      "查看该任务的交付节点、审核状态与操作记录。",
      `<button class="secondary-button" data-nav="myProjects">返回我的任务</button>`,
    )}
    ${projectProgressBody(project)}
  `;
}

function projectProgressBody(project) {
  return `
    <div class="panel">
      <h2>${project.task}</h2>
      <div class="mini-stats" style="margin-top:12px">
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
      <div class="actions" style="margin-top:16px">
        ${project.status === "已完成" ? "" : `<button class="primary-button" data-action="modal-upload">提交产物</button>`}
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
      <div class="table-head"><h2>已报名记录</h2><span class="muted">共 ${applicationRecords.length} 条</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>报名任务</th><th>报名账号</th><th>报名理由</th><th>报名状态</th><th>反馈时间</th><th>备注</th><th>操作</th></tr></thead>
          <tbody>${applicationRows()}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderInvitations() {
  const cooperationTypes = ["全部", ...new Set(invitations.map((row) => row.type))];
  return `
    ${pageHeader(
      "邀请管理",
      "合作邀请",
      "支持根据任务名称、合作类型筛选品牌方主动发来的合作邀请。",
      `<button class="secondary-button" data-nav="myProjects">我的任务</button>`,
    )}
    <div class="filter-bar sticky">
      <input class="input" placeholder="搜索任务名称" value="${state.invitationFilters.keyword}" data-invitation-filter="keyword" />
      <select class="select" data-invitation-filter="type">
        ${cooperationTypes.map((item) => `<option value="${item}" ${state.invitationFilters.type === item ? "selected" : ""}>${item === "全部" ? "全部合作类型" : item}</option>`).join("")}
      </select>
    </div>
    <div class="tabs">
      ${tabButton("invitations", "all", "全部（2）")}
      ${tabButton("invitations", "pending", "待确认接单")}
      ${tabButton("invitations", "accepted", "已合作")}
    </div>
    <div class="table-card">
      <div class="table-head"><h2>任务名称</h2><button class="ghost-button" data-action="toast" data-message="邀请状态已刷新">刷新</button></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>任务名称</th><th>邀请时间</th><th>合作类型</th><th>结算方式</th><th>报价(USD)</th><th>期望发布时间</th><th>状态</th><th>操作</th></tr></thead>
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
      <select class="select"><option>请选择交付进度</option><option>待提交</option><option>待平台审核</option><option>待广告主审核</option><option>审核被拒</option><option>审核通过</option><option>已完成</option></select>
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
  const payout = state.revenuePayoutDraft;
  const methodLabel =
    payout.method === "paypal"
      ? "PAYPAL"
      : payout.method === "bank"
        ? "Bank Transfer"
        : payout.method === "wise"
          ? "Wise"
          : "Other";
  const methodHint =
    payout.method === "paypal"
      ? payout.email
      : payout.method === "bank"
        ? `${payout.bankName} · ${payout.iban.slice(0, 4)}••••`
        : payout.method === "wise"
          ? `${payout.email} · ${payout.iban.slice(0, 4)}••••`
          : payout.note;
  return `
    ${pageHeader(
      "履约数据",
      "我的收益",
      "当前达人端暂未接入结算模块，金额类信息以 - 展示，可查看已发布内容和效果回传情况。",
      `<button class="secondary-button" data-nav="myProjects">返回我的任务</button>`,
    )}
    ${metrics([
      { label: "待结算金额", value: "-", delta: "暂未接入结算" },
      { label: "本月收益", value: "-", delta: "暂未接入结算" },
      { label: "已完成发布", value: "9", delta: "已回传作品" },
      { label: "实际完成值", value: "186K", delta: "曝光" },
    ])}
    <div class="panel revenue-payout-panel" style="margin-top:16px">
      <div class="revenue-payout-card">
        <div>
          <div class="revenue-payout-label">收款账户</div>
          <h2>${methodLabel} · ${payout.currency} ${payout.isDefault ? "· 默认" : ""}</h2>
          <p class="subcopy">${methodHint}</p>
        </div>
        <div class="actions">
          <button class="secondary-button" data-action="open-revenue-payout">配置收款账户</button>
        </div>
      </div>
    </div>
    <div class="panel" style="margin-top:16px">
      <h2>履约数据</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>任务名称</th><th>发布状态</th><th>实际完成值</th><th>收益金额</th><th>结算状态</th></tr></thead>
          <tbody>
            <tr><td>全境封锁-全球活动</td><td>${status("已发布", "success")}</td><td>126K 曝光</td><td>-</td><td>-</td></tr>
            <tr><td>MINISO 夏季新品内容合作</td><td>${status("内容审核中", "pending")}</td><td>-</td><td>-</td><td>-</td></tr>
            <tr><td>全境封锁2-上线活动</td><td>${status("已发布", "success")}</td><td>60K 曝光</td><td>-</td><td>-</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function revenuePayoutMethodCard(value, title, copy, selected = false) {
  return `
    <button class="revenue-method-card ${selected ? "active" : ""}" data-action="set-revenue-payout-method" data-value="${value}">
      <strong>${title}</strong>
      <span>${copy}</span>
    </button>
  `;
}

function openRevenuePayoutModal() {
  const payout = state.revenuePayoutDraft;
  const method = payout.method;
  const methodFields =
    method === "paypal"
      ? `
        ${field("持有人姓名", `<input class="input" value="${payout.holder}" data-action="set-revenue-payout-field" data-field="holder" />`, true)}
        ${field("币种", `<input class="input" value="${payout.currency}" data-action="set-revenue-payout-field" data-field="currency" />`, true)}
        ${field("国家/地区", `<input class="input" value="${payout.country}" data-action="set-revenue-payout-field" data-field="country" />`, true)}
        ${field("邮箱", `<input class="input" value="${payout.email}" data-action="set-revenue-payout-field" data-field="email" />`, true, "full")}
      `
      : method === "bank"
        ? `
          ${field("持有人姓名", `<input class="input" value="${payout.holder}" data-action="set-revenue-payout-field" data-field="holder" />`, true)}
          ${field("币种", `<input class="input" value="${payout.currency}" data-action="set-revenue-payout-field" data-field="currency" />`, true)}
          ${field("国家/地区", `<input class="input" value="${payout.country}" data-action="set-revenue-payout-field" data-field="country" />`, true)}
          ${field("银行名称", `<input class="input" value="${payout.bankName}" data-action="set-revenue-payout-field" data-field="bankName" />`, true)}
          ${field("IBAN", `<input class="input" value="${payout.iban}" data-action="set-revenue-payout-field" data-field="iban" />`, true, "full")}
          ${field("SWIFT / BIC", `<input class="input" value="${payout.swift}" data-action="set-revenue-payout-field" data-field="swift" />`, true, "full")}
        `
        : method === "wise"
          ? `
            ${field("持有人姓名", `<input class="input" value="${payout.holder}" data-action="set-revenue-payout-field" data-field="holder" />`, true)}
            ${field("币种", `<input class="input" value="${payout.currency}" data-action="set-revenue-payout-field" data-field="currency" />`, true)}
            ${field("国家/地区", `<input class="input" value="${payout.country}" data-action="set-revenue-payout-field" data-field="country" />`, true)}
            ${field("Wise 邮箱", `<input class="input" value="${payout.email}" data-action="set-revenue-payout-field" data-field="email" />`, true)}
            ${field("IBAN", `<input class="input" value="${payout.iban}" data-action="set-revenue-payout-field" data-field="iban" />`, false, "full")}
          `
          : `
            ${field("持有人姓名", `<input class="input" value="${payout.holder}" data-action="set-revenue-payout-field" data-field="holder" />`, true)}
            ${field("币种", `<input class="input" value="${payout.currency}" data-action="set-revenue-payout-field" data-field="currency" />`, true)}
            ${field("国家/地区", `<input class="input" value="${payout.country}" data-action="set-revenue-payout-field" data-field="country" />`, true)}
            ${field("说明", `<textarea class="textarea" data-action="set-revenue-payout-field" data-field="note">${payout.note}</textarea>`, true, "full")}
          `;
  openModal(
    `
      <div class="modal-head">
        <div>
          <h2>收款账户</h2>
          <p class="subcopy">请选择你的收款方式，并补充对应账户信息。</p>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="modal-body">
        <div class="revenue-account-summary">${methodLabel} · ${payout.currency} · ${payout.isDefault ? "默认" : "未设为默认"} · ${methodHint}</div>
        <div class="revenue-method-grid">
          ${revenuePayoutMethodCard("paypal", "PayPal", "默认 · 需要邮箱", method === "paypal")}
          ${revenuePayoutMethodCard("bank", "Bank Transfer", "需要账户或 IBAN", method === "bank")}
          ${revenuePayoutMethodCard("wise", "Wise", "需要邮箱或 IBAN", method === "wise")}
          ${revenuePayoutMethodCard("other", "Other", "需要填写说明", method === "other")}
        </div>
        <div class="form-grid" style="margin-top:16px">
          ${methodFields}
        </div>
      </div>
      <div class="modal-foot">
        <button class="ghost-button" data-action="close-overlay">取消</button>
        <button class="primary-button" data-action="save-revenue-payout">保存账户</button>
      </div>
    `,
  );
}

function renderPersonalCenter() {
  const verifiedAccounts = creatorSocialPlatforms().filter((item) => item.accounts.length);
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
          ${field(
            "系统识别标签",
            `<div class="readonly-tags">
              <span>游戏</span>
              <span>生活方式</span>
              <span>测评</span>
              <span>短视频种草</span>
            </div>
            <small class="muted">标签由平台根据已认证账号内容、历史合作和审核结果生成，用于任务匹配，达人不可自行修改。</small>`,
            false,
            "full",
          )}
          ${field("个人简介", `<textarea class="textarea">专注 TikTok / YouTube 游戏与生活方式内容，擅长短视频种草、直播转化和产品测评。</textarea>`, false, "full")}
        </div>
      </div>
      <div class="panel">
        <div class="table-head compact-head">
          <h2>平台账号概览</h2>
          <button class="secondary-button" data-nav="socialAuth">管理认证</button>
        </div>
        <div class="timeline" style="margin-top:14px">
          ${verifiedAccounts
            .map(
              (item) => `
                <div class="timeline-item">
                  <span class="timeline-dot"></span>
                  <div>
                    <strong>${item.name} · ${item.accounts.join(" / ")}</strong>
                    <p>${item.metrics} · ${item.statusText}</p>
                  </div>
                </div>
              `,
            )
            .join("")}
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>收款信息</strong><p>达人端暂未接入结算模块，收益相关字段按业务接入后展示。</p></div></div>
        </div>
      </div>
    </div>
  `;
}

function renderSocialAuth() {
  const platforms = creatorSocialPlatforms();
  return `
    ${pageHeader(
      "社媒认证",
      "社媒认证",
      "认证参与合作的平台账号，一个平台可认证多个账号。",
      "",
    )}
    <div class="panel social-auth-page-note">
      <strong>认证说明</strong>
      <span>为确保你能在「合作邀请」和「我的任务」中实时查看活动数据，请正确认证参与活动所使用的指定平台账号。</span>
    </div>
    <div class="table-card">
      <div class="table-head">
        <h2>平台账号认证</h2>
        <span class="muted">支持同个平台关联多个账号</span>
      </div>
      <div class="table-wrap">
        <table class="social-auth-table">
          <thead><tr><th>平台</th><th>已认证账号</th><th>操作</th></tr></thead>
          <tbody>
            ${platforms
              .map(
                (item) => `
                  <tr>
                    <td><div class="social-auth-main"><span class="social-auth-icon">${socialPlatformIcon(item.name)}</span><strong>${item.name}</strong></div></td>
                    <td>
                      ${
                        item.accounts.length
                          ? `<div class="social-account-summary"><span>${item.accounts.length}</span> 个账户已认证</div>
                             <div class="social-account-compact-list">
                               ${item.accounts
                                 .map(
                                   (account) => `
                                     <span class="social-account-pill">${account}<em class="${item.statusClass}">${item.statusText}</em></span>
                                   `,
                                 )
                                 .join("")}
                             </div>`
                          : ``
                      }
                    </td>
                    <td><button class="link-button" data-action="open-social-auth" data-platform="${item.name}">认证</button></td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderNotificationRecords() {
  const items =
    state.role === "brand"
      ? state.brandNotifications.items
      : state.role === "creator"
        ? state.creatorNotifications.items
        : [];
  return `
    ${pageHeader(
      "通知中心",
      "通知记录",
      "查看全部站内通知、处理状态和关联任务。",
      `<button class="secondary-button" data-action="open-notifications">快捷查看</button>`,
    )}
    <div class="filter-bar sticky">
      <input class="input" placeholder="搜索通知标题 / 任务名称" />
      <select class="select"><option>全部类型</option><option>报名结果</option><option>产物审核</option><option>合作邀请</option></select>
      <select class="select"><option>全部状态</option><option>未读</option><option>已读</option><option>已处理</option></select>
    </div>
    <div class="table-card">
      <div class="table-head"><h2>全部通知</h2><span class="muted">共 ${items.length} 条</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>通知类型</th><th>关联任务</th><th>通知内容</th><th>时间</th><th>操作</th></tr></thead>
          <tbody>
            ${
              items.length
                ? items
                    .map(
                      (item) => `
                        <tr>
                          <td><strong>${item.title}</strong></td>
                          <td>${item.task || "-"}</td>
                          <td>${item.content}</td>
                          <td>${item.time}</td>
                          <td><button class="link-button" data-action="open-notification" data-type="${item.type}" data-task="${encodeURIComponent(item.task || "")}" data-status="${encodeURIComponent(item.statusKey || "")}">${item.cta}</button></td>
                        </tr>
                      `,
                    )
                    .join("")
                : emptyRow(5)
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function filteredAdminReviewRows() {
  return adminReviewHistoryRows
    .filter((row) => state.adminFilters.reviewType === "全部" || row.reviewType === state.adminFilters.reviewType)
    .filter((row) => state.adminFilters.reviewResult === "全部" || row.result === state.adminFilters.reviewResult);
}

function getAdminReviewQueueRows(reviewType, pendingRows) {
  const historyKeys = new Set(
    adminReviewHistoryRows.filter((row) => row.reviewType === reviewType).map((row) => `${row.taskName}::${row.target}`),
  );
  return [
    ...pendingRows
      .filter((row) => !historyKeys.has(`${row.taskName}::${row.target}`))
      .map((row) => ({ ...row, result: "待审核", reviewer: "-", time: "-", reason: row.reason || "等待运营处理" })),
    ...adminReviewHistoryRows.filter((row) => row.reviewType === reviewType),
  ];
}

function filteredAdvertiserRows() {
  const start = state.adminFilters.advertiserJoinedStart ? new Date(state.adminFilters.advertiserJoinedStart) : null;
  const end = state.adminFilters.advertiserJoinedEnd ? new Date(state.adminFilters.advertiserJoinedEnd) : null;
  return adminAdvertiserRows
    .filter((row) => !state.adminFilters.advertiserKeyword || row.name.includes(state.adminFilters.advertiserKeyword))
    .filter((row) => !state.adminFilters.advertiserEmail || row.email.includes(state.adminFilters.advertiserEmail))
    .filter((row) => state.adminFilters.advertiserStatus === "全部" || row.status === state.adminFilters.advertiserStatus)
    .filter((row) => {
      const joined = new Date(normalizeDateTimeInput(row.joinedAt));
      if (start && joined < start) return false;
      if (end && joined > end) return false;
      return true;
    });
}

function filteredInfluencerRows() {
  return adminInfluencerRows
    .filter((row) => !state.adminFilters.influencerKeyword || row.name.includes(state.adminFilters.influencerKeyword))
    .filter((row) => state.adminFilters.influencerPlatform === "全部" || row.platform === state.adminFilters.influencerPlatform)
    .filter((row) => state.adminFilters.influencerStatus === "全部" || row.status === state.adminFilters.influencerStatus);
}

function renderAdminDashboard() {
  const advertiserCount = adminAdvertiserRows.length;
  const activeAdvertisers = adminAdvertiserRows.filter((row) => row.status === "正常").length;
  const creatorCount = adminInfluencerRows.filter((row) => row.status === "正常").length;
  const campaignCount = new Set([...adminCampaignFulfillmentRows.map((row) => row.campaign), ...officialTaskRows.map((row) => row.name)]).size;
  const pendingCount =
    getAdminReviewQueueRows("任务审核", [
      { taskName: "MINISO 英国开学季选品合作", target: "广告主任务审核" },
      { taskName: "Anker 充电配件新品推广", target: "广告主任务审核" },
    ]).filter((row) => row.result === "待审核").length +
    getAdminReviewQueueRows("达人报名", [
      { taskName: "MINISO 夏季新品内容合作", target: "达人报名审核 · Luna Trend" },
      { taskName: "Anker 充电配件新品推广", target: "达人报名审核 · Tech Otto" },
    ]).filter((row) => row.result === "待审核").length +
    getAdminReviewQueueRows("内容审核", [
      { taskName: "MINISO 夏季新品内容合作", target: "内容审核 · Mika Studio" },
      { taskName: "椰子水夏季饮品种草", target: "内容审核 · Daily Miki" },
    ]).filter((row) => row.result === "待审核").length;
  const activeFulfillment = adminCampaignFulfillmentRows.filter((row) => ["内容审核中", "待发布", "效果追踪"].includes(row.deliverableStatus)).length;
  const publishedCount = adminCampaignFulfillmentRows.filter((row) => row.publishStatus === "已发布").length;
  return `
    ${pageHeader(
      "运营后台",
      "运营总览",
      "聚合查看广告主、达人、任务和待处理审核等运营数据，点击卡片可跳转对应模块。",
      ``,
    )}
    ${metrics([
      { label: "广告主数", value: String(advertiserCount), delta: `正常账号 ${activeAdvertisers} 个`, nav: "advertiserList" },
      { label: "已认证达人数", value: String(creatorCount), delta: "可参与任务合作", nav: "influencerListAdmin" },
      { label: "任务数", value: String(campaignCount), delta: "广告主任务 + 官方任务", nav: "campaignFulfillment" },
      { label: "待处理审核", value: String(pendingCount), delta: "活动 / 报名 / 产物", nav: "reviewCenter" },
      { label: "履约跟进中", value: String(activeFulfillment), delta: "内容审核中 / 待发布 / 效果追踪", nav: "campaignFulfillment" },
      { label: "已发布任务", value: String(publishedCount), delta: "可继续跟踪效果与结算", nav: "campaignFulfillment" },
    ])}
    <div class="grid two-col" style="margin-top:16px">
      <div class="panel">
        <div class="table-head"><h2>营销运营数据</h2></div>
        <div class="timeline" style="margin-top:12px">
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>广告主活跃度</strong><p>当前共有 ${advertiserCount} 个广告主账号，其中 ${activeAdvertisers} 个处于正常状态，可继续发单。</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>达人供给</strong><p>已认证达人 ${creatorCount} 位，可按平台、状态和历史合作任务继续筛选管理。</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>任务履约</strong><p>当前共有 ${campaignCount} 个任务在系统内流转，其中 ${activeFulfillment} 条达人履约需要跟进。</p></div></div>
        </div>
      </div>
      <div class="panel">
        <div class="table-head"><h2>快捷跳转</h2></div>
        <div class="chips" style="margin-top:12px">
          <button class="chip active" data-nav="advertiserList">查看广告主列表</button>
          <button class="chip active" data-nav="influencerListAdmin">查看达人列表</button>
          <button class="chip active" data-nav="reviewCenter">进入审核管理</button>
          <button class="chip active" data-nav="campaignFulfillment">查看任务履约</button>
        </div>
      </div>
    </div>
  `;
}

function renderAdminReviewQueue(pageKey, title, reviewType, pendingRows) {
  const sourceRows = getAdminReviewQueueRows(reviewType, pendingRows);
  const showTargetFilter = pageKey !== "creatorDeliverableReviewAdmin";
  const showReviewTypeColumn = pageKey !== "creatorDeliverableReviewAdmin" && pageKey !== "creatorApplicationReviewAdmin" && pageKey !== "campaignReviewAdmin";
  const targetHeader = pageKey === "creatorDeliverableReviewAdmin" ? "交付达人" : pageKey === "creatorApplicationReviewAdmin" ? "报名达人" : pageKey === "campaignReviewAdmin" ? "广告主信息" : "审核对象";
  const targets = ["全部", ...new Set(sourceRows.map((row) => row.target))];
  const rows = sourceRows
    .filter((row) => state.adminFilters.reviewResult === "全部" || row.result === state.adminFilters.reviewResult)
    .filter((row) => !showTargetFilter || state.adminFilters.reviewTarget === "全部" || row.target === state.adminFilters.reviewTarget)
    .filter((row) => !state.adminFilters.reviewKeyword || row.taskName.includes(state.adminFilters.reviewKeyword) || row.target.includes(state.adminFilters.reviewKeyword));
  return `
    ${pageHeader(
      "运营后台",
      title,
      "通过状态筛选查看待审核与历史审核数据。",
      "",
    )}
    <div class="filter-bar sticky">
      <input class="input" placeholder="${showTargetFilter ? "搜索任务名称 / 审核对象" : "搜索任务名称"}" value="${state.adminFilters.reviewKeyword}" data-admin-filter="reviewKeyword" />
      ${
        showTargetFilter
          ? `<select class="select" data-admin-filter="reviewTarget">
        ${targets.map((item) => `<option value="${item}" ${state.adminFilters.reviewTarget === item ? "selected" : ""}>${item}</option>`).join("")}
      </select>`
          : ""
      }
      <div class="chips">
        ${["全部", "待审核", "已通过", "已拒绝"]
          .map((item) => `<button class="chip ${state.adminFilters.reviewResult === item ? "active" : ""}" data-action="set-admin-review-result" data-value="${item}">${item}</button>`)
          .join("")}
      </div>
    </div>
    <div class="table-card">
      <div class="table-head"><h2>${title}</h2><span class="muted">共 ${rows.length} 条</span></div>
      <div class="table-wrap sticky-cols">
        <table class="review-table">
          <thead><tr><th>任务名称</th><th>${targetHeader}</th>${pageKey === "creatorApplicationReviewAdmin" ? "<th>报名理由</th>" : ""}${showReviewTypeColumn ? "<th>审核类型</th>" : ""}<th>审核结果</th><th>审核人</th><th>审核时间</th><th>驳回 / 说明</th><th>操作</th></tr></thead>
          <tbody>
            ${
              rows.length
                ? rows
                    .map(
                      (row) => `
                      <tr>
                        <td><strong>${row.taskName}</strong></td>
                        <td>${pageKey === "campaignReviewAdmin" ? (() => { const advName = adminAdvertiserCampaignRows.find((r) => r.name === row.taskName)?.advertiser || row.target; const advProfile = adminAdvertiserRows.find((a) => a.name === advName); return `<strong>${advName}</strong>${advProfile ? `<br><span class="muted">${advProfile.industry} · ${advProfile.contact}</span>` : ""}`; })() : pageKey === "creatorDeliverableReviewAdmin" ? parseReviewTargetName(row.target) : row.target}</td>
                        ${pageKey === "creatorApplicationReviewAdmin" ? `<td class="reason-cell">${row.reason || "-"}</td>` : ""}
                        ${showReviewTypeColumn ? `<td>${reviewType}</td>` : ""}
                        <td>${status(row.result, row.result === "待审核" ? "pending" : row.result === "已通过" ? "done" : "rejected")}</td>
                        <td>${row.reviewer}</td>
                        <td>${row.time}</td>
                        <td>${row.result === "待审核" ? "" : row.reason}</td>
                        <td>
                          <div class="table-actions-inline">
                            <button class="link-button" data-action="${pageKey === "campaignReviewAdmin" ? "open-admin-task-detail" : "open-admin-review-detail"}" ${pageKey === "campaignReviewAdmin" ? `data-task="${encodeURIComponent(row.taskName)}"` : `data-page-key="${pageKey}" data-task="${encodeURIComponent(row.taskName)}" data-target="${encodeURIComponent(row.target)}"`}>查看详情</button>
                            ${
                              row.result === "待审核"
                                ? pageKey === "campaignReviewAdmin"
                                  ? `<button class="link-button" data-action="approve-admin-campaign-review" data-task="${encodeURIComponent(row.taskName)}" data-target="${encodeURIComponent(row.target)}">通过</button><button class="link-button" data-action="open-admin-campaign-reject" data-task="${encodeURIComponent(row.taskName)}" data-target="${encodeURIComponent(row.target)}">驳回</button>`
                                  : pageKey === "creatorDeliverableReviewAdmin"
                                  ? `<button class="link-button" data-action="approve-admin-deliverable-review" data-task="${encodeURIComponent(row.taskName)}" data-creator="${encodeURIComponent(parseReviewTargetName(row.target))}">通过</button><button class="link-button" data-action="open-admin-deliverable-reject" data-task="${encodeURIComponent(row.taskName)}" data-creator="${encodeURIComponent(parseReviewTargetName(row.target))}">驳回</button>`
                                  : `<button class="link-button" data-action="toast" data-message="已通过当前审核">通过</button><button class="link-button" data-action="toast" data-message="已驳回当前审核">驳回</button>`
                                : ""
                            }
                          </div>
                        </td>
                      </tr>
                    `,
                    )
                    .join("")
                : emptyRow(pageKey === "creatorApplicationReviewAdmin" || pageKey === "campaignReviewAdmin" ? 7 : showReviewTypeColumn ? 8 : 7)
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function parseReviewTargetName(target = "") {
  return target.includes("·") ? target.split("·").pop().trim() : target.trim();
}

function findAdminDeliverableReviewDetail(taskName = "", creatorName = "") {
  return (
    adminDeliverableReviewDetails.find((item) => item.taskName === taskName && item.creator === creatorName) ||
    adminDeliverableReviewDetails[0]
  );
}

function openAdminDeliverableReviewDetail(taskName = "", creatorName = "") {
  const detail = findAdminDeliverableReviewDetail(taskName, creatorName);
  const historyRow = adminReviewHistoryRows.find(
    (row) => row.reviewType === "内容审核" && row.taskName === taskName && parseReviewTargetName(row.target) === creatorName,
  );
  const result = historyRow?.result || "待审核";
  openModal(
    `
    <div class="modal-head">
      <div><h2>产物审核详情</h2><p class="subcopy">${creatorName} · ${taskName}</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="mini-stats">
        <div class="mini-stat"><span>提交平台</span><strong>${detail.platform || "-"}</strong></div>
        <div class="mini-stat"><span>提交时间</span><strong>${detail.submittedAt || "-"}</strong></div>
        <div class="mini-stat"><span>当前版本</span><strong>${detail.version || "-"}</strong></div>
      </div>
      <div class="note-box" style="margin-top:12px">${detail.summary || "达人已提交待审核产物。"}</div>
      <div class="deliver-placeholders" style="margin-top:16px">
        ${detail.attachments
          .map(
            (item) => `
            <div class="deliver-item deliver-review-item">
              <span class="deliver-badge">${item.badge || "附件"}</span>
              <strong>${item.title || "-"}</strong>
              <p class="deliver-desc">${item.desc || "-"}</p>
              <span class="deliver-meta">${item.meta || ""}</span>
            </div>
          `,
          )
          .join("")}
      </div>
      ${historyRow ? `<div class="note-box" style="margin-top:16px">审核结果：${historyRow.result}${historyRow.reason ? `；说明：${historyRow.reason}` : ""}</div>` : ""}
    </div>
    <div class="modal-foot">
      ${
        result === "待审核"
          ? `<button class="ghost-button" data-action="open-admin-deliverable-reject" data-task="${encodeURIComponent(taskName)}" data-creator="${encodeURIComponent(creatorName)}">驳回</button>
             <button class="primary-button" data-action="approve-admin-deliverable-review" data-task="${encodeURIComponent(taskName)}" data-creator="${encodeURIComponent(creatorName)}">通过</button>`
          : `<button class="ghost-button" data-action="close-overlay">关闭</button>`
      }
    </div>
  `,
    false,
  );
}

function openAdminDeliverableRejectModal(taskName = "", creatorName = "") {
  openModal(
    `
    <div class="modal-head">
      <div><h2>驳回产物</h2><p class="subcopy">${creatorName} · ${taskName}</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="note-box" style="margin-bottom:14px">请填写驳回理由，达人会根据意见修改后重新提交产物内容。</div>
      <textarea class="textarea" id="adminDeliverableRejectReason" placeholder="请输入驳回原因，例如：品牌露出不足、口播顺序不符合要求、素材规范不完整等。"></textarea>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">取消</button>
      <button class="danger-button" data-action="submit-admin-deliverable-reject" data-task="${encodeURIComponent(taskName)}" data-creator="${encodeURIComponent(creatorName)}">确认驳回</button>
    </div>
  `,
    true,
  );
}

function openAdminCampaignReviewDetail(taskName = "", target = "") {
  const matched =
    adminAdvertiserCampaignRows.find((row) => row.name === taskName) ||
    officialTaskRows.find((row) => row.name === taskName) ||
    {};
  openModal(
    `
    <div class="modal-head">
      <div><h2>活动审核详情</h2><p class="subcopy">${taskName}</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        ${field("广告主", `<div class="note-box">${matched.advertiser || "平台官方"}</div>`, false)}
        ${field("推广平台", `<div class="note-box">${matched.platform || "-"}</div>`, false)}
        ${field("预算", `<div class="note-box">${matched.budget || "-"}</div>`, false)}
        ${field("达人粉丝邀请", `<div class="note-box">${matched.requirement || "待确认"}</div>`, false)}
        ${field("合作方式", `<div class="note-box">${matched.cooperationType || "待确认"}</div>`, false)}
      </div>
      <div class="note-box" style="margin-top:12px">这里复用任务基础信息结构，便于运营快速核对活动信息完整性、素材链接和预算配置。</div>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">关闭</button>
      <button class="primary-button" data-action="open-admin-task-detail" data-task="${encodeURIComponent(taskName)}">查看任务详情</button>
    </div>
  `,
    false,
  );
}

function openAdminCampaignRejectModal(taskName = "", target = "广告主任务审核") {
  openModal(
    `
    <div class="modal-head">
      <div><h2>驳回活动审核</h2><p class="subcopy">${taskName}</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="note-box" style="margin-bottom:14px">请填写驳回理由，系统将按该理由回退给广告主补充或修改任务信息。</div>
      <textarea class="textarea" id="adminCampaignRejectReason" placeholder="请输入驳回原因，例如：产品链接缺失、预算信息不完整、素材说明不清晰等。"></textarea>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">取消</button>
      <button class="danger-button" data-action="submit-admin-campaign-reject" data-task="${encodeURIComponent(taskName)}" data-target="${encodeURIComponent(target)}">确认驳回</button>
    </div>
  `,
    true,
  );
}

function renderAdvertiserList() {
  const rows = filteredAdvertiserRows();
  return `
    ${pageHeader(
      "运营后台",
      "广告主管理",
      "支持根据广告主名称、邮箱账号、状态、加入时间搜索，并进入广告主档案。",
      "",
    )}
    <div class="table-card">
      <div class="table-head"><h2>广告主列表</h2><span class="muted">共 ${rows.length} 位</span></div>
      <div class="filter-bar sticky">
        <input class="input" placeholder="搜索广告主名称" value="${state.adminFilters.advertiserKeyword}" data-admin-filter="advertiserKeyword" />
        <input class="input" placeholder="搜索邮箱账号" value="${state.adminFilters.advertiserEmail}" data-admin-filter="advertiserEmail" />
        <select class="select" data-admin-filter="advertiserStatus">
          <option value="全部" ${state.adminFilters.advertiserStatus === "全部" ? "selected" : ""}>全部状态</option>
          <option value="正常" ${state.adminFilters.advertiserStatus === "正常" ? "selected" : ""}>正常</option>
          <option value="停用" ${state.adminFilters.advertiserStatus === "停用" ? "selected" : ""}>停用</option>
        </select>
        <div class="date-inputs admin-date-range">
          <span class="date-label">加入时间</span>
          <input class="filter-input" type="datetime-local" step="1" value="${state.adminFilters.advertiserJoinedStart}" data-admin-filter="advertiserJoinedStart" aria-label="加入时间开始" />
          <span class="date-arrow">→</span>
          <input class="filter-input" type="datetime-local" step="1" value="${state.adminFilters.advertiserJoinedEnd}" data-admin-filter="advertiserJoinedEnd" aria-label="加入时间结束" />
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>广告主</th><th>邮箱</th><th>联系人</th><th>公司规模</th><th>行业类型</th><th>进行中任务</th><th>状态</th><th>注册时间</th><th>操作</th></tr></thead>
          <tbody>
            ${rows.length
              ? rows
              .map(
                (row) => `
                <tr>
                  <td><strong>${row.name}</strong></td>
                  <td>${row.email}</td>
                  <td>${row.contact}</td>
                  <td>${row.companyScale}</td>
                  <td>${row.industry}</td>
                  <td>${row.activeTasks}</td>
                  <td>${status(row.status, row.statusClass)}</td>
                  <td>${row.joinedAt}</td>
                  <td><button class="link-button" data-action="open-advertiser-profile" data-value="${encodeURIComponent(row.name)}">查看档案</button></td>
                </tr>
              `,
              )
              .join("")
              : emptyRow(9)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAdvertiserProfile() {
  const advertiser = state.adminFilters.selectedAdvertiser;
  const rows = adminAdvertiserCampaignRows
    .filter((row) => row.advertiser === advertiser)
    .filter((row) => !state.adminFilters.advertiserCampaignKeyword || row.name.includes(state.adminFilters.advertiserCampaignKeyword))
    .filter((row) => state.adminFilters.advertiserCampaignStatus === "全部" || row.status === state.adminFilters.advertiserCampaignStatus);
  const profile = adminAdvertiserRows.find((row) => row.name === advertiser);
  const totalTasks = rows.length;
  const totalBudget = rows.reduce((sum, row) => sum + parseMoneyUSD(row.budget || "0"), 0);
  const activeTasks = rows.filter((row) => row.status === "进行中" || row.status === "招募中").length;
  const partnerCreators = rows.reduce((sum, row) => sum + Number(row.creators || 0), 0);
  const registeredAt = profile?.joinedAt ? profile.joinedAt.slice(0, 10) : "-";
  const recentActive = profile?.status === "正常" ? "2天前" : "30天前";
  return `
    ${pageHeader(
      "运营后台",
      "广告主档案",
      "查看广告主基本档案，并继续查看该广告主的全部任务活动列表。",
      `<button class="secondary-button" data-nav="advertiserList">返回广告主列表</button>`,
    )}
    <div class="panel advertiser-profile-card">
      <h2>${advertiser}</h2>
      <div class="advertiser-kpi-grid">
        <div class="advertiser-kpi-card"><span>任务数</span><strong>${totalTasks}</strong></div>
        <div class="advertiser-kpi-card"><span>累计投放金额</span><strong>$${totalBudget.toLocaleString("en-US")}</strong></div>
        <div class="advertiser-kpi-card"><span>进行中任务</span><strong>${activeTasks}</strong></div>
        <div class="advertiser-kpi-card"><span>合作达人</span><strong>${partnerCreators}</strong></div>
      </div>
      <div class="advertiser-detail-grid">
        <div class="advertiser-detail-item"><span>联系人</span><strong>${profile?.contact || "-"}</strong></div>
        <div class="advertiser-detail-item"><span>邮箱</span><strong>${profile?.email || "-"}</strong></div>
        <div class="advertiser-detail-item"><span>状态</span><strong class="advertiser-status-text"><span class="status-dot ${profile?.statusClass || ""}"></span>${profile?.status || "-"}</strong></div>
        <div class="advertiser-detail-item"><span>注册时间</span><strong>${registeredAt}</strong></div>
        <div class="advertiser-detail-item"><span>最近活跃</span><strong>${recentActive}</strong></div>
        <div class="advertiser-detail-item"><span>公司规模</span><strong>${profile?.companyScale || "-"}</strong></div>
        <div class="advertiser-detail-item"><span>行业</span><strong>${profile?.industry || "-"}</strong></div>
        <div class="advertiser-detail-item advertiser-detail-item-wide"><span>主要投放地区</span><strong>${profile?.region || "-"}</strong></div>
      </div>
    </div>
    <div class="table-card" style="margin-top:16px">
      <div class="table-head"><h2>任务活动列表</h2><span class="muted">滚动可继续查看全部活动</span></div>
      <div class="filter-bar sticky">
        <input class="input" placeholder="搜索活动名称" value="${state.adminFilters.advertiserCampaignKeyword}" data-admin-filter="advertiserCampaignKeyword" />
        <select class="select" data-admin-filter="advertiserCampaignStatus">
          <option value="全部" ${state.adminFilters.advertiserCampaignStatus === "全部" ? "selected" : ""}>全部状态</option>
          <option value="招募中" ${state.adminFilters.advertiserCampaignStatus === "招募中" ? "selected" : ""}>招募中</option>
          <option value="进行中" ${state.adminFilters.advertiserCampaignStatus === "进行中" ? "selected" : ""}>进行中</option>
          <option value="待审核" ${state.adminFilters.advertiserCampaignStatus === "待审核" ? "selected" : ""}>待审核</option>
        </select>
      </div>
      <div class="table-wrap" style="max-height:420px; overflow:auto">
        <table>
          <thead><tr><th>任务名称</th><th>平台</th><th>合作达人</th><th>已发布</th><th>预算</th><th>状态</th><th>操作</th></tr></thead>
          <tbody>
            ${
              rows.length
                ? rows
                    .map(
                      (row) => `
                      <tr>
                        <td><strong>${row.name}</strong></td>
                        <td>${row.platform}</td>
                        <td>${row.creators}</td>
                        <td>${row.published}</td>
                        <td>${row.budget}</td>
                        <td>${status(row.status, row.statusClass)}</td>
                        <td><button class="link-button" data-action="open-campaign-fulfillment" data-value="${encodeURIComponent(row.name)}">查看详情</button></td>
                      </tr>
                    `,
                    )
                    .join("")
                : emptyRow(7)
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAdvertiserCampaigns() {
  return renderAdvertiserProfile();
}

function renderCampaignFulfillment() {
  const campaignOptions = [...new Set([...adminCampaignFulfillmentRows.map((row) => row.campaign), ...officialTaskRows.map((row) => row.name)])];
  const selectedCampaign = campaignOptions.includes(state.adminFilters.selectedCampaign) ? state.adminFilters.selectedCampaign : campaignOptions[0];
  const isOfficialCampaign = officialTaskRows.some((row) => row.name === selectedCampaign);
  const backTarget = isOfficialCampaign ? "officialTaskCreate" : "advertiserProfile";
  const campaignBase =
    adminAdvertiserCampaignRows.find((row) => row.name === selectedCampaign) ||
    officialTaskRows.find((row) => row.name === selectedCampaign) ||
    {};
  const rows = adminCampaignFulfillmentRows.filter((row) => row.campaign === selectedCampaign);
  const displayRows = rows.length
    ? rows
    : isOfficialCampaign
      ? [
          {
            campaign: selectedCampaign,
            advertiser: "平台官方",
            platform: campaignBase.platform || "TikTok",
            creator: "待匹配达人",
            creatorId: "AUTO-0002",
            cooperationStatus: campaignBase.status === "已结束" ? "已完成" : "招募中",
            deliverableStatus: campaignBase.status === "已结束" ? "已完成" : "未开始",
            operationReview: "免审核",
            brandReview: "免审核",
            publishStatus: campaignBase.published ? "已发布" : "-",
            trackingStatus: campaignBase.status === "已结束" ? "已完成" : "-",
            settlementStatus: campaignBase.status === "已结束" ? "已结算" : "未结算",
            due: state.officialTaskDraft.deadline || "2026-07-05",
          },
        ]
      : [];
  const summary = displayRows[0];
  const collaboratorCount = Number(campaignBase.collaborators || displayRows.length || 0);
  const applicantCount = Number(campaignBase.applicants || campaignBase.creators || collaboratorCount || 0);
  const settlementCount = displayRows.filter((row) => row.settlementStatus === "待结算").length;
  const cooperationType = campaignBase.cooperationType || summary?.cooperationType || "-";
  return `
    ${pageHeader(
      "运营后台",
      "任务履单明细",
      "按广告主任务查看达人合作、交付、审核、发布与结算状态。",
      `<button class="icon-button page-back-icon" data-nav="${backTarget}" aria-label="返回${isOfficialCampaign ? "官方任务" : "广告主档案"}" title="返回">←</button>`,
    )}
    <div class="filter-bar sticky" style="margin-bottom:12px">
      <select class="select" data-action="select-admin-campaign">
        <option value="">查看更多任务单</option>
        ${campaignOptions
          .map((item) => `<option value="${encodeURIComponent(item)}" ${selectedCampaign === item ? "selected" : ""}>${item}</option>`)
          .join("")}
      </select>
    </div>
    <div class="panel campaign-basic-panel">
      <div class="table-head compact-head">
        <h2>任务基础信息</h2>
      </div>
      <div class="profile-meta-grid">
        <div class="profile-meta-item"><span>任务名称</span><strong>${selectedCampaign}</strong></div>
        <div class="profile-meta-item"><span>广告主</span><strong>${summary?.advertiser || campaignBase.advertiser || "平台官方"}</strong></div>
        <div class="profile-meta-item"><span>推广平台</span><strong>${campaignBase.platform || summary?.platform || "-"}</strong></div>
        <div class="profile-meta-item"><span>预算</span><strong>${campaignBase.budget || "-"}</strong></div>
        <div class="profile-meta-item"><span>合作方式</span><strong>${cooperationType}</strong></div>
        <div class="profile-meta-item"><span>任务状态</span><strong>${campaignBase.status || "-"}</strong></div>
        <div class="profile-meta-item profile-meta-item-counts">
          <span>达人数量</span>
          <div class="meta-counts-grid">
            <div class="meta-count">
              <small>报名达人</small>
              <strong>${applicantCount}</strong>
            </div>
            <div class="meta-count">
              <small>合作达人</small>
              <strong>${collaboratorCount}</strong>
            </div>
            <div class="meta-count">
              <small>结算达人</small>
              <strong>${settlementCount}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table-card" style="margin-top:16px">
      <div class="table-head"><h2>${selectedCampaign}</h2><span class="muted">达人履单明细</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>达人基本信息</th><th>合作状态</th><th>交付状态</th><th>平台审核</th>${isOfficialCampaign ? "" : "<th>广告主审核</th>"}<th>发布状态</th><th>效果追踪</th><th>结算状态</th><th>交付截止</th><th>操作</th></tr></thead>
          <tbody>
            ${
              displayRows.length
                ? displayRows
                    .map(
                      (row) => `
                      <tr>
                        <td>
                          <div class="row-title">
                            <button class="avatar-button" data-action="drawer-creator" data-name="${row.creator}" aria-label="查看 ${row.creator} 达人档案">
                              <img src="${row.platform.includes("TikTok") ? assets.talentAvatar1 : assets.talentAvatar2}" alt="" />
                            </button>
                            <span><strong>${row.creator}</strong><small>${row.creatorId} · ${row.platform}</small></span>
                          </div>
                        </td>
                        <td>${status(row.cooperationStatus, row.cooperationStatus.includes("待") ? "pending" : "running")}</td>
                        <td>${row.deliverableStatus}</td>
                        <td>${row.operationReview}</td>
                        ${isOfficialCampaign ? "" : `<td>${row.brandReview}</td>`}
                        <td>${row.publishStatus}</td>
                        <td>${row.trackingStatus}</td>
                        <td>${row.settlementStatus}</td>
                        <td>${row.due}</td>
                        <td><div class="table-actions-inline"><button class="link-button" data-action="open-admin-fulfillment-drawer" data-campaign="${encodeURIComponent(row.campaign)}" data-creator="${encodeURIComponent(row.creatorId)}">查看详情</button></div></td>
                      </tr>
                    `,
                    )
                    .join("")
                : emptyRow(isOfficialCampaign ? 9 : 10)
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAdminInfluencerDetailPage() {
  const profile = adminInfluencerRows.find((row) => row.name === state.adminFilters.selectedInfluencer) || adminInfluencerRows[0];
  const taskRows = profile.tasks
    .map((taskName) => {
      const matched = adminCampaignFulfillmentRows.find((row) => row.campaign === taskName && row.creator === profile.name) || adminCampaignFulfillmentRows.find((row) => row.campaign === taskName);
      if (matched) return matched;
      const officialTask = officialTaskRows.find((row) => row.name === taskName);
      return officialTask
        ? {
            campaign: officialTask.name,
            advertiser: "平台官方",
            platform: officialTask.platform,
            creatorId: `AUTO-${profile.name}`,
            cooperationStatus: officialTask.status === "已结束" ? "已完成" : "招募中",
            deliverableStatus: officialTask.status === "已结束" ? "已完成" : "未开始",
            publishStatus: officialTask.published ? "已发布" : "-",
          }
        : null;
    })
    .filter(Boolean)
    .slice(0, 6);
  return `
    ${pageHeader("运营后台", "达人详情", "查看达人基本档案，以及下方报名 / 履约任务明细列表。", `<button class="secondary-button" data-nav="influencerListAdmin">返回达人管理</button>`)}
    <div class="panel">
      <div class="row-title">
        <img src="${profile.avatar}" alt="" />
        <span><strong>${profile.name}</strong><small>${profile.platform} · ${profile.followers}</small></span>
      </div>
      <div class="profile-meta-grid" style="margin-top:14px">
        <div class="profile-meta-item"><span>账号状态</span><strong>${profile.status}</strong></div>
        <div class="profile-meta-item"><span>达人标签</span><strong>${profile.tags}</strong></div>
        <div class="profile-meta-item"><span>合作广告主</span><strong>${profile.advertiserCount}</strong></div>
        <div class="profile-meta-item"><span>历史任务</span><strong>${profile.taskCount}</strong></div>
        <div class="profile-meta-item"><span>合作广告主清单</span><strong>${profile.advertisers.join(" / ")}</strong></div>
      </div>
    </div>
    <div class="table-card" style="margin-top:16px">
      <div class="table-head"><h2>任务明细列表</h2><span class="muted">结构参考任务列表</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>任务名称</th><th>广告主</th><th>平台</th><th>合作状态</th><th>交付状态</th><th>发布状态</th><th>操作</th></tr></thead>
          <tbody>
            ${
              taskRows.length
                ? taskRows
                    .map(
                      (row) => `
                      <tr>
                        <td><strong>${row.campaign}</strong></td>
                        <td>${row.advertiser}</td>
                        <td>${row.platform}</td>
                        <td>${row.cooperationStatus}</td>
                        <td>${row.deliverableStatus}</td>
                        <td>${row.publishStatus}</td>
                        <td><div class="table-actions-inline"><button class="link-button" data-action="open-admin-fulfillment-drawer" data-campaign="${encodeURIComponent(row.campaign)}" data-creator="${encodeURIComponent(row.creatorId)}">查看详情</button></div></td>
                      </tr>
                    `,
                    )
                    .join("")
                : emptyRow(7)
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderInfluencerListAdmin() {
  const rows = filteredInfluencerRows();
  const platforms = ["全部", ...new Set(adminInfluencerRows.map((row) => row.platform))];
  return `
    ${pageHeader("运营后台", "达人管理", "支持按达人昵称、平台、达人状态搜索，并查看合作广告主和合作任务。", ``)}
    <div class="table-card">
      <div class="table-head"><h2>达人列表</h2><span class="muted">共 ${rows.length} 位</span></div>
      <div class="filter-bar sticky">
        <input class="input" placeholder="搜索达人昵称" value="${state.adminFilters.influencerKeyword}" data-admin-filter="influencerKeyword" />
        <select class="select" data-admin-filter="influencerPlatform">
          ${platforms.map((item) => `<option value="${item}" ${state.adminFilters.influencerPlatform === item ? "selected" : ""}>${item}</option>`).join("")}
        </select>
        <select class="select" data-admin-filter="influencerStatus">
          <option value="全部" ${state.adminFilters.influencerStatus === "全部" ? "selected" : ""}>全部状态</option>
          <option value="正常" ${state.adminFilters.influencerStatus === "正常" ? "selected" : ""}>正常</option>
          <option value="停用" ${state.adminFilters.influencerStatus === "停用" ? "selected" : ""}>停用</option>
        </select>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>达人基本信息</th><th>平台</th><th>达人标签</th><th>粉丝数</th><th>状态</th><th>合作广告主</th><th>合作任务</th><th>操作</th></tr></thead>
          <tbody>
            ${rows.length
              ? rows
                  .map(
                    (row) => `
                    <tr>
                      <td><div class="row-title"><img src="${row.avatar}" alt="" /><span><strong>${row.name}</strong><small>${row.platform} 达人账号</small></span></div></td>
                      <td>${row.platform}</td>
                      <td>${row.tags}</td>
                      <td>${row.followers}</td>
                      <td>${status(row.status, row.statusClass)}</td>
                      <td><button class="link-button" data-action="open-admin-list-drawer" data-kind="advertisers" data-name="${encodeURIComponent(row.name)}">${row.advertiserCount}</button></td>
                      <td><button class="link-button" data-action="open-admin-list-drawer" data-kind="tasks" data-name="${encodeURIComponent(row.name)}">${row.taskCount}</button></td>
                      <td><div class="table-actions-inline"><button class="link-button" data-action="open-admin-influencer-detail" data-name="${encodeURIComponent(row.name)}">查看详情</button><button class="link-button" data-action="toast" data-message="已打开编辑入口">编辑</button><button class="link-button" data-action="toast" data-message="${row.status === "正常" ? "该达人已停用" : "该达人已恢复正常"}">${row.status === "正常" ? "停用" : "启用"}</button></div></td>
                    </tr>
                  `,
                  )
                  .join("")
              : emptyRow(8)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderEmailInvitesAdmin() {
  const activeTab = state.tabs.emailInvitesAdmin || "inviteList";
  const inviteRows = [
    ["The Waifu Connoisseur", "tishakouri@gmail.com", "11", "已发送", "done", "2026-5-10 59:20"],
    ["SultanTheDerp", "waifuconnoisseurr@gmail.com", "11", "待发送", "draft", "2026-5-10 59:20"],
    ["KitaSean", "contact.dawn.music@gmail.com", "11", "待发送", "draft", "2026-5-10 59:20"],
    ["Dawn. music", "dimivgaming@hotmail.com", "11", "待发送", "draft", "2026-5-10 59:20"],
    ["Anime Pro", "hina.lakki@o2.pl", "11", "待发送", "draft", "-"],
  ];
  const historyRows = [
    ["2026-6-5 10:59:20", "官方主题邮件：邀请注册 MeetInfluencer", "99", "99 100%", "99 100%", "99 100%"],
    ["2026-6-4 10:59:20", "官方主题邮件：TikTok 游戏达人招募", "60", "60 100%", "52 86.7%", "31 51.7%"],
    ["2026-6-3 10:59:20", "官方主题邮件：英国香氛合作专场", "50", "50 100%", "41 82.0%", "26 52.0%"],
    ["2026-6-1 10:59:20", "官方主题邮件：平台精选合作主题内容", "150", "142 94.7%", "98 69.0%", "76 53.5%"],
  ];
  return `
    ${pageHeader(
      "运营后台",
      "邮件邀约",
      "批量筛选达人、发送邀约邮件，并跟踪送达、打开、点击和失败重试结果。",
      ``,
    )}
    <div class="email-metrics">
      ${metrics([
        { label: "可邀约达人", value: "658", delta: "已接入邮箱" },
        { label: "今日发送", value: "99", delta: "送达率 100%" },
        { label: "待发送", value: "48", delta: "可批量处理" },
        { label: "失败待重试", value: "6", delta: "SMTP / 邮箱异常" },
      ])}
    </div>
    <div class="filter-bar sticky email-admin-filter">
      <input class="input" placeholder="请输入你需要搜索的达人" />
      <select class="select"><option>邀约状态</option><option>已发送</option><option>待发送</option><option>发送失败</option></select>
      <input class="input" placeholder="发送时间" />
      <button class="secondary-button" data-action="toast" data-message="邮件邀约筛选已应用">查询</button>
      <button class="ghost-button" data-action="toast" data-message="列表已刷新">刷新</button>
      <button class="primary-button" data-action="modal-email-send">发送邮件</button>
    </div>
    <div class="tabs email-admin-tabs">
      <button class="tab ${activeTab === "inviteList" ? "active" : ""}" data-action="set-email-invite-tab" data-tab="inviteList">达人邀约列表</button>
      <button class="tab ${activeTab === "history" ? "active" : ""}" data-action="set-email-invite-tab" data-tab="history">历史邮件</button>
    </div>
    ${
      activeTab === "inviteList"
        ? `
          <div class="table-card">
            <div class="table-head">
              <h2>达人邀约列表</h2>
              <span class="muted">支持勾选后批量发送</span>
            </div>
            <div class="table-wrap">
              <table class="email-invite-table">
                <thead>
                  <tr><th><input type="checkbox" aria-label="全选达人" /></th><th>达人</th><th>邮箱</th><th>已发邮件数</th><th>邀约状态</th><th>最近邮件发送时间</th><th>操作</th></tr>
                </thead>
                <tbody>
                  ${inviteRows
                    .map(
                      (row) => `
                        <tr>
                          <td><input type="checkbox" aria-label="选择 ${row[0]}" /></td>
                          <td><strong>${row[0]}</strong></td>
                          <td>${row[1]}</td>
                          <td>${row[2]}</td>
                          <td>${status(row[3], row[4])}</td>
                          <td>${row[5]}</td>
                          <td><div class="actions"><button class="link-button" data-action="modal-email-detail">发送明细</button><button class="link-button" data-action="modal-email-send">发邮件</button></div></td>
                        </tr>
                      `,
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </div>
        `
        : `
          <div class="table-card email-history-card">
            <div class="table-head">
              <h2>历史邮件</h2>
              <span class="muted">查看官方按主题内容发送的历史邮件记录，并追踪每次群发的送达、打开和点击表现。</span>
            </div>
            <div class="table-wrap">
              <table>
                <thead><tr><th>发送时间</th><th>邮件主题</th><th>发送数</th><th>送达数</th><th>打开数</th><th>点击数</th><th>操作</th></tr></thead>
                <tbody>
                  ${historyRows
                    .map(
                      (row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td><td><div class="actions"><button class="link-button" data-action="modal-email-detail">发送明细</button><button class="link-button" data-action="toast" data-message="导出任务已创建">导出数据</button></div></td></tr>`,
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </div>
        `
    }
  `;
}

function openEmailSendModal() {
  const recipients = [
    "全部达人",
    "The Waifu Connoisseur",
    "SultanTheDerp",
    "KitaSean",
    "Dawn. music",
    "Anime Pro",
  ];
  openModal(
    `
    <div class="modal-head">
      <div><h2>邮件邀约</h2><p class="subcopy">填写邮件主题和内容，支持对勾选达人批量发送。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        ${field("收件人", `<select class="select">${recipients.map((item, index) => `<option value="${item}" ${index === 0 ? "selected" : ""}>${item}</option>`).join("")}</select>`, false)}
        ${field("邮件主题", `<input class="input" placeholder="请输入邮件主题" value="邀约注册MeetInfluencer" />`, true)}
        ${field("邮件内容", `<textarea class="textarea email-compose-body" placeholder="请输入邮件内容">Hi {{creator_name}}，我们正在邀请优质创作者加入 MeetInfluencer 平台。完成注册后，你可以收到品牌合作邀约并管理合作收益。</textarea>`, true, "full")}
      </div>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">取消</button>
      <button class="primary-button" data-action="modal-email-feedback">确认发送</button>
    </div>
  `,
    false,
  );
}

function openEmailFeedbackModal() {
  openModal(
    `
    <div class="modal-head">
      <div><h2>邮件发送完成</h2><p class="subcopy">本次发送结果已生成，可继续查看发送明细。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="note-box">本次发送 50 人，成功 48 人，失败 2 人。</div>
      <div class="email-result-grid">
        <div><strong>48</strong><span>发送成功</span></div>
        <div><strong>2</strong><span>失败待重试</span></div>
        <div><strong>96%</strong><span>送达率</span></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">关闭</button>
      <button class="primary-button" data-action="modal-email-detail">查看明细</button>
    </div>
  `,
    true,
  );
}

function openEmailDetailModal() {
  openModal(
    `
    <div class="modal-head">
      <div><h2>发送明细</h2><p class="subcopy">邮件任务：邀约注册MeetInfluencer</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="table-wrap">
        <table>
          <thead><tr><th>序号</th><th>邮件主题</th><th>邮件内容</th><th>状态</th><th>发送时间</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>邀约注册MeetInfluencer</td><td>Hi {{creator_name}}，我们正在邀请优质创作者加入 MeetInfluencer 平台。</td><td>${status("已送达", "done")}</td><td>2026-1-5 10:59:20</td></tr>
            <tr><td>2</td><td>邀约注册MeetInfluencer</td><td>Hi {{creator_name}}，完成注册后你可以收到品牌合作邀约并管理合作收益。</td><td>${status("已打开", "running")}</td><td>2026-1-5 10:59:20</td></tr>
            <tr><td>3</td><td>邀约注册MeetInfluencer</td><td>Hi {{creator_name}}，我们正在邀请优质创作者加入 MeetInfluencer 平台。</td><td>${status("已送达", "done")}</td><td>2026-1-5 10:59:20</td></tr>
            <tr><td>4</td><td>邀约注册MeetInfluencer</td><td>Hi {{creator_name}}，完成注册后你可以收到品牌合作邀约并管理合作收益。</td><td>${status("已点击", "done")}</td><td>2026-1-5 10:59:20</td></tr>
            <tr><td>5</td><td>邀约注册MeetInfluencer</td><td>Hi {{creator_name}}，我们正在邀请优质创作者加入 MeetInfluencer 平台。</td><td>${status("SMTP连接超时", "rejected")}</td><td>2026-1-5 10:59:20</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
    false,
  );
}

function openEmailHistoryModal() {
  openModal(
    `
    <div class="modal-head">
      <div><h2>历史邮件记录</h2><p class="subcopy">查看官方按主题内容发送的历史邮件记录，并追踪每次群发的送达、打开和点击表现。。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="filter-bar email-history-filter">
        <input class="input" placeholder="发送主题" />
        <input class="input" placeholder="发送时间" />
        <button class="secondary-button" data-action="toast" data-message="历史邮件筛选已应用">查询</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>发送时间</th><th>邮件主题</th><th>发送数</th><th>送达数</th><th>打开数</th><th>点击数</th><th>操作</th></tr></thead>
          <tbody>
            <tr><td>2026-6-5 10:59:20</td><td>邀约注册MeetInfluencer</td><td>99</td><td>99 100%</td><td>99 100%</td><td>99 100%</td><td><div class="actions"><button class="link-button" data-action="modal-email-detail">发送明细</button><button class="link-button" data-action="toast" data-message="导出任务已创建">导出数据</button></div></td></tr>
            <tr><td>2026-6-4 10:59:20</td><td>邀约注册MeetInfluencer</td><td>60</td><td>60 100%</td><td>60 100%</td><td>60 100%</td><td><div class="actions"><button class="link-button" data-action="modal-email-detail">发送明细</button><button class="link-button" data-action="toast" data-message="导出任务已创建">导出数据</button></div></td></tr>
            <tr><td>2026-6-3 10:59:20</td><td>邀约注册MeetInfluencer</td><td>50</td><td>50 100%</td><td>50</td><td>50 100%</td><td><div class="actions"><button class="link-button" data-action="modal-email-detail">发送明细</button><button class="link-button" data-action="toast" data-message="导出任务已创建">导出数据</button></div></td></tr>
            <tr><td>2026-6-1 10:59:20</td><td>主题内容</td><td>150</td><td>142 94.7%</td><td>98 69.0%</td><td>76 53.5%</td><td><div class="actions"><button class="link-button" data-action="modal-email-detail">发送明细</button><button class="link-button" data-action="toast" data-message="导出任务已创建">导出数据</button></div></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">关闭</button>
    </div>
  `,
    false,
  );
}

function renderOperationsManagementAdmin() {
  return `
    ${pageHeader("运营后台", "运营管理", "统一维护登录页内容和平台运营配置。")}
    <div class="grid two-col">
      <div class="panel">
        <div class="section-row">
          <h2>登录页配置</h2>
          <button class="primary-button" data-nav="loginPageConfigAdmin">进入配置</button>
        </div>
        <p class="subcopy">维护运营端登录页的展示文案、入口信息和可配置模块。</p>
      </div>
      <div class="panel">
        <div class="section-row">
          <h2>标签管理</h2>
          <button class="primary-button" data-nav="gameTagsAdmin">进入管理</button>
        </div>
        <p class="subcopy">维护达人标签、游戏类目、内容属性和平台推荐时使用的基础标签。</p>
      </div>
    </div>
  `;
}

function renderLoginPageConfigAdmin() {
  return `
    ${pageHeader("运营后台", "登录页配置", "用于维护官方登录平台左侧 Banner 图配置。")}
    <div class="table-card login-banner-table-card">
      <div class="table-head">
        <div>
          <h2>Banner 列表</h2>
          <p class="subcopy">用于 Meetinfluencer 登录页轮播图配置，推荐尺寸 900 × 1500</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>图片位置</th>
              <th>图片</th>
              <th>图片尺寸</th>
              <th>最后更新</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${loginPageBannerRows
              .map(
                (row, index) => `
                  <tr>
                    <td><strong>${index + 1}</strong></td>
                    <td>
                      <button class="login-banner-thumb login-banner-thumb-${row.tone}" data-action="preview-login-banner" data-id="${row.id}">
                        <span>${row.title}</span>
                      </button>
                    </td>
                    <td>${row.size}</td>
                    <td>${row.updatedAt}</td>
                    <td>
                      <div class="actions">
                        <button class="link-button" data-action="edit-login-banner" data-id="${row.id}">修改图片</button>
                      </div>
                    </td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <input id="loginBannerUploadInput" type="file" accept="image/*" hidden />
    </div>
  `;
}

function renderGameTagsAdmin() {
  return `${pageHeader("运营后台", "标签管理", "维护达人标签、游戏类目与内容属性映射。")}<div class="panel"><p class="subcopy">此页先作为标签管理占位，后续可补新增、编辑、停用与使用次数统计。</p></div>`;
}

function renderUsersAdmin() {
  return `${pageHeader("运营后台", "用户管理", "查看平台广告主、达人与运营账号。")}<div class="panel"><p class="subcopy">此页先作为用户管理占位，后续可补角色、状态、最后登录时间与账号操作。</p></div>`;
}

function renderReviewCenter() {
  return `
    ${pageHeader("运营后台", "审核管理", "统一进入活动审核、报名审核、产物审核与官方任务。")}
    <div class="grid two-col">
      <div class="panel">
        <div class="timeline" style="margin-top:4px">
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>活动审核</strong><p>查看广告主提交的活动需求，并通过状态筛选追溯历史审核结果。</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>报名审核</strong><p>查看达人报名、通过 / 拒绝记录与当前待处理队列。</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>产物审核</strong><p>查看内容交付审核队列，并跟踪历史审核通过 / 拒绝数据。</p></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>官方任务</strong><p>运营可直接创建并查看历史官方任务，查看详情后继续跟进达人报名与履约。</p></div></div>
        </div>
      </div>
      <div class="panel">
        <div class="chips">
          <button class="chip active" data-nav="campaignReviewAdmin">活动审核</button>
          <button class="chip active" data-nav="creatorApplicationReviewAdmin">报名审核</button>
          <button class="chip active" data-nav="creatorDeliverableReviewAdmin">产物审核</button>
          <button class="chip active" data-nav="officialTaskCreate">官方任务</button>
        </div>
      </div>
    </div>
  `;
}

function renderCampaignReviewAdmin() {
  const pendingRows = [
    { taskName: "MINISO 英国开学季选品合作", target: "MINISO 官方旗舰店", reason: "等待运营确认信息完整性与合规性。" },
    { taskName: "Anker 充电配件新品推广", target: "Anker", reason: "等待运营审核产品素材与链接信息。" },
  ];
  return renderAdminReviewQueue("campaignReviewAdmin", "活动审核", "任务审核", pendingRows);
}

function renderCreatorInvitationReviewAdmin() {
  const pendingRows = [
    { taskName: "全境封锁2-上线活动", target: "邀约审核 · Mika Studio", reason: "等待确认邀约名额与报价规则。" },
  ];
  return renderAdminReviewQueue("creatorInvitationReviewAdmin", "邀约审核", "任务审核", pendingRows);
}

function renderCreatorApplicationReviewAdmin() {
  const pendingRows = [
    { taskName: "MINISO 夏季新品内容合作", target: "达人报名审核 · Luna Trend", reason: "等待审核达人标签、内容方向与历史履约表现。" },
    { taskName: "Anker 充电配件新品推广", target: "达人报名审核 · Tech Otto", reason: "等待核对达人平台垂类与报价。" },
  ];
  return renderAdminReviewQueue("creatorApplicationReviewAdmin", "报名审核", "达人报名", pendingRows);
}

function renderCreatorDeliverableReviewAdmin() {
  const pendingRows = [
    { taskName: "MINISO 夏季新品内容合作", target: "内容审核 · Mika Studio", reason: "等待审核当前内容版本与品牌露出规范。" },
    { taskName: "椰子水夏季饮品种草", target: "内容审核 · Daily Miki", reason: "等待审核 Hashtag、开场露出与素材规范。" },
  ];
  return renderAdminReviewQueue("creatorDeliverableReviewAdmin", "产物审核", "内容审核", pendingRows);
}

function renderPayoutAdmin() {
  const tab = state.tabs.payoutAdmin || "all";
  const pendingCount = payoutRows.filter((row) => row.status === "待打款").length;
  const failedCount = payoutRows.filter((row) => row.status === "失败").length;
  const paidCount = payoutRows.filter((row) => row.status === "已打款").length;
  const invalidCount = payoutRows.filter((row) => row.status === "已作废").length;
  const visibleRows = payoutRows.filter((row) => {
    if (tab === "pending") return row.status === "待打款";
    if (tab === "paid") return row.status === "已打款";
    if (tab === "failed") return row.status === "失败";
    if (tab === "invalid") return row.status === "已作废";
    return true;
  });
  return `
    ${pageHeader("运营后台", "结算管理", "用于处理线下人工打款记录，并补充打款或驳回标记。")}
    <div class="grid metrics">
      <div class="metric-card"><span>待打款</span><strong style="color:#f59e0b">${pendingCount}</strong></div>
      <div class="metric-card"><span>失败</span><strong>${failedCount}</strong></div>
      <div class="metric-card"><span>已打款记录</span><strong style="color:#10b981">${paidCount}</strong></div>
      <div class="metric-card"><span>已作废</span><strong>${invalidCount}</strong></div>
    </div>
    <div class="tabs">
      ${tabButton("payoutAdmin", "all", `全部 ${payoutRows.length}`)}
      ${tabButton("payoutAdmin", "pending", `待打款 ${pendingCount}`)}
      ${tabButton("payoutAdmin", "paid", `已打款 ${paidCount}`)}
      ${tabButton("payoutAdmin", "failed", `失败 ${failedCount}`)}
      ${tabButton("payoutAdmin", "invalid", `已作废 ${invalidCount}`)}
    </div>
    <div class="table-card">
      <div class="table-head">
        <div>
          <h2>手动打款队列</h2>
          <p class="subcopy">仅线下打款。敏感账户详情需要显式点击查看并会被审计。</p>
        </div>
        <button class="ghost-button" data-action="toast" data-message="列表已刷新">刷新</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>活动</th>
              <th>达人</th>
              <th>金额</th>
              <th>状态</th>
              <th>账户</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${
              visibleRows.length
                ? visibleRows
                    .map(
                      (row) => `
                        <tr>
                          <td><strong>${row.campaign}</strong><br /><span class="muted">${row.subtitle}</span></td>
                          <td>${row.creator}</td>
                          <td class="money">${row.amount}</td>
                          <td>${status(row.status, row.statusClass)}</td>
                          <td>${row.account}</td>
                          <td>
                            <div class="actions">
                              ${
                                row.status === "待打款"
                                  ? `<button class="link-button" data-action="confirm-payout-paid" data-id="${row.id}">标记打款</button><button class="link-button" data-action="open-payout-reject" data-id="${row.id}">驳回</button>`
                                  : `<button class="link-button" data-action="open-payout-detail" data-id="${row.id}">查看详情</button>`
                              }
                            </div>
                          </td>
                        </tr>
                      `,
                    )
                    .join("")
                : emptyRow(6)
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderSettingsAdmin() {
  return `${pageHeader("运营后台", "系统设置", "查看基础配置、角色权限与系统说明。")}<div class="panel"><p class="subcopy">此页先作为系统设置占位，后续可补 RBAC、通知模板与基础配置项。</p></div>`;
}

function renderOfficialTaskCreate() {
  const draft = state.officialTaskDraft;
  const createdStart = state.adminFilters.officialTaskCreatedStart ? new Date(state.adminFilters.officialTaskCreatedStart) : null;
  const createdEnd = state.adminFilters.officialTaskCreatedEnd ? new Date(state.adminFilters.officialTaskCreatedEnd) : null;
  const rows = officialTaskRows
    .filter((row) => !state.adminFilters.officialTaskKeyword || row.name.includes(state.adminFilters.officialTaskKeyword))
    .filter((row) => state.adminFilters.officialTaskStatus === "全部" || row.status === state.adminFilters.officialTaskStatus)
    .filter((row) => {
      const created = new Date(normalizeDateTimeInput(row.createdAt));
      if (createdStart && created < createdStart) return false;
      if (createdEnd && created > createdEnd) return false;
      return true;
    });
  return `
    ${pageHeader(
      "运营后台",
      "官方任务",
      "默认查看历史官方任务，点击创建后再进入任务配置页面。",
      `<button class="secondary-button" data-nav="reviewCenter">返回审核管理</button>${state.officialTaskFormOpen ? `<button class="ghost-button" data-action="toggle-official-task-form">收起创建页</button>` : `<button class="primary-button" data-action="toggle-official-task-form">创建官方任务</button>`}`,
    )}
    <div class="page-stack">
      ${
        state.officialTaskFormOpen
          ? `
            <div class="panel">
              <h2>任务信息</h2>
              <div class="form-grid">
                ${field("任务名称", `<input class="input" value="${draft.taskName}" data-official-field="taskName" />`, true)}
                ${field("推广平台", `<input class="input" value="${draft.platforms}" data-official-field="platforms" />`, true)}
                ${field("推广国家 / 地区", `<input class="input" value="${draft.region}" data-official-field="region" />`, true)}
                ${field("推广产品", `<input class="input" value="${draft.productName}" data-official-field="productName" />`, true)}
                ${field("产品链接", `<input class="input" value="${draft.productLink}" data-official-field="productLink" />`, false)}
                ${field("产品描述", `<textarea class="textarea" data-official-field="productDesc">${draft.productDesc}</textarea>`, false, "full")}
              </div>
            </div>
            <div class="panel" style="margin-top:16px">
              <h2>达人要求</h2>
              <div class="form-grid">
                ${field("达人类型要求", `<input class="input" value="${draft.creatorTypes}" data-official-field="creatorTypes" />`, true)}
                ${field("合作达人数量", `<input class="input" value="${draft.creatorCount}" data-official-field="creatorCount" />`, true)}
                ${field("达人粉丝数要求", `<input class="input" value="${draft.followerRange}" data-official-field="followerRange" />`, true)}
                ${field("合作类型", `<input class="input" value="${draft.cooperationTypes}" data-official-field="cooperationTypes" />`, true)}
                ${field("内容要求", `<textarea class="textarea" data-official-field="contentRequirement">${draft.contentRequirement}</textarea>`, true, "full")}
              </div>
            </div>
            <div class="panel" style="margin-top:16px">
              <h2>预算计划</h2>
              <div class="form-grid">
                ${field("总预算 USD", `<input class="input" value="${draft.budget}" data-official-field="budget" />`, true)}
                ${field("期望效果", `<input class="input" value="${draft.expectedEffect}" data-official-field="expectedEffect" />`, true)}
                ${field("结算方式", `<select class="select" data-official-field="settlement"><option ${draft.settlement === "固定价" ? "selected" : ""}>固定价</option><option ${draft.settlement === "固定CPM" ? "selected" : ""}>固定CPM</option><option ${draft.settlement === "按曝光量区间" ? "selected" : ""}>按曝光量区间</option></select>`, true)}
                ${field("结算周期", `<select class="select" data-official-field="settlementCycle"><option ${draft.settlementCycle === "按3天实际曝光量结算" ? "selected" : ""}>按3天实际曝光量结算</option><option ${draft.settlementCycle === "按7天实际曝光量结算" ? "selected" : ""}>按7天实际曝光量结算</option><option ${draft.settlementCycle === "按14天实际曝光量结算" ? "selected" : ""}>按14天实际曝光量结算</option></select>`, true)}
                ${field("达人报名时间", `<input class="input" value="${draft.registrationRange}" data-official-field="registrationRange" />`, false)}
                ${field("项目截止日期", `<input class="input" value="${draft.deadline}" data-official-field="deadline" />`, true)}
                ${field("运营备注", `<textarea class="textarea" data-official-field="note">${draft.note}</textarea>`, false, "full")}
              </div>
              <div class="actions" style="margin-top:16px">
                <button class="ghost-button" data-action="save-official-task-draft">保存草稿</button>
                <button class="primary-button" data-action="submit-official-task">发布官方任务</button>
              </div>
            </div>
          `
          : ""
      }
      <div class="table-card" style="margin-top:16px">
        <div class="table-head"><h2>官方任务</h2><span class="muted">可按任务名称、状态、创建时间筛选</span></div>
        <div class="filter-bar sticky">
          <input class="input" placeholder="搜索任务名称" value="${state.adminFilters.officialTaskKeyword}" data-admin-filter="officialTaskKeyword" />
          <select class="select" data-admin-filter="officialTaskStatus">
            <option value="全部" ${state.adminFilters.officialTaskStatus === "全部" ? "selected" : ""}>全部状态</option>
            <option value="招募中" ${state.adminFilters.officialTaskStatus === "招募中" ? "selected" : ""}>招募中</option>
            <option value="进行中" ${state.adminFilters.officialTaskStatus === "进行中" ? "selected" : ""}>进行中</option>
            <option value="已结束" ${state.adminFilters.officialTaskStatus === "已结束" ? "selected" : ""}>已结束</option>
          </select>
          <div class="date-inputs admin-date-range">
            <span class="date-label">创建时间</span>
            <input class="filter-input" type="datetime-local" step="1" value="${state.adminFilters.officialTaskCreatedStart}" data-admin-filter="officialTaskCreatedStart" aria-label="创建时间开始" />
            <span class="date-arrow">→</span>
            <input class="filter-input" type="datetime-local" step="1" value="${state.adminFilters.officialTaskCreatedEnd}" data-admin-filter="officialTaskCreatedEnd" aria-label="创建时间结束" />
          </div>
        </div>
        <div class="table-wrap" style="max-height:360px; overflow:auto">
          <table class="review-table">
            <thead><tr><th>任务名称</th><th>平台</th><th>合作类型</th><th>地区</th><th>报名达人</th><th>合作达人</th><th>已发布</th><th>预算</th><th>状态</th><th>创建时间</th><th>操作</th></tr></thead>
            <tbody>
              ${
                rows.length
                  ? rows
                      .map(
                        (row) => `
                        <tr>
                          <td><strong>${row.name}</strong></td>
                          <td>${row.platform}</td>
                          <td>${row.cooperationType}</td>
                          <td>${row.region}</td>
                          <td>${row.applicants}</td>
                          <td>${row.collaborators}</td>
                          <td>${row.published}</td>
                          <td>${row.budget}</td>
                          <td>${status(row.status, row.statusClass)}</td>
                          <td>${row.createdAt}</td>
                          <td><div class="table-actions-inline"><button class="link-button" data-action="open-campaign-fulfillment" data-value="${encodeURIComponent(row.name)}">查看详情</button></div></td>
                        </tr>
                      `,
                      )
                      .join("")
                  : emptyRow(11)
              }
            </tbody>
          </table>
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
  adminDashboard: renderAdminDashboard,
  reviewCenter: renderReviewCenter,
  advertiserList: renderAdvertiserList,
  advertiserProfile: renderAdvertiserProfile,
  advertiserCampaigns: renderAdvertiserCampaigns,
  influencerListAdmin: renderInfluencerListAdmin,
  influencerDetailAdmin: renderAdminInfluencerDetailPage,
  emailInvitesAdmin: renderEmailInvitesAdmin,
  operationsManagementAdmin: renderOperationsManagementAdmin,
  loginPageConfigAdmin: renderLoginPageConfigAdmin,
  gameTagsAdmin: renderGameTagsAdmin,
  usersAdmin: renderUsersAdmin,
  campaignReviewAdmin: renderCampaignReviewAdmin,
  creatorInvitationReviewAdmin: renderCreatorInvitationReviewAdmin,
  creatorApplicationReviewAdmin: renderCreatorApplicationReviewAdmin,
  creatorDeliverableReviewAdmin: renderCreatorDeliverableReviewAdmin,
  payoutAdmin: renderPayoutAdmin,
  campaignFulfillment: renderCampaignFulfillment,
  officialTaskCreate: renderOfficialTaskCreate,
  settingsAdmin: renderSettingsAdmin,
  myTalentProfile: renderMyTalentProfile,
  promotions: renderPromotions,
  publishTask: renderPublishTask,
  taskReview: renderTaskReview,
  talentManagement: renderTalentManagement,
  collaborators: renderCollaborators,
  talentSearch: renderTalentSearch,
  myTalents: renderMyTalents,
  account: renderAccount,
  opportunityHall: renderOpportunityHall,
  taskDetail: renderTaskDetail,
  applications: renderApplications,
  invitations: renderInvitations,
  myProjects: renderMyProjects,
  projectProgress: renderProjectProgressPage,
  revenue: renderRevenue,
  socialAuth: renderSocialAuth,
  notificationRecords: renderNotificationRecords,
  personalCenter: renderPersonalCenter,
};

function openModal(content, small = false, extraClass = "") {
  modalRoot.innerHTML = `
    <div class="modal-backdrop" data-action="close-overlay"></div>
    <div class="modal ${small ? "small" : ""} ${extraClass}" role="dialog" aria-modal="true">
      ${content}
    </div>
  `;
}

function openAdminListDrawer(name = "", kind = "advertisers") {
  const profile = adminInfluencerRows.find((row) => row.name === name);
  const items = kind === "tasks" ? profile?.tasks || [] : profile?.advertisers || [];
  const title = kind === "tasks" ? "历史合作任务" : "合作广告主清单";
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div><h2>${name}</h2><p class="subcopy">${title}</p></div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        <div class="timeline">
          ${
            items.length
              ? items
                  .map(
                    (item) => `
                    <div class="timeline-item">
                      <span class="timeline-dot"></span>
                      <div>
                        ${
                          kind === "tasks"
                            ? `<button class="link-button" data-action="open-campaign-fulfillment" data-value="${encodeURIComponent(item)}"><strong>${item}</strong></button>`
                            : `<strong>${item}</strong>`
                        }
                        <p>${kind === "tasks" ? "可继续查看任务履约详情" : "当前达人已合作广告主"}</p>
                      </div>
                    </div>
                  `,
                  )
                  .join("")
              : `<div class="empty-state"><strong>暂无记录</strong><span class="muted">当前没有可展示的数据。</span></div>`
          }
        </div>
      </div>
    </aside>
  `;
}

function openSocialAuthModal(platform = "TikTok") {
  state.socialAuthDraft.platform = platform;
  const method = state.socialAuthDraft.method || "oauth";
  openModal(
    `
    <div class="modal-head">
      <div><h2>平台认证（二选一）</h2><p class="subcopy">选择一种方式完成 ${platform} 账号认证。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="auth-platform-readonly">
        <span class="social-auth-icon">${socialPlatformIcon(platform)}</span>
        <div><span>认证平台</span><strong>${platform}</strong></div>
      </div>
      <div class="auth-method-switch">
        <button class="auth-method-tab ${method === "oauth" ? "active" : ""}" data-action="set-social-auth-method" data-method="oauth">方式一：第三方平台授权</button>
        <button class="auth-method-tab ${method === "screenshot" ? "active" : ""}" data-action="set-social-auth-method" data-method="screenshot">方式二：主页截图认证</button>
      </div>
      <div class="auth-choice-grid">
        ${
          method === "oauth"
            ? `
              <section class="auth-choice-card primary-choice selected">
                <div class="auth-choice-title">
                  <span class="social-auth-icon">${socialPlatformIcon(platform)}</span>
                  <div><strong>第三方平台授权</strong><p>点击后跳转平台完成授权验证。</p></div>
                </div>
                <button class="secondary-button auth-wide-button" data-action="toast-close" data-message="已发起第三方授权认证">跳转认证</button>
              </section>
            `
            : `
              <section class="auth-choice-card selected">
                <div class="auth-choice-title">
                  <span class="social-auth-icon">▧</span>
                  <div><strong>主页截图认证</strong><p>通过账号主页链接和截图完成认证。</p></div>
                </div>
                <div class="form-grid compact-form">
                  ${field("主页链接", `<input class="input" placeholder="请输入账号主页链接" />`, true, "full")}
                  ${field("认证截图", `<button class="ghost-button upload-line" data-action="toast" data-message="截图已加入上传队列">+ 上传主页截图</button>`, true, "full")}
                </div>
              </section>
            `
        }
      </div>
      <div class="note-box">同一平台可认证多个账号；提交后进入平台审核。</div>
    </div>
    ${
      method === "screenshot"
        ? `<div class="modal-foot">
      <button class="primary-button" data-action="toast-close" data-message="认证申请已提交，等待平台审核">提交认证</button>
    </div>`
        : ""
    }
  `,
  );
}

function openNotificationCenterDrawer() {
  const items =
    state.role === "brand"
      ? state.brandNotifications.items
      : state.role === "creator"
        ? state.creatorNotifications.items
        : [];
  if (state.role === "brand") state.brandNotifications.unreadCount = 0;
  if (state.role === "creator") state.creatorNotifications.unreadCount = 0;
  renderTopbar();
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div><h2>通知中心</h2><p class="subcopy">${state.role === "brand" ? "站内信提醒与你相关的报名与交付动作。" : state.role === "creator" ? "及时查看报名与产物审核结果。" : "当前角色暂无站内信提醒。"}</p></div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        <div class="actions" style="margin-bottom:14px">
          <button class="secondary-button" data-action="close-and-nav" data-page="notificationRecords">查看全部记录</button>
        </div>
        ${
          items.length
            ? `<div class="timeline">
                ${items
                  .map(
                    (item) => `
                    <div class="timeline-item notification-item">
                      <span class="timeline-dot"></span>
                      <div>
                        <div class="notification-head">
                          <strong>${item.title}</strong>
                          <span class="muted">${item.time}</span>
                        </div>
                        <p>${item.content}</p>
                        <div class="actions" style="margin-top:10px">
                          <button class="secondary-button mini-button" data-action="open-notification" data-type="${item.type}" data-task="${encodeURIComponent(item.task || "")}" data-status="${encodeURIComponent(item.statusKey || "")}">${item.cta}</button>
                        </div>
                      </div>
                    </div>
                  `,
                  )
                  .join("")}
              </div>`
            : `<div class="empty-state"><strong>暂无通知</strong><span class="muted">当前没有需要处理的站内信提醒。</span></div>`
        }
      </div>
    </aside>
  `;
}

function openReasonModal(reason = "") {
  openModal(
    `
    <div class="modal-head">
      <div><h2>报名理由</h2><p class="subcopy">查看达人提交的报名说明。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body">
      <div class="note-box">${reason || "-"}</div>
    </div>
    <div class="modal-foot">
      <button class="primary-button" data-action="close-overlay">我知道了</button>
    </div>
  `,
    true,
  );
}

function openPublishModal() {
  state.publishDraft.matchDrawerOpen = false;
  openModal(renderPublishModalContent());
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

  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer campaign-info-drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div>
          <h2>任务详情</h2>
          <p class="subcopy">${target.name || campaignName}</p>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        <div class="campaign-info-summary">
          <strong>${target.name || "-"}</strong>
          <span>${target.product || "推广产品"} · ${target.platform || "推广平台"}</span>
        </div>
        <div class="campaign-info-grid">
          <div><span>推广平台</span><strong>${target.platform || "-"}</strong></div>
          <div><span>推广产品</span><strong>${target.product || "-"}</strong></div>
          <div><span>推广地区</span><strong>${target.region || "-"}</strong></div>
          <div><span>预算</span><strong>${target.budget || "-"}</strong></div>
          <div><span>截止时间</span><strong>${target.deadline || "-"}</strong></div>
          <div><span>任务状态</span><strong>${target.status || "合作中"}</strong></div>
        </div>
        <div class="campaign-info-block">
          <h3>达人要求</h3>
          <div class="note-box">${target.requirement || "请查看任务详情页"}</div>
        </div>
      </div>
      <div class="drawer-foot">
        <button class="ghost-button" data-action="close-overlay">关闭</button>
        <button class="primary-button" data-nav="taskReview">查看完整任务</button>
      </div>
    </aside>
  `;
}

function openCreatorTaskDetailDrawer(taskName = "") {
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer task-detail-drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div>
          <h2>任务详情</h2>
          <p class="subcopy">${taskName || taskDetailProfile.displayTitle}</p>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        ${renderTaskDetailBody(true)}
      </div>
      <div class="drawer-foot">
        <button class="ghost-button" data-action="close-overlay">关闭</button>
      </div>
    </aside>
  `;
}

function openAdminTaskDetailDrawer(taskName = "", reviewMode = false, reviewTarget = "广告主任务审核") {
  const previousName = state.creatorTaskDetail.name;
  const previousBackTo = state.creatorTaskDetail.backTo;
  state.creatorTaskDetail.name = taskName || taskDetailProfile.displayTitle;
  const reviewFooter = reviewMode
    ? `
      <button class="ghost-button" data-action="open-admin-campaign-reject" data-task="${encodeURIComponent(taskName)}" data-target="${encodeURIComponent(reviewTarget)}">拒绝</button>
      <button class="primary-button" data-action="approve-admin-campaign-review" data-task="${encodeURIComponent(taskName)}" data-target="${encodeURIComponent(reviewTarget)}">通过</button>
    `
    : `<button class="ghost-button" data-action="close-overlay">关闭</button>`;
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer task-detail-drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div>
          <h2>任务详情</h2>
          <p class="subcopy">${taskName || taskDetailProfile.displayTitle}</p>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        ${renderTaskDetailBody(false)}
      </div>
      <div class="drawer-foot">
        ${reviewFooter}
      </div>
    </aside>
  `;
  state.creatorTaskDetail.name = previousName;
  state.creatorTaskDetail.backTo = previousBackTo;
}

function refreshPublishModal() {
  const modal = modalRoot.querySelector(".modal");
  if (modal) modal.innerHTML = renderPublishModalContent();
  if (state.page === "publishTask") render();
}

function inviteTalentPool() {
  return [
    { name: "Mika Studio", uid: "@mika_studio", platform: "TikTok", category: "游戏 / 生活方式", fans: "744.15万", country: "US / UK", avgViews: "161.10万", engagement: "3.5%", price: "$2,000", history: "6 单 · 履约率 83%", source: "recommend", match: "92%", avatar: assets.talentAvatar1 },
    { name: "Luna Trend", uid: "@lunatrend_daily", platform: "Instagram", category: "美妆 / 购物零售", fans: "289.40万", country: "US / TH", avgViews: "68.50万", engagement: "6.2%", price: "$1,200", history: "3 单 · 履约率 67%", source: "recommend", match: "90%", avatar: assets.talentAvatar3 },
    { name: "Daily Miki", uid: "@dailymiki_home", platform: "TikTok", category: "生活 / 家居", fans: "142.10万", country: "TH / VN", avgViews: "31.90万", engagement: "5.8%", price: "$900", history: "2 单 · 履约率 100%", source: "recommend", match: "86%", avatar: assets.talentAvatar1 },
    { name: "Nova Plays", uid: "@novaplays", platform: "YouTube", category: "科技 / 测评", fans: "161.10万", country: "JP / CN", avgViews: "42.80万", engagement: "4.1%", price: "$800", history: "4 单 · 履约率 75%", source: "favorite", match: "88%", avatar: assets.talentAvatar2 },
    { name: "Tech Otto", uid: "@tech_otto", platform: "YouTube", category: "科技 / 软件", fans: "305.00万", country: "US / DE", avgViews: "72.60万", engagement: "3.9%", price: "$2,600", history: "收藏未合作", source: "favorite", match: "84%", avatar: assets.talentAvatar2 },
    { name: "Foodie Nara", uid: "@foodie_nara", platform: "Instagram", category: "食品饮料", fans: "98.50万", country: "JP / KR", avgViews: "15.60万", engagement: "5.1%", price: "$980", history: "1 单 · 履约率 100%", source: "favorite", match: "81%", avatar: assets.talentAvatar3 },
  ];
}

function inviteTalentRows() {
  const source = state.inviteTalentSource || "recommend";
  const rows = inviteTalentPool().filter((row) => row.source === source);
  return rows
    .map(
      (row) => `
        <tr>
          <td><input type="checkbox" ${state.inviteSelectedCreators.includes(row.name) ? "checked" : ""} data-action="toggle-invite-creator" data-name="${encodeURIComponent(row.name)}" aria-label="选择 ${row.name}" /></td>
          <td>
            <div class="row-title">
              <img src="${row.avatar}" alt="" />
              <span><strong>${row.name}</strong><small>${row.uid} · ${socialPlatformIcon(row.platform)} ${row.platform}</small></span>
            </div>
          </td>
          <td>${row.category}</td>
          <td>${row.fans}</td>
          <td>${row.country}</td>
          <td>${row.avgViews}</td>
          <td>${row.engagement}</td>
          <td>${row.price}</td>
          <td>${row.history}</td>
          <td><span class="tier-pill">${row.match}</span></td>
        </tr>
      `,
    )
    .join("");
}

function openInviteModal() {
  const source = state.inviteTalentSource || "recommend";
  openModal(
    `
    <div class="modal-head">
      <div><h2>邀请达人</h2><p class="subcopy">选择推广活动，并从推荐达人或收藏达人中定向发送合作邀请。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body invite-talent-body">
      <div class="form-grid invite-base-form">
        ${field("推广活动名称", `<select class="select">${campaigns.map((row) => `<option>${row.name}</option>`).join("")}</select>`, true)}
        ${field("合作类型", `<select class="select"><option>短视频</option><option>直播</option><option>曝光</option><option>图文</option></select>`)}
        ${field("报价(USD)", `<input class="input" value="99" />`, true)}
        ${field("期望发布时间", `<input class="input" value="2026-06-20 19:00" />`)}
        ${field("邀请备注", `<textarea class="textarea">欢迎参与新品推广，期待你的创意内容。</textarea>`, false, "full")}
      </div>
      <div class="invite-talent-section">
        <div class="section-row">
          <div>
            <h3>选择邀约达人</h3>
            <p class="subcopy">展示达人基础数据、历史合作与匹配度，便于发起定向邀约。</p>
          </div>
          <span class="muted">已选 ${state.inviteSelectedCreators.length} 位</span>
        </div>
        <div class="tabs">
          <button class="tab ${source === "recommend" ? "active" : ""}" data-action="set-invite-source" data-source="recommend">推荐达人</button>
          <button class="tab ${source === "favorite" ? "active" : ""}" data-action="set-invite-source" data-source="favorite">我收藏的达人</button>
        </div>
        <div class="table-card invite-talent-table-card">
          <div class="table-wrap">
            <table>
              <thead><tr><th>选择</th><th>达人</th><th>垂类标签</th><th>粉丝体量</th><th>国家/地区</th><th>平均曝光</th><th>互动率</th><th>报价</th><th>历史合作</th><th>匹配度</th></tr></thead>
              <tbody>${inviteTalentRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-foot modal-foot-split">
      <div class="modal-foot-left"><span class="muted">将向选中的达人发送合作邀请</span></div>
      <div class="modal-foot-right">
        <button class="ghost-button" data-action="close-overlay">取消</button>
        <button class="primary-button" data-action="confirm-invite">发送邀请</button>
      </div>
    </div>
  `,
    false,
    "invite-talent-modal",
  );
}

function openMyTalentInviteModal(name = "") {
  const profile = myTalentRows.find((item) => item.name === name) || myTalentRows[0];
  openModal(
    `
    <div class="modal-head">
      <div><h2>发起合作邀约</h2><p class="subcopy">当前场景仅发起单个达人的合作邀约，不展示下方达人列表。</p></div>
      <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
    </div>
    <div class="modal-body my-talent-invite-body">
      <div class="my-talent-invite-target">
        <div class="row-title">
          <img src="${profile.avatar}" alt="" />
          <span><strong>${profile.name}</strong><small>${profile.uid} · ${profile.platform} · ${profile.followers}</small></span>
        </div>
      </div>
      <div class="form-grid">
        ${field("推广活动名称", `<select class="select">${campaigns.map((row) => `<option>${row.name}</option>`).join("")}</select>`, true)}
        ${field("合作类型", `<select class="select"><option>短视频</option><option>直播</option><option>曝光</option><option>图文</option></select>`, true)}
        ${field("报价(USD)", `<input class="input" value="${String(profile.baseQuote || "$0").replace("$", "")}" />`, true)}
        ${field("期望发布时间", `<input class="input" value="2026-06-20 19:00" />`)}
        ${field("邀约备注", `<textarea class="textarea">基于历史合作表现，邀请你参与本次合作，期待继续配合。</textarea>`, false, "full")}
      </div>
    </div>
    <div class="modal-foot">
      <button class="ghost-button" data-action="close-overlay">取消</button>
      <button class="primary-button" data-action="submit-my-talent-invite" data-name="${encodeURIComponent(profile.name)}">发送邀请</button>
    </div>
  `,
    false,
    "my-talent-invite-modal",
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
                  <div class="note-box" style="margin-top:8px">${item.result}</div>
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

function openInviteDecisionModal(taskName = "", decision = "accept") {
  const invite = invitations.find((row) => row.task === taskName);
  const advertiser = invite?.advertiser || "广告主";
  const verb = decision === "accept" ? "接受" : "拒绝";
  const buttonLabel = decision === "accept" ? "接受合作" : "拒绝合作";
  openModal(
    `
      <div class="modal-head">
        <div>
          <h2>${verb}合作邀请</h2>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="modal-body">
        <div class="note-box">是否${verb} ${advertiser}「${taskName}」的合作邀请？</div>
      </div>
      <div class="modal-foot">
        <button class="ghost-button" data-action="close-overlay">取消</button>
        <button class="${decision === "accept" ? "primary-button" : "danger-button"}" data-action="confirm-invite-decision" data-task="${encodeURIComponent(taskName)}" data-decision="${decision}">${buttonLabel}</button>
      </div>
    `,
    true,
  );
}

function openLoginBannerPreviewModal(id = "banner-1") {
  const banner = loginPageBannerRows.find((item) => item.id === id) || loginPageBannerRows[0];
  openModal(
    `
      <div class="modal-head">
        <div>
          <h2>${banner.name} 预览</h2>
          <p class="subcopy">用于官方登录平台左侧 Banner 展示。</p>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="modal-body">
        <div class="login-preview-banner login-preview-banner-${banner.tone} login-preview-banner-large">
          <div class="login-preview-badge">${banner.name}</div>
          <h3>${banner.title}</h3>
          <p>推荐尺寸 ${banner.size}，当前状态：${banner.status}。</p>
        </div>
      </div>
      <div class="modal-foot">
        <button class="ghost-button" data-action="close-overlay">关闭</button>
      </div>
    `,
  );
}

function openLoginBannerEditModal(id = "banner-1") {
  const banner = loginPageBannerRows.find((item) => item.id === id) || loginPageBannerRows[0];
  openModal(
    `
      <div class="modal-head">
        <div>
          <h2>修改 ${banner.name}</h2>
          <p class="subcopy">演示原型中仅展示 Banner 替换流程。</p>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="modal-body">
        <div class="login-banner-edit-grid">
          <div class="login-preview-banner login-preview-banner-${banner.tone}">
            <div class="login-preview-badge">${banner.name}</div>
            <h3>${banner.title}</h3>
            <p>当前图尺寸 ${banner.size}</p>
          </div>
          <div class="note-box">
            <strong style="display:block;margin-bottom:8px">替换说明</strong>
            建议上传横版 Banner，保持统一留白与标题安全区。
            <br />
            推荐尺寸：${banner.size}
            <br />
            支持操作：重新上传、替换当前图、保留现有排序。
          </div>
        </div>
      </div>
      <div class="modal-foot">
        <button class="ghost-button" data-action="close-overlay">取消</button>
        <button class="primary-button" data-action="toast-close" data-message="${banner.name} 图片替换成功">确认修改</button>
      </div>
    `,
  );
}

function openPayoutDetailModal(id = "payout-1") {
  const row = payoutRows.find((item) => item.id === id) || payoutRows[0];
  openModal(
    `
      <div class="modal-head">
        <div>
          <h2>打款详情</h2>
          <p class="subcopy">${row.campaign}</p>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="modal-body">
        <div class="form-grid">
          ${field("活动", `<div class="note-box">${row.campaign}</div>`, false)}
          ${field("达人", `<div class="note-box">${row.creator}</div>`, false)}
          ${field("金额", `<div class="note-box">${row.amount}</div>`, false)}
          ${field("状态", `<div class="note-box">${row.status}</div>`, false)}
          ${field("账户", `<div class="note-box">${row.account}</div>`, false, "full")}
          ${field("备注", `<div class="note-box">${row.rejectReason || row.note || "-"}</div>`, false, "full")}
        </div>
      </div>
      <div class="modal-foot">
        <button class="ghost-button" data-action="close-overlay">关闭</button>
      </div>
    `,
  );
}

function openPayoutPaidConfirmModal(id = "payout-1") {
  const row = payoutRows.find((item) => item.id === id) || payoutRows[0];
  openModal(
    `
      <div class="modal-head">
        <div>
          <h2>标记打款</h2>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="modal-body">
        <div class="note-box">是否确认已向 ${row.creator} 完成「${row.campaign}」的线下打款？</div>
      </div>
      <div class="modal-foot">
        <button class="ghost-button" data-action="close-overlay">取消</button>
        <button class="primary-button" data-action="submit-payout-paid" data-id="${row.id}">确认打款</button>
      </div>
    `,
    true,
  );
}

function openPayoutRejectModal(id = "payout-1") {
  const row = payoutRows.find((item) => item.id === id) || payoutRows[0];
  openModal(
    `
      <div class="modal-head">
        <div>
          <h2>驳回打款</h2>
          <p class="subcopy">${row.campaign}</p>
        </div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="modal-body">
        <div class="note-box" style="margin-bottom:14px">请确认是否驳回 ${row.creator} 的结算申请，并填写驳回理由。</div>
        <textarea class="textarea" id="payoutRejectReason" placeholder="请输入驳回原因，例如：收款账户信息不完整、履约状态未最终确认等。"></textarea>
      </div>
      <div class="modal-foot">
        <button class="ghost-button" data-action="close-overlay">取消</button>
        <button class="danger-button" data-action="submit-payout-reject" data-id="${row.id}">确认驳回</button>
      </div>
    `,
  );
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

function openCreatorDrawer(name = "Mika Studio", showInvite = true) {
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
        ${showInvite ? `<button class="primary-button" data-action="modal-invite">邀请合作</button>` : ""}
      </div>
    </aside>
  `;
}

function buildFulfillmentFlow(row) {
  const progress = row.progress || "";
  const statusText = row.status || "";
  const isRejected = progress.includes("拒") || statusText.includes("拒");
  const currentIndex = (() => {
    if (statusText === "已发布") return 8;
    if (progress === "待发布") return 7;
    if (statusText === "待审核" || progress === "内容审核中") return 4;
    if (progress === "内容制作中") return 2;
    if (statusText === "待确认合作") return 0;
    return 1;
  })();
  const activeIndex = isRejected ? 5 : Math.max(0, Math.min(currentIndex, 8));
  const applyTime = row.applyTime || row.acceptTime || "2026-6-5 10:59:20";
  const approveTime = row.platformApproveTime || row.acceptTime || "2026-6-6 11:20:00";
  const submitTime = row.contentSubmitTime || "2026-6-8 18:30:00";
  const platformReviewTime = row.platformReviewTime || "2026-6-9 10:00:00";
  const brandReviewTime = row.brandReviewTime || "2026-6-10 15:30:00";
  const publishTime = row.publishTime || row.due || "-";
  const rejectReason = row.rejectReason || "内容与任务要求不完全一致，请补充品牌露出并重新提交。";
  const nodes = [
    { title: "达人报名", time: applyTime, desc: `${row.creator} 提交报名，等待平台审核。` },
    { title: "审核通过", time: approveTime, desc: "平台已审核通过，达人进入履单流程。" },
    { title: "内容制作中", time: row.due || "-", desc: `达人正在制作内容，预计交付日期 ${row.due || "-"}。` },
    { title: "内容初审中（平台）", time: submitTime, desc: "达人已提交内容，平台进行基础合规与素材完整性初审。" },
    { title: "内容复审中（广告主）", time: platformReviewTime, desc: "平台初审通过，等待广告主确认内容是否符合投放要求。" },
    { title: "内容被拒", time: brandReviewTime, desc: `被拒理由：${rejectReason}` },
    { title: "内容审核通过", time: brandReviewTime, desc: "广告主已确认内容，可进入发布安排。" },
    { title: "内容发布中", time: publishTime, desc: "达人按计划发布内容，等待链接与数据回传。" },
    { title: "内容已发布", time: publishTime, desc: row.tracking || "内容已发布，等待效果数据回流。" },
  ];

  return nodes
    .filter((item) => isRejected || item.title !== "内容被拒")
    .map((item, index) => {
      const originalIndex = nodes.indexOf(item);
      const stateClass = originalIndex < activeIndex ? "done" : originalIndex === activeIndex ? "active" : "pending";
      return { ...item, stateClass };
    });
}

function renderCollaboratorDeliverablePanel(row, highlighted = false) {
  const deliverables = Array.isArray(row.deliverables) && row.deliverables.length ? [row.deliverables[0]] : [];
  if (!deliverables.length) {
    return `<div class="deliver-item ${highlighted ? "deliver-review-item deliver-review-highlight" : ""}"><span class="deliver-desc">暂未收到达人提交产物</span></div>`;
  }
  return deliverables
    .map(
      (item) => `
        <div class="deliver-item deliver-review-item ${highlighted ? "deliver-review-highlight" : ""}">
          <p class="deliver-desc" style="margin-bottom:8px">${item.desc || "-"}</p>
          ${item.link ? `<div class="deliver-link-block" style="margin-bottom:8px"><span class="deliver-link-label">链接：</span><a href="${item.link}" target="_blank" class="deliver-link-url">${item.link}</a></div>` : ""}
          ${item.attachment ? `<div class="deliver-actions" style="display:flex;gap:8px;flex-wrap:wrap"><button class="ghost-button" data-action="toast" data-message="正在下载 ${item.attachment.name}">📥 下载 ${item.attachment.name} (${item.attachment.size})</button></div>` : ""}
        </div>
      `,
    )
    .join("");
}

function openDeliveryDrawer(creatorKey = "") {
  const row =
    collaborations.find((item) => (item.creatorId || item.creator) === creatorKey) ||
    collaborations.find((item) => item.creator === creatorKey) ||
    collaborations[0];
  const isAdvertiserReviewStage = row.progress === "待审核" || row.progress === "内容审核中" || row.status === "待审核";
  const deliverableMarkup = renderCollaboratorDeliverablePanel(row, true);
  const timelineItems = buildFulfillmentFlow(row).map((item) =>
    isAdvertiserReviewStage && item.title === "内容复审中（广告主）"
      ? { ...item, deliverablePanel: deliverableMarkup }
      : item,
  );
  const footer =
    isAdvertiserReviewStage
      ? `
        <div class="drawer-foot">
          <button class="secondary-button" data-action="modal-review">要求修改</button>
          <button class="primary-button" data-action="approve-collab-delivery" data-creator="${encodeURIComponent(row.creatorId || row.creator)}">确认通过</button>
        </div>
      `
      : `
        <div class="drawer-foot">
          <button class="ghost-button" data-action="close-overlay">关闭</button>
        </div>
      `;
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div><h2>达人交付详情</h2><p class="subcopy">${row.creator} · ${row.campaign} · ${row.progress}</p></div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        <div class="mini-stats">
          <div class="mini-stat"><span>合作类型</span><strong>${row.type || "-"}</strong></div>
          <div class="mini-stat"><span>结算方式</span><strong>${row.settlement || "-"}</strong></div>
          <div class="mini-stat"><span>当前进度</span><strong>${row.progress || row.status || "-"}</strong></div>
        </div>
        ${
          isAdvertiserReviewStage
            ? `<div class="note-box" style="margin-top:12px">达人已提交本轮产物，广告主可直接查看交付内容，并选择要求修改或确认通过进入待发布阶段。</div>`
            : ""
        }
        ${isAdvertiserReviewStage ? "" : `<div class="deliver-placeholders single" aria-label="交付内容列表" style="margin-top:16px">${deliverableMarkup}</div>`}
        <div class="fulfillment-flow" aria-label="达人报名与履单状态信息流">
          ${timelineItems
            .map(
              (item) => `
              <div class="fulfillment-flow-item ${item.stateClass}">
                <span class="fulfillment-flow-dot"></span>
                <div>
                  <div class="fulfillment-flow-head"><strong>${item.title}</strong>${item.stateClass === "pending" ? "" : `<span>${item.time}</span>`}</div>
                  ${item.stateClass === "pending" ? "" : `<p>${item.desc}</p>`}
                  ${item.deliverablePanel || ""}
                </div>
              </div>
            `,
            )
            .join("")}
        </div>
      </div>
      ${footer}
    </aside>
  `;
}

function openAdminFulfillmentDrawer(campaignName = "", creatorId = "") {
  const row =
    adminCampaignFulfillmentRows.find((item) => item.campaign === campaignName && item.creatorId === creatorId) ||
    adminCampaignFulfillmentRows.find((item) => item.campaign === campaignName) ||
    adminCampaignFulfillmentRows[0];
  const timelineItems = adminFulfillmentTimelineMap[`${row.campaign}::${row.creatorId}`] || [
    { title: "报名通过", desc: "达人已通过审核，进入合作流程。" },
    { title: "合作推进中", desc: "当前任务正在推进履约，请继续跟进交付进度。" },
  ];
  const currentNode = timelineItems[timelineItems.length - 1];
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div><h2>达人履约详情</h2><p class="subcopy">${row.creator} · ${row.campaign}</p></div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        <div class="mini-stats">
          <div class="mini-stat"><span>合作状态</span><strong>${row.cooperationStatus}</strong></div>
          <div class="mini-stat"><span>交付状态</span><strong>${row.deliverableStatus}</strong></div>
          <div class="mini-stat"><span>结算状态</span><strong>${row.settlementStatus}</strong></div>
        </div>
        <div class="note-box" style="margin-top:12px">当前状态：${currentNode?.title || row.deliverableStatus}</div>
        <div class="timeline admin-fulfillment-timeline" style="margin-top:16px">
          ${timelineItems
            .map(
              (item, index) => {
                const match = String(item.desc || "").match(/^(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2})\s*(.*)$/);
                const time = match ? match[1] : "";
                const detail = match ? match[2] : item.desc;
                return `
                <div class="timeline-item ${index === timelineItems.length - 1 ? "current" : ""}">
                  <span class="timeline-dot"></span>
                  <div>
                    <strong>${item.title}</strong>
                    ${time ? `<span class="timeline-time">${time}</span>` : ""}
                    <p>${detail}</p>
                  </div>
                </div>
              `;
              },
            )
            .join("")}
        </div>
      </div>
      <div class="drawer-foot">
        <button class="ghost-button" data-action="close-overlay">关闭</button>
      </div>
    </aside>
  `;
}

function openAdminInfluencerDetailDrawer(name = "") {
  const profile = adminInfluencerRows.find((row) => row.name === name) || adminInfluencerRows[0];
  const taskRows = profile.tasks
    .map((taskName) => {
      const matched = adminCampaignFulfillmentRows.find((row) => row.campaign === taskName && row.creator === profile.name) || adminCampaignFulfillmentRows.find((row) => row.campaign === taskName);
      if (matched) return matched;
      const officialTask = officialTaskRows.find((row) => row.name === taskName);
      return officialTask
        ? {
            campaign: officialTask.name,
            advertiser: "平台官方",
            platform: officialTask.platform,
            creatorId: `AUTO-${profile.name}`,
            cooperationStatus: officialTask.status === "已结束" ? "已完成" : "招募中",
            deliverableStatus: officialTask.status === "已结束" ? "已完成" : "未开始",
            publishStatus: officialTask.published ? "已发布" : "-",
          }
        : null;
    })
    .filter(Boolean)
    .slice(0, 6);
  modalRoot.innerHTML = `
    <div class="drawer-backdrop" data-action="close-overlay"></div>
    <aside class="drawer" role="dialog" aria-modal="true">
      <div class="drawer-head">
        <div><h2>${profile.name}</h2><p class="subcopy">达人基本档案与报名履约任务明细</p></div>
        <button class="close-button" data-action="close-overlay" aria-label="关闭">×</button>
      </div>
      <div class="drawer-body">
        <div class="row-title">
          <img src="${profile.avatar}" alt="" />
          <span><strong>${profile.name}</strong><small>${profile.platform} · ${profile.followers}</small></span>
        </div>
        <div class="mini-stats" style="margin-top:12px">
          <div class="mini-stat"><span>账号状态</span><strong>${profile.status}</strong></div>
          <div class="mini-stat"><span>合作广告主</span><strong>${profile.advertiserCount}</strong></div>
          <div class="mini-stat"><span>历史任务</span><strong>${profile.taskCount}</strong></div>
        </div>
        <div class="note-box" style="margin-top:12px">合作广告主：${profile.advertisers.join("、")}</div>
        <div class="table-card" style="margin-top:16px">
          <div class="table-head"><h2>任务明细列表</h2><span class="muted">参考任务列表结构</span></div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>任务名称</th><th>广告主</th><th>平台</th><th>合作状态</th><th>交付状态</th><th>发布状态</th><th>操作</th></tr></thead>
              <tbody>
                ${
                  taskRows.length
                    ? taskRows
                        .map(
                          (row) => `
                          <tr>
                            <td><strong>${row.campaign}</strong></td>
                            <td>${row.advertiser}</td>
                            <td>${row.platform}</td>
                            <td>${row.cooperationStatus}</td>
                            <td>${row.deliverableStatus}</td>
                            <td>${row.publishStatus}</td>
                            <td><div class="table-actions-inline"><button class="link-button" data-action="open-admin-fulfillment-drawer" data-campaign="${encodeURIComponent(row.campaign)}" data-creator="${encodeURIComponent(row.creatorId)}">查看详情</button></div></td>
                          </tr>
                        `,
                        )
                        .join("")
                    : emptyRow(7)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="drawer-foot">
        <button class="ghost-button" data-action="close-overlay">关闭</button>
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
  if (action === "open-publish") {
    state.publishStep = 0;
    state.publishDraft.matchDrawerOpen = false;
    openPublishModal();
    return;
  }
  if (action === "select-publish-platform-tab") {
    state.publishDraft.activePlatform = target.dataset.platform || state.publishDraft.activePlatform;
    state.publishDraft.creatorTypeMenuOpen = false;
    refreshPublishModal();
    return;
  }
  if (action === "toggle-publish-platform-menu") {
    state.publishDraft.platformMenuOpen = !state.publishDraft.platformMenuOpen;
    state.publishDraft.countryMenuOpen = false;
    state.publishDraft.areaMenuOpen = false;
    state.publishDraft.creatorTypeMenuOpen = false;
    refreshPublishModal();
    return;
  }
  if (action === "toggle-publish-country-menu") {
    state.publishDraft.countryMenuOpen = !state.publishDraft.countryMenuOpen;
    state.publishDraft.platformMenuOpen = false;
    state.publishDraft.areaMenuOpen = false;
    refreshPublishModal();
    return;
  }
  if (action === "toggle-publish-area-menu") {
    state.publishDraft.areaMenuOpen = !state.publishDraft.areaMenuOpen;
    state.publishDraft.platformMenuOpen = false;
    state.publishDraft.countryMenuOpen = false;
    state.publishDraft.creatorTypeMenuOpen = false;
    refreshPublishModal();
    return;
  }
  if (action === "toggle-publish-platform") {
    const value = target.dataset.value || "";
    const next = new Set(state.publishDraft.platforms);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    state.publishDraft.platforms = [...next];
    ensurePublishDraftPlatforms();
    refreshPublishModal();
    return;
  }
  if (action === "remove-publish-platform") {
    const value = decodeURIComponent(target.dataset.value || "");
    state.publishDraft.platforms = state.publishDraft.platforms.filter((x) => x !== value);
    ensurePublishDraftPlatforms();
    refreshPublishModal();
    return;
  }
  if (action === "set-publish-region") {
    state.publishDraft.region = target.dataset.region || state.publishDraft.region;
    render();
    return;
  }
  if (action === "toggle-publish-country") {
    const value = decodeURIComponent(target.dataset.value || "");
    const area = decodeURIComponent(target.dataset.area || "");
    const next = new Set(state.publishDraft.countries);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    state.publishDraft.countries = [...next];
    if (area && !state.publishDraft.areas.includes(area)) {
      state.publishDraft.areas = [...state.publishDraft.areas, area];
    }
    refreshPublishModal();
    return;
  }
  if (action === "remove-publish-country") {
    const value = decodeURIComponent(target.dataset.value || "");
    state.publishDraft.countries = state.publishDraft.countries.filter((x) => x !== value);
    refreshPublishModal();
    return;
  }
  if (action === "toggle-publish-area") {
    const value = decodeURIComponent(target.dataset.value || "");
    const next = new Set(state.publishDraft.areas);
    const areaGroup = getPublishAreaGroup(value);
    const countrySet = new Set(state.publishDraft.countries);
    if (next.has(value)) {
      next.delete(value);
      (areaGroup?.countries || []).forEach((country) => countrySet.delete(country));
    } else {
      next.add(value);
      (areaGroup?.countries || []).forEach((country) => countrySet.add(country));
    }
    state.publishDraft.areas = [...next];
    state.publishDraft.countries = [...countrySet];
    refreshPublishModal();
    return;
  }
  if (action === "remove-publish-area") {
    const value = decodeURIComponent(target.dataset.value || "");
    state.publishDraft.areas = state.publishDraft.areas.filter((x) => x !== value);
    const areaGroup = getPublishAreaGroup(value);
    if (areaGroup) {
      state.publishDraft.countries = state.publishDraft.countries.filter((country) => !areaGroup.countries.includes(country));
    }
    refreshPublishModal();
    return;
  }
  if (action === "toggle-platform-creator-type") {
    ensurePublishDraftPlatforms();
    const platform = target.dataset.platform || state.publishDraft.activePlatform;
    const value = decodeURIComponent(target.dataset.value || "");
    const next = new Set(state.publishDraft.platformConfigs[platform].creatorTypes || []);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    state.publishDraft.platformConfigs[platform].creatorTypes = [...next];
    refreshPublishModal();
    return;
  }
  if (action === "toggle-platform-cooperation-type") {
    ensurePublishDraftPlatforms();
    const platform = target.dataset.platform || state.publishDraft.activePlatform;
    const value = decodeURIComponent(target.dataset.value || "");
    const next = new Set(state.publishDraft.platformConfigs[platform].cooperationTypes || []);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    state.publishDraft.platformConfigs[platform].cooperationTypes = [...next];
    refreshPublishModal();
    return;
  }
  if (action === "copy-previous-platform-requirements") {
    ensurePublishDraftPlatforms();
    const targetPlatform = target.dataset.platform || state.publishDraft.activePlatform;
    const currentIndex = state.publishDraft.platforms.indexOf(targetPlatform);
    const previousPlatform = currentIndex > 0 ? state.publishDraft.platforms[currentIndex - 1] : "";
    if (!previousPlatform) {
      toast("当前没有可沿用的上一个平台要求");
      return;
    }
    const previous = { ...state.publishDraft.platformConfigs[previousPlatform] };
    state.publishDraft.platformConfigs[targetPlatform] = {
      ...state.publishDraft.platformConfigs[targetPlatform],
      creatorCount: previous.creatorCount,
      followerMinK: previous.followerMinK,
      followerMaxK: previous.followerMaxK,
      creatorTypes: [...(previous.creatorTypes || [])],
      cooperationTypes: [...(previous.cooperationTypes || [])],
      contentRequirement: previous.contentRequirement,
    };
    toast(`已沿用 ${previousPlatform} 的达人要求`);
    refreshPublishModal();
    return;
  }
  if (action === "toggle-publish-creator-types") {
    const platform = target.dataset.platform || state.publishDraft.activePlatform;
    const isSameOpen = state.publishDraft.creatorTypeMenuOpen && state.publishDraft.creatorTagMenuPlatform === platform;
    state.publishDraft.creatorTypeMenuOpen = !isSameOpen;
    state.publishDraft.creatorTagMenuPlatform = platform;
    state.publishDraft.platformMenuOpen = false;
    state.publishDraft.countryMenuOpen = false;
    state.publishDraft.areaMenuOpen = false;
    state.publishDraft.followerPopoverOpen = false;
    refreshPublishModal();
    return;
  }
  if (action === "remove-platform-creator-type") {
    ensurePublishDraftPlatforms();
    const value = decodeURIComponent(target.dataset.value || "");
    const platform = target.dataset.platform || state.publishDraft.activePlatform;
    state.publishDraft.platformConfigs[platform].creatorTypes = (state.publishDraft.platformConfigs[platform].creatorTypes || []).filter((x) => x !== value);
    refreshPublishModal();
    return;
  }
  if (action === "copy-current-budget-all") {
    ensurePublishDraftPlatforms();
    const current = { ...state.publishDraft.platformConfigs[state.publishDraft.activePlatform] };
    state.publishDraft.platforms.forEach((platform) => {
      if (platform === state.publishDraft.activePlatform) return;
      state.publishDraft.platformConfigs[platform] = {
        ...state.publishDraft.platformConfigs[platform],
        platformBudget: current.platformBudget,
        unitPriceMin: current.unitPriceMin,
        unitPriceMax: current.unitPriceMax,
        settlement: current.settlement,
        settlementCycle: current.settlementCycle,
      };
    });
    toast("当前平台投放信息已复制到其他平台");
    refreshPublishModal();
    return;
  }
  if (action === "open-publish-match-drawer") {
    if (!canOpenPublishMatch()) {
      toast("请先填写完整必填信息，再查看匹配达人");
      return;
    }
    state.publishDraft.matchDrawerOpen = true;
    refreshPublishModal();
    return;
  }
  if (action === "close-publish-match-drawer") {
    state.publishDraft.matchDrawerOpen = false;
    refreshPublishModal();
    return;
  }
  if (action === "set-publish-match-source") {
    state.publishDraft.matchedSource = target.dataset.source || "all";
    refreshPublishModal();
    return;
  }
  if (action === "toggle-publish-match-creator") {
    const name = decodeURIComponent(target.dataset.name || "");
    const next = new Set(state.publishDraft.matchedCreators || []);
    if (next.has(name)) next.delete(name);
    else next.add(name);
    state.publishDraft.matchedCreators = [...next];
    refreshPublishModal();
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
  if (action === "set-admin-review-type") {
    state.adminFilters.reviewType = target.dataset.value || "全部";
    render();
    return;
  }
  if (action === "set-admin-review-result") {
    state.adminFilters.reviewResult = target.dataset.value || "全部";
    render();
    return;
  }
  if (action === "open-advertiser-profile") {
    state.adminFilters.selectedAdvertiser = decodeURIComponent(target.dataset.value || "");
    state.adminFilters.advertiserCampaignKeyword = "";
    state.adminFilters.advertiserCampaignStatus = "全部";
    go("advertiserProfile");
    return;
  }
  if (action === "open-campaign-fulfillment") {
    const campaignName = decodeURIComponent(target.dataset.value || "");
    state.adminFilters.selectedCampaign = campaignName;
    modalRoot.innerHTML = "";
    if (!adminCampaignFulfillmentRows.some((row) => row.campaign === campaignName)) {
      const officialTask = officialTaskRows.find((row) => row.name === campaignName);
      if (officialTask) {
        adminCampaignFulfillmentRows.unshift({
          campaign: campaignName,
          advertiser: "平台官方",
          platform: officialTask.platform,
          creator: "待匹配达人",
          creatorId: "AUTO-0002",
          cooperationStatus: officialTask.status === "已结束" ? "已完成" : "招募中",
          deliverableStatus: officialTask.status === "已结束" ? "已完成" : "未开始",
          operationReview: "免审核",
          brandReview: "免审核",
          publishStatus: officialTask.status === "已结束" ? "已发布" : "-",
          trackingStatus: officialTask.status === "已结束" ? "已完成" : "-",
          settlementStatus: officialTask.status === "已结束" ? "已结算" : "未结算",
          due: state.officialTaskDraft.deadline || "2026-07-05",
        });
      }
    }
    go("campaignFulfillment");
    return;
  }
  if (action === "open-admin-fulfillment-drawer") {
    openAdminFulfillmentDrawer(decodeURIComponent(target.dataset.campaign || ""), decodeURIComponent(target.dataset.creator || ""));
    return;
  }
  if (action === "open-admin-review-detail") {
    const pageKey = target.dataset.pageKey || "";
    const taskName = decodeURIComponent(target.dataset.task || "");
    const reviewTarget = decodeURIComponent(target.dataset.target || "");
    const creatorName = parseReviewTargetName(reviewTarget);
    if (pageKey === "campaignReviewAdmin") {
      openAdminTaskDetailDrawer(taskName);
      return;
    }
    if (pageKey === "creatorApplicationReviewAdmin") {
      if (adminInfluencerRows.some((row) => row.name === creatorName)) {
        state.adminFilters.selectedInfluencer = creatorName;
        go("influencerDetailAdmin");
        return;
      }
      openCreatorDrawer(creatorName, false);
      return;
    }
    if (pageKey === "creatorDeliverableReviewAdmin") {
      openAdminDeliverableReviewDetail(taskName, creatorName);
      return;
    }
  }
  if (action === "approve-admin-campaign-review") {
    const taskName = decodeURIComponent(target.dataset.task || "");
    const reviewTarget = decodeURIComponent(target.dataset.target || "广告主任务审核");
    adminReviewHistoryRows.unshift({
      taskName,
      target: reviewTarget,
      reviewType: "任务审核",
      result: "已通过",
      reviewer: "运营 · 当前账号",
      time: "2026-06-18 11:45",
      reason: "信息完整，符合平台投放规范。",
    });
    render();
    toast("已通过当前活动审核");
    return;
  }
  if (action === "open-admin-campaign-reject") {
    openAdminCampaignRejectModal(
      decodeURIComponent(target.dataset.task || ""),
      decodeURIComponent(target.dataset.target || "广告主任务审核"),
    );
    return;
  }
  if (action === "submit-admin-campaign-reject") {
    const reasonInput = document.getElementById("adminCampaignRejectReason");
    const reason = reasonInput?.value.trim() || "";
    if (!reason) {
      toast("请先填写驳回理由");
      return;
    }
    const taskName = decodeURIComponent(target.dataset.task || "");
    const reviewTarget = decodeURIComponent(target.dataset.target || "广告主任务审核");
    adminReviewHistoryRows.unshift({
      taskName,
      target: reviewTarget,
      reviewType: "任务审核",
      result: "已拒绝",
      reviewer: "运营 · 当前账号",
      time: "2026-06-18 11:50",
      reason,
    });
    closeOverlay();
    render();
    toast("已驳回当前活动审核");
    return;
  }
  if (action === "approve-admin-deliverable-review") {
    const taskName = decodeURIComponent(target.dataset.task || "");
    const creatorName = decodeURIComponent(target.dataset.creator || "");
    adminReviewHistoryRows.unshift({
      taskName,
      target: `内容审核 · ${creatorName}`,
      reviewType: "内容审核",
      result: "已通过",
      reviewer: "运营 · 当前账号",
      time: "2026-06-18 11:20",
      reason: "产物内容完整，品牌露出与素材规范符合要求。",
    });
    closeOverlay();
    render();
    toast("已通过当前产物审核");
    return;
  }
  if (action === "open-admin-deliverable-reject") {
    openAdminDeliverableRejectModal(decodeURIComponent(target.dataset.task || ""), decodeURIComponent(target.dataset.creator || ""));
    return;
  }
  if (action === "submit-admin-deliverable-reject") {
    const reasonInput = document.getElementById("adminDeliverableRejectReason");
    const reason = reasonInput?.value.trim() || "";
    if (!reason) {
      toast("请先填写驳回理由");
      return;
    }
    const taskName = decodeURIComponent(target.dataset.task || "");
    const creatorName = decodeURIComponent(target.dataset.creator || "");
    adminReviewHistoryRows.unshift({
      taskName,
      target: `内容审核 · ${creatorName}`,
      reviewType: "内容审核",
      result: "已拒绝",
      reviewer: "运营 · 当前账号",
      time: "2026-06-18 11:25",
      reason,
    });
    closeOverlay();
    render();
    toast("已驳回当前产物并发送修改意见");
    return;
  }
  if (action === "open-admin-task-detail") {
    openAdminTaskDetailDrawer(decodeURIComponent(target.dataset.task || ""));
    return;
  }
  if (action === "open-admin-influencer-detail") {
    state.adminFilters.selectedInfluencer = decodeURIComponent(target.dataset.name || "");
    go("influencerDetailAdmin");
    return;
  }
  if (action === "select-admin-campaign") {
    state.adminFilters.selectedCampaign = decodeURIComponent(target.dataset.value || "");
    render();
    return;
  }
  if (action === "toggle-official-task-form") {
    state.officialTaskFormOpen = !state.officialTaskFormOpen;
    render();
    return;
  }
  if (action === "save-official-task-draft") {
    toast("官方任务草稿已保存");
    return;
  }
  if (action === "open-admin-list-drawer") {
    openAdminListDrawer(decodeURIComponent(target.dataset.name || ""), target.dataset.kind || "advertisers");
    return;
  }
  if (action === "submit-official-task") {
    const taskName = state.officialTaskDraft.taskName.trim() || "官方任务";
    if (!adminCampaignFulfillmentRows.some((row) => row.campaign === taskName)) {
      adminCampaignFulfillmentRows.unshift({
        campaign: taskName,
        advertiser: "平台官方",
        platform: state.officialTaskDraft.platforms || "TikTok",
        creator: "待匹配达人",
        creatorId: "AUTO-0001",
        cooperationStatus: "招募中",
        deliverableStatus: "未开始",
        operationReview: "免审核",
        brandReview: "免审核",
        publishStatus: "-",
        trackingStatus: "-",
        settlementStatus: "未结算",
        due: state.officialTaskDraft.deadline || "2026-06-30",
      });
      officialTaskRows.unshift({
        name: taskName,
        platform: state.officialTaskDraft.platforms || "TikTok",
        cooperationType: state.officialTaskDraft.cooperationTypes || "全片",
        applicants: 6,
        collaborators: 0,
        published: 0,
        budget: `$${state.officialTaskDraft.budget || "0"}`,
        status: "招募中",
        statusClass: "pending",
        createdAt: "2026-06-14 20:00",
        region: state.officialTaskDraft.region || "-",
      });
      adminReviewHistoryRows.unshift({
        taskName,
        target: "官方任务创建",
        reviewType: "任务审核",
        result: "已通过",
        reviewer: "运营 · 当前账号",
        time: "2026-06-14 20:00",
        reason: "官方任务自动跳过审核，已直接进入招募中。",
      });
    }
    state.officialTaskFormOpen = false;
    state.adminFilters.selectedCampaign = taskName;
    state.adminFilters.officialTaskKeyword = "";
    state.adminFilters.officialTaskStatus = "全部";
    state.adminFilters.officialTaskCreatedStart = "";
    state.adminFilters.officialTaskCreatedEnd = "";
    toast("官方任务已创建，已自动进入招募中");
    go("campaignFulfillment");
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
    state.opportunityFilters.regionMenuOpen = menu === "region" ? !state.opportunityFilters.regionMenuOpen : false;
    state.opportunityFilters.tagMenuOpen = menu === "tag" ? !state.opportunityFilters.tagMenuOpen : false;
    state.opportunityFilters.followerMenuOpen = menu === "follower" ? !state.opportunityFilters.followerMenuOpen : false;
    state.opportunityFilters.amountMenuOpen = menu === "amount" ? !state.opportunityFilters.amountMenuOpen : false;
    render();
    return;
  }
  if (action === "toggle-opportunity-option") {
    const type = target.dataset.type;
    const value = target.dataset.value || "";
    const key = type === "platform" ? "platforms" : type === "region" ? "regions" : "tags";
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
      regionMenuOpen: false,
      tagMenuOpen: false,
      followerMenuOpen: false,
      amountMenuOpen: false,
      platforms: [],
      regions: [],
      tags: [],
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
    toast("预设金额已确认");
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
  if (action === "toggle-talent-favorite") {
    const name = decodeURIComponent(target.dataset.name || "");
    const creator = creators.find((item) => item.name === name);
    if (creator) {
      creator.contract = creator.contract === "已收藏" ? "未收藏" : "已收藏";
      toast(creator.contract === "已收藏" ? `已收藏 ${name}` : `已取消收藏 ${name}`);
    }
    render();
    return;
  }
  if (action === "remove-talent-selected-filter") {
    const key = target.dataset.filterKey;
    if (key && key in state.talentSearchFilters) {
      state.talentSearchFilters[key] = "全部";
    }
    render();
    return;
  }
  if (action === "clear-talent-selected-filters") {
    resetTalentSearchFilters();
    render();
    return;
  }
  if (action === "set-email-invite-tab") {
    state.tabs.emailInvitesAdmin = target.dataset.tab || "inviteList";
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
    if (state.publishStep === 0) {
      if (!state.publishDraft.campaignName?.trim()) {
        toast("请先填写活动名称");
        return;
      }
      if (!state.publishDraft.platforms?.length) {
        toast("请至少选择一个推广平台");
        return;
      }
      if (!state.publishDraft.areas?.length) {
        toast("请至少选择一个推广地区");
        return;
      }
      ensurePublishDraftPlatforms();
    }
    state.publishStep = Math.min(2, state.publishStep + 1);
    refreshPublishModal();
    return;
  }
  if (action === "publish-prev") {
    state.publishStep = Math.max(0, state.publishStep - 1);
    refreshPublishModal();
    return;
  }
  if (action === "submit-publish") {
    state.publishStep = 0;
    state.publishDraft.matchDrawerOpen = false;
    state.brandHasCampaigns = true;
    closeOverlay();
    toast("活动已发布，各平台配置已进入审核与邀约流程");
    if (state.page !== "promotions") go("promotions");
    render();
    return;
  }
  if (action === "open-page-notes") {
    openPageNotesDrawer(target.dataset.page || state.page);
    return;
  }
  if (action === "close-and-nav") {
    const page = target.dataset.page || state.page;
    closeOverlay();
    go(page);
    return;
  }
  if (action === "open-social-auth") {
    state.socialAuthDraft.method = "oauth";
    openSocialAuthModal(target.dataset.platform || "TikTok");
    return;
  }
  if (action === "set-social-auth-method") {
    state.socialAuthDraft.method = target.dataset.method || "oauth";
    openSocialAuthModal(state.socialAuthDraft.platform || "TikTok");
    return;
  }
  if (action === "set-invite-source") {
    state.inviteTalentSource = target.dataset.source || "recommend";
    openInviteModal();
    return;
  }
  if (action === "toggle-invite-creator") {
    const name = decodeURIComponent(target.dataset.name || "");
    const next = new Set(state.inviteSelectedCreators || []);
    if (target.checked) next.add(name);
    else next.delete(name);
    state.inviteSelectedCreators = [...next];
    openInviteModal();
    return;
  }
  if (action === "modal-invite") openInviteModal();
  if (action === "preview-login-banner") {
    openLoginBannerPreviewModal(target.dataset.id || "banner-1");
    return;
  }
  if (action === "edit-login-banner") {
    state.loginBannerUploadTargetId = target.dataset.id || "banner-1";
    const fileInput = document.getElementById("loginBannerUploadInput");
    if (fileInput) fileInput.click();
    else toast("上传入口初始化失败");
    return;
  }
  if (action === "open-payout-detail") {
    openPayoutDetailModal(target.dataset.id || "payout-1");
    return;
  }
  if (action === "confirm-payout-paid") {
    openPayoutPaidConfirmModal(target.dataset.id || "payout-1");
    return;
  }
  if (action === "open-payout-reject") {
    openPayoutRejectModal(target.dataset.id || "payout-1");
    return;
  }
  if (action === "open-revenue-payout") {
    openRevenuePayoutModal();
    return;
  }
  if (action === "set-revenue-payout-method") {
    state.revenuePayoutDraft.method = target.dataset.value || "paypal";
    openRevenuePayoutModal();
    return;
  }
  if (action === "save-revenue-payout") {
    closeOverlay();
    render();
    toast("收款账户已保存");
    return;
  }
  if (action === "submit-payout-paid") {
    const row = payoutRows.find((item) => item.id === (target.dataset.id || ""));
    if (row) {
      row.status = "已打款";
      row.statusClass = "done";
      row.note = "已完成人工打款登记。";
      row.rejectReason = "";
    }
    closeOverlay();
    render();
    toast("已标记为已打款");
    return;
  }
  if (action === "submit-payout-reject") {
    const reasonInput = document.getElementById("payoutRejectReason");
    const reason = reasonInput ? reasonInput.value.trim() : "";
    if (!reason) {
      toast("请先填写驳回理由");
      return;
    }
    const row = payoutRows.find((item) => item.id === (target.dataset.id || ""));
    if (row) {
      row.status = "失败";
      row.statusClass = "rejected";
      row.rejectReason = reason;
      row.note = "该笔打款已被人工驳回。";
    }
    closeOverlay();
    render();
    toast("已驳回该笔结算");
    return;
  }
  if (action === "set-revenue-payout-field") {
    const fieldName = target.dataset.field || "";
    if (fieldName) state.revenuePayoutDraft[fieldName] = target.value;
    return;
  }
  if (action === "open-notifications") {
    openNotificationCenterDrawer();
    return;
  }
  if (action === "open-notification") {
    const type = target.dataset.type || "";
    const task = decodeURIComponent(target.dataset.task || "");
    const statusKey = decodeURIComponent(target.dataset.status || "");
    closeOverlay();
    if (state.role === "brand") {
      state.tabs.taskReview = type === "deliverable" ? "deliveries" : "applicants";
      go("taskReview");
      return;
    }
    if (state.role === "creator") {
      if (type === "apply_approved" || type === "apply_rejected") {
        if (statusKey) applicationDetail.statusKey = statusKey;
        go("applications");
        return;
      }
      if (type === "deliverable_approved" || type === "deliverable_rejected") {
        if (task) state.creatorProjectDetailTask = task;
        go("projectProgress");
        return;
      }
    }
    return;
  }
  if (action === "open-reason") {
    openReasonModal(decodeURIComponent(target.dataset.reason || ""));
    return;
  }
  if (action === "confirm-invite") {
    if (!state.inviteSelectedCreators.length) {
      toast("请先选择至少 1 位达人");
      return;
    }
    closeOverlay();
    toast(`合作邀请已发送给 ${state.inviteSelectedCreators.length} 位达人`);
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
    const rawName = target.dataset.campaign || target.dataset.task || "";
    const taskName = decodeURIComponent(rawName);
    const statusKey = target.dataset.status || "";
    state.creatorTaskDetail.name = taskName || taskDetailProfile.displayTitle;
    state.creatorTaskDetail.backTo = state.page === "myProjects" ? "myProjects" : state.page === "invitations" ? "invitations" : state.page === "applications" ? "applications" : "opportunityHall";
    applicationDetail.statusKey = statusKey || "none";
    if (state.page !== "taskDetail") go("taskDetail");
    render();
    return;
  }
  if (action === "modal-upload") openUploadModal();
  if (action === "drawer-project-progress") {
    const taskName = decodeURIComponent(target.dataset.task || "任务");
    state.creatorProjectDetailTask = taskName;
    openProjectProgressDrawer(taskName);
    return;
  }
  if (action === "modal-product") openProductModal();
  if (action === "modal-email-send") openEmailSendModal();
  if (action === "modal-email-feedback") openEmailFeedbackModal();
  if (action === "modal-email-history") openEmailHistoryModal();
  if (action === "modal-email-detail") openEmailDetailModal();
  if (action === "modal-reject-reason") {
    const taskName = decodeURIComponent(target.dataset.task || "项目");
    const reason = decodeURIComponent(target.dataset.reason || "暂无被拒原因");
    openRejectReasonModal(taskName, reason);
  }
  if (action === "open-my-talent-drawer") {
    state.myTalentDetail.name = decodeURIComponent(target.dataset.name || "Mika Studio");
    state.myTalentDetail.tab = "ledger";
    openMyTalentDrawer(state.myTalentDetail.name);
    return;
  }
  if (action === "open-my-talent-profile") {
    state.myTalentDetail.name = decodeURIComponent(target.dataset.name || "Mika Studio");
    state.myTalentDetail.tab = "ledger";
    go("myTalentProfile");
    return;
  }
  if (action === "open-my-talent-invite") {
    openMyTalentInviteModal(decodeURIComponent(target.dataset.name || state.myTalentDetail.name || "Mika Studio"));
    return;
  }
  if (action === "submit-my-talent-invite") {
    const name = decodeURIComponent(target.dataset.name || state.myTalentDetail.name || "达人");
    closeOverlay();
    toast(`已向 ${name} 发起合作邀约`);
    return;
  }
  if (action === "set-my-talent-tab") {
    state.myTalentDetail.tab = target.dataset.tab || "ledger";
    if (state.page === "myTalentProfile") {
      render();
    } else {
      openMyTalentDrawer(state.myTalentDetail.name || "Mika Studio");
    }
    return;
  }
  if (action === "set-my-talent-filter") {
    const key = target.dataset.key || "";
    if (key) state.myTalentFilters[key] = target.dataset.value || "全部";
    render();
    return;
  }
  if (action === "remove-my-talent-filter") {
    const key = target.dataset.filterKey || "";
    if (key && key in state.myTalentFilters) state.myTalentFilters[key] = "全部";
    render();
    return;
  }
  if (action === "clear-my-talent-selected-filters") {
    resetMyTalentFilters();
    render();
    return;
  }
  if (action === "reset-my-talent-filters") {
    resetMyTalentFilters();
    render();
    return;
  }
  if (action === "open-my-talent-content") {
    openMyTalentContentModal(decodeURIComponent(target.dataset.name || ""), decodeURIComponent(target.dataset.campaign || ""));
    return;
  }
  if (action === "open-my-talent-settlement") {
    openMyTalentSettlementModal(decodeURIComponent(target.dataset.name || ""), decodeURIComponent(target.dataset.campaign || ""));
    return;
  }
  if (action === "drawer-creator") openCreatorDrawer(target.dataset.name);
  if (action === "drawer-delivery") openDeliveryDrawer(decodeURIComponent(target.dataset.creator || ""));
  if (action === "approve-collab-delivery") {
    const creatorKey = decodeURIComponent(target.dataset.creator || "");
    const row =
      collaborations.find((item) => (item.creatorId || item.creator) === creatorKey) ||
      collaborations.find((item) => item.creator === creatorKey);
    if (row) {
      row.progress = "待发布";
      row.note = "广告主已确认终稿，等待达人按排期发布。";
      row.brandReviewTime = "2026-06-18 10:30";
      row.deliverables = [
        ...(row.deliverables || []),
        {
          badge: "审核结果",
          title: "广告主确认通过",
          desc: "当前内容版本已通过审核，可进入发布安排。",
          meta: "确认时间 2026-06-18 10:30",
        },
      ];
    }
    closeOverlay();
    render();
    toast("已确认通过当前达人产物");
    return;
  }
  if (action === "accept-invite") {
    openInviteDecisionModal(decodeURIComponent(target.dataset.task || ""), "accept");
    return;
  }
  if (action === "reject-invite") {
    openInviteDecisionModal(decodeURIComponent(target.dataset.task || ""), "reject");
    return;
  }
  if (action === "confirm-invite-decision") {
    const taskName = decodeURIComponent(target.dataset.task || "");
    const decision = target.dataset.decision || "accept";
    const invite = invitations.find((row) => row.task === taskName);
    if (invite) {
      invite.status = decision === "accept" ? "已合作" : "已拒绝";
      invite.statusClass = decision === "accept" ? "running" : "rejected";
    }
    closeOverlay();
    render();
    toast(decision === "accept" ? `已接受 ${taskName} 的合作邀请` : `已拒绝 ${taskName} 的合作邀请`);
    return;
  }
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
      refreshPublishModal();
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
  if (key === "campaignName") {
    const counter = fieldTarget.closest(".field")?.querySelector(".field-counter");
    if (counter) counter.textContent = `${fieldTarget.value.length}/200`;
  }
});

document.addEventListener("input", (event) => {
  const fieldTarget = event.target.closest("[data-platform-field]");
  if (!fieldTarget) return;
  ensurePublishDraftPlatforms();
  const key = fieldTarget.dataset.platformField;
  const platform = fieldTarget.dataset.platformName || state.publishDraft.activePlatform;
  if (key === "cooperationTypeSingle") {
    state.publishDraft.platformConfigs[platform].cooperationTypes = fieldTarget.value ? [fieldTarget.value] : [];
  } else {
    state.publishDraft.platformConfigs[platform][key] = fieldTarget.value;
  }
});

document.addEventListener("change", (event) => {
  const fieldTarget = event.target.closest("[data-platform-field]");
  if (!fieldTarget) return;
  ensurePublishDraftPlatforms();
  const key = fieldTarget.dataset.platformField;
  const platform = fieldTarget.dataset.platformName || state.publishDraft.activePlatform;
  if (key === "cooperationTypeSingle") {
    state.publishDraft.platformConfigs[platform].cooperationTypes = fieldTarget.value ? [fieldTarget.value] : [];
  } else {
    state.publishDraft.platformConfigs[platform][key] = fieldTarget.value;
  }
});

document.addEventListener("input", (event) => {
  const fieldTarget = event.target.closest("[data-official-field]");
  if (!fieldTarget) return;
  const key = fieldTarget.dataset.officialField;
  state.officialTaskDraft[key] = fieldTarget.value;
});

document.addEventListener("change", (event) => {
  const fieldTarget = event.target.closest("[data-official-field]");
  if (!fieldTarget) return;
  const key = fieldTarget.dataset.officialField;
  state.officialTaskDraft[key] = fieldTarget.value;
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
  const filterTarget = event.target.closest("[data-admin-filter]");
  if (!filterTarget) return;
  state.adminFilters[filterTarget.dataset.adminFilter] = filterTarget.value;
  render();
});

document.addEventListener("change", (event) => {
  const uploadTarget = event.target.closest("#loginBannerUploadInput");
  if (uploadTarget) {
    const matched = loginPageBannerRows.find((item) => item.id === state.loginBannerUploadTargetId) || loginPageBannerRows[0];
    const fileName = uploadTarget.files?.[0]?.name || "";
    if (fileName) {
      matched.updatedAt = "刚刚";
      toast(`${matched.name} 已选择新图片：${fileName}`);
      render();
    }
    uploadTarget.value = "";
    return;
  }
  const actionTarget = event.target.closest("[data-action='select-admin-campaign']");
  if (actionTarget && actionTarget.value) {
    state.adminFilters.selectedCampaign = decodeURIComponent(actionTarget.value);
    render();
    return;
  }
  const filterTarget = event.target.closest("[data-admin-filter]");
  if (!filterTarget) return;
  state.adminFilters[filterTarget.dataset.adminFilter] = filterTarget.value;
  render();
});

document.addEventListener("input", (event) => {
  const filterTarget = event.target.closest("[data-invitation-filter]");
  if (!filterTarget) return;
  state.invitationFilters[filterTarget.dataset.invitationFilter] = filterTarget.value;
  render();
});

document.addEventListener("change", (event) => {
  const filterTarget = event.target.closest("[data-invitation-filter]");
  if (!filterTarget) return;
  state.invitationFilters[filterTarget.dataset.invitationFilter] = filterTarget.value;
  render();
});

document.addEventListener("input", (event) => {
  const filterTarget = event.target.closest("[data-talent-filter]");
  if (!filterTarget) return;
  const key = filterTarget.dataset.talentFilter;
  state.talentSearchFilters[key] = filterTarget.value;
  render();
});

document.addEventListener("input", (event) => {
  const filterTarget = event.target.closest("[data-my-talent-filter]");
  if (!filterTarget) return;
  const key = filterTarget.dataset.myTalentFilter;
  state.myTalentFilters[key] = filterTarget.value;
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

document.addEventListener("change", (event) => {
  const filterTarget = event.target.closest("[data-my-talent-filter]");
  if (!filterTarget) return;
  const key = filterTarget.dataset.myTalentFilter;
  state.myTalentFilters[key] = String(filterTarget.value || "");
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
  const next = normalizePage(window.location.hash.replace("#", "") || "promotions");
  state.page = pages[next] ? next : "promotions";
  render();
});

if (!window.location.hash) {
  window.location.hash = "promotions";
} else {
  const next = normalizePage(window.location.hash.replace("#", ""));
  state.page = pages[next] ? next : "promotions";
}

render();


