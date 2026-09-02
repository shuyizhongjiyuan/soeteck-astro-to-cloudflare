/**
 * Cabinet Modular Data Center solution content — español (es)
 * Espejo de cabinet-modular-content.ts (EN): todos los exports con nombres idénticos.
 * Marca SOETECK mantenida; nombres de página y términos según el glosario del Batch 3.
 */

// Hero
export const CABINET_HERO_TITLE = 'Centro de Datos Modular en Gabinete';
export const CABINET_HERO_SUBTITLE =
  'Potencie su infraestructura de TI con la solución de centro de datos modular de SOETECK — escalabilidad y rendimiento sin comparación, en cualquier momento y lugar.';
export const CABINET_HERO_IMAGE_ALT = 'Centro de datos modular en gabinete';

// Overview
export const CABINET_OVERVIEW_IMAGE = '/resources/cabinet-dc-1-1024x798.webp';
export const CABINET_OVERVIEW_TITLE = 'Micro Data Centers para 5G, IoT e IA';
export const CABINET_OVERVIEW_IMAGE_ALT = 'Vista general del centro de datos modular en gabinete';
export const CABINET_OVERVIEW_PARAGRAPHS = [
  '<p>El <strong>Centro de Datos Modular en Gabinete (CMDC) de SOETECK</strong> integra alimentación, refrigeración y monitoreo en una sola unidad sellada. Atiende la demanda de red detrás de 5G, IoT e IA sin la larga puesta en marcha ni el alto costo operativo de una instalación tradicional, y escala de uno a diez gabinetes.</p>',
  '<p>Cada unidad está sellada con grado IP5X: los flujos de aire frío y caliente permanecen separados y el ruido se mantiene por debajo de 49 dB. El monitoreo inteligente registra temperatura, humedad y energía en tiempo real, mientras que UPS de alta eficiencia y refrigeración de velocidad variable mantienen el PUE en torno a 1.4.</p>',
  '<p>El CMDC se emplea en banca, educación, salud, manufactura y gobierno. Frente a una construcción convencional reduce el costo de obra en un 30%, el tiempo de despliegue en un 90% y el espacio hasta en un 80%. Una plataforma unificada de gestión permite monitoreo y mantenimiento remotos desde un solo panel, con una elevada resistencia sísmica incorporada.</p>',
];

// Closer Look
export const CABINET_CLOSER_TITLE = 'Dentro del Centro de Datos Modular en Gabinete';
export const CABINET_DETAIL_TITLES = [
  'Diseños típicos de los CMDC',
  'Modelos destacados',
  'Módulos de infraestructura esencial',
];
export const CABINET_HOTSPOT_IMAGE = '/resources/cabinet-modular-data-center-2.webp';

// Hotspot positions from Bricks data (desktop values)
export const CABINET_HOTSPOTS = [
  { label: 'Sistema de monitoreo', x: '16%', y: '31%' },
  { label: 'Sistema de seguridad', x: '8%', y: '45%' },
  { label: 'Sistema de gabinetes', x: '51.5%', y: '35%' },
  { label: 'Módulo de distribución de energía', x: '71%', y: '62%' },
  { label: 'UPS', x: '64%', y: '66%' },
  { label: 'Batería', x: '70%', y: '69%' },
  { label: 'Sistema de refrigeración de rack', x: '68%', y: '76%' },
  { label: 'Zona de TI', x: '68%', y: '25%' },
];

export const CABINET_HOTSPOT_IMAGE_ALT = 'Diseño típico de un centro de datos modular en gabinete';
export const CABINET_DESIGN_TEXT =
  'El centro de datos modular en gabinete ofrece una solución integrada de distribución de energía, gestión de refrigeración, seguridad contra incendios y cableado estructurado. Está diseñado para brindar seguridad, fiabilidad y eficiencia en un formato compacto.';
export const CABINET_KEY_FEATURES_LABEL = 'Características clave:';

