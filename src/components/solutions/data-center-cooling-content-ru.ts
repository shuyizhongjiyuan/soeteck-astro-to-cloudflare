/**
 * Data Center Cooling Solutions — русский контент (перевод code-embedded, Batch 3).
 * Структура полностью зеркалит data-center-cooling-content.ts (EN), имена экспортов совпадают;
 * пути к изображениям, ссылки, модели, числа и единицы сохранены без изменений.
 * Терминология: tmp/translation-batch3/TERMINOLOGY-AND-RULES.md (§1 / §2);
 * названия и выдержки кейсов — по подтвержденным переводам CMS (общий файл prefab, 2026-09-02).
 */
import type {
  DccProductCard,
  DccApplication,
  DccService,
  DccCase,
} from './data-center-cooling-content';

export type {
  DccProductCard,
  DccApplication,
  DccService,
  DccCase,
} from './data-center-cooling-content';

export const DCC_HERO = {
  eyebrow: 'Прецизионные кондиционеры для ЦОД',
  title: 'Решения для охлаждения ЦОД',
  subtitle:
    'SOETECK предлагает экономически эффективные решения терморегулирования для центров обработки данных, телекоммуникационных станций, лабораторий и любых критически важных объектов.',
  bannerImage: '/resources/soeteck-data-center-banner-1.webp',
  bannerAlt: 'Прецизионное охлаждение ЦОД',
};

export const DCC_SECTION_INTRO = {
  title: 'Прецизионное кондиционирование',
  subtitle:
    'Полная линейка прецизионного климатического оборудования: наши решения для критически важных объектов созданы, чтобы отвечать самым разным требованиям к охлаждению.',
};

export const DCC_SECTION_HEADINGS = {
  applications: 'Области применения',
  services: 'Услуги',
  cases: 'Избранные кейсы',
  moments: 'Моменты с клиентами',
};

export const DCC_PAC_PRODUCTS: DccProductCard[] = [
  {
    name: 'Прецизионные кондиционеры для помещений',
    capacity: '7.5 – 265.8 kW',
    description:
      'Прецизионные кондиционеры серии DataCool (PAC) созданы для обеспечения большой холодильной мощности (7.5kW-265.8kW), необходимой крупным машинным залам и центрам обработки данных, с несколькими вариантами охлаждения: воздушным, водяным и с охлажденной водой (chilled water). EER ≥ 3.0 обеспечивает экономичность, а гибкая масштабируемость (поддержка одно- и двухсистемных конфигураций) снижает первоначальные инвестиции и позволяет легко расширяться в будущем.',
    image: '/resources/Soeteck-chilled-water-room-cooling-system-38.2-265.8kW-4.webp',
    link: '/products/thermal-management/precision-air-conditioning/room-cooling/',
  },
  {
    name: 'Внутрирядовые прецизионные кондиционеры',
    capacity: '7.5 – 93.2 kW',
    description:
      'Прецизионные кондиционеры серии DataRow (PAC) предназначены для установки между шкафами в рядных модульных ЦОД или ЦОД междурядного типа (Aisle). Передовое интеллектуальное управление и гибкая холодильная мощность (регулируется в диапазоне 20-100%) повышают энергоэффективность стандартных блоков воздушного охлаждения на 33.3%-50%.',
    image: '/resources/SOETECK-Row-Mounted-Pumped-Refrigerant-Cooling-System-1.webp',
    link: '/products/thermal-management/precision-air-conditioning/in-row-cooling/',
  },
  {
    name: 'Стоечные прецизионные кондиционеры',
    capacity: '2.5 – 12.5 kW',
    description:
      'Прецизионные кондиционеры серии DataRack (PAC) созданы для прямой интеграции в стандартные серверные стойки модульных ЦОД в шкафу: диапазон холодильной мощности 3.5kW-12.5kW при компактной высоте 6U-12U. Экологичный хладагент R410A и прецизионные контроллеры оптимизируют охлаждение высокоплотного ИТ-оборудования и сокращают лишнее энергопотребление.',
    image: '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
    link: '/products/thermal-management/precision-air-conditioning/rack-cooling/',
  },
  {
    name: 'Настенные прецизионные кондиционеры',
    capacity: '12.5 – 21.2 kW',
    description:
      'Настенные прецизионные кондиционеры SOETECK обеспечивают эффективное охлаждение моноблочных применений внутри и снаружи помещений. Передовые компоненты, включая инверторный насос хладагента и интеллектуальный контроллер, гарантируют точную работу — идеальный выбор для модульных контейнерных ЦОД. Снижают PUE и поддерживают двухрежимную работу для оптимизации энергоэффективности.',
    image: '/resources/SOETECK-Wall-Mounted-Hybrid-Refrigerant-Green-Cooling-3.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-wall-mounted-pumped-refrigerant-cooling-system-indoor-and-outdoor-packaged/',
  },
  {
    name: 'Прецизионные кондиционеры для телекоммуникационных шкафов',
    capacity: '12.5 – 21.2 kW',
    description:
      'Прецизионные кондиционеры SOETECK для шкафов обеспечивают эффективное охлаждение закрытых моноблочных применений. Передовые компоненты, включая инверторный насос хладагента и интеллектуальный контроллер, гарантируют точную работу — идеальный выбор для модульных контейнерных ЦОД. Снижают PUE и поддерживают двухрежимную работу для оптимизации энергоэффективности.',
    image: '/resources/DC-Powered-TEC-Air-Conditioner-3.webp',
    link: '/products/thermal-management/telecom-enclosure-air-conditioner/',
  },
  {
    name: 'Внешние блоки',
    capacity: '12.5 – 21.2 kW',
    description:
      'Внешние блоки SOETECK обеспечивают эффективный отвод тепла для систем прецизионного охлаждения. Передовые компоненты, включая инверторный насос хладагента и интеллектуальный контроллер, гарантируют точную работу — идеальный выбор для модульных контейнерных ЦОД. Снижают PUE и поддерживают двухрежимную работу для оптимизации энергоэффективности.',
    image: '/resources/SOETECK-Outdoor-Air-Cooled-Condenser-UprightHorizontal-Installation-8.webp',
    link: '/products/thermal-management/heat-rejection/',
  },
];

