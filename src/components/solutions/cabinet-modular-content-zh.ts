/**
 * Cabinet Modular Data Center solution content — 中文（zh）
 * 镜像 cabinet-modular-content.ts（EN）的全部导出，导出名完全一致。
 * 品牌：SOETECK → 数益科技/数益；页面名与术语按 Batch 3 术语包。
 */

// Hero
export const CABINET_HERO_TITLE = '机柜式模块化数据中心';
export const CABINET_HERO_SUBTITLE =
  '以数益科技模块化数据中心方案升级 IT 基础设施——随时随地，扩展自如，性能始终在线。';
export const CABINET_HERO_IMAGE_ALT = '机柜式模块化数据中心';

// Overview
export const CABINET_OVERVIEW_IMAGE = '/resources/cabinet-dc-1-1024x798.webp';
export const CABINET_OVERVIEW_TITLE = '面向 5G、IoT 与 AI 的微模块数据中心';
export const CABINET_OVERVIEW_IMAGE_ALT = '机柜式模块化数据中心总览';
export const CABINET_OVERVIEW_PARAGRAPHS = [
  '<p><strong>数益科技机柜式模块化数据中心（CMDC）</strong>将供配电、制冷与监控集成于一个密闭机柜。无需传统机房的漫长建设与高昂运维成本，即可承载 5G、IoT 与 AI 背后的网络需求，并支持从单柜到十柜的灵活扩展。</p>',
  '<p>整机达到 IP5X 防尘等级，冷热气流相互隔离，运行噪声低于 49 dB。智能监控实时跟踪温度、湿度与电力状态；高效 UPS 与变速制冷将 PUE 控制在 1.4 左右。</p>',
  '<p>CMDC 广泛应用于银行、教育、医疗、制造与政府等行业。相比传统建设方式，建设成本降低 30%，部署时间缩短 90%，占地最多节省 80%。统一管理平台支持在同一界面完成远程监控与维护，整机还具备可靠的抗震设计。</p>',
];

// Closer Look
export const CABINET_CLOSER_TITLE = '机柜式模块化数据中心内部构造';
export const CABINET_DETAIL_TITLES = [
  'CMDC 典型设计',
  '主力机型',
  '核心基础设施模块',
];
export const CABINET_HOTSPOT_IMAGE = '/resources/cabinet-modular-data-center-2.webp';

// Hotspot positions from Bricks data (desktop values)
export const CABINET_HOTSPOTS = [
  { label: '监控系统', x: '16%', y: '31%' },
  { label: '安防系统', x: '8%', y: '45%' },
  { label: '机柜系统', x: '51.5%', y: '35%' },
  { label: '配电模块', x: '71%', y: '62%' },
  { label: 'UPS', x: '64%', y: '66%' },
  { label: '电池', x: '70%', y: '69%' },
  { label: '机柜空调系统', x: '68%', y: '76%' },
  { label: 'IT 设备区', x: '68%', y: '25%' },
];

export const CABINET_HOTSPOT_IMAGE_ALT = '机柜式模块化数据中心典型设计';
export const CABINET_DESIGN_TEXT =
  '机柜式模块化数据中心将供配电、制冷管理、消防安全与综合布线集成为一体，以紧凑形态实现安全、可靠与高效。';
export const CABINET_KEY_FEATURES_LABEL = '核心特性：';

export const CABINET_KEY_FEATURES = [
  '安全可靠：符合高安全标准，具备防火、防水、强化安防等多重防护措施。',
  '快速部署：设计支持快速安装开通，短时间内即可投入运行。',
  '灵活扩展：模块化架构随需求变化轻松扩容。',
  '高密高效：空间利用充分，在压缩资源消耗的同时释放更高算力。',
  '智能管理：内置监控与管理系统，运行状态一目了然，维护高效省心。',
];

export const CABINET_FEATURED_MODELS = [
  {
    hotspotLabel: '一体式机柜空调',
    image: '/resources/cabinet-data-center-7.webp',
    accordionTitle: '顶置机柜空调版',
    hotspotPin: { x: '47%', y: '10%' },
    integrated_systems: ['3-6 kVA UPS', '配电单元', '电池备电', '监控与安防'],
    key_advantages: ['真正的即插即用（无需室外机）', '一体化设计，节省空间', '快速部署'],
  },
  {
    hotspotLabel: '分体式机柜空调',
    image: '/resources/cabinet-data-center-5.webp',
    accordionTitle: '分体式机柜空调版',
    hotspotPin: { x: '48%', y: '83%' },
    integrated_systems: ['3-10 kVA UPS', '配电单元', '电池备电', '监控与安防'],
    key_advantages: ['分体设计，减少 U 空间占用', '低噪声运行', '模块化扩展'],
  },
  {
    hotspotLabel: '列间空调',
    image: '/resources/cabinet-data-center-6.webp',
    accordionTitle: '列间空调版',
    hotspotPin: { x: '33%', y: '40%' },
    integrated_systems: ['6-20 kVA UPS', '配电单元', '电池备电', '监控与安防'],
    key_advantages: ['列间制冷节省 U 空间', '散热性能更强', '企业级部署密度'],
  },
];

