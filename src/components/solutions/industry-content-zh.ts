/**
 * 行业顶层解决方案页 — 中文内容（translate-code-embedded 模式）。
 * 结构与 industry-content.ts（EN）一致；产品/技术名词保留英文。
 */
import type { IndustryContent } from './industry-content';

export const INDUSTRY_CONTENT_ZH: Record<string, IndustryContent> = {
  telecom: {
    hero: {
      eyebrow: '电信与网络基础设施',
      title: '电信数据中心与边缘解决方案',
      subtitle: '数益科技预制化、防腐的边缘与 OLT 站点，数周即可部署——为运营商、铁塔公司与海缆登陆站而生。',
      bannerImage: '/industry/industry-telecom-1920.webp',
      alt: '电信网络基础设施',
      ctaPrimary: '咨询专家',
      ctaSecondary: '了解预制化数据中心',
      ctaSecondaryLink: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    pains: {
      eyebrow: '行业挑战',
      title: '电信运营商面临的挑战',
      text: '网络站点的部署与运营存在三大反复出现的难题——数益科技针对每一项进行工程设计。',
      items: [
        { title: '初始投资高', text: '一次性建成长周期回收。预制化分期部署降低前期 CAPEX，随流量逐步扩展。' },
        { title: '能耗与碳排压力', text: '监管与 ESG 目标推动运营商走向绿色高效站点。高效冷却与智能直流电源助力达标。' },
        { title: '可用性不容妥协', text: '网络在线就是业务本身。工厂测试、N+1 就绪的基础设施加远程监控，保障服务持续在线。' },
      ],
    },
    products: {
      eyebrow: '我们交付什么',
      title: '电信级产品与解决方案',
      text: '为网络站点与边缘数据中心打造的动力、冷却与机柜系统。',
      ctaLabel: '查看详情',
      items: [
        { title: '电信机柜空调', text: '户外机柜与方舱的防腐精密冷却——30 余个型号。', path: '/products/thermal-management/telecom-enclosure-air-conditioner/' },
        { title: '集装箱式边缘 DC', text: '移动 OLT 与边缘集装箱，集成电源、冷却与消防。', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: '直流电源与电池', text: '-48V 直流电源系统与电池备电，为运营商级可靠性而生。', path: '/products/critical-power/dc-power-systems/' },
      ],
    },
    need: {
      title: '数周内交付您的下一个电信站点',
      text: '告诉我们站点需求——电源、制冷、占地。数益科技工程师交付预制化、工厂测试、到场即可上线的解决方案。',
      cta: '启动您的项目',
    },
  },

  colocation: {
    hero: {
      eyebrow: '数据中心运营商',
      title: '面向数据中心运营商的模块化容量',
      subtitle: '为托管与 IDC 服务商量身打造的快速分期扩容——预制化机房、边缘模块与交钥匙扩建，告别施工延期。',
      bannerImage: '/industry/industry-colocation-1920.webp',
      alt: '托管数据中心园区',
      ctaPrimary: '咨询专家',
      ctaSecondary: '了解集装箱数据中心',
      ctaSecondaryLink: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    pains: {
      eyebrow: '行业挑战',
      title: '托管服务商面临的挑战',
      text: '容量需求增速超过建设速度。这是每一位运营商都在承受的压力。',
      items: [
        { title: '上市速度', text: '客户需求快过建设周期。预制化模块数周内交付可售容量，而非数年。' },
        { title: '分期扩容', text: '一次性建设过度占用资金。模块化分步扩容让容量与营收同步。' },
        { title: 'CAPEX 可预期', text: '工厂定价与交钥匙交付消除现场意外，压缩总体拥有成本。' },
      ],
    },
    products: {
      eyebrow: '我们交付什么',
      title: '运营商容量解决方案',
      text: '从单边缘机柜到多兆瓦预制化机房——作为集成、工厂测试的完整单元交付。',
      ctaLabel: '查看详情',
      items: [
        { title: '集装箱式数据中心', text: '20ft/40ft ISO 集装箱，集成电源、冷却与监控。', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: '微模块数据中心', text: '一体化紧凑模块，适用于小型机房与微型容量。', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: '精密冷却', text: '房间级、列间与机柜冷却，覆盖每一密度层级。', path: '/solutions/data-center-cooling-solutions/' },
      ],
    },
    need: {
      title: '在需求到来之前完成扩容',
      text: '分享您的扩容计划——数益科技预制化方案与您同步扩张，分期 CAPEX，缩短收入周期。',
      cta: '规划您的扩容',
    },
  },

  'cloud-hyperscale': {
    hero: {
      eyebrow: '云与超大规模',
      title: '云与超大规模基础设施',
      subtitle: '为云厂商与超大规模客户准备的 AI 就绪容量——液冷模块、高密度供电与关键基础设施 OEM 供货。',
      bannerImage: '/industry/industry-cloud-1920.webp',
      alt: '云基础设施可视化',
      ctaPrimary: '咨询专家',
      ctaSecondary: '了解 AI 数据中心',
      ctaSecondaryLink: '/solutions/data-center-solutions/ai-data-center/',
    },
    pains: {
      eyebrow: '行业挑战',
      title: '云与超大规模建设者面临的挑战',
      text: 'AI 负载改写密度、速度与供应的规则——这是建设者面对的现实。',
      items: [
        { title: 'AI 密度需求', text: 'GPU 集群功率突破单机架 100kW。风冷已不够用——液冷成为先决条件。' },
        { title: '快速容量周期', text: '容量翻倍快于建设周期。预制化、液冷模块大幅压缩交付时间。' },
        { title: '供应链确定性', text: 'OEM/ODM 伙伴必须规模化交付一致、经过测试的设备，交期可预期。' },
      ],
    },
    products: {
      eyebrow: '我们交付什么',
      title: 'AI 就绪基础设施',
      text: '为 AI 负载打造的高密度供电、液冷与模块化机房。',
      ctaLabel: '查看详情',
      items: [
        { title: 'AI 数据中心', text: '预制化 AI 基础设施，液冷支持单机架高达 120kW。', path: '/solutions/data-center-solutions/ai-data-center/' },
        { title: 'AICoolit 液冷', text: '面向 GPU 集群的 Direct-to-chip 与 CDU 液冷方案。', path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
        { title: 'UPS 与配电', text: '面向高密计算的高效 UPS 与配电系统。', path: '/products/critical-power/uninterruptible-power-supplies/' },
      ],
    },
    need: {
      title: '以超大规模速度构建 AI 容量',
      text: '告诉我们机架密度与时间线——我们交付液冷、工厂测试、到场即可承载算力的容量。',
      cta: '获取报价',
    },
  },

  internet: {
    hero: {
      eyebrow: '互联网平台',
      title: '互联网平台基础设施',
      subtitle: '为互联网与科技公司打造的自建数据中心与边缘节点——快速、高效、可扩展。',
      bannerImage: '/industry/industry-internet-1920.webp',
      alt: '全球互联网互联',
      ctaPrimary: '咨询专家',
      ctaSecondary: '了解行级模块化 DC',
      ctaSecondaryLink: '/solutions/data-center-solutions/row-modular-data-center/',
    },
    pains: {
      eyebrow: '行业挑战',
      title: '互联网平台面临的挑战',
      text: '平台增长每天都在考验基础设施。这些是切实的约束。',
      items: [
        { title: '快速扩张', text: '用户增长要求短周期扩容。预制化模块数周即可部署。' },
        { title: '运营效率', text: '能源成本是最大的优化杠杆。高效冷却与智能电力削减 OPEX。' },
        { title: '分布式边缘', text: '内容与服务向边缘迁移。小型模块适配 POP 与区域节点。' },
      ],
    },
    products: {
      eyebrow: '我们交付什么',
      title: '平台基础设施',
      text: '为自建容量的互联网公司提供模块化数据中心与边缘方案。',
      ctaLabel: '查看详情',
      items: [
        { title: '行级模块化 DC', text: '面向边缘与小型机房的单机柜与行级系统。', path: '/solutions/data-center-solutions/row-modular-data-center/' },
        { title: '集装箱式 DC', text: '快速部署的集装箱，用于容量与 POP 扩张。', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: '机柜与箱体', text: '覆盖各类站点的服务器机柜与户外机柜。', path: '/products/racks-enclosures/racks-cabinets/' },
      ],
    },
    need: {
      title: '规模扩张，不受施工拖延',
      text: '描述您的容量需求——我们交付数周上线的模块化、工厂测试基础设施。',
      cta: '启动您的项目',
    },
  },

  finance: {
    hero: {
      eyebrow: '金融服务',
      title: '金融服务业韧性基础设施',
      subtitle: '面向银行、交易所与交易系统的高可用电力与冷却——在这里，一秒钟的宕机都有代价。',
      bannerImage: '/industry/industry-finance-1920.webp',
      alt: '金融区天际线',
      ctaPrimary: '咨询专家',
      ctaSecondary: '了解 UPS 系统',
      ctaSecondaryLink: '/products/critical-power/uninterruptible-power-supplies/',
    },
    pains: {
      eyebrow: '行业挑战',
      title: '金融机构面临的挑战',
      text: '在金融服务业，基础设施故障以金钱计量。这就是利害所在。',
      items: [
        { title: '宕机零容忍', text: '交易与清算全天候运转。N+1 冗余与高可用拓扑是底线。' },
        { title: '监管合规', text: '审计要求可文档化的韧性基础设施。工厂测试简化认证。' },
        { title: '延迟与密度', text: '交易与 AI 分析推高密度。精密冷却为延迟敏感负载保驾护航。' },
      ],
    },
    products: {
      eyebrow: '我们交付什么',
      title: '任务关键电力与冷却',
      text: '为全天候金融负载打造的冗余、高效基础设施。',
      ctaLabel: '查看详情',
      items: [
        { title: 'UPS 系统', text: '双变换 UPS，支持 N+1 与 2N 配置。', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { title: '精密冷却', text: '房间级与列间冷却，营造可预期的热环境。', path: '/solutions/data-center-cooling-solutions/' },
        { title: '监控与管理', text: 'DCIM 与监控，基础设施全局可见。', path: '/products/monitoring-management/' },
      ],
    },
    need: {
      title: '为业务所需的在线率而设计',
      text: '告诉我们可用性目标——我们配置让交易不断的冗余电力与冷却。',
      cta: '与工程师沟通',
    },
  },

  government: {
    hero: {
      eyebrow: '政府与公共部门',
      title: '面向政府的安全基础设施',
      subtitle: '为公共服务与敏感负载提供可靠、受控的数据中心——合规、安全、值得信赖。',
      bannerImage: '/industry/industry-government-1920.webp',
      alt: '政务办公楼',
      ctaPrimary: '咨询专家',
      ctaSecondary: '了解微模块数据中心',
      ctaSecondaryLink: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    pains: {
      eyebrow: '行业挑战',
      title: '公共部门面临的挑战',
      text: '公共服务依赖不会宕机的基础设施。这些是硬性要求。',
      items: [
        { title: '安全与受控', text: '敏感数据要求受控环境与可追溯的供应链。' },
        { title: '公共服务可靠性', text: '面向市民的服务不能中断。N+1 基础设施与工厂测试保障连续性。' },
        { title: '预算纪律', text: '公共采购偏好可预期、合规且总成本清晰的方案。' },
      ],
    },
    products: {
      eyebrow: '我们交付什么',
      title: '可靠的政府基础设施',
      text: '面向公共部门负载的紧凑、可靠数据中心。',
      ctaLabel: '查看详情',
      items: [
        { title: '微模块数据中心', text: '适用于服务器机房与小型政务数据中心的一体化模块。', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: '集装箱式数据中心', text: '面向部委与机构的分期、安全容量。', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'UPS 与电力', text: '为公共服务连续性提供冗余电力。', path: '/products/critical-power/uninterruptible-power-supplies/' },
      ],
    },
    need: {
      title: '保障公共服务可靠交付',
      text: '告诉我们需求——我们提供合规、可靠、交付可预期的基础设施。',
      cta: '开始沟通',
    },
  },

  manufacturing: {
    hero: {
      eyebrow: '制造业',
      title: '制造业边缘基础设施',
      subtitle: '产线级韧算力与工业物联网基础设施——为车间而生，而非仅仅机房。',
      bannerImage: '/industry/industry-manufacturing-1920.webp',
      alt: '智能工厂产线',
      ctaPrimary: '咨询专家',
      ctaSecondary: '了解机柜冷却',
      ctaSecondaryLink: '/products/thermal-management/precision-air-conditioning/rack-cooling/',
    },
    pains: {
      eyebrow: '行业挑战',
      title: '制造企业面临的挑战',
      text: '车间是 IT 最严酷的运行环境。这些是必须扛住的条件。',
      items: [
        { title: '严酷环境', text: '粉尘、温差与振动要求坚固受保护的 IT 机柜。' },
        { title: '停机即停产', text: '产线停摆就是损失。可靠电力与冷却让生产数据不断流。' },
        { title: '边缘与 AI 落地', text: '工业 AI 与物联网需要贴近产线的本地算力——紧凑高效。' },
      ],
    },
    products: {
      eyebrow: '我们交付什么',
      title: '厂区级基础设施',
      text: '为工业环境打造的坚固电力、冷却与机柜。',
      ctaLabel: '查看详情',
      items: [
        { title: '机柜与箱体冷却', text: '严苛条件下机柜与户外机柜的冷却方案。', path: '/products/thermal-management/precision-air-conditioning/rack-cooling/' },
        { title: '户外机柜', text: '恶劣站点边缘算力的防护机柜。', path: '/products/racks-enclosures/outdoor-enclosures/' },
        { title: '行级模块化 DC', text: '厂区 IT 与边缘的紧凑系统。', path: '/solutions/data-center-solutions/row-modular-data-center/' },
      ],
    },
    need: {
      title: '让生产持续运转',
      text: '告诉我们车间环境——我们交付能在产线上生存的坚固边缘基础设施。',
      cta: '与工程师沟通',
    },
  },

  healthcare: {
    hero: {
      eyebrow: '医疗卫生',
      title: '医疗卫生基础设施',
      subtitle: '面向医院与区域健康云的可靠边缘与数据中心方案——可用性就是患者安全的保障。',
      bannerImage: '/industry/industry-healthcare-1920.webp',
      alt: '现代医院',
      ctaPrimary: '咨询专家',
      ctaSecondary: '了解微模块数据中心',
      ctaSecondaryLink: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    pains: {
      eyebrow: '行业挑战',
      title: '医疗机构面临的挑战',
      text: '临床系统全天候运转。这些是医疗 IT 的现实。',
      items: [
        { title: '患者数据必须在线', text: '临床系统 7×24 运行。可靠基础设施是患者安全的一部分。' },
        { title: '数据治理', text: '医疗数据要求本地处理与受控环境。' },
        { title: '空间与集成', text: '医院空间受限。紧凑模块嵌入现有建筑，无需大规模施工。' },
      ],
    },
    products: {
      eyebrow: '我们交付什么',
      title: '医疗级基础设施',
      text: '面向医院与区域健康云的紧凑、可靠电力与冷却。',
      ctaLabel: '查看详情',
      items: [
        { title: '微模块数据中心', text: '医院服务器机房的紧凑数据中心。', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: 'UPS 系统', text: '临床应用的持续电力。', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { title: '精密冷却', text: '医疗 IT 环境的可预期冷却。', path: '/solutions/data-center-cooling-solutions/' },
      ],
    },
    need: {
      title: '守护您交付的每一次医疗',
      text: '介绍您的设施情况——我们为临床系统提供可靠、节省空间的基础设施。',
      cta: '启动您的项目',
    },
  },
};
