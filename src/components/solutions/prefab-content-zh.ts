/**
 * Prefab client cases — 中文（zh）
 * PREFAB_CLIENT_CASES 的中文镜像；被 Prefab / Cabinet / Row 三页共享（Batch 3 统一维护，勿单页增删字段）。
 * 文案源：CMS 案例翻译 post 的 soeteck_display_title + post_excerpt（2026-09-02 取自生产），
 * 摘录按英文版卡片长度截断。slug / imgSrc 与英文版一致（跨语言同一 URL）；alt 在模板中取 title。
 */
export const PREFAB_CLIENT_CASES = [
  {
    imgSrc: '/resources/Qatar-containerized-data-center-768x385.webp',
    title: 'GRD 卡塔尔通过 Soeteck 定制集装箱式数据中心实现 24/7 稳定数据运行',
    slug: 'grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center',
    desc: '背景：全球数字化浪潮之下，GRD 公司——一家全面推进数字化转型的企业——将数据视为核心战略资产。为此…',
  },
  {
    imgSrc: '/resources/prefab-modular-data-center-of-Saudi-Telecom-6-768x512.webp',
    title: '驱动创新：SOETECK 为沙特电信提供先进移动式 OLT 集装箱数据中心解决方案',
    slug: 'driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions',
    desc: '沙特电信的 DR 项目旨在设计和实施完全可定制的移动式 OLT（光线路终端）集装箱数据中心，提升中东地区电信运营商的运营能力。这一创新解决方案…',
  },
  {
    imgSrc: '/resources/Data-center-for-Satellite-Solutions-in-Singapore-1-768x441.webp',
    title: 'WebSat Media 借助数益科技冷却方案优化数据中心基础设施',
    slug: 'websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions',
    desc: 'WebSat 成立于 2000 年，总部位于新加坡，是全球领先的卫星、广播、固定和无线通信基础设施、软件解决方案及互联网服务提供商。随着业务扩展对数据中心存储需求的持续增长…',
  },
  {
    imgSrc: '/resources/100KW-Cooling-System-Solution-In-Malaysia-0-768x768.webp',
    title: 'Open DC 马来西亚为数据中心改造部署模块化 100KW 风冷精密冷却系统',
    slug: 'open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit',
    desc: 'Open DC Malaysia 是一家知名的云服务网络技术公司，专门从事服务器存储服务。该公司对其现有数据中心进行了改造，升级冷却基础设施，以满足新的运营需求。…',
  },
  {
    imgSrc: '/resources/a-project-of-Telecom-Fiji-1.webp',
    title: '斐济电信采用数益科技防腐蚀精密空调方案提升网络稳定性',
    slug: 'telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design',
    desc: '斐济电信有限公司（Telecom Fiji Limited）是斐济领先的固定通信和网络服务提供商，由于沿海电信站点冷却系统不足，面临着严峻的运营风险。许多设施依赖容量不足的家用空调设备…',
  },
  {
    imgSrc: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp',
    title: 'Sinus-Dochi LLC 借助数益科技智能精密冷却系统降低 PUE 并提升冷却效率',
    slug: 'sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system',
    desc: 'Sinus-Dochi LLC 是蒙古一家知名的 HVAC 服务公司，专注于制冷领域，拥有一支专家工程师团队。该公司希望提高其数据中心设施的能效和冷却性能。为此…',
  },
];

// ---------------------------------------------------------------------------
// 页面级文案（PrefabContainerPage 模板原硬编码，Batch 3 i18n 追加）
// 内容串中的 {lang} 占位符由模板替换为当前语言前缀；slug 本身不译。
// ---------------------------------------------------------------------------

export const PREFAB_PAGE_HERO = {
  title: '预制化集装箱数据中心',
  bannerAlt: '预制化集装箱数据中心项目',
  videoAriaLabel: '播放预制化集装箱数据中心视频',
  videoThumbAlt: '预制化模块化数据中心项目视频预览',
};

export const PREFAB_VIDEO_FALLBACK_TITLE = '数益科技解决方案视频';

export const PREFAB_OVERVIEW_HEADING = '集装箱数据中心，快速交付';