export const DCC_SECTION_FANWALL = {
  title: 'Прецизионная система охлаждения Fan Wall',
  subtitle:
    'Для средних и крупных потребностей в охлаждении наша система Fan Wall предлагает более надежные и энергоэффективные прецизионные решения, адаптируя охлаждение новых и действующих ЦОД к фактической нагрузке.',
};

export const DCC_FANWALL_PRODUCTS: DccProductCard[] = [
  {
    name: 'Модульный Fan Wall',
    capacity: '150.1 – 300.1 kW',
    description:
      'Fan Wall агрегаты SOETECK серии FO.GBE — энергоэффективная прецизионная система охлаждения для машинных залов: центров обработки данных, коммуникационных узлов, вычислительных центров и диспетчерских. Помимо энергоэффективности — низкий уровень шума, модульная заводская готовность и резервирование вентиляторов.',
    image: '/resources/SOETECK-FO.GBE-Modular-Fanwall-Cooling-2.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-fo-gbe-modular-fanwall-cooling-150-1kw-300-1kw-capacity/',
  },
  {
    name: 'Интегрированный Fan Wall',
    capacity: '30.2 – 60.1 kW',
    description:
      'Агрегаты Fan Wall SOETECK серии FO.WL — прецизионные системы контроля среды средней и большой мощности с интегрированной конструкцией, масштабируемой холодильной мощностью и малой занимаемой площадью. Горячий воздух серверов поступает непосредственно в блок; решения подходят для аппаратных и ЦОД, обеспечивая надежную и безопасную работу прецизионного оборудования.',
    image: '/resources/SOETECK-FO.WL-Fan-Wall-4.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-fo-wl-fan-wall-cooling-units/',
  },
];

export const DCC_APPLICATIONS_INTRO =
  'Наши решения PAC применяются как CRAC, системы охлаждения серверных, блоки охлаждения ЦОД и самые разные HVAC-системы в дата-центрах, телекоммуникациях, лабораториях и музеях.';

export const DCC_APPLICATIONS: DccApplication[] = [
  {
    title: 'Центры обработки данных',
    description:
      'Непрерывные тепловыделения серверов требуют прецизионного охлаждения с большим расходом воздуха: ±1 °C и ±5 %RH, предотвращение локальных перегревов и доступность цифровых сервисов 24×7.',
    image: '/resources/soeteck-data-center-cooling-1.webp',
  },
  {
    title: 'Телекоммуникационные объекты',
    description:
      'Узлы коммутации и оборудование 5G полагаются на прецизионные кондиционеры со строгим климат-контролем и фильтрацией пыли — гарантия непрерывной работы сети.',
    image: '/resources/soeteck-telecom-facilities-2.webp',
  },
  {
    title: 'Лаборатории',
    description:
      'Аналитическим лабораториям нужны стабильные ±1 °C, контролируемая влажность и чистота: прецизионные системы исключают тепловой дрейф, защищают реагенты и обеспечивают воспроизводимость экспериментов.',
    image: '/resources/Soeteck-Laboratories-2.webp',
  },
  {
    title: 'Музеи и архивы',
    description:
      'Редкие книги и произведения искусства сохраняются десятилетиями, когда прецизионное охлаждение поддерживает 20 °C и 50 %RH с мягкой фильтрацией, предотвращая плесень, окисление и деформацию.',
    image: '/resources/Soeteck-Museums-Archives-Cooling-2.webp',
  },
];

