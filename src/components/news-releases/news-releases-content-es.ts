/**
 * News/archive page content — Español.
 * @see news-releases-content.ts for type definitions.
 */

import type { ArchiveContent, HeroConfig, SidebarContent, SliderContent, PressListContent } from './news-releases-content';

const ES_NEWS_RELEASES_HERO: HeroConfig = {
  title: 'Noticias',
  description: 'Anuncios oficiales de SOETECK, actualizaciones de productos, noticias de eventos e hitos de la empresa para socios, clientes y medios.',
  panelLabel: 'Actualizaciones oficiales',
  panelItems: ['Anuncios de productos', 'Eventos y exposiciones', 'Hitos de la empresa'],
  eyebrow: 'Sala de prensa Soeteck',
};

const ES_BLOGS_HERO: HeroConfig = {
  title: 'Blog',
  description: 'Información técnica, tendencias del sector y perspectivas de expertos sobre energía, refrigeración y soluciones de infraestructura para centros de datos.',
  panelLabel: 'Información técnica',
  panelItems: ['Tendencias del sector', 'Guías técnicas', 'Mejores prácticas'],
  eyebrow: 'Insights Soeteck',
};

const ES_CASE_STUDIES_HERO: HeroConfig = {
  title: 'Casos de Clientes',
  description: 'Implementaciones reales e historias de éxito que muestran cómo las soluciones SOETECK resuelven desafíos complejos de energía y refrigeración.',
  panelLabel: 'Historias de éxito',
  panelItems: ['Proyectos globales', 'Soluciones personalizadas', 'Aspectos destacados de ROI'],
  eyebrow: 'Historias de éxito Soeteck',
};

const ES_SIDEBAR: SidebarContent = {
  newsTopics: ['Actualizaciones de productos', 'Eventos', 'Noticias corporativas', 'Asociaciones'],
  newsTopicsLabel: 'Temas de noticias',
  inquiriesLabel: 'Consultas de Medios y Negocios',
  inquiriesTitle: '¿Necesita información oficial de SOETECK?',
  inquiriesText: 'Comuníquese con nuestro equipo para solicitudes de medios, debates sobre asociaciones, información sobre productos o cooperación en proyectos.',
  inquiriesCta: 'Contacte a SOETECK',
  companyLabel: 'Resumen de la Empresa',
  companyFacts: [
    'Soluciones de energía y refrigeración para centros de datos',
    'Apoyo global a proyectos',
    'Capacidad OEM/ODM',
    'Soporte empresarial multilingüe',
  ],
};

const ES_SLIDER: SliderContent = {
  headingEyebrow: 'Noticias destacadas',
  headingTitle: 'Actualizaciones oficiales de SOETECK',
  badge: 'Noticias destacadas',
  cta: 'Leer más',
};

const ES_PRESS_LIST: PressListContent = {
  sectionEyebrow: 'Últimas publicaciones',
  sectionTitle: 'Archivo de noticias',
  actionLabel: 'Leer más',
};

export const ARCHIVE_ES: ArchiveContent = {
  newsReleases: ES_NEWS_RELEASES_HERO,
  blogs: ES_BLOGS_HERO,
  caseStudies: ES_CASE_STUDIES_HERO,
  sidebar: ES_SIDEBAR,
  slider: ES_SLIDER,
  pressList: ES_PRESS_LIST,
  blogLabels: {
    featuredLabel: 'Artículo destacado',
    readMoreLabel: 'Comenzar a leer',
    sourceLabel: 'Equipo Técnico de SOETECK',
    featuredEyebrow: 'Selección del editor',
    featuredTitle: 'En el punto de mira',
    listEyebrow: 'Más perspectivas',
    listTitle: 'Explora el archivo',
    noArticles: 'No se encontraron artículos en esta categoría.',
  },
  caseStudyLabels: {
    featuredLabel: 'Caso destacado',
    readMoreLabel: 'Ver caso',
    sourceLabel: 'Equipo de Proyectos SOETECK',
    featuredEyebrow: 'Destacado',
    featuredTitle: 'Caso de cliente destacado',
    listEyebrow: 'Todos los casos',
    listTitle: 'Más implementaciones reales',
    noArticles: 'No se encontraron casos en esta categoría.',
  },
  cta: {
    title: 'Hable con SOETECK sobre sus necesidades de energía y refrigeración',
    buttonLabel: 'Contáctenos',
  },
};
