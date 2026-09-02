/**
 * AI Data Center solution page — contenido en español (modo translate-code-embedded, Batch 3).
 * Estructura idéntica a ai-data-center-content.ts (EN); nombres de exportación espejan el EN.
 * Marca SOETECK se mantiene; siglas técnicas (kW, MW, PUE, CDU, GPU, UPS, PDU, N+1, SNMP,
 * FAT, NOC, SLA, ISO, BMS, DCIM) permanecen en inglés según el paquete de terminología.
 */
import type { AIDCConfig, AIDCClient, AIDCRelated, AIDCFaq } from './ai-data-center-content';

// Config no traducida (copia del EN): al publicar el folleto, actualizar junto con el EN
export const BROCHURE_URL: string | null = null;

export const AIDC_HERO = {
  eyebrow: 'Infraestructura de Centro de Datos AI',
  title: 'Diseñado para la era de la GPU',
  titlePrefix: 'Infraestructura de Centro de Datos AI',
  subtitle:
    'Desde la inferencia en el borde hasta clústeres de GPU hiperscale: prefabricado, con refrigeración líquida, envío global y operativo en 120 días.',
  bannerImage: '/resources/ai-data-center/ai-data-center-hero.webp',
  ctaPrimary: { label: 'Solicite su cotización personalizada', href: '/contact-us/' },
  ctaSecondary: { label: 'Descargue el folleto técnico', href: BROCHURE_URL },
};

export const AIDC_PROBLEM = {
  eyebrow: 'El desafío',
  title: 'Su infraestructura de AI no debería ser el cuello de botella',
  intro:
    'La revolución de las GPUs superó el diseño tradicional de los centros de datos. Las GPU H100 y B200 exigen densidades de potencia que rompen los límites de la refrigeración convencional — y plazos de construcción que no siguen el ritmo de la innovación en AI.',
  points: [
    { icon: 'calendar', stat: '2–3', unit: 'años de construcción', text: 'Los centros de datos tradicionales requieren de 24 a 36 meses desde la planificación hasta la puesta en servicio. Cuando la instalación está lista, su arquitectura de GPU ya está una generación atrás.' },
    { icon: 'temp', stat: '25', unit: 'kW — el límite del aire', text: 'Por encima de 25kW por rack, la refrigeración por aire forzado simplemente no extrae el calor con suficiente rapidez. Los clústeres NVIDIA H100 superan habitualmente los 40kW — y el B200 rebasa los 100kW. La refrigeración por aire ya no es una opción.' },
    { icon: 'cost', stat: '$50M+', unit: 'de capital antes de la primera GPU', text: 'La construcción convencional exige un capital inicial masivo — adquisición del terreno, permisos, obra civil, infraestructura MEP — todo antes de instalar un solo servidor. Esto retrasa el ROI e inmoviliza capital durante años.' },
  ],
};

export const AIDC_PLATFORM = {
  eyebrow: 'La plataforma',
  title: 'La plataforma de infraestructura de AI de SOETECK',
  intro:
    'Una plataforma integrada que entrega el centro de datos de AI completo — térmica, energía, estructura y control — diseñada a medida para su carga de trabajo de GPU.',
  pillars: [
    { icon: 'container', title: 'Prefabricado y contenedorizado', text: 'Cada centro de datos de AI de SOETECK se fabrica en planta dentro de contenedores marítimos ISO estándar. 95% preensamblado, probado en nuestra fábrica y enviado a todo el mundo. Conecte energía, red y agua — la computación comienza.' },
    { icon: 'cool', title: 'Refrigeración líquida integrada', text: 'La tecnología de cold plates de contacto directo con el chip extrae el calor en la fuente. Unidades de Distribución de Refrigerante (CDU) integradas que gestionan hasta 1.5MW de carga térmica por módulo. PUE tan bajo como 1.08.' },
    { icon: 'power', title: 'Distribución eléctrica de alta densidad', text: 'Desde tableros de media tensión hasta PDU de rack inteligentes — diseñado para 40–120kW por rack. UPS modulares de iones de litio, canalización de 800A, medición por tomacorriente.' },
    { icon: 'gpu', title: 'Arquitectura agnóstica de GPU', text: 'Sin dependencia de un solo fabricante. Soporte total para NVIDIA H100/H200/B200, AMD MI300X, Huawei Ascend 910B/C e Intel Gaudi. Elija la GPU que se ajuste a su carga de trabajo y presupuesto.' },
  ],
};

