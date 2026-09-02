/**
 * Row Modular Data Center solution content — español (es)
 * Espejo de row-modular-content.ts (EN): todos los exports con nombres idénticos.
 * Marca SOETECK mantenida; nombres de página y términos según el glosario del Batch 3.
 */

// Hero
export const ROW_HERO_TITLE = 'Centro de Datos Modular en Fila';
export const ROW_HERO_SUBTITLE =
  'Las soluciones de centro de datos modular en fila de SOETECK ofrecen opciones integradas, eficientes y fiables, a medida para las implantaciones modernas de TI.';
export const ROW_HERO_IMAGE_ALT = 'Centro de datos modular en fila';
export const ROW_VIDEO_ARIA_LABEL = 'Reproducir vídeo del Centro de Datos Modular en Fila';
export const ROW_VIDEO_FALLBACK_TITLE = 'Vídeo de solución SOETECK';

// Overview
export const ROW_OVERVIEW_TITLE = 'Centros de datos modulares, construidos bloque a bloque';
export const ROW_OVERVIEW_PARAGRAPHS = [
  '<p>El <strong>Centro de Datos Modular en Fila de SOETECK</strong> escala como bloques de construcción: se añaden o retiran componentes a medida que crece la computación, y la configuración plug-and-play está lista en horas, no en semanas. Una respuesta práctica cuando la capacidad debe llegar rápido.</p>',
  '<p>Cada fila está construida para la fiabilidad. El recinto con grado IP55 mantiene fuera el polvo y la humedad, el monitoreo inteligente registra temperatura, humedad y energía, y los UPS de alta eficiencia junto con la gestión térmica mantienen el PUE en 1.2 o menos.</p>',
  '<p>El diseño ya está en servicio en finanzas, salud, manufactura y educación. Frente a una construcción convencional reduce el costo de obra en un 30%, acorta la instalación en un 90% y ahorra hasta un 80% del espacio, con una plataforma unificada para el monitoreo y control remotos.</p>',
];

// Overview CTA row
export const ROW_CTA_BROCHURE = 'OBTENER FOLLETO';
export const ROW_CTA_CONTACT = 'CONTÁCTENOS';

// Closer Look
export const ROW_INSIDE_TITLE = 'Dentro del Centro de Datos Modular en Fila';
export const ROW_UNITS_TITLE = 'Dos unidades típicas del RMDC';
export const ROW_TABLIST_ARIA = 'Seleccione el tipo de refrigeración';
export const ROW_TAB_RACK = 'CD con refrigeración de rack';
export const ROW_TAB_INROW = 'CD con refrigeración en fila';
export const ROW_RACK_DIAGRAM_ALT = 'Diagrama del CD con refrigeración de rack';
export const ROW_INROW_DIAGRAM_ALT = 'Diagrama del CD con refrigeración en fila';

// Hotspot image for Rack Cooling DC (same as cabinet)
export const ROW_RACK_HOTSPOT_IMAGE = '/resources/cabinet-modular-data-center-2.webp';
// Hotspot image for In-Row Cooling DC
export const ROW_INROW_HOTSPOT_IMAGE = '/resources/row-modular-data-center-unit-2.webp';

export const ROW_RACK_HOTSPOTS = [
  { label: 'Sistema de monitoreo', x: '29.75%', y: '32.95%' },
  { label: 'Sistema de seguridad', x: '24.25%', y: '46.95%' },
  { label: 'Sistema de gabinetes', x: '52.75%', y: '36.95%' },
  { label: 'Módulo de distribución de energía', x: '64.25%', y: '63.95%' },
  { label: 'UPS', x: '60.25%', y: '67.95%' },
  { label: 'Batería', x: '63.75%', y: '70.95%' },
  { label: 'Sistema de refrigeración de rack', x: '62.25%', y: '77.95%' },
  { label: 'Zona de TI', x: '62.25%', y: '26.95%' },
];

export const ROW_INROW_HOTSPOTS = [
  { label: 'PDU', x: '38%', y: '11%' },
  { label: 'Sistema de gabinetes IP55', x: '45%', y: '20%' },
  { label: 'Sistema de refrigeración en fila', x: '32%', y: '35%' },
  { label: 'Iluminación ambiental', x: '52%', y: '33%' },
  { label: 'Pantalla de monitoreo', x: '43%', y: '47%' },
  { label: 'Puerta frontal de vidrio sin marco', x: '63.5%', y: '55%' },
  { label: 'Sistema de seguridad', x: '40.5%', y: '60%' },
  { label: 'Distribución de energía', x: '48%', y: '77%' },
  { label: 'UPS', x: '51%', y: '81%' },
  { label: 'Batería', x: '54%', y: '85%' },
];