export const PREFAB_OVERVIEW_PARAGRAPHS = [
  '<strong>集装箱数据中心</strong>让算力比传统土建更早到位。架构预制化、模块化，部署规模可按站点量身定制，需求变化时也能灵活调整。',
  '数益科技的预制化集装箱数据中心通过更精细的电力管理与热控制，把运营成本压下来。设备灵活、可扩展，而且每一台都与客户共同设计——为实际负载塑形，而非套用通用规格。',
  '对中小企业来说，这条路线同样划算：以服务为先的模式让我们在价格上优于华为，支持不打折。项目做大时，我们的供应链也承接得起大规模建设。欢迎了解<a href="/{lang}/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/">沙特电信 DR 项目</a>——正是在与客户的紧密沟通中，我们一步步打磨出了这套设计。',
];

export const PREFAB_CTA_ROW = {
  getBrochure: '获取手册',
  contactUs: '联系我们',
};

export const PREFAB_CLOSER_HEADING = '走进集装箱数据中心';

export const PREFAB_DETAIL_BLOCKS = {
  typical: {
    num: '1 - ',
    title: 'PCDC 的典型设计',
    imageAlt: '预制化集装箱数据中心的典型设计',
    lead: '集装箱数据中心将电力分配、制冷管理、消防安全与综合布线集成于一体，以紧凑的形态实现安全、可靠与高效。',
    featuresLabel: '核心特性：',
    features: [
      '安全可靠：按高安全标准打造，防火、防水与安防强化等多重保护措施齐备。',
      '快速部署：设计便于快速安装就位，短时间内即可投入运行。',
      '灵活扩展：模块化架构支持按需扩容，从容应对需求变化。',
      '高密高效：空间利用率高，在压低资源消耗的同时提供充足算力。',
      '智能管理：内置监控与管理系统，运维状态一目了然。',
    ],
  },
  models: {
    num: '2 - ',
    title: '两种典型机型',
    intro: '数益科技预制化集装箱数据中心提供多种尺寸规格，匹配不同业务需要。这里介绍两种典型规格：20 英尺与 40 英尺集装箱，分别面向高效、灵活的算力场景设计。',
    fullViewLabel: '整体视图',
    ft20Title: '20ft 集装箱数据中心',
    ft20Desc: '20 英尺集装箱数据中心是面向中等算力需求的紧凑方案，占地面积小，城市与偏远站点都容易部署。',
    ft40Title: '40ft 集装箱数据中心',
    ft40Desc: '40 英尺集装箱数据中心面向更大规模部署，在保留快速部署优势的同时，为高密度计算提供更大容量。',
  },
  modules: {
    num: '3 - ',
    title: '核心基础模块',
    lead: '数益科技集装箱数据中心解决方案由机柜系统、热控制系统、关键供电、安防系统与动力环境系统等关键部分组成。以下介绍其中几个核心模块。',
  },
};

export const PREFAB_HOTSPOTS = [
  { label: '室外冷凝器', x: '13%', y: '50%' },
  { label: '监控模块', x: '29%', y: '30%' },
  { label: '温湿度传感器', x: '31%', y: '55%' },
  { label: '漏水检测', x: '35%', y: '60%' },
  { label: '烟感探测器', x: '38%', y: '36%' },
  { label: '列间空调', x: '43.5%', y: '50%' },
  { label: '服务器机柜', x: '54%', y: '52%' },
  { label: '电力分配', x: '63%', y: '40%' },
  { label: 'UPS', x: '68%', y: '60%' },
  { label: '电池', x: '73%', y: '49%' },
];

export const PREFAB_CORE_MODULES = [
  { title: '高效制冷模块', text: '热管理与热量散发', icon: 'snowflake' },
  { title: '智能电力分配', text: '供电分配与管理', icon: 'bolt' },
  { title: '安全防护系统', text: '消防与物理安防', icon: 'shield' },
  { title: '智能监控系统', text: '运行状态监控', icon: 'chart' },
];

export const PREFAB_HOTSPOT_IMAGE = '/resources/container-data-center-3-1024x683.webp';

