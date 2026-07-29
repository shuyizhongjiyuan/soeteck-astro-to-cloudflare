import type { ProductsContent } from './products-content';

export const PRODUCTS_ES: ProductsContent = {
  heroTitle: 'Productos',
  heroDescription:
    'Soeteck ofrece tecnologías confiables de infraestructura crítica — desde energía y refrigeración hasta racks, gabinetes y monitoreo inteligente — diseñadas para proteger redes y centros de datos de misión crítica.',

  categories: [
    {
      slug: 'critical-power',
      title: 'Energía Crítica',
      description:
        'Sistemas de alimentación ininterrumpida, sistemas de corriente continua, distribución de energía, conmutadores de transferencia estática, busway y baterías para garantizar la operación continua de equipos críticos.',
      image: '/resources/soeteck-critical-power-banner.webp',
      imageAlt: 'Soluciones Soeteck de Energía Crítica — UPS, corriente continua, distribución',
      viewAllUrl: '/products/critical-power/',
      viewAllLabel: 'Ver toda Energía Crítica',
      subcategories: [
        { name: 'Sistemas UPS', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { name: 'Sistemas de Corriente Continua', path: '/products/critical-power/dc-power-systems/' },
        { name: 'Distribución de Energía', path: '/products/critical-power/power-distribution/' },
        { name: 'Conmutadores de Transferencia Estática', path: '/products/critical-power/static-transfer-switches/' },
        { name: 'Busway y Busduct', path: '/products/critical-power/busway-and-busduct/' },
        { name: 'Baterías', path: '/products/critical-power/battery/' },
      ],
    },
    {
      slug: 'thermal-management',
      title: 'Gestión Térmica',
      description:
        'Soluciones de aire acondicionado de precisión, refrigeración líquida, rechazo de calor y enfriamiento gratuito para centros de datos, salas de telecomunicaciones y entornos de computación de alta densidad.',
      image: '/resources/soeteck-thermal-management-banner.webp',
      imageAlt: 'Soluciones Soeteck de Gestión Térmica — refrigeración de precisión, refrigeración líquida',
      viewAllUrl: '/products/thermal-management/',
      viewAllLabel: 'Ver toda Gestión Térmica',
      subcategories: [
        { name: 'Soluciones de Refrigeración Líquida', path: '/products/thermal-management/liquid-cooling-solutions/' },
        { name: 'Aire Acondicionado de Precisión', path: '/products/thermal-management/precision-air-conditioning/' },
        { name: 'Aire Acondicionado para Telecom', path: '/products/thermal-management/telecom-enclosure-air-conditioner/' },
        { name: 'Rechazo de Calor', path: '/products/thermal-management/heat-rejection/' },
        { name: 'Chillers de Enfriamiento Gratuito', path: '/products/thermal-management/free-cooling-chillers/' },
        { name: 'Enfriamiento Evaporativo Gratuito', path: '/products/thermal-management/evaporative-free-cooling/' },
      ],
    },
    {
      slug: 'racks-enclosures',
      title: 'Racks y Gabinetes',
      description:
        'Racks de servidor, gabinetes exteriores y soluciones integradas que brindan soporte modular y protección para infraestructura crítica de TI e instalaciones.',
      image: '/resources/soeteck-racks-enclosures-banner.webp',
      imageAlt: 'Soeteck Racks y Gabinetes — racks de servidor, gabinetes exteriores',
      viewAllUrl: '/products/racks-enclosures/',
      viewAllLabel: 'Ver todos Racks y Gabinetes',
      subcategories: [
        { name: 'Racks y Armarios', path: '/products/racks-enclosures/racks-cabinets/' },
        { name: 'Gabinetes Exteriores', path: '/products/racks-enclosures/outdoor-enclosures/' },
        { name: 'Contenciones Integradas', path: '/products/racks-enclosures/integrated-containments/' },
      ],
    },
    {
      slug: 'monitoring-management',
      title: 'Monitoreo y Gestión',
      description:
        'Monitoreo de infraestructura, controles inteligentes, sensores ambientales y sistemas de gestión centralizados para aumentar la disponibilidad y eficiencia del equipo.',
      image: '/resources/soeteck-monitoring-management-banner.webp',
      imageAlt: 'Soluciones Soeteck de Monitoreo y Gestión',
      viewAllUrl: '/products/monitoring-management/',
      viewAllLabel: 'Ver todo Monitoreo y Gestión',
      subcategories: [
        { name: 'Host de Monitoreo', path: '/products/monitoring-management/monitoring-host/' },
        { name: 'Sensor Ambiental', path: '/products/monitoring-management/environmental-sensor/' },
        { name: 'Sistema de Monitoreo de Baterías', path: '/products/monitoring-management/battery-monitoring-system/' },
        { name: 'Gestión de Activos de Rack', path: '/products/monitoring-management/rack-asset-management/' },
        { name: 'KVM', path: '/products/monitoring-management/kvm/' },
      ],
    },
  ],
};