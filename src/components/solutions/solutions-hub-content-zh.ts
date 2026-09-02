/**
 * Solutions hub — 中文。
 * @see solutions-hub-content.ts for type definitions.
 */

import type { SolutionsHubContent } from './solutions-hub-content';

export const SOLUTIONS_HUB_ZH: SolutionsHubContent = {
  hero: {
    eyebrow: '数据中心解决方案',
    title: '端到端数据中心解决方案',
    subtitle:
      '从液冷、模块化数据中心到精密冷却，数益科技打造完整、可扩展的基础设施，为您的数据提供不间断动力 —— 无论您身在何处。',
    bannerImage: '/resources/soeteck-data-center-banner-1.webp',
  },
  sectionIntro: {
    eyebrow: '我们的解决方案',
    title: '探索数益科技数据中心解决方案',
    subtitle:
      '每一个解决方案都专为快速部署、高密度与可衡量的能效而设计，由自有 OEM/ODM 制造与全球项目支持保驾护航。',
  },
  solutions: [
    {
      title: '液冷数据中心',
      description:
        'AI 级液冷，标准 ISO 集装箱；单柜功率 100kW+，全密封环路，数周交付，告别漫长土建。',
      image: '/resources/1-40-Foot-AI-Container-Data-Center-100kW-per-Rack.webp',
      alt: '数益液冷数据中心集装箱',
      path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
    },
    {
      title: '预制集装箱数据中心',
      description:
        '工厂预制集装箱数据中心，数周即可部署 —— 适合边缘、托管与快速容量扩展场景。',
      image: '/resources/20ft-prefabricated-container-data-center-front-view-3-1024x683.webp',
      alt: '数益预制集装箱数据中心',
      path: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    {
      title: '智能机柜',
      description:
        '一体化智能机柜，集成电源、冷却与监控 —— 完美适配小型机房与微模块。',
      image: '/resources/cabinet-data-center-7.webp',
      alt: '数益智能机柜',
      path: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    {
      title: '行级模块化数据中心',
      description:
        '可扩展的行级模块化数据中心，随算力增长 —— 覆盖机柜级与行级冷却架构。',
      image: '/resources/cabinet-modular-data-center-31.webp',
      alt: '数益行级模块化数据中心',
      path: '/solutions/data-center-solutions/row-modular-data-center/',
    },
    {
      title: '微模块数据中心',
      description:
        '冷/热通道封闭模块化数据中心，面向高密度、高能效部署场景。',
      image: '/resources/cabinet-modular-data-center-41.webp',
      alt: '数益微模块数据中心',
      path: '/solutions/data-center-solutions/aisle-modular-data-center/',
    },
    {
      title: '数据中心制冷解决方案',
      description:
        '全系列精密空调产品组合 —— 覆盖房间级、行级冷却、风墙与机柜冷却，匹配各类密度。',
      image: '/resources/Soeteck-chilled-water-room-cooling-system-38.2-265.8kW-4.webp',
      alt: '数益数据中心精密冷却解决方案',
      path: '/solutions/data-center-cooling-solutions/',
    },
    {
      title: '人工智能数据中心',
      description:
        '专为高密度 GPU 集群与液冷就绪而打造的 人工智能数据中心解决方案。',
      image: '/resources/2-40-Foot-AI-Container-Data-Center-60kW-per-Rack.webp',
      alt: '数益 人工智能数据中心解决方案',
      path: '/solutions/data-center-solutions/ai-data-center/',
    },
  ],
  industries: {
    eyebrow: '按行业',
    title: '各行业的数据中心解决方案',
    subtitle: '从电信运营商到 AI 超大规模客户 —— 数益科技以合适的密度、冷却与可靠性服务关键行业。',
    items: [
      {
        icon: 'telecom',
        name: '电信',
        description: '边缘与移动基础设施，快速延伸到任何地点。',
        image: '/resources/industry-telecom.webp',
        alt: '电信数据中心基础设施',
        path: '/solutions/telecom/',
      },
      {
        icon: 'colocation',
        name: '托管数据中心',
        description: '面向托管与 IDC 服务商的模块化扩容。',
        image: '/resources/industry-colocation.webp',
        alt: '托管数据中心基础设施',
        path: '/solutions/colocation/',
      },
      {
        icon: 'cloud',
        name: '云与超大规模',
        description: '云厂商与超大规模的快速容量扩展。',
        image: '/resources/industry-cloud.webp',
        alt: '云服务商基础设施',
        path: '/solutions/cloud-hyperscale/',
      },
      {
        icon: 'internet',
        name: '互联网',
        description: '互联网平台的自主建设数据中心。',
        image: '/resources/industry-internet.webp',
        alt: '互联网平台数据中心',
        path: '/solutions/internet/',
      },
      {
        icon: 'finance',
        name: '金融',
        description: '全天候交易系统的高可用计算与存储。',
        image: '/resources/industry-finance.webp',
        alt: '金融数据中心可靠性',
        path: '/solutions/finance/',
      },
      {
        icon: 'government',
        name: '政府',
        description: '公共服务与敏感数据的安全可控环境。',
        image: '/resources/industry-government.webp',
        alt: '政府安全基础设施',
        path: '/solutions/government/',
      },
      {
        icon: 'manufacturing',
        name: '制造',
        description: '生产与工业物联网的韧性边缘算力。',
        image: '/resources/industry-manufacturing.webp',
        alt: '工业制造数据中心',
        path: '/solutions/manufacturing/',
      },
      {
        icon: 'healthcare',
        name: '医疗',
        description: '医院与区域健康云的边缘高可用计算。',
        image: '/resources/industry-healthcare.webp',
        alt: '医疗基础设施',
        path: '/solutions/healthcare/',
      },
    ],
    exploreMore: {
      title: '探索更多',
      description: '您的行业不在这里？告诉我们您的需求，我们为您定制。',
      cta: '联系我们',
      path: '/contact-us/',
    },
  },
  cta: {
    eyebrow: '联系专家',
    title: '准备好打造您的数据中心解决方案了吗？',
    text: '告诉我们您的电源、冷却与密度需求 —— 我们的工程师将帮助您选择最适合的方案。',
    buttonLabel: '联系我们',
  },
};