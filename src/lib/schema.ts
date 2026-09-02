/**
 * Schema.org JSON-LD 生成器
 *
 * 不在 Content API 侧生成 schema（避免增加 API payload 大小），
 * 而是在 Astro 前端侧生成，每个页面组件导入对应的 builder 函数。
 *
 * 使用方式：
 *   import { buildBreadcrumbSchema, buildOrganizationSchema } from '@/lib/schema';
 *   const schema = buildBreadcrumbSchema(page.breadcrumbs, page.language);
 *   // 在 <head> 中输出：<script type="application/ld+json">{JSON.stringify(schema)}</script>
 */

import type { PageBreadcrumb, PageKind } from '@/lib/page-adapter';

// ============================================================================
// 类型定义
// ============================================================================

export interface SchemaOrg {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: unknown;
}

// ============================================================================
// BreadcrumbList
// ============================================================================

/**
 * 生成 BreadcrumbList JSON-LD
 *
 * @param breadcrumbs - 面包屑数组（从 Content API 获取）
 * @param lang - 当前语言前缀
 * @returns BreadcrumbList schema 对象
 */
export function buildBreadcrumbSchema(
  breadcrumbs: PageBreadcrumb[],
  lang: string,
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://soeteck.com${item.path}`,
    })),
  };
}

// ============================================================================
// Organization
// ============================================================================

interface OrganizationConfig {
  name: string;
  alternateName: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint: {
    telephone: string;
    contactType: string;
    availableLanguage: string[];
  };
}

/**
 * 获取 Soeteck 公司信息常量
 * 数据来源：代码常量（公司信息不常变）
 */
export function getOrganizationConfig(): OrganizationConfig {
  return {
    name: 'Soeteck',
    alternateName: '合肥数益科技有限公司',
    url: 'https://soeteck.com',
    logo: 'https://soeteck.com/resources/soeteck_logo.png',
    description:
      'Soeteck provides premium power protection, precision cooling, and data center infrastructure solutions for mission-critical environments worldwide.',
    sameAs: [
      'https://www.linkedin.com/company/soeteck/',
      'https://www.facebook.com/Soeteck',
      'https://www.youtube.com/@Soeteck',
    ],
    contactPoint: {
      telephone: '+86-551-...',
      contactType: 'sales',
      availableLanguage: ['English', '中文', 'Русский', 'Português', 'Español'],
    },
  };
}

/**
 * 生成 Organization JSON-LD
 * 适用于首页、About、Contact 页面
 *
 * @returns Organization schema 对象
 */
export function buildOrganizationSchema(): SchemaOrg {
  const org = getOrganizationConfig();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    alternateName: org.alternateName,
    url: org.url,
    logo: org.logo,
    description: org.description,
    sameAs: org.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: org.contactPoint.telephone,
      contactType: org.contactPoint.contactType,
      availableLanguage: org.contactPoint.availableLanguage,
    },
  };
}

// ============================================================================
// Product
// ============================================================================

interface ProductSchemaData {
  title: string;
  description: string;
  image: string[];
  sku: string;
  lang: string;
}

/**
 * 生成 Product JSON-LD
 * 适用于产品详情页
 *
 * @param data - 产品数据（从 Content API product endpoint 获取）
 * @returns Product schema 对象
 */
export function buildProductSchema(data: ProductSchemaData): SchemaOrg {
  const schema: SchemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.title,
    description: data.description,
    image: data.image,
    sku: data.sku,
    brand: {
      '@type': 'Brand',
      name: 'Soeteck',
    },
  };

  // B2B 场景：价格不公开时不添加 offers
  // 如果将来需要公开价格，取消注释以下代码
  // schema.offers = {
  //   '@type': 'Offer',
  //   availability: 'https://schema.org/InStock',
  //   itemCondition: 'https://schema.org/NewCondition',
  //   price: 'Call for pricing',
  //   priceCurrency: 'USD',
  // };

  return schema;
}

// ============================================================================
// Article
// ============================================================================

interface ArticleSchemaData {
  headline: string;
  description: string;
  datePublished: string | null;
  dateModified: string | null;
  image: string;
  authorName: string;
  lang: string;
  articleType?: 'Article' | 'NewsArticle' | 'TechArticle';
}

/**
 * 生成 Article JSON-LD
 * 适用于博客、新闻、案例详情页
 *
 * @param data - 文章数据
 * @returns Article schema 对象
 */
export function buildArticleSchema(data: ArticleSchemaData): SchemaOrg {
  const schema: SchemaOrg = {
    '@context': 'https://schema.org',
    '@type': data.articleType ?? 'Article',
    headline: data.headline,
    description: data.description,
    author: {
      '@type': 'Person',
      name: data.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Soeteck',
    },
  };

  if (data.datePublished) {
    schema.datePublished = data.datePublished;
  }

  if (data.dateModified) {
    schema.dateModified = data.dateModified;
  }

  if (data.image) {
    schema.image = data.image;
  }

  return schema;
}

// ============================================================================
// CollectionPage
// ============================================================================

interface CollectionPageSchemaData {
  name: string;
  description: string;
  lang: string;
}

/**
 * 生成 CollectionPage JSON-LD
 * 适用于产品归档分类页
 *
 * @param data - 归档页数据
 * @returns CollectionPage schema 对象
 */
export function buildCollectionPageSchema(
  data: CollectionPageSchemaData,
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: data.name,
    description: data.description,
  };
}

// ============================================================================
// 页面类型 → Schema 注入映射
// ============================================================================

/**
 * 根据页面类型返回需要注入的 schema 类型列表
 * 各页面组件用此函数判断需要调用哪些 builder
 *
 * @param kind - 页面类型
 * @returns 需要注入的 schema 类型名称数组
 */
export function schemasForPageKind(kind: PageKind): string[] {
  const map: Record<PageKind, string[]> = {
    home: ['BreadcrumbList', 'Organization'],
    about: ['BreadcrumbList', 'Organization', 'AboutPage'],
    contact: ['BreadcrumbList', 'Organization', 'ContactPage'],
    thankYou: ['BreadcrumbList'],
    search: ['BreadcrumbList', 'SearchAction'],
    newsReleases: ['BreadcrumbList'],
    products: ['BreadcrumbList', 'CollectionPage'],
    blogsArchive: ['BreadcrumbList'],
    caseStudiesArchive: ['BreadcrumbList'],
    articleCategoryArchive: ['BreadcrumbList'],
    articleSingle: ['BreadcrumbList', 'Article'],
    productCategory: ['BreadcrumbList', 'CollectionPage'],
    productCategoryLanding: ['BreadcrumbList', 'CollectionPage'],
    productSingle: ['BreadcrumbList', 'Product'],
    solutionAicoolit: ['BreadcrumbList'],
    solutionPrefab: ['BreadcrumbList'],
    solutionCabinetModular: ['BreadcrumbList'],
    solutionRowModular: ['BreadcrumbList'],
    solutionDataCenterCooling: ['BreadcrumbList'],
    simple: ['BreadcrumbList'],
    generic: ['BreadcrumbList'],
  };
  return map[kind] ?? ['BreadcrumbList'];
}

// ============================================================================
// 工具函数
// ============================================================================

/**
 * 将 schema 对象序列化为 JSON-LD HTML 字符串
 *
 * @param schema - schema 对象
 * @returns <script type="application/ld+json">...</script> 字符串
 */
export function renderSchema(schema: SchemaOrg): string {
  return JSON.stringify(schema, null, 2);
}