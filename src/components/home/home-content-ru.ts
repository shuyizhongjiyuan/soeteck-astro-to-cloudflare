import type { HomeContent } from './home-content';

export const HOME_RU: HomeContent = {
  hero: {
    slides: [
      {
        image: '/hero/hero-slide-1.png',
        eyebrow: 'Комплексные решения',
        title: 'Заводское изготовление.',
        titleAccent: 'Готов к установке.',
        subtitle: 'Полностью модульные контейнерные центры обработки данных — электропитание, охлаждение, пожаротушение и мониторинг — всё интегрировано, всё испытано на заводе, поставка как единый объект «под ключ» за недели, а не месяцы.',
        ctaPrimary: 'Смотреть решения',
        ctaPrimaryLink: '/ru/solutions/',
        ctaSecondary: 'Связаться с экспертом',
        ctaSecondaryLink: '/ru/contact-us/',
      },
      {
        image: '/hero/hero-slide-2.png',
        eyebrow: 'ИИ-готовое охлаждение',
        title: 'Жидкостное охлаждение для',
        titleAccent: 'ИИ-нагрузок',
        subtitle: 'Жидкостное охлаждение Direct-to-chip устраняет термическое дросселирование при плотности стоек 100 кВт+. Специально создано для кластеров обучения на GPU.',
        ctaPrimary: 'Подробнее об AICoolit',
        ctaPrimaryLink: '/ru/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
        ctaSecondary: 'Запросить расчёт',
        ctaSecondaryLink: '/ru/contact-us/',
      },
      {
        image: '/hero/hero-slide-3.png',
        eyebrow: 'Глобальная доставка',
        title: 'Заводские испытания.',
        titleAccent: 'Подключай и работай.',
        subtitle: 'С нашего завода на ваш объект за недели — а не месяцы. Развёртывание в 50+ странах, в любом климате, с любым стандартом электросети.',
        ctaPrimary: 'Смотреть продукцию',
        ctaPrimaryLink: '/ru/products/',
        ctaSecondary: 'Связаться с отделом продаж',
        ctaSecondaryLink: '/ru/contact-us/',
      },
    ],
  },

  aiInsights: {
    eyebrow: 'ИИ-революция',
    title: 'ИИ переписывает правила инфраструктуры',
    subtitle: 'Центры обработки данных, построенные для вчерашних нагрузок, не способны справиться с завтрашними ИИ-требованиями. Плотность энергопотребления утроилась. Тепловые нагрузки кардинально изменились. Отрасли нужен новый подход — и SOETECK его создаёт.',
    points: [
      { title: 'Плотность 100+ кВт на стойку', text: 'ИИ-кластеры обучения требуют плотности энергопотребления, на которую традиционная инфраструктура никогда не была рассчитана.' },
      { title: 'Жидкостное охлаждение — необходимость', text: 'Воздушное охлаждение достигло физических пределов. Жидкостное охлаждение Direct-to-chip — не опция, а обязательное условие для реализации ИИ.' },
      { title: 'Скорость развёртывания', text: 'Спрос на ИИ-мощности растёт вдвое быстрее, чем циклы строительства. Модульные заводские решения сокращают сроки с лет до недель.' },
    ],
    cta: 'Исследовать наши ИИ-решения',
    ctaLink: '/ru/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
  },

  industries: {
    eyebrow: 'Кому мы служим',
    title: 'Нам доверяют ключевые отрасли',
    text: 'От телеком-операторов до ИИ-гиперскейлеров — самые требовательные организации мира полагаются на SOETECK в вопросах критически важной энергетической и охлаждающей инфраструктуры.',
    items: [
      { icon: 'telecom', title: 'Телеком и операторы связи', image: { path: '/home/industry-telecom.png', alt: 'Телекоммуникационная инфраструктура ЦОД' }, ctaLink: '/ru/solutions/' },
      { icon: 'finance', title: 'Финансы и банки', image: { path: '/home/industry-finance.png', alt: 'Надёжность ЦОД для финансового сектора' }, ctaLink: '/ru/solutions/' },
      { icon: 'government', title: 'Государственный сектор', image: { path: '/home/industry-government.png', alt: 'Безопасная государственная инфраструктура' }, ctaLink: '/ru/solutions/' },
      { icon: 'cloud', title: 'Облачные и интернет-сервисы', image: { path: '/home/industry-cloud.png', alt: 'Инфраструктура облачных провайдеров' }, ctaLink: '/ru/solutions/' },
      { icon: 'ai', title: 'ИИ и большие модели', image: { path: '/home/industry-gpu.png', alt: 'ИИ вычислительная инфраструктура' }, ctaLink: '/ru/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
      { icon: 'manufacturing', title: 'Производство', image: { path: '/home/industry-manufacturing.png', alt: 'Промышленный ЦОД для производства' }, ctaLink: '/ru/solutions/' },
      { icon: 'submarine', title: 'Станции подводных кабелей', image: { path: '/home/industry-submarine.png', alt: 'Инфраструктура станции подводного кабеля' }, ctaLink: '/ru/solutions/' },
    ],
  },

  solutions: {
    eyebrow: 'Комплексные решения',
    title: 'Полные решения для ЦОД',
    text: 'От одиночных стоек до мульти-мегаваттных кластеров — спроектированные, испытанные на заводе и поставленные как полностью интегрированные модули.',
    cards: [
      {
        title: 'Контейнерный ЦОД',
        text: 'Полноценный центр обработки данных, размещённый в 20- или 40-футовом ISO-контейнере. Электропитание, охлаждение, пожаротушение и мониторинг — всё интегрировано, всё испытано на заводе.',
        image: { path: '/resources/prefabricated-container-data-center-solution-home.webp', alt: 'Контейнерный ЦОД' },
        features: ['Поставка 8–12 недель', 'Для улицы и помещений', 'Резервирование N+1 в стандартной комплектации'],
        cta: 'Подробнее',
        ctaLink: '/ru/solutions/data-center-solutions/prefabricated-container-data-center/',
      },
      {
        title: 'Микромодульный ЦОД',
        text: 'Модульная масштабируемая архитектура для средней плотности размещения в помещении. Модули поставляются с интегрированным охлаждением и распределением питания.',
        image: { path: '/resources/cabinet-data-center-solution-home.webp', alt: 'Микромодульный ЦОД' },
        features: ['Гибкое размещение в помещении', 'Поэтапное масштабирование', 'Встроенный мониторинг'],
        cta: 'Подробнее',
        ctaLink: '/ru/solutions/data-center-solutions/cabinet-modular-data-center/',
      },
      {
        title: 'Рядные модульные решения',
        text: 'Специализированные системы одиночных и рядных стоек для граничных вычислений, небольших ИТ-комнат и распределённой инфраструктуры.',
        image: { path: '/resources/row-modular-data-center-solution-1.webp', alt: 'Рядный модульный ЦОД' },
        features: ['Сверхкомпактное исполнение', 'Энергоэффективное охлаждение', 'Удалённое управление 24/7'],
        cta: 'Подробнее',
        ctaLink: '/ru/solutions/data-center-solutions/row-modular-data-center/',
      },
    ],
  },

  productLines: {
    eyebrow: 'Категории продукции',
    title: 'Наше производство',
    items: [
      { icon: 'ups', title: 'Системы ИБП', ctaLink: '/ru/products/critical-power/' },
      { icon: 'cooling', title: 'Прецизионное охлаждение', ctaLink: '/ru/products/thermal-management/' },
      { icon: 'pdu', title: 'Распределение питания', ctaLink: '/ru/products/critical-power/' },
      { icon: 'monitoring', title: 'DCIM и мониторинг', ctaLink: '/ru/products/' },
      { icon: 'enclosure', title: 'Стойки и шкафы', ctaLink: '/ru/products/' },
      { icon: 'battery', title: 'Накопители энергии', ctaLink: '/ru/products/critical-power/' },
    ],
  },

  productCategories: {
    eyebrow: 'Продажа продукции',
    title: 'Каталог продукции',
    groups: [
      {
        label: 'Прецизионное охлаждение',
        items: [
          { title: 'Прецизионный кондиционер для серверной', image: { path: '/resources/room-chilled-water-cooling-home-11-768x768.webp', alt: 'Прецизионный кондиционер для серверной' }, hoverImage: { path: '/resources/room-chilled-water-cooling-home-3-768x768.webp', alt: 'Водяное охлаждение серверной' }, ctaLink: '/ru/products/thermal-management/precision-air-conditioning/room-cooling/' },
          { title: 'Прецизионный кондиционер рядного типа', image: { path: '/resources/Inrow-cooling-split-DX-home-2-768x768.webp', alt: 'Прецизионный кондиционер рядного типа' }, hoverImage: { path: '/resources/Inrow-cooling-split-DX-home-1-768x768.webp', alt: 'Рядное охлаждение' }, ctaLink: '/ru/products/thermal-management/precision-air-conditioning/in-row-cooling/' },
          { title: 'Прецизионный кондиционер для стойки', image: { path: '/resources/rack-cooling-1.webp', alt: 'Прецизионный кондиционер для стойки' }, hoverImage: { path: '/resources/rack-cooling-4-768x768.webp', alt: 'Охлаждение стойки' }, ctaLink: '/ru/products/thermal-management/precision-air-conditioning/rack-cooling/' },
          { title: 'Кондиционер для уличного шкафа', image: { path: '/resources/outdoor-enclosure-cooling-home-2-768x768.webp', alt: 'Прецизионный кондиционер для уличного шкафа' }, hoverImage: { path: '/resources/outdoor-enclosure-cooling-home-1-768x768.webp', alt: 'Охлаждение шкафа' }, ctaLink: '/ru/products/thermal-management/precision-air-conditioning/telecom-enclosure-air-conditioner/' },
        ],
      },
      {
        label: 'Резервное электропитание',
        items: [
          { title: 'Источники бесперебойного питания', image: { path: '/resources/UPS-homepage-1-768x768.webp', alt: 'Система ИБП' }, hoverImage: { path: '/resources/UPS-homepage-2-768x768.webp', alt: 'Система ИБП' }, ctaLink: '/ru/products/critical-power/uninterruptible-power-supplies/' },
          { title: 'Система постоянного тока', image: { path: '/resources/dc-power-system-1-768x768.webp', alt: 'Система питания постоянного тока' }, hoverImage: { path: '/resources/dc-power-system-2-768x768.webp', alt: 'Система питания постоянного тока' }, ctaLink: '/ru/products/critical-power/dc-power-systems/' },
          { title: 'Распределительные щиты (PDU)', image: { path: '/resources/PDU-home-1-768x768.webp', alt: 'Распределительный щит питания' }, hoverImage: { path: '/resources/PDU-home-2-768x768.webp', alt: 'PDU' }, ctaLink: '/ru/products/critical-power/power-distribution/' },
          { title: 'Аккумуляторные батареи', image: { path: '/resources/SOETECK-Gel-Battery-home-1-768x768.png', alt: 'Аккумуляторный накопитель энергии' }, hoverImage: { path: '/resources/SOETECK-Gel-Battery-home-2-768x768.webp', alt: 'Аккумуляторная батарея' }, ctaLink: '/ru/products/critical-power/battery/' },
        ],
      },
    ],
  },

  services: {
    eyebrow: 'Полный цикл поставки',
    title: 'От проекта до запуска',
    text: 'Один партнёр, один контракт, одна команда. SOETECK управляет всем процессом — от совместного проектирования через заводские испытания до ввода в эксплуатацию на объекте.',
    image: { path: '/resources/soeteck-factory-1.jpg', alt: 'Производственный комплекс SOETECK' },
    steps: [
      { num: '01', title: 'Проектирование', text: 'Совместная разработка с 3D-моделированием и CFD-моделированием тепловых процессов.' },
      { num: '02', title: 'Производство', text: 'Собственное производство ИБП, систем охлаждения, PDU и шкафов.' },
      { num: '03', title: 'Интеграция', text: 'Сборка и настройка на уровне системы на нашем заводе.' },
      { num: '04', title: 'Испытания', text: 'Полнонагрузочные испытания, термовалидация и проверка резервирования.' },
      { num: '05', title: 'Логистика', text: 'Безопасная глобальная логистика с контролем «от двери до двери».' },
      { num: '06', title: 'Ввод в эксплуатацию', text: 'Монтаж на объекте, пусконаладка и обучение персонала.' },
    ],
  },

  scenarios: {
    eyebrow: 'Области применения',
    title: 'Создано для самых сложных условий',
    text: 'Будь то влажность вблизи станции подводного кабеля или жара пустынного удалённого объекта — SOETECK обеспечивает надёжную инфраструктуру там, где она нужна.',
    items: [
      { title: 'Станции подводных кабелей', text: 'Высоконадёжная, коррозионностойкая инфраструктура для критических подводных узлов связи.', image: { path: '/home/scenario-submarine.png', alt: 'Станция подводного кабеля' }, tags: ['Высокая надёжность', 'Антикоррозийная защита'] },
      { title: 'Граничные вычисления и 5G', text: 'Компактные, быстро развёртываемые микро-ЦОД для граничных вычислений с низкой задержкой.', image: { path: '/home/scenario-edge.png', alt: 'Развёртывание граничных вычислений' }, tags: ['Компактность', 'Быстрое развёртывание'] },
      { title: 'Экстремальный климат', text: 'Защита от песка, жары и холода — разработано для любой среды на Земле.', image: { path: '/home/scenario-climate.png', alt: 'ЦОД в экстремальном климате' }, tags: ['Пустыня', 'Тропики', 'Арктика'] },
      { title: 'Аварийное восстановление', text: 'Модули, испытанные на заводе, разворачиваются за недели, а не месяцы, когда простой недопустим.', image: { path: '/home/scenario-emergency.png', alt: 'Аварийно-восстановительный ЦОД' }, tags: ['Быстрое восстановление', 'Предварительно испытано'] },
      { title: 'Площадки с ограниченным пространством', text: 'Решения для крыш, городских помещений и интерьеров, максимизирующие мощность при минимальной площади.', image: { path: '/home/scenario-rooftop.png', alt: 'ЦОД с ограниченным пространством' }, tags: ['Крыша', 'Город', 'Компактность'] },
      { title: 'Отдалённые и автономные объекты', text: 'Автономная инфраструктура для горнодобычи, нефтегазовой отрасли и удалённых объектов.', image: { path: '/home/scenario-remote.png', alt: 'Отдалённый автономный ЦОД' }, tags: ['Автономность', 'Самодостаточность'] },
    ],
  },

  timeline: {
    eyebrow: 'Полный цикл поставки',
    title: 'Один партнёр. От проекта до запуска.',
    text: 'Проектирование, производство, интеграция, испытания, логистика, монтаж — каждый этап под контролем SOETECK. Никакого перекладывания ответственности между подрядчиками.',
    steps: [
      { num: '01', icon: 'design', title: 'Проектирование', text: 'Совместная разработка с 3D-моделированием и CFD-моделированием тепловых процессов.' },
      { num: '02', icon: 'manufacture', title: 'Производство', text: 'Собственное производство ИБП, систем охлаждения, PDU и шкафов.' },
      { num: '03', icon: 'integrate', title: 'Интеграция', text: 'Сборка и настройка на уровне системы на нашем заводе.' },
      { num: '04', icon: 'test', title: 'Испытания', text: 'Полнонагрузочные испытания, термовалидация и проверка резервирования.' },
      { num: '05', icon: 'ship', title: 'Логистика', text: 'Безопасная глобальная логистика с контролем «от двери до двери».' },
      { num: '06', icon: 'install', title: 'Ввод в эксплуатацию', text: 'Монтаж на объекте, пусконаладка и обучение персонала.' },
    ],
  },

  projects: {
    eyebrow: 'Глобальный опыт',
    title: 'Нам доверяют там, где время простоя недопустимо',
    text: 'От пустынь Ближнего Востока до тропиков Юго-Восточной Азии — ЦОД SOETECK обеспечивают круглосуточную работу критически важной инфраструктуры.',
    cards: [
      {
        title: 'Аварийное восстановление Saudi Telecom',
        location: 'Эр-Рияд, Саудовская Аравия',
        metric: '10',
        metricLabel: 'недель до запуска',
        text: 'Полностью контейнеризированный ЦОД аварийного восстановления для критических операций Saudi Telecom. Нагрузка 400 кВт, резервирование N+1.',
        image: { path: '/resources/prefab-modular-data-center-of-Saudi-Telecom-0.webp', alt: 'ЦОД аварийного восстановления Saudi Telecom' },
        cta: 'Смотреть кейс',
        ctaLink: '/ru/case-studies/',
      },
      {
        title: 'Региональная граничная сеть',
        location: 'Юго-Восточная Азия',
        metric: '12',
        metricLabel: 'объектов развёрнуто',
        text: 'Распределённые микромодульные ЦОД на 12 объектах для регионального телеком-оператора.',
        image: { path: '/resources/soeteck-racks-and-cabinets.webp', alt: 'Развёртывание граничных вычислений в Юго-Восточной Азии' },
        cta: 'Смотреть кейс',
        ctaLink: '/ru/case-studies/',
      },
    ],
  },

  whySoeteck: {
    eyebrow: 'Преимущество SOETECK',
    title: 'Почему самые требовательные операторы выбирают нас',
    text: 'Дело не только в том, что мы производим — но и в том, как мы это делаем, и кто за этим стоит.',
    items: [
      { icon: 'factory', title: 'Производитель, а не посредник', text: 'Мы сами проектируем и производим ключевые компоненты. Никаких непрозрачных цепочек поставок, никаких наценок.' },
      { icon: 'accountability', title: 'Единая ответственность', text: 'Один контракт, одна команда, один ответственный. От проектирования до ввода в эксплуатацию — SOETECK управляет всей поставкой.' },
      { icon: 'global', title: 'ДНК глобального развёртывания', text: '50+ стран, любой климат, любой стандарт электросети. Мы решили задачи, которые проваливают другие проекты.' },
      { icon: 'speed', title: 'Скорость без компромиссов', text: 'Заводская предсборка и испытания сокращают годы строительных работ на объекте до недель.' },
    ],
    stats: [
      { value: '2000', suffix: '+', label: 'Реализованных проектов' },
      { value: '50', suffix: '+', label: 'Стран присутствия' },
      { value: '20', suffix: '+', label: 'Лет инноваций' },
      { value: '8', suffix: '–12 нед.', label: 'Срок поставки' },
    ],
    certs: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'Сертификация CE', '20+ патентов'],
  },

  news: {
    eyebrow: 'Новости и аналитика',
    title: 'Отраслевая аналитика и новости компании',
    viewAllLabel: 'Все статьи',
    viewAllLink: '/ru/news-and-insights/',
  },

  cta: {
    eyebrow: 'Начните проект',
    title: 'Готовы создать ИИ-готовый ЦОД?',
    text: 'Расскажите нам о ваших требованиях — электропитание, охлаждение, площадь, сроки. Мы спроектируем оптимальное решение и поставим его «под ключ».',
    cards: [
      { icon: 'products', title: 'Каталог продукции', text: 'Исследуйте полный ассортимент систем электропитания, охлаждения и шкафов собственного производства.', cta: 'Смотреть продукцию', ctaLink: '/ru/products/' },
      { icon: 'solutions', title: 'Индивидуальное решение', text: 'Получите рекомендацию, адаптированную под вашу нагрузку, площадку и требования к мощности.', cta: 'Консультация эксперта', ctaLink: '/ru/contact-us/' },
      { icon: 'engineering', title: 'Связь с инженерами', text: 'Общайтесь напрямую с нашей инженерной командой по сложным проектам интеграции и строительства.', cta: 'Отправить запрос', ctaLink: '/ru/contact-us/' },
    ],
  },
};
