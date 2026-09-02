/**
 * AICoolit Liquid Cooling Data Center — Spanish content (translate-code-embedded, Batch 3).
 * Structure mirrors aicoolit-content.ts (EN) export-for-export.
 * Terminology per tmp/translation-batch3/TERMINOLOGY-AND-RULES.md: CDU = unidad de distribución
 * de refrigerante, cold plate = placa fría (cold plate), immersion = refrigeración por inmersión, etc.
 * Brand SOETECK/Soeteck, AICoolit™, ISO, IP65, UQD, HGX kept as-is.
 */
export const AICOOLIT_NAV_SECTIONS = [
  { id: 'aicoolit-why', label: 'Por qué AICoolit' },
  { id: 'aicoolit-models', label: 'Modelos' },
  { id: 'aicoolit-components', label: 'Componentes' },
  { id: 'aicoolit-faq', label: 'FAQ' },
  { id: 'aicoolit-contact', label: 'Contacto' },
];

export const AICOOLIT_STATS = [
  { value: '100', unit: 'kW', label: 'Densidad máxima por rack' },
  { value: '1.15', unit: '', label: 'PUE ultrabajo' },
  { value: '4', unit: 'semanas', label: 'Plazo típico de entrega' },
  { value: 'IP65', unit: '', label: 'Grado industrial' },
];

export const AICOOLIT_COMPARISON_CARDS = [
  {
    title: 'VS. contenedores con refrigeración por aire',
    description: 'Los contenedores con refrigeración por aire chocan con los límites físicos del flujo de aire: la densidad por rack se queda en 10-15kW — insuficiente para clústeres de NVIDIA H100.',
    features: [
      { title: 'Salto en densidad', text: 'La refrigeración líquida rompe el límite térmico: más de 100kW por rack en la misma huella ISO.' },
      { title: 'Resiliencia ambiental', text: 'Circuito líquido totalmente sellado. Inmune al polvo, la humedad y el calor ambiental de 50°C.' },
    ],
  },
  {
    title: 'VS. centros de datos tradicionales',
    description: 'La construcción tradicional enfrenta zonificación, permisos lentos y plazos de 12-24 meses, mientras el negocio de la IA no puede esperar.',
    features: [
      { title: 'Puesta en marcha acelerada', text: 'Prefabricado en fábrica. En el sitio solo conecta energía y agua. La entrega pasa de "años" a "semanas".' },
      { title: 'CAPEX escalable', text: 'Sin gran inversión inicial. Escale la capacidad por módulos a medida que crece la demanda de cómputo.' },
    ],
  },
];