export const CABINET_KEY_FEATURES = [
  'Seguridad y fiabilidad: construido conforme a altos estándares de seguridad, con múltiples medidas de protección, incluida resistencia al fuego y al agua y funciones de seguridad reforzadas.',
  'Despliegue rápido: el diseño permite una instalación y puesta en marcha ágiles, con disponibilidad operativa en poco tiempo.',
  'Escalabilidad flexible: la arquitectura modular facilita la ampliación según cambien las necesidades.',
  'Alta densidad y eficiencia: el uso eficiente del espacio permite una gran capacidad de cómputo con el mínimo consumo de recursos.',
  'Gestión inteligente: equipado con sistemas de monitoreo y gestión para una supervisión y un mantenimiento eficaces.',
];

export const CABINET_FEATURED_MODELS = [
  {
    hotspotLabel: 'Refrigeración de rack compacta',
    image: '/resources/cabinet-data-center-7.webp',
    accordionTitle: 'con refrigeración de rack superior',
    hotspotPin: { x: '47%', y: '10%' },
    integrated_systems: ['UPS de 3-6 kVA', 'Distribución de energía', 'Respaldo de baterías', 'Monitoreo y seguridad'],
    key_advantages: ['Plug and play real (sin unidad exterior)', 'Diseño todo en uno que ahorra espacio', 'Despliegue rápido'],
  },
  {
    hotspotLabel: 'Refrigeración de rack Split',
    image: '/resources/cabinet-data-center-5.webp',
    accordionTitle: 'con refrigeración de rack',
    hotspotPin: { x: '48%', y: '83%' },
    integrated_systems: ['UPS de 3-10 kVA', 'Distribución de energía', 'Respaldo de baterías', 'Monitoreo y seguridad'],
    key_advantages: ['El diseño split reduce la ocupación de espacio U', 'Funcionamiento de bajo ruido', 'Escalabilidad modular'],
  },
  {
    hotspotLabel: 'Refrigeración en fila',
    image: '/resources/cabinet-data-center-6.webp',
    accordionTitle: 'con refrigeración en fila',
    hotspotPin: { x: '33%', y: '40%' },
    integrated_systems: ['UPS de 6-20 kVA', 'Distribución de energía', 'Respaldo de baterías', 'Monitoreo y seguridad'],
    key_advantages: ['La refrigeración en fila ahorra espacio U', 'Mejor rendimiento térmico', 'Densidad de nivel empresarial'],
  },
];

export const CABINET_ACCORDION_INTEGRATED = 'Sistemas integrados:';
export const CABINET_ACCORDION_ADVANTAGES = 'Ventajas clave:';
export const CABINET_MODULES_LEAD =
  'La solución de centro de datos modular en gabinete de SOETECK se compone de varios componentes clave: el sistema de gabinetes, el sistema de control térmico, la alimentación crítica, el sistema de seguridad y el sistema dinámico de ambiente. A continuación encontrará los detalles de varios módulos centrales.';

export const CABINET_MODELS_INTRO =
  'Nuestro sistema de gabinetes integrado para centros de datos comprende tres soluciones modulares: la versión con aire acondicionado superior (3-6 kVA), la versión con aire acondicionado en rack (3-10 kVA) y la versión en fila (6-20 kVA). Cada sistema unifica UPS, distribución de energía y monitoreo inteligente, y entrega una infraestructura eficiente y escalable para centros de datos de todo tamaño.';

export const CABINET_MODELS_OUTRO =
  'Como piezas de LEGO, estos gabinetes están diseñados para un despliegue rápido. Nuestras soluciones pueden personalizarse según los requisitos, alcanzando un PUE de apenas 1.4 y desplegándose en solo 10 minutos. El gabinete sellado con grado IP5X incorpora puerta de apertura de emergencia, control de acceso tres en uno (huella, tarjeta, contraseña), interfaz de monitoreo táctil y compatibilidad con varios protocolos northbound.';

