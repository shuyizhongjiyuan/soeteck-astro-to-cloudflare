/**
 * News & Insights hub — Português。
 * @see news-insights-hub-content.ts for type definitions.
 */

import type { NewsInsightsHubContent } from './news-insights-hub-content';

export const NEWS_INSIGHTS_HUB_PT: NewsInsightsHubContent = {
  hero: {
    eyebrow: 'Notícias e Insights',
    title: 'Notícias, Insights e Histórias de Clientes',
    subtitle:
      'Fique por dentro da SOETECK — anúncios oficiais, análises técnicas e implantações reais que alimentam os data centers do futuro.',
    bannerImage: '/resources/soeteck-factory-in-Hefei-China-2.webp',
  },
  categories: [
    {
      eyebrow: 'Atualizações oficiais',
      title: 'Comunicados',
      description:
        'Anúncios de produtos, exposições, marcos da empresa e novidades de parcerias — direto da sala de imprensa da SOETECK.',
      image: '/resources/soeteck-factory-in-Hefei-China-2.webp',
      alt: 'Sala de imprensa SOETECK — anúncios e atualizações oficiais',
      path: '/news-and-insights/news-releases/',
    },
    {
      eyebrow: 'Análises técnicas',
      title: 'Blog',
      description:
        'Perspectivas de especialistas e guias práticos sobre energia, resfriamento, infraestrutura modular e tecnologias emergentes para data centers.',
      image: '/resources/Laboratory-RD-Environments.webp',
      alt: 'Blog técnico SOETECK — insights sobre tecnologia de data center',
      path: '/news-and-insights/blogs/',
    },
    {
      eyebrow: 'Histórias de sucesso',
      title: 'Casos de Clientes',
      description:
        'Implantações reais e histórias de sucesso de clientes mostrando como as soluções SOETECK resolvem desafios complexos de energia e resfriamento.',
      image: '/resources/Qatar-containerized-data-center-768x385.webp',
      alt: 'Casos de clientes SOETECK — implantações reais',
      path: '/news-and-insights/client-case-studies/',
    },
  ],
  cta: {
    eyebrow: 'Fique por Dentro',
    title: 'Receba as últimas novidades da SOETECK',
    text: 'Entre em contato com nossa equipe para solicitações de mídia, discussões de parceria ou para discutir seu projeto de data center.',
    buttonLabel: 'Fale Conosco',
  },
};