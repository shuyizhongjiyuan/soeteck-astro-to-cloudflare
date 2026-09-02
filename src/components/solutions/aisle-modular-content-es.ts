/**
 * Aisle Modular Data Center solution content — español (es)
 * Espejo de aisle-modular-content.ts (EN): mismos nombres de exportaciones, estructura idéntica.
 * Terminología según el paquete Batch 3 §二 (aisle containment = contención de pasillo,
 * in-row cooling = refrigeración en fila, hot/cold aisle = pasillo caliente/frío).
 * Marca SOETECK se mantiene (es); las rutas de imágenes no se traducen.
 */

export const AISLE_OVERVIEW_PARAGRAPHS = [
  '<strong>Los centros de datos modulares de pasillo</strong> son salas de TI prefabricadas y autónomas: energía, refrigeración y monitoreo integrados en una sola unidad, capaces de operar cargas empresariales sin obra civil dedicada. Cada módulo se ensambla y prueba en fábrica, reduciendo al mínimo el trabajo en sitio.',
  'SOETECK diseña estas salas para crecer por etapas: comience con un pasillo y amplíelo a medida que aumenta la demanda, añadiendo racks y refrigeración sin alterar la huella existente. La capacidad se mantiene cerca de la carga real, con el gasto y el consumo energético bajo control.',
  'Frente a la construcción a medida, un centro de datos modular de pasillo se despliega más rápido y cuesta menos. Es ideal para cómputo de borde, expansión empresarial y necesidades de capacidad con plazo definido. El diseño plug-and-play mantiene una confiabilidad de nivel data center, con monitoreo remoto desde cualquier sitio.',
];

export const AISLE_HOTSPOTS = [
  { label: 'Condensadora exterior', x: '14.4%', y: '51.8%' },
  { label: 'Módulo de monitoreo', x: '30.4%', y: '31.8%' },
  { label: 'Sensor de temperatura y humedad', x: '32.4%', y: '56.8%' },
  { label: 'Detección de fugas', x: '36.4%', y: '61.8%' },
  { label: 'Sensor de humo', x: '39.4%', y: '37.8%' },
  { label: 'Refrigeración en fila', x: '44.9%', y: '51.8%' },
  { label: 'Gabinete de servidores', x: '55.4%', y: '53.8%' },
  { label: 'Distribución de energía', x: '64.4%', y: '41.8%' },
  { label: 'UPS', x: '69.4%', y: '61.8%' },
  { label: 'Batería', x: '74.4%', y: '50.8%' },
];

export const AISLE_HOTSPOT_IMAGE: string = '/resources/4-1024x768.png';

export const AISLE_CORE_MODULES = [
  { title: 'Módulo de refrigeración eficiente', text: 'Gestión térmica y disipación de calor', icon: 'snowflake' },
  { title: 'Distribución de energía inteligente', text: 'Distribución y gestión del suministro eléctrico', icon: 'bolt' },
  { title: 'Sistema de protección y seguridad', text: 'Protección contra incendios y seguridad física', icon: 'shield' },
  { title: 'Sistema inteligente de monitoreo', text: 'Supervisión del estado operativo', icon: 'chart' },
];

export const AISLE_MODEL_VIEWS = [
  {
    title: 'Centro de Datos Modular de Pasillo Frío',
    images: [
      '/resources/4-1024x768.png',
      '',  // 待上传图片
      '',  // 待上传图片
    ],
  },
  {
    title: 'Centro de Datos Modular de Pasillo Caliente',
    images: [
      '/resources/4-1024x768.png',
      '',  // 待上传图片
      '',  // 待上传图片
    ],
  },
];

// Critical Power & Thermal Management (texto compartido con row-modular-content.ts)
export const AISLE_CRITICAL_POWER_TEXT: string =
  'La solución de centro de datos modular de pasillo de SOETECK incorpora un sistema eficiente de distribución de energía, con una gama de UPS montados en rack y módulos de distribución diseñados a medida. El cliente puede elegir baterías de litio o de plomo-ácido montadas en rack según sus necesidades. También ofrecemos selección de UPS personalizada, junto con el diseño y la fabricación integrales del sistema de distribución.';