export const AICOOLIT_PRODUCT_SERIES = [
  {
    label: 'SERIES I (40FT)',
    title: 'Módulo de Clúster de Alta Densidad',
    description: 'Diseñado para clústeres de entrenamiento de LLM a gran escala. Al trasladar la UPS y las baterías a una unidad externa, se maximiza el espacio interno para el cómputo. Combinado con 900kW totales en CDU de refrigeración líquida en rack, un solo contenedor soporta un superclúster de 1MW.',
    image: '/resources/1-40-Foot-AI-Container-Data-Center-100kW-per-Rack.webp',
    specs: [
      { label: 'Carga total', value: '1 MW' },
      { label: 'Densidad por rack', value: '100 kW' },
      { label: 'Fuente de refrigeración', value: 'CDU de rack ×8' },
      { label: 'Configuración', value: 'Alimentación externa' },
    ],
    features: [
      'Relación líquido/aire 9:1 para máxima eficiencia.',
      'Soporta 3+1 AC en fila redundantes para eliminar puntos calientes.',
    ],
  },
  {
    label: 'SERIES II (40FT)',
    title: 'Módulo Estándar Integrado',
    description: 'El campeón del "plug & play". UPS, baterías de litio y sistemas de refrigeración líquida totalmente integrados en una sola carcasa de 40 pies. La definición del despliegue rápido: ideal cuando la infraestructura eléctrica externa es limitada o la necesidad de cómputo es urgente.',
    image: '/resources/2-40-Foot-AI-Container-Data-Center-60kW-per-Rack.webp',
    specs: [
      { label: 'Carga total', value: '480 kW' },
      { label: 'Densidad por rack', value: '60 kW' },
      { label: 'Fuente de refrigeración', value: 'CDU en fila ×1' },
      { label: 'Configuración', value: 'Alimentación interna' },
    ],
    features: [
      'Relación líquido/aire 8:2 para una refrigeración equilibrada.',
      'UPS modular de 600kVA integrado + baterías de respaldo.',
    ],
  },
  {
    label: 'SERIES III (20FT)',
    title: 'Módulo Compacto de Borde',
    description: 'Poco espacio, gran potencia. Este módulo de 20 pies está pensado para computación de borde, ciudades inteligentes o laboratorios de investigación donde el espacio es limitado. Despliegue 200kW de cómputo líquido de alto rendimiento en cualquier lugar: desde aparcamientos hasta azoteas.',
    image: '/resources/3-20-Foot-AI-Container-Data-Center-50kW-per-Rack.webp',
    specs: [
      { label: 'Carga total', value: '200 kW' },
      { label: 'Densidad por rack', value: '50 kW' },
      { label: 'Fuente de refrigeración', value: 'CDU de rack ×4' },
      { label: 'Configuración', value: 'Alimentación interna' },
    ],
    features: [
      'Alta integración: todos los subsistemas dentro de 20 pies.',
      'Incluye UPS de 300kVA + batería de respaldo de 15 minutos.',
    ],
  },
  {
    label: 'SERIES IV (40FT)',
    title: 'Módulo de Refrigeración por Inmersión',
    description: 'La solución definitiva para entornos hostiles. Los servidores se sumergen directamente en fluido dieléctrico, eliminando ventiladores, polvo y ruido. Es la única opción para desiertos, zonas mineras o regiones tropicales, logrando un PUE extremo y estabilidad para cómputo de alto rendimiento.',
    image: '/resources/4-40-Foot-AI-Container-Data-Center-50kW-per-Rack-Immersion-Cooling.webp',
    specs: [
      { label: 'Carga total', value: '~700 kW' },
      { label: 'Densidad por rack', value: '50 kW' },
      { label: 'Fuente de refrigeración', value: 'CDU 400kW ×2' },
      { label: 'Configuración', value: 'Alimentación externa' },
    ],
    features: [
      '100% del calor se elimina vía líquido (sin ventiladores), ultra silencioso.',
      'Ideal para minería de criptomonedas o HPC extremo.',
    ],
  },
];

export const AICOOLIT_LAYER_SPECS = [
  { label: 'PROTECCIÓN', value: 'Clase IP65', icon: 'shield' },
  { label: 'AISLAMIENTO', value: 'Muros R-30', icon: 'temperature' },
  { label: 'LOGÍSTICA', value: 'Certificación CSC', icon: 'globe' },
];

// 4th spec rendered separately after the Layer 01 image (matching production layout)
export const AICOOLIT_LAYER_EXTRA_SPEC = { label: 'INTEGRIDAD ESTRUCTURAL', value: 'Vida útil de 10 años', icon: 'structure' };