// "{LANG}" se sustituye por "/<lang>" en la plantilla al renderizar
export const ROW_UNITS_LEAD_HTML =
  'Las soluciones de <strong>centro de datos modular en fila</strong> de SOETECK ofrecen opciones integradas, eficientes y fiables, a medida para las implantaciones modernas de TI. Estas soluciones pueden formarse con gabinetes individuales con&nbsp;<a href="{LANG}/products/thermal-management/in-row-cooling/" target="_blank" rel="noopener"><strong>sistemas de refrigeración en fila</strong></a>&nbsp;o con gabinetes que integran&nbsp;<a href="{LANG}/products/thermal-management/rack-cooling/" target="_blank" rel="noopener"><strong>unidades de refrigeración de rack</strong></a>, lo que aporta flexibilidad para una amplia gama de aplicaciones. Diseñadas para asegurar el máximo rendimiento y la seguridad de la infraestructura crítica, las soluciones de SOETECK se configuran a medida para las necesidades de cada cliente.';

export const ROW_KEY_FEATURES_LABEL = 'Características clave:';
export const ROW_KEY_FEATURES = [
  '<strong>Seguridad y fiabilidad</strong>: construidos conforme a altos estándares de seguridad, los gabinetes ofrecen una robusta resistencia al fuego y al agua, además de medidas avanzadas de protección, incluido un sistema de control de acceso multifacético.',
  '<strong>Despliegue rápido</strong>: la arquitectura modular facilita una instalación y puesta en marcha ágiles, con disponibilidad operativa en poco tiempo.',
  '<strong>Escalabilidad flexible</strong>: las soluciones admiten ampliaciones sencillas para responder a demandas cambiantes, escalando sin fricción a medida que crecen las necesidades.',
  '<strong>Alta densidad y eficiencia</strong>: el diseño maximiza el uso del espacio para una gran potencia de cómputo, con configuraciones de hasta 20kW por gabinete, reduciendo al mínimo el consumo energético.',
  '<strong>Gestión inteligente</strong>: equipados con sistemas completos de monitoreo y gestión, los centros de datos ofrecen supervisión y mantenimiento eficaces, con alertas en tiempo real y localización de fallos para una operación fiable.',
];

// Build Your Data Center Like LEGO
export const ROW_LEGO_TITLE = 'Construya su centro de datos como con LEGO';
export const ROW_LEGO_INTRO =
  'En SOETECK creemos en el poder de la modularidad. Las soluciones de centro de datos modular en fila permiten construir y ampliar la infraestructura sin esfuerzo, como si se ensamblaran piezas de LEGO. Cada componente se puede añadir o modificar con facilidad para adaptarse a las necesidades cambiantes.';

export const ROW_EVOLVE_RACK = {
  title: 'Evolución desde el centro de datos en gabinete con refrigeración de rack',
  images: [
    { image: '/resources/cabinet-modular-data-center-31.webp', hotspots: [{ label: 'Refrigeración de rack', x: '42%', y: '77%' }] },
    { image: '/resources/cabinet-modular-data-center-41.webp', hotspots: [{ label: 'Sistema de refrigeración de rack', x: '20%', y: '77%' }, { label: 'Gabinete de TI', x: '45%', y: '25%' }, { label: 'Gabinete de TI', x: '71%', y: '25%' }] },
    { image: '/resources/cabinet-modular-data-center-51.webp', hotspots: [{ label: 'Sistema de refrigeración de rack', x: '30%', y: '77%' }, { label: 'Gabinete de TI', x: '47%', y: '25%' }, { label: 'Gabinete de TI', x: '64%', y: '77%' }, { label: 'Sistema de refrigeración de rack', x: '81%', y: '25%' }] },
  ],
};

