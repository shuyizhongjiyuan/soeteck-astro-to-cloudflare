/**
 * News & Insights hub — code-embedded content (English base + type definitions).
 *
 * Landing page for the top-level /news-and-insights/ navigation item.
 * Aggregates three categories: News Releases, Blogs, Client Case Studies.
 *
 * Each language variant (news-insights-hub-content-{zh,ru,pt,es}.ts) exports
 * a NewsInsightsHubContent object with the same shape.
 *
 * NOTE: category `path` values are stored WITHOUT the language prefix
 * (e.g. `/news-and-insights/blogs/`); components prefix with `/${lang}`.
 */

export interface NewsInsightsHubCategory {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  /** Language-agnostic path (no /en/ prefix); prefix with `/${lang}` in template. */
  path: string;
}

export interface NewsInsightsHubHero {
  eyebrow: string;
  title: string;
  subtitle: string;
  bannerImage: string;
}

export interface NewsInsightsHubCta {
  eyebrow: string;
  title: string;
  text: string;
  buttonLabel: string;
}

export interface NewsInsightsHubContent {
  hero: NewsInsightsHubHero;
  categories: NewsInsightsHubCategory[];
  cta: NewsInsightsHubCta;
}

export const NEWS_INSIGHTS_HUB_EN: NewsInsightsHubContent = {
  hero: {
    eyebrow: 'News & Insights',
    title: 'News, Insights, and Customer Stories',
    subtitle:
      'Stay current with Soeteck — official announcements, technical deep dives, and real-world deployments powering the data centers of tomorrow.',
    bannerImage: '/resources/soeteck-factory-in-Hefei-China-2.webp',
  },
  categories: [
    {
      eyebrow: 'Official updates',
      title: 'News Releases',
      description:
        'Product announcements, exhibitions, company milestones, and partnership news — straight from the Soeteck newsroom.',
      image: '/resources/soeteck-factory-in-Hefei-China-2.webp',
      alt: 'Soeteck newsroom — official announcements and updates',
      path: '/news-and-insights/news-releases/',
    },
    {
      eyebrow: 'Technical insights',
      title: 'Blogs',
      description:
        'Expert perspectives and practical guides on data center power, cooling, modular infrastructure, and emerging technologies.',
      image: '/resources/Laboratory-RD-Environments.webp',
      alt: 'Soeteck technical blog — insights on data center technology',
      path: '/news-and-insights/blogs/',
    },
    {
      eyebrow: 'Success stories',
      title: 'Client Case Studies',
      description:
        'Real-world deployments and customer success stories showcasing how Soeteck solutions solve complex power and cooling challenges.',
      image: '/resources/Qatar-containerized-data-center-768x385.webp',
      alt: 'Soeteck client case studies — real-world deployments',
      path: '/news-and-insights/client-case-studies/',
    },
  ],
  cta: {
    eyebrow: 'Stay in the Loop',
    title: 'Get the latest from Soeteck',
    text: 'Reach out for media inquiries, partnership discussions, or to discuss your data center project with our team.',
    buttonLabel: 'Contact Us',
  },
};