export const AICOOLIT_CDU_TABS = [
  {
    id: 'intelligent-cdu',
    title: 'CDU Inteligente',
    subtitle: 'Unidad central de refrigeración',
    badge: 'NÚCLEO',
    description: 'El "corazón" del sistema de refrigeración líquida. Las CDU en fila incorporan bombas redundantes 1+1 y control de caudal VFD inteligente: la presión y el flujo se equilibran dinámicamente según la carga real de los servidores, garantizando 100% de disponibilidad y el mejor rendimiento térmico.',
    tags: ['Redundancia de doble bomba', 'Autobalanceo', 'HMI táctil', 'Probado a 1.5x de presión'],
    products: [
      { image: '/resources/Soeteck-Rack-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'CDU (unidad de distribución de refrigerante) de rack Soeteck', title: 'CDU de rack', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicooli-rack-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-In-Row-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'CDU (unidad de distribución de refrigerante) en fila Soeteck', title: 'CDU en fila', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-in-row-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-Room-CDU-Coolant-Distribution-Unit-1.webp', alt: 'CDU (unidad de distribución de refrigerante) de sala Soeteck', title: 'CDU de sala', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-room-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-Liquid-to-Air-In-Row-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'CDU híbrida Soeteck', title: 'CDU híbrida', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-hybrid-cdu-coolant-distribution-unit/' },
    ],
    contentTitle: 'Unidad de Distribución de Refrigerante (CDU) Inteligente',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/?category%5B%5D=coolant-distribution-units',
  },
  {
    id: 'orbital-manifolds',
    title: 'Colectores con Soldadura Orbital',
    subtitle: 'Acero inoxidable 316L',
    badge: 'DISTRIBUCIÓN',
    description: 'Las arterias principales de distribución fabricadas en acero inoxidable 316L de grado médico. La soldadura orbital avanzada garantiza uniones sin fugas y una resistencia superior a la corrosión durante 10 años de vida útil.',
    tags: ['Detección de fugas', 'Tratamiento de pasivación', 'Soldadura orbital', 'Resistencia química'],
    products: [
      { image: '/resources/Soeteck-Rack-Manifold-for-Liquid-Cooling-Solutions-4-1024x717.webp', alt: 'Colector de rack Soeteck para refrigeración líquida', title: 'Colectores', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-rack-manifold-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Colectores con Soldadura Orbital',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-rack-manifold-for-liquid-cooling-solutions/',
  },
  {
    id: 'uqd-connectors',
    title: 'Conectores UQD',
    subtitle: 'Conexión ciega',
    badge: 'INTERFAZ',
    description: 'Conexiones rápidas universales de tipo blind-mate, totalmente conformes con los estándares OCP. Diseñadas para intercambiar en caliente cuchillas de servidor de forma segura y sin derrames, incluso con el sistema presurizado.',
    tags: ['Conforme a OCP', 'Conexión ciega', 'Tecnología sin derrames', 'Larga vida útil de ciclos'],
    products: [
      { image: '/resources/Soeteck-Quick-Disconnect-Coupling-for-Liquid-Cooling-Solutions-1-1024x717.webp', alt: 'Acoplamiento de desconexión rápida Soeteck', title: 'Conectores UQD', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-quick-disconnect-coupling-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Conectores UQD',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-quick-disconnect-coupling-for-liquid-cooling-solutions/',
  },
  {
    id: 'secondary-loop',
    title: 'Circuito Secundario',
    subtitle: 'EPDM / Cobre',
    badge: 'TRANSPORTE',
    description: 'Transporte robusto de fluido a nivel de rack. Mangueras trenzadas de EPDM flexibles para versatilidad o tubos rígidos de cobre para instalaciones permanentes. Compatibilidad química total con PG25 y diversos fluidos dieléctricos.',
    tags: ['Opciones EPDM / cobre', 'Diseño antiplegado', 'Alta presión nominal', 'Resistencia química'],
    products: [
      { image: '/resources/Soeteck-Secondary-Loop-for-Liquid-Cooling-Solutions-1-1024x717.webp', alt: 'Circuito secundario Soeteck', title: 'Circuito Secundario', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-secondary-loop-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Circuito Secundario',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-secondary-loop-for-liquid-cooling-solutions/',
  },
  {
    id: 'heat-rejection',
    title: 'Disipación de Calor',
    subtitle: 'Dry Coolers / Torres de Enfriamiento',
    badge: 'EXTERNO',
    description: 'Sistemas eficientes de disipación de calor en exteriores. Los dry coolers adiabáticos utilizan aspersión inteligente para mantener alta capacidad de refrigeración incluso en los picos del verano, ahorrando agua frente a las torres tradicionales.',
    tags: ['Ahorro de agua', 'Bajo ruido', 'Controles inteligentes', 'Ventiladores EC'],
    products: [
      { image: '/resources/SOETECK-V-Shaped-Integrated-Outdoor-Air-Cooled-Condenser-1.webp', alt: 'Condensador exterior en V Soeteck', title: 'Dry Coolers', url: '/products/thermal-management/heat-rejection/soeteck-v-shaped-integrated-outdoor-air-cooled-condenser/' },
    ],
    contentTitle: 'Dry Coolers y Torres de Enfriamiento',
    contentUrl: '/products/thermal-management/heat-rejection/soeteck-v-shaped-integrated-outdoor-air-cooled-condenser/',
  },
];

// DEPRECATED: merged into AICOOLIT_CDU_TABS above (now 5 tabs)
// Keep exports for backward compatibility but no longer rendered separately
export const AICOOLIT_HEAT_REJECTION = {
  title: 'Dry Coolers y Torres de Enfriamiento',
  subtitle: 'EXTERNO',
  description: 'Sistemas eficientes de disipación de calor en exteriores. Los dry coolers adiabáticos utilizan aspersión inteligente para mantener alta capacidad de refrigeración incluso en los picos del verano, ahorrando agua frente a las torres tradicionales.',
  tags: ['Ahorro de agua', 'Bajo ruido', 'Controles inteligentes', 'Ventiladores EC'],
};

export const AICOOLIT_SECONDARY_LOOP = {
  title: 'Circuito Secundario',
  subtitle: 'TRANSPORTE',
  description: 'Transporte robusto de fluido a nivel de rack. Mangueras trenzadas de EPDM flexibles para versatilidad o tubos rígidos de cobre para instalaciones permanentes. Compatibilidad química total con PG25 y diversos fluidos dieléctricos.',
  tags: ['Opciones EPDM / cobre', 'Diseño antiplegado', 'Alta presión nominal', 'Resistencia química'],
};

export const AICOOLIT_TRUST_BADGES = [
  { icon: 'medal', label: 'Miembro de OCP' },
  { icon: 'check', label: 'ISO 9001' },
  { icon: 'lightbulb', label: 'Certificación CE' },
  { icon: 'trending', label: 'Uptime TIER III' },
];

export const AICOOLIT_SUPPLY_CHAIN = [
  { title: 'Fábrica inteligente de 50,000 m²', text: 'Líneas de producción automatizadas capaces de entregar más de 500 módulos al año.' },
  { title: 'Red logística global', text: 'Alianzas estratégicas con las principales navieras garantizan un despliegue rápido en América, EMEA y APAC.' },
  { title: 'Seguridad de la cadena de suministro', text: 'Integración vertical — desde la transformación de chapa hasta el ensamblaje del circuito líquido de precisión — que garantiza capacidad cuando más la necesita.' },
];

export const AICOOLIT_FAQ = [
  {
    question: '¿Qué ocurre si se produce una fuga de líquido?',
    answer: 'Aplicamos una estrategia de "defensa en profundidad". Primero, el diseño de <strong>presión negativa</strong> garantiza que, ante una microfuga, el aire se aspire hacia dentro en lugar de que el fluido salga expulsado. Segundo, sensores inteligentes de detección de fugas (de cable y puntuales) se instalan en cada unión de colector y en las CDU. Si se detecta humedad, el sistema aísla de inmediato el circuito afectado y alerta a los operadores, protegiendo el equipo de TI.',
  },
  {
    question: '¿Necesito personal especializado para mantener el circuito líquido?',
    answer: 'No. El sistema AICoolit está diseñado para "instalar y olvidar": el mantenimiento rutinario es mínimo — principalmente revisar niveles de fluido y filtros una vez al año. Las CDU cuentan con autodiagnóstico. Para el mantenimiento de servidores, los <strong>conectores UQD</strong> sin derrames permiten al personal de TI intercambiar nodos en caliente con la misma facilidad que en racks refrigerados por aire, sin conocimientos especiales de fontanería.',
  },
  {
    question: '¿Es compatible con GPU NVIDIA H100/Blackwell?',
    answer: 'Totalmente. Nuestra arquitectura de refrigeración líquida está diseñada específicamente para chips de alto TDP (más de 1000W por zócalo). Soportamos placas frías (cold plates) estándar OCP para aceleradores NVIDIA, AMD e Intel. Ya sea con clústeres HGX H100 o con las futuras arquitecturas Blackwell, la densidad de 100kW por rack ofrece amplio margen térmico.',
  },
  {
    question: '¿Pueden operar estas unidades en climas extremos?',
    answer: 'Sí. La carcasa del contenedor tiene grado IP65 y aislamiento R-30, desacoplando el ambiente interior del exterior. En cuanto a la disipación de calor, los dry coolers adiabáticos mantienen la eficiencia incluso con temperaturas ambiente de hasta <strong>50°C (122°F)</strong>. Tenemos despliegues exitosos en desiertos de Oriente Medio y en regiones tropicales del Sudeste Asiático.',
  },
  {
    question: '¿Qué tan rápido podemos desplegar un clúster de 1MW?',
    answer: 'La construcción tradicional toma de 18 a 24 meses. Con AICoolit, entregamos un módulo de 1MW probado en fábrica en <strong>5-10 semanas</strong>. Una vez en sitio, la instalación consiste en simples conexiones de energía y agua, y la puesta en marcha suele tardar menos de una semana. Esto le permite empezar a entrenar sus modelos meses antes que la competencia.',
  },
];

export const AICOOLIT_CTA_OFFERS = [
  { label: 'Informe gratuito de análisis TCO' },
  { label: 'Plano de distribución 3D a medida' },
  { label: 'Ficha de especificaciones técnicas' },
];

export const AICOOLIT_GPU_BADGES = ['NVIDIA HGX', 'INTEL Gaudi', 'AMD Instinct'];

// ─── Page-level template copy (moved out of AICoolitPage.astro hardcode) ───

export const AICOOLIT_NAV = {
  ariaLabel: 'Secciones de la página',
  brandSubtitle: 'Centro de Datos de Refrigeración Líquida',
};

export const AICOOLIT_HERO = {
  title: 'Centro de Datos<br>de Refrigeración Líquida',
  subtitle: 'Entregado <em>en cualquier lugar.</em>',
  intro: 'La refrigeración líquida es la solución de gestión térmica de nueva generación para los centros de datos de la era de la IA. Soeteck <strong>AICoolit&trade;</strong> integra refrigeración directa al chip (Direct-to-Chip) o por inmersión en contenedores estándar ISO, alcanzando una densidad de 100kW por rack. Olvide los largos ciclos de construcción: su clúster de cómputo estará operativo en cuestión de semanas.',
  ctaModels: 'Ver modelos',
  ctaWhitepaper: 'Descargar white paper',
  badgesLabel: 'Validado por ingeniería para',
  imgAlt: 'Serie AICoolit de Centro de Datos de Refrigeración Líquida',
};

export const AICOOLIT_WHY = {
  eyebrow: 'La ventaja competitiva',
  title: '¿Por qué líquido + contenedor?',
  lead: 'En el auge de la IA, la infraestructura tradicional es el cuello de botella. AICoolit fusiona la "flexibilidad del contenedor" con la "densidad de la refrigeración líquida" y ofrece una tercera opción superior.',
};

export const AICOOLIT_MODELS = {
  eyebrow: 'La gama de productos',
  title: 'Elija su escala',
  badges: ['Contenedores estándar ISO', 'Prefabricado en fábrica'],
  downloadSpecs: 'Descargar especificaciones {series}',
};

export const AICOOLIT_COMPONENTS = {
  eyebrow: 'Componentes destacados',
  title: 'Núcleo de ingeniería',
  lead: 'Una integración perfecta de robustez industrial y precisión microscópica. Diseñado como un sistema unificado, no como una colección de piezas.',
};

export const AICOOLIT_SHELL = {
  layer1Badge: 'CAPA 01: LA FORTALEZA',
  layer1Title: 'Carcasa ISO de Grado Industrial',
  layer1Desc: 'El contenedor no es solo una caja: es la primera línea de defensa. Rediseñamos contenedores ISO estándar con acero reforzado, creando un ambiente herméticamente sellado que protege los activos de cómputo de alto valor frente a condiciones externas extremas.',
  layer1ImgAlt: 'Centro de datos en contenedor',
  divider: 'DENTRO DE LA CARCASA',
  layer2Badge: 'CAPA 02: EL SISTEMA INTERNO',
  layer2Title: 'Circuito Líquido de Precisión',
  layer2Desc: 'Con la fabricación de CDU, colectores y tanques bajo control propio, la serie <strong>AICoolit&trade;</strong> garantiza compatibilidad perfecta y seguridad de cadena de suministro para su infraestructura crítica.',
  tabsAriaLabel: 'Detalles de los componentes',
};

export const AICOOLIT_TRUST_HEAD = {
  ariaLabel: 'Certificaciones y normas',
  heading: 'La confianza de líderes globales y estándares internacionales',
};

export const AICOOLIT_SUPPLY_HEAD = {
  eyebrow: 'Seguridad de la cadena de suministro',
  title: 'Diseñado para escalar.<br />Entregado globalmente.',
  lead: 'En la carrera de la IA, la certeza de la cadena de suministro lo es todo. SOETECK controla todo el proceso de fabricación — desde la transformación de chapa hasta el ensamblaje del circuito líquido de precisión. Garantizamos capacidad cuando más la necesita.',
  imgAlt: 'Línea de producción de la fábrica SOETECK',
};

export const AICOOLIT_FAQ_HEAD = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Respuestas de expertos',
  lead: 'Todo lo que necesita saber sobre el despliegue de centros de datos modulares de refrigeración líquida.',
};

export const AICOOLIT_CTA = {
  title: 'Su centro de datos de IA comienza con una conversación',
  lead: 'No deje que la infraestructura sea el cuello de botella. Configure su centro de datos de refrigeración líquida y reciba un diseño preliminar de ingeniería en 24 horas.',
};

export const AICOOLIT_FORM = {
  title: 'Solicitar presupuesto',
  nameLabel: 'Su nombre:',
  namePlaceholder: 'Escriba su nombre',
  emailLabel: 'Correo electrónico:',
  emailPlaceholder: 'your@email.com',
  companyLabel: 'Empresa:',
  companyPlaceholder: 'Nombre de la empresa',
  phoneLabel: 'Teléfono:',
  phonePlaceholder: 'Teléfono / WhatsApp',
  subjectLabel: 'Asunto:',
  subjectPlaceholder: 'Ej.: solicitud de presupuesto AICoolit Series I',
  messageLabel: 'Su mensaje:',
  messagePlaceholder: 'Cuéntenos sobre los requisitos de su proyecto…',
  submit: 'Enviar',
};