export const PREFAB_MODEL_VIEWS_20FT = [
  {
    title: '正视图',
    image: '/resources/20ft-prefabricated-container-data-center-front-view-3-1024x683.webp',
    items: [
      { label: '空调室外机', text: '负责引入或排出室外空气，提供制冷与通风。', x: '15%', y: '45%' },
      { label: '热通道', text: '服务器设备排出的热风在此集中。', x: '31%', y: '45%' },
      { label: '冷通道', text: '服务器面向冷通道，冷空气可直接流向设备。', x: '60%', y: '40%' },
      { label: '消防系统', text: '监测并探测潜在火灾隐患。', x: '91%', y: '40%' },
    ],
  },
  {
    title: '俯视图',
    image: '/resources/20ft-prefabricated-container-data-center-top-view-3-1024x683.webp',
    items: [
      { label: 'IT 机柜', text: '用于容纳并保护服务器及其他 IT 设备。', x: '43%', y: '28%' },
      { label: '列间空调', text: '直接部署在服务器机柜之间的制冷单元。', x: '77%', y: '28%' },
      { label: 'UPS', text: '市电中断时提供临时供电。', x: '77%', y: '47%' },
      { label: '电池柜', text: '存储备用电源，通常与 UPS 配合使用。', x: '77%', y: '60%' },
    ],
  },
];

export const PREFAB_MODEL_VIEWS_40FT = [
  {
    title: '正视图',
    image: '/resources/20ft-prefabricated-container-data-center-front-view-3-1024x683.webp',
    items: [
      { label: '空调室外机', text: '负责引入或排出室外空气。', x: '15%', y: '45%' },
      { label: '热通道', text: '热风在此集中。', x: '31%', y: '45%' },
      { label: '冷通道', text: '服务器面向冷通道。', x: '60%', y: '40%' },
      { label: '消防系统', text: '监测并探测潜在火灾隐患。', x: '91%', y: '40%' },
    ],
  },
  {
    title: '俯视图',
    image: '/resources/40ft-container-data-center-5-1024x683.webp',
    items: [
      { label: 'IT 机柜', text: '用于容纳并保护服务器及其他 IT 设备。', x: '30%', y: '43%' },
      { label: '热通道', text: '热风在此集中。', x: '60%', y: '43%' },
      { label: '电池柜', text: '存储备用电源。', x: '78%', y: '42%' },
    ],
  },
];

export const PREFAB_SPEC_COLUMNS = [
  { model: 'SY-ICDC-10', image: '/resources/soeteck-container-dc-10ft.webp' },
  { model: 'SY-ICDC-20', image: '/resources/soeteck-container-dc-20ft.webp' },
  { model: 'SY-ICDC-40', image: '/resources/soeteck-container-dc-40ft.webp' },
  { model: 'SY-ICDC-X', image: '/resources/soeteck-container-dc-customized.webp' },
];

export const PREFAB_SPEC_ROWS = [
  ['集装箱尺寸', '10ft HQ', '20ft HQ', '40ft HQ', '定制'],
  ['机柜规格', '600*1100*2000', '600*1100*2000', '600*1100*2000', '定制'],
  ['单机柜容量', '42U', '42U', '42U', '定制'],
  ['机柜数量', '2+ 台', '4+ 台', '9+ 台', '定制'],
  ['单机柜最大容量', '6kW', '6kW', '6kW', '定制'],
  ['IT 设备总容量', '12+kW', '24+kW', '54+kW', '定制'],
  ['制冷方式', '列间空调', '列间空调', '列间空调', '列间空调'],
  ['UPS', 'N+1 模块化 UPS', 'N+1 模块化 UPS', 'N+1 模块化 UPS', '定制'],
];

