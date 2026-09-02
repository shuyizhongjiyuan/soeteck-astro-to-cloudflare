/**
 * AI 数据中心方案页 — 中文内容（translate-code-embedded 模式，Batch 3）。
 * 结构与 ai-data-center-content.ts（EN）完全一致，导出名镜像 EN。
 * 品牌词：SOETECK → 数益科技（短位用「数益」）；产品名/型号/GPU 型号保留英文。
 */
import type { AIDCConfig, AIDCClient, AIDCRelated, AIDCFaq } from './ai-data-center-content';

// 纯配置导出（未译，与 EN 原样复制）：手册发布后须与 EN 同步更新
export const BROCHURE_URL: string | null = null;

export const AIDC_HERO = {
  eyebrow: 'AI 数据中心基础设施',
  title: '专为 GPU 时代打造',
  titlePrefix: 'AI 数据中心基础设施',
  subtitle:
    '从边缘推理到超大规模 GPU 集群——预制化、液冷交付、全球发运，120 天投入运行。',
  bannerImage: '/resources/ai-data-center/ai-data-center-hero.webp',
  ctaPrimary: { label: '获取定制报价', href: '/contact-us/' },
  ctaSecondary: { label: '下载技术手册', href: BROCHURE_URL },
};

export const AIDC_PROBLEM = {
  eyebrow: '行业挑战',
  title: '别让基础设施拖住 AI 的脚步',
  intro:
    'GPU 革新的速度早已超出传统数据中心的设计边界。H100 与 B200 的功率密度需求突破了常规冷却极限，而建设周期追不上 AI 的创新节奏。',
  points: [
    { icon: 'calendar', stat: '2–3', unit: '年才能建成', text: '传统数据中心从规划到投运需要 24–36 个月。等设施建成，您的 GPU 架构已经落后一代。' },
    { icon: 'temp', stat: '25', unit: 'kW——风冷天花板', text: '单机架超过 25kW，强制风冷就带不走足够的热量。NVIDIA H100 集群普遍超过 40kW，B200 更是突破 100kW。风冷已经不是选项。' },
    { icon: 'cost', stat: '$50M+', unit: '首台 GPU 上架前的投入', text: '传统模式要求巨额前期投入：拿地、报批、土建、机电配套，全部完成才能上架第一台服务器。ROI 一再推迟，资金被占用多年。' },
  ],
};

export const AIDC_PLATFORM = {
  eyebrow: '一体化平台',
  title: '数益科技 AI 基础设施平台',
  intro:
    '热管理、供配电、结构与管控，一套平台完整交付——围绕您的 GPU 负载量身打造。',
  pillars: [
    { icon: 'container', title: '预制化集装箱交付', text: '每套数益科技 AI 数据中心都在标准 ISO 海运集装箱内完成工厂制造。95% 预装配，出厂前完成测试，发往全球。接上电源、网络与水源，算力即刻启动。' },
    { icon: 'cool', title: '一体化液冷', text: '冷板式液冷在热源处直接散热。集成冷量分配单元（CDU）单模块可承载最高 1.5MW 热负荷。PUE 低至 1.08。' },
    { icon: 'power', title: '高密度供配电', text: '从中压开关柜到智能机架 PDU——为单机架 40–120kW 而设计。模块化锂电 UPS、800A 母线槽、逐插座计量。' },
    { icon: 'gpu', title: 'GPU 中立架构', text: '不受厂商绑定。全面支持 NVIDIA H100/H200/B200、AMD MI300X、华为昇腾 910B/C 与 Intel Gaudi。按负载与预算自由选择 GPU。' },
  ],
};

