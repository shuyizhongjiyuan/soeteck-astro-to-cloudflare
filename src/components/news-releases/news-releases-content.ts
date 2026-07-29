/**
 * News/archive page content — English base + type definition.
 *
 * Each language variant (news-releases-content-zh.ts etc.) exports
 * a NewsReleaseContent object with the same shape. Components use
 * contentMap[lang] to select the correct language.
 *
 * @package Soeteck\Astro
 */

// ---------------------------------------------------------------------------
// Type definitions
// ---------------------------------------------------------------------------

export interface HeroConfig {
  title: string;
  description: string;
  panelLabel: string;
  panelItems: string[];
  eyebrow: string;
}

export interface SidebarContent {
  newsTopics: string[];
  newsTopicsLabel: string;
  inquiriesLabel: string;
  inquiriesTitle: string;
  inquiriesText: string;
  inquiriesCta: string;
  companyLabel: string;
  companyFacts: string[];
}

export interface SliderContent {
  headingEyebrow: string;
  headingTitle: string;
  badge: string;
  cta: string;
}

export interface PressListContent {
  sectionEyebrow: string;
  sectionTitle: string;
  actionLabel: string;
}

export interface FeaturedCardLabels {
  /** Label badge text (e.g. "Featured article") */
  featuredLabel: string;
  /** Read-more link text (e.g. "Start reading") */
  readMoreLabel: string;
}

export interface EmptyStateLabels {
  /** Text shown when no articles exist */
  noArticles: string;
}

export interface ArchiveContent {
  newsReleases: HeroConfig;
  blogs: HeroConfig;
  caseStudies: HeroConfig;
  sidebar: SidebarContent;
  slider: SliderContent;
  pressList: PressListContent;
  /** Labels specific to blog archive page */
  blogLabels: FeaturedCardLabels & { sourceLabel: string } & EmptyStateLabels;
  /** Labels specific to case studies archive page */
  caseStudyLabels: FeaturedCardLabels & { sourceLabel: string } & EmptyStateLabels;
  /** CTA section at bottom of case studies page */
  cta: { title: string; buttonLabel: string };
}

// ---------------------------------------------------------------------------
// Content utility functions (shared, not language-dependent)
// ---------------------------------------------------------------------------

export function formatDisplayDate(value: string | null, locale: string = 'en-US'): string {
  if (!value) {
    return '';
  }

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}

export function formatDateParts(value: string | null, locale: string = 'en-US'): { month: string; day: string; year: string } {
  if (!value) {
    return { month: '', day: '', year: '' };
  }

  const date = new Date(value);

  return {
    month: new Intl.DateTimeFormat(locale, { month: 'short' }).format(date),
    day: new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date),
    year: new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date),
  };
}

// ---------------------------------------------------------------------------
// English content
// ---------------------------------------------------------------------------

export const NEWS_RELEASES_HERO: HeroConfig = {
  title: 'News Releases',
  description: 'Official Soeteck announcements, product updates, event news, and company milestones for partners, customers, and media.',
  panelLabel: 'Official updates',
  panelItems: ['Product announcements', 'Events & exhibitions', 'Company milestones'],
  eyebrow: 'Newsroom',
};

export const BLOGS_HERO: HeroConfig = {
  title: 'Blogs',
  description: 'Technical insights, industry trends, and expert perspectives on data center power, cooling, and infrastructure solutions.',
  panelLabel: 'Technical insights',
  panelItems: ['Industry trends', 'Technical guides', 'Best practices'],
  eyebrow: 'Blogs',
};

export const CASE_STUDIES_HERO: HeroConfig = {
  title: 'Client Case Studies',
  description: 'Real-world deployments and success stories showcasing how Soeteck solutions solve complex power and cooling challenges.',
  panelLabel: 'Success stories',
  panelItems: ['Global deployments', 'Custom solutions', 'ROI highlights'],
  eyebrow: 'Case Studies',
};

export const NEWSROOM_TOPICS: string[] = ['Product Updates', 'Events', 'Company News', 'Partnerships'];

export const NEWSROOM_FACTS: string[] = [
  'Data center power and cooling solutions',
  'Global project support',
  'OEM/ODM capability',
  'Multi-language business support',
];

export const ARCHIVE_SIDEBAR: SidebarContent = {
  newsTopics: NEWSROOM_TOPICS,
  newsTopicsLabel: 'News Topics',
  inquiriesLabel: 'Media & Business Inquiries',
  inquiriesTitle: 'Need official information from Soeteck?',
  inquiriesText: 'Contact our team for media requests, partnership discussions, product information, or project cooperation.',
  inquiriesCta: 'Contact Soeteck',
  companyLabel: 'Company Snapshot',
  companyFacts: NEWSROOM_FACTS,
};

export const ARCHIVE_SLIDER: SliderContent = {
  headingEyebrow: 'Featured News',
  headingTitle: 'Official updates from Soeteck',
  badge: 'Featured News',
  cta: 'Read release',
};

export const ARCHIVE_PRESS_LIST: PressListContent = {
  sectionEyebrow: 'Latest Releases',
  sectionTitle: 'Press archive',
  actionLabel: 'Read release',
};

export const ARCHIVE_EN: ArchiveContent = {
  newsReleases: NEWS_RELEASES_HERO,
  blogs: BLOGS_HERO,
  caseStudies: CASE_STUDIES_HERO,
  sidebar: ARCHIVE_SIDEBAR,
  slider: ARCHIVE_SLIDER,
  pressList: ARCHIVE_PRESS_LIST,
  blogLabels: {
    featuredLabel: 'Featured article',
    readMoreLabel: 'Start reading',
    sourceLabel: 'Soeteck Technical Team',
    noArticles: 'No articles found in this category.',
  },
  caseStudyLabels: {
    featuredLabel: 'Featured case study',
    readMoreLabel: 'View case study',
    sourceLabel: 'Soeteck Project Team',
    noArticles: 'No case studies found in this category.',
  },
  cta: {
    title: 'Talk with Soeteck about your power and cooling requirements',
    buttonLabel: 'Contact us',
  },
};