export const AIDC_CONFIGS: AIDCConfig[] = [
  {
    id: 'edge',
    name: 'AI-Edge',
    tagline: 'Inferencia en el borde',
    inquireLabel: 'Consultar por AI-Edge',
    bestFor: 'Inferencia de AI en el borde, manufactura inteligente, edge 5G de telecom, AI en retail',
    specs: [
      { label: 'Contenedor', value: 'Contenedor estándar ISO de 20ft' },
      { label: 'Potencia', value: '80–200 kW en total' },
      { label: 'Capacidad de GPU', value: '8–16 GPU (L40S, A10, A100)' },
      { label: 'Refrigeración', value: 'Refrigerado por aire estándar, refrigeración líquida opcional' },
      { label: 'Densidad por rack', value: 'Hasta 30 kW/rack' },
      { label: 'PUE', value: '1.15–1.25' },
      { label: 'Despliegue', value: '60–90 días' },
    ],
  },
  {
    id: 'core',
    name: 'AI-Core',
    tagline: 'Entrenamiento y fine-tuning',
    inquireLabel: 'Consultar por AI-Core',
    bestFor: 'Entrenamiento de LLM empresarial, fine-tuning de modelos de AI, clústeres de investigación universitaria',
    specs: [
      { label: 'Contenedor', value: 'Contenedor estándar ISO High-Cube de 40ft' },
      { label: 'Potencia', value: '300–600 kW en total' },
      { label: 'Capacidad de GPU', value: '32–64 GPU (H100, H200, B200, MI300X)' },
      { label: 'Refrigeración', value: 'Refrigeración líquida de contacto directo con el chip (CDU integrado)' },
      { label: 'Densidad por rack', value: 'Hasta 100 kW/rack' },
      { label: 'PUE', value: '1.08–1.15' },
      { label: 'Despliegue', value: '90–120 días' },
    ],
  },
  {
    id: 'flex',
    name: 'AI-Flex',
    tagline: 'Clústeres hiperscale',
    inquireLabel: 'Consultar por AI-Flex',
    bestFor: 'Entrenamiento de AI hiperscale, proveedores de nube de AI, centros nacionales de cómputo de AI',
    specs: [
      { label: 'Configuración', value: '4–20+ módulos de 40ft interconectados' },
      { label: 'Potencia', value: '2–20 MW en total' },
      { label: 'Capacidad de GPU', value: '256–2048+ GPU' },
      { label: 'Refrigeración', value: 'Refrigeración líquida centralizada con CDU distribuidos + módulos de inmersión opcionales' },
      { label: 'Densidad por rack', value: 'Hasta 120 kW/rack' },
      { label: 'PUE', value: '< 1.10 (1.03 con inmersión)' },
      { label: 'Despliegue', value: '120–180 días' },
    ],
  },
];