export const CABINET_CORE_MODULES = [
  { title: 'Módulo de refrigeración eficiente', text: 'Gestión térmica y disipación de calor', icon: 'snowflake' },
  { title: 'Distribución de energía inteligente', text: 'Distribución y gestión de la energía', icon: 'bolt' },
  { title: 'Sistema de protección y seguridad', text: 'Protección contra incendios y seguridad física', icon: 'shield' },
  { title: 'Sistema de monitoreo inteligente', text: 'Monitoreo del estado operativo', icon: 'chart' },
];

export const CABINET_CRITICAL_POWER_TITLE = 'Energía Crítica';
export const CABINET_CRITICAL_POWER_TEXT =
  'La solución de centro de datos en gabinete de SOETECK incorpora un sistema eficiente de distribución de energía, con una gama de UPS de rack y módulos de distribución diseñados a medida. Los clientes pueden elegir baterías de litio o de plomo-ácido para rack según sus necesidades. También ofrecemos servicios de selección de UPS, junto con diseño y fabricación integrales de distribución. Según el tiempo de respaldo requerido, proporcionamos diversas opciones de baterías: bloques de baterías, gabinetes de baterías y racks de baterías.';

export const CABINET_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'UPS Serie SY-RT (1-3kVA)',
    subtitle: 'UPS en línea de alta frecuencia, 1kVA-3kVA, PF1',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-high-frequency-online-ups-1kva-3kva-rack-tower-mounted-pf1',
    excerpt: 'La UPS Serie SY-RT, 1-3kVA, ofrece una protección en línea fiable de doble conversión con salida PF1, amplio rango de tensión de entrada y diseño compacto rack/torre.',
    specs: ['Eficiencia PF1', 'Tiempo de transferencia 0ms', 'Rango de 110-300VAC', '96% de eficiencia en modo ECO'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF11.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF12.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF13.webp',
    ],
  },
  {
    title: 'UPS Serie SY-RT (1-10kVA)',
    subtitle: 'UPS en línea de alta frecuencia, 1kVA-10kVA, PF0.8',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted',
    excerpt: 'La UPS Serie SY-RT, 1-10kVA, ofrece protección en línea fiable con PF0.8, eficiencia de hasta 93% y montaje flexible en rack o torre para un despliegue versátil.',
    specs: ['PF0.8', 'Eficiencia de hasta 93%', 'Montaje en rack y torre', 'Configuración flexible'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-4.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-2.webp',
    ],
  },
  {
    title: 'UPS Serie ST-RT (10-60kVA)',
    subtitle: 'UPS en línea de alta frecuencia, 10kVA-60kVA, trifásica',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-st-rt-series-high-frequency-online-ups-10kva-60kva-rack-tower-mounted-3-phase-in-out',
    excerpt: 'La UPS Serie ST-RT, de 10-60kVA, brinda protección en línea de doble conversión real con eficiencia PF1. Convertible entre rack y torre, entrada/salida trifásica y modo ECO con 95.5% para ahorrar energía.',
    specs: ['Doble conversión real', 'Entrada / salida trifásica', 'Eficiencia PF1', 'Modo ECO 95.5%'],
    images: [
      '/resources/online-High-Frequency-UPSR.webp',
      '/resources/online-High-Frequency-UPSR-20KVA.webp',
      '/resources/online-High-Frequency-UPSR-40KVA.webp',
      '/resources/online-High-Frequency-UPSR-60KVA.webp',
    ],
  },
];

export const CABINET_THERMAL_TITLE = 'Gestión Térmica';
export const CABINET_THERMAL_MANAGEMENT_TEXT =
  'SOETECK ofrece soluciones de refrigeración completas para centros de datos y estaciones base, incluidos sistemas de aire acondicionado de precisión de nivel de sala, de fila y de rack. Para atender eficazmente las demandas de refrigeración de la computación de alta densidad dentro de los gabinetes, nuestros sistemas de nivel de rack y de fila están diseñados para la eficiencia y la relación costo-beneficio.';

