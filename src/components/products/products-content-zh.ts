import type { ProductsContent } from './products-content';

export const PRODUCTS_ZH: ProductsContent = {
  heroTitle: '产品中心',
  heroDescription:
    '数益科技提供可靠的关键基础设施技术——从电源和冷却到机架、机柜和智能监控——旨在保护关键任务网络和数据中心的安全运行。',

  categories: [
    {
      slug: 'critical-power',
      title: '关键电源',
      description:
        '不间断电源、直流电源系统、配电设备、静态转换开关、母线槽和蓄电池解决方案，确保关键设备的持续运行。',
      image: '/resources/soeteck-critical-power-banner.webp',
      imageAlt: 'Soeteck 关键电源解决方案 — UPS、直流电源、配电',
      viewAllUrl: '/products/critical-power/',
      viewAllLabel: '查看全部关键电源',
      subcategories: [
        { name: 'UPS系统', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { name: '直流电源系统', path: '/products/critical-power/dc-power-systems/' },
        { name: '配电', path: '/products/critical-power/power-distribution/' },
        { name: '静态转换开关', path: '/products/critical-power/static-transfer-switches/' },
        { name: '母线槽', path: '/products/critical-power/busway-and-busduct/' },
        { name: '蓄电池', path: '/products/critical-power/battery/' },
      ],
    },
    {
      slug: 'thermal-management',
      title: '热管理',
      description:
        '精密空调、液冷、散热和自然冷却解决方案，适用于数据中心、电信机房和高密度计算环境。',
      image: '/resources/soeteck-thermal-management-banner.webp',
      imageAlt: 'Soeteck 热管理解决方案 — 精密冷却、液冷',
      viewAllUrl: '/products/thermal-management/',
      viewAllLabel: '查看全部热管理',
      subcategories: [
        { name: '液冷解决方案', path: '/products/thermal-management/liquid-cooling-solutions/' },
        { name: '精密空调', path: '/products/thermal-management/precision-air-conditioning/' },
        { name: '通信机柜空调', path: '/products/thermal-management/telecom-enclosure-air-conditioner/' },
        { name: '散热', path: '/products/thermal-management/heat-rejection/' },
        { name: '自由冷却冷水机组', path: '/products/thermal-management/free-cooling-chillers/' },
        { name: '蒸发式自由冷却', path: '/products/thermal-management/evaporative-free-cooling/' },
      ],
    },
    {
      slug: 'racks-enclosures',
      title: '机架与机柜',
      description:
        '服务器机架、户外机柜和集成解决方案，为关键IT和基础设施提供模块化支撑和保护。',
      image: '/resources/soeteck-racks-enclosures-banner.webp',
      imageAlt: 'Soeteck 机架与机柜 — 服务器机架、户外机柜',
      viewAllUrl: '/products/racks-enclosures/',
      viewAllLabel: '查看全部机架与机柜',
      subcategories: [
        { name: '机架和机柜', path: '/products/racks-enclosures/racks-cabinets/' },
        { name: '户外机柜', path: '/products/racks-enclosures/outdoor-enclosures/' },
        { name: '集成封闭系统', path: '/products/racks-enclosures/integrated-containments/' },
      ],
    },
    {
      slug: 'monitoring-management',
      title: '监控与管理',
      description:
        '基础设施监控、智能控制、环境传感器和集中管理系统，提高设备可用性和效率。',
      image: '/resources/soeteck-monitoring-management-banner.webp',
      imageAlt: 'Soeteck 监控与管理解决方案',
      viewAllUrl: '/products/monitoring-management/',
      viewAllLabel: '查看全部监控与管理',
      subcategories: [
        { name: '监控主机', path: '/products/monitoring-management/monitoring-host/' },
        { name: '环境传感器', path: '/products/monitoring-management/environmental-sensor/' },
        { name: '电池监控系统', path: '/products/monitoring-management/battery-monitoring-system/' },
        { name: '机架资产管理', path: '/products/monitoring-management/rack-asset-management/' },
        { name: 'KVM', path: '/products/monitoring-management/kvm/' },
      ],
    },
  ],
};