// Encabezados de la tabla = [columna de especificación, AI-Edge, AI-Core, AI-Flex]
export const AIDC_CONFIG_TABLE = {
  title: 'Una plataforma. Tres configuraciones. Escala infinita.',
  subtitle: 'Una sola plataforma de infraestructura de AI que escala desde la inferencia en el borde hasta clústeres hiperscale.',
  headers: ['Especificación', 'AI-Edge', 'AI-Core', 'AI-Flex'],
  rows: [
    { label: 'Contenedor', values: ['Contenedor estándar ISO de 20ft', 'Contenedor estándar ISO High-Cube de 40ft', '4–20+ módulos de 40ft interconectados'] },
    { label: 'Potencia', values: ['80–200 kW', '300–600 kW', '2–20 MW'] },
    { label: 'Capacidad de GPU', values: ['8–16 GPU', '32–64 GPU', '256–2048+ GPU'] },
    { label: 'Refrigeración', values: ['Refrigerado por aire estándar, líquido opcional', 'Líquido de contacto directo con CDU integrado', 'Líquido centralizado + inmersión opcional'] },
    { label: 'Densidad por rack', values: ['Hasta 30 kW', 'Hasta 100 kW', 'Hasta 120 kW'] },
    { label: 'PUE', values: ['1.15–1.25', '1.08–1.15', '< 1.10 (1.03 inmersión)'] },
    { label: 'Despliegue', values: ['60–90 días', '90–120 días', '120–180 días'] },
    { label: 'Ideal para', values: ['Inferencia en el borde, manufactura inteligente, edge 5G', 'Entrenamiento de LLM, fine-tuning, clústeres de investigación', 'AI hiperscale, nubes de AI, cómputo nacional'] },
  ],
};

export const AIDC_COOLING = {
  eyebrow: 'Refrigeración',
  title: 'Refrigeración que sigue el ritmo de las GPUs',
  intro:
    'La física es simple: los refrigerantes líquidos ofrecen más de 3000× la capacidad de extracción de calor por unidad de volumen que el aire. Todos los hyperscalers están migrando a la refrigeración líquida. La única pregunta es a qué velocidad.',
  tabs: [
    {
      id: 'cold-plate',
      label: 'Cold plates de contacto directo con el chip',
      image: '/resources/ai-data-center/ai-cold-plate-gpu-diagram.webp',
      text: 'La refrigeración líquida de contacto directo con el chip es el caballo de batalla de la infraestructura de AI moderna. Las cold plates se montan directamente sobre los heat spreaders de las GPU y CPU, haciendo circular un refrigerante dieléctrico por aletas de microcanales para extraer el calor en la fuente.',
      bullets: [
        'Extrae 85–90% del calor de la GPU en la cold plate — los ventiladores se encargan del 10–15% restante',
        'Soporta densidades de hasta 120 kW por rack en un gabinete estándar de 42U',
        'Utiliza refrigerante PG25 de propilenglicol — no conductivo, no tóxico, protegido contra congelamiento',
        'Tecnología probada: desplegada en supercomputadoras Top500 y clústeres de AI hiperscale',
        'Retrofit: los racks refrigerados por aire existentes pueden actualizarse con un tiempo mínimo de inactividad',
        'CDU en fila: 300 kW/unidad · CDU de sala: 800–1500 kW/unidad',
        'Configuraciones de bombas redundantes (N+1 o 2N) con monitoreo remoto SNMP/Modbus',
      ],
    },
    {
      id: 'immersion',
      label: 'Refrigeración por inmersión',
      image: '/resources/ai-data-center/ai-cooling-methods-comparison.webp',
      text: 'Para los despliegues de mayor densidad, la refrigeración por inmersión monofásica sumerge servidores de GPU completos en un fluido dieléctrico que absorbe el calor 1200× más eficientemente que el aire.',
      bullets: [
        'PUE tan bajo como 1.03 — el método de refrigeración más eficiente disponible',
        'Elimina todos los ventiladores del servidor — reduce el consumo del servidor en 10–15%',
        'Refrigeración uniforme en todos los componentes — sin puntos calientes',
        'Operación silenciosa — sin ruido de ventiladores',
        'El fluido dieléctrico es no corrosivo y dura más de 10 años sin reemplazo',
        'Disponible como módulo de inmersión dedicado dentro de la plataforma AI-Flex',
      ],
    },
    {
      id: 'air-fails',
      label: 'Por qué el aire se queda corto',
      image: '/resources/ai-data-center/ai-cooling-methods-comparison.webp',
      text: 'El aire tiene una capacidad calorífica volumétrica de ~1.2 kJ/m³·K. Los refrigerantes líquidos ofrecen 3500–4200 kJ/m³·K — más de 3000× la capacidad de extracción de calor por unidad de volumen.',
      bullets: [
        'Refrigeración por aire: techo práctico de 20–25 kW por rack con contención de pasillo caliente',
        'Líquido de contacto directo con el chip: opera con holgura a 60–120 kW por rack',
        'Refrigeración por inmersión: capaz de 100+ kW por rack sin derating',
        'Trayectoria de potencia de las GPU: H100 (700W) → B200 (1000W) → Rubin (1500W+) hace la decisión clara',
      ],
    },
  ],
};

