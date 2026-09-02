/**
 * Data Center Cooling Solutions — contenido en español (traducción code-embedded, Batch 3).
 * La estructura refleja íntegramente data-center-cooling-content.ts (EN), con los mismos nombres de export;
 * rutas de imágenes, enlaces, modelos, números y unidades se conservan sin cambios.
 * Terminología: tmp/translation-batch3/TERMINOLOGY-AND-RULES.md (§1 / §2);
 * títulos y resúmenes de casos según las traducciones confirmadas del CMS (archivo compartido de prefab, 2026-09-02).
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
  eyebrow: 'Aire acondicionado de precisión para centros de datos',
  title: 'Soluciones de Refrigeración para Centros de Datos',
  subtitle:
    'Soeteck le ofrece soluciones de gestión térmica con excelente relación costo-eficiencia para centros de datos, estaciones de telecomunicaciones, laboratorios y todo tipo de instalaciones críticas.',
  bannerImage: '/resources/soeteck-data-center-banner-1.webp',
  bannerAlt: 'Refrigeración de precisión para centros de datos',
};

export const DCC_SECTION_INTRO = {
  title: 'Aire Acondicionado de Precisión',
  subtitle:
    'Con una gama completa de equipos de refrigeración de precisión, nuestras soluciones para entornos de misión crítica están diseñadas para atender sus más diversas necesidades de refrigeración.',
};

export const DCC_SECTION_HEADINGS = {
  applications: 'Aplicaciones',
  services: 'Servicios',
  cases: 'Casos de Éxito Destacados',
  moments: 'Momentos con Clientes',
};

export const DCC_PAC_PRODUCTS: DccProductCard[] = [
  {
    name: 'Aire Acondicionado de Precisión para Sala',
    capacity: '7.5 – 265.8 kW',
    description:
      'Los aires acondicionados de precisión de la serie DataCool (PAC) están diseñados para aportar la gran capacidad de refrigeración (7.5kW-265.8kW) que requieren las salas de computadoras de gran escala y los centros de datos, con múltiples opciones de refrigeración: por aire, por agua y por agua helada (chilled water). Con EER ≥ 3.0 para una mayor eficiencia de costos y escalabilidad flexible (soporta sistemas simples y duales), reducen la inversión inicial y permiten una expansión fluida en el futuro.',
    image: '/resources/Soeteck-chilled-water-room-cooling-system-38.2-265.8kW-4.webp',
    link: '/products/thermal-management/precision-air-conditioning/room-cooling/',
  },
  {
    name: 'Aire Acondicionado de Precisión en Fila',
    capacity: '7.5 – 93.2 kW',
    description:
      'Los aires acondicionados de precisión de la serie DataRow (PAC) están diseñados para instalarse entre gabinetes de centros de datos modulares en fila o modulares de pasillo. Con control inteligente avanzado y capacidad de refrigeración flexible (ajustable de 20-100%), incrementan en 33.3%-50% la eficiencia energética de las unidades estándar de aire.',
    image: '/resources/SOETECK-Row-Mounted-Pumped-Refrigerant-Cooling-System-1.webp',
    link: '/products/thermal-management/precision-air-conditioning/in-row-cooling/',
  },
  {
    name: 'Aire Acondicionado de Precisión para Rack',
    capacity: '2.5 – 12.5 kW',
    description:
      'Los aires acondicionados de precisión de la serie DataRack (PAC) están hechos a medida para integrarse directamente en racks de servidores estándar de centros de datos modulares en gabinete, con un rango de capacidad de refrigeración de 3.5kW-12.5kW y una altura compacta de 6U-12U. Equipados con refrigerante ecológico R410A y controladores de precisión, optimizan la refrigeración del equipo de TI de alta densidad y reducen el consumo energético innecesario.',
    image: '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
    link: '/products/thermal-management/precision-air-conditioning/rack-cooling/',
  },
  {
    name: 'Aire Acondicionado de Precisión para Montaje en Pared',
    capacity: '12.5 – 21.2 kW',
    description:
      'Los aires acondicionados de precisión para montaje en pared de Soeteck ofrecen refrigeración de alta eficiencia para aplicaciones compactas (packaged) en interiores y exteriores. Componentes avanzados, como una bomba de refrigerante con inversor y un controlador inteligente, garantizan un desempeño preciso: la elección ideal para centros de datos modulares en contenedor. Reducen el PUE y soportan la operación de doble modo para optimizar la eficiencia energética.',
    image: '/resources/SOETECK-Wall-Mounted-Hybrid-Refrigerant-Green-Cooling-3.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-wall-mounted-pumped-refrigerant-cooling-system-indoor-and-outdoor-packaged/',
  },
  {
    name: 'Aire Acondicionado de Precisión para Gabinete de Telecomunicaciones',
    capacity: '12.5 – 21.2 kW',
    description:
      'Los aires acondicionados de precisión para gabinetes de Soeteck entregan refrigeración de alta eficiencia para aplicaciones cerradas y compactas. Componentes avanzados, como una bomba de refrigerante con inversor y un controlador inteligente, garantizan un desempeño preciso: la elección ideal para centros de datos modulares en contenedor. Reducen el PUE y soportan la operación de doble modo para optimizar la eficiencia energética.',
    image: '/resources/DC-Powered-TEC-Air-Conditioner-3.webp',
    link: '/products/thermal-management/telecom-enclosure-air-conditioner/',
  },
  {
    name: 'Unidades Exteriores',
    capacity: '12.5 – 21.2 kW',
    description:
      'Las unidades exteriores de Soeteck ofrecen rechazo de calor de alta eficiencia para los sistemas de refrigeración de precisión. Componentes avanzados, como una bomba de refrigerante con inversor y un controlador inteligente, garantizan un desempeño preciso: la elección ideal para centros de datos modulares en contenedor. Reducen el PUE y soportan la operación de doble modo para optimizar la eficiencia energética.',
    image: '/resources/SOETECK-Outdoor-Air-Cooled-Condenser-UprightHorizontal-Installation-8.webp',
    link: '/products/thermal-management/heat-rejection/',
  },
];

export const DCC_SECTION_FANWALL = {
  title: 'Sistema de Refrigeración de Precisión Fan Wall',
  subtitle:
    'Para necesidades de refrigeración de mediano a gran porte, nuestro sistema fan wall ofrece soluciones de precisión más confiables y eficientes energéticamente, con capacidad que se adapta a la carga de centros de datos nuevos y existentes.',
};

export const DCC_FANWALL_PRODUCTS: DccProductCard[] = [
  {
    name: 'Fan Wall Modular',
    capacity: '150.1 – 300.1 kW',
    description:
      'Las unidades fan wall de la serie FO.GBE de Soeteck son sistemas de refrigeración de precisión de bajo consumo, adecuados para entornos de sala de máquinas como centros de datos, centros de comunicación, centros de cómputo y centros de control. Además de la eficiencia energética: bajo nivel de ruido, prefabricación modular y diseño con redundancia de ventiladores.',
    image: '/resources/SOETECK-FO.GBE-Modular-Fanwall-Cooling-2.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-fo-gbe-modular-fanwall-cooling-150-1kw-300-1kw-capacity/',
  },
  {
    name: 'Fan Wall Integrado',
    capacity: '30.2 – 60.1 kW',
    description:
      'Las unidades fan wall de la serie FO.WL de Soeteck son sistemas de control ambiental de precisión de mediano a gran porte, con estructura integrada, capacidad de refrigeración escalable y pequeña huella de instalación. El aire caliente de los servidores ingresa directamente para su refrigeración; son adecuadas para salas de equipos o centros de datos, garantizando la operación confiable y segura de dispositivos de precisión.',
    image: '/resources/SOETECK-FO.WL-Fan-Wall-4.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-fo-wl-fan-wall-cooling-units/',
  },
];

export const DCC_APPLICATIONS_INTRO =
  'Nuestras soluciones PAC se utilizan como CRAC, refrigeración de salas de servidores, unidades de refrigeración de centros de datos y todo tipo de sistemas HVAC en centros de datos, telecomunicaciones, laboratorios y museos.';

export const DCC_APPLICATIONS: DccApplication[] = [
  {
    title: 'Centros de Datos',
    description:
      'Las cargas térmicas continuas de los servidores exigen refrigeración de precisión de alto flujo de aire, manteniendo ±1 °C y ±5 %RH, evitando puntos calientes y garantizando la disponibilidad digital 24×7.',
    image: '/resources/soeteck-data-center-cooling-1.webp',
  },
  {
    title: 'Instalaciones de Telecomunicaciones',
    description:
      'Las centrales de conmutación y los equipos 5G dependen de aires acondicionados de precisión que mantienen un control climático estricto y el filtrado de polvo, asegurando un servicio de red ininterrumpido.',
    image: '/resources/soeteck-telecom-facilities-2.webp',
  },
  {
    title: 'Laboratorios',
    description:
      'Los laboratorios de análisis necesitan ±1 °C estable, humedad controlada y limpieza; los sistemas de precisión evitan la deriva térmica, protegen los reactivos y aseguran experimentos repetibles.',
    image: '/resources/Soeteck-Laboratories-2.webp',
  },
  {
    title: 'Museos y Archivos',
    description:
      'Los libros raros y las obras de arte perduran por décadas cuando la refrigeración de precisión mantiene 20 °C y 50 %RH con filtración suave, evitando moho, acidez y deformaciones.',
    image: '/resources/Soeteck-Museums-Archives-Cooling-2.webp',
  },
];

export const DCC_SERVICES_INTRO =
  'Nuestro equipo dedicado ofrece una gama de servicios a medida para asegurar que reciba aires acondicionados de precisión de la más alta calidad, hoy y en el futuro.';

export const DCC_SERVICES: DccService[] = [
  {
    title: 'OEM/ODM',
    description: 'Ofrecemos servicios OEM/ODM que permiten personalizar los productos de acuerdo con su marca y sus especificaciones de diseño.',
    icon: 'factory',
  },
  {
    title: 'Consultoría',
    description:
      'Nuestro equipo comercial atiende sus necesidades específicas y, junto con los expertos de soporte de producto, le brinda recomendaciones de compra personalizadas.',
    icon: 'chat',
  },
  {
    title: 'Diseño',
    description:
      'En la fase de diseño del producto, nuestros expertos colaboran con usted para crear soluciones de refrigeración innovadoras y eficientes que respondan a sus requerimientos.',
    icon: 'pen',
  },
  {
    title: 'Producción',
    description:
      'Procesos de manufactura de vanguardia aseguran la producción de alta calidad de los sistemas de refrigeración, conforme a los estándares de la industria y a sus especificaciones.',
    icon: 'gear',
  },
  {
    title: 'Garantía de Calidad',
    description:
      'Estrictos controles de calidad durante toda la producción garantizan la confiabilidad del producto; el reporte de calidad se proporciona a demanda.',
    icon: 'check',
  },
  {
    title: 'Soporte Posventa',
    description:
      'Un equipo de soporte experimentado brinda servicios posventa sin preocupaciones, y la capacitación técnica profesional mantiene su sistema en operación permanente.',
    icon: 'headset',
  },
];

export const DCC_WHY = {
  title: '¿Por qué elegir SOETECK?',
  manufacturing: {
    title: 'Instalaciones de Manufactura Avanzadas',
    description:
      'En SOETECK priorizamos la innovación y el desarrollo de productos, respaldados por instalaciones avanzadas que incluyen laboratorios de compatibilidad electromagnética, análisis de diferencia de entalpía, confiabilidad ambiental, ruido y vibración, medición de potencia y protección IP. Estos laboratorios de última generación nos permiten someter nuestros productos a pruebas rigurosas y asegurar que cumplan los más altos estándares de desempeño y confiabilidad.',
    statsAria: 'SOETECK en cifras',
    factoryAria: 'Instalaciones de manufactura de SOETECK',
    icon: 'factory',
    stats: [
      { value: 11, suffix: '+', label: 'Años de experiencia' },
      { value: 500, suffix: '+', label: 'Ingresos (millones)' },
      { value: 120, suffix: '+', label: 'Empleados en China' },
      { value: 80, suffix: '+', label: 'Países cubiertos' },
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
    title: 'Certificaciones Destacadas',
    description:
      'Mantenemos prácticas rigurosas de gestión de calidad y ambiental, reflejadas en nuestras certificaciones: ISO9001 para gestión de calidad, ISO14001 para gestión ambiental e ISO45001 para salud y seguridad ocupacional. Además, nuestros productos cumplen con estándares internacionales y están certificados por organismos como CE, lo que refuerza nuestro compromiso con la seguridad, la sostenibilidad y la excelencia.',
    certsAria: 'Certificaciones destacadas',
    icon: 'award',
    items: [
      { image: '/resources/Soeteck-CE-Certificates-for-PAC-1.webp', label: 'CE SOETECK para PAC' },
      { image: '/resources/Soeteck-CE-Certificates-for-UPS.webp', label: 'CE SOETECK para UPS' },
      { image: '/resources/Soeteck-ISO9001-2.webp', label: 'SOETECK ISO9001' },
      { image: '/resources/Soeteck-ISO14001-12.webp', label: 'SOETECK ISO14001' },
      { image: '/resources/Soeteck-ISO45001-2.webp', label: 'SOETECK ISO45001' },
      { image: '/resources/Soeteck-UPS-IEC.webp', label: 'SOETECK UPS IEC' },
    ],
  },
};

export const DCC_CASES_INTRO =
  'Descubra, a través de historias reales de éxito, cómo entregamos soluciones PAC innovadoras. Estos casos destacan nuestra experiencia en superar desafíos complejos y generar resultados medibles para clientes de diversas industrias.';

export const DCC_CLIENT_CASES: DccCase[] = [
  {
    imgSrc: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp',
    title:
      'Sinus-Dochi LLC reduce el PUE y mejora la eficiencia de refrigeración con el sistema inteligente de refrigeración de precisión de SOETECK',
    slug: 'sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system',
    desc: 'Sinus-Dochi LLC, una destacada empresa de servicios de HVAC en Mongolia, se especializa en refrigeración y cuenta con un equipo de ingenieros expertos. La empresa buscó mejorar la eficiencia energética y el rendimiento de refrigeración de sus instalaciones. Para lograrlo, Sinus-Dochi se asoció con SOETECK para diseñar e implementar un sistema de refrigeración de precisión de vanguardia, a la medida de sus necesidades.',
  },
  {
    imgSrc: '/resources/prefab-modular-data-center-of-Saudi-Telecom-6.webp',
    title:
      'Impulsando la Innovación: SOETECK proporciona a Saudi Telecom soluciones avanzadas de centro de datos contenerizado móvil con OLT',
    slug: 'driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions',
    desc: 'El proyecto de DR para Saudi Telecom se inició para diseñar e implementar un centro de datos contenerizado móvil con OLT (Optical Line Terminal) totalmente personalizable, mejorando las capacidades operativas de los operadores de telecomunicaciones en Oriente Medio. Esta solución innovadora permite el despliegue rápido de aplicaciones avanzadas de negocio, garantizando alta eficiencia y confiabilidad.',
  },
  {
    imgSrc: '/resources/100KW-Cooling-System-Solution-In-Malaysia-0.webp',
    title:
      'Open DC Malaysia implementa refrigeración de precisión modular de 100KW por aire para la modernización de su centro de datos',
    slug: 'open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit',
    desc: 'Open DC Malaysia es una destacada empresa de tecnología de redes y servicios en la nube especializada en servicios de almacenamiento de servidores. La empresa llevó a cabo una modernización de su centro de datos existente para actualizar la infraestructura de refrigeración y responder a las nuevas demandas operativas.',
  },
  {
    imgSrc: '/resources/a-project-of-Telecom-Fiji-1.webp',
    title:
      'Telecom Fiji Mejora la Estabilidad de la Red con las Soluciones de Refrigeración de Precisión de SOETECK con Diseño Anticorrosión',
    slug: 'telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design',
    desc: 'Telecom Fiji Limited, proveedor líder de servicios de comunicación por línea fija y redes en Fiyi, enfrentó riesgos operativos críticos debido a sistemas de refrigeración inadecuados en sus estaciones costeras de telecomunicaciones. Muchas instalaciones dependían de unidades de aire acondicionado residencial de tamaño insuficiente, que apenas podían manejar el calor de los equipos de telecomunicaciones operando 24/7 y eran vulnerables a la corrosión del entorno costero de Fiji.',
  },
];

export const DCC_MOMENTS_INTRO =
  'En Soeteck valoramos cada conexión. Desde visitas llenas de aprendizajes hasta experiencias en vivo, estas son las historias que dan forma a nuestro futuro compartido. ¿Quiere ser parte de ello? Contáctenos para agendar su visita ¡y creemos juntos su momento!';

export const DCC_MOMENTS_IMAGES: { src: string; alt: string }[] = [
  { src: '/resources/Soeteck-and-Fiber-Ocean-3.webp', alt: 'Visita del equipo de Fiber Ocean a Soeteck' },
  { src: '/resources/Soeteck-and-Russian-clients-16.webp', alt: 'Soeteck con clientes rusos' },
  { src: '/resources/Soeteck-and-Russian-clients-15.webp', alt: 'Soeteck con clientes rusos' },
  { src: '/resources/Soeteck-and-Russian-clients-14.webp', alt: 'Soeteck con clientes rusos' },
  { src: '/resources/Soeteck-and-Russian-clients-13.webp', alt: 'Soeteck con clientes rusos' },
  { src: '/resources/Soeteck-and-Russian-clients-12.webp', alt: 'Soeteck con clientes rusos' },
  { src: '/resources/Soeteck-and-Russian-clients-11.webp', alt: 'Soeteck con clientes rusos' },
  { src: '/resources/Soeteck-and-Russian-clients-10.webp', alt: 'Soeteck con clientes rusos' },
];

export const DCC_CTA = {
  eyebrow: 'Hable con un Ingeniero',
  title: 'Contáctese con SOETECK',
  text: '¡Estamos a solo unos clics de distancia! Complete el formulario a continuación para recibir todo nuestro respaldo y sentar las bases de su éxito futuro.',
};