export const AISLE_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'UPS Serie SY-RT (1-3kVA)',
    subtitle: 'UPS online de alta frecuencia, 1kVA-3kVA, PF1',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-high-frequency-online-ups-1kva-3kva-rack-tower-mounted-pf1',
    excerpt: 'La UPS Serie SY-RT (1-3kVA) brinda protección online confiable con doble conversión: salida PF1, amplio rango de voltaje de entrada de 110-300VAC y diseño compacto rack/torre. Alcanza 96% de eficiencia en modo ECO con tiempo de transferencia de 0ms.',
    specs: ['Eficiencia PF1', 'Tiempo de transferencia 0ms', 'Rango 110-300VAC', '96% de eficiencia en modo ECO'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF11.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF12.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF13.webp',
    ],
  },
  {
    title: 'UPS Serie SY-RT (1-10kVA)',
    subtitle: 'UPS online de alta frecuencia, 1kVA-10kVA, PF0.9',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-winner-pro-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted-pf0-9',
    excerpt: 'La UPS SOETECK Serie SY-RT Winner Pro (1-10kVA) ofrece protección online confiable con salida PF0.9, amplio rango de voltaje de entrada y montaje flexible en rack o torre para despliegues versátiles en centros de datos modulares de pasillo.',
    specs: ['Eficiencia PF0.9', 'Doble conversión online', 'Montaje rack/torre', 'Amplio rango de entrada'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-2.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-4.webp',
    ],
  },
  {
    title: 'UPS Serie SY-RT (1-10kVA)',
    subtitle: 'UPS online de alta frecuencia, 1kVA-10kVA, PF0.8',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted',
    excerpt: 'La UPS Serie SY-RT (1-10kVA) ofrece protección online confiable con PF0.8, eficiencia de hasta 93% y montaje flexible en rack o torre. Ideal para proteger equipos críticos en centros de datos y entornos empresariales.',
    specs: ['PF0.8', 'Eficiencia de hasta 93%', 'Montaje en rack y torre', 'Configuración flexible'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-4.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-2.webp',
    ],
  },
];

export const AISLE_THERMAL_MANAGEMENT_TEXT: string =
  'SOETECK ofrece soluciones integrales de enfriamiento para centros de datos y estaciones base, incluyendo sistemas de aire acondicionado de precisión a nivel de sala, fila y gabinete. Para atender las demandas térmicas del cómputo de alta densidad dentro de gabinetes individuales, nuestros sistemas de precisión de gabinete y en fila están diseñados para la eficiencia y la rentabilidad.';

