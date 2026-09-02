/**
 * Aisle Modular Data Center solution content — 中文（zh）
 * Batch 3 5 语言化：结构与 aisle-modular-content.ts（EN）完全一致，导出名与 EN 相同。
 * 术语按 Batch 3 术语包 §二（aisle containment=通道封闭、in-row cooling=列间空调、hot/cold aisle=热通道/冷通道）。
 * 品牌 zh 页面用 数益科技/数益（SOETECK 仅保留在图片路径与 CMS 案例标题引文中）。
 */

export const AISLE_OVERVIEW_PARAGRAPHS = [
  '<strong>通道式模块化数据中心</strong>是预制的独立一体化机房：供电、制冷与监控集成于单一单元，无需专门土建即可承载企业级负载。每个模块都在工厂完成组装与测试，现场施工量被压到最低。',
  '数益科技为这类机房规划了渐进式扩容路径：从一个通道起步，随需求增长逐步增加机柜与制冷，不扰动现有布局。容量始终贴近真实负载，支出与能耗都可控。',
  '与按需土建相比，通道式模块化数据中心交付更快、成本更低，适合边缘计算、企业扩容与有期限的容量需求。即插即用设计保持数据中心级可靠性，并可从任意站点远程监控。',
];

export const AISLE_HOTSPOTS = [
  { label: '室外冷凝器', x: '14.4%', y: '51.8%' },
  { label: '监控模块', x: '30.4%', y: '31.8%' },
  { label: '温湿度传感器', x: '32.4%', y: '56.8%' },
  { label: '漏水检测', x: '36.4%', y: '61.8%' },
  { label: '烟感探测器', x: '39.4%', y: '37.8%' },
  { label: '列间空调', x: '44.9%', y: '51.8%' },
  { label: '服务器机柜', x: '55.4%', y: '53.8%' },
  { label: '电力分配', x: '64.4%', y: '41.8%' },
  { label: 'UPS', x: '69.4%', y: '61.8%' },
  { label: '电池', x: '74.4%', y: '50.8%' },
];

export const AISLE_HOTSPOT_IMAGE: string = '/resources/4-1024x768.png';

export const AISLE_CORE_MODULES = [
  { title: '高效制冷模块', text: '热管理与散热', icon: 'snowflake' },
  { title: '智能电力分配', text: '供电分配与管理', icon: 'bolt' },
  { title: '安全防护系统', text: '消防与物理安防', icon: 'shield' },
  { title: '智能监控系统', text: '运行状态监控', icon: 'chart' },
];

export const AISLE_MODEL_VIEWS = [
  {
    title: '冷通道模块化数据中心',
    images: [
      '/resources/4-1024x768.png',
      '',  // 待上传图片
      '',  // 待上传图片
    ],
  },
  {
    title: '热通道模块化数据中心',
    images: [
      '/resources/4-1024x768.png',
      '',  // 待上传图片
      '',  // 待上传图片
    ],
  },
];

// Critical Power & Thermal Management（与 row-modular-content.ts 同源文案）
export const AISLE_CRITICAL_POWER_TEXT: string =
  '数益科技通道式模块化数据中心方案内置高效配电系统，提供多款机架式 UPS 与定制化配电模块。机架式锂电池或铅酸电池可按需选配；我们同时提供 UPS 选型咨询，以及覆盖设计到制造的整体配电服务。';

export const AISLE_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'SY-RT 系列（1-3kVA）UPS',
    subtitle: '在线式高频 UPS，1kVA-3kVA，PF1',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-high-frequency-online-ups-1kva-3kva-rack-tower-mounted-pf1',
    excerpt: 'SY-RT 系列 UPS（1-3kVA）提供可靠的在线双变换保护：PF1 输出、110-300VAC 宽输入电压范围、紧凑的机架/塔式结构。ECO 模式下效率达 96%，转换时间 0ms。',
    specs: ['PF1 输出效率', '0ms 转换时间', '110-300VAC 宽输入', 'ECO 模式效率 96%'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF11.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF12.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF13.webp',
    ],
  },
  {
    title: 'SY-RT 系列（1-10kVA）UPS',
    subtitle: '在线式高频 UPS，1kVA-10kVA，PF0.9',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-winner-pro-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted-pf0-9',
    excerpt: '数益科技 SY-RT Winner Pro 系列 UPS（1-10kVA）：PF0.9 输出、宽输入电压范围，机架/塔式两用安装，适配通道式模块化数据中心的多样化部署。',
    specs: ['PF0.9 输出效率', '在线双变换', '机架/塔式安装', '宽输入范围'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-2.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-4.webp',
    ],
  },
  {
    title: 'SY-RT 系列（1-10kVA）UPS',
    subtitle: '在线式高频 UPS，1kVA-10kVA，PF0.8',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted',
    excerpt: 'SY-RT 系列 UPS（1-10kVA）：PF0.8 在线保护、最高 93% 效率、机架/塔式灵活安装，适合保护数据中心与企业环境中的关键设备。',
    specs: ['PF0.8', '效率最高 93%', '机架/塔式安装', '配置灵活'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-4.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-2.webp',
    ],
  },
];

