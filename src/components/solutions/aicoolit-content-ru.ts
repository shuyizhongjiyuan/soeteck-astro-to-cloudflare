/**
 * AICoolit Liquid Cooling Data Center — Russian content (translate-code-embedded, Batch 3).
 * Structure mirrors aicoolit-content.ts (EN) export-for-export.
 * Terminology per tmp/translation-batch3/TERMINOLOGY-AND-RULES.md: CDU = блок распределения хладагента,
 * cold plate = холодная пластина, immersion = иммерсионное охлаждение, in-row = внутрирядовое и т.д.
 * Brand SOETECK/Soeteck, AICoolit™, ISO, IP65, UQD, HGX kept as-is.
 */
export const AICOOLIT_NAV_SECTIONS = [
  { id: 'aicoolit-why', label: 'Почему AICoolit' },
  { id: 'aicoolit-models', label: 'Модели' },
  { id: 'aicoolit-components', label: 'Компоненты' },
  { id: 'aicoolit-faq', label: 'FAQ' },
  { id: 'aicoolit-contact', label: 'Контакты' },
];

export const AICOOLIT_STATS = [
  { value: '100', unit: 'kW', label: 'Максимальная плотность на стойку' },
  { value: '1.15', unit: '', label: 'Сверхнизкий PUE' },
  { value: '4', unit: 'недели', label: 'Стандартный срок поставки' },
  { value: 'IP65', unit: '', label: 'Промышленное исполнение' },
];

export const AICOOLIT_COMPARISON_CARDS = [
  {
    title: 'VS. традиционные контейнеры с воздушным охлаждением',
    description: 'Стандартные контейнеры с воздушным охлаждением ограничены физикой воздушного потока: плотность на стойку не превышает 10-15kW — недостаточно для кластеров NVIDIA H100.',
    features: [
      { title: 'Прорыв в плотности', text: 'Жидкостное охлаждение снимает тепловые ограничения: более 100kW на стойку в стандартном габарите ISO.' },
      { title: 'Устойчивость к среде', text: 'Полностью герметичный жидкостный контур: пыль, влажность и жара до 50°C не страшны.' },
    ],
  },
  {
    title: 'VS. капитальные ЦОД',
    description: 'Традиционное строительство упирается в согласования, медленные разрешения и сроки 12-24 месяца — бизнес в ИИ растёт быстрее.',
    features: [
      { title: 'Быстрый выход на рынок', text: 'Заводская сборка. На площадке — только подключение электропитания и воды. Сроки сжимаются с «год» до «недель».' },
      { title: 'Гибкий CAPEX', text: 'Без крупного строительства на старте. Наращивайте мощность модульно вслед за ростом вычислительной нагрузки.' },
    ],
  },
];