export const AIDC_POWER = {
  eyebrow: 'Energía',
  title: 'Entrega de energía diseñada para la densidad de GPU',
  intro:
    'Los clústeres de GPU no solo necesitan más energía — la necesitan entregada de otra manera. Nuestra cadena integrada de distribución eléctrica está diseñada desde cero para cargas de trabajo de AI de alta densidad y misión crítica.',
  image: '/resources/ai-data-center/ai-power-flow-diagram.webp',
  modules: [
    { icon: 'ups', title: 'UPS Modular', text: 'Tecnología de baterías de iones de litio, redundancia N+1 o 2N, eficiencia del 98% en modo eco. Escalable de 100kW a 2MW por módulo. Módulos de batería con conexión en caliente y Sistema de Gestión de Baterías (BMS) integrado.' },
    { icon: 'busway', title: 'Canalización Enchufable', text: 'Canalización aérea de 160A–800A con cajas de derivación cada 600mm. Elimina la complejidad del cableado bajo piso. Las derivaciones con conexión en caliente permiten agregar o reubicar racks de GPU sin apagones.' },
    { icon: 'pdu', title: 'PDU de Rack Inteligente', text: 'Medición eléctrica por tomacorriente (precisión de ±1%), conmutación remota de tomacorrientes, sensores ambientales integrados (temperatura, humedad, contacto de puerta). SNMP v3 + REST API para integración con plataformas DCIM y BMS.' },
  ],
};

export const AIDC_TIMELINE = {
  eyebrow: 'Velocidad hacia el cómputo',
  title: 'Del pedido a la operación — en 120 días',
  intro: 'Del pedido a las GPUs operativas en 90–120 días, frente a los 24–36 meses de una construcción tradicional.',
  steps: [
    { month: 'Mes 1', title: 'Congelación del diseño', text: 'Requisitos confirmados. Selección de GPU finalizada. Diseño eléctrico aprobado.' },
    { month: 'Mes 2', title: 'Fabricación en planta y FAT', text: 'Contenedor fabricado. CDU de refrigeración integrado. Sistema completo probado en nuestra fábrica.' },
    { month: 'Mes 3', title: 'Flete marítimo', text: 'Logística gestionada del puerto al sitio. El despacho de aduana queda a cargo de nuestros socios globales de flete.' },
    { month: 'Mes 4', title: 'Puesta en marcha y operación', text: 'Conecte energía, red y agua. Pruebas de aceptación. Capacitación de operadores. El cómputo comienza.' },
  ],
  compareTraditional: '24–36 meses',
  compareSoeteck: '90–120 días',
};