export const AISLE_THERMAL_MANAGEMENT_TEXT: string =
  '数益科技为数据中心与基站提供覆盖房间级、列间级与机柜级的精密空调方案。针对单机柜内高密度计算的散热需求，机柜级与列间级精密空调专为高效与低综合成本而设计。';

export const AISLE_THERMAL_PRODUCTS = [
  {
    title: 'DX 风冷列间空调',
    subtitle: '制冷量 5.6kW – 90.1kW',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-in-row-cooling-system-5-6kw-90-1kw-capacity',
    excerpt: '列间精密冷却系统，实现高效的列间级热管理。',
    specs: ['5.6kW-90.1kW 制冷量', '风冷 DX', '列间安装', '精密控制'],
    images: [
      '/resources/SOETECK-air-cooled-in-row-cooling-system-5.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-6.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-3.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-4.webp',
    ],
  },
  {
    title: 'DX 风冷房间级空调',
    subtitle: '制冷量 32.5kW – 120kW',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-room-cooling-system-32-5kw-120kw-capacity-up-down-flow',
    excerpt: '房间级精密冷却，支持上送风/下送风配置。',
    specs: ['32.5kW-120kW 制冷量', '上/下送风配置', '风冷 DX', '房间级精密控温'],
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
    excerpt: '紧凑型机柜冷却系统，采用 R410A 制冷剂，支持 BMS 集成。',
    specs: ['3.5kW 制冷量', '底部或中部安装', 'R410A 制冷剂', 'BMS 集成'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
];

export const AISLE_SPEC_COLUMNS = [
  { model: 'SY-AMDC-10', image: '/resources/cabinet-modular-data-center-31.webp' },
  { model: 'SY-AMDC-20', image: '/resources/cabinet-modular-data-center-41.webp' },
  { model: 'SY-AMDC-40', image: '/resources/cabinet-modular-data-center-51.webp' },
  { model: '定制', image: '/resources/cabinet-modular-data-center-61.webp' },
];

export const AISLE_SPEC_ROWS = [
  ['配置', '10 个机柜', '20 个机柜', '40 个机柜', '定制'],
  ['机柜尺寸', '600×1000mm', '600×1000mm', '600×1000mm', '定制'],
  ['机柜容量', '42U', '42U', '42U', '定制'],
  ['单机柜最大功率', '8kW', '10kW', '12kW', '定制'],
  ['IT 总容量', '80kW', '200kW', '480kW', '定制'],
  ['制冷方式', '列间 DX/冷冻水', '列间 DX/冷冻水', '列间 DX/冷冻水', '定制'],
  ['通道封闭', '热/冷通道', '热/冷通道', '热/冷通道', '定制'],
  ['PUE', '≤1.4', '≤1.35', '≤1.3', '定制'],
];

export const AISLE_SCENARIOS = [
  {
    title: '小型服务器机房',
    image: '/resources/enterprise-small-computer-room-1.webp',
    pain_points: ['空间受限', 'IT 人手不足', '维护复杂'],
    benefits: ['紧凑设计', '集中监控', '渐进扩容'],
    problem: '小型服务器机房空间吃紧，难以再添设备；IT 人手有限，面对复杂维护力不从心；设备分散、线缆杂乱，管理效率低。',
    solution: '紧凑设计充分利用每一寸空间；一体化监控把设备管理集中到一处，减少人工投入；支持从几台机柜起步的渐进扩容，避免一次性大额投入。',
    application: '企业 IT 机房、分支机构',
  },
  {
    title: '边缘计算站点',
    image: '/resources/Edge-Computing.webp',
    pain_points: ['地处偏远', '环境恶劣', '现场人员有限'],
    benefits: ['宽温设计', '远程监控', '节能高效'],
    problem: '偏远地区边缘站点基础设施薄弱，温湿度波动大，设备故障频发；现场技术人员少，问题响应慢。',
    solution: '宽温设计保证 -10℃ 至 40℃ 稳定运行；内置远程监控支持无人值守；优化后的制冷方案节能 30%，并支持太阳能供电。',
    application: '偏远钻井平台、矿山作业',
  },
  {
    title: '数据中心扩容',
    image: '/resources/Data-Center-Expansion.webp',
    pain_points: ['规划周期长', '部署需停机', '兼容性问题'],
    benefits: ['即插即用', '并行扩容', '自动均衡'],
    problem: '传统扩容要经历漫长的规划与施工，新设备上线往往需要停机，业务连续性面临风险。',
    solution: '工厂预制模块即插即用，部署时间缩短 70% 以上；并行扩容不影响在运业务。',
    application: '云数据中心、企业 IT 扩展',
  },
  {
    title: '多分支机构',
    image: '/resources/branch-office-1.webp',
    pain_points: ['无专职 IT', '依赖远程监控', '网点分散'],
    benefits: ['多级告警', '远程平台', '冗余设计'],
    problem: '分支机构机房没有专职 IT 人员，设备状态难以实时掌握；故障得不到及时处理，业务中断风险高。',
    solution: '全面监控对异常状态触发多级告警；远程平台承接大部分日常管理与故障排查。',
    application: '银行网点、连锁零售',
  },
  {
    title: '临时活动',
    image: '/resources/Temporary-Deployment-Needs-1.webp',
    pain_points: ['要求快速就位', '现场无基础设施', '会后需拆除'],
    benefits: ['小时级部署', '自成一体', '可重复使用'],
    problem: '临时场景要求 IT 系统快速就位，而传统设备安装复杂耗时；场地往往缺乏稳定的供电与制冷条件。',
    solution: '模块化设计让系统数小时内完成部署；一体化电源与制冷单元独立运行，不依赖现场基础设施。',
    application: '展会、应急响应',
  },
  {
    title: '研发实验室',
    image: '/resources/Laboratory-RD-Environments.webp',
    pain_points: ['频繁调整布局', '用电需求多变', '线缆管理难'],
    benefits: ['模块灵活组合', '预集成布线', '接口标准化'],
    problem: '研发实验室需要频繁调整设备与布局，固定机房难以适应；不同测试场景的用电与制冷需求各不相同。',
    solution: '模块化组件支持灵活重组与模式切换，匹配不同测试需求；预集成布线让机房环境井然有序。',
    application: '科研实验室、测试机构',
  },
];

// 案例标题/摘录取自 CMS 案例翻译 post 的 soeteck_display_title + post_excerpt（与 prefab 家族共享案例保持一致）
export const AISLE_CLIENT_CASES = [
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
];

// ---- 页面框架与区头文案（自 AisleModularPage.astro 硬编码迁入，Batch 3 i18n）----

export const AISLE_PAGE_HERO = {
  title: '通道式模块化数据中心',
  imageAlt: '通道式模块化数据中心',
};

export const AISLE_OVERVIEW_HEADING: string = '模块化机房，随需扩容';

export const AISLE_VIDEO = {
  playAriaLabel: '播放通道式模块化数据中心视频',
  imageAlt: '通道式模块化数据中心视频预览',
  fallbackTitle: '数益科技方案视频',
};

export const AISLE_ACTIONS = {
  getBrochure: '获取产品手册',
  contactUs: '联系我们',
};

export const AISLE_CLOSER_HEADING: string = '通道式模块化数据中心内部解析';

export const AISLE_TYPICAL_DESIGN = {
  title: '典型通道封闭设计',
  imageAlt: '通道式模块化数据中心典型设计',
  intro: '通道式模块化数据中心通过热/冷通道封闭优化气流组织与制冷效率：热排风与冷进风各行其道，能耗显著下降，系统整体表现随之提升。',
  keyFeaturesLabel: '核心特性：',
  features: [
    '热/冷通道封闭：冷热气流隔离，制冷效率最大化。',
    '可扩展架构：模块化设计，容量随需求增长。',
    '高密度支持：单机柜可承载 15kW+ 高功率计算设备。',
    '节能高效：合理配置下 PUE 可低至 1.3。',
    '智能监控：环境与电力实时监测，运行状态尽在掌握。',
  ],
};

export const AISLE_MODELS_SECTION = {
  title: '两种典型机型',
  intro: '数益科技通道式模块化数据中心提供多种配置，匹配不同容量需求：标准部署选冷通道封闭，高密度环境选热通道封闭——灵活应对每一类场景。',
};

export const AISLE_MODULES_SECTION = {
  title: '核心基础设施模块',
  lead: '数益科技通道式模块化数据中心方案由多个关键组件构成：机柜系统、热控制系统、关键供电、安防系统与动环系统。',
};

export const AISLE_PRODUCT_GROUPS = {
  criticalPower: '关键电源',
  thermalManagement: '热管理',
  galleryAria: '图库',
};

export const AISLE_SPECS_SECTION = {
  heading: '主打机型',
  modelsColumn: '机型',
  pdfLinkLabel: '数益科技通道式模块化数据中心.pdf',
};

export const AISLE_SCENARIOS_SECTION = {
  heading: '谁需要模块化数据中心？',
  subtitle: '应用场景：电力、制冷与基础设施模块一体化集成，支撑可靠 IT 运行——通道式模块化数据中心的独特价值所在',
  benefitsTab: '方案优势',
  painPointsTab: '关键痛点',
  detailsAria: '详情',
};

export const AISLE_CASES_HEADING: string = '通道式模块化数据中心案例';

export const AISLE_CTA = {
  eyebrow: '与工程师沟通',
  title: '联系数益科技',
  text: '告诉我们项目类型、容量需求和交付时间，以及机房条件——团队会帮您理清需求，给出可落地的配置方案。',
  checks: ['项目咨询', '技术选型支持', '区域团队跟进'],
  contactUs: '联系我们',
  downloadBrochure: '下载产品手册',
};
