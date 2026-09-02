import type { ContentApiArticleCard, ContentApiResponse, RouteType } from '@/lib/content-api';

export type PageKind = 'home' | 'about' | 'contact' | 'thankYou' | 'search' | 'newsReleases' | 'blogsArchive' | 'caseStudiesArchive' | 'articleCategoryArchive' | 'articleSingle' | 'products' | 'productCategory' | 'productCategoryLanding' | 'productSingle' | 'solutionAicoolit' | 'solutionPrefab' | 'solutionCabinetModular' | 'solutionRowModular' | 'solutionAisleModular' | 'solutionDataCenterCooling' | 'solutionAiDataCenter' | 'solutionsHub' | 'newsInsightsHub' | 'industryTelecom' | 'industryColocation' | 'industryCloudHyperscale' | 'industryInternet' | 'industryFinance' | 'industryGovernment' | 'industryManufacturing' | 'industryHealthcare' | 'simple' | 'generic';

export interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  schema?: Array<Record<string, unknown>>;
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
  author?: {
    id: number;
    name: string;
    description?: string;
    avatar?: string | null;
  } | null;
  prevPost?: {
    id: string;
    title: string;
    path: string;
  } | null;
  nextPost?: {
    id: string;
    title: string;
    path: string;
  } | null;
  relatedArticles?: AdaptedArticleCard[];
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
      description: content.seo.description ?? '',
      canonical: content.seo.productionCanonical ?? content.seo.canonical,
      robots: content.seo.robots,
      schema: content.seo.schema,
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

  // Code-embedded 自定义开发页面的路径与模板类型映射
  const codeEmbeddedPaths: Record<string, PageKind> = {
    '/solutions/liquid-cooling-solutions/liquid-cooling-data-center/': 'solutionAicoolit',
    '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/': 'solutionAicoolit',
    '/solutions/data-center-solutions/prefabricated-container-data-center/': 'solutionPrefab',
    '/solutions/data-center-solutions/cabinet-modular-data-center/': 'solutionCabinetModular',
    '/solutions/data-center-solutions/row-modular-data-center/': 'solutionRowModular',
    '/solutions/data-center-solutions/aisle-modular-data-center/': 'solutionAisleModular',
    '/solutions/data-center-solutions/ai-data-center/': 'solutionAiDataCenter',
    '/solutions/data-center-cooling-solutions/': 'solutionDataCenterCooling',
    // 行业顶层页（code-embedded，CMS post + Solutions 分类，2026-08-31 固化 8 个）
    '/solutions/telecom/': 'industryTelecom',
    '/solutions/colocation/': 'industryColocation',
    '/solutions/cloud-hyperscale/': 'industryCloudHyperscale',
    '/solutions/internet/': 'industryInternet',
    '/solutions/finance/': 'industryFinance',
    '/solutions/government/': 'industryGovernment',
    '/solutions/manufacturing/': 'industryManufacturing',
    '/solutions/healthcare/': 'industryHealthcare',
    // 栏目 hub 页（fixture 路由，code-owned in Astro）
    '/solutions/': 'solutionsHub',
    '/news-and-insights/': 'newsInsightsHub',
  };

  // 【最高优先级】WordPress 手动标记为"自定义开发"的页面
  // 编辑在 WordPress 中设置后，此标记会通过 Content API 的 codeEmbeddedType 字段传递
  if (content.route.codeEmbeddedType === 'custom') {
    const matched = codeEmbeddedPaths[normalizedPath];
    if (matched) return matched;
    // 标记为 custom 但路径不匹配已知模板时，继续走原有逻辑
  }

  if (content.route.type === 'page' && normalizedPath === '/about-soeteck/') {
    return 'about';
  }

  if (content.route.type === 'page' && normalizedPath === '/contact-us/') {
    return 'contact';
  }

  if (content.route.type === 'page' && normalizedPath === '/thank-you/') {
    return 'thankYou';
  }

  // Search page — route type is 'page', path is /search/
  if (content.route.type === 'page' && normalizedPath === '/search/') {
    return 'search';
  }

  if (content.route.type === 'article_category_archive' && normalizedPath === '/news-and-insights/news-releases/') {
    return 'newsReleases';
  }

  // Article category archives: blogs and case studies (separate from news releases)
  if (content.route.type === 'article_category_archive' && (normalizedPath.startsWith('/news-and-insights/blogs/') || normalizedPath === '/news-and-insights/blogs')) {
    return 'blogsArchive';
  }

  if (content.route.type === 'article_category_archive' && (normalizedPath.startsWith('/news-and-insights/client-case-studies/') || normalizedPath === '/news-and-insights/client-case-studies')) {
    return 'caseStudiesArchive';
  }

  // Products landing page — 在 route type 检查之前，优先匹配路径
  // API 可能将 /products/ 返回为 product_category 或 page 类型
  if (normalizedPath === '/products/' || normalizedPath === '/products') {
    return 'products';
  }

  if (content.route.type === 'product_category') {
    // Top-level categories (/products/critical-power/) show a subcategory landing page.
    // Subcategories (/products/critical-power/ups/) show the product grid.
    const segments = normalizedPath.replace(/^\/products\//, '').split('/').filter(Boolean);
    if (segments.length === 1) {
      return 'productCategoryLanding';
    }
    return 'productCategory';
  }

  if (content.route.type === 'product') {
    return 'productSingle';
  }

  // 兜底路径匹配（仅在编辑未设置模板类型时生效，保持向后兼容）
  // 如果编辑明确设置了"通用模板"(default)，则跳过兜底，走 type-based 逻辑
  if (content.route.codeEmbeddedType !== 'default') {
    const matched = codeEmbeddedPaths[normalizedPath];
    if (matched) return matched;
  }

  // Article single (for all other article types)
  if (content.route.type === 'article') {
    return 'articleSingle';
  }

  // Simple pages: legal/utility pages rendered with SimplePage.astro
  const simplePaths = ['/site-map/', '/terms-of-use/', '/privacy-policy/', '/cookie-policy/'];
  if (content.route.type === 'page' && simplePaths.includes(normalizedPath)) {
    return 'simple';
  }

  return 'generic';
}