export const AICOOLIT_PRODUCT_SERIES = [
  {
    label: 'SERIES I (40FT)',
    title: 'Модуль высокоплотного кластера',
    description: 'Создан для масштабных кластеров обучения LLM. ИБП и батареи вынесены во внешний блок — всё внутреннее пространство отдано вычислениям. В сумме с 900kW стоечных жидкостных CDU один контейнер поддерживает суперкомпьютерный кластер 1MW.',
    image: '/resources/1-40-Foot-AI-Container-Data-Center-100kW-per-Rack.webp',
    specs: [
      { label: 'Суммарная нагрузка', value: '1 MW' },
      { label: 'Плотность на стойку', value: '100 kW' },
      { label: 'Источник охлаждения', value: 'Стоечный CDU ×8' },
      { label: 'Конфигурация', value: 'Внешнее электропитание' },
    ],
    features: [
      'Соотношение жидкость/воздух 9:1 — максимальная эффективность.',
      'Поддержка 3+1 резервных внутрирядовых кондиционеров для устранения локальных перегревов.',
    ],
  },
  {
    label: 'SERIES II (40FT)',
    title: 'Интегрированный стандартный модуль',
    description: 'Чемпион «подключи и работай». ИБП, литиевые батареи и системы жидкостного охлаждения полностью интегрированы в один 40-футовый корпус. Эталон быстрого развертывания — для объектов с ограниченной внешней электросетью или срочной потребностью в вычислениях.',
    image: '/resources/2-40-Foot-AI-Container-Data-Center-60kW-per-Rack.webp',
    specs: [
      { label: 'Суммарная нагрузка', value: '480 kW' },
      { label: 'Плотность на стойку', value: '60 kW' },
      { label: 'Источник охлаждения', value: 'Внутрирядовой CDU ×1' },
      { label: 'Конфигурация', value: 'Встроенное электропитание' },
    ],
    features: [
      'Соотношение жидкость/воздух 8:2 — сбалансированное охлаждение.',
      'Встроенный модульный ИБП 600kVA с батарейным резервом.',
    ],
  },
  {
    label: 'SERIES III (20FT)',
    title: 'Компактный edge-модуль',
    description: 'Малая площадь — большая мощность. 20-футовый модуль для edge-вычислений, умных городов и исследовательских лабораторий, где важен каждый метр. 200kW высокопроизводительных жидкостно-охлаждаемых вычислений — где угодно: от парковки до крыши.',
    image: '/resources/3-20-Foot-AI-Container-Data-Center-50kW-per-Rack.webp',
    specs: [
      { label: 'Суммарная нагрузка', value: '200 kW' },
      { label: 'Плотность на стойку', value: '50 kW' },
      { label: 'Источник охлаждения', value: 'Стоечный CDU ×4' },
      { label: 'Конфигурация', value: 'Встроенное электропитание' },
    ],
    features: [
      'Максимальная интеграция: все подсистемы в пределах 20 футов.',
      'В комплекте ИБП 300kVA и батарея резерва на 15 минут.',
    ],
  },
  {
    label: 'SERIES IV (40FT)',
    title: 'Модуль иммерсионного охлаждения',
    description: 'Предельное решение для суровых условий. Серверы погружаются непосредственно в диэлектрическую жидкость — исчезают вентиляторы, пыль и шум. Единственный выбор для пустынь, майнинговых площадок и тропиков: предельный PUE и стабильность для высокопроизводительных вычислений.',
    image: '/resources/4-40-Foot-AI-Container-Data-Center-50kW-per-Rack-Immersion-Cooling.webp',
    specs: [
      { label: 'Суммарная нагрузка', value: '~700 kW' },
      { label: 'Плотность на стойку', value: '50 kW' },
      { label: 'Источник охлаждения', value: 'CDU 400kW ×2' },
      { label: 'Конфигурация', value: 'Внешнее электропитание' },
    ],
    features: [
      '100% тепла уносит жидкость (вентиляторы не нужны) — сверхтихая работа.',
      'Идеально для майнинга криптовалют и экстремального HPC.',
    ],
  },
];

export const AICOOLIT_LAYER_SPECS = [
  { label: 'ЗАЩИТА', value: 'Класс IP65', icon: 'shield' },
  { label: 'ИЗОЛЯЦИЯ', value: 'Стены R-30', icon: 'temperature' },
  { label: 'ЛОГИСТИКА', value: 'Сертификация CSC', icon: 'globe' },
];

// 4th spec rendered separately after the Layer 01 image (matching production layout)
export const AICOOLIT_LAYER_EXTRA_SPEC = { label: 'ПРОЧНОСТЬ КОНСТРУКЦИИ', value: 'Срок службы 10 лет', icon: 'structure' };

