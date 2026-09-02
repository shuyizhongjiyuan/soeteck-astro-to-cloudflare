/**
 * Data Center Cooling Solutions — 中文内容（code-embedded 翻译，Batch 3）。
 * 结构与 data-center-cooling-content.ts（EN）完全一致，导出名相同；
 * 图片路径 / 链接 / 型号 / 数值单位原样保留。
 * 术语依据 tmp/translation-batch3/TERMINOLOGY-AND-RULES.md（§一页面名 / §二产品线译名）；
 * 客户案例标题与摘要沿用生产 CMS 确认译文（prefab 共享文件 2026-09-02 取自生产）。
 */
import type {
  DccProductCard,
  DccApplication,
  DccService,
  DccCase,
} from './data-center-cooling-content';

export type {
  DccProductCard,
  DccApplication,
  DccService,
  DccCase,
} from './data-center-cooling-content';

export const DCC_HERO = {
  eyebrow: '数据中心精密空调',
  title: '数据中心制冷解决方案',
  subtitle: '数益科技为数据中心、通信局站、实验室及各类关键设施提供高性价比的热管理解决方案。',
  bannerImage: '/resources/soeteck-data-center-banner-1.webp',
  bannerAlt: '数据中心精密冷却',
};

export const DCC_SECTION_INTRO = {
  title: '精密空调',
  subtitle: '全系列精密冷却产品，覆盖关键业务环境的各类冷却需求。',
};

export const DCC_SECTION_HEADINGS = {
  applications: '应用场景',
  services: '服务体系',
  cases: '精选客户案例',
  moments: '与客户的精彩瞬间',
};

export const DCC_PAC_PRODUCTS: DccProductCard[] = [
  {
    name: '房间级精密空调',
    capacity: '7.5 – 265.8 kW',
    description:
      'DataCool 系列精密空调面向大型机房与数据中心的制冷量需求（7.5kW-265.8kW）而设计，提供风冷、水冷、冷冻水等多种冷却方式。EER ≥ 3.0 带来更优运行成本，并支持单/双系统灵活扩展——既降低初期投入，也为日后扩容预留空间。',
    image: '/resources/Soeteck-chilled-water-room-cooling-system-38.2-265.8kW-4.webp',
    link: '/products/thermal-management/precision-air-conditioning/room-cooling/',
  },
  {
    name: '列间精密空调',
    capacity: '7.5 – 93.2 kW',
    description:
      'DataRow 系列精密空调专为机排式或通道式模块化数据中心设计，安装于服务器机柜之间。配备先进智能控制，制冷量可在 20-100% 范围灵活调节，能效较标准风冷机组提升 33.3%-50%。',
    image: '/resources/SOETECK-Row-Mounted-Pumped-Refrigerant-Cooling-System-1.webp',
    link: '/products/thermal-management/precision-air-conditioning/in-row-cooling/',
  },
  {
    name: '机柜精密空调',
    capacity: '2.5 – 12.5 kW',
    description:
      'DataRack 系列精密空调为机柜式模块化数据中心量身打造，可直接集成于标准服务器机架，制冷量 3.5kW-12.5kW，高度仅 6U-12U。采用 R410A 环保制冷剂与精密控制器，在削减不必要能耗的同时，保障高密度 IT 设备的冷却效率。',
    image: '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
    link: '/products/thermal-management/precision-air-conditioning/rack-cooling/',
  },
  {
    name: '壁挂式精密空调',
    capacity: '12.5 – 21.2 kW',
    description:
      '数益壁挂式精密空调为室内外一体化应用提供高效冷却。变频制冷剂泵与智能控制器等先进部件确保精准运行，是预制化集装箱数据中心的理想选择。支持双模式运行，优化能效，助力降低 PUE。',
    image: '/resources/SOETECK-Wall-Mounted-Hybrid-Refrigerant-Green-Cooling-3.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-wall-mounted-pumped-refrigerant-cooling-system-indoor-and-outdoor-packaged/',
  },
  {
    name: '通信机柜精密空调',
    capacity: '12.5 – 21.2 kW',
    description:
      '数益通信机柜精密空调为封闭式一体化应用提供高效冷却。变频制冷剂泵与智能控制器等先进部件确保精准运行，是预制化集装箱数据中心的理想选择。支持双模式运行，优化能效，助力降低 PUE。',
    image: '/resources/DC-Powered-TEC-Air-Conditioner-3.webp',
    link: '/products/thermal-management/telecom-enclosure-air-conditioner/',
  },
  {
    name: '室外机',
    capacity: '12.5 – 21.2 kW',
    description:
      '数益室外机为精密冷却系统提供高效散热。变频制冷剂泵与智能控制器等先进部件确保精准运行，是预制化集装箱数据中心的理想选择。支持双模式运行，优化能效，助力降低 PUE。',
    image: '/resources/SOETECK-Outdoor-Air-Cooled-Condenser-UprightHorizontal-Installation-8.webp',
    link: '/products/thermal-management/heat-rejection/',
  },
];

