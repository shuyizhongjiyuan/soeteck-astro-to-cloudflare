import type { HomeContent } from './home-content';

export const HOME_ZH: HomeContent = {
  hero: {
    slides: [
      {
        image: '/hero/hero-slide-1.png',
        eyebrow: '交钥匙解决方案',
        title: '工厂预制.',
        titleAccent: '现场即用.',
        subtitle: '完整的预制化集装箱数据中心——电力、冷却、消防和监控——全部集成，全部工厂测试，数周而非数月交付为单一交钥匙单元。',
        ctaPrimary: '探索解决方案',
        ctaPrimaryLink: '/zh/solutions/',
        ctaSecondary: '咨询专家',
        ctaSecondaryLink: '/zh/contact-us/',
      },
      {
        image: '/hero/hero-slide-2.png',
        eyebrow: 'AI就绪冷却',
        title: '液冷技术赋能',
        titleAccent: 'AI工作负载',
        subtitle: 'Direct-to-chip液冷消除100kW+机架密度的热节流。专为GPU训练集群打造。',
        ctaPrimary: '了解AICoolit',
        ctaPrimaryLink: '/zh/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
        ctaSecondary: '获取报价',
        ctaSecondaryLink: '/zh/contact-us/',
      },
      {
        image: '/hero/hero-slide-3.png',
        eyebrow: '全球交付',
        title: '工厂测试.',
        titleAccent: '即插即用.',
        subtitle: '从工厂到现场，数周交付——而非数月。覆盖50+国家，每种气候，每种电网标准。',
        ctaPrimary: '查看产品',
        ctaPrimaryLink: '/zh/products/',
        ctaSecondary: '联系销售',
        ctaSecondaryLink: '/zh/contact-us/',
      },
    ],
  },

  aiInsights: {
    eyebrow: 'AI变革',
    title: 'AI正在重写基础设施规则',
    subtitle: '为昨日工作负载建造的数据中心无法满足明日的AI需求。功率密度翻了三倍。热负荷发生了根本性变化。行业需要新方法——SOETECK正在构建它。',
    points: [
      { title: '100kW+机架密度', text: 'AI训练集群需要传统基础设施从未设计承受的功率密度。' },
      { title: '液冷成必需', text: '风冷已达物理极限。Direct-to-chip液冷不再是可选项——它是AI可行性的先决条件。' },
      { title: '部署速度', text: 'AI容量需求增长速度是建设周期的两倍。预制化、工厂测试的模块将时间线从数年压缩到数周。' },
    ],
    cta: '探索我们的AI解决方案',
    ctaLink: '/zh/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
  },

  industries: {
    eyebrow: '服务对象',
    title: '关键行业信赖之选',
    text: '从电信运营商到AI超大规模企业，全球最严苛的组织依赖SOETECK提供关键电源和冷却基础设施。',
    items: [
      { icon: 'telecom', title: '电信运营商', image: { path: '/home/industry-telecom.png', alt: '电信数据中心基础设施' }, ctaLink: '/zh/solutions/' },
      { icon: 'finance', title: '金融银行', image: { path: '/home/industry-finance.png', alt: '金融数据中心可靠性' }, ctaLink: '/zh/solutions/' },
      { icon: 'government', title: '政府公共部门', image: { path: '/home/industry-government.png', alt: '政府安全基础设施' }, ctaLink: '/zh/solutions/' },
      { icon: 'cloud', title: '云计算互联网', image: { path: '/home/industry-cloud.png', alt: '云服务提供商基础设施' }, ctaLink: '/zh/solutions/' },
      { icon: 'ai', title: 'AI与大模型', image: { path: '/home/industry-gpu.png', alt: 'AI计算基础设施' }, ctaLink: '/zh/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
      { icon: 'manufacturing', title: '制造业', image: { path: '/home/industry-manufacturing.png', alt: '工业制造数据中心' }, ctaLink: '/zh/solutions/' },
      { icon: 'submarine', title: '海底光缆登陆站', image: { path: '/home/industry-submarine.png', alt: '海底光缆登陆站基础设施' }, ctaLink: '/zh/solutions/' },
    ],
  },

  solutions: {
    eyebrow: '交钥匙解决方案',
    title: '完整数据中心解决方案',
    text: '从单机柜到多兆瓦园区——预工程化、工厂测试、作为完整集成单元交付。',
    cards: [
      {
        title: '集装箱数据中心',
        text: '密封在20ft或40ft ISO集装箱内的完整数据中心。电力、冷却、消防和监控——全部集成，全部工厂测试。',
        image: { path: '/resources/prefabricated-container-data-center-solution-home.webp', alt: '集装箱数据中心' },
        features: ['8-12周交付', '户外/室内适用', 'N+1冗余标准'],
        cta: '查看详情',
        ctaLink: '/zh/solutions/data-center-solutions/prefabricated-container-data-center/',
      },
      {
        title: '微模块数据中心',
        text: '模块化、可扩展架构，适用于中密度室内部署。预制模块配备集成冷却和配电。',
        image: { path: '/resources/cabinet-data-center-solution-home.webp', alt: '微模块数据中心' },
        features: ['灵活室内部署', '模块化分步扩展', '集成监控'],
        cta: '查看详情',
        ctaLink: '/zh/solutions/data-center-solutions/cabinet-modular-data-center/',
      },
      {
        title: '行级模块化方案',
        text: '专为边缘计算、小型IT机房和分布式基础设施打造的单机柜和行级机柜系统。',
        image: { path: '/resources/row-modular-data-center-solution-1.webp', alt: '行级模块化数据中心' },
        features: ['超紧凑占地', '高效能冷却', '远程24/7管理'],
        cta: '查看详情',
        ctaLink: '/zh/solutions/data-center-solutions/row-modular-data-center/',
      },
    ],
  },

  productLines: {
    eyebrow: '产品类别',
    title: '我们的制造能力',
    items: [
      { icon: 'ups', title: 'UPS系统', ctaLink: '/zh/products/critical-power/' },
      { icon: 'cooling', title: '精密冷却', ctaLink: '/zh/products/thermal-management/' },
      { icon: 'pdu', title: '配电设备', ctaLink: '/zh/products/critical-power/' },
      { icon: 'monitoring', title: 'DCIM监控', ctaLink: '/zh/products/' },
      { icon: 'enclosure', title: '机柜箱体', ctaLink: '/zh/products/' },
      { icon: 'battery', title: '储能系统', ctaLink: '/zh/products/critical-power/' },
    ],
  },

  productCategories: {
    eyebrow: '产品销售',
    title: '产品中心',
    groups: [
      {
        label: '精密冷却',
        items: [
          { title: '房间精密空调', image: { path: '/resources/room-chilled-water-cooling-home-11-768x768.webp', alt: '房间级精密空调' }, hoverImage: { path: '/resources/room-chilled-water-cooling-home-3-768x768.webp', alt: '房间冷水冷却' }, ctaLink: '/zh/products/thermal-management/precision-air-conditioning/room-cooling/' },
          { title: '列间精密空调', image: { path: '/resources/Inrow-cooling-split-DX-home-2-768x768.webp', alt: '列间精密空调' }, hoverImage: { path: '/resources/Inrow-cooling-split-DX-home-1-768x768.webp', alt: '列间冷却' }, ctaLink: '/zh/products/thermal-management/precision-air-conditioning/in-row-cooling/' },
          { title: '机柜精密空调', image: { path: '/resources/rack-cooling-1.webp', alt: '机柜精密空调' }, hoverImage: { path: '/resources/rack-cooling-4-768x768.webp', alt: '机柜冷却' }, ctaLink: '/zh/products/thermal-management/precision-air-conditioning/rack-cooling/' },
          { title: '户外箱体空调', image: { path: '/resources/outdoor-enclosure-cooling-home-2-768x768.webp', alt: '户外箱体精密空调' }, hoverImage: { path: '/resources/outdoor-enclosure-cooling-home-1-768x768.webp', alt: '箱体冷却' }, ctaLink: '/zh/products/thermal-management/precision-air-conditioning/telecom-enclosure-air-conditioner/' },
        ],
      },
      {
        label: '关键电源',
        items: [
          { title: '不间断电源', image: { path: '/resources/UPS-homepage-1-768x768.webp', alt: 'UPS系统' }, hoverImage: { path: '/resources/UPS-homepage-2-768x768.webp', alt: 'UPS系统' }, ctaLink: '/zh/products/critical-power/uninterruptible-power-supplies/' },
          { title: '直流电源系统', image: { path: '/resources/dc-power-system-1-768x768.webp', alt: '直流电源系统' }, hoverImage: { path: '/resources/dc-power-system-2-768x768.webp', alt: '直流电源系统' }, ctaLink: '/zh/products/critical-power/dc-power-systems/' },
          { title: '配电单元', image: { path: '/resources/PDU-home-1-768x768.webp', alt: '配电单元' }, hoverImage: { path: '/resources/PDU-home-2-768x768.webp', alt: 'PDU' }, ctaLink: '/zh/products/critical-power/power-distribution/' },
          { title: '蓄电池', image: { path: '/resources/SOETECK-Gel-Battery-home-1-768x768.png', alt: '储能电池' }, hoverImage: { path: '/resources/SOETECK-Gel-Battery-home-2-768x768.webp', alt: '蓄电池' }, ctaLink: '/zh/products/critical-power/battery/' },
        ],
      },
    ],
  },

  services: {
    eyebrow: '端到端交付',
    title: '从蓝图到调试',
    text: '一个合作伙伴，一份合同，一个团队。SOETECK掌控整个交付流程——从协作设计到工厂测试再到现场调试。',
    image: { path: '/resources/soeteck-factory-1.jpg', alt: 'SOETECK制造工厂' },
    steps: [
      { num: '01', title: '设计', text: '协作工程，3D建模和CFD热仿真。' },
      { num: '02', title: '制造', text: '自主生产UPS、冷却、PDU和机柜。' },
      { num: '03', title: '集成', text: '工厂系统级装配和配置。' },
      { num: '04', title: '测试', text: '全负载测试、热验证和故障转移验证。' },
      { num: '05', title: '运输', text: '安全全球物流，门到门监管。' },
      { num: '06', title: '调试', text: '现场安装、调试和操作员培训。' },
    ],
  },

  scenarios: {
    eyebrow: '应用场景',
    title: '为最严苛环境而生',
    text: '无论是海底光缆登陆站的高温高湿，还是沙漠边缘站点的酷热，SOETECK都能在需要的地方提供可靠的基础设施。',
    items: [
      { title: '海底光缆登陆站', text: '为关键海底光缆节点提供高可靠性、耐腐蚀基础设施。', image: { path: '/home/scenario-submarine.png', alt: '海底光缆登陆站' }, tags: ['高可靠性', '耐腐蚀'] },
      { title: '边缘计算与5G', text: '紧凑、快速部署的微型数据中心，用于低延迟边缘推理。', image: { path: '/home/scenario-edge.png', alt: '边缘计算部署' }, tags: ['紧凑', '快速部署'] },
      { title: '极端气候', text: '防沙、防热、防寒——为地球每种环境设计。', image: { path: '/home/scenario-climate.png', alt: '极端气候数据中心' }, tags: ['沙漠', '热带', '极地'] },
      { title: '应急与灾备', text: '工厂测试模块数周而非数月部署，当停机不是选项时。', image: { path: '/home/scenario-emergency.png', alt: '应急灾备数据中心' }, tags: ['快速恢复', '预测试'] },
      { title: '空间受限场地', text: '屋顶、城市和室内解决方案，在最小占地内最大化容量。', image: { path: '/home/scenario-rooftop.png', alt: '空间受限数据中心' }, tags: ['屋顶', '城市', '紧凑'] },
      { title: '偏远离网地区', text: '自给自足的基础设施，用于采矿、油气和偏远作业。', image: { path: '/home/scenario-remote.png', alt: '偏远离网数据中心' }, tags: ['离网', '自给自足'] },
    ],
  },

  timeline: {
    eyebrow: '端到端交付',
    title: '一个伙伴。从蓝图到调试。',
    text: '设计、制造、集成、测试、运输、安装——每个阶段都由SOETECK掌控。没有供应商间互相推诿。',
    steps: [
      { num: '01', icon: 'design', title: '设计', text: '协作工程，3D建模和CFD热仿真。' },
      { num: '02', icon: 'manufacture', title: '制造', text: '自主生产UPS、冷却、PDU和机柜。' },
      { num: '03', icon: 'integrate', title: '集成', text: '工厂系统级装配和配置。' },
      { num: '04', icon: 'test', title: '测试', text: '全负载测试、热验证和故障转移验证。' },
      { num: '05', icon: 'ship', title: '运输', text: '安全全球物流，门到门监管。' },
      { num: '06', icon: 'install', title: '调试', text: '现场安装、调试和操作员培训。' },
    ],
  },

  projects: {
    eyebrow: '全球业绩',
    title: '在正常运行时间不可妥协的地方值得信赖',
    text: '从中东沙漠到东南亚热带，SOETECK数据中心全天候保持关键基础设施运行。',
    cards: [
      {
        title: '沙特电信灾备',
        location: '沙特阿拉伯利雅得',
        metric: '10',
        metricLabel: '周部署',
        text: '为沙特电信关键业务打造的完全集装箱化灾备数据中心。400kW IT负载，N+1冗余。',
        image: { path: '/resources/prefab-modular-data-center-of-Saudi-Telecom-0.webp', alt: '沙特电信灾备数据中心' },
        cta: '查看案例',
        ctaLink: '/zh/case-studies/',
      },
      {
        title: '区域边缘网络',
        location: '东南亚',
        metric: '12',
        metricLabel: '站点部署',
        text: '为区域电信运营商在12个站点部署分布式微模块数据中心。',
        image: { path: '/resources/soeteck-racks-and-cabinets.webp', alt: '东南亚边缘计算部署' },
        cta: '查看案例',
        ctaLink: '/zh/case-studies/',
      },
    ],
  },

  whySoeteck: {
    eyebrow: 'SOETECK优势',
    title: '全球最严苛运营商选择我们的原因',
    text: '不仅是我们的产品——更是我们的方式，以及谁在背后支持。',
    items: [
      { icon: 'factory', title: '制造商，非中间商', text: '我们自主设计和制造关键组件。没有不透明供应链，没有加价层。' },
      { icon: 'accountability', title: '单点责任', text: '一份合同，一个团队，一个负责方。从设计到调试，SOETECK掌控整个交付。' },
      { icon: 'global', title: '全球部署DNA', text: '50+国家，每种气候，每种电网标准。我们已经解决了其他项目失败的挑战。' },
      { icon: 'speed', title: '速度不妥协', text: '工厂预装配和测试将数年现场施工压缩到数周。' },
    ],
    stats: [
      { value: '2000', suffix: '+', label: '已交付项目' },
      { value: '50', suffix: '+', label: '服务国家' },
      { value: '20', suffix: '+', label: '创新年数' },
      { value: '8', suffix: '–12周', label: '交付周期' },
    ],
    certs: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'CE认证', '20+专利'],
  },

  news: {
    eyebrow: '新闻与洞察',
    title: '行业洞察与公司新闻',
    viewAllLabel: '查看所有文章',
    viewAllLink: '/zh/news-and-insights/',
  },

  cta: {
    eyebrow: '启动项目',
    title: '准备构建您的AI就绪数据中心？',
    text: '告诉我们您的需求——电力、冷却、占地、时间线。我们将设计最优方案并交钥匙交付。',
    cards: [
      { icon: 'products', title: '浏览产品目录', text: '探索我们自主制造的电源、冷却和机柜全系列产品。', cta: '查看产品', ctaLink: '/zh/products/' },
      { icon: 'solutions', title: '获取定制方案', text: '根据您的特定工作负载、场地和容量需求，获得定制推荐。', cta: '咨询专家', ctaLink: '/zh/contact-us/' },
      { icon: 'engineering', title: '对接工程团队', text: '直接与我们的工程团队对接复杂的定制集成和设计建造项目。', cta: '提交咨询', ctaLink: '/zh/contact-us/' },
    ],
  },
};