export const AIDC_CONFIGS: AIDCConfig[] = [
  {
    id: 'edge',
    name: 'AI-Edge',
    tagline: '边缘推理',
    inquireLabel: '咨询 AI-Edge',
    bestFor: '边缘 AI 推理、智能制造、电信 5G 边缘、零售 AI',
    specs: [
      { label: '集装箱', value: '20ft ISO 标准箱' },
      { label: '总功率', value: '80–200 kW' },
      { label: 'GPU 数量', value: '8–16 张 GPU（L40S、A10、A100）' },
      { label: '冷却方式', value: '标准风冷，可选液冷' },
      { label: '机架密度', value: '单机架最高 30 kW' },
      { label: 'PUE', value: '1.15–1.25' },
      { label: '部署周期', value: '60–90 天' },
    ],
  },
  {
    id: 'core',
    name: 'AI-Core',
    tagline: '训练与微调',
    inquireLabel: '咨询 AI-Core',
    bestFor: '企业级 LLM 训练、AI 模型微调、高校科研集群',
    specs: [
      { label: '集装箱', value: '40ft ISO 高柜' },
      { label: '总功率', value: '300–600 kW' },
      { label: 'GPU 数量', value: '32–64 张 GPU（H100、H200、B200、MI300X）' },
      { label: '冷却方式', value: '冷板式液冷（集成 CDU）' },
      { label: '机架密度', value: '单机架最高 100 kW' },
      { label: 'PUE', value: '1.08–1.15' },
      { label: '部署周期', value: '90–120 天' },
    ],
  },
  {
    id: 'flex',
    name: 'AI-Flex',
    tagline: '超大规模集群',
    inquireLabel: '咨询 AI-Flex',
    bestFor: '超大规模 AI 训练、AI 云服务商、国家级智算中心',
    specs: [
      { label: '配置', value: '4–20+ 个互联 40ft 模块' },
      { label: '总功率', value: '2–20 MW' },
      { label: 'GPU 数量', value: '256–2,048+ 张 GPU' },
      { label: '冷却方式', value: '集中式液冷 + 分布式 CDU，可选浸没式模块' },
      { label: '机架密度', value: '单机架最高 120 kW' },
      { label: 'PUE', value: '< 1.10（浸没式 1.03）' },
      { label: '部署周期', value: '120–180 天' },
    ],
  },
];

// 表头 = [规格列, AI-Edge, AI-Core, AI-Flex]
export const AIDC_CONFIG_TABLE = {
  title: '一套平台，三种配置，无限扩展',
  subtitle: '同一套 AI 基础设施平台，从边缘推理一路扩展到超大规模集群。',
  headers: ['规格', 'AI-Edge', 'AI-Core', 'AI-Flex'],
  rows: [
    { label: '集装箱', values: ['20ft ISO 标准箱', '40ft ISO 高柜', '4–20+ 个互联 40ft 模块'] },
    { label: '功率', values: ['80–200 kW', '300–600 kW', '2–20 MW'] },
    { label: 'GPU 数量', values: ['8–16 张 GPU', '32–64 张 GPU', '256–2,048+ 张 GPU'] },
    { label: '冷却方式', values: ['标准风冷，可选液冷', '冷板式液冷，集成 CDU', '集中式液冷 + 可选浸没式'] },
    { label: '机架密度', values: ['单机架最高 30 kW', '单机架最高 100 kW', '单机架最高 120 kW'] },
    { label: 'PUE', values: ['1.15–1.25', '1.08–1.15', '< 1.10（浸没式 1.03）'] },
    { label: '部署周期', values: ['60–90 天', '90–120 天', '120–180 天'] },
    { label: '适用场景', values: ['边缘推理、智能制造、5G 边缘', 'LLM 训练、模型微调、科研集群', '超大规模 AI、AI 云、国家级算力'] },
  ],
};

export const AIDC_COOLING = {
  eyebrow: '制冷',
  title: '让制冷跟上 GPU 的速度',
  intro:
    '物理原理很简单：冷却液单位体积的散热能力是空气的 3,000 倍以上。每一家超大规模厂商都在转向液冷，问题只剩多快。',
  tabs: [
    {
      id: 'cold-plate',
      label: '冷板式液冷',
      image: '/resources/ai-data-center/ai-cold-plate-gpu-diagram.webp',
      text: '冷板式液冷是现代 AI 基础设施的主力方案。冷板直接贴合 GPU 与 CPU 散热顶盖，绝缘冷却液循环流经微通道翅片，把热量从源头带走。',
      bullets: [
        '冷板带走 GPU 85–90% 的热量，其余 10–15% 由风扇处理',
        '标准 42U 机柜支持最高 120 kW 机架密度',
        '采用 PG25 丙二醇冷却液——不导电、无毒、防冻',
        '经过验证的技术：已部署于 Top500 超算与超大规模 AI 集群',
        '支持改造：现有风冷机柜几乎不停机即可升级',
        '列间 CDU：300 kW/台 · 房间级 CDU：800–1,500 kW/台',
        '冗余泵配置（N+1 或 2N），支持 SNMP/Modbus 远程监控',
      ],
    },
    {
      id: 'immersion',
      label: '浸没式液冷',
      image: '/resources/ai-data-center/ai-cooling-methods-comparison.webp',
      text: '面向最高密度部署，单相浸没式液冷将整台 GPU 服务器浸入绝缘液体，吸热效率是空气的 1,200 倍。',
      bullets: [
        'PUE 低至 1.03——现有最高效的冷却方式',
        '彻底取消服务器风扇——服务器功耗降低 10–15%',
        '所有部件均匀冷却——没有热点',
        '静音运行——没有风扇噪音',
        '绝缘液体无腐蚀性，10 年以上无需更换',
        'AI-Flex 平台可选配专用浸没式模块',
      ],
    },
    {
      id: 'air-fails',
      label: '风冷的极限',
      image: '/resources/ai-data-center/ai-cooling-methods-comparison.webp',
      text: '空气的体积热容约为 1.2 kJ/m³·K，冷却液为 3,500–4,200 kJ/m³·K——单位体积散热能力相差 3,000 倍以上。',
      bullets: [
        '风冷：即使配合热通道封闭，实用上限也只有单机架 20–25 kW',
        '冷板式液冷：单机架 60–120 kW 从容运行',
        '浸没式液冷：单机架 100 kW 以上，无需降额',
        'GPU 功耗走势：H100（700W）→ B200（1,000W）→ Rubin（1,500W+），选择不言自明',
      ],
    },
  ],
};