export const PREFAB_SCENARIOS = [
  {
    title: '应急响应',
    image: '/resources/Emergency-Response.webp',
    pain_points: ['通信中断', '时效要求高', '基础设施损毁'],
    benefits: ['快速部署', '自给自足', '抗灾可靠'],
    problem: '自然灾害往往令当地基础设施全面瘫痪，救援指挥需要 IT 与通信能力立即恢复。',
    solution: '标准化集装箱可由卡车、火车或直升机快速运输，24-48 小时内完成部署。',
    application: '自然灾害恢复、应急救援',
  },
  {
    title: '油气勘探',
    image: '/resources/Oil-Gas-Exploration.webp',
    pain_points: ['无电网接入', '气候严酷', '地处偏远'],
    benefits: ['耐极端气候', '离网运行', '高机动性'],
    problem: '勘探区域通常位于偏远沙漠或海上平台，缺乏电网与市政配套。',
    solution: '太阳能-柴油混合系统实现完全离网供电。-40°C 至 55°C 加固设计配合 IP54 防护，从容应对极端环境。',
    application: '偏远钻井平台、采矿作业',
  },
  {
    title: '大型活动',
    image: '/resources/Large-scale-Events.webp',
    pain_points: ['临时容量激增', '工期紧张', '无固定设施'],
    benefits: ['活动就绪', '容量可扩', '临时部署'],
    problem: '体育赛事、音乐节等大型活动带来短期 IT 需求激增，传统基础设施难以招架。',
    solution: 'IT 容量随活动规模弹性伸缩，现场数小时内即可部署；活动结束后可拆卸转场。',
    application: '体育赛事、节庆活动、会议会展',
  },
  {
    title: '军事部署',
    image: '/resources/Military-Deployments.webp',
    pain_points: ['战术机动需求', '安全风险', '环境恶劣'],
    benefits: ['安全设计', '军用级品质', '快速部署'],
    problem: '军事部署要求 IT 基础设施具备快速机动能力，以适应战场变化。',
    solution: '军用级构造可承受冲击与极端天气。端到端加密与防篡改物理防护确保数据完整。',
    application: '野外作业、军事基地、国防设施',
  },
  {
    title: '边缘计算',
    image: '/resources/Edge-Computing.webp',
    pain_points: ['时延问题', '数据成本高', '站点分散'],
    benefits: ['低时延', '边缘部署', '云端互联'],
    problem: '随着物联网与 5G 的发展，海量终端数据需要实时处理。',
    solution: '我们的集装箱数据中心部署在数据源附近，提供毫秒级响应，远程数据传输量减少 90%。',
    application: '物联网网络、智慧城市、工业边缘',
  },
  {
    title: '数据中心扩建',
    image: '/resources/Data-Center-Expansion.webp',
    pain_points: ['建设周期长', '容量受限', '扩容影响业务'],
    benefits: ['即插即用', '快速扩容', '不影响在线业务'],
    problem: '传统数据中心扩建需要 6-12 个月建设周期，难以应对突发的业务增长。',
    solution: '预制化数据中心集装箱出厂预装，1-2 周即可就绪，与现有数据中心无缝集成。',
    application: '云数据中心、企业 IT 扩容',
  },
];

export const PREFAB_PRODUCT_GROUPS = {
  criticalPower: '关键电源',
  thermal: '热管理',
  galleryAria: '{title} 图集',
};

export const PREFAB_SPECS = {
  heading: '精选机型',
  modelsLabel: '机型',
  pdfLinkText: '数益科技预制化集装箱数据中心.pdf',
};

export const PREFAB_SCENARIOS_HEADING = '谁需要集装箱数据中心？';

export const PREFAB_SCENARIOS_SUBTITLE = '集电力、制冷与基础设施模块于一体，支撑 IT 稳定运行——模块化数据中心在这些场景下独具价值';

export const PREFAB_SCENARIO_UI = {
  benefitsTab: '方案优势',
  painTab: '关键痛点',
  detailsAria: '{title} 详情',
};

export const PREFAB_CASES_HEADING = '集装箱数据中心案例';

export const PREFAB_CTA_SECTION = {
  eyebrow: '与工程师对话',
  title: '联系数益科技',
  text: '告诉我们场地条件与项目需求——项目类型、容量目标与时间表，团队会为您规划切实可行的配置路径。',
  checks: ['项目方案咨询', '技术配置支持', '区域跟进服务'],
  contactButton: '联系我们',
  brochureButton: '下载手册',
};

export const PREFAB_CRITICAL_POWER_TEXT =
  '数益科技方案内置高效电力分配系统，配备多款机架式 UPS 与定制化配电模块。客户可按需选择机架式锂电池或铅酸电池。我们还提供 UPS 选型咨询，以及从配电设计到制造的一站式服务。此外，根据所需备电时长，可选配电池组、电池柜、电池架等多种电池方案。';