export const DCC_SECTION_FANWALL = {
  title: '风墙精密冷却系统',
  subtitle: '面向中大型冷却需求，风墙系统以更可靠、更节能的精密方案，让新老数据中心的冷却能力随负载灵活伸缩。',
};

export const DCC_FANWALL_PRODUCTS: DccProductCard[] = [
  {
    name: '模块化风墙',
    capacity: '150.1 – 300.1 kW',
    description:
      '数益 FO.GBE 系列风墙机组是节能型精密冷却系统，适用于数据中心、通信枢纽、计算中心与控制中心等机房环境，兼具低噪声、模块化预制、风机冗余设计等多重优势。',
    image: '/resources/SOETECK-FO.GBE-Modular-Fanwall-Cooling-2.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-fo-gbe-modular-fanwall-cooling-150-1kw-300-1kw-capacity/',
  },
  {
    name: '一体化风墙',
    capacity: '30.2 – 60.1 kW',
    description:
      '数益 FO.WL 系列风墙机组是中大型精密环境控制系统，结构一体化、制冷量可扩展、占地小。服务器热风直接进入机组冷却，适用于设备机房或数据中心，保障精密设备安全可靠运行。',
    image: '/resources/SOETECK-FO.WL-Fan-Wall-4.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-fo-wl-fan-wall-cooling-units/',
  },
];

export const DCC_APPLICATIONS_INTRO =
  '我们的精密空调方案以 CRAC、机房冷却、数据中心冷却机组等多种形态，服务于数据中心、通信、实验室与博物馆的各类 HVAC 场景。';

export const DCC_APPLICATIONS: DccApplication[] = [
  {
    title: '数据中心',
    description: '服务器持续散热要求大风量精密冷却，±1 °C 与 ±5 %RH 的恒温恒湿控制消除热点，保障 24×7 业务在线。',
    image: '/resources/soeteck-data-center-cooling-1.webp',
  },
  {
    title: '通信设施',
    description: '交换中心与 5G 设备依赖精密空调维持严格温控与粉尘过滤，保障网络服务不中断。',
    image: '/resources/soeteck-telecom-facilities-2.webp',
  },
  {
    title: '实验室',
    description: '分析实验室需要稳定的 ±1 °C 温度、受控湿度与洁净度——精密系统避免热漂移，保护试剂，确保实验可复现。',
    image: '/resources/Soeteck-Laboratories-2.webp',
  },
  {
    title: '博物馆与档案馆',
    description: '精密冷却维持 20 °C 与 50 %RH 的温和环境，配合轻柔过滤，抑制霉菌、酸化与变形，让善本与艺术品留存数十年。',
    image: '/resources/Soeteck-Museums-Archives-Cooling-2.webp',
  },
];

export const DCC_SERVICES_INTRO =
  '专属团队提供一系列定制服务，确保您在今天与未来都能获得高品质的精密空调产品。';

