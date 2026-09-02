import type { HomeContent } from './home-content';

export const HOME_ZH: HomeContent = {
  hero: {
    slides: [
      {
        image: '/hero/hero-slide-1.webp',

        eyebrow: '数益科技 · 预制化数据中心提供商',

        title: '数周交付，',

        titleAccent: '而非数年。',

        subtitle: '数益科技预制化集装箱、通道封闭、行级与单机柜数据中心——电源、冷却与消防工厂预集成，每一台到场当天即可上线，服务全球 AI 训练集群、边缘站点与灾备场景。',

        ctaPrimary: '探索解决方案',

        ctaPrimaryLink: '/zh/solutions/',

        ctaSecondary: '咨询专家',

        ctaSecondaryLink: '/zh/contact-us/',

      },
      {
        image: '/hero/hero-slide-2.webp',

        eyebrow: '全栈预制 AI 基础设施',

        title: 'AI 数据中心，',

        titleAccent: '一体化打造。',

        subtitle: 'GPU 机柜功率密度已突破 100kW，风冷难以招架。我们将电源、液冷、机柜与监控设计为一套一体化 AI 栈，预制化交钥匙交付，到场当天上线。',

        ctaPrimary: '了解如何构建',

        ctaPrimaryLink: '/zh/solutions/data-center-solutions/ai-data-center/',

        ctaSecondary: '获取报价',

        ctaSecondaryLink: '/zh/contact-us/',

      },
      {
        image: '/hero/hero-slide-1.webp',

        eyebrow: '交钥匙伙伴',

        title: '端到端交付，',

        titleAccent: '单一责任。',

        subtitle: '一个团队统管一切——工程设计、工厂生产、全球运输、现场调试与售后，让您只需面对一个可问责的伙伴。',

        ctaPrimary: '咨询专家',

        ctaPrimaryLink: '/zh/contact-us/',

        ctaSecondary: '联系销售',

        ctaSecondaryLink: '/zh/contact-us/',

      },
      {
        image: '/hero/hero-slide-3.webp',

        eyebrow: '全球实证',

        title: '部署遍布',

        titleAccent: '50+ 国家。',

        subtitle: '从沙漠酷热到北极严寒，覆盖每种常见电网标准，我们的设备让 AI 训练平台、边缘节点与关键站点全天候运行。',

        ctaPrimary: '阅读客户案例',

        ctaPrimaryLink: '/zh/news-and-insights/client-case-studies/',

        ctaSecondary: '联系销售',

        ctaSecondaryLink: '/zh/contact-us/',

      },
    ],
  },

  aiInsights: {
    eyebrow: 'AI变革',
    title: 'AI，正在改写基础设施的规则',
    subtitle: '为昨天负载而建的数据中心，扛不住明天的 AI 需求：功率密度翻了三倍，热负荷彻底改变。行业需要新的路径——数益科技正在把它变成现实。',
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
    text: '从电信运营商到AI超大规模企业，全球最严苛的组织都选择数益科技的关键供电与制冷基础设施。',
    items: [
      { icon: 'telecom', title: '电信运营商', image: { path: '/home/industry-telecom.png', alt: '电信数据中心基础设施' }, ctaLink: '/zh/solutions/telecom/' },
      { icon: 'colocation', title: '数据中心托管', image: { path: '/home/industry-colocation.png', alt: '数据中心托管基础设施' }, ctaLink: '/zh/solutions/colocation/' },
      { icon: 'cloud', title: '云计算互联网', image: { path: '/home/industry-cloud.png', alt: '云服务提供商基础设施' }, ctaLink: '/zh/solutions/cloud-hyperscale/' },
      { icon: 'internet', title: '互联网', image: { path: '/home/industry-internet.png', alt: '互联网平台数据中心基础设施' }, ctaLink: '/zh/solutions/internet/' },
      { icon: 'finance', title: '金融银行', image: { path: '/home/industry-finance.png', alt: '金融数据中心可靠性' }, ctaLink: '/zh/solutions/finance/' },
      { icon: 'government', title: '政府公共部门', image: { path: '/home/industry-government.png', alt: '政府安全基础设施' }, ctaLink: '/zh/solutions/government/' },
      { icon: 'manufacturing', title: '制造业', image: { path: '/home/industry-manufacturing.png', alt: '工业制造数据中心' }, ctaLink: '/zh/solutions/manufacturing/' },
      { icon: 'healthcare', title: '医疗', image: { path: '/home/industry-healthcare.png', alt: '医疗数据中心基础设施' }, ctaLink: '/zh/solutions/healthcare/' },
    ],
  },

  solutions: {
    eyebrow: '预制化与交钥匙解决方案',
    title: '完整数据中心解决方案',
    text: '从单个机柜到多兆瓦园区——工厂完成预工程与整机测试，到场即可作为完整集成单元投运。',
    cards: [
      {
        title: 'AI数据中心',
        text: '面向GPU工作负载的预制化AI基础设施。集装箱模块集成液冷与高密度配电——工厂测试，到场即可上电运行。',
        image: { path: '/resources/ai-data-center/ai-data-center-hero.webp', alt: 'AI数据中心' },
        features: ['90-120天交付', '单机架高达120kW', 'PUE低至1.08'],
        cta: '查看详情',
        ctaLink: '/zh/solutions/data-center-solutions/ai-data-center/',
      },
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
          { title: '户外箱体空调', image: { path: '/resources/outdoor-enclosure-cooling-home-2-768x768.webp', alt: '户外箱体精密空调' }, hoverImage: { path: '/resources/outdoor-enclosure-cooling-home-1-768x768.webp', alt: '箱体冷却' }, ctaLink: '/zh/products/thermal-management/telecom-enclosure-air-conditioner/' },
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
    eyebrow: '我们的服务',
    title: '我们为您交付什么',
    text: '从首次沟通到多年运营——数益科技掌控完整生命周期。这对您的项目意味着：',
    image: { path: '/resources/soeteck-factory-1.jpg', alt: '数益科技制造工厂' },
    steps: [
      { num: '01', icon: 'design', title: '免费方案设计', text: '告诉我们电力、制冷与场地需求，免费获得含 3D 布局与热仿真的定制数据中心方案。' },
      { num: '02', icon: 'manufacture', title: '自有工厂制造', text: 'UPS、精密冷却、配电与机柜全部自有工厂设计制造——无中间商、无加价、质量全程可控。' },
      { num: '03', icon: 'test', title: '出厂验收测试', text: '每台设备出厂前全负载测试，欢迎到场或视频见证——离厂前即完成验证。' },
      { num: '04', icon: 'ship', title: '全球物流与关务', text: 'FOB、CIF、DDP 均可——运输、单证与清关全程代办，50+ 国家交付经验覆盖各类电网标准。' },
      { num: '05', icon: 'install', title: '现场安装与培训', text: '工程师到现场完成安装调试，并培训您的本地团队——无第三方转包，零交接缝隙。' },
      { num: '06', icon: 'support', title: '售后与备件', text: '2 年质保、7×24 技术支持、远程监控与应急备件发运——一份合同，一个团队，全责到底。' },
    ],
  },

  scenarios: {
    eyebrow: '应用场景',
    title: '为最严苛环境而生',
    text: '无论是海底光缆登陆站的高温高湿，还是沙漠边缘站点的酷热，数益科技都能在需要的地方交付可靠基础设施。',
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
    text: '设计、制造、集成、测试、运输、安装——每个阶段都由数益科技掌控。没有供应商间互相推诿。',
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
    title: '关键业务，值得托付',
    text: '从中东沙漠到东南亚雨林，数益科技的数据中心让关键基础设施全天候在线。',
    ctaAll: '查看全部案例',
    projectsAllLink: '/zh/news-and-insights/client-case-studies/',
    cards: [
      {
        title: '沙特电信',
        location: '沙特阿拉伯利雅得',
        metric: '2',
        metricLabel: '个40ft集装箱数据中心',
        text: '为沙特电信打造两台40英尺移动式OLT集装箱数据中心：双直流电源与电池备份、每台配备7个OLT，确保不间断运行。',
        image: { path: '/resources/prefab-modular-data-center-of-Saudi-Telecom-0.webp', alt: '沙特电信集装箱数据中心' },
        cta: '阅读完整案例',
        ctaLink: '/zh/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/',
        testimonial: {
          quote: '客户对交付成果十分满意——这套集装箱数据中心为他们的长期发展打下了坚实基础。',
          author: '沙特电信',
          role: 'DR项目，中东',
        },
      },
      {
        title: 'GRD卡塔尔',
        location: '卡塔尔',
        metric: '24/7',
        metricLabel: '稳定运行',
        text: '为GRD定制集装箱式数据中心，在高温沙尘环境中支持7×24小时稳定数据运行，助力其数字化转型。',
        image: { path: '/resources/soeteck-racks-and-cabinets.webp', alt: 'GRD卡塔尔集装箱数据中心' },
        cta: '阅读完整案例',
        ctaLink: '/zh/news-and-insights/client-case-studies/grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center/',
        testimonial: {
          quote: '集装箱数据中心快速部署完成，即使在极端高温和沙尘环境下也能全天候稳定支撑我们的运营。',
          author: 'GRD',
          role: '卡塔尔分公司运营',
        },
      },
      {
        title: '斐济电信',
        location: '斐济',
        metric: '45',
        metricLabel: 'kW防腐蚀空调',
        text: '为沿海电信站点升级20kW与45kW防腐蚀精密空调，替换容量不足的家用空调，抵御含盐潮湿环境。',
        image: { path: '/home/industry-submarine.png', alt: '斐济电信沿海站点精密冷却' },
        cta: '阅读完整案例',
        ctaLink: '/zh/news-and-insights/client-case-studies/telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design/',
        testimonial: {
          quote: '防腐蚀精密空调恢复了我们沿海站点的稳定高效冷却——那些过去常被盐雾侵蚀损坏的设备。',
          author: '斐济电信',
          role: '网络运营',
        },
      },
      {
        title: 'Open DC马来西亚',
        location: '马来西亚',
        metric: '100',
        metricLabel: 'kW模块化冷却',
        text: '两套100kW模块化风冷精密空调改造Open DC Malaysia空间受限的服务器机房——传统机组无法安装的紧凑升级方案。',
        image: { path: '/home/industry-gpu.png', alt: 'Open DC马来西亚数据中心改造' },
        cta: '阅读完整案例',
        ctaLink: '/zh/news-and-insights/client-case-studies/open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit/',
        testimonial: {
          quote: '数益科技的模块化机组在传统系统无法安装的空间里完美适配，为我们改造后的机房提供了可靠的100kW级冷却。',
          author: 'Open DC Malaysia',
          role: '设施工程',
        },
      },
      {
        title: 'WebSat Media',
        location: '新加坡',
        metric: 'N+1',
        metricLabel: '冷却冗余',
        text: '五台70kW精密空调以N+1冗余保障WebSat Media的卫星与广播基础设施持续在线，服务全球客户。',
        image: { path: '/home/scenario-remote.png', alt: 'WebSat Media数据中心冷却' },
        cta: '阅读完整案例',
        ctaLink: '/zh/news-and-insights/client-case-studies/websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions/',
        testimonial: {
          quote: '五台精密空调的N+1冗余保障了我们的卫星与广播平台，为各大洲的客户提供持续在线服务。',
          author: 'WebSat Media',
          role: '数据中心基础设施',
        },
      },
      {
        title: 'Sinus-Dochi LLC',
        location: '蒙古',
        metric: 'In-Row',
        metricLabel: '列间精密冷却',
        text: '为蒙古HVAC工程企业部署列间精密冷却系统——DC变频压缩机、EC风机与N+1冗余设计，智能温控按负载自动调节风量，显著降低数据中心PUE。',
        image: { path: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp', alt: 'Sinus-Dochi LLC列间精密冷却' },
        cta: '阅读完整案例',
        ctaLink: '/zh/news-and-insights/client-case-studies/sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system/',
        testimonial: {
          quote: '智能列间精密冷却系统显著降低了我们数据中心的PUE并实现精准控温——效率与可靠性兼得。',
          author: 'Sinus-Dochi LLC',
          role: 'HVAC工程，蒙古',
        },
      },
    ],
  },

  whySoeteck: {
    eyebrow: '数益优势',
    title: '为什么最严苛的运营商都选择数益科技',
    text: '不仅是我们的产品——更是我们的方式，以及谁在背后支持。',
    items: [
      { icon: 'factory', title: '制造商，非中间商', text: '我们自主设计和制造关键组件。没有不透明供应链，没有加价层。' },
      { icon: 'accountability', title: '单点责任', text: '一份合同，一个团队，一个负责方。从设计到调试，数益科技掌控整个交付。' },
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
    title: '下一代 AI 数据中心，从一次对话开始',
    text: '把电力、制冷、占地与工期交给我们——数益科技为您定制最优方案，交钥匙交付。',
    cards: [
      { icon: 'products', title: '浏览产品目录', text: '探索我们自主制造的电源、冷却和机柜全系列产品。', cta: '查看产品', ctaLink: '/zh/products/' },
      { icon: 'solutions', title: '获取定制方案', text: '根据您的特定工作负载、场地和容量需求，获得定制推荐。', cta: '探索解决方案', ctaLink: '/zh/solutions/' },
      { icon: 'engineering', title: '对接工程团队', text: '直接与我们的工程团队对接复杂的定制集成和设计建造项目。', cta: '提交咨询', ctaLink: '/zh/contact-us/' },
    ],
  },

  productsIntro: {
    eyebrow: '自主研发制造',
    title: '电源与冷却，数益科技自研',
    text: 'UPS 系统、精密冷却、配电与机柜——全部由我们自己的工厂设计制造，确保每个组件都符合规格。',
  },

  transition: {
    eyebrow: '解决方案',
    title: '四种交钥匙架构',
    text: '每台数益科技数据中心出厂即建成、到场即上线。从交钥匙 AI 基础设施到集装箱式、微模块和行级模块化部署——选择适合您场地、密度与时间线的型号。',
  },

  newsC: {
    newsLabel: '新闻发布',
    newsLink: '/zh/news-and-insights/news-releases/',
    blogLabel: '博客',
    blogLink: '/zh/news-and-insights/blogs/',
    viewAllNews: '查看全部新闻 →',
    viewAllBlogs: '查看全部博客 →',
    newsEyebrow: '最新动态',
    newsTitle: '公司新闻与公告',
    blogEyebrow: '专家洞察',
    blogTitle: '技术博客与行业洞察',
  },

};
