/**
 * Páginas de soluciones por industria — contenido en español (modo translate-code-embedded).
 * Estructura idéntica a industry-content.ts (EN); nombres de productos/técnica en inglés.
 */
import type { IndustryContent } from './industry-content';

export const INDUSTRY_CONTENT_ES: Record<string, IndustryContent> = {
  telecom: {
    hero: {
      eyebrow: 'Telecom e infraestructura de red',
      title: 'Data Center y soluciones de borde para telecom',
      subtitle: 'Sites de borde y OLT prefabricados y resistentes a la corrosión de SOETECK — desplegados en semanas, para operadoras, torres y estaciones de cables submarinos.',
      bannerImage: '/industry/industry-telecom-1920.webp',
      alt: 'Infraestructura de red de telecomunicaciones',
      ctaPrimary: 'Hablar con un experto',
      ctaSecondary: 'Conocer data centers prefabricados',
      ctaSecondaryLink: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    pains: {
      eyebrow: 'El desafío',
      title: 'Lo que enfrentan las operadoras de telecom',
      text: 'Desplegar y operar sites de red plantea tres desafíos recurrentes — contra cada uno diseñamos ingeniería.',
      items: [
        { title: 'Inversión inicial alta', text: 'Las construcciones de una sola etapa arriesgan largos períodos de recuperación. El despliegue prefabricado por fases reduce el CAPEX inicial y crece con el tráfico.' },
        { title: 'Presión de energía y carbono', text: 'Los reguladores y las metas ESG empujan a las operadoras hacia sites verdes y eficientes. La refrigeración de alta eficiencia y la energía DC inteligente ayudan.' },
        { title: 'La disponibilidad no es negociable', text: 'El uptime de la red es el negocio. Infraestructura probada en fábrica, lista para N+1, con monitoreo remoto mantiene los servicios en línea.' },
      ],
    },
    products: {
      eyebrow: 'Lo que entregamos',
      title: 'Productos y soluciones de grado telecom',
      text: 'Sistemas de energía, refrigeración y gabinetes diseñados para sites de red y data centers de borde.',
      ctaLabel: 'Ver detalles',
      items: [
        { title: 'Aires acondicionados para gabinetes de telecom', text: 'Refrigeración de precisión resistente a la corrosión para gabinetes y shelters exteriores — más de 30 modelos.', path: '/products/thermal-management/telecom-enclosure-air-conditioner/' },
        { title: 'DCs de borde contenedorizados', text: 'Contenedores móviles de OLT y edge con energía, refrigeración y supresión de incendios integradas.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'Energía DC y baterías', text: 'Sistemas de energía DC -48V y respaldo de baterías para confiabilidad de grado operadora.', path: '/products/critical-power/dc-power-systems/' },
      ],
    },
    need: {
      title: 'Despliegue su próximo site de telecom en semanas',
      text: 'Cuéntenos los requisitos del site — energía, refrigeración, espacio. Nuestros ingenieros entregan una solución prefabricada, probada en fábrica, lista para operar al llegar.',
      cta: 'Inicie su proyecto',
    },
  },

  colocation: {
    hero: {
      eyebrow: 'Operadores de data center',
      title: 'Capacidad modular para operadores de data center',
      subtitle: 'Capacidad rápida y por fases para proveedores de colocation e IDC — halls prefabricados, módulos de borde y expansión llave en mano sin retrasos de obra.',
      bannerImage: '/industry/industry-colocation-1920.webp',
      alt: 'Campus de data center de colocation',
      ctaPrimary: 'Hablar con un experto',
      ctaSecondary: 'Ver DC contenedorizado',
      ctaSecondaryLink: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    pains: {
      eyebrow: 'El desafío',
      title: 'Lo que enfrentan los proveedores de colocation',
      text: 'La demanda de capacidad crece más rápido que la construcción. Estas son las presiones que todo operador siente.',
      items: [
        { title: 'Velocidad de llegada al mercado', text: 'La demanda de los clientes supera el ritmo de obra. Los módulos prefabricados entregan capacidad vendible en semanas, no años.' },
        { title: 'Expansión por fases', text: 'Construir todo de una vez compromete capital. La expansión modular por etapas alinea capacidad con ingresos.' },
        { title: 'CAPEX predecible', text: 'Precios de fábrica y entrega llave en mano eliminan sorpresas en el sitio y comprimen el costo total de propiedad.' },
      ],
    },
    products: {
      eyebrow: 'Lo que entregamos',
      title: 'Soluciones de capacidad para operadores',
      text: 'Desde gabinetes de borde individuales hasta halls prefabricados de múltiples megavatios — entregados como unidades integradas y probadas en fábrica.',
      ctaLabel: 'Ver detalles',
      items: [
        { title: 'Data centers contenedorizados', text: 'Contenedores ISO de 20/40 pies con energía, refrigeración y monitoreo integrados.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'DCs micromodulares', text: 'Módulos compactos todo en uno para pequeñas salas de TI y microcapacidad.', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: 'Refrigeración de precisión', text: 'Refrigeración de sala, fila y rack para cada nivel de densidad.', path: '/solutions/data-center-cooling-solutions/' },
      ],
    },
    need: {
      title: 'Agregue capacidad antes de que llegue la demanda',
      text: 'Comparta su plan de expansión — las soluciones prefabricadas de SOETECK escalan con usted, escalonando el CAPEX y acortando el tiempo hasta los ingresos.',
      cta: 'Planee su expansión',
    },
  },

  'cloud-hyperscale': {
    hero: {
      eyebrow: 'Nube e hiperescala',
      title: 'Infraestructura para nube e hiperescala',
      subtitle: 'Capacidad lista para IA para proveedores de nube e hiperescaladores — módulos con refrigeración líquida, energía de alta densidad y suministro OEM de infraestructura crítica.',
      bannerImage: '/industry/industry-cloud-1920.webp',
      alt: 'Visualización de infraestructura de nube',
      ctaPrimary: 'Hablar con un experto',
      ctaSecondary: 'Conocer data centers de IA',
      ctaSecondaryLink: '/solutions/data-center-solutions/ai-data-center/',
    },
    pains: {
      eyebrow: 'El desafío',
      title: 'Lo que enfrentan los constructores de nube e hiperescala',
      text: 'Las cargas de IA reescriben las reglas de densidad, velocidad y suministro — esta es la realidad de los constructores.',
      items: [
        { title: 'Demandas de densidad de IA', text: 'Los clústeres de GPU superan los 100kW por rack. La refrigeración por aire ya no basta — la líquida es un prerrequisito.' },
        { title: 'Ciclos rápidos de capacidad', text: 'La capacidad se duplica más rápido que la construcción. Los módulos prefabricados con refrigeración líquida comprimen los plazos.' },
        { title: 'Certeza en la cadena de suministro', text: 'Los socios OEM/ODM deben entregar equipo consistente y probado a escala, con plazos predecibles.' },
      ],
    },
    products: {
      eyebrow: 'Lo que entregamos',
      title: 'Infraestructura lista para IA',
      text: 'Energía de alta densidad, refrigeración líquida y halls modulares diseñados para cargas de IA.',
      ctaLabel: 'Ver detalles',
      items: [
        { title: 'Data centers de IA', text: 'Infraestructura de IA prefabricada con refrigeración líquida de hasta 120kW/rack.', path: '/solutions/data-center-solutions/ai-data-center/' },
        { title: 'AICoolit — refrigeración líquida', text: 'Soluciones direct-to-chip y CDU para clústeres de GPU.', path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
        { title: 'UPS y energía', text: 'UPS de alta eficiencia y distribución de energía para cómputo denso.', path: '/products/critical-power/uninterruptible-power-supplies/' },
      ],
    },
    need: {
      title: 'Construya capacidad de IA a velocidad de hiperescala',
      text: 'Díganos la densidad por rack y el cronograma — entregamos capacidad con refrigeración líquida, probada en fábrica, lista para computar al llegar.',
      cta: 'Solicitar cotización',
    },
  },

  internet: {
    hero: {
      eyebrow: 'Plataformas de internet',
      title: 'Infraestructura para plataformas de internet',
      subtitle: 'Data centers propios y nodos de borde para empresas de internet y tecnología — rápidos, eficientes y escalables.',
      bannerImage: '/industry/industry-internet-1920.webp',
      alt: 'Conectividad global de internet',
      ctaPrimary: 'Hablar con un experto',
      ctaSecondary: 'Ver DC modular en fila',
      ctaSecondaryLink: '/solutions/data-center-solutions/row-modular-data-center/',
    },
    pains: {
      eyebrow: 'El desafío',
      title: 'Lo que enfrentan las plataformas de internet',
      text: 'El crecimiento de la plataforma pone a prueba la infraestructura todos los días. Estas son las restricciones reales.',
      items: [
        { title: 'Escalamiento rápido', text: 'El crecimiento de usuarios exige capacidad en ciclos cortos. Los módulos prefabricados se despliegan en semanas.' },
        { title: 'Eficiencia operativa', text: 'El costo de energía es la mayor palanca. Refrigeración eficiente y energía inteligente reducen el OPEX.' },
        { title: 'Borde distribuido', text: 'El contenido y los servicios migran al borde. Los módulos compactos caben en POPs y nodos regionales.' },
      ],
    },
    products: {
      eyebrow: 'Lo que entregamos',
      title: 'Infraestructura de plataformas',
      text: 'Data centers modulares y soluciones de borde para empresas de internet construyendo capacidad propia.',
      ctaLabel: 'Ver detalles',
      items: [
        { title: 'DCs modulares en fila', text: 'Sistemas de gabinete único y en fila para borde y pequeñas salas de TI.', path: '/solutions/data-center-solutions/row-modular-data-center/' },
        { title: 'DCs contenedorizados', text: 'Contenedores de rápida implementación para capacidad y expansión de POPs.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'Racks y gabinetes', text: 'Racks de servidores y gabinetes exteriores para todo tipo de site.', path: '/products/racks-enclosures/racks-cabinets/' },
      ],
    },
    need: {
      title: 'Escale su plataforma sin retrasos de construcción',
      text: 'Describa sus necesidades de capacidad — entregamos infraestructura modular, probada en fábrica, que entra en operación en semanas.',
      cta: 'Inicie su proyecto',
    },
  },

  finance: {
    hero: {
      eyebrow: 'Servicios financieros',
      title: 'Infraestructura resiliente para servicios financieros',
      subtitle: 'Energía y refrigeración de alta disponibilidad para bancos, bolsas y sistemas de trading — donde un segundo de downtime tiene precio.',
      bannerImage: '/industry/industry-finance-1920.webp',
      alt: 'Skyline de distrito financiero',
      ctaPrimary: 'Hablar con un experto',
      ctaSecondary: 'Ver sistemas UPS',
      ctaSecondaryLink: '/products/critical-power/uninterruptible-power-supplies/',
    },
    pains: {
      eyebrow: 'El desafío',
      title: 'Lo que enfrentan las instituciones financieras',
      text: 'En servicios financieros, el fallo de infraestructura se mide en dinero. Este es el tamaño del riesgo.',
      items: [
        { title: 'Cero tolerancia al downtime', text: 'Las transacciones y el trading operan 24/7. La redundancia N+1 y la topología de alta disponibilidad son la base.' },
        { title: 'Cumplimiento regulatorio', text: 'Las auditorías exigen infraestructura resiliente documentada. Los sistemas probados en fábrica simplifican la certificación.' },
        { title: 'Latencia y densidad', text: 'El trading y la analítica de IA elevan la densidad. La refrigeración de precisión protege las cargas sensibles a la latencia.' },
      ],
    },
    products: {
      eyebrow: 'Lo que entregamos',
      title: 'Energía y refrigeración de misión crítica',
      text: 'Infraestructura redundante y eficiente para cargas financieras siempre activas.',
      ctaLabel: 'Ver detalles',
      items: [
        { title: 'Sistemas UPS', text: 'UPS de doble conversión con configuraciones N+1 y 2N.', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { title: 'Refrigeración de precisión', text: 'Refrigeración de sala y fila para entornos térmicos predecibles.', path: '/solutions/data-center-cooling-solutions/' },
        { title: 'Monitoreo y gestión', text: 'DCIM y monitoreo para visibilidad total de la infraestructura.', path: '/products/monitoring-management/' },
      ],
    },
    need: {
      title: 'Diseñe para el uptime que su negocio requiere',
      text: 'Comparta su objetivo de disponibilidad — configuramos energía y refrigeración redundantes que mantienen sus sistemas operando.',
      cta: 'Hablar con un ingeniero',
    },
  },

  government: {
    hero: {
      eyebrow: 'Gobierno y sector público',
      title: 'Infraestructura segura para el gobierno',
      subtitle: 'Data centers confiables y controlados para servicios públicos y cargas sensibles — conformes, seguros y dependibles.',
      bannerImage: '/industry/industry-government-1920.webp',
      alt: 'Edificio administrativo gubernamental',
      ctaPrimary: 'Hablar con un experto',
      ctaSecondary: 'Ver DC micromodular',
      ctaSecondaryLink: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    pains: {
      eyebrow: 'El desafío',
      title: 'Lo que enfrenta el sector público',
      text: 'Los servicios públicos dependen de una infraestructura que simplemente no falla. Estos son los requisitos.',
      items: [
        { title: 'Seguridad y control', text: 'Los datos sensibles exigen entornos controlados y cadenas de suministro documentadas.' },
        { title: 'Confiabilidad para servicios públicos', text: 'Los servicios ciudadanos no pueden caerse. La infraestructura N+1 y las pruebas en fábrica garantizan continuidad.' },
        { title: 'Disciplina presupuestaria', text: 'Las compras públicas prefieren soluciones previsibles, conformes y con costo total claro.' },
      ],
    },
    products: {
      eyebrow: 'Lo que entregamos',
      title: 'Infraestructura gubernamental confiable',
      text: 'Data centers compactos y confiables para cargas del sector público.',
      ctaLabel: 'Ver detalles',
      items: [
        { title: 'DCs micromodulares', text: 'Módulos autónomos para cuartos de servidores y pequeños data centers gubernamentales.', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: 'DCs contenedorizados', text: 'Capacidad segura y por fases para ministerios y agencias.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'UPS y energía', text: 'Energía redundante para la continuidad de los servicios públicos.', path: '/products/critical-power/uninterruptible-power-supplies/' },
      ],
    },
    need: {
      title: 'Entregue servicios públicos confiables',
      text: 'Cuéntenos sus requisitos — proveemos infraestructura conforme y confiable con entrega predecible.',
      cta: 'Iniciar una conversación',
    },
  },

  manufacturing: {
    hero: {
      eyebrow: 'Manufactura',
      title: 'Infraestructura de borde para manufactura',
      subtitle: 'Cómputo de piso resiliente e infraestructura de IoT industrial — hecha para operar en la planta, no solo en la sala de servidores.',
      bannerImage: '/industry/industry-manufacturing-1920.webp',
      alt: 'Línea de producción inteligente',
      ctaPrimary: 'Hablar con un experto',
      ctaSecondary: 'Ver refrigeración de rack',
      ctaSecondaryLink: '/products/thermal-management/precision-air-conditioning/rack-cooling/',
    },
    pains: {
      eyebrow: 'El desafío',
      title: 'Lo que enfrentan los fabricantes',
      text: 'El piso de planta es el ambiente más severo para TI. Estas son las condiciones a sobrevivir.',
      items: [
        { title: 'Ambientes severos', text: 'Polvo, variaciones de temperatura y vibración exigen gabinetes de TI robustos y protegidos.' },
        { title: 'La parada cuesta producción', text: 'Las paradas de línea cuestan dinero. Energía y refrigeración confiables mantienen los datos de producción fluyendo.' },
        { title: 'Adopción de borde e IA', text: 'La IA industrial y el IoT requieren cómputo local en el borde — compacto y eficiente.' },
      ],
    },
    products: {
      eyebrow: 'Lo que entregamos',
      title: 'Infraestructura de piso de planta',
      text: 'Energía, refrigeración y gabinetes robustos diseñados para entornos industriales.',
      ctaLabel: 'Ver detalles',
      items: [
        { title: 'Refrigeración de racks y gabinetes', text: 'Refrigeración para racks y gabinetes exteriores en condiciones severas.', path: '/products/thermal-management/precision-air-conditioning/rack-cooling/' },
        { title: 'Gabinetes exteriores', text: 'Gabinetes protegidos para cómputo de borde en sites severos.', path: '/products/racks-enclosures/outdoor-enclosures/' },
        { title: 'DCs modulares en fila', text: 'Sistemas compactos para TI de planta y borde.', path: '/solutions/data-center-solutions/row-modular-data-center/' },
      ],
    },
    need: {
      title: 'Mantenga la producción en marcha',
      text: 'Describa el ambiente de su planta — entregamos infraestructura de borde robusta que sobrevive al piso de fábrica.',
      cta: 'Hablar con un ingeniero',
    },
  },

  healthcare: {
    hero: {
      eyebrow: 'Salud',
      title: 'Infraestructura para salud',
      subtitle: 'Soluciones confiables de borde y data center para hospitales y nubes regionales de salud — donde la disponibilidad protege al paciente.',
      bannerImage: '/industry/industry-healthcare-1920.webp',
      alt: 'Hospital moderno',
      ctaPrimary: 'Hablar con un experto',
      ctaSecondary: 'Ver DC micromodular',
      ctaSecondaryLink: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    pains: {
      eyebrow: 'El desafío',
      title: 'Lo que enfrentan las instituciones de salud',
      text: 'Los sistemas clínicos operan las 24 horas. Esta es la realidad de la TI en salud.',
      items: [
        { title: 'Los datos del paciente deben estar disponibles', text: 'Los sistemas clínicos operan 24/7. Una infraestructura confiable es parte de la seguridad del paciente.' },
        { title: 'Gobernanza de datos', text: 'Los datos de salud exigen procesamiento local y entornos controlados.' },
        { title: 'Espacio e integración', text: 'Los hospitales tienen espacio limitado. Los módulos compactos se integran a edificios existentes sin grandes obras.' },
      ],
    },
    products: {
      eyebrow: 'Lo que entregamos',
      title: 'Infraestructura de grado hospitalario',
      text: 'Energía y refrigeración compactas y confiables para hospitales y nubes regionales de salud.',
      ctaLabel: 'Ver detalles',
      items: [
        { title: 'DCs micromodulares', text: 'Data centers compactos para cuartos de servidores hospitalarios.', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: 'Sistemas UPS', text: 'Energía continua para aplicaciones clínicas.', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { title: 'Refrigeración de precisión', text: 'Refrigeración predecible para entornos de TI médicos.', path: '/solutions/data-center-cooling-solutions/' },
      ],
    },
    need: {
      title: 'Proteja la atención que usted entrega',
      text: 'Cuéntenos sobre su instalación — proveemos infraestructura confiable y eficiente en espacio para sus sistemas clínicos.',
      cta: 'Inicie su proyecto',
    },
  },
};
