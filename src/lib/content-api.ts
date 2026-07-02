// API base URL 来源优先级：
// 1. `CONTENT_API_BASE_URL` 环境变量（生产/Cloudflare Pages 通过此设置）
// 2. `PUBLIC_CONTENT_API_BASE_URL`（Astro 客户端可访问变体，见 https://docs.astro.build/en/guides/environment-variables/）
// 3. 生产站点 `https://cms.soeteck.com`（fallback，防止环境变量遗漏时构建失败）
// 本地开发请在 `.env` 中设 `CONTENT_API_BASE_URL=http://soeteck.local.test`
const API_BASE_URL =
  import.meta.env.CONTENT_API_BASE_URL ??
  import.meta.env.PUBLIC_CONTENT_API_BASE_URL ??
  'https://cms.soeteck.com';

export type RouteType = 'home' | 'page' | 'product_category' | 'product' | 'article' | 'article_category_archive';

/**
 * 导航菜单项类型
 */
export interface MenuItem {
  id: string;
  title: string;
  url: string;
  path: string;
  target?: '_blank' | '_self';
  children?: MenuItem[];
  // 菜单项类型，用于区分产品、解决方案、新闻等，方便前端做特殊样式处理
  type?: 'default' | 'product' | 'solution' | 'news';
  // 可选的特色图，用于解决方案、新闻等Mega Menu
  featuredImage?: ContentApiImage | null;
  // 可选的简短描述，用于Mega Menu显示
  excerpt?: string;
  // News & Insights 分类的动态文章数据
  newsPosts?: {
    featured: {
      id: string;
      title: string;
      url: string;
      path: string;
      date: string;
      excerpt?: string | null;
      featuredImage?: ContentApiImage | null;
    } | null;
    list: {
      id: string;
      title: string;
      url: string;
      path: string;
      date: string;
    }[];
  };
  // 文章/页面的摘要（用于 Solutions 等 post_type 菜单项）
  postExcerpt?: string;
}

/**
 * 语言项类型
 */
export interface LanguageItem {
  slug: string;
  name: string;
  nativeName: string;
  flag: ContentApiImage;
  url: string;
  isCurrent: boolean;
}

/**
 * 社交链接类型
 */
export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'instagram';
  name: string;
  url: string;
  icon?: ContentApiImage;
}

/**
 * 页脚配置类型
 */
export interface FooterConfig {
  logo: ContentApiImage;
  // 页脚导航菜单，分组结构
  navigation: Array<{
    title: string;
    items: MenuItem[];
  }>;
  socialLinks: SocialLink[];
  copyrightText: string;
  legalLinks: MenuItem[];
}

/**
 * 全局数据接口响应类型
 */
export interface GlobalConfigResponse {
  site: {
    name: string;
    description: string;
    logo: ContentApiImage;
    logoWhite?: ContentApiImage; // 白色版本logo，用于深色背景
    favicon?: ContentApiImage;
  };
  urls: {
    home: string;
    contact: string;
    search: string;
    terms: string;
    privacy: string;
  };
  // 主导航菜单
  mainNavigation: MenuItem[];
  // 产品菜单（用于Mega Menu）
  productNavigation?: MenuItem[];
  // 解决方案菜单（用于Mega Menu）
  solutionNavigation?: MenuItem[];
  // 新闻菜单（用于Mega Menu）
  newsNavigation?: MenuItem[];
  // 可用语言列表
  languages: LanguageItem[];
  // 当前语言
  currentLanguage: LanguageItem;
  // 页脚配置
  footer: FooterConfig;
}

export interface PocRoute {
  path: string;
  routeType: RouteType;
  expectedTitle: string;
}

export interface RouteListResponse {
  routes: PocRoute[];
}

export interface ContentApiImage {
  url?: string;
  path: string;
  alt?: string;
}

export interface ContentApiArticleCategory {
  id?: string;
  name: string;
  slug: string;
  path: string;
}

export interface ContentApiArticleCard {
  id: string | null;
  title: string;
  slug: string;
  path: string;
  excerpt: string;
  compactExcerpt?: string;
  date: string | null;
  modified: string | null;
  featuredImage?: ContentApiImage | null;
  primaryCategory?: ContentApiArticleCategory | null;
}

export interface ContentApiProductCard {
  id: string;
  title: string;
  slug: string;
  path: string;
  excerpt: string;
  type: string;
  featuredImage?: ContentApiImage | null;
  gallery: ContentApiImage[];
  tagIds: number[];
  isFeatured?: boolean;
  date?: string;
  variationsTable?: {
    productId: string;
    headers: string[];
    rows: string[][];
    hasMore: boolean;
  } | null;
}

