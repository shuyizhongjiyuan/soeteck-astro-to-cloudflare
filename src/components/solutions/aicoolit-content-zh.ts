/**
 * AICoolit 液冷数据中心 — 中文内容（translate-code-embedded 模式，Batch 3）。
 * 结构与 aicoolit-content.ts（EN）完全一致，导出名一一对应。
 * 术语遵循 tmp/translation-batch3/TERMINOLOGY-AND-RULES.md：CDU=冷量分配单元、immersion=浸没式液冷等。
 * 品牌：SOETECK/Soeteck → 数益科技（短位「数益」）；AICoolit™、ISO、IP65、UQD、HGX 等保留。
 */
export const AICOOLIT_NAV_SECTIONS = [
  { id: 'aicoolit-why', label: '为何选择 AICoolit' },
  { id: 'aicoolit-models', label: '产品系列' },
  { id: 'aicoolit-components', label: '核心部件' },
  { id: 'aicoolit-faq', label: '常见问题' },
  { id: 'aicoolit-contact', label: '联系我们' },
];

export const AICOOLIT_STATS = [
  { value: '100', unit: 'kW', label: '单机架最大密度' },
  { value: '1.15', unit: '', label: '超低 PUE' },
  { value: '4', unit: '周', label: '典型交付周期' },
  { value: 'IP65', unit: '', label: '工业级防护' },
];

export const AICOOLIT_COMPARISON_CARDS = [
  {
    title: 'VS. 传统风冷集装箱',
    description: '传统风冷集装箱受制于空气流动的物理极限，单机架密度止步于 10-15kW——满足不了 NVIDIA H100 集群的散热需求。',
    features: [
      { title: '密度突破', text: '液冷打破散热天花板，在标准 ISO 占地内实现单机架 100kW+ 的部署密度。' },
      { title: '环境适应力', text: '全密闭液冷循环设计，粉尘、潮湿、50°C 高温环境都不在话下。' },
    ],
  },
  {
    title: 'VS. 传统土建机房',
    description: '传统土建绕不开用地审批、繁琐许可与 12-24 个月的工期，追不上 AI 业务的扩张速度。',
    features: [
      { title: '快速交付上线', text: '工厂预制化生产，现场只需接电通水。交付周期从“数年”压缩到“数周”。' },
      { title: 'CAPEX 按需扩展', text: '无需一次性巨额投入，算力需求增长时按模块逐步扩容。' },
    ],
  },
];

export const AICOOLIT_PRODUCT_SERIES = [
  {
    label: 'SERIES I (40FT)',
    title: '高密度集群模块',
    description: '为大规模 LLM 训练集群而生。UPS 与电池外置，把箱内空间全部留给算力；配合总功率 900kW 的机架式液冷 CDU，一只集装箱即可支撑 1MW 超算集群。',
    image: '/resources/1-40-Foot-AI-Container-Data-Center-100kW-per-Rack.webp',
    specs: [
      { label: '总负载', value: '1 MW' },
      { label: '机架密度', value: '100 kW' },
      { label: '冷却方式', value: '机架式 CDU ×8' },
      { label: '配电配置', value: '外置电源' },
    ],
    features: [
      '9:1 液冷/风冷配比，极致能效。',
      '支持 3+1 冗余列间空调，消除局部热点。',
    ],
  },
  {
    label: 'SERIES II (40FT)',
    title: '一体化标准模块',
    description: '“即插即用”的代表作。UPS、锂电池与液冷系统全部集成进一只 40ft 箱体——快速部署的标准答案，适合外部电力条件受限或算力需求紧迫的场景。',
    image: '/resources/2-40-Foot-AI-Container-Data-Center-60kW-per-Rack.webp',
    specs: [
      { label: '总负载', value: '480 kW' },
      { label: '机架密度', value: '60 kW' },
      { label: '冷却方式', value: '列间 CDU ×1' },
      { label: '配电配置', value: '内置电源' },
    ],
    features: [
      '8:2 液冷/风冷配比，冷量配置更均衡。',
      '内置 600kVA 模块化 UPS + 电池备电。',
    ],
  },
  {
    label: 'SERIES III (20FT)',
    title: '边缘紧凑模块',
    description: '占地小，算力足。20ft 模块专为空间受限的边缘计算、智慧城市与科研实验室打造——从停车场到楼顶，200kW 高性能液冷算力随处可部署。',
    image: '/resources/3-20-Foot-AI-Container-Data-Center-50kW-per-Rack.webp',
    specs: [
      { label: '总负载', value: '200 kW' },
      { label: '机架密度', value: '50 kW' },
      { label: '冷却方式', value: '机架式 CDU ×4' },
      { label: '配电配置', value: '内置电源' },
    ],
    features: [
      '高度集成：全部子系统装进 20ft 箱体。',
      '标配 300kVA UPS + 15 分钟电池备电。',
    ],
  },
  {
    label: 'SERIES IV (40FT)',
    title: '浸没式液冷模块',
    description: '严苛环境的终极方案。服务器直接浸入绝缘冷却液，风扇、粉尘与噪音一并归零。沙漠、矿区、热带地区的唯一之选，为高性能计算带来极致 PUE 与稳定性。',
    image: '/resources/4-40-Foot-AI-Container-Data-Center-50kW-per-Rack-Immersion-Cooling.webp',
    specs: [
      { label: '总负载', value: '~700 kW' },
      { label: '机架密度', value: '50 kW' },
      { label: '冷却方式', value: '400kW CDU ×2' },
      { label: '配电配置', value: '外置电源' },
    ],
    features: [
      '热量 100% 由液体带走（无需风扇），超静音。',
      '加密货币挖矿与极端 HPC 场景的理想之选。',
    ],
  },
];