export const DCC_SERVICES: DccService[] = [
  {
    title: 'OEM/ODM 定制',
    description: '提供 OEM/ODM 服务，按您的品牌与设计规格定制产品。',
    icon: 'factory',
  },
  {
    title: '选型咨询',
    description: '专业销售团队对接您的实际需求，联动产品支持专家，给出量身定制的采购建议。',
    icon: 'chat',
  },
  {
    title: '方案设计',
    description: '在产品设计阶段，专家与您深度协作，打造满足特定需求的创新高效冷却方案。',
    icon: 'pen',
  },
  {
    title: '生产制造',
    description: '先进的制造工艺确保冷却系统按行业标准与您的规格高质量交付。',
    icon: 'gear',
  },
  {
    title: '质量保障',
    description: '贯穿生产全程的严格质检保障产品可靠性，并可根据需求提供质量报告。',
    icon: 'check',
  },
  {
    title: '售后支持',
    description: '经验丰富的支持团队提供无忧售后服务，专业技能培训让系统始终稳定运行。',
    icon: 'headset',
  },
];

export const DCC_WHY = {
  title: '为什么选择数益科技',
  manufacturing: {
    title: '先进制造基地',
    description:
      '数益科技坚持以产品创新与研发为先，先进设施涵盖电磁兼容、焓差分析、环境可靠性、噪声与振动、功率测量及 IP 防护等实验室。依托这些一流实验条件，我们对产品进行严格测试，确保其达到最高的性能与可靠性标准。',
    statsAria: '数益科技数据一览',
    factoryAria: '数益科技制造基地',
    icon: 'factory',
    stats: [
      { value: 11, suffix: '+', label: '年行业经验' },
      { value: 500, suffix: '+', label: '营收（百万）' },
      { value: 120, suffix: '+', label: '国内员工' },
      { value: 80, suffix: '+', label: '覆盖国家' },
    ],
    factoryImages: [
      '/resources/soeteck-factory-12-1.jpg',
      '/resources/soeteck-factory-3-1.jpg',
      '/resources/soeteck-factory-2-1.jpg',
      '/resources/soeteck-factory-7-1.jpg',
      '/resources/soeteck-factory-6-1.jpg',
      '/resources/soeteck-factory-9-1.jpg',
      '/resources/soeteck-factory-8-1.jpg',
      '/resources/soeteck-factory-10-1.jpg',
      '/resources/soeteck-factory-11-1.jpg',
      '/resources/soeteck-factory-4-1.jpg',
      '/resources/soeteck-factory-5-1.jpg',
      '/resources/soeteck-factory-1-1.jpg',
    ],
  },
  certificates: {
    title: '资质证书',
    description:
      '我们坚持严格的质量与环境管理，并通过体系认证加以印证：ISO9001 质量管理体系、ISO14001 环境管理体系与 ISO45001 职业健康安全管理体系。此外，产品符合国际标准并通过 CE 等认证，践行我们对安全、可持续与卓越的承诺。',
    certsAria: '资质证书',
    icon: 'award',
    items: [
      { image: '/resources/Soeteck-CE-Certificates-for-PAC-1.webp', label: '数益 PAC CE 认证' },
      { image: '/resources/Soeteck-CE-Certificates-for-UPS.webp', label: '数益 UPS CE 认证' },
      { image: '/resources/Soeteck-ISO9001-2.webp', label: '数益 ISO9001 认证' },
      { image: '/resources/Soeteck-ISO14001-12.webp', label: '数益 ISO14001 认证' },
      { image: '/resources/Soeteck-ISO45001-2.webp', label: '数益 ISO45001 认证' },
      { image: '/resources/Soeteck-UPS-IEC.webp', label: '数益 UPS IEC 认证' },
    ],
  },
};

export const DCC_CASES_INTRO =
  '通过真实的客户案例，了解我们的精密空调方案如何落地见效。这些案例展现了我们应对复杂挑战的专业能力，以及为各行业客户带来的可量化成效。';