export interface ContentApiFilterTerm {
  id: string;
  name: string;
}

export interface ContentApiFilterGroup {
  key: string;
  label: string;
  queryArg: string;
  terms: ContentApiFilterTerm[];
}

export interface ContentApiArchiveConfig {
  introBlocks: Array<{ text: string; prefix?: string }>;
  defaultSort: string;
  defaultPerPage: number;
  allowedPerPage: number[];
  filters: ContentApiFilterGroup[];
}

export interface ContentApiResponse {
  route: {
    type: RouteType;
    path: string;
    language: string;
    localizedPaths: Record<string, { path: string | null; status: string }>;
  };
  seo: {
    title: string;
    canonical: string;
    productionCanonical?: string;
    robots: string;
  };
  breadcrumbs: Array<{ label: string; path: string }>;
  media: ContentApiImage[];
  sections?: Record<string, any>;
  page?: {
    id?: string | null;
    title: string;
    contentHtml: string;
    featuredImage?: { path: string; alt?: string } | null;
  };
  category?: {
    id?: string | null;
    name: string;
    description: string;
    count: number;
  };
  products?: ContentApiProductCard[];
  children?: Array<{ id: string; name: string; slug: string; count: number; path: string }>;
  siblings?: Array<{ id: string; name: string; slug: string; count: number; path: string }>;
  bannerImage?: ContentApiImage | null;
  archiveConfig?: ContentApiArchiveConfig | null;
  product?: {
    id?: string | null;
    title: string;
    type: string;
    sku: string;
    gallery: Array<{ path: string; alt?: string }>;
    summary: string;
    descriptionHtml: string;
    // 详情页 Hero 使用
    shortOverview?: string;
    highlights?: Array<{ label: string; value: string }>;
    // 详情页 Tabs 使用
    overview?: string;
    features?: string;
    applications?: string;
    modelDescription?: string;
    specifications?: Array<{ name: string; details: Array<{ name: string; value: string }> }>;
    variations?: {
      productId: string;
      headers: string[];
      rows: Array<Array<string | number>>;
      hasMore: boolean;
    } | null;
    downloads?: Array<{ id: number; name: string; file: string }>;
    primaryCategory?: {
      id: string;
      name: string;
      slug: string;
      path: string;
    } | null;
    inquiryContext?: {
      productId: string | null;
      productTitle: string;
      path: string | null;
    };
  };
  article?: {
    id: string | null;
    slug: string | null;
    categoryPath: Array<{
      id?: string;
      name: string;
      slug: string;
      path?: string;
    }>;
    title: string;
    excerpt: string;
    date: string | null;
    modified: string | null;
    contentHtml: string;
    featuredImage?: ContentApiImage | null;
    tocCandidates?: Array<{
      id: string;
      text: string;
      level: 2 | 3;
    }>;
    tags: Array<{
      id?: string;
      name: string;
      slug: string;
      path?: string;
    }>;
  };
  archive?: {
    id?: string | null;
    name: string;
    description: string;
    count: number;
  };
  articles?: ContentApiArticleCard[];
  featuredArticles?: ContentApiArticleCard[];
}

export async function fetchPocRoutes(): Promise<PocRoute[]> {
  const response = await fetch(`${API_BASE_URL}/wp-json/soeteck/v1/routes?fixture=poc`);
  if (!response.ok) {
    throw new Error(`Failed to fetch PoC routes: ${response.status}`);
  }

  const data = (await response.json()) as RouteListResponse;
  return data.routes;
}

export async function fetchRouteContent(route: PocRoute, lang: string = 'en'): Promise<ContentApiResponse> {
  const endpoint = endpointForRouteType(route.routeType);
  const response = await fetch(`${API_BASE_URL}/wp-json/soeteck/v1/${endpoint}?path=${encodeURIComponent(route.path)}&lang=${lang}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${route.path}: ${response.status}`);
  }

  return (await response.json()) as ContentApiResponse;
}

/**
 * 获取全局配置数据
 * @param lang 语言代码，不传则自动检测
 */
export async function fetchGlobalConfig(lang?: string): Promise<GlobalConfigResponse> {
  const url = new URL(`${API_BASE_URL}/wp-json/soeteck/v1/global`);
  if (lang) {
    url.searchParams.set('lang', lang);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch global config: ${response.status}`);
  }

  return (await response.json()) as GlobalConfigResponse;
}

function endpointForRouteType(routeType: RouteType): string {
  switch (routeType) {
    case 'home':
    case 'page':
      return 'page';
    case 'product_category':
      return 'product-category';
    case 'product':
      return 'product';
    case 'article':
      return 'article';
    case 'article_category_archive':
      return 'archive';
  }
}