export const AIDC_POWER = {
  eyebrow: '供电',
  title: '为 GPU 密度打造的供电体系',
  intro:
    'GPU 集群缺的不只是电力，更是电力的送达方式。我们的供配电链路从架构之初就为高密度、任务关键的 AI 负载而设计。',
  image: '/resources/ai-data-center/ai-power-flow-diagram.webp',
  modules: [
    { icon: 'ups', title: '模块化 UPS', text: '锂电池技术，N+1 或 2N 冗余，eco 模式效率 98%。单模块容量 100kW 至 2MW 可扩展。电池模块支持热插拔，集成电池管理系统（BMS）。' },
    { icon: 'busway', title: '插接式母线槽', text: '160A–800A 高空母线槽，每 600mm 一个插接箱。免去地板下布线的复杂性。插接箱热插拔，新增或迁移 GPU 机架不停机。' },
    { icon: 'pdu', title: '智能机架 PDU', text: '逐插座电力计量（±1% 精度）、远程插座开关、集成环境传感器（温湿度、门磁）。SNMP v3 + REST API，可与 DCIM 和 BMS 平台对接。' },
  ],
};

export const AIDC_TIMELINE = {
  eyebrow: '算力交付速度',
  title: '从下单到上线——只需 120 天',
  intro: '从下单到 GPU 投入运行只需 90–120 天，而传统建设需要 24–36 个月。',
  steps: [
    { month: '第 1 个月', title: '设计冻结', text: '需求确认，GPU 选型敲定，供电设计签字确认。' },
    { month: '第 2 个月', title: '工厂制造与 FAT', text: '集装箱制造完成，冷却 CDU 集成到位，整机在工厂完成测试。' },
    { month: '第 3 个月', title: '海运发运', text: '港口到站点物流全程管理，清关由我们的全球货运伙伴处理。' },
    { month: '第 4 个月', title: '调试上线', text: '接入电源、网络与水源，验收测试，运维培训，算力启动。' },
  ],
  compareTraditional: '24–36 个月',
  compareSoeteck: '90–120 天',
};

export const AIDC_GLOBAL = {
  eyebrow: '全球交付',
  title: '中国制造，全球部署',
  text: '数益科技 AI 数据中心为全球物流而设计。整机置于标准 ISO 海运集装箱内，依托现有货运体系完成运输——集装箱船、平板卡车、货机皆可承运。每台设备出厂前均通过完整工厂验收测试（FAT）。抵达站点时，等待它的是调试上线，而不是现场组装。',
  image: '/resources/ai-data-center/ai-global-deployment-map.webp',
  facts: [
    { value: 'ISO 668', label: '标准集装箱规格——全球航运体系通用' },
    { value: '12.2×2.44×2.9m', label: '标准 40ft 单元尺寸（长×宽×高）' },
    { value: '18–25 t', label: '满载重量——标准吊装能力范围内' },
    { value: '30–45', label: '海运天数：亚洲 → 中东 / 欧洲 / 非洲' },
  ],
  deploymentFlags: ['沙特阿拉伯', '卡塔尔', '埃及', '尼泊尔', '瓦努阿图', '法国'],
};

export const AIDC_CLIENTS: AIDCClient[] = [
  {
    name: 'GRD 卡塔尔',
    description: '定制集装箱式数据中心，在中东气候环境下实现 24/7 稳定运行。',
    path: '/news-and-insights/client-case-studies/grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center/',
  },
  {
    name: '埃及政府',
    description: '工厂审核与大型数字基础设施项目，助力政府数据中心现代化。',
    path: '/news-and-insights/news-releases/egyptian-government-project-delegation-visits-soeteck-for-factory-audit/',
  },
  {
    name: '沙特电信',
    description: '移动 OLT 集装箱数据中心方案，支撑 5G 基础设施快速部署。',
    path: '/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/',
  },
  {
    name: 'WebSat Media',
    description: '数据中心冷却基础设施优化，效率与可靠性全面提升。',
    path: '/news-and-insights/client-case-studies/websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions/',
  },
];