function adaptBreadcrumbs(content: ContentApiResponse): PageBreadcrumb[] {
  const breadcrumbs = content.breadcrumbs.map((item) => ({
    label: item.label,
    path: item.path,
  }));

  // 非文章、非 news 页面不做干预
  const kind = pageKindFor(content);
  const normalizedPath = content.route.path.replace(/^\/[a-z]{2}\//, '/');
  const isNewsArticle = normalizedPath.startsWith('/news-and-insights/');
  if (kind !== 'articleSingle' || !isNewsArticle) {
    return breadcrumbs;
  }

  // API 已返回 >2 条面包屑（Home + 分类链 + 文章标题），说明
  // Content API 已通过 rank_math_primary_category 构建了完整面包屑，
  // 直接信任 API 返回的翻译标签（适用于所有语言）。
  if (breadcrumbs.length > 2) {
    return breadcrumbs;
  }

  // 降级：文章没有 Rank Math 主分类时 API 不会发送分类面包屑，
  // 此时注入"Blogs"作为默认子分类。
  const lang = content.route.language ?? 'en';
  const blogsLabel: Record<string, string> = {
    en: 'Blogs',
    zh: '博客',
    ru: 'Блог',
    pt: 'Blog',
    es: 'Blog',
  };

  const current = breadcrumbs.at(-1);
  const leading = current ? breadcrumbs.slice(0, -1) : breadcrumbs;

  return [
    ...leading,
    { label: blogsLabel[lang] ?? 'Blogs', path: `/${lang}/news-and-insights/blogs/` },
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
    author: article.author ?? null,
    prevPost: article.prevPost ?? null,
    nextPost: article.nextPost ?? null,
    relatedArticles: (article.relatedArticles ?? []).map(adaptArticleCard),
  };
}

export function adaptArticleCard(article: ContentApiArticleCard): AdaptedArticleCard {
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