export const CABINET_ACCORDION_INTEGRATED = '集成系统：';
export const CABINET_ACCORDION_ADVANTAGES = '核心优势：';
export const CABINET_MODULES_LEAD =
  '数益科技机柜式模块化数据中心方案由多个关键组件构成，包括机柜系统、热控制系统、关键电源、安防系统与动环系统。以下为您详细介绍若干核心模块。';

export const CABINET_MODELS_INTRO =
  '面向数据中心的集成化机柜系统提供三种模块化方案：顶置空调版（3-6 kVA）、机架式空调版（3-10 kVA）与列间空调版（6-20 kVA）。每套方案都集成 UPS、配电与智能监控，以高效、可扩展的基础设施适配各种规模的数据中心。';

export const CABINET_MODELS_OUTRO =
  '如同积木一般，这些机柜为快速部署而生。方案可按需定制，PUE 低至 1.4，最快 10 分钟即可完成部署。IP5X 防尘密闭机柜配备应急弹开式柜门、三合一门禁（指纹、刷卡、密码）、触屏监控界面，并支持多种北向协议。';

export const CABINET_CORE_MODULES = [
  { title: '高效制冷模块', text: '热管理与散热', icon: 'snowflake' },
  { title: '智能配电', text: '电力分配与管理', icon: 'bolt' },
  { title: '安全防护系统', text: '消防与物理安防', icon: 'shield' },
  { title: '智能监控系统', text: '运行状态监控', icon: 'chart' },
];

export const CABINET_CRITICAL_POWER_TITLE = '关键电源';
export const CABINET_CRITICAL_POWER_TEXT =
  '数益科技机柜式数据中心方案内置高效配电系统，提供多款机架式 UPS 与定制化配电模块。用户可按需选择机架式锂电池或铅酸电池。我们还提供 UPS 选型咨询，以及从设计到制造的一站式配电服务；按所需备电时长，可选配电池组、电池柜、电池架等多种电池方案。';

export const CABINET_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'SY-RT 系列 UPS（1-3kVA）',
    subtitle: '在线高频 UPS，1kVA-3kVA，PF1',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-high-frequency-online-ups-1kva-3kva-rack-tower-mounted-pf1',
    excerpt: 'SY-RT 系列 UPS（1-3kVA）提供可靠的在线双变换保护，PF1 输出功率因数，宽输入电压范围，机架/塔式紧凑设计。',
    specs: ['PF1 效率', '0ms 切换时间', '110-300VAC 输入范围', 'ECO 模式效率 96%'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF11.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF12.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF13.webp',
    ],
  },
  {
    title: 'SY-RT 系列 UPS（1-10kVA）',
    subtitle: '在线高频 UPS，1kVA-10kVA，PF0.8',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted',
    excerpt: 'SY-RT 系列 UPS（1-10kVA）提供可靠的在线 UPS 保护，PF0.8 功率因数，效率高达 93%，机架/塔式灵活安装，适配多种部署场景。',
    specs: ['PF0.8', '效率高达 93%', '机架/塔式安装', '灵活配置'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-4.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-2.webp',
    ],
  },
  {
    title: 'ST-RT 系列 UPS（10-60kVA）',
    subtitle: '在线高频 UPS，10kVA-60kVA，三相',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-st-rt-series-high-frequency-online-ups-10kva-60kva-rack-tower-mounted-3-phase-in-out',
    excerpt: 'ST-RT 系列 UPS（10-60kVA）提供真正的双变换在线保护，PF1 效率。机架/塔式可转换，三相输入/三相输出，ECO 模式效率 95.5%，节省能耗。',
    specs: ['真正双变换', '三相输入 / 三相输出', 'PF1 效率', 'ECO 模式效率 95.5%'],
    images: [
      '/resources/online-High-Frequency-UPSR.webp',
      '/resources/online-High-Frequency-UPSR-20KVA.webp',
      '/resources/online-High-Frequency-UPSR-40KVA.webp',
      '/resources/online-High-Frequency-UPSR-60KVA.webp',
    ],
  },
];

export const CABINET_THERMAL_TITLE = '热管理';
export const CABINET_THERMAL_MANAGEMENT_TEXT =
  '数益科技为数据中心与基站提供全面的制冷方案，覆盖房间级、列间级与机柜级精密空调。针对单机柜内高密度计算的散热需求，机柜级与列间级精密空调以高效和经济性为核心进行设计。';