export const ROW_EVOLVE_INROW = {
  title: 'Evolución desde el centro de datos en gabinete con refrigeración en fila',
  images: [
    { image: '/resources/cabinet-modular-data-center-61.webp', hotspots: [{ label: 'Refrigeración en fila', x: '63%', y: '77%' }] },
    { image: '/resources/cabinet-modular-data-center-71.webp', hotspots: [{ label: 'Refrigeración en fila', x: '55%', y: '77%' }, { label: 'Gabinete de TI', x: '28%', y: '25%' }, { label: 'Gabinete de TI', x: '43%', y: '25%' }, { label: 'Gabinete de TI', x: '67%', y: '25%' }, { label: 'Gabinete de TI', x: '67%', y: '25%' }] },
    { image: '/resources/cabinet-modular-data-center-81.webp', hotspots: [{ label: 'Refrigeración en fila', x: '39.4%', y: '77%' }, { label: 'Refrigeración en fila', x: '67.7%', y: '77%' }, { label: 'Gabinete de TI', x: '20%', y: '25%' }, { label: 'Gabinete de TI', x: '31%', y: '25%' }, { label: 'Gabinete de TI', x: '48%', y: '25%' }, { label: 'Gabinete de TI', x: '59%', y: '25%' }, { label: 'Gabinete de TI', x: '76%', y: '25%' }, { label: 'Gabinete de TI', x: '87.5%', y: '25%' }] },
  ],
};

export const ROW_EVOLVE_RACK_TEXT =
  'El centro de datos modular en fila basado en gabinetes con refrigeración de rack integrada ofrece una solución compacta optimizada para la eficiencia energética. Con capacidades de refrigeración de 3.5 kW a 90 kW, afronta con eficacia aplicaciones de alta potencia. Con medidas de seguridad avanzadas y un monitoreo exhaustivo, el diseño garantiza un entorno operativo seguro y resiliente.';
export const ROW_EVOLVE_INROW_TEXT =
  'El centro de datos modular en fila basado en gabinetes con refrigeración en fila soporta implantaciones de alta densidad, con potencias de hasta 20 kW por gabinete. Su diseño modular escala con facilidad y se adapta sin esfuerzo al crecimiento del negocio. Con protección IP55 y monitoreo en tiempo real, mejora la eficiencia operativa reduciendo el consumo energético.';
export const ROW_EVOLVE_SUMMARY =
  'Las soluciones de centro de datos modular en fila de SOETECK están diseñadas pensando en una modularidad y flexibilidad avanzadas. Cada gabinete incorpora sistemas de monitoreo ampliables que se comunican por protocolos de bus, lo que permite integrar sin costuras nuevo equipo crítico en el futuro. Las opciones modulares de refrigeración ofrecen diversas capacidades —de 3.5 kW a 12 kW para refrigeración de rack y de 5 kW a 90 kW para refrigeración en fila—, garantizando una gestión térmica eficiente. El sistema de energía también es modular, de 3 kVA a 200 kVA, para que pueda adaptar y ampliar su capacidad según lo necesite. Con protección IP55 contra polvo y agua y un diseño robusto para implantaciones de alta densidad de hasta 20 kW por gabinete, su centro de datos mantendrá seguridad, fiabilidad y eficiencia a medida que crece.';

// Core Infrastructure Modules
export const ROW_MODULES_TITLE = 'Módulos de infraestructura esencial';
export const ROW_MODULES_LEAD =
  'La solución de centro de datos modular en fila de SOETECK se compone de varios componentes clave: el sistema de gabinetes, el sistema de control térmico, la alimentación crítica, el sistema de seguridad y el sistema dinámico de ambiente.';

export const ROW_CORE_MODULES = [
  { title: 'Módulo de refrigeración eficiente', text: 'Gestión térmica y disipación de calor', icon: 'snowflake' },
  { title: 'Distribución de energía inteligente', text: 'Distribución y gestión de la energía', icon: 'bolt' },
  { title: 'Sistema de protección y seguridad', text: 'Protección contra incendios y seguridad física', icon: 'shield' },
  { title: 'Sistema de monitoreo inteligente', text: 'Monitoreo del estado operativo', icon: 'chart' },
];

export const ROW_CRITICAL_POWER_HEADING = 'Energía Crítica';
export const ROW_CRITICAL_POWER_TEXT =
  'La solución de centro de datos modular en fila de SOETECK incorpora un sistema eficiente de distribución de energía, con una gama de UPS de rack y módulos de distribución a medida. Los clientes pueden elegir entre baterías de litio o de plomo-ácido para rack, según sus necesidades. También ofrecemos servicios de selección de UPS a medida, junto con el diseño y la fabricación completos de la distribución.';