export const DCC_SERVICES_INTRO =
  'Наша специализированная команда предлагает комплекс индивидуальных услуг, чтобы вы получали прецизионные кондиционеры высшего качества — сегодня и в будущем.';

export const DCC_SERVICES: DccService[] = [
  {
    title: 'OEM/ODM',
    description: 'Мы предоставляем услуги OEM/ODM, позволяющие адаптировать продукцию под ваш бренд и конструкторские требования.',
    icon: 'factory',
  },
  {
    title: 'Консультации',
    description:
      'Профессиональная команда продаж изучит ваши задачи и вместе с экспертами продуктовой поддержки подготовит индивидуальные рекомендации по закупке.',
    icon: 'chat',
  },
  {
    title: 'Проектирование',
    description:
      'На этапе проектирования наши специалисты совместно с вами создают инновационные и эффективные решения охлаждения под конкретные требования.',
    icon: 'pen',
  },
  {
    title: 'Производство',
    description:
      'Современные производственные процессы гарантируют высокое качество систем охлаждения в соответствии с отраслевыми стандартами и вашими спецификациями.',
    icon: 'gear',
  },
  {
    title: 'Контроль качества',
    description:
      'Строгий контроль на всех этапах производства обеспечивает надежность продукции; по запросу предоставляется отчет о качестве.',
    icon: 'check',
  },
  {
    title: 'Послепродажная поддержка',
    description:
      'Опытная команда поддержки обеспечивает сервис без забот, а профессиональное обучение персонала поддерживает работоспособность вашей системы в любое время.',
    icon: 'headset',
  },
];

export const DCC_WHY = {
  title: 'Почему выбирают SOETECK',
  manufacturing: {
    title: 'Современная производственная база',
    description:
      'В SOETECK приоритетом являются инновации и НИОКР, подкрепленные современными лабораториями: электромагнитной совместимости, энтальпийного анализа, климатической надежности, шума и вибрации, измерения мощности и проверки IP-защиты. Эти передовые лаборатории позволяют проводить строгие испытания продукции и гарантировать высочайшие стандарты производительности и надежности.',
    statsAria: 'SOETECK в цифрах',
    factoryAria: 'Производственная база SOETECK',
    icon: 'factory',
    stats: [
      { value: 11, suffix: '+', label: 'Лет опыта' },
      { value: 500, suffix: '+', label: 'Выручка (млн)' },
      { value: 120, suffix: '+', label: 'Сотрудники в Китае' },
      { value: 80, suffix: '+', label: 'Стран мира' },
    ],
    factoryImages: [
      '/resources/soeteck-factory-12-1.jpg',
      '/resources/soeteck-factory-3-1.jpg',
      '/resources/soeteck-factory-2-1.jpg',
      '/resources/soeteck-factory-7-1.jpg',
      '/resources/soeteck-factory-6-1.jpg',
      '/resources/soeteck-factory-9-1.jpg',
      '/resources/soeteck-factory-8-1.jpg',
      '/resources/soeteck-factory-10-1.jpg',
      '/resources/soeteck-factory-11-1.jpg',
      '/resources/soeteck-factory-4-1.jpg',
      '/resources/soeteck-factory-5-1.jpg',
      '/resources/soeteck-factory-1-1.jpg',
    ],
  },
  certificates: {
    title: 'Ключевые сертификаты',
    description:
      'Мы придерживаемся строгих практик менеджмента качества и охраны окружающей среды, что подтверждают наши сертификаты: ISO9001 (менеджмент качества), ISO14001 (экологический менеджмент) и ISO45001 (охрана труда и производственная безопасность). Кроме того, продукция соответствует международным стандартам и сертифицирована организациями вроде CE, что подчеркивает нашу приверженность безопасности, устойчивому развитию и совершенству.',
    certsAria: 'Ключевые сертификаты',
    icon: 'award',
    items: [
      { image: '/resources/Soeteck-CE-Certificates-for-PAC-1.webp', label: 'SOETECK CE для PAC' },
      { image: '/resources/Soeteck-CE-Certificates-for-UPS.webp', label: 'SOETECK CE для UPS' },
      { image: '/resources/Soeteck-ISO9001-2.webp', label: 'SOETECK ISO9001' },
      { image: '/resources/Soeteck-ISO14001-12.webp', label: 'SOETECK ISO14001' },
      { image: '/resources/Soeteck-ISO45001-2.webp', label: 'SOETECK ISO45001' },
      { image: '/resources/Soeteck-UPS-IEC.webp', label: 'SOETECK UPS IEC' },
    ],
  },
};