export const CABINET_THERMAL_PRODUCTS = [
  {
    title: 'Refrigeración de rack compacta superior',
    subtitle: 'Capacidad de 2.5kW – 5.5kW',
    slug: 'soeteck-top-mount-packaged-rack-cooling-system-2-5kw-5-5kw-capacity-suitable-for-micro-mini-modular-data-center',
    excerpt: 'Sistema de refrigeración de rack compacta montado en la parte superior, capacidad de 2.5-5.5kW. El diseño todo en uno ahorra espacio U sin unidad exterior — ideal para micro data centers.',
    specs: ['Refrigeración de 2.5kW a 5.5kW', 'Refrigerante R410A', 'Integración con BMS', 'Soporte SNMP'],
    images: [
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-4.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-5.webp',
    ],
  },
  {
    title: 'Refrigeración de rack compacta',
    subtitle: 'Capacidad de 3.5kW, 8U',
    slug: 'soeteck-packaged-rack-cooling-system-3-5kw-capacity-8u-bottom-or-middle-mounted',
    excerpt: 'Sistema de refrigeración de rack compacta, 3.5kW de capacidad y 8U de altura. Diseño compacto de montaje inferior o intermedio, con refrigerante R410A e integración con BMS.',
    specs: ['Refrigeración de 3.5kW', 'Montaje inferior o intermedio', 'Refrigerante R410A', 'Integración con BMS'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
  {
    title: 'Refrigeración de rack Split',
    subtitle: '3.5kW-12.5kW, tipo split',
    slug: 'soeteck-rack-cooling-system-3-5kw-12-5kw-capacity-split-type-cooling-unit',
    excerpt: 'Sistema de refrigeración de rack split con rango de 3.9-12.8kW. Compresor inversor, ventilador EC y unidad condensadora exterior ofrecen una gestión térmica eficiente.',
    specs: ['Rango de 3.9kW-12.8kW', 'Compresor inversor', 'Ventilador EC', 'Unidad condensadora exterior'],
    images: [
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-1.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-4.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-2.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-5.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-3.webp',
    ],
  },
];

export const CABINET_GALLERY_ARIA = 'galería';

// Specs table
export const CABINET_SPECS_TITLE = 'Modelos destacados';
export const CABINET_SPEC_COLUMNS = [
  { model: 'SY-MDC-03N', image: '/resources/cabinet-data-center-8-734x1024.webp' },
  { model: 'SY-MDC-06T', image: '/resources/cabinet-data-center-9-734x1024.webp' },
  { model: 'SY-MDC-10R', image: '/resources/cabinet-data-center-8-734x1024.webp' },
  { model: 'Personalizado', image: '/resources/cabinet-data-center-9-734x1024.webp' },
];
export const CABINET_SPEC_TABLE_MODELS = 'Modelos';
export const CABINET_SPEC_ROWS = [
  ['Espacio utilizable (U)', '18U', '31U', '27U', 'Personalizado'],
  ['Tipo de redundancia', 'N', 'N', 'N', 'N, N+1, 2N'],
  ['Tipo de refrigeración', 'AC integrado', 'AC split', 'AC split', 'Integrado o split'],
  ['Ubicación del AC', 'Superior', 'En rack', 'En rack', 'Según se requiera'],
  ['Capacidad de refrigeración (kW)', '3.5', '3.5', '6.5', 'Personalizado'],
  ['Capacidad de UPS (kVA)', '3', '6', '10', '3–20'],
  ['Puertos del PDU', 'Estándar 8', 'Estándar 16', 'Estándar 16', 'Estándar o inteligente'],
  ['Ventilación de emergencia', 'Puerta de apertura automática', 'Puerta de apertura automática', 'Puerta de apertura automática', 'Puerta de apertura automática'],
];
export const CABINET_PDF_LINK_TEXT = 'Solución de Centro de Datos en Gabinete SOETECK.pdf';

// Transport
export const CABINET_TRANSPORT = [
  {
    title: 'Transporte de la unidad completa',
    text: 'El producto se preajusta en fábrica y cuenta con un diseño reforzado contra vibraciones. Salvo el aire acondicionado exterior, todos los demás equipos se transportan como una unidad completa.',
  },
  {
    title: 'En sitio, solo se instalan los PAC',
    text: 'Los costos de transporte, construcción y puesta en marcha se reducen significativamente, acortando los plazos y disminuyendo la tasa de fallas.',
  },
];

export const CABINET_TRANSPORT_IMAGES = [
  '/resources/cabinet-dc-1-1.webp',
  '/resources/transportation-package-1.webp',
];

// Scenarios
export const CABINET_SCENARIOS_TITLE = '¿Quién necesita un Centro de Datos Modular en Gabinete?';
export const CABINET_SCENARIOS_SUBTITLE =
  'Escenarios de aplicación: integración de módulos de energía, refrigeración e infraestructura para operaciones de TI fiables — donde el centro de datos modular en gabinete aporta un valor único';
export const CABINET_SCENARIO_DETAILS_ARIA = 'detalles';
export const CABINET_TAB_BENEFITS = 'Beneficios de la solución';
export const CABINET_TAB_PAIN = 'Principales puntos de dolor';

export const CABINET_SCENARIOS = [
  {
    title: 'Sucursales bancarias',
    image: '/resources/Bank-Branches.webp',
    pain_points: ['Sin personal en el sitio', 'Alta seguridad', 'Espacio limitado'],
    benefits: ['Recinto protegido', 'Monitoreo remoto', 'Ahorro de espacio'],
    problem: 'Las salas de servidores de las sucursales bancarias suelen ser estrechas, incapaces de albergar equipos estándar de centro de datos, y enfrentan exigencias de seguridad estrictas. Sin personal de TI profesional en el sitio, las fallas de los equipos ponen en riesgo la continuidad del negocio, la experiencia del cliente y la reputación corporativa.',
    solution: 'Nuestro diseño de rack integrado combina servidores, energía y refrigeración en el espacio estándar de un rack, ahorrando el 60% del área. Con control de acceso por huella, videovigilancia y una plataforma de operación remota, permite una operación 7×24 sin personal en el sitio, con tiempos de respuesta a fallas de solo minutos.',
    application: 'Recuperación ante desastres naturales, ayuda de emergencia',
  },
  {
    title: 'Oficinas de pequeñas empresas',
    image: '/resources/Small-Business-Offices.webp',
    pain_points: ['Gestión sencilla', 'Personal de TI limitado', 'Entorno de oficina'],
    benefits: ['Funcionamiento silencioso', 'Plug & play', 'Bajo mantenimiento'],
    problem: 'Las pequeñas empresas carecen de personal de TI dedicado y enfrentan dificultades en el mantenimiento de la sala de servidores. Los entornos de oficina imponen límites estrictos de ruido y los presupuestos ajustados exigen infraestructura de TI confiable a menor costo.',
    solution: 'El diseño integrado simplifica la gestión diaria y permite operarlo sin ser especialista. La reducción optimizada de ruido mantiene la operación por debajo de 50 decibeles, sin perturbar la oficina. La alta integración reduce el costo total de propiedad en más de un 40% frente a las configuraciones tradicionales.',
    application: 'Sitios remotos de perforación, operaciones mineras',
  },
  {
    title: 'Estaciones base de telecomunicaciones',
    image: '/resources/Telecom-Base-Stations.webp',
    pain_points: ['Temperaturas extremas', 'Ubicación remota', 'Exterior / condiciones severas'],
    benefits: ['Amplio rango de temperatura', 'Resistente al clima', 'Gestión remota'],
    problem: 'Las estaciones base exteriores enfrentan condiciones severas —temperaturas extremas, polvo, lluvias intensas— y una alimentación eléctrica inestable. La dispersión de las ubicaciones encarece las inspecciones manuales, y las fallas pueden interrumpir el servicio de comunicaciones.',
    solution: 'Nuestros gabinetes con grado IP55 resisten la intemperie. La doble entrada de energía más el respaldo de baterías de litio garantizan un 99.999% de confiabilidad eléctrica. Una plataforma centralizada remota monitorea el estado en tiempo real y reduce en un 80% las visitas de mantenimiento.',
    application: 'Eventos deportivos, festivales, conferencias',
  },
  {
    title: 'Instalaciones de salud',
    image: '/resources/Healthcare-Facilities.webp',
    pain_points: ['Sistemas críticos', 'Entorno limpio', 'Alta disponibilidad'],
    benefits: ['Energía redundante', 'Bajo nivel de ruido', 'Fácil desinfección'],
    problem: 'Las salas de servidores hospitalarias sostienen sistemas críticos como equipos de diagnóstico y registros de pacientes: cualquier interrupción pone en riesgo la seguridad del paciente. El entorno médico exige alta limpieza y bajo ruido, mientras que el espacio limitado restringe las áreas dedicadas de sala técnica.',
    solution: 'La redundancia N+1 elimina puntos únicos de falla en energía y refrigeración y permite el mantenimiento en línea. El diseño totalmente cerrado con filtración de aire cumple los estándares de limpieza médica, y su tamaño compacto permite desplegarlo con flexibilidad en estaciones de enfermería o esquinas de los servicios.',
    application: 'Operaciones de campo, bases militares, instalaciones de defensa',
  },
  {
    title: 'Hubs de transporte inteligente',
    image: '/resources/Smart-Transportation-Hubs.webp',
    pain_points: ['Seguridad crítica', 'Espacio público', 'Operación 24/7'],
    benefits: ['Resistente al vandalismo', 'Operación continua', 'Eficiencia de espacio'],
    problem: 'Aeropuertos, estaciones y hubs requieren operación de TI 24/7: las fallas generan caos operativo. Los entornos públicos conllevan riesgos de vandalismo y los espacios disponibles para salas técnicas son dispersos y limitados.',
    solution: 'La redundancia de grado industrial asegura una disponibilidad superior al 99.99%. Los gabinetes resistentes al vandalismo y el control de acceso refuerzan la seguridad física. Los racks miniaturizados se despliegan junto a las áreas funcionales, con gestión centralizada mediante colaboración en red.',
    application: 'Redes IoT, ciudades inteligentes, edge industrial',
  },
  {
    title: 'Centros de mando de emergencia',
    image: '/resources/Emergency-Command-Centers.webp',
    pain_points: ['Misión crítica', 'Montaje temporal', 'Tiempo limitado'],
    benefits: ['Montaje rápido', 'Diseño portátil', 'Energía de respaldo'],
    problem: 'Las emergencias exigen montar TI temporal con rapidez, algo que el equipo tradicional no puede brindar. El lugar de mando puede cambiar y el sistema debe ser móvil, mientras que en campo falta una alimentación estable.',
    solution: 'El gabinete integrado está listo para usar nada más sacarlo de la caja: se despliega en 15 minutos tras conectar la energía. Sus ruedas permiten moverlo distancias cortas y las baterías integradas aportan 4-8 horas de energía de emergencia para una operación continua.',
    application: 'Centros de datos en la nube, expansión de TI empresarial',
  },
];

// Client cases section
export const CABINET_CASES_TITLE = 'Casos de éxito de Centro de Datos Modular en Gabinete';

// Bottom contact CTA
export const CABINET_CONTACT_EYEBROW = 'Hable con un ingeniero';
export const CABINET_CONTACT_TITLE = 'Póngase en contacto con SOETECK';
export const CABINET_CONTACT_TEXT =
  'Comparta los requisitos de su instalación y reciba un camino práctico hacia la solución. Cuéntenos el tipo de proyecto, las necesidades de capacidad y el cronograma — nuestro equipo le ayudará a identificar la configuración adecuada.';
export const CABINET_CONTACT_CHECKS = [
  'Consultoría de proyecto',
  'Soporte técnico de configuración',
  'Seguimiento regional',
];
export const CABINET_CONTACT_BUTTON = 'Contáctenos';
export const CABINET_CONTACT_BROCHURE = 'Descargar folleto';

// Overview CTA row
export const CABINET_CTA_BROCHURE = 'OBTENER FOLLETO';
export const CABINET_CTA_CONTACT = 'CONTÁCTENOS';

// Reuse client cases from prefab-content.ts - import via PREFAB_CLIENT_CASES