export const ROW_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'UPS de la serie SY-RT (1-3kVA)',
    subtitle: 'UPS en línea de alta frecuencia, 1kVA-3kVA, PF1',
    slug: 'soeteck-sy-rt-series-high-frequency-online-ups-1kva-3kva-rack-tower-mounted-pf1',
    excerpt: 'La UPS de la serie SY-RT (1-3kVA) ofrece una protección en línea fiable de doble conversión, con salida PF1, amplio rango de tensión de entrada de 110-300VAC y un diseño compacto rack/torre. Alcanza un 96% de eficiencia en modo ECO, con tiempo de transferencia de 0ms.',
    specs: ['Eficiencia PF1', 'Tiempo de transferencia 0ms', 'Rango de 110-300VAC', '96% de eficiencia en modo ECO'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF11.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF12.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF13.webp',
    ],
  },
  {
    title: 'UPS de la serie SY-RT (1-10kVA)',
    subtitle: 'UPS en línea de alta frecuencia, 1kVA-10kVA, PF0.9',
    slug: 'soeteck-sy-rt-series-winner-pro-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted-pf0-9',
    excerpt: 'La UPS SY-RT Winner Pro de SOETECK (1-10kVA) ofrece una protección en línea fiable con salida PF0.9, amplio rango de tensión de entrada y montaje flexible en rack/torre para despliegues versátiles en aplicaciones de centro de datos modular en fila.',
    specs: ['Eficiencia PF0.9', 'Doble conversión en línea', 'Montaje en rack/torre', 'Amplio rango de entrada'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-2.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-4.webp',
    ],
  },
  {
    title: 'UPS de la serie SY-RT (1-10kVA)',
    subtitle: 'UPS en línea de alta frecuencia, 1kVA-10kVA, PF0.8',
    slug: 'soeteck-sy-rt-series-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted',
    excerpt: 'La UPS de la serie SY-RT (1-10kVA) ofrece una protección en línea fiable con PF0.8, eficiencia de hasta el 93% y montaje flexible en rack/torre para despliegues versátiles. Ideal para proteger equipos críticos en entornos de centro de datos y empresariales.',
    specs: ['PF0.8', 'Eficiencia de hasta el 93%', 'Montaje en rack y torre', 'Configuración flexible'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-4.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-2.webp',
    ],
  },
];

export const ROW_THERMAL_HEADING = 'Gestión Térmica';
export const ROW_THERMAL_MANAGEMENT_TEXT =
  'SOETECK ofrece soluciones completas de refrigeración a medida para centros de datos y estaciones base, incluidos sistemas de aire acondicionado de precisión a nivel de sala, fila y rack. Para atender eficazmente las demandas de refrigeración de las aplicaciones de computación de alta densidad dentro de gabinetes individuales, nuestros sistemas de precisión de rack y de fila están diseñados para la eficiencia y la rentabilidad.';

