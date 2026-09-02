/**
 * News & Insights hub — 中文。
 * @see news-insights-hub-content.ts for type definitions.
 */

import type { NewsInsightsHubContent } from './news-insights-hub-content';

export const NEWS_INSIGHTS_HUB_ZH: NewsInsightsHubContent = {
  hero: {
    eyebrow: '新闻与洞察',
    title: '新闻、洞察与客户故事',
    subtitle:
      '与数益科技保持同步 —— 官方公告、技术深度解析与真实部署案例，为明日数据中心注入动力。',
    bannerImage: '/resources/soeteck-factory-in-Hefei-China-2.webp',
  },
  categories: [
    {
      eyebrow: '官方动态',
      title: '新闻动态',
      description:
        '产品发布、展会活动、公司里程碑与合作资讯 —— 来自数益科技新闻中心。',
      image: '/resources/soeteck-factory-in-Hefei-China-2.webp',
      alt: '数益新闻中心 — 官方公告与动态',
      path: '/news-and-insights/news-releases/',
    },
    {
      eyebrow: '技术洞察',
      title: '博客',
      description:
        '关于数据中心电源、冷却、模块化基础设施与新兴技术的专家视角与实用指南。',
      image: '/resources/Laboratory-RD-Environments.webp',
      alt: '数益技术博客 — 数据中心技术洞察',
      path: '/news-and-insights/blogs/',
    },
    {
      eyebrow: '成功案例',
      title: '客户案例',
      description:
        '真实部署案例与客户成功故事，展示数益解决方案如何应对复杂的电源与冷却挑战。',
      image: '/resources/Qatar-containerized-data-center-768x385.webp',
      alt: '数益客户案例 — 真实部署',
      path: '/news-and-insights/client-case-studies/',
    },
  ],
  cta: {
    eyebrow: '保持联系',
    title: '获取数益科技最新动态',
    text: '欢迎联系我们的团队，了解媒体采访、合作洽谈或数据中心项目咨询。',
    buttonLabel: '联系我们',
  },
};