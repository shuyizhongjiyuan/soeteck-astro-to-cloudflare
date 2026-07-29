import type { ProductsContent } from './products-content';

export const PRODUCTS_RU: ProductsContent = {
  heroTitle: 'Продукция',
  heroDescription:
    'Soeteck предлагает надежные технологии критической инфраструктуры — от электропитания и охлаждения до стоек, шкафов и интеллектуального мониторинга — для защиты критически важных сетей и центров обработки данных.',

  categories: [
    {
      slug: 'critical-power',
      title: 'Критическое электропитание',
      description:
        'Источники бесперебойного питания, системы постоянного тока, распределение электроэнергии, статические переключатели, шинопроводы и аккумуляторные решения для непрерывной работы критического оборудования.',
      image: '/resources/soeteck-critical-power-banner.webp',
      imageAlt: 'Soeteck решения для критического электропитания — ИБП, постоянный ток, распределение',
      viewAllUrl: '/products/critical-power/',
      viewAllLabel: 'Все решения электропитания',
      subcategories: [
        { name: 'Источники бесперебойного питания', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { name: 'Системы постоянного тока', path: '/products/critical-power/dc-power-systems/' },
        { name: 'Распределение питания', path: '/products/critical-power/power-distribution/' },
        { name: 'Статические переключатели', path: '/products/critical-power/static-transfer-switches/' },
        { name: 'Шинопроводы', path: '/products/critical-power/busway-and-busduct/' },
        { name: 'Аккумуляторы', path: '/products/critical-power/battery/' },
      ],
    },
    {
      slug: 'thermal-management',
      title: 'Тепловое управление',
      description:
        'Решения для прецизионного кондиционирования, жидкостного охлаждения, отвода тепла и естественного охлаждения для центров обработки данных, телекоммуникационных помещений и сред с высокой плотностью вычислений.',
      image: '/resources/soeteck-thermal-management-banner.webp',
      imageAlt: 'Soeteck решения для теплового управления — прецизионное охлаждение, жидкостное охлаждение',
      viewAllUrl: '/products/thermal-management/',
      viewAllLabel: 'Все решения теплового управления',
      subcategories: [
        { name: 'Решения для жидкостного охлаждения', path: '/products/thermal-management/liquid-cooling-solutions/' },
        { name: 'Прецизионные кондиционеры', path: '/products/thermal-management/precision-air-conditioning/' },
        { name: 'Кондиционеры для телекоммуникационных шкафов', path: '/products/thermal-management/telecom-enclosure-air-conditioner/' },
        { name: 'Отвод тепла', path: '/products/thermal-management/heat-rejection/' },
        { name: 'Чиллеры свободного охлаждения', path: '/products/thermal-management/free-cooling-chillers/' },
        { name: 'Испарительное свободное охлаждение', path: '/products/thermal-management/evaporative-free-cooling/' },
      ],
    },
    {
      slug: 'racks-enclosures',
      title: 'Стойки и корпуса',
      description:
        'Серверные стойки, уличные корпуса и интегрированные решения, обеспечивающие модульную поддержку и защиту критической ИТ-инфраструктуры.',
      image: '/resources/soeteck-racks-enclosures-banner.webp',
      imageAlt: 'Soeteck стойки и корпуса — серверные стойки, уличные корпуса',
      viewAllUrl: '/products/racks-enclosures/',
      viewAllLabel: 'Все стойки и корпуса',
      subcategories: [
        { name: 'Стойки и шкафы', path: '/products/racks-enclosures/racks-cabinets/' },
        { name: 'Уличные корпуса', path: '/products/racks-enclosures/outdoor-enclosures/' },
        { name: 'Интегрированные ограждения', path: '/products/racks-enclosures/integrated-containments/' },
      ],
    },
    {
      slug: 'monitoring-management',
      title: 'Мониторинг и управление',
      description:
        'Системы мониторинга инфраструктуры, интеллектуального управления, датчики окружающей среды и централизованные системы для повышения доступности и эффективности оборудования.',
      image: '/resources/soeteck-monitoring-management-banner.webp',
      imageAlt: 'Soeteck решения для мониторинга и управления',
      viewAllUrl: '/products/monitoring-management/',
      viewAllLabel: 'Все решения мониторинга',
      subcategories: [
        { name: 'Хост мониторинга', path: '/products/monitoring-management/monitoring-host/' },
        { name: 'Датчики окружающей среды', path: '/products/monitoring-management/environmental-sensor/' },
        { name: 'Система мониторинга батарей', path: '/products/monitoring-management/battery-monitoring-system/' },
        { name: 'Управление активами стойки', path: '/products/monitoring-management/rack-asset-management/' },
        { name: 'KVM', path: '/products/monitoring-management/kvm/' },
      ],
    },
  ],
};