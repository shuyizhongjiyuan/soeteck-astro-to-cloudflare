/**
 * News & Insights hub — Русский。
 * @see news-insights-hub-content.ts for type definitions.
 */

import type { NewsInsightsHubContent } from './news-insights-hub-content';

export const NEWS_INSIGHTS_HUB_RU: NewsInsightsHubContent = {
  hero: {
    eyebrow: 'Новости и аналитика',
    title: 'Новости, аналитика и истории клиентов',
    subtitle:
      'Будьте в курсе событий SOETECK — официальные объявления, технические разборы и реальные развёртывания, питающие дата-центры будущего.',
    bannerImage: '/resources/soeteck-factory-in-Hefei-China-2.webp',
  },
  categories: [
    {
      eyebrow: 'Официальные обновления',
      title: 'Новости и пресс-релизы',
      description:
        'Анонсы продуктов, выставки, корпоративные вехи и партнёрства — прямо из пресс-центра SOETECK.',
      image: '/resources/soeteck-factory-in-Hefei-China-2.webp',
      alt: 'Пресс-центр SOETECK — официальные объявления и обновления',
      path: '/news-and-insights/news-releases/',
    },
    {
      eyebrow: 'Техническая аналитика',
      title: 'Блог',
      description:
        'Экспертные мнения и практические руководства по питанию, охлаждению, модульной инфраструктуре и новым технологиям для дата-центров.',
      image: '/resources/Laboratory-RD-Environments.webp',
      alt: 'Технический блог SOETECK — аналитика по технологиям дата-центров',
      path: '/news-and-insights/blogs/',
    },
    {
      eyebrow: 'Истории успеха',
      title: 'Кейсы клиентов',
      description:
        'Реальные развёртывания и истории успеха клиентов, демонстрирующие, как решения SOETECK решают сложные задачи питания и охлаждения.',
      image: '/resources/Qatar-containerized-data-center-768x385.webp',
      alt: 'Кейсы клиентов SOETECK — реальные развёртывания',
      path: '/news-and-insights/client-case-studies/',
    },
  ],
  cta: {
    eyebrow: 'Оставайтесь на связи',
    title: 'Получайте последние новости SOETECK',
    text: 'Свяжитесь с нашей командой для медиа-запросов, обсуждения партнёрств или консультации по вашему проекту дата-центра.',
    buttonLabel: 'Связаться с нами',
  },
};