export const AIDC_GLOBAL = {
  eyebrow: 'Logística global',
  title: 'Fabricado en China. Desplegado en todo el mundo.',
  text: 'Los centros de datos de AI de SOETECK están diseñados a medida para la logística global. Integrados en contenedores marítimos ISO estándar, viajan sobre la infraestructura de carga existente — buques portacontenedores, camiones plataforma y aviones de carga. Cada unidad pasa por pruebas de aceptación en fábrica (FAT) completas antes de salir de nuestra planta. Cuando llega a su sitio, está lista para la puesta en marcha — no para el ensamblaje.',
  image: '/resources/ai-data-center/ai-global-deployment-map.webp',
  facts: [
    { value: 'ISO 668', label: 'Formato de contenedor estándar — compatible con el envío global' },
    { value: '12.2×2.44×2.9m', label: 'Dimensiones de la unidad estándar de 40ft (largo×ancho×alto)' },
    { value: '18–25 t', label: 'Peso a plena carga — dentro de los límites de las grúas estándar' },
    { value: '30–45', label: 'Días de flete marítimo: Asia → Medio Oriente / Europa / África' },
  ],
  deploymentFlags: ['Arabia Saudita', 'Catar', 'Egipto', 'Nepal', 'Vanuatu', 'Francia'],
};

export const AIDC_CLIENTS: AIDCClient[] = [
  {
    name: 'GRD Qatar',
    description: 'Centro de datos contenedorizado a medida para operación estable 24/7 en el clima de Medio Oriente.',
    path: '/news-and-insights/client-case-studies/grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center/',
  },
  {
    name: 'Gobierno de Egipto',
    description: 'Auditoría de fábrica y gran proyecto de infraestructura digital para la modernización de centros de datos gubernamentales.',
    path: '/news-and-insights/news-releases/egyptian-government-project-delegation-visits-soeteck-for-factory-audit/',
  },
  {
    name: 'Saudi Telecom',
    description: 'Solución de centro de datos contenedorizado de OLT móvil que permite un despliegue rápido de la infraestructura 5G.',
    path: '/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/',
  },
  {
    name: 'WebSat Media',
    description: 'Optimización de la infraestructura de refrigeración del centro de datos, con mayor eficiencia y confiabilidad.',
    path: '/news-and-insights/client-case-studies/websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions/',
  },
];

