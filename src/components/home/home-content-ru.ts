import type { HomeContent } from './home-content';

export const HOME_RU: HomeContent = {
  hero: {
    slides: [
      {
        image: '/hero/hero-slide-1.webp',

        eyebrow: 'SOETECK · Поставщик модульных ЦОД',

        title: 'Доставка за недели,',

        titleAccent: 'а не за годы.',

        subtitle: 'Модульные контейнерные, шкафные, рядные и однокорпусные ЦОД от SOETECK — с питанием, охлаждением и пожаротушением, интегрированными на заводе; каждый блок готов к запуску в день прибытия — для ИИ-кластеров, периферии и аварийного восстановления по всему миру.',

        ctaPrimary: 'Смотреть решения',

        ctaPrimaryLink: '/ru/solutions/',

        ctaSecondary: 'Связаться с экспертом',

        ctaSecondaryLink: '/ru/contact-us/',

      },
      {
        image: '/hero/hero-slide-2.webp',

        eyebrow: 'Полный стек модульной ИИ-инфраструктуры',

        title: 'ИИ-ЦОД,',

        titleAccent: 'спроектированные как единое целое.',

        subtitle: 'Шкафы GPU превышают 100 кВт — воздушное охлаждение не справляется. Мы проектируем питание, жидкостное охлаждение, стойки и мониторинг как единый ИИ-стек и поставляем модульно под ключ, готовым к работе в день прибытия.',

        ctaPrimary: 'Как это устроено',

        ctaPrimaryLink: '/ru/solutions/data-center-solutions/ai-data-center/',

        ctaSecondary: 'Запросить расчёт',

        ctaSecondaryLink: '/ru/contact-us/',

      },
      {
        image: '/hero/hero-slide-1.webp',

        eyebrow: 'Партнёр под ключ',

        title: 'Сквозная доставка,',

        titleAccent: 'единая ответственность.',

        subtitle: 'Одна команда отвечает за всё: проектирование, заводское производство, глобальную доставку, пусконаладку и поддержку — вы работаете с одним подотчётным партнёром.',

        ctaPrimary: 'Связаться с экспертом',

        ctaPrimaryLink: '/ru/contact-us/',

        ctaSecondary: 'Связаться с отделом продаж',

        ctaSecondaryLink: '/ru/contact-us/',

      },
      {
        image: '/hero/hero-slide-3.webp',

        eyebrow: 'Глобальное доказательство',

        title: 'Развёрнуто в',

        titleAccent: '50+ странах.',

        subtitle: 'От зноя пустынь до арктического холода, на всех распространённых стандартах электросетей наши блоки держат ИИ-платформы, периферийные узлы и критические объекты работающими круглосуточно.',

        ctaPrimary: 'Читать кейсы',

        ctaPrimaryLink: '/ru/news-and-insights/client-case-studies/',

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
      { icon: 'telecom', title: 'Телеком и операторы связи', image: { path: '/home/industry-telecom.png', alt: 'Телекоммуникационная инфраструктура ЦОД' }, ctaLink: '/ru/solutions/telecom/' },
      { icon: 'colocation', title: 'Колокация', image: { path: '/home/industry-colocation.png', alt: 'Инфраструктура ЦОД колокации' }, ctaLink: '/ru/solutions/colocation/' },
      { icon: 'cloud', title: 'Облачные и интернет-сервисы', image: { path: '/home/industry-cloud.png', alt: 'Инфраструктура облачных провайдеров' }, ctaLink: '/ru/solutions/cloud-hyperscale/' },
      { icon: 'internet', title: 'Интернет', image: { path: '/home/industry-internet.png', alt: 'Инфраструктура ЦОД интернет-платформ' }, ctaLink: '/ru/solutions/internet/' },
      { icon: 'finance', title: 'Финансы и банки', image: { path: '/home/industry-finance.png', alt: 'Надёжность ЦОД для финансового сектора' }, ctaLink: '/ru/solutions/finance/' },
      { icon: 'government', title: 'Государственный сектор', image: { path: '/home/industry-government.png', alt: 'Безопасная государственная инфраструктура' }, ctaLink: '/ru/solutions/government/' },
      { icon: 'manufacturing', title: 'Производство', image: { path: '/home/industry-manufacturing.png', alt: 'Промышленный ЦОД для производства' }, ctaLink: '/ru/solutions/manufacturing/' },
      { icon: 'healthcare', title: 'Здравоохранение', image: { path: '/home/industry-healthcare.png', alt: 'Медицинская ЦОД инфраструктура' }, ctaLink: '/ru/solutions/healthcare/' },
    ],
  },

  solutions: {
    eyebrow: 'Префабрикованные решения под ключ',
    title: 'Полные решения для ЦОД',
    text: 'От одиночных стоек до мульти-мегаваттных кластеров — спроектированные, испытанные на заводе и поставленные как полностью интегрированные модули.',
    cards: [
      {
        title: 'AI-дата-центр',
        text: 'Префабрикованная ИИ-инфраструктура для GPU-нагрузок. Контейнерные модули оснащены интегрированным жидкостным охлаждением и высокоплотным питанием — испытаны на заводе и готовы к вычислениям сразу по прибытии.',
        image: { path: '/resources/ai-data-center/ai-data-center-hero.webp', alt: 'AI-дата-центр' },
        features: ['Запуск за 90–120 дней', 'До 120 кВт/стойку', 'PUE до 1.08'],
        cta: 'Подробнее',
        ctaLink: '/ru/solutions/data-center-solutions/ai-data-center/',
      },
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
          { title: 'Кондиционер для уличного шкафа', image: { path: '/resources/outdoor-enclosure-cooling-home-2-768x768.webp', alt: 'Прецизионный кондиционер для уличного шкафа' }, hoverImage: { path: '/resources/outdoor-enclosure-cooling-home-1-768x768.webp', alt: 'Охлаждение шкафа' }, ctaLink: '/ru/products/thermal-management/telecom-enclosure-air-conditioner/' },
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
    eyebrow: 'Наши услуги',
    title: 'Что мы доставляем для вас',
    text: 'От первой беседы до многолетней эксплуатации — SOETECK отвечает за весь жизненный цикл. Вот что это значит для вашего проекта:',
    image: { path: '/resources/soeteck-factory-1.jpg', alt: 'Производственный комплекс SOETECK' },
    steps: [
      { num: '01', icon: 'design', title: 'Бесплатное проектирование', text: 'Расскажите о требованиях к питанию, охлаждению и площадке — бесплатно получите решение ЦОД с 3D-планировкой и тепловым моделированием.' },
      { num: '02', icon: 'manufacture', title: 'Собственное производство', text: 'ИБП, прецизионное охлаждение, распределение питания и шкафы — проектируем и производим сами: без посредников, наценок и потери контроля качества.' },
      { num: '03', icon: 'test', title: 'Приёмочные испытания', text: 'Каждый блок проходит полномасштабные испытания перед отгрузкой — приезжайте или наблюдайте по видео: проверка завершена до отгрузки.' },
      { num: '04', icon: 'ship', title: 'Логистика и таможня', text: 'FOB, CIF или DDP — перевозка, документы и таможенное оформление на нас; поставки в 50+ стран покрывают все стандарты электросетей.' },
      { num: '05', icon: 'install', title: 'Монтаж и обучение', text: 'Наши инженеры монтируют и настраивают систему на месте и обучают вашу команду — без подрядчиков и разрывов ответственности.' },
      { num: '06', icon: 'support', title: 'Сервис и запчасти', text: 'Гарантия 2 года, поддержка 7×24, удалённый мониторинг и аварийная отгрузка запчастей — один контракт, одна команда, полная ответственность.' },
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
    ctaAll: 'Смотреть все кейсы',
    projectsAllLink: '/ru/news-and-insights/client-case-studies/',
    cards: [
      {
        title: 'Saudi Telecom',
        location: 'Эр-Рияд, Саудовская Аравия',
        metric: '2',
        metricLabel: '40-футовых контейнерных ЦОД',
        text: 'Два 40-футовых мобильных OLT-контейнерных ЦОД для Saudi Telecom: двойное питание DC с резервными батареями и 7 OLT в каждом — для непрерывной работы.',
        image: { path: '/resources/prefab-modular-data-center-of-Saudi-Telecom-0.webp', alt: 'Контейнерный ЦОД Saudi Telecom' },
        cta: 'Читать кейс',
        ctaLink: '/ru/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/',
        testimonial: {
          quote: 'Клиент выразил удовлетворение результатами, отметив, что контейнерный ЦОД заложил прочную основу для его долгосрочного развития.',
          author: 'Saudi Telecom',
          role: 'Проект DR, Ближний Восток',
        },
      },
      {
        title: 'GRD Qatar',
        location: 'Катар',
        metric: '24/7',
        metricLabel: 'Стабильная работа',
        text: 'Кастомный контейнерный ЦОД для GRD: стабильная работа 24/7 в условиях жары и песчаных бурь — поддержка цифровой трансформации компании.',
        image: { path: '/resources/soeteck-racks-and-cabinets.webp', alt: 'Контейнерный ЦОД GRD Qatar' },
        cta: 'Читать кейс',
        ctaLink: '/ru/news-and-insights/client-case-studies/grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center/',
        testimonial: {
          quote: 'Контейнерный ЦОД был развёрнут быстро и работает круглосуточно даже в условиях сильной жары и песчаных бурь.',
          author: 'GRD',
          role: 'Операции, филиал в Катаре',
        },
      },
      {
        title: 'Telecom Fiji',
        location: 'Фиджи',
        metric: '45',
        metricLabel: 'кВт антикоррозийные кондиционеры',
        text: 'Модернизация прибрежных телеком-станций: кондиционеры 20 и 45 кВт с антикоррозионной защитой вместо бытовых, не справляющихся с солёным влажным климатом.',
        image: { path: '/home/industry-submarine.png', alt: 'Прецизионное охлаждение на прибрежной станции Telecom Fiji' },
        cta: 'Читать кейс',
        ctaLink: '/ru/news-and-insights/client-case-studies/telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design/',
        testimonial: {
          quote: 'Антикоррозийные кондиционеры вернули стабильное охлаждение нашим прибрежным станциям — оборудование, которое раньше выходило из строя от солёного воздуха.',
          author: 'Telecom Fiji',
          role: 'Сетевая эксплуатация',
        },
      },
      {
        title: 'Open DC Malaysia',
        location: 'Малайзия',
        metric: '100',
        metricLabel: 'кВт модульное охлаждение',
        text: 'Два модульных воздушных охладителя по 100 кВт для тесных серверных Open DC Malaysia — компактная модернизация там, где стандартные установки не помещались.',
        image: { path: '/home/industry-gpu.png', alt: 'Модернизация ЦОД Open DC Malaysia' },
        cta: 'Читать кейс',
        ctaLink: '/ru/news-and-insights/client-case-studies/open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit/',
        testimonial: {
          quote: 'Модульные установки SOETECK поместились там, где стандартные системы не вставали, обеспечив нашим модернизированным серверным надёжное охлаждение класса 100 кВт.',
          author: 'Open DC Malaysia',
          role: 'Инженерная служба объекта',
        },
      },
      {
        title: 'WebSat Media',
        location: 'Сингапур',
        metric: 'N+1',
        metricLabel: 'Резервирование охлаждения',
        text: 'Пять кондиционеров по 70 кВт с резервированием N+1 поддерживают спутниковую и вещательную инфраструктуру WebSat Media онлайн для клиентов по всему миру.',
        image: { path: '/home/scenario-remote.png', alt: 'Охлаждение ЦОД WebSat Media' },
        cta: 'Читать кейс',
        ctaLink: '/ru/news-and-insights/client-case-studies/websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions/',
        testimonial: {
          quote: 'Благодаря резервированию N+1 на пяти кондиционерах наша спутниковая и вещательная платформа остаётся онлайн для клиентов на всех континентах.',
          author: 'WebSat Media',
          role: 'Инфраструктура ЦОД',
        },
      },
      {
        title: 'Sinus-Dochi LLC',
        location: 'Монголия',
        metric: 'In-Row',
        metricLabel: 'Прецизионное охлаждение',
        text: 'Рядная система прецизионного охлаждения для монгольского лидера HVAC-инжиниринга — DC-инверторный компрессор, EC-вентиляторы и резервирование N+1 снижают PUE ЦОД, умное управление охлаждает прямо у источника тепла.',
        image: { path: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp', alt: 'Рядное прецизионное охлаждение Sinus-Dochi LLC' },
        cta: 'Читать кейс',
        ctaLink: '/ru/news-and-insights/client-case-studies/sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system/',
        testimonial: {
          quote: 'Умная рядная система прецизионного охлаждения снизила PUE нашего ЦОД и обеспечила точный контроль температуры — эффективность и надёжность в одном решении.',
          author: 'Sinus-Dochi LLC',
          role: 'HVAC-инжиниринг, Монголия',
        },
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
      { icon: 'solutions', title: 'Индивидуальное решение', text: 'Получите рекомендацию, адаптированную под вашу нагрузку, площадку и требования к мощности.', cta: 'Изучить решения', ctaLink: '/ru/solutions/' },
      { icon: 'engineering', title: 'Связь с инженерами', text: 'Общайтесь напрямую с нашей инженерной командой по сложным проектам интеграции и строительства.', cta: 'Отправить запрос', ctaLink: '/ru/contact-us/' },
    ],
  },

  productsIntro: {
    eyebrow: 'Собственное производство',
    title: 'Электропитание и охлаждение — разработка SOETECK',
    text: 'Системы ИБП, прецизионное охлаждение, распределение питания и шкафы — проектируются и производятся на нашей собственной фабрике, поэтому каждый компонент соответствует спецификациям.',
  },

  transition: {
    eyebrow: 'Решение',
    title: 'Четыре архитектуры «под ключ»',
    text: 'Каждый ЦОД SOETECK отгружается готовым с завода и готов к запуску на объекте. От ЦОД «под ключ» для ИИ до контейнерных, микромодульных и рядных модульных решений — выберите модель под ваш объект, плотность и сроки.',
  },

  newsC: {
    newsLabel: 'Пресс-релизы',
    newsLink: '/ru/news-and-insights/news-releases/',
    blogLabel: 'Блоги',
    blogLink: '/ru/news-and-insights/blogs/',
    viewAllNews: 'Все новости →',
    viewAllBlogs: 'Все блоги →',
    newsEyebrow: 'Последние новости',
    newsTitle: 'Новости и объявления компании',
    blogEyebrow: 'Экспертные материалы',
    blogTitle: 'Технические блоги и аналитика',
  },

};