export const AICOOLIT_CDU_TABS = [
  {
    id: 'intelligent-cdu',
    title: 'Интеллектуальный CDU',
    subtitle: 'Основной блок охлаждения',
    badge: 'ЯДРО',
    description: '«Сердце» системы жидкостного охлаждения. Внутрирядовые CDU оснащены насосами с резервированием 1+1 и интеллектуальным управлением расходом (VFD): давление и поток динамически балансируются под реальную нагрузку серверов — 100% доступности и оптимальный тепловой режим.',
    tags: ['Резервирование двух насосов', 'Автоматическая балансировка', 'Сенсорная панель HMI', 'Испытания при давлении 1.5x'],
    products: [
      { image: '/resources/Soeteck-Rack-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'Стоечный CDU (блок распределения хладагента) Soeteck', title: 'Стоечный CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicooli-rack-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-In-Row-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'Внутрирядовой CDU (блок распределения хладагента) Soeteck', title: 'Внутрирядовой CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-in-row-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-Room-CDU-Coolant-Distribution-Unit-1.webp', alt: 'Комнатный CDU (блок распределения хладагента) Soeteck', title: 'Комнатный CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-room-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-Liquid-to-Air-In-Row-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'Гибридный CDU Soeteck', title: 'Гибридный CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-hybrid-cdu-coolant-distribution-unit/' },
    ],
    contentTitle: 'Интеллектуальный блок распределения хладагента (CDU)',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/?category%5B%5D=coolant-distribution-units',
  },
  {
    id: 'orbital-manifolds',
    title: 'Коллекторы орбитальной сварки',
    subtitle: 'Нержавеющая сталь 316L',
    badge: 'РАСПРЕДЕЛЕНИЕ',
    description: 'Магистральные «артерии» распределения из медицинской нержавеющей стали 316L. Передовая орбитальная сварка гарантирует нулевую протечку соединений и превосходную стойкость к коррозии в течение 10 лет эксплуатации.',
    tags: ['Обнаружение утечек', 'Пассивация', 'Орбитальная сварка', 'Химическая стойкость'],
    products: [
      { image: '/resources/Soeteck-Rack-Manifold-for-Liquid-Cooling-Solutions-4-1024x717.webp', alt: 'Коллектор Soeteck для стоек (жидкостное охлаждение)', title: 'Коллекторы', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-rack-manifold-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Коллекторы орбитальной сварки',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-rack-manifold-for-liquid-cooling-solutions/',
  },
  {
    id: 'uqd-connectors',
    title: 'Коннекторы UQD',
    subtitle: 'Слепая стыковка',
    badge: 'ИНТЕРФЕЙС',
    description: 'Универсальные быстроразъёмные соединители со слепой стыковкой, полностью соответствующие стандартам OCP. Безопасная замена серверных узлов без пролива жидкости — даже под давлением системы.',
    tags: ['Соответствие OCP', 'Слепая стыковка', 'Технология без пролива', 'Высокий ресурс циклов'],
    products: [
      { image: '/resources/Soeteck-Quick-Disconnect-Coupling-for-Liquid-Cooling-Solutions-1-1024x717.webp', alt: 'Быстроразъёмное соединение Soeteck', title: 'Коннекторы UQD', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-quick-disconnect-coupling-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Коннекторы UQD',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-quick-disconnect-coupling-for-liquid-cooling-solutions/',
  },
  {
    id: 'secondary-loop',
    title: 'Вторичный контур',
    subtitle: 'EPDM / медь',
    badge: 'ТРАНСПОРТ',
    description: 'Надёжная подача жидкости на уровне стойки. Гибкие армированные рукава EPDM — для универсальности, жёсткие медные трубопроводы — для стационарной установки. Полная химическая совместимость с PG25 и различными диэлектрическими жидкостями.',
    tags: ['Варианты EPDM / медь', 'Защита от перегиба', 'Высокое рабочее давление', 'Химическая стойкость'],
    products: [
      { image: '/resources/Soeteck-Secondary-Loop-for-Liquid-Cooling-Solutions-1-1024x717.webp', alt: 'Вторичный контур Soeteck', title: 'Вторичный контур', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-secondary-loop-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Вторичный контур',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-secondary-loop-for-liquid-cooling-solutions/',
  },
  {
    id: 'heat-rejection',
    title: 'Отвод тепла',
    subtitle: 'Драйкулеры / градирни',
    badge: 'ВНЕШНИЙ',
    description: 'Эффективные системы наружного отвода тепла. Адиабатические драйкулеры с интеллектуальным орошением сохраняют высокую мощность охлаждения даже в пиковую летнюю жару и расходуют меньше воды, чем традиционные градирни.',
    tags: ['Экономия воды', 'Низкий шум', 'Интеллектуальное управление', 'Технология EC-вентиляторов'],
    products: [
      { image: '/resources/SOETECK-V-Shaped-Integrated-Outdoor-Air-Cooled-Condenser-1.webp', alt: 'V-образный наружный воздушный конденсатор SOETECK', title: 'Драйкулеры', url: '/products/thermal-management/heat-rejection/soeteck-v-shaped-integrated-outdoor-air-cooled-condenser/' },
    ],
    contentTitle: 'Драйкулеры и градирни',
    contentUrl: '/products/thermal-management/heat-rejection/soeteck-v-shaped-integrated-outdoor-air-cooled-condenser/',
  },
];

// DEPRECATED: merged into AICOOLIT_CDU_TABS above (now 5 tabs)
// Keep exports for backward compatibility but no longer rendered separately
export const AICOOLIT_HEAT_REJECTION = {
  title: 'Драйкулеры и градирни',
  subtitle: 'ВНЕШНИЙ',
  description: 'Эффективные системы наружного отвода тепла. Адиабатические драйкулеры с интеллектуальным орошением сохраняют высокую мощность охлаждения даже в пиковую летнюю жару и расходуют меньше воды, чем традиционные градирни.',
  tags: ['Экономия воды', 'Низкий шум', 'Интеллектуальное управление', 'Технология EC-вентиляторов'],
};

export const AICOOLIT_SECONDARY_LOOP = {
  title: 'Вторичный контур',
  subtitle: 'ТРАНСПОРТ',
  description: 'Надёжная подача жидкости на уровне стойки. Гибкие армированные рукава EPDM — для универсальности, жёсткие медные трубопроводы — для стационарной установки. Полная химическая совместимость с PG25 и различными диэлектрическими жидкостями.',
  tags: ['Варианты EPDM / медь', 'Защита от перегиба', 'Высокое рабочее давление', 'Химическая стойкость'],
};

export const AICOOLIT_TRUST_BADGES = [
  { icon: 'medal', label: 'Член OCP' },
  { icon: 'check', label: 'ISO 9001' },
  { icon: 'lightbulb', label: 'Сертификация CE' },
  { icon: 'trending', label: 'Uptime TIER III' },
];

export const AICOOLIT_SUPPLY_CHAIN = [
  { title: 'Умная фабрика 50,000 м²', text: 'Автоматизированные линии выпускают более 500 модулей в год.' },
  { title: 'Глобальная логистическая сеть', text: 'Партнёрство с крупнейшими судоходными линиями обеспечивает быструю доставку в Америку, EMEA и APAC.' },
  { title: 'Безопасность цепочки поставок', text: 'Вертикальная интеграция — от листового металла до сборки прецизионного жидкостного контура — гарантирует мощность именно тогда, когда она нужна.' },
];

export const AICOOLIT_FAQ = [
  {
    question: 'Что происходит при утечке жидкости?',
    answer: 'Мы применяем стратегию «эшелонированной обороны». Во-первых, конструкция с <strong>отрицательным давлением</strong>: при микроутечке внутрь засасывается воздух, а не выбрасывается жидкость. Во-вторых, интеллектуальные датчики утечки (верёвочные и точечные) установлены на каждом коллекторном соединении и CDU. При обнаружении влаги система мгновенно изолирует затронутый контур и предупреждает операторов, защищая ИТ-оборудование.',
  },
  {
    question: 'Нужен ли специальный персонал для обслуживания жидкостного контура?',
    answer: 'Нет. Система AICoolit спроектирована по принципу «установил и забыл»: обслуживание минимально — раз в год проверяются уровень жидкости и фильтры. CDU оснащены самодиагностикой. Для обслуживания серверов наши <strong>коннекторы UQD</strong> без пролива позволяют ИТ-специалистам менять узлы «на горячую» так же просто, как в воздушных стойках, — навыки работы с трубопроводами не нужны.',
  },
  {
    question: 'Совместимо ли решение с GPU NVIDIA H100/Blackwell?',
    answer: 'Безусловно. Наша архитектура жидкостного охлаждения спроектирована под чипы с высоким TDP (свыше 1000W на сокет). Мы поддерживаем стандартные холодные пластины OCP для ускорителей NVIDIA, AMD и Intel. Что бы вы ни запускали — кластеры HGX H100 или будущие архитектуры Blackwell, — плотность 100kW на стойку даёт запас по охлаждению.',
  },
  {
    question: 'Могут ли модули работать в экстремальном климате?',
    answer: 'Да. Корпус контейнера имеет класс IP65 и изоляцию R-30, отделяя внутреннюю среду от внешней. Для отвода тепла адиабатические драйкулеры сохраняют эффективность охлаждения даже при температуре окружающей среды до <strong>50°C (122°F)</strong>. У нас есть успешные внедрения в пустынях Ближнего Востока и в тропиках Юго-Восточной Азии.',
  },
  {
    question: 'Как быстро можно развернуть кластер 1MW?',
    answer: 'Традиционное строительство занимает 18-24 месяца. С AICoolit фабрично протестированный модуль 1MW поставляется за <strong>5-10 недель</strong>. На площадке остаётся подключить электропитание и воду — ввод в эксплуатацию обычно занимает меньше недели. Обучение моделей начнётся на месяцы раньше конкурентов.',
  },
];

export const AICOOLIT_CTA_OFFERS = [
  { label: 'Бесплатный TCO-отчёт' },
  { label: 'Индивидуальный 3D-план размещения' },
  { label: 'Техническая спецификация' },
];

export const AICOOLIT_GPU_BADGES = ['NVIDIA HGX', 'INTEL Gaudi', 'AMD Instinct'];

// ─── Page-level template copy (moved out of AICoolitPage.astro hardcode) ───

export const AICOOLIT_NAV = {
  ariaLabel: 'Разделы страницы',
  brandSubtitle: 'ЦОД с жидкостным охлаждением',
};

export const AICOOLIT_HERO = {
  title: 'ЦОД с жидкостным<br>охлаждением',
  subtitle: 'Доставка <em>в любую точку.</em>',
  intro: 'Жидкостное охлаждение — решение нового поколения для терморегулирования ЦОД эпохи ИИ. Soeteck <strong>AICoolit&trade;</strong> интегрирует прямоточное (Direct-to-Chip) или иммерсионное охлаждение в стандартные ISO-контейнеры, обеспечивая плотность до 100kW на стойку. Минуйте долгие строительные циклы — вычислительный кластер заработает за считанные недели.',
  ctaModels: 'Посмотреть модели',
  ctaWhitepaper: 'Получить white paper',
  badgesLabel: 'Инженерная валидация для',
  imgAlt: 'Серия AICoolit — ЦОД с жидкостным охлаждением',
};

export const AICOOLIT_WHY = {
  eyebrow: 'Конкурентное преимущество',
  title: 'Почему «жидкость + контейнер»?',
  lead: 'В эпоху ИИ традиционная инфраструктура становится узким местом. AICoolit объединяет гибкость контейнера с плотностью жидкостного охлаждения — превосходный третий вариант.',
};

export const AICOOLIT_MODELS = {
  eyebrow: 'Линейка продуктов',
  title: 'Выберите свой масштаб',
  badges: ['Стандартные ISO-контейнеры', 'Заводская сборка'],
  downloadSpecs: 'Скачать спецификацию {series}',
};

export const AICOOLIT_COMPONENTS = {
  eyebrow: 'Ключевые компоненты',
  title: 'Инженерное ядро',
  lead: 'Бесшовное соединение промышленной прочности и микроскопической точности. Единая система, а не набор деталей.',
};

export const AICOOLIT_SHELL = {
  layer1Badge: 'СЛОЙ 01: КРЕПОСТЬ',
  layer1Title: 'Промышленный ISO-корпус',
  layer1Desc: 'Контейнер — не просто коробка, а первая линия обороны. Мы переоснащаем стандартные ISO-контейнеры усиленной сталью, создавая герметичную среду, которая защищает дорогостоящие вычислительные активы от экстремальных внешних условий.',
  layer1ImgAlt: 'Контейнерный дата-центр',
  divider: 'ВНУТРИ КОРПУСА',
  layer2Badge: 'СЛОЙ 02: ВНУТРЕННЯЯ СИСТЕМА',
  layer2Title: 'Прецизионный жидкостный контур',
  layer2Desc: 'Собственное производство CDU, коллекторов и баков — серия <strong>AICoolit&trade;</strong> гарантирует безупречную совместимость и безопасность цепочки поставок для вашей критической инфраструктуры.',
  tabsAriaLabel: 'Детали компонентов',
};

export const AICOOLIT_TRUST_HEAD = {
  ariaLabel: 'Сертификаты и стандарты',
  heading: 'Нам доверяют мировые лидеры и стандарты',
};

export const AICOOLIT_SUPPLY_HEAD = {
  eyebrow: 'Безопасность цепочки поставок',
  title: 'Создано для масштаба.<br />Доставляется по всему миру.',
  lead: 'В гонке ИИ всё решает предсказуемость цепочки поставок. SOETECK контролирует весь производственный процесс — от изготовления листового металла до сборки прецизионного жидкостного контура. Мы гарантируем производственную мощность именно тогда, когда она нужнее всего.',
  imgAlt: 'Производственная линия фабрики SOETECK',
};

export const AICOOLIT_FAQ_HEAD = {
  eyebrow: 'Частые вопросы',
  title: 'Ответы экспертов',
  lead: 'Всё, что нужно знать о развертывании жидкостно-охлаждаемых модульных ЦОД.',
};

export const AICOOLIT_CTA = {
  title: 'Ваш ИИ-проект начинается здесь',
  lead: 'Инфраструктура не должна быть узким местом. Расскажите о конфигурации жидкостного ЦОД — предварительная инженерная планировка будет готова в течение 24 часов.',
};

export const AICOOLIT_FORM = {
  title: 'Запросить цену',
  nameLabel: 'Ваше имя:',
  namePlaceholder: 'Введите имя',
  emailLabel: 'Email:',
  emailPlaceholder: 'your@email.com',
  companyLabel: 'Компания:',
  companyPlaceholder: 'Название компании',
  phoneLabel: 'Телефон:',
  phonePlaceholder: 'Телефон / WhatsApp',
  subjectLabel: 'Тема:',
  subjectPlaceholder: 'Например, запрос цены на AICoolit Series I',
  messageLabel: 'Сообщение:',
  messagePlaceholder: 'Расскажите о требованиях вашего проекта…',
  submit: 'Отправить',
};