export const DCC_CASES_INTRO =
  'Узнайте на реальных историях успеха, как мы внедряем инновационные решения PAC. Эти кейсы показывают нашу экспертизу в решении сложных задач и измеримые результаты для клиентов из разных отраслей.';

export const DCC_CLIENT_CASES: DccCase[] = [
  {
    imgSrc: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp',
    title:
      'Sinus-Dochi LLC снижает PUE и повышает эффективность охлаждения с помощью интеллектуальной системы прецизионного охлаждения SOETECK',
    slug: 'sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system',
    desc: 'Sinus-Dochi LLC, известная монгольская компания в сфере HVAC, специализирующаяся на холодильном оборудовании и располагающая командой опытных инженеров, стремилась повысить энергоэффективность и производительность охлаждения своего центра обработки данных. Для достижения этой цели Sinus-Dochi в партнерстве с SOETECK спроектировала и внедрила передовую систему прецизионного охлаждения, адаптированную под свои задачи.',
  },
  {
    imgSrc: '/resources/prefab-modular-data-center-of-Saudi-Telecom-6.webp',
    title:
      'Стимулируя инновации: SOETECK предоставляет Saudi Telecom передовые мобильные контейнерные решения для центров обработки данных с OLT',
    slug: 'driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions',
    desc: 'Проект DR для Saudi Telecom был инициирован для проектирования и внедрения полностью настраиваемого мобильного контейнерного ЦОД с OLT (Optical Line Terminal), повышающего операционные возможности операторов связи на Ближнем Востоке. Это инновационное решение обеспечивает быстрое развертывание передовых бизнес-приложений при высокой эффективности и надежности.',
  },
  {
    imgSrc: '/resources/100KW-Cooling-System-Solution-In-Malaysia-0.webp',
    title:
      'Open DC Malaysia внедряет модульное прецизионное воздушное охлаждение 100KW для модернизации ЦОД',
    slug: 'open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit',
    desc: 'Open DC Malaysia — известная компания в сфере облачных сервисов и сетевых технологий, специализирующаяся на услугах серверного хранения данных. Компания провела модернизацию существующего ЦОД, обновив инфраструктуру охлаждения для соответствия новым эксплуатационным требованиям.',
  },
  {
    imgSrc: '/resources/a-project-of-Telecom-Fiji-1.webp',
    title:
      'Telecom Fiji повышает стабильность сети благодаря прецизионным системам охлаждения SOETECK с антикоррозионной защитой',
    slug: 'telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design',
    desc: 'Telecom Fiji Limited, ведущий поставщик услуг фиксированной связи и сетевых услуг на Фиджи, столкнулась с критическими операционными рисками из-за неадекватных систем охлаждения на прибрежных телекоммуникационных станциях. Многие объекты использовали недостаточно мощные бытовые кондиционеры, которые не справлялись с теплом круглосуточного телеком-оборудования и страдали от коррозии в прибрежном климате Фиджи.',
  },
];

export const DCC_MOMENTS_INTRO =
  'В Soeteck мы ценим каждое знакомство. Содержательные визиты и живое знакомство с продукцией — эти истории формируют наше общее будущее. Хотите стать его частью? Свяжитесь с нами, чтобы запланировать визит, и создадим ваш момент вместе!';

export const DCC_MOMENTS_IMAGES: { src: string; alt: string }[] = [
  { src: '/resources/Soeteck-and-Fiber-Ocean-3.webp', alt: 'Визит команды Fiber Ocean в Soeteck' },
  { src: '/resources/Soeteck-and-Russian-clients-16.webp', alt: 'Soeteck с российскими клиентами' },
  { src: '/resources/Soeteck-and-Russian-clients-15.webp', alt: 'Soeteck с российскими клиентами' },
  { src: '/resources/Soeteck-and-Russian-clients-14.webp', alt: 'Soeteck с российскими клиентами' },
  { src: '/resources/Soeteck-and-Russian-clients-13.webp', alt: 'Soeteck с российскими клиентами' },
  { src: '/resources/Soeteck-and-Russian-clients-12.webp', alt: 'Soeteck с российскими клиентами' },
  { src: '/resources/Soeteck-and-Russian-clients-11.webp', alt: 'Soeteck с российскими клиентами' },
  { src: '/resources/Soeteck-and-Russian-clients-10.webp', alt: 'Soeteck с российскими клиентами' },
];

export const DCC_CTA = {
  eyebrow: 'Поговорите с инженером',
  title: 'Свяжитесь с SOETECK',
  text: 'Мы всего в нескольких кликах! Заполните форму ниже, чтобы получить нашу полную поддержку и заложить основу будущего успеха.',
};