export const ROW_THERMAL_PRODUCTS = [
  {
    title: 'Refrigeración en fila DX de condensación por aire',
    subtitle: 'Capacidad de 5.6kW – 90.1kW',
    slug: 'soeteck-dx-air-cooled-in-row-cooling-system-5-6kw-90-1kw-capacity',
    excerpt: 'Sistema de refrigeración de precisión en fila para una gestión térmica eficaz a nivel de fila.',
    specs: ['Rango de 5.6kW-90.1kW', 'DX por aire', 'Instalación en fila', 'Control de precisión'],
    images: [
      '/resources/SOETECK-air-cooled-in-row-cooling-system-5.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-6.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-3.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-4.webp',
    ],
  },
  {
    title: 'Refrigeración de sala DX de condensación por aire',
    subtitle: 'Capacidad de 32.5kW – 120kW',
    slug: 'soeteck-dx-air-cooled-room-cooling-system-32-5kw-120kw-capacity-up-down-flow',
    excerpt: 'Refrigeración de precisión a nivel de sala con configuraciones de flujo ascendente/descendente.',
    specs: ['Rango de 32.5kW-120kW', 'Configuración de flujo ascendente/descendente', 'DX por aire', 'Precisión a nivel de sala'],
    images: [
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-1.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-2.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-5.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-6.webp',
    ],
  },
  {
    title: 'Refrigeración de rack compacta',
    subtitle: 'Capacidad de 3.5kW, 8U',
    slug: 'soeteck-packaged-rack-cooling-system-3-5kw-capacity-8u-bottom-or-middle-mounted',
    excerpt: 'Sistema compacto de refrigeración de rack con refrigerante R410A e integración con BMS.',
    specs: ['Refrigeración de 3.5kW', 'Montaje inferior o intermedio', 'Refrigerante R410A', 'Integración con BMS'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
];

export const ROW_GALLERY_ARIA = 'galería';

// Specs table
export const ROW_SPECS_TITLE = 'Modelos destacados';
export const ROW_SPEC_HEADER_MODELS = 'Modelos';
export const ROW_PDF_LINK_TEXT = 'Solución de Centro de Datos Modular en Fila SOETECK.pdf';

export const ROW_SPEC_COLUMNS = [
  { model: 'SY-RMDC-03', image: '/resources/cabinet-modular-data-center-31.webp' },
  { model: 'SY-RMDC-06', image: '/resources/cabinet-modular-data-center-41.webp' },
  { model: 'SY-RMDC-10', image: '/resources/cabinet-modular-data-center-51.webp' },
  { model: 'Personalizado', image: '/resources/cabinet-modular-data-center-61.webp' },
];

export const ROW_SPEC_ROWS = [
  ['Tipo de refrigeración', 'AC en rack', 'AC en fila', 'AC en fila', 'Personalizado'],
  ['Capacidad máxima de refrigeración', '3.5 kW', '6.5 kW', '12.5 kW', 'Personalizado'],
  ['Capacidad de UPS', '3 kVA', '6 kVA', '10 kVA', '3-20 kVA'],
  ['Cantidad de gabinetes', '1-3', '3-6', '6-10', 'Personalizado'],
  ['Redundancia', 'N', 'N', 'N', 'N, N+1, 2N'],
  ['Grado de protección', 'IP5X', 'IP5X', 'IP55', 'Personalizado'],
  ['Monitoreo', 'Pantalla táctil', 'Pantalla táctil', 'Pantalla táctil + remoto', 'Personalizado'],
];

// Scenarios
export const ROW_SCENARIOS_TITLE = '¿Quién necesita un Centro de Datos Modular en Fila?';
export const ROW_SCENARIOS_SUBTITLE =
  'Escenarios de aplicación: integración de módulos de energía, refrigeración e infraestructura para operaciones de TI fiables — donde el centro de datos modular en fila aporta un valor único';
export const ROW_SCENARIO_DETAILS_ARIA = 'detalles';
export const ROW_TAB_BENEFITS = 'Beneficios de la solución';
export const ROW_TAB_PAIN = 'Principales puntos de dolor';

export const ROW_SCENARIOS = [
  {
    title: 'Salas de servidores pequeñas',
    image: '/resources/enterprise-small-computer-room-1.webp',
    pain_points: ['Espacio limitado', 'Personal de TI insuficiente', 'Mantenimiento complejo'],
    benefits: ['Diseño compacto', 'Monitoreo integrado', 'Expansión gradual'],
    problem: 'Las salas de servidores de pequeñas empresas sufren un espacio limitado que restringe la incorporación de nuevos equipos. Los equipos de TI reducidos batallan con el mantenimiento complejo, mientras que los dispositivos dispersos y los cables enredados reducen la eficiencia de la gestión.',
    solution: 'El diseño compacto aprovecha al máximo el espacio. Un sistema de monitoreo integrado centraliza la gestión de los equipos y reduce el trabajo manual. Al admitir la expansión gradual desde unos pocos gabinetes, evita grandes inversiones iniciales.',
    application: 'Salas de TI corporativas, sucursales',
  },
  {
    title: 'Sitios de edge computing',
    image: '/resources/Edge-Computing.webp',
    pain_points: ['Ubicación remota', 'Entorno severo', 'Personal en sitio limitado'],
    benefits: ['Diseño de amplio rango térmico', 'Monitoreo remoto', 'Eficiencia energética'],
    problem: 'Los sitios de edge en zonas remotas cuentan con infraestructura precaria, y las grandes fluctuaciones de temperatura y humedad provocan fallas frecuentes de los equipos. Con pocos técnicos en el sitio, la respuesta a los incidentes se retrasa.',
    solution: 'El diseño de amplio rango térmico garantiza estabilidad entre -10℃ y 40℃. El monitoreo remoto integrado permite operar sin personal en sitio. La refrigeración optimizada reduce el consumo de energía en un 30% y admite energía solar.',
    application: 'Sitios remotos de perforación, operaciones mineras',
  },
  {
    title: 'Expansión de centro de datos',
    image: '/resources/Data-Center-Expansion.webp',
    pain_points: ['Ciclos largos de planificación', 'Tiempo de inactividad en el despliegue', 'Problemas de compatibilidad'],
    benefits: ['Plug-and-play', 'Expansión en paralelo', 'Balanceo automático'],
    problem: 'La expansión tradicional implica largas planificaciones y obras. La instalación de nuevos equipos suele requerir tiempo de inactividad, poniendo en riesgo la continuidad del negocio.',
    solution: 'Los módulos prefabricados en fábrica permiten un despliegue plug-and-play que reduce el tiempo de montaje en más de un 70%. La expansión en paralelo evita interrumpir las operaciones existentes.',
    application: 'Centros de datos en la nube, expansión de TI empresarial',
  },
  {
    title: 'Oficinas con múltiples sucursales',
    image: '/resources/branch-office-1.webp',
    pain_points: ['Sin TI dedicada', 'Monitoreo remoto', 'Ubicaciones dispersas'],
    benefits: ['Alarmas multinivel', 'Plataforma remota', 'Diseño redundante'],
    problem: 'Las salas de servidores de las sucursales carecen de personal de TI dedicado, lo que dificulta el monitoreo de los equipos en tiempo real. Las fallas no se atienden con prontitud y ponen en riesgo la continuidad del negocio.',
    solution: 'El monitoreo integral activa alarmas multinivel ante anomalías. Las plataformas remotas se encargan de la mayor parte de la gestión diaria y del diagnóstico de fallas.',
    application: 'Sucursales bancarias, cadenas minoristas',
  },
  {
    title: 'Eventos temporales',
    image: '/resources/Temporary-Deployment-Needs-1.webp',
    pain_points: ['Montaje rápido necesario', 'Sin infraestructura en el sitio', 'Desmontaje tras el evento'],
    benefits: ['Montaje en horas', 'Autónomo', 'Reutilizable'],
    problem: 'Los escenarios temporales exigen desplegar TI con rapidez, pero la instalación de equipos tradicionales es compleja y lenta. Los recintos suelen carecer de energía y refrigeración estables.',
    solution: 'El diseño modular permite montar el sistema en cuestión de horas. Las unidades integradas de energía y refrigeración operan de forma independiente de la infraestructura del sitio.',
    application: 'Exposiciones, respuesta a emergencias',
  },
  {
    title: 'Laboratorios de I+D',
    image: '/resources/Laboratory-RD-Environments.webp',
    pain_points: ['Reconfiguraciones frecuentes', 'Necesidades de energía variables', 'Gestión de cableado'],
    benefits: ['Módulos flexibles', 'Cableado preintegrado', 'Interfaces estandarizadas'],
    problem: 'Los laboratorios de I+D necesitan ajustar equipos y distribución con frecuencia, algo que las salas tradicionales fijas no admiten. Las necesidades de energía y refrigeración varían según el escenario de prueba.',
    solution: 'Los componentes modulares admiten una reconfiguración flexible y cambios de modo según las necesidades de prueba. El cableado preintegrado mantiene el entorno ordenado.',
    application: 'Laboratorios de investigación, instalaciones de pruebas',
  },
];

// Client cases section
export const ROW_CASES_TITLE = 'Casos de éxito de Centro de Datos Modular en Fila';

// Bottom contact CTA
export const ROW_CONTACT_EYEBROW = 'Hable con un ingeniero';
export const ROW_CONTACT_TITLE = 'Póngase en contacto con SOETECK';
export const ROW_CONTACT_TEXT =
  'Comparta los requisitos de su instalación y reciba un camino práctico hacia la solución. Cuéntenos el tipo de proyecto, las necesidades de capacidad y el cronograma — nuestro equipo le ayudará a identificar la configuración adecuada.';
export const ROW_CONTACT_CHECKS = [
  'Consultoría de proyecto',
  'Soporte técnico de configuración',
  'Seguimiento regional',
];
export const ROW_CONTACT_BUTTON = 'Contáctenos';
export const ROW_CONTACT_BROCHURE = 'Descargar folleto';

// Reuse client cases from prefab-content.ts - import via PREFAB_CLIENT_CASES