// Enlaces cruzados de la plataforma hacia el ecosistema de líneas de producto.
export const AIDC_RELATED: AIDCRelated[] = [
  { icon: 'cool', title: 'Refrigeración de Precisión para Centros de Datos', description: 'Portafolio completo de refrigeración crítica: aires acondicionados de precisión de toda la línea, fan wall y refrigeración de sala/fila/rack.', path: '/solutions/data-center-cooling-solutions/' },
  { icon: 'container', title: 'Centro de Datos Modular en Contenedor', description: 'Centros de datos modulares fabricados en planta y enviados en ISO, entregados listos para la puesta en marcha.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
  { icon: 'grid', title: 'Familia de Plataformas Modulares', description: 'Centros de datos modulares de pasillo, gabinete y fila para capacidad on-premise flexible y escalable.', path: '/solutions/' },
  { icon: 'gpu', title: 'Serie de Refrigeración Líquida AICoolit', description: 'Contenedores de refrigeración líquida y CDU diseñados para clústeres de GPU de alta densidad.', path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
];

export const AIDC_FAQ: AIDCFaq[] = [
  {
    q: '¿Qué densidad de potencia admite su centro de datos de AI contenedorizado?',
    a: [
      'Nuestros contenedores con refrigeración líquida de contacto directo con el chip admiten hasta 120 kW por rack. Los módulos de inmersión admiten 100+ kW por rack sin derating. Las configuraciones refrigeradas por aire están disponibles hasta 25 kW por rack para cargas de trabajo más ligeras.',
    ],
  },
  {
    q: '¿Qué GPUs son compatibles con los centros de datos de AI de SOETECK?',
    a: [
      'Nuestra infraestructura es agnóstica de GPU por diseño. Soportamos NVIDIA H100, H200, B200 (NVL72), AMD MI300X, Huawei Ascend 910B/C e Intel Gaudi 3. Las power shelves y los kits de montaje de cold plates se personalizan según la plataforma de GPU elegida.',
    ],
  },
  {
    q: '¿Qué tan rápido entregan un centro de datos de AI completamente operativo?',
    a: [
      '90–120 días desde el pedido hasta la puesta en marcha para configuraciones estándar de hasta 5 MW. Las configuraciones a medida y los despliegues hiperscale AI-Flex pueden llevar de 120 a 180 días. En comparación, la construcción tradicional de centros de datos lleva de 24 a 36 meses.',
    ],
  },
  {
    q: '¿Qué medidas de seguridad protegen contra fugas de la refrigeración líquida?',
    a: [
      'Aplicamos un enfoque de defensa en profundidad: (1) lazos de refrigerante con presión negativa (ante cualquier fuga, el fluido retorna al sistema); (2) cables de detección de fugas tipo soga a lo largo de todas las tuberías; (3) bandejas de goteo de acero inoxidable bajo todas las conexiones; (4) sensores de conductividad monitoreados 24/7 con válvulas de cierre automático; (5) refrigerante PG25 de propilenglicol no conductivo que no daña la electrónica en caso de contacto.',
    ],
  },
  {
    q: '¿Cuál es el PUE típico de sus centros de datos de AI?',
    a: [
      'Refrigeración líquida de contacto directo con el chip: PUE de 1.08–1.15 según el clima. Refrigeración por inmersión: PUE tan bajo como 1.03. Ambos valores asumen refrigeración libre (free cooling) con enfriadores secos (dry coolers) donde el clima lo permite.',
    ],
  },
  {
    q: '¿Pueden operar sus centros de datos de AI en climas extremos?',
    a: [
      'Sí. Nuestros contenedores están especificados para temperaturas ambientales de -40°C a +55°C (+131°F). Hemos desplegado con éxito en ambientes desérticos de Medio Oriente (Arabia Saudita, Catar, Egipto) y en condiciones de islas tropicales (Vanuatu). Cada despliegue incluye configuraciones de refrigeración específicas para el clima.',
    ],
  },
  {
    q: '¿Ofrecen instalación y soporte en el sitio?',
    a: [
      'Sí. Nuestro equipo global de puesta en marcha viaja a su sitio para supervisión de la instalación, arranque del sistema, pruebas de aceptación y capacitación de operadores. También ofrecemos contratos anuales de mantenimiento opcionales con monitoreo remoto (NOC 24/7), visitas de mantenimiento preventivo y SLA de respuesta ante emergencias.',
    ],
  },
];

// Cadenas de UI a nivel de plantilla (antes fijas en AiDataCenterPage.astro)
export const AIDC_UI = {
  heroImageAlt: 'Infraestructura de centro de datos de AI',
  powerImageAlt: 'Cadena de distribución eléctrica del centro de datos de AI',
  globalImageAlt: 'Mapa de despliegue global de centros de datos de AI de SOETECK',
  coolingTablistAria: 'Soluciones de refrigeración',
  bestForLabel: 'Ideal para:',
  compareTraditionalLabel: 'Construcción tradicional de DC',
  compareSoeteckLabel: 'Despliegue de AI DC de SOETECK',
  clientsTitle: 'La confianza de empresas, gobiernos y operadoras de telecom de todo el mundo',
  readCaseStudy: 'Lea el caso de éxito →',
  relatedTitle: 'Parte del ecosistema de Centro de Datos AI de SOETECK',
  relatedSubtitle: 'Descubra cómo SOETECK entrega la infraestructura completa del centro de datos de AI — térmica, energía, estructura y control.',
  learnMore: 'Conozca más →',
  faqTitle: 'Centro de Datos AI — preguntas frecuentes',
};

export const AIDC_CTA = {
  eyebrow: 'Hable con un ingeniero',
  title: 'El centro de datos de AI de la próxima generación comienza con una conversación',
  text: 'Cuéntenos sobre su carga de trabajo de AI. Nosotros diseñamos la infraestructura. Entrega en 120 días. En cualquier lugar del mundo.',
  actions: [
    { label: 'Solicitar una cotización a medida', href: '/contact-us/', variant: 'primary' },
    { label: 'Agendar una consulta de 30 minutos', href: '/contact-us/', variant: 'outline' },
  ],
};
