import type { ProductsContent } from './products-content';

export const PRODUCTS_PT: ProductsContent = {
  heroTitle: 'Produtos',
  heroDescription:
    'A Soeteck oferece tecnologias confiáveis de infraestrutura crítica — desde energia e resfriamento até racks, gabinetes e monitoramento inteligente — projetadas para proteger redes e data centers de missão crítica.',

  categories: [
    {
      slug: 'critical-power',
      title: 'Energia Crítica',
      description:
        'Sistemas de alimentação ininterrupta, sistemas de corrente contínua, distribuição de energia, transferência estática, busway e baterias para garantir a operação contínua de equipamentos críticos.',
      image: '/resources/soeteck-critical-power.webp',
      imageAlt: 'Soluções Soeteck de Energia Crítica — UPS, corrente contínua, distribuição',
      viewAllUrl: '/products/critical-power/',
      viewAllLabel: 'Ver toda Energia Crítica',
      subcategories: [
        { name: 'Sistemas UPS', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { name: 'Sistemas de Corrente Contínua', path: '/products/critical-power/dc-power-systems/' },
        { name: 'Distribuição de Energia', path: '/products/critical-power/power-distribution/' },
        { name: 'Chaves de Transferência Estática', path: '/products/critical-power/static-transfer-switches/' },
        { name: 'Busway e Busduct', path: '/products/critical-power/busway-and-busduct/' },
        { name: 'Baterias', path: '/products/critical-power/battery/' },
      ],
    },
    {
      slug: 'thermal-management',
      title: 'Gerenciamento Térmico',
      description:
        'Soluções de ar condicionado de precisão, resfriamento líquido, rejeição de calor e resfriamento gratuito para data centers, salas de telecomunicações e ambientes de computação de alta densidade.',
      image: '/resources/soeteck-thermal-management.webp',
      imageAlt: 'Soluções Soeteck de Gerenciamento Térmico — resfriamento de precisão, resfriamento líquido',
      viewAllUrl: '/products/thermal-management/',
      viewAllLabel: 'Ver todo Gerenciamento Térmico',
      subcategories: [
        { name: 'Soluções de Resfriamento Líquido', path: '/products/thermal-management/liquid-cooling-solutions/' },
        {
          name: 'Ar Condicionado de Precisão',
          path: '/products/thermal-management/precision-air-conditioning/',
          children: [
            { name: 'Refrigeração de Sala', path: '/products/thermal-management/precision-air-conditioning/room-cooling/' },
            { name: 'Refrigeração entre Fileiras', path: '/products/thermal-management/precision-air-conditioning/in-row-cooling/' },
            { name: 'Refrigeração de Rack', path: '/products/thermal-management/precision-air-conditioning/rack-cooling/' },
            { name: 'Refrigeração com Fluido Bombeado', path: '/products/thermal-management/precision-air-conditioning/pumped-refrigerant-cooling/' },
          ],
        },
        { name: 'Ar Condicionado para Telecom', path: '/products/thermal-management/telecom-enclosure-air-conditioner/' },
        { name: 'Rejeição de Calor', path: '/products/thermal-management/heat-rejection/' },
        { name: 'Chillers de Resfriamento Natural', path: '/products/thermal-management/free-cooling-chillers/' },
        { name: 'Resfriamento Evaporativo Natural', path: '/products/thermal-management/evaporative-free-cooling/' },
      ],
    },
    {
      slug: 'racks-enclosures',
      title: 'Racks e Gabinetes',
      description:
        'Racks de servidor, gabinetes externos e soluções integradas que fornecem suporte modular e proteção para infraestrutura crítica de TI e instalações.',
      image: '/resources/soeteck-racks-enclosures.webp',
      imageAlt: 'Soeteck Racks e Gabinetes — racks de servidor, gabinetes externos',
      viewAllUrl: '/products/racks-enclosures/',
      viewAllLabel: 'Ver todos Racks e Gabinetes',
      subcategories: [
        { name: 'Racks e Armários', path: '/products/racks-enclosures/racks-cabinets/' },
        { name: 'Gabinetes Externos', path: '/products/racks-enclosures/outdoor-enclosures/' },
      ],
    },
    {
      slug: 'monitoring-management',
      title: 'Monitoramento e Gerenciamento',
      description:
        'Monitoramento de infraestrutura, controles inteligentes, sensores ambientais e sistemas de gerenciamento centralizados para aumentar a disponibilidade e eficiência dos equipamentos.',
      image: '/resources/soeteck-monitoring-management.webp',
      imageAlt: 'Soluções Soeteck de Monitoramento e Gerenciamento',
      viewAllUrl: '/products/monitoring-management/',
      viewAllLabel: 'Ver todo Monitoramento e Gerenciamento',
      subcategories: [
        { name: 'Host de Monitoramento', path: '/products/monitoring-management/monitoring-host/' },
        { name: 'Sensor Ambiental', path: '/products/monitoring-management/environmental-sensor/' },
        { name: 'Sistema de Monitoramento de Bateria', path: '/products/monitoring-management/battery-monitoring-system/' },
        { name: 'Gestão de Ativos de Rack', path: '/products/monitoring-management/rack-asset-management/' },
        { name: 'KVM', path: '/products/monitoring-management/kvm/' },
      ],
    },
  ],

  cta: {
    eyebrow: 'Fale conosco',
    title: 'Vamos construir sua infraestrutura crítica juntos',
    text: 'Fale com um especialista Soeteck sobre soluções de energia, refrigeração, racks e monitoramento para o seu próximo projeto.',
    buttonLabel: 'Entrar em contato',
  },
};