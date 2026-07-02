import type { ContentApiArticleCard, ContentApiResponse, RouteType } from '@/lib/content-api';

export type PageKind = 'home' | 'about' | 'newsReleases' | 'articleSingle' | 'productCategory' | 'productSingle' | 'generic';

export interface PageSeo {
  title: string;
  canonical: string;
  robots: string;
}

export interface PageBreadcrumb {
  label: string;
  path: string;
}

export interface PageImage {
  path: string;
  alt: string;
}

export interface AdaptedArticleCategory {
  name: string;
  slug: string;
  path: string;
}

export interface AdaptedArticleCard {
  id: string | null;
  title: string;
  slug: string;
  path: string;
  excerpt: string;
  compactExcerpt: string;
  date: string | null;
  modified: string | null;
  featuredImage: PageImage | null;
  primaryCategory: AdaptedArticleCategory | null;
}

export interface AdaptedArticleTag {
  name: string;
  slug: string;
  path: string;
}

export interface AdaptedArticleSingle {
  id: string | null;
  slug: string | null;
  title: string;
  excerpt: string;
  date: string | null;
  modified: string | null;
  contentHtml: string;
  featuredImage: PageImage | null;
  categoryPath: AdaptedArticleCategory[];
  primaryCategory: AdaptedArticleCategory | null;
  tags: AdaptedArticleTag[];
}

export interface AdaptedPage {
  id: string | null;
  kind: PageKind;
  routeType: RouteType;
  routePath: string;
  language: string;
  title: string;
  seo: PageSeo;
  breadcrumbs: PageBreadcrumb[];
  heroImage: PageImage | null;
  contentHtml: string;
  media: PageImage[];
  article: AdaptedArticleSingle | null;
  articles: AdaptedArticleCard[];
  featuredArticles: AdaptedArticleCard[];
  source: ContentApiResponse;
  sections?: Record<string, any>;
}

export function adaptPage(content: ContentApiResponse): AdaptedPage {
  const title = content.page?.title
    ?? content.product?.title
    ?? content.article?.title
    ?? content.category?.name
    ?? content.archive?.name
    ?? content.seo.title;

  const heroImage = normalizeImage(
    content.page?.featuredImage
      ?? content.product?.gallery?.[0]
      ?? content.article?.featuredImage
      ?? content.media?.[0]
      ?? null,
  );

  // 使用 API 返回的带前缀的 ID（如 "post-21880"、"term-16"）
  const id = content.page?.id ?? content.category?.id ?? content.product?.id ?? content.article?.id ?? content.archive?.id ?? null;

  return {
    id,
    kind: pageKindFor(content),
    routeType: content.route.type,
    routePath: content.route.path,
    language: content.route.language,
    title,
    seo: {
      title: content.seo.title,
      canonical: content.seo.productionCanonical ?? content.seo.canonical,
      robots: content.seo.robots,
    },
    breadcrumbs: adaptBreadcrumbs(content),
    heroImage,
    contentHtml: content.page?.contentHtml ?? content.article?.contentHtml ?? '',
    media: content.media.map((item) => normalizeImage(item)).filter((item): item is PageImage => item !== null),
    article: adaptArticleSingle(content),
    articles: (content.articles ?? []).map(adaptArticleCard),
    featuredArticles: (content.featuredArticles ?? []).map(adaptArticleCard),
    source: content,
    sections: content.sections,
  };
}

function pageKindFor(content: ContentApiResponse): PageKind {
  if (content.route.type === 'home') {
    return 'home';
  }

  // 去掉语言前缀后匹配路径（/en/、/zh/、/ru/、/pt/、/es/）
  const normalizedPath = content.route.path.replace(/^\/[a-z]{2}\//, '/');

  if (content.route.type === 'page' && normalizedPath === '/about-soeteck/') {
    return 'about';
  }

  if (content.route.type === 'article_category_archive' && normalizedPath === '/news-and-insights/news-releases/') {
    return 'newsReleases';
  }

  if (content.route.type === 'product_category') {
    return 'productCategory';
  }

  if (content.route.type === 'product') {
    return 'productSingle';
  }

  if (content.route.type === 'article' && normalizedPath === '/news-and-insights/blogs/free-cooling-for-data-center-the-energy-savings/') {
    return 'articleSingle';
  }

  return 'generic';
}

function adaptBreadcrumbs(content: ContentApiResponse): PageBreadcrumb[] {
  const breadcrumbs = content.breadcrumbs.map((item) => ({
    label: item.label,
    path: item.path,
  }));

  if (pageKindFor(content) !== 'articleSingle' || breadcrumbs.some((item) => item.label === 'Blogs')) {
    return breadcrumbs;
  }

  const current = breadcrumbs.at(-1);
  const leading = current ? breadcrumbs.slice(0, -1) : breadcrumbs;

  return [
    ...leading,
    { label: 'Blogs', path: '/en/news-and-insights/blogs/' },
    ...(current ? [current] : []),
  ];
}

function adaptArticleSingle(content: ContentApiResponse): AdaptedArticleSingle | null {
  const article = content.article;
  if (!article) {
    return null;
  }

  const categoryPath = (article.categoryPath ?? []).map((category) => ({
    name: category.name,
    slug: category.slug,
    path: category.path ?? '',
  }));

  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    modified: article.modified,
    contentHtml: article.contentHtml,
    featuredImage: normalizeImage(article.featuredImage),
    categoryPath,
    primaryCategory: categoryPath.find((category) => category.slug === 'blogs') ?? categoryPath.at(-1) ?? null,
    tags: (article.tags ?? []).map((tag) => ({
      name: tag.name,
      slug: tag.slug,
      path: tag.path ?? `/en/news-and-insights/tag/${tag.slug}/`,
    })),
  };
}

function adaptArticleCard(article: ContentApiArticleCard): AdaptedArticleCard {
  return {
    id: article.id,
    title: article.title,
    slug: article.slug,
    path: article.path,
    excerpt: article.excerpt,
    compactExcerpt: article.compactExcerpt ?? article.excerpt,
    date: article.date,
    modified: article.modified,
    featuredImage: normalizeImage(article.featuredImage),
    primaryCategory: article.primaryCategory ? {
      name: article.primaryCategory.name,
      slug: article.primaryCategory.slug,
      path: article.primaryCategory.path,
    } : null,
  };
}

function normalizeImage(image: { path?: string; url?: string; alt?: string } | null | undefined): PageImage | null {
  if (!image) {
    return null;
  }

  const path = image.path ?? image.url;
  if (!path) {
    return null;
  }

  return {
    path,
    alt: image.alt ?? '',
  };
}