export const PREFAB_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'SY-M 系列 (150-300kVA) UPS',
    subtitle: '模块化在线式 UPS，25/30kVA 功率模块',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-m-series-ups-modular-online-ups-150kva-300kva-25-30kva-power-module',
    excerpt: '模块化在线式 UPS，配备 25/30kVA 功率模块，容量可从 150kVA 扩展至 300kVA。模块热插拔，支持 N+1 冗余与真在线双变换。',
    specs: ['N+1 冗余', '模块热插拔', '真在线双变换', '模块化可扩展设计'],
    images: [
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-150kVA-300kVA-25-30kVA-Power-Module-1.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-150kVA-300kVA-25-30kVA-Power-Module-2.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-150kVA-300kVA-25-30kVA-Power-Module-3.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-150kVA-300kVA-25-30kVA-Power-Module-4.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-150kVA-300kVA-25-30kVA-Power-Module-5.webp',
    ],
  },
  {
    title: 'SY-M 系列 (400-1600kVA) UPS',
    subtitle: '模块化在线式 UPS，100kVA 功率模块',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-m-series-ups-modular-online-ups-400kva-1600kva-100kva-power-module',
    excerpt: '大容量模块化在线式 UPS，配备 100kVA 功率模块，容量可从 400kVA 扩展至 1600kVA。模块热插拔，N+1 冗余，真在线双变换。',
    specs: ['N+1 冗余', '100kVA 热插拔', '真在线双变换', '可扩展至 1600kVA'],
    images: [
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-400kVA-1600kVA-100kVA-Power-Module-2.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-400kVA-1600kVA-100kVA-Power-Module-4.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-400kVA-1600kVA-100kVA-Power-Module-3.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-400kVA-1600kVA-100kVA-Power-Module-1.webp',
    ],
  },
  {
    title: 'SY-T 系列 (400-2000kVA) UPS',
    subtitle: '高频在线式 UPS，塔式，PF1',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-t-series-ups-high-frequency-online-ups-400kva-2000kva-tower-pf1-true-double-conversion',
    excerpt: '高频在线塔式 UPS，容量 400-2000kVA，PF1 效率，真在线双变换技术，面向大型数据中心应用设计。',
    specs: ['PF1 效率', '真在线双变换', '塔式设计', '可扩展至 2000kVA'],
    images: [
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-2.webp',
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-4.webp',
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-5.webp',
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-1.webp',
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-7.webp',
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-6.webp',
    ],
  },
];

export const PREFAB_THERMAL_MANAGEMENT_TEXT =
  '数益科技面向数据中心与基站提供全套制冷方案，涵盖房间级、列间与机柜级精密空调。针对单机柜内高密度计算的冷却需求，我们的机柜级与列间级精密空调以高效与高性价比为核心设计。';

export const PREFAB_THERMAL_PRODUCTS = [
  {
    title: 'DX 风冷列间空调',
    subtitle: '制冷量 5.6kW – 90.1kW',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-in-row-cooling-system-5-6kw-90-1kw-capacity',
    excerpt: 'DX 风冷列间精密空调，制冷量 5.6kW 至 90.1kW，为数据中心列间级热管理的高效之选。',
    specs: ['制冷量 5.6kW-90.1kW', '风冷 DX', '列间安装', '精密控制'],
    images: [
      '/resources/SOETECK-air-cooled-in-row-cooling-system-5.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-6.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-3.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-4.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-1.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-2.webp',
    ],
  },
  {
    title: 'DX 风冷房间级空调',
    subtitle: '制冷量 32.5kW – 120kW',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-room-cooling-system-32-5kw-120kw-capacity-up-down-flow',
    excerpt: 'DX 风冷房间级精密空调，制冷量 32.5kW 至 120kW，支持上送风与下送风两种配置，部署灵活。',
    specs: ['制冷量 32.5kW-120kW', '上送风/下送风', '风冷 DX', '房间级精密'],
    images: [
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-1.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-2.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-5.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-6.webp',
    ],
  },
  {
    title: '整体式机柜空调',
    subtitle: '制冷量 3.5kW，8U',
    slug: 'thermal-management/precision-air-conditioning/soeteck-packaged-rack-cooling-system-3-5kw-capacity-8u-bottom-or-middle-mounted',
    excerpt: '整体式机柜空调，制冷量 3.5kW，8U 高度。紧凑的底部或中部安装设计，采用 R410A 制冷剂，支持接入 BMS。',
    specs: ['3.5kW 制冷', '底部或中部安装', 'R410A 制冷剂', '支持接入 BMS'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
];