export const AISLE_THERMAL_PRODUCTS = [
  {
    title: 'Enfriamiento en Fila DX por Aire',
    subtitle: 'Capacidad de 5.6kW – 90.1kW',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-in-row-cooling-system-5-6kw-90-1kw-capacity',
    excerpt: 'Sistema de enfriamiento de precisión en fila para una gestión térmica eficiente a nivel de fila.',
    specs: ['Rango 5.6kW-90.1kW', 'DX por aire', 'Instalación en fila', 'Control de precisión'],
    images: [
      '/resources/SOETECK-air-cooled-in-row-cooling-system-5.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-6.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-3.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-4.webp',
    ],
  },
  {
    title: 'Enfriamiento de Sala DX por Aire',
    subtitle: 'Capacidad de 32.5kW – 120kW',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-room-cooling-system-32-5kw-120kw-capacity-up-down-flow',
    excerpt: 'Enfriamiento de precisión a nivel de sala con configuraciones de flujo superior/inferior.',
    specs: ['Rango 32.5kW-120kW', 'Flujo superior/inferior', 'DX por aire', 'Precisión a nivel de sala'],
    images: [
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-1.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-2.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-5.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-6.webp',
    ],
  },
  {
    title: 'Enfriamiento de Gabinete Compacto',
    subtitle: 'Capacidad de 3.5kW, 8U',
    slug: 'thermal-management/precision-air-conditioning/soeteck-packaged-rack-cooling-system-3-5kw-capacity-8u-bottom-or-middle-mounted',
    excerpt: 'Sistema compacto de enfriamiento de gabinete con refrigerante R410A e integración BMS.',
    specs: ['Enfriamiento de 3.5kW', 'Montaje inferior o medio', 'Refrigerante R410A', 'Integración BMS'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
];

export const AISLE_SPEC_COLUMNS = [
  { model: 'SY-AMDC-10', image: '/resources/cabinet-modular-data-center-31.webp' },
  { model: 'SY-AMDC-20', image: '/resources/cabinet-modular-data-center-41.webp' },
  { model: 'SY-AMDC-40', image: '/resources/cabinet-modular-data-center-51.webp' },
  { model: 'Personalizado', image: '/resources/cabinet-modular-data-center-61.webp' },
];

export const AISLE_SPEC_ROWS = [
  ['Configuración', '10 racks', '20 racks', '40 racks', 'Personalizado'],
  ['Tamaño del rack', '600×1000mm', '600×1000mm', '600×1000mm', 'Personalizado'],
  ['Capacidad del rack', '42U', '42U', '42U', 'Personalizado'],
  ['Potencia máxima por rack', '8kW', '10kW', '12kW', 'Personalizado'],
  ['Capacidad total de TI', '80kW', '200kW', '480kW', 'Personalizado'],
  ['Tipo de enfriamiento', 'En fila DX/agua helada', 'En fila DX/agua helada', 'En fila DX/agua helada', 'Personalizado'],
  ['Contención de pasillo', 'Pasillo caliente/frío', 'Pasillo caliente/frío', 'Pasillo caliente/frío', 'Personalizado'],
  ['PUE', '≤1.4', '≤1.35', '≤1.3', 'Personalizado'],
];

export const AISLE_SCENARIOS = [
  {
    title: 'Salas de servidores pequeñas',
    image: '/resources/enterprise-small-computer-room-1.webp',
    pain_points: ['Espacio limitado', 'Personal de TI insuficiente', 'Mantenimiento complejo'],
    benefits: ['Diseño compacto', 'Monitoreo integrado', 'Expansión gradual'],
    problem: 'Las salas de servidores de pequeñas empresas sufren restricciones de espacio que limitan la incorporación de equipos, mientras que los equipos de TI reducidos enfrentan un mantenimiento complejo; los dispositivos dispersos y los cables enredados reducen la eficiencia de gestión.',
    solution: 'El diseño compacto aprovecha al máximo el espacio; el monitoreo integrado centraliza la gestión de dispositivos y reduce el trabajo manual; admite expansión gradual desde pocos gabinetes, evitando grandes inversiones iniciales.',
    application: 'Salas de TI corporativas, sucursales',
  },
  {
    title: 'Sitios de cómputo de borde',
    image: '/resources/Edge-Computing.webp',
    pain_points: ['Ubicación remota', 'Entorno severo', 'Personal en sitio limitado'],
    benefits: ['Diseño de amplio rango térmico', 'Monitoreo remoto', 'Eficiencia energética'],
    problem: 'Los sitios en zonas remotas tienen infraestructura deficiente: las grandes fluctuaciones de temperatura y humedad provocan fallas frecuentes, y el escaso personal técnico en sitio retrasa la respuesta.',
    solution: 'El diseño de amplio rango térmico garantiza estabilidad entre -10℃ y 40℃; el monitoreo remoto integrado permite la operación no tripulada; la refrigeración optimizada reduce el consumo de energía en 30% y admite energía solar.',
    application: 'Sitios de perforación remotos, operaciones mineras',
  },
  {
    title: 'Expansión de centro de datos',
    image: '/resources/Data-Center-Expansion.webp',
    pain_points: ['Ciclos largos de planificación', 'Indisponibilidad durante el despliegue', 'Problemas de compatibilidad'],
    benefits: ['Plug-and-play', 'Expansión en paralelo', 'Autobalanceo'],
    problem: 'La expansión tradicional implica planificación y obra prolongadas, y la instalación de nuevos equipos suele requerir indisponibilidad, poniendo en riesgo la continuidad del negocio.',
    solution: 'Los módulos prefabricados en fábrica permiten un despliegue plug-and-play que reduce el tiempo de instalación en más de 70%; la expansión en paralelo no afecta las operaciones existentes.',
    application: 'Centros de datos en la nube, expansión de TI corporativa',
  },
  {
    title: 'Oficinas con múltiples sucursales',
    image: '/resources/branch-office-1.webp',
    pain_points: ['Sin TI dedicada', 'Monitoreo solo remoto', 'Ubicaciones dispersas'],
    benefits: ['Alarmas multinivel', 'Plataforma remota', 'Diseño redundante'],
    problem: 'Las salas de servidores de las sucursales carecen de personal de TI dedicado, lo que dificulta el monitoreo en tiempo real; las fallas no se atienden a tiempo y arriesgan la continuidad del negocio.',
    solution: 'El monitoreo integral dispara alarmas multinivel ante cualquier anomalía; la plataforma remota se encarga de la mayor parte de la gestión diaria y del diagnóstico de fallas.',
    application: 'Sucursales bancarias, cadenas minoristas',
  },
  {
    title: 'Eventos temporales',
    image: '/resources/Temporary-Deployment-Needs-1.webp',
    pain_points: ['Montaje rápido requerido', 'Sin infraestructura en sitio', 'Desmontaje posterior'],
    benefits: ['Instalación en horas', 'Autónomo', 'Reutilizable'],
    problem: 'Los escenarios temporales exigen una infraestructura de TI lista con rapidez, pero la instalación tradicional es compleja y lenta; los recintos suelen carecer de energía y refrigeración estables.',
    solution: 'El diseño modular permite instalar el sistema en cuestión de horas; las unidades integradas de energía y refrigeración operan de forma independiente de la infraestructura local.',
    application: 'Exposiciones, respuesta ante emergencias',
  },
  {
    title: 'Laboratorios de I+D',
    image: '/resources/Laboratory-RD-Environments.webp',
    pain_points: ['Reconfiguraciones frecuentes', 'Necesidades de energía variables', 'Gestión de cables'],
    benefits: ['Módulos flexibles', 'Cableado preintegrado', 'Interfaces estandarizadas'],
    problem: 'Los laboratorios de I+D requieren ajustes frecuentes de equipos y distribución, que las salas tradicionales fijas no admiten; las necesidades de energía y refrigeración varían según el escenario de prueba.',
    solution: 'Los componentes modulares admiten reconfiguración flexible y cambio de modos según las necesidades de prueba; el cableado preintegrado mantiene el entorno ordenado.',
    application: 'Laboratorios de investigación, instalaciones de prueba',
  },
];

// Títulos/resúmenes de los casos — de soeteck_display_title + post_excerpt de los posts de traducción del CMS
// (casos compartidos con la familia prefab, textos idénticos a PREFAB_CLIENT_CASES)
export const AISLE_CLIENT_CASES = [
  {
    imgSrc: '/resources/Qatar-containerized-data-center-768x385.webp',
    title: 'GRD Qatar Obtiene Datos Estables 24/7 con el Centro de Datos Containerizado Personalizado de Soeteck',
    slug: 'grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center',
    desc: 'En medio de la ola global de digitalización, GRD — una empresa que avanza hacia una transformación digital completa — considera los datos un activo estratégico fundamental. Para ello…',
  },
  {
    imgSrc: '/resources/prefab-modular-data-center-of-Saudi-Telecom-6-768x512.webp',
    title: 'Impulsando la Innovación: SOETECK proporciona a Saudi Telecom soluciones avanzadas de centro de datos contenerizado móvil con OLT',
    slug: 'driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions',
    desc: 'El proyecto de DR para Saudi Telecom se inició para diseñar e implementar un centro de datos contenerizado móvil con OLT (Optical Line Terminal) totalmente personalizable, mejorando las capacidades operativas de los operadores de telecomunicaciones en Oriente Medio. Esta solución innovadora…',
  },
  {
    imgSrc: '/resources/Data-center-for-Satellite-Solutions-in-Singapore-1-768x441.webp',
    title: 'WebSat Media optimiza la infraestructura del centro de datos con las soluciones de enfriamiento de SOETECK',
    slug: 'websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions',
    desc: 'WebSat, fundada en 2000 y con sede en Singapur, es líder mundial en el suministro de infraestructura de telecomunicaciones satelitales, de difusión, fijas e inalámbricas, soluciones de software y servicios de Internet. A medida que la demanda de almacenamiento de datos sigue creciendo…',
  },
];

// ---- Estructura de la página y títulos de sección (movidos del hardcode de AisleModularPage.astro, Batch 3 i18n) ----

export const AISLE_PAGE_HERO = {
  title: 'Centro de Datos Modular de Pasillo',
  imageAlt: 'Centro de Datos Modular de Pasillo',
};

export const AISLE_OVERVIEW_HEADING: string = 'Salas de TI modulares, listas para escalar';

export const AISLE_VIDEO = {
  playAriaLabel: 'Reproducir el video del Centro de Datos Modular de Pasillo',
  imageAlt: 'Vista previa del video del Centro de Datos Modular de Pasillo',
  fallbackTitle: 'Video de solución de Soeteck',
};

export const AISLE_ACTIONS = {
  getBrochure: 'Obtener folleto',
  contactUs: 'Contáctenos',
};

export const AISLE_CLOSER_HEADING: string = 'Por dentro del Centro de Datos Modular de Pasillo';

export const AISLE_TYPICAL_DESIGN = {
  title: 'Diseño típico de contención de pasillo',
  imageAlt: 'Diseño típico de un centro de datos modular de pasillo',
  intro: 'El centro de datos modular de pasillo utiliza contención de pasillo caliente/frío para optimizar el flujo de aire y la eficiencia de refrigeración. Este diseño separa el aire caliente de escape del aire frío de suministro, reduciendo significativamente el consumo de energía y mejorando el rendimiento general del sistema.',
  keyFeaturesLabel: 'Características clave:',
  features: [
    'Contención de pasillo caliente/frío: separa las corrientes de aire caliente y frío para la máxima eficiencia de refrigeración.',
    'Arquitectura escalable: el diseño modular permite que la capacidad crezca con la demanda.',
    'Soporte de alta densidad: aloja equipos de alta potencia de hasta 15kW+ por rack.',
    'Eficiencia energética: PUE tan bajo como 1.3 con la configuración adecuada.',
    'Monitoreo inteligente: supervisión ambiental y eléctrica en tiempo real para una operación óptima.',
  ],
};

export const AISLE_MODELS_SECTION = {
  title: 'Dos modelos típicos',
  intro: 'Los centros de datos modulares de pasillo de SOETECK están disponibles en diversas configuraciones para diferentes necesidades de capacidad: desde la contención de pasillo frío para despliegues estándar hasta la contención de pasillo caliente para entornos de alta densidad, con soluciones flexibles para cada necesidad.',
};

export const AISLE_MODULES_SECTION = {
  title: 'Módulos principales de infraestructura',
  lead: 'La solución de centro de datos modular de pasillo de SOETECK se compone de varios elementos clave: sistema de gabinetes, sistema de control térmico, alimentación crítica, sistema de seguridad y sistema dinámico de ambiente.',
};

export const AISLE_PRODUCT_GROUPS = {
  criticalPower: 'Energía Crítica',
  thermalManagement: 'Gestión Térmica',
  galleryAria: 'galería',
};

export const AISLE_SPECS_SECTION = {
  heading: 'Modelos destacados',
  modelsColumn: 'Modelos',
  pdfLinkLabel: 'SOETECK Centro de Datos Modular de Pasillo.pdf',
};

export const AISLE_SCENARIOS_SECTION = {
  heading: '¿Quién necesita un centro de datos modular?',
  subtitle: 'Escenarios de aplicación: una integración de módulos de energía, refrigeración e infraestructura para operaciones de TI confiables — donde el centro de datos modular de pasillo aporta un valor único',
  benefitsTab: 'Beneficios de la solución',
  painPointsTab: 'Problemas críticos',
  detailsAria: 'detalles',
};

export const AISLE_CASES_HEADING: string = 'Casos de éxito del Centro de Datos Modular de Pasillo';

export const AISLE_CTA = {
  eyebrow: 'Hable con un ingeniero',
  title: 'Póngase en contacto con SOETECK',
  text: 'Comparta los requisitos de su instalación y reciba un camino práctico hacia la solución. Indíquenos el tipo de proyecto, la capacidad necesaria y el plazo: nuestro equipo le ayudará a identificar la configuración adecuada.',
  checks: ['Consulta de proyecto', 'Soporte de configuración técnica', 'Seguimiento regional'],
  contactUs: 'Contáctenos',
  downloadBrochure: 'Descargar folleto',
};
