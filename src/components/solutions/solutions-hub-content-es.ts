/**
 * Solutions hub — Español。
 * @see solutions-hub-content.ts for type definitions.
 */

import type { SolutionsHubContent } from './solutions-hub-content';

export const SOLUTIONS_HUB_ES: SolutionsHubContent = {
  hero: {
    eyebrow: 'Soluciones para Centro de Datos',
    title: 'Soluciones Integrales para Centro de Datos',
    subtitle:
      'Desde enfriamiento líquido y centros de datos modulares hasta enfriamiento de precisión, SOETECK construye infraestructura completa y escalable que alimenta sus datos — donde sea que lo necesite.',
    bannerImage: '/resources/soeteck-data-center-banner-1.webp',
  },
  sectionIntro: {
    eyebrow: 'Nuestras Soluciones',
    title: 'Explore las Soluciones para Centro de Datos de SOETECK',
    subtitle:
      'Cada solución está diseñada para despliegue rápido, alta densidad y eficiencia medible — respaldada por fabricación OEM/ODM propia y soporte global de proyectos.',
  },
  solutions: [
    {
      title: 'Centro de Datos con Enfriamiento Líquido',
      description:
        'Enfriamiento líquido de nivel AI en contenedor ISO estándar — hasta 100kW+ por rack, loop totalmente sellado, desplegable en semanas, no años.',
      image: '/resources/1-40-Foot-AI-Container-Data-Center-100kW-per-Rack.webp',
      alt: 'Contenedor de centro de datos con enfriamiento líquido SOETECK',
      path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
    },
    {
      title: 'Centro de Datos Modular en Contenedor',
      description:
        'Centros de datos en contenedor prefabricados de fábrica, desplegables en semanas — ideales para edge, colocation y expansión rápida de capacidad.',
      image: '/resources/20ft-prefabricated-container-data-center-front-view-3-1024x683.webp',
      alt: 'Centro de datos prefabricado en contenedor SOETECK',
      path: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    {
      title: 'Centro de Datos Modular en Rack',
      description:
        'Centros de datos compactos todo-en-uno con energía, enfriamiento y monitoreo integrados — perfectos para pequeñas salas TI y micro-módulos.',
      image: '/resources/cabinet-data-center-7.webp',
      alt: 'Centro de datos modular en gabinete SOETECK',
      path: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    {
      title: 'Centro de Datos Modular en Hilera',
      description:
        'Centros de datos modulares en fila escalables que crecen con su computación — del enfriamiento en rack al enfriamiento en fila.',
      image: '/resources/cabinet-modular-data-center-31.webp',
      alt: 'Centro de datos modular en fila SOETECK',
      path: '/solutions/data-center-solutions/row-modular-data-center/',
    },
    {
      title: 'Centro de Datos Micromodular',
      description:
        'Centros de datos modulares con contención de pasillo frío/caliente para despliegues de alta densidad y alta eficiencia.',
      image: '/resources/cabinet-modular-data-center-41.webp',
      alt: 'Centro de datos modular en pasillo SOETECK',
      path: '/solutions/data-center-solutions/aisle-modular-data-center/',
    },
    {
      title: 'Soluciones de Enfriamiento para Centros de Datos',
      description:
        'Portafolio de aire acondicionado de precisión — desde enfriamiento de sala y en fila hasta fan walls y enfriamiento en rack, para cada densidad.',
      image: '/resources/Soeteck-chilled-water-room-cooling-system-38.2-265.8kW-4.webp',
      alt: 'Soluciones de enfriamiento de precisión SOETECK',
      path: '/solutions/data-center-cooling-solutions/',
    },
    {
      title: 'Centro de Datos para IA',
      description:
        'Soluciones de centro de datos AI diseñadas para clusters GPU de alta densidad y preparadas para enfriamiento líquido.',
      image: '/resources/2-40-Foot-AI-Container-Data-Center-60kW-per-Rack.webp',
      alt: 'Solución de centro de datos AI SOETECK',
      path: '/solutions/data-center-solutions/ai-data-center/',
    },
  ],
  industries: {
    eyebrow: 'Por sector',
    title: 'Data centers para cada sector',
    subtitle:
      'De las operadoras de telecom a los hyperscalers de IA — la densidad, la refrigeración y la confiabilidad adecuadas para sectores críticos.',
    items: [
      {
        icon: 'telecom',
        name: 'Telecom',
        description: 'Infraestructura de borde rápida, en cualquier lugar.',
        image: '/resources/industry-telecom.webp',
        alt: 'Infraestructura de data center telecom',
        path: '/solutions/telecom/',
      },
      {
        icon: 'colocation',
        name: 'Colocation',
        description: 'Capacidad modular para operadores de data centers.',
        image: '/resources/industry-colocation.webp',
        alt: 'Infraestructura de colocation',
        path: '/solutions/colocation/',
      },
      {
        icon: 'cloud',
        name: 'Cloud & Hyperscale',
        description: 'Escala rápida para proveedores de nube y plataformas.',
        image: '/resources/industry-cloud.webp',
        alt: 'Infraestructura de proveedor de nube',
        path: '/solutions/cloud-hyperscale/',
      },
      {
        icon: 'internet',
        name: 'Internet',
        description: 'Data centers propios para plataformas de internet.',
        image: '/resources/industry-internet.webp',
        alt: 'Data center de plataforma de internet',
        path: '/solutions/internet/',
      },
      {
        icon: 'finance',
        name: 'Finanzas',
        description: 'Computación de alta disponibilidad para sistemas transaccionales.',
        image: '/resources/industry-finance.webp',
        alt: 'Confiabilidad de data center financiero',
        path: '/solutions/finance/',
      },
      {
        icon: 'government',
        name: 'Gobierno',
        description: 'Entornos seguros para servicios públicos y datos sensibles.',
        image: '/resources/industry-government.webp',
        alt: 'Infraestructura segura de gobierno',
        path: '/solutions/government/',
      },
      {
        icon: 'manufacturing',
        name: 'Industria',
        description: 'Computación resiliente para producción e IoT industrial.',
        image: '/resources/industry-manufacturing.webp',
        alt: 'Data center industrial',
        path: '/solutions/manufacturing/',
      },
      {
        icon: 'healthcare',
        name: 'Salud',
        description: 'Computación de borde y alta disponibilidad para hospitales y nubes regionales de salud.',
        image: '/resources/industry-healthcare.webp',
        alt: 'Infraestructura de salud',
        path: '/solutions/healthcare/',
      },
    ],
    exploreMore: {
      title: 'Explorar más',
      description: '¿Trabaja en otro sector? Cuéntenos sus requisitos — creamos la solución ideal para su proyecto.',
      cta: 'Contáctenos',
      path: '/contact-us/',
    },
  },
  cta: {
    eyebrow: 'Hable con un Experto',
    title: '¿Listo para construir su solución de centro de datos?',
    text: 'Cuéntenos sus requisitos de energía, enfriamiento y densidad — nuestros ingenieros le ayudarán a elegir la solución adecuada.',
    buttonLabel: 'Contáctenos',
  },
};