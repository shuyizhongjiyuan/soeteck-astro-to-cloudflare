import type { HomeContent } from './home-content';

export const HOME_ES: HomeContent = {
  hero: {
    slides: [
      {
        image: '/hero/hero-slide-1.webp',

        eyebrow: 'SOETECK · Proveedor de data centers prefabricados',

        title: 'Entregado en semanas,',

        titleAccent: 'no en años.',

        subtitle: 'Data centers contenedorizados, con contención de pasillo, en fila y de gabinete único de SOETECK — con energía, refrigeración y supresión de incendios integradas en fábrica y cada unidad lista para operar el día que llega, para clústeres de IA, sites de borde y recuperación ante desastres en todo el mundo.',

        ctaPrimary: 'Explorar soluciones',

        ctaPrimaryLink: '/es/solutions/',

        ctaSecondary: 'Hablar con un experto',

        ctaSecondaryLink: '/es/contact-us/',

      },
      {
        image: '/hero/hero-slide-2.webp',

        eyebrow: 'Infraestructura de IA prefabricada de pila completa',

        title: 'Data centers de IA,',

        titleAccent: 'diseñados como uno solo.',

        subtitle: 'Los gabinetes de GPU superan hoy los 100kW y la refrigeración por aire no alcanza. Diseñamos energía, refrigeración líquida, racks y monitoreo como un stack de IA integrado, y lo enviamos prefabricado y llave en mano, operativo el día que llega.',

        ctaPrimary: 'Vea cómo se construye',

        ctaPrimaryLink: '/es/solutions/data-center-solutions/ai-data-center/',

        ctaSecondary: 'Solicitar cotización',

        ctaSecondaryLink: '/es/contact-us/',

      },
      {
        image: '/hero/hero-slide-1.webp',

        eyebrow: 'Socio llave en mano',

        title: 'Entrega de extremo a extremo,',

        titleAccent: 'responsabilidad única.',

        subtitle: 'Un equipo se encarga de todo: ingeniería, producción de fábrica, logística global, commissioning y posventa — usted recibe las llaves con un único socio responsable.',

        ctaPrimary: 'Hablar con un experto',

        ctaPrimaryLink: '/es/contact-us/',

        ctaSecondary: 'Contactar ventas',

        ctaSecondaryLink: '/es/contact-us/',

      },
      {
        image: '/hero/hero-slide-3.webp',

        eyebrow: 'Prueba global',

        title: 'Desplegado en',

        titleAccent: 'más de 50 países.',

        subtitle: 'Del calor del desierto al frío ártico, en cada estándar eléctrico común, nuestras unidades mantienen plataformas de entrenamiento de IA, nodos de borde y sites críticos funcionando las 24 horas.',

        ctaPrimary: 'Leer casos de éxito',

        ctaPrimaryLink: '/es/news-and-insights/client-case-studies/',

        ctaSecondary: 'Contactar ventas',

        ctaSecondaryLink: '/es/contact-us/',

      },
    ],
  },

  aiInsights: {
    eyebrow: 'El cambio de la IA',
    title: 'La IA está reescribiendo las reglas de la infraestructura',
    subtitle: 'Los data centers construidos para las cargas de trabajo de ayer no pueden atender las demandas de IA de mañana. Las densidades de potencia se han triplicado. Las cargas térmicas han cambiado fundamentalmente. La industria necesita un nuevo enfoque — y SOETECK lo está construyendo.',
    points: [
      { title: 'Densidad de rack de 100kW+', text: 'Los clústeres de entrenamiento de IA exigen densidades de potencia que la infraestructura convencional nunca fue diseñada para soportar.' },
      { title: 'La refrigeración líquida es imprescindible', text: 'La refrigeración por aire ha alcanzado sus límites físicos. La refrigeración líquida direct-to-chip ya no es opcional — es un prerrequisito para la viabilidad de la IA.' },
      { title: 'Velocidad de despliegue', text: 'La demanda de capacidad de IA crece el doble de rápido que los ciclos de construcción. Los módulos prefabricados y probados en fábrica comprimen los plazos de años a semanas.' },
    ],
    cta: 'Explorar nuestras soluciones de IA',
    ctaLink: '/es/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
  },

  industries: {
    eyebrow: 'A quién servimos',
    title: 'Confianza en industrias críticas',
    text: 'De operadores de telecomunicaciones a hiperescaladores de IA, las organizaciones más exigentes del mundo confían en SOETECK para infraestructura crítica de energía y refrigeración.',
    items: [
      { icon: 'telecom', title: 'Telecom', image: { path: '/home/industry-telecom.png', alt: 'Infraestructura de data center de telecomunicaciones' }, ctaLink: '/es/solutions/telecom/' },
      { icon: 'colocation', title: 'Colocación', image: { path: '/home/industry-colocation.png', alt: 'Infraestructura de data center de colocación' }, ctaLink: '/es/solutions/colocation/' },
      { icon: 'cloud', title: 'Nube e Hiperescala', image: { path: '/home/industry-cloud.png', alt: 'Infraestructura de proveedores de nube' }, ctaLink: '/es/solutions/cloud-hyperscale/' },
      { icon: 'internet', title: 'Internet', image: { path: '/home/industry-internet.png', alt: 'Infraestructura de data center de plataformas de internet' }, ctaLink: '/es/solutions/internet/' },
      { icon: 'finance', title: 'Finanzas', image: { path: '/home/industry-finance.png', alt: 'Confiabilidad de data center financiero' }, ctaLink: '/es/solutions/finance/' },
      { icon: 'government', title: 'Gobierno', image: { path: '/home/industry-government.png', alt: 'Infraestructura segura gubernamental' }, ctaLink: '/es/solutions/government/' },
      { icon: 'manufacturing', title: 'Manufactura', image: { path: '/home/industry-manufacturing.png', alt: 'Data center de manufactura industrial' }, ctaLink: '/es/solutions/manufacturing/' },
      { icon: 'healthcare', title: 'Salud', image: { path: '/home/industry-healthcare.png', alt: 'Infraestructura de data center de salud' }, ctaLink: '/es/solutions/healthcare/' },
    ],
  },

  solutions: {
    eyebrow: 'Soluciones prefabricadas y llave en mano',
    title: 'Soluciones completas de data center',
    text: 'Desde gabinetes individuales hasta campus de varios megavatios — preingenierizados, probados en fábrica y entregados como unidades integradas completas.',
    cards: [
      {
        title: 'Data Center de IA',
        text: 'Infraestructura de IA prefabricada para cargas de trabajo con GPU. Los módulos contenedorizados llegan con refrigeración líquida integrada y energía de alta densidad — probados en fábrica y listos para computar al llegar.',
        image: { path: '/resources/ai-data-center/ai-data-center-hero.webp', alt: 'Data center de IA' },
        features: ['En línea en 90–120 días', 'Hasta 120 kW/rack', 'PUE tan bajo como 1.08'],
        cta: 'Ver detalles',
        ctaLink: '/es/solutions/data-center-solutions/ai-data-center/',
      },
      {
        title: 'Data Center en Contenedor',
        text: 'Un data center completo sellado dentro de un contenedor ISO de 20 o 40 pies. Energía, refrigeración, supresión de incendios y monitoreo — todo integrado, todo probado en fábrica.',
        image: { path: '/resources/prefabricated-container-data-center-solution-home.webp', alt: 'Data center en contenedor' },
        features: ['Entrega en 8–12 semanas', 'Para interiores y exteriores', 'Redundancia N+1 estándar'],
        cta: 'Ver detalles',
        ctaLink: '/es/solutions/data-center-solutions/prefabricated-container-data-center/',
      },
      {
        title: 'Data Center Micromodular',
        text: 'Arquitectura modular y expandible para implementaciones internas de densidad media. Los módulos prefabricados llegan con refrigeración y distribución de energía integradas.',
        image: { path: '/resources/cabinet-data-center-solution-home.webp', alt: 'Data center micromodular' },
        features: ['Ubicación interior flexible', 'Expansión modular por pasos', 'Monitoreo integrado'],
        cta: 'Ver detalles',
        ctaLink: '/es/solutions/data-center-solutions/cabinet-modular-data-center/',
      },
      {
        title: 'Soluciones Modulares en Fila',
        text: 'Sistemas de gabinete único y en fila diseñados para edge computing, pequeñas salas de TI e infraestructura distribuida.',
        image: { path: '/resources/row-modular-data-center-solution-1.webp', alt: 'Data center modular en fila' },
        features: ['Huella ultra compacta', 'Refrigeración eficiente', 'Gestión remota 24/7'],
        cta: 'Ver detalles',
        ctaLink: '/es/solutions/data-center-solutions/row-modular-data-center/',
      },
    ],
  },

  productLines: {
    eyebrow: 'Categorías de productos',
    title: 'Lo que fabricamos',
    items: [
      { icon: 'ups', title: 'Sistemas UPS', ctaLink: '/es/products/critical-power/' },
      { icon: 'cooling', title: 'Refrigeración de precisión', ctaLink: '/es/products/thermal-management/' },
      { icon: 'pdu', title: 'Distribución de energía', ctaLink: '/es/products/critical-power/' },
      { icon: 'monitoring', title: 'Monitoreo DCIM', ctaLink: '/es/products/' },
      { icon: 'enclosure', title: 'Racks y gabinetes', ctaLink: '/es/products/' },
      { icon: 'battery', title: 'Almacenamiento de energía', ctaLink: '/es/products/critical-power/' },
    ],
  },

  productCategories: {
    eyebrow: 'Lo que vendemos',
    title: 'Productos',
    groups: [
      {
        label: 'Refrigeración de precisión',
        items: [
          { title: 'Refrigeración de precisión de sala', image: { path: '/resources/room-chilled-water-cooling-home-11-768x768.webp', alt: 'Aire acondicionado de precisión montado en sala' }, hoverImage: { path: '/resources/room-chilled-water-cooling-home-3-768x768.webp', alt: 'Refrigeración de sala con agua helada' }, ctaLink: '/es/products/thermal-management/precision-air-conditioning/room-cooling/' },
          { title: 'Refrigeración de precisión en fila', image: { path: '/resources/Inrow-cooling-split-DX-home-2-768x768.webp', alt: 'Aire acondicionado de precisión en fila' }, hoverImage: { path: '/resources/Inrow-cooling-split-DX-home-1-768x768.webp', alt: 'Refrigeración en fila' }, ctaLink: '/es/products/thermal-management/precision-air-conditioning/in-row-cooling/' },
          { title: 'Refrigeración de precisión de rack', image: { path: '/resources/rack-cooling-1.webp', alt: 'Aire acondicionado de precisión de rack' }, hoverImage: { path: '/resources/rack-cooling-4-768x768.webp', alt: 'Refrigeración de rack' }, ctaLink: '/es/products/thermal-management/precision-air-conditioning/rack-cooling/' },
          { title: 'Aire acondicionado para gabinetes exteriores', image: { path: '/resources/outdoor-enclosure-cooling-home-2-768x768.webp', alt: 'Aire acondicionado de precisión para gabinete exterior' }, hoverImage: { path: '/resources/outdoor-enclosure-cooling-home-1-768x768.webp', alt: 'Refrigeración de gabinete' }, ctaLink: '/es/products/thermal-management/telecom-enclosure-air-conditioner/' },
        ],
      },
      {
        label: 'Energía crítica',
        items: [
          { title: 'Sistemas UPS', image: { path: '/resources/UPS-homepage-1-768x768.webp', alt: 'Sistema UPS' }, hoverImage: { path: '/resources/UPS-homepage-2-768x768.webp', alt: 'Sistema UPS' }, ctaLink: '/es/products/critical-power/uninterruptible-power-supplies/' },
          { title: 'Sistemas de energía DC', image: { path: '/resources/dc-power-system-1-768x768.webp', alt: 'Sistema de energía DC' }, hoverImage: { path: '/resources/dc-power-system-2-768x768.webp', alt: 'Sistema de energía DC' }, ctaLink: '/es/products/critical-power/dc-power-systems/' },
          { title: 'Unidades de distribución de energía', image: { path: '/resources/PDU-home-1-768x768.webp', alt: 'Unidad de distribución de energía' }, hoverImage: { path: '/resources/PDU-home-2-768x768.webp', alt: 'PDU' }, ctaLink: '/es/products/critical-power/power-distribution/' },
          { title: 'Baterías', image: { path: '/resources/SOETECK-Gel-Battery-home-1-768x768.png', alt: 'Batería de almacenamiento de energía' }, hoverImage: { path: '/resources/SOETECK-Gel-Battery-home-2-768x768.webp', alt: 'Batería' }, ctaLink: '/es/products/critical-power/battery/' },
        ],
      },
    ],
  },

  services: {
    eyebrow: 'Nuestros servicios',
    title: 'Lo que entregamos para usted',
    text: 'De la primera conversación a años de operación — SOETECK es dueña de todo el ciclo de vida. Esto significa para su proyecto:',
    image: { path: '/resources/soeteck-factory-1.jpg', alt: 'Instalación de manufactura de SOETECK' },
    steps: [
      { num: '01', icon: 'design', title: 'Diseño gratuito', text: 'Cuéntenos los requisitos de energía, refrigeración y site — reciba gratis una solución de data center con layout 3D y simulación térmica.' },
      { num: '02', icon: 'manufacture', title: 'Fabricación propia', text: 'UPS, refrigeración de precisión, distribución de energía y gabinetes diseñados y fabricados en nuestra propia fábrica — sin intermediarios y con calidad controlada.' },
      { num: '03', icon: 'test', title: 'Pruebas de aceptación', text: 'Cada unidad pasa pruebas de carga plena antes del envío — puede presenciarlas en sitio o por video: validado antes de salir de fábrica.' },
      { num: '04', icon: 'ship', title: 'Logística y aduana', text: 'FOB, CIF o DDP — flete, documentación y despacho aduanero por nuestra cuenta; entregas en más de 50 países cubren todos los estándares de red.' },
      { num: '05', icon: 'install', title: 'Instalación y capacitación', text: 'Nuestros ingenieros instalan y dejan operativa la solución en su site y capacitan a su equipo local — sin subcontratistas y sin vacíos de responsabilidad.' },
      { num: '06', icon: 'support', title: 'Posventa y repuestos', text: 'Garantía de 2 años, soporte 7×24, monitoreo remoto y envío urgente de repuestos — un contrato, un equipo, responsabilidad total.' },
    ],
  },

  projects: {
    eyebrow: 'Historial global',
    title: 'Confianza donde el uptime no es negociable',
    text: 'Desde los desiertos de Medio Oriente hasta los trópicos del Sudeste Asiático, los data centers de SOETECK mantienen la infraestructura crítica funcionando las 24 horas.',
    ctaAll: 'Ver todos los casos de éxito',
    projectsAllLink: '/es/news-and-insights/client-case-studies/',
    cards: [
      {
        title: 'Saudi Telecom',
        location: 'Riad, Arabia Saudita',
        metric: '2',
        metricLabel: 'Data centers en contenedor de 40 pies',
        text: 'Dos data centers móviles en contenedor OLT de 40 pies para Saudi Telecom, de grado operador — con doble alimentación DC, respaldo de baterías y siete OLT por unidad para operación ininterrumpida.',
        image: { path: '/resources/prefab-modular-data-center-of-Saudi-Telecom-0.webp', alt: 'Data center en contenedor de Saudi Telecom' },
        cta: 'Leer la historia completa',
        ctaLink: '/es/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/',
        testimonial: {
          quote: 'El cliente expresó su satisfacción con los resultados, considerando que el proyecto del data center en contenedor sentó una base sólida para su desarrollo a largo plazo.',
          author: 'Saudi Telecom',
          role: 'Proyecto DR, Medio Oriente',
        },
      },
      {
        title: 'GRD Qatar',
        location: 'Catar',
        metric: '24/7',
        metricLabel: 'Operación estable',
        text: 'Un data center contenedorizado a medida para GRD, manteniendo datos críticos estables las 24 horas como parte de la transformación digital de la empresa.',
        image: { path: '/resources/soeteck-racks-and-cabinets.webp', alt: 'Data center contenedorizado de GRD Qatar' },
        cta: 'Leer la historia completa',
        ctaLink: '/es/news-and-insights/client-case-studies/grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center/',
        testimonial: {
          quote: 'El data center contenedorizado se desplegó rápidamente y sostiene nuestras operaciones las 24 horas, incluso bajo calor extremo y polvo.',
          author: 'GRD',
          role: 'Operaciones, filial de Catar',
        },
      },
      {
        title: 'Telecom Fiji',
        location: 'Fiyi',
        metric: '45',
        metricLabel: 'kW de AAs anticorrosión',
        text: 'Estaciones de telecomunicaciones costeras modernizadas con aire acondicionado de precisión anticorrosión de 20kW y 45kW, reemplazando unidades domésticas con capacidad insuficiente en el ambiente salino y húmedo de Fiyi.',
        image: { path: '/home/industry-submarine.png', alt: 'Refrigeración de precisión en sitio costero de Telecom Fiji' },
        cta: 'Leer la historia completa',
        ctaLink: '/es/news-and-insights/client-case-studies/telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design/',
        testimonial: {
          quote: 'Los aire acondicionados de precisión anticorrosión restauraron la refrigeración estable y eficiente en nuestras estaciones costeras — equipos que antes fallaban en el aire salino.',
          author: 'Telecom Fiji',
          role: 'Operaciones de red',
        },
      },
      {
        title: 'Open DC Malaysia',
        location: 'Malasia',
        metric: '100',
        metricLabel: 'kW de refrigeración modular',
        text: 'Dos conjuntos de unidades de precisión modulares enfriadas por aire de 100kW modernizan los reducidos cuartos de servidores de Open DC Malaysia — una actualización eficiente en espacio donde las unidades convencionales no cabían.',
        image: { path: '/home/industry-gpu.png', alt: 'Retrofit de data center de Open DC Malaysia' },
        cta: 'Leer la historia completa',
        ctaLink: '/es/news-and-insights/client-case-studies/open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit/',
        testimonial: {
          quote: 'Las unidades modulares de SOETECK cabían donde los sistemas convencionales no podían, dando a nuestros cuartos de servidores retrofitados una refrigeración confiable de clase 100kW.',
          author: 'Open DC Malaysia',
          role: 'Ingeniería de instalaciones',
        },
      },
      {
        title: 'WebSat Media',
        location: 'Singapur',
        metric: 'N+1',
        metricLabel: 'Redundancia de refrigeración',
        text: 'Cinco aire acondicionados de precisión de 70kW en redundancia N+1 mantienen la infraestructura satelital y de transmisión de WebSat Media en línea para una base de clientes global.',
        image: { path: '/home/scenario-remote.png', alt: 'Refrigeración de data center de WebSat Media' },
        cta: 'Leer la historia completa',
        ctaLink: '/es/news-and-insights/client-case-studies/websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions/',
        testimonial: {
          quote: 'Con redundancia N+1 en cinco unidades de precisión, nuestras plataformas satelitales y de transmisión permanecen en línea para clientes en todos los continentes.',
          author: 'WebSat Media',
          role: 'Infraestructura de data center',
        },
      },
      {
        title: 'Sinus-Dochi LLC',
        location: 'Mongolia',
        metric: 'In-Row',
        metricLabel: 'Refrigeración de precisión',
        text: 'Un sistema de refrigeración de precisión In-Row montado en fila para un líder mongol de ingeniería HVAC — compresores inverter DC, ventiladores EC y redundancia N+1 reducen el PUE del data center, con controles inteligentes que llevan la refrigeración directamente a la fuente de calor.',
        image: { path: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp', alt: 'Refrigeración de precisión in-row de Sinus-Dochi LLC' },
        cta: 'Leer la historia completa',
        ctaLink: '/es/news-and-insights/client-case-studies/sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system/',
        testimonial: {
          quote: 'El sistema inteligente de refrigeración de precisión In-Row redujo el PUE de nuestro data center y mantuvo temperaturas precisas — eficiencia y confiabilidad en una sola solución.',
          author: 'Sinus-Dochi LLC',
          role: 'Ingeniería HVAC, Mongolia',
        },
      },
    ],
  },

  scenarios: {
    eyebrow: 'Escenarios de aplicación',
    title: 'Diseñados para los entornos más exigentes',
    text: 'Ya sea la humedad de una estación de aterrizaje de cables submarinos o el calor de un sitio de borde desértico, SOETECK entrega infraestructura confiable donde se necesite.',
    items: [
      { title: 'Estaciones de aterrizaje de cables submarinos', text: 'Infraestructura confiable y resistente a la corrosión para uniones críticas de cables submarinos.', image: { path: '/home/scenario-submarine.png', alt: 'Estación de aterrizaje de cable submarino' }, tags: ['Alta confiabilidad', 'Resistente a la corrosión'] },
      { title: 'Edge Computing y 5G', text: 'Micro data centers compactos y rápidamente desplegables para inferencia de borde de baja latencia.', image: { path: '/home/scenario-edge.png', alt: 'Despliegue de edge computing' }, tags: ['Compacto', 'Despliegue rápido'] },
      { title: 'Clima extremo', text: 'Resistente al desierto, a los trópicos y al ártico — diseñado para cada entorno de la Tierra.', image: { path: '/home/scenario-climate.png', alt: 'Data center en clima extremo' }, tags: ['Desierto', 'Tropical', 'Ártico'] },
      { title: 'Emergencias y recuperación ante desastres', text: 'Módulos probados en fábrica desplegados en semanas, no meses, cuando el tiempo de inactividad no es una opción.', image: { path: '/home/scenario-emergency.png', alt: 'Recuperación ante desastres' }, tags: ['Recuperación rápida', 'Preprobado'] },
      { title: 'Sitios con espacio limitado', text: 'Soluciones de azotea, urbanas e interiores que maximizan la capacidad en un espacio mínimo.', image: { path: '/home/scenario-rooftop.png', alt: 'Data center con espacio limitado' }, tags: ['Azotea', 'Urbano', 'Compacto'] },
      { title: 'Remoto y fuera de la red', text: 'Infraestructura autónoma para minería, petróleo y gas, y operaciones remotas.', image: { path: '/home/scenario-remote.png', alt: 'Data center remoto fuera de la red' }, tags: ['Fuera de la red', 'Autónomo'] },
    ],
  },

  timeline: {
    eyebrow: 'Entrega de extremo a extremo',
    title: 'Un socio. Del plano a la puesta en marcha.',
    text: 'Diseño, fabricación, integración, prueba, envío, instalación — cada etapa es propiedad de SOETECK. Sin señalar culpables entre proveedores.',
    steps: [
      { num: '01', icon: 'design', title: 'Diseño', text: 'Ingeniería colaborativa con modelado 3D y simulación térmica CFD.' },
      { num: '02', icon: 'manufacture', title: 'Fabricación', text: 'Producción interna de UPS, refrigeración, PDU y gabinetes.' },
      { num: '03', icon: 'integrate', title: 'Integración', text: 'Ensamble y configuración a nivel de sistema en nuestra fábrica.' },
      { num: '04', icon: 'test', title: 'Prueba', text: 'Pruebas a plena carga, validación térmica y verificación de conmutación.' },
      { num: '05', icon: 'ship', title: 'Envío', text: 'Logística global segura con supervisión de puerta a puerta.' },
      { num: '06', icon: 'install', title: 'Puesta en marcha', text: 'Instalación en sitio, commissioning y capacitación de operadores.' },
    ],
  },

  whySoeteck: {
    eyebrow: 'La diferencia SOETECK',
    title: 'Por qué los operadores más exigentes nos eligen',
    text: 'No es solo lo que construimos — es cómo lo construimos, y quién respalda el resultado.',
    items: [
      { icon: 'factory', title: 'Fabricante, no intermediario', text: 'Diseñamos y construimos los componentes críticos nosotros mismos. Sin cadenas de suministro opacas ni capas de sobreprecio.' },
      { icon: 'accountability', title: 'Responsabilidad de punto único', text: 'Un contrato, un equipo, un solo responsable. Del diseño al commissioning, SOETECK es propietario de toda la entrega.' },
      { icon: 'global', title: 'ADN de despliegue global', text: 'Más de 50 países, cada clima, cada estándar de red. Hemos resuelto los desafíos que hunden a otros proyectos.' },
      { icon: 'speed', title: 'Velocidad sin compromisos', text: 'El preensamblaje y las pruebas en fábrica comprimen años de construcción en semanas.' },
    ],
    stats: [
      { value: '2000', suffix: '+', label: 'Proyectos entregados' },
      { value: '50', suffix: '+', label: 'Países atendidos' },
      { value: '20', suffix: '+', label: 'Años de innovación' },
      { value: '8', suffix: '–12 sem.', label: 'Plazo de entrega' },
    ],
    certs: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'Certificación CE', '20+ patentes'],
  },

  news: {
    eyebrow: 'Noticias e ideas',
    title: 'Noticias de la empresa e ideas de la industria',
    viewAllLabel: 'Ver todos los artículos',
    viewAllLink: '/es/news-and-insights/',
    text: 'Manténgase informado con los últimos anuncios de la empresa, actualizaciones de productos y opiniones de expertos sobre infraestructura de data centers.',
  },

  newsC: {
    newsLabel: 'Noticias',
    newsLink: '/es/news-and-insights/news-releases/',
    blogLabel: 'Blogs',
    blogLink: '/es/news-and-insights/blogs/',
    viewAllNews: 'Ver todas las noticias →',
    viewAllBlogs: 'Ver todos los blogs →',
    newsEyebrow: 'Últimas noticias',
    newsTitle: 'Noticias y anuncios de la empresa',
    blogEyebrow: 'Ideas de expertos',
    blogTitle: 'Blogs técnicos y liderazgo de pensamiento',
  },

  cta: {
    eyebrow: 'Comience su proyecto',
    title: '¿Listo para construir su data center listo para IA?',
    text: 'Cuéntenos sus requisitos — energía, refrigeración, espacio, cronograma. Ingeniaremos la solución óptima y la entregaremos llave en mano.',
    cards: [
      { icon: 'products', title: 'Explore nuestro catálogo', text: 'Descubra la gama completa de productos de energía, refrigeración y gabinetes que fabricamos internamente.', cta: 'Ver productos', ctaLink: '/es/products/' },
      { icon: 'solutions', title: 'Obtenga una solución a medida', text: 'Reciba una recomendación adaptada a sus requisitos específicos de carga, sitio y capacidad.', cta: 'Explorar Soluciones', ctaLink: '/es/solutions/' },
      { icon: 'engineering', title: 'Hable con ingeniería', text: 'Trabaje directamente con nuestro equipo de ingeniería para proyectos complejos de integración y diseño-construcción.', cta: 'Enviar consulta', ctaLink: '/es/contact-us/' },
    ],
  },

  productsIntro: {
    eyebrow: 'Fabricación propia',
    title: 'Energía y refrigeración, diseñados por SOETECK',
    text: 'Sistemas UPS, refrigeración de precisión, distribución de energía y gabinetes — diseñados y fabricados en nuestra propia fábrica, para que cada componente cumpla las especificaciones.',
  },

  transition: {
    eyebrow: 'La solución',
    title: 'Cuatro arquitecturas llave en mano',
    text: 'Cada data center SOETECK sale de fábrica listo para el sitio. De infraestructura de IA llave en mano a despliegues contenedorizados, micromodulares y modulares en fila — elija el modelo que se ajuste a su sitio, densidad y cronograma.',
  },
};