// 平台页向生态深链：关联产品线（§二 术语）
export const AIDC_RELATED: AIDCRelated[] = [
  { icon: 'cool', title: '数据中心精密制冷', description: '覆盖关键制冷全产品线：全系列精密空调、风机墙与房间级/列间/机柜冷却。', path: '/solutions/data-center-cooling-solutions/' },
  { icon: 'container', title: '预制化集装箱数据中心', description: '工厂制造、ISO 集装箱发运的模块化数据中心，到场即可调试。', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
  { icon: 'grid', title: '模块化平台家族', description: '通道式、机柜式与机排式模块化数据中心，本地容量灵活扩展。', path: '/solutions/' },
  { icon: 'gpu', title: 'AICoolit 液冷系列', description: '面向高密度 GPU 集群打造的液冷集装箱与 CDU。', path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
];

export const AIDC_FAQ: AIDCFaq[] = [
  {
    q: 'AI 集装箱数据中心支持多大功率密度？',
    a: [
      '冷板式液冷集装箱单机架最高支持 120 kW。浸没式模块单机架 100 kW 以上且无需降额。风冷配置面向较轻负载，最高支持 25 kW/机架。',
    ],
  },
  {
    q: '数益科技 AI 数据中心兼容哪些 GPU？',
    a: [
      '基础设施在设计上 GPU 中立。支持 NVIDIA H100、H200、B200（NVL72）、AMD MI300X、华为昇腾 910B/C 与 Intel Gaudi 3。电源架与冷板安装套件按您选定的 GPU 平台定制。',
    ],
  },
  {
    q: '多久能交付一座全面投运的 AI 数据中心？',
    a: [
      '标准配置（5 MW 以内）从下单到调试验收需 90–120 天。定制配置与超大规模 AI-Flex 部署可能需要 120–180 天。传统数据中心建设则需要 24–36 个月。',
    ],
  },
  {
    q: '针对液冷泄漏有哪些安全措施？',
    a: [
      '我们采用纵深防御：(1) 负压冷却液回路（任何泄漏都会被吸回系统）；(2) 沿所有管路敷设绳式漏液检测线缆；(3) 所有连接点下方设置不锈钢接液盘；(4) 电导率传感器 24/7 监测并联动自动关断阀；(5) 不导电的 PG25 丙二醇冷却液，接触电子元件也不会造成损伤。',
    ],
  },
  {
    q: 'AI 数据中心的典型 PUE 是多少？',
    a: [
      '冷板式液冷：PUE 1.08–1.15，视气候而定。浸没式液冷：PUE 低至 1.03。以上数据均假设在气候允许时利用干冷器实现自然冷却。',
    ],
  },
  {
    q: 'AI 数据中心能在极端气候下运行吗？',
    a: [
      '可以。集装箱适应 -40°C 至 +55°C（+131°F）的环境温度。我们已在中东沙漠环境（沙特阿拉伯、卡塔尔、埃及）和热带海岛条件（瓦努阿图）成功部署。每个项目都包含针对当地气候的冷却配置。',
    ],
  },
  {
    q: '是否提供现场安装与支持？',
    a: [
      '提供。我们的全球调试团队会到现场进行安装督导、系统启动、验收测试与运维培训。还可选择年度维护合同，包含远程监控（24/7 NOC）、定期预防性维护巡检与应急响应 SLA。',
    ],
  },
];

// 模板级 UI 文案（原先写死在 AiDataCenterPage.astro 中）
export const AIDC_UI = {
  heroImageAlt: 'AI 数据中心基础设施',
  powerImageAlt: 'AI 数据中心供配电链路',
  globalImageAlt: '数益科技全球 AI 数据中心部署地图',
  coolingTablistAria: '制冷方案',
  bestForLabel: '适用场景：',
  compareTraditionalLabel: '传统数据中心建设',
  compareSoeteckLabel: '数益科技 AI 数据中心部署',
  clientsTitle: '全球企业、政府与运营商的共同选择',
  readCaseStudy: '阅读案例 →',
  relatedTitle: '数益科技 AI 数据中心生态',
  relatedSubtitle: '了解数益科技如何交付完整的 AI 数据中心基础设施——制冷、供电、结构与管控。',
  learnMore: '了解更多 →',
  faqTitle: 'AI 数据中心——常见问题',
};

export const AIDC_CTA = {
  eyebrow: '与工程师对话',
  title: '下一代 AI 数据中心，从一次对话开始',
  text: '告诉我们您的 AI 负载，基础设施设计交给我们。120 天交付，全球任何角落。',
  actions: [
    { label: '获取定制报价', href: '/contact-us/', variant: 'primary' },
    { label: '预约 30 分钟咨询', href: '/contact-us/', variant: 'outline' },
  ],
};