export const AICOOLIT_LAYER_SPECS = [
  { label: '防护等级', value: 'IP65', icon: 'shield' },
  { label: '保温性能', value: 'R-30 保温墙体', icon: 'temperature' },
  { label: '物流运输', value: 'CSC 认证', icon: 'globe' },
];

// 4th spec rendered separately after the Layer 01 image (matching production layout)
export const AICOOLIT_LAYER_EXTRA_SPEC = { label: '结构可靠性', value: '10 年使用寿命', icon: 'structure' };

export const AICOOLIT_CDU_TABS = [
  {
    id: 'intelligent-cdu',
    title: '智能 CDU',
    subtitle: '核心冷却单元',
    badge: '核心',
    description: '液冷系统的心脏。列间 CDU 配备 1+1 冗余水泵与智能 VFD 流量控制，根据服务器实时负载动态平衡压力与流量，保障 100% 在线与最佳散热表现。',
    tags: ['双泵冗余', '自动平衡逻辑', '触摸屏 HMI', '1.5 倍压力测试'],
    products: [
      { image: '/resources/Soeteck-Rack-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: '数益机架式冷量分配单元（CDU）', title: '机架式 CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicooli-rack-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-In-Row-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: '数益列间冷量分配单元（CDU）', title: '列间 CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-in-row-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-Room-CDU-Coolant-Distribution-Unit-1.webp', alt: '数益房间级冷量分配单元（CDU）', title: '房间级 CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-room-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-Liquid-to-Air-In-Row-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: '数益混合式 CDU（Liquid-to-Air）', title: '混合式 CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-hybrid-cdu-coolant-distribution-unit/' },
    ],
    contentTitle: '智能冷量分配单元（CDU）',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/?category%5B%5D=coolant-distribution-units',
  },
  {
    id: 'orbital-manifolds',
    title: '轨道焊歧管',
    subtitle: '316L 不锈钢',
    badge: '分配',
    description: '主管路分配动脉采用 316L 医用级不锈钢制造，配合先进轨道焊接工艺，焊点零泄漏，10 年生命周期内耐腐蚀表现出众。',
    tags: ['泄漏检测', '钝化处理', '轨道焊接', '耐化学腐蚀'],
    products: [
      { image: '/resources/Soeteck-Rack-Manifold-for-Liquid-Cooling-Solutions-4-1024x717.webp', alt: '数益液冷机架分液歧管', title: '分液歧管', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-rack-manifold-for-liquid-cooling-solutions/' },
    ],
    contentTitle: '轨道焊接分液歧管',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-rack-manifold-for-liquid-cooling-solutions/',
  },
  {
    id: 'uqd-connectors',
    title: 'UQD 快接头',
    subtitle: '支持盲插',
    badge: '接口',
    description: '全面符合 OCP 标准的盲插式通用快接头，支持在系统带压状态下安全热插拔服务器节点，全程零滴漏。',
    tags: ['符合 OCP 标准', '支持盲插', '防滴漏技术', '高插拔寿命'],
    products: [
      { image: '/resources/Soeteck-Quick-Disconnect-Coupling-for-Liquid-Cooling-Solutions-1-1024x717.webp', alt: '数益快速接头（UQD）', title: 'UQD 快接头', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-quick-disconnect-coupling-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'UQD 快接头',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-quick-disconnect-coupling-for-liquid-cooling-solutions/',
  },
  {
    id: 'secondary-loop',
    title: '二次回路',
    subtitle: 'EPDM / 铜管',
    badge: '输送',
    description: '坚固的机架级流体输送。可选柔性 EPDM 编织软管，也可选刚性铜管一劳永逸；与 PG25 及多种绝缘冷却液完全化学兼容。',
    tags: ['EPDM / 铜管可选', '防折弯设计', '高承压等级', '耐化学腐蚀'],
    products: [
      { image: '/resources/Soeteck-Secondary-Loop-for-Liquid-Cooling-Solutions-1-1024x717.webp', alt: '数益液冷二次回路', title: '二次回路', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-secondary-loop-for-liquid-cooling-solutions/' },
    ],
    contentTitle: '二次回路',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-secondary-loop-for-liquid-cooling-solutions/',
  },
  {
    id: 'heat-rejection',
    title: '外部排热',
    subtitle: '干冷器 / 冷却塔',
    badge: '外部',
    description: '高效的室外排热系统。绝热干冷器配备智能喷淋辅助，即便盛夏高温仍能保持充足冷量，较传统冷却塔大幅节水。',
    tags: ['节水', '低噪音', '智能控制', 'EC 风机技术'],
    products: [
      { image: '/resources/SOETECK-V-Shaped-Integrated-Outdoor-Air-Cooled-Condenser-1.webp', alt: '数益 V 型户外风冷冷凝器', title: '干冷器', url: '/products/thermal-management/heat-rejection/soeteck-v-shaped-integrated-outdoor-air-cooled-condenser/' },
    ],
    contentTitle: '干冷器与冷却塔',
    contentUrl: '/products/thermal-management/heat-rejection/soeteck-v-shaped-integrated-outdoor-air-cooled-condenser/',
  },
];

// DEPRECATED: merged into AICOOLIT_CDU_TABS above (now 5 tabs)
// Keep exports for backward compatibility but no longer rendered separately
export const AICOOLIT_HEAT_REJECTION = {
  title: '干冷器与冷却塔',
  subtitle: '外部',
  description: '高效的室外排热系统。绝热干冷器配备智能喷淋辅助，即便盛夏高温仍能保持充足冷量，较传统冷却塔大幅节水。',
  tags: ['节水', '低噪音', '智能控制', 'EC 风机技术'],
};

export const AICOOLIT_SECONDARY_LOOP = {
  title: '二次回路',
  subtitle: '输送',
  description: '坚固的机架级流体输送。可选柔性 EPDM 编织软管，也可选刚性铜管一劳永逸；与 PG25 及多种绝缘冷却液完全化学兼容。',
  tags: ['EPDM / 铜管可选', '防折弯设计', '高承压等级', '耐化学腐蚀'],
};

export const AICOOLIT_TRUST_BADGES = [
  { icon: 'medal', label: 'OCP 会员' },
  { icon: 'check', label: 'ISO 9001' },
  { icon: 'lightbulb', label: 'CE 认证' },
  { icon: 'trending', label: 'Uptime TIER III' },
];

export const AICOOLIT_SUPPLY_CHAIN = [
  { title: '50,000 m² 智能工厂', text: '自动化产线年产能 500+ 台模块。' },
  { title: '全球物流网络', text: '与主流航运公司深度合作，快速交付美洲、EMEA 与亚太市场。' },
  { title: '供应链安全', text: '从钣金加工到精密液冷循环组装的全流程自制，确保您需要时产能无忧。' },
];

export const AICOOLIT_FAQ = [
  {
    question: '如果发生漏液怎么办？',
    answer: '我们采用“纵深防御”策略。首先，<strong>负压</strong>设计确保即便出现微渗漏，也是空气被吸入而非液体喷出。其次，智能漏液检测传感器（绳式与点式）部署在每一个歧管接头和 CDU 上。一旦检测到液体，系统会立即隔离受影响回路并向运维人员告警，从源头保护 IT 设备。',
  },
  {
    question: '维护液冷回路需要专职人员吗？',
    answer: '不需要。AICoolit 系统设计为“装好即忘”——日常维护量极小，主要是每年检查一次液位与滤芯。CDU 具备自诊断能力。至于服务器维护，防滴漏的 <strong>UQD 快接头</strong>让 IT 人员像在风冷机柜中一样直接热插拔节点，无需任何管路专业技能。',
  },
  {
    question: '是否兼容 NVIDIA H100/Blackwell GPU？',
    answer: '完全兼容。我们的液冷架构专为高 TDP 芯片设计（单插座功耗可达 1000W 以上），支持适配 NVIDIA、AMD、Intel 加速卡的 OCP 标准冷板。无论您运行的是 HGX H100 集群还是未来的 Blackwell 架构，单机架 100kW 的密度都留有充足的散热余量。',
  },
  {
    question: '设备能否在极端气候下运行？',
    answer: '可以。箱体达到 IP65 防护与 R-30 保温标准，将内部环境与外界完全解耦。排热方面，绝热干冷器在环境温度高达 <strong>50°C (122°F)</strong> 时仍能保持制冷效率。我们已在中东沙漠与东南亚热带地区成功部署。',
  },
  {
    question: '部署 1MW 集群需要多久？',
    answer: '传统土建需要 18-24 个月。采用 AICoolit，工厂测试完成的 1MW 模块 <strong>5-10 周</strong>即可交付。到场后只需接电通水，通常一周内完成调试验收——您的模型训练可以比竞争对手提前数月启动。',
  },
];

export const AICOOLIT_CTA_OFFERS = [
  { label: '免费 TCO 分析报告' },
  { label: '定制 3D 布局图纸' },
  { label: '技术规格书' },
];

export const AICOOLIT_GPU_BADGES = ['NVIDIA HGX', 'INTEL Gaudi', 'AMD Instinct'];

// ─── 页面级模板文案（自 AICoolitPage.astro 硬编码迁入） ───

export const AICOOLIT_NAV = {
  ariaLabel: '页面导航',
  brandSubtitle: '液冷数据中心',
};

export const AICOOLIT_HERO = {
  title: '液冷<br>数据中心',
  subtitle: '交付至<em>任何角落。</em>',
  intro: '液冷，是 AI 时代数据中心的新一代热管理方案。数益 <strong>AICoolit&trade;</strong> 将冷板式（Direct-to-Chip）或浸没式液冷集成到标准 ISO 集装箱中，单机架密度可达 100kW——跳过冗长的土建周期，数周内让算力集群上线运行。',
  ctaModels: '查看产品系列',
  ctaWhitepaper: '获取白皮书',
  badgesLabel: '已通过工程验证：',
  imgAlt: 'AICoolit 液冷数据中心系列',
};

export const AICOOLIT_WHY = {
  eyebrow: '竞争优势',
  title: '为什么是“液冷 + 集装箱”？',
  lead: 'AI 浪潮之下，传统基础设施成了瓶颈。AICoolit 把集装箱的灵活性与液冷的密度优势合而为一，给出更优的第三种选择。',
};

export const AICOOLIT_MODELS = {
  eyebrow: '产品系列',
  title: '按规模选择',
  badges: ['ISO 标准集装箱', '工厂预制化'],
  downloadSpecs: '下载 {series} 规格书',
};

export const AICOOLIT_COMPONENTS = {
  eyebrow: '核心部件',
  title: '工程核心',
  lead: '工业级坚固与微米级精密的无缝融合。以统一系统设计，而非零件的简单堆叠。',
};

export const AICOOLIT_SHELL = {
  layer1Badge: '第 01 层：坚固堡垒',
  layer1Title: '工业级 ISO 箱体',
  layer1Desc: '集装箱不只是个箱子，而是第一道防线。我们在标准 ISO 航运集装箱的基础上以强化钢材重新设计，打造全密闭环境，让高价值算力资产免受极端外部条件侵袭。',
  layer1ImgAlt: '集装箱数据中心',
  divider: '箱体内部',
  layer2Badge: '第 02 层：内部系统',
  layer2Title: '精密液冷回路',
  layer2Desc: '从 CDU、分液歧管到储液罐全部自研自产，<strong>AICoolit&trade;</strong> 系列为您的关键基础设施带来无缝兼容与供应链安全。',
  tabsAriaLabel: '部件详情',
};

export const AICOOLIT_TRUST_HEAD = {
  ariaLabel: '认证与标准',
  heading: '值得全球领先企业与标准组织信赖',
};

export const AICOOLIT_SUPPLY_HEAD = {
  eyebrow: '供应链安全',
  title: '为规模而生，<br />全球交付。',
  lead: 'AI 竞赛比到最后，比的是供应链的确定性。数益科技掌握从钣金制造到精密液冷循环组装的完整生产链——在最需要产能的时候，让您稳拿产能。',
  imgAlt: '数益工厂生产线',
};

export const AICOOLIT_FAQ_HEAD = {
  eyebrow: '常见问题',
  title: '专家解答',
  lead: '关于液冷模块化数据中心的部署，您想了解的都在这里。',
};

export const AICOOLIT_CTA = {
  title: '下一代 AI 数据中心，从一次对话开始',
  lead: '别让基础设施拖慢 AI 的脚步。告诉我们您的液冷数据中心配置需求，24 小时内获得初步工程布局方案。',
};

export const AICOOLIT_FORM = {
  title: '获取报价',
  nameLabel: '您的姓名：',
  namePlaceholder: '请输入姓名',
  emailLabel: '邮箱：',
  emailPlaceholder: 'your@email.com',
  companyLabel: '公司：',
  companyPlaceholder: '请输入公司名称',
  phoneLabel: '电话：',
  phonePlaceholder: '电话 / WhatsApp',
  subjectLabel: '主题：',
  subjectPlaceholder: '例如：AICoolit Series I 报价咨询',
  messageLabel: '留言：',
  messagePlaceholder: '请描述您的项目需求……',
  submit: '提交',
};