export const CABINET_THERMAL_PRODUCTS = [
  {
    title: '顶置一体式机柜空调',
    subtitle: '制冷量 2.5kW – 5.5kW',
    slug: 'soeteck-top-mount-packaged-rack-cooling-system-2-5kw-5-5kw-capacity-suitable-for-micro-mini-modular-data-center',
    excerpt: '顶置一体式机柜空调，制冷量 2.5-5.5kW。一体化设计无需室外机，节省 U 空间——微模块数据中心的理想之选。',
    specs: ['制冷量 2.5kW 至 5.5kW', 'R410A 制冷剂', 'BMS 集成', '支持 SNMP'],
    images: [
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-4.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-5.webp',
    ],
  },
  {
    title: '一体式机柜空调',
    subtitle: '制冷量 3.5kW，8U',
    slug: 'soeteck-packaged-rack-cooling-system-3-5kw-capacity-8u-bottom-or-middle-mounted',
    excerpt: '一体式机柜空调，制冷量 3.5kW，8U 高度。紧凑的底部/中部安装设计，R410A 制冷剂，支持 BMS 集成。',
    specs: ['制冷量 3.5kW', '底部或中部安装', 'R410A 制冷剂', 'BMS 集成'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
  {
    title: '分体式机柜空调',
    subtitle: '制冷量 3.5kW-12.5kW，分体式',
    slug: 'soeteck-rack-cooling-system-3-5kw-12-5kw-capacity-split-type-cooling-unit',
    excerpt: '分体式机柜空调，制冷量范围 3.9-12.8kW。变频压缩机、EC 风机与室外压缩机单元，带来高效热管理。',
    specs: ['制冷量 3.9kW-12.8kW', '变频压缩机', 'EC 风机', '室外压缩机单元'],
    images: [
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-1.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-4.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-2.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-5.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-3.webp',
    ],
  },
];

export const CABINET_GALLERY_ARIA = '图库';

// Specs table
export const CABINET_SPECS_TITLE = '主力机型';
export const CABINET_SPEC_COLUMNS = [
  { model: 'SY-MDC-03N', image: '/resources/cabinet-data-center-8-734x1024.webp' },
  { model: 'SY-MDC-06T', image: '/resources/cabinet-data-center-9-734x1024.webp' },
  { model: 'SY-MDC-10R', image: '/resources/cabinet-data-center-8-734x1024.webp' },
  { model: '定制', image: '/resources/cabinet-data-center-9-734x1024.webp' },
];
export const CABINET_SPEC_TABLE_MODELS = '型号';
export const CABINET_SPEC_ROWS = [
  ['可用空间（U）', '18U', '31U', '27U', '定制'],
  ['冗余类型', 'N', 'N', 'N', 'N, N+1, 2N'],
  ['制冷类型', '一体式空调', '分体式空调', '分体式空调', '一体式或分体式'],
  ['空调位置', '顶置', '机架式', '机架式', '按需配置'],
  ['制冷量（kW）', '3.5', '3.5', '6.5', '定制'],
  ['UPS 容量（kVA）', '3', '6', '10', '3–20'],
  ['PDU 接口数', '标准 8 位', '标准 16 位', '标准 16 位', '标准型或智能型'],
  ['应急通风', '自动开门', '自动开门', '自动开门', '自动开门'],
];
export const CABINET_PDF_LINK_TEXT = '数益科技机柜式数据中心解决方案.pdf';

// Transport
export const CABINET_TRANSPORT = [
  {
    title: '整机运输',
    text: '整机出厂前已完成预调，并强化抗振设计。除室外空调外，其余设备均以整机方式运输。',
  },
  {
    title: '现场仅需安装精密空调',
    text: '运输成本与现场施工、调试成本大幅降低，交付周期更短，故障率更低。',
  },
];

export const CABINET_TRANSPORT_IMAGES = [
  '/resources/cabinet-dc-1-1.webp',
  '/resources/transportation-package-1.webp',
];

// Scenarios
export const CABINET_SCENARIOS_TITLE = '谁需要机柜式模块化数据中心？';
export const CABINET_SCENARIOS_SUBTITLE =
  '应用场景：电力、制冷与基础设施模块一体化集成，支撑可靠的 IT 运行——机柜式模块化数据中心的独特价值所在';
export const CABINET_SCENARIO_DETAILS_ARIA = '详情';
export const CABINET_TAB_BENEFITS = '方案优势';
export const CABINET_TAB_PAIN = '核心痛点';

export const CABINET_SCENARIOS = [
  {
    title: '银行网点',
    image: '/resources/Bank-Branches.webp',
    pain_points: ['无人值守', '安保要求高', '空间有限'],
    benefits: ['密闭防护', '远程监控', '节省空间'],
    problem: '银行网点机房通常空间局促，放不下标准数据中心设备，安防要求却格外严格。现场没有专业 IT 人员，设备一旦故障就可能中断业务，影响客户体验与企业声誉。',
    solution: '一体化机柜设计将服务器、电源与制冷集成于标准机柜空间，节省 60% 占地。指纹门禁、视频监控与远程运维平台齐备，实现 7×24 无人值守，故障响应缩短至分钟级。',
    application: '自然灾害恢复、应急救援',
  },
  {
    title: '中小企业办公室',
    image: '/resources/Small-Business-Offices.webp',
    pain_points: ['管理需简单', 'IT 人手不足', '办公环境受限'],
    benefits: ['静音运行', '即插即用', '维护量低'],
    problem: '中小企业缺少专职 IT 人员，机房维护力不从心；办公环境对噪声要求苛刻，预算有限又要求 IT 基础设施可靠且成本低。',
    solution: '一体化设计简化日常管理，非专业人员也能轻松操作。优化降噪让运行噪声低于 50 分贝，不干扰办公。高度集成使总拥有成本较传统方案降低 40% 以上。',
    application: '偏远钻井平台、矿山作业',
  },
  {
    title: '通信基站',
    image: '/resources/Telecom-Base-Stations.webp',
    pain_points: ['极端温度', '地处偏远', '户外严苛环境'],
    benefits: ['宽温运行', '抵御风雨', '远程管理'],
    problem: '户外基站面对极端温度、粉尘、暴雨等严苛环境，供电还不稳定。站点分散导致人工巡检成本高企，设备故障可能造成通信服务中断。',
    solution: 'IP55 防护等级机柜从容应对恶劣天气；双路市电加锂电池备电保障 99.999% 供电可靠性。远程集中监控平台实时掌握设备状态，现场运维需求减少 80%。',
    application: '体育赛事、节庆活动、大型会议',
  },
  {
    title: '医疗机构',
    image: '/resources/Healthcare-Facilities.webp',
    pain_points: ['业务系统关键', '环境洁净要求', '高可用'],
    benefits: ['冗余供电', '低噪声', '易清洁消毒'],
    problem: '医院机房承载诊断设备、病历系统等关键业务，一旦中断直接威胁患者安全。医疗环境要求高洁净、低噪声，而有限的空间又难以划出专用机房。',
    solution: 'N+1 冗余消除供电与制冷的单点故障，支持在线维护。全封闭结构加空气过滤满足医疗洁净标准；机身紧凑，护士站或科室角落都能灵活部署。',
    application: '野外作业、军事基地、国防设施',
  },
  {
    title: '智慧交通枢纽',
    image: '/resources/Smart-Transportation-Hubs.webp',
    pain_points: ['安防要求高', '公共空间', '24/7 运行'],
    benefits: ['防破坏', '持续运行', '空间高效'],
    problem: '机场、车站与交通枢纽要求 IT 24/7 连续运转，故障即运营混乱。公共环境存在人为破坏风险，可用机房空间零散且有限。',
    solution: '工业级冗余保障 99.99% 以上可用性。防撬柜体与门禁强化物理安防。小型化机柜贴近功能区部署，并通过网络协同实现集中管理。',
    application: '物联网网络、智慧城市、工业边缘',
  },
  {
    title: '应急指挥中心',
    image: '/resources/Emergency-Command-Centers.webp',
    pain_points: ['任务关键', '临时部署', '时间紧迫'],
    benefits: ['快速开通', '便于转场', '备电支持'],
    problem: '突发事件要求 IT 系统快速临时架设，传统设备难以胜任；指挥位置可能转移，系统需具备机动性，而现场往往缺乏稳定电源。',
    solution: '一体化机柜开箱即用，接电后 15 分钟内完成部署。轮式设计便于短距离移动，内置电池提供 4-8 小时应急供电，保障持续运转。',
    application: '云数据中心、企业 IT 扩容',
  },
];

// Client cases section
export const CABINET_CASES_TITLE = '机柜式模块化数据中心客户案例';

// Bottom contact CTA
export const CABINET_CONTACT_EYEBROW = '与工程师沟通';
export const CABINET_CONTACT_TITLE = '联系数益科技';
export const CABINET_CONTACT_TEXT =
  '说说您的机房条件，以及项目类型、容量需求、时间安排——我们会帮您锁定合适的配置，给出可落地的方案路径。';
export const CABINET_CONTACT_CHECKS = [
  '项目咨询',
  '技术配置支持',
  '区域跟进服务',
];
export const CABINET_CONTACT_BUTTON = '联系我们';
export const CABINET_CONTACT_BROCHURE = '下载手册';

// Overview CTA row
export const CABINET_CTA_BROCHURE = '获取方案手册';
export const CABINET_CTA_CONTACT = '联系我们';

// Reuse client cases from prefab-content.ts - import via PREFAB_CLIENT_CASES