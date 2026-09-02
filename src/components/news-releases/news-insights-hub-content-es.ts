/**
 * News & Insights hub — Español。
 * @see news-insights-hub-content.ts for type definitions.
 */

import type { NewsInsightsHubContent } from './news-insights-hub-content';

export const NEWS_INSIGHTS_HUB_ES: NewsInsightsHubContent = {
  hero: {
    eyebrow: 'Noticias e Información',
    title: 'Noticias, Información e Historias de Clientes',
    subtitle:
      'Manténgase al día con SOETECK — anuncios oficiales, análisis técnicos e implementaciones reales que impulsan los centros de datos del futuro.',
    bannerImage: '/resources/soeteck-factory-in-Hefei-China-2.webp',
  },
  categories: [
    {
      eyebrow: 'Actualizaciones oficiales',
      title: 'Notas de Prensa',
      description:
        'Anuncios de productos, exposiciones, hitos de la empresa y noticias de asociaciones — directamente de la sala de prensa de SOETECK.',
      image: '/resources/soeteck-factory-in-Hefei-China-2.webp',
      alt: 'Sala de prensa SOETECK — anuncios y actualizaciones oficiales',
      path: '/news-and-insights/news-releases/',
    },
    {
      eyebrow: 'Análisis técnico',
      title: 'Blog',
      description:
        'Perspectivas de expertos y guías prácticas sobre energía, enfriamiento, infraestructura modular y tecnologías emergentes para centros de datos.',
      image: '/resources/Laboratory-RD-Environments.webp',
      alt: 'Blog técnico SOETECK — análisis sobre tecnología de centros de datos',
      path: '/news-and-insights/blogs/',
    },
    {
      eyebrow: 'Historias de éxito',
      title: 'Casos de Clientes',
      description:
        'Implementaciones reales e historias de éxito de clientes que muestran cómo las soluciones SOETECK resuelven desafíos complejos de energía y enfriamiento.',
      image: '/resources/Qatar-containerized-data-center-768x385.webp',
      alt: 'Casos de clientes SOETECK — implementaciones reales',
      path: '/news-and-insights/client-case-studies/',
    },
  ],
  cta: {
    eyebrow: 'Manténgase Conectado',
    title: 'Reciba las últimas noticias de SOETECK',
    text: 'Contacte a nuestro equipo para solicitudes de medios, discusiones de asociación o para conversar sobre su proyecto de centro de datos.',
    buttonLabel: 'Contáctenos',
  },
};