export const DCC_CLIENT_CASES: DccCase[] = [
  {
    imgSrc: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp',
    title: 'Sinus-Dochi LLC 借助数益科技智能精密冷却系统降低 PUE 并提升冷却效率',
    slug: 'sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system',
    desc: 'Sinus-Dochi LLC 是蒙古一家知名的 HVAC 服务公司，专注于制冷领域，拥有一支专家工程师团队。该公司希望提高其数据中心设施的能效和冷却性能。为此，Sinus-Dochi 与数益科技合作，设计并实施了一套量身定制的先进精密冷却系统。',
  },
  {
    imgSrc: '/resources/prefab-modular-data-center-of-Saudi-Telecom-6.webp',
    title: '驱动创新：数益科技为沙特电信提供先进移动式 OLT 集装箱数据中心解决方案',
    slug: 'driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions',
    desc: '沙特电信的 DR 项目旨在设计和实施完全可定制的移动式 OLT（光线路终端）集装箱数据中心，提升中东地区电信运营商的运营能力。这一创新解决方案支持先进业务应用的快速部署，同时确保高效率与高可靠性。',
  },
  {
    imgSrc: '/resources/100KW-Cooling-System-Solution-In-Malaysia-0.webp',
    title: 'Open DC 马来西亚为数据中心改造部署模块化 100KW 风冷精密冷却系统',
    slug: 'open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit',
    desc: 'Open DC Malaysia 是一家知名的云服务网络技术公司，专门从事服务器存储服务。该公司对其现有数据中心进行了改造，升级冷却基础设施，以满足新的运营需求。',
  },
  {
    imgSrc: '/resources/a-project-of-Telecom-Fiji-1.webp',
    title: '斐济电信采用数益科技防腐蚀精密空调方案提升网络稳定性',
    slug: 'telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design',
    desc: '斐济电信有限公司（Telecom Fiji Limited）是斐济领先的固定通信和网络服务提供商，由于沿海电信站点冷却系统不足，面临着严峻的运营风险。许多设施依赖容量不足的家用空调设备，难以承受全天候运行的电信设备产生的热量，且在斐济沿海环境中易受腐蚀。',
  },
];

export const DCC_MOMENTS_INTRO =
  '在数益科技，我们珍视每一次相遇。从深入交流的来访，到亲手体验的产品，这里的每一个故事都在塑造我们共同的未来。想加入其中？欢迎预约到访，一起创造属于您的时刻！';

export const DCC_MOMENTS_IMAGES: { src: string; alt: string }[] = [
  { src: '/resources/Soeteck-and-Fiber-Ocean-3.webp', alt: '数益科技与 Fiber Ocean 团队交流' },
  { src: '/resources/Soeteck-and-Russian-clients-16.webp', alt: '数益科技与俄罗斯客户合影' },
  { src: '/resources/Soeteck-and-Russian-clients-15.webp', alt: '数益科技与俄罗斯客户合影' },
  { src: '/resources/Soeteck-and-Russian-clients-14.webp', alt: '数益科技与俄罗斯客户合影' },
  { src: '/resources/Soeteck-and-Russian-clients-13.webp', alt: '数益科技与俄罗斯客户合影' },
  { src: '/resources/Soeteck-and-Russian-clients-12.webp', alt: '数益科技与俄罗斯客户合影' },
  { src: '/resources/Soeteck-and-Russian-clients-11.webp', alt: '数益科技与俄罗斯客户合影' },
  { src: '/resources/Soeteck-and-Russian-clients-10.webp', alt: '数益科技与俄罗斯客户合影' },
];

export const DCC_CTA = {
  eyebrow: '与工程师直接对话',
  title: '联系数益科技',
  text: '与我们取得联系只需几步。现在填写下方表单，即可获得数益科技的全力支持，为未来的成功奠定基础。',
};
