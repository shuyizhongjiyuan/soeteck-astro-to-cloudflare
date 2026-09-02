/**
 * News/archive page content — 中文。
 * @see news-releases-content.ts for type definitions.
 */

import type { ArchiveContent, HeroConfig, SidebarContent, SliderContent, PressListContent } from './news-releases-content';

const ZH_NEWS_RELEASES_HERO: HeroConfig = {
  title: '新闻动态',
  description: '数益科技官方公告、产品动态、展会活动及公司里程碑，面向合作伙伴、客户及媒体。',
  panelLabel: '官方动态',
  panelItems: ['产品发布', '展会活动', '公司里程碑'],
  eyebrow: '数益新闻中心',
};

const ZH_BLOGS_HERO: HeroConfig = {
  title: '博客',
  description: '技术洞察、行业趋势及专家观点，聚焦数据中心电源、冷却及基础设施解决方案。',
  panelLabel: '技术洞察',
  panelItems: ['行业趋势', '技术指南', '最佳实践'],
  eyebrow: '数益展望',
};

const ZH_CASE_STUDIES_HERO: HeroConfig = {
  title: '客户案例',
  description: '实际部署案例与成功故事，展示数益科技如何解决复杂的电源与冷却挑战。',
  panelLabel: '成功案例',
  panelItems: ['全球部署', '定制方案', 'ROI 亮点'],
  eyebrow: '数益成功案例',
};

const ZH_SIDEBAR: SidebarContent = {
  newsTopics: ['产品更新', '展会活动', '公司新闻', '合作伙伴'],
  newsTopicsLabel: '新闻主题',
  inquiriesLabel: '媒体与商务咨询',
  inquiriesTitle: '需要数益科技的官方信息？',
  inquiriesText: '请联系我们的团队，获取媒体采访、合作洽谈、产品信息或项目协作支持。',
  inquiriesCta: '联系数益科技',
  companyLabel: '公司概览',
  companyFacts: [
    '数据中心电源与冷却解决方案',
    '全球项目支持',
    'OEM/ODM 能力',
    '多语言业务支持',
  ],
};

const ZH_SLIDER: SliderContent = {
  headingEyebrow: '精选新闻',
  headingTitle: '数益科技官方动态',
  badge: '精选新闻',
  cta: '阅读详情',
};

const ZH_PRESS_LIST: PressListContent = {
  sectionEyebrow: '最新发布',
  sectionTitle: '新闻档案',
  actionLabel: '阅读详情',
};

export const ARCHIVE_ZH: ArchiveContent = {
  newsReleases: ZH_NEWS_RELEASES_HERO,
  blogs: ZH_BLOGS_HERO,
  caseStudies: ZH_CASE_STUDIES_HERO,
  sidebar: ZH_SIDEBAR,
  slider: ZH_SLIDER,
  pressList: ZH_PRESS_LIST,
  blogLabels: {
    featuredLabel: '精选文章',
    readMoreLabel: '开始阅读',
    sourceLabel: '数益科技技术团队',
    featuredEyebrow: '编辑精选',
    featuredTitle: '本周聚焦',
    listEyebrow: '更多洞察',
    listTitle: '探索文章归档',
    noArticles: '此分类暂无文章。',
  },
  caseStudyLabels: {
    featuredLabel: '精选案例',
    readMoreLabel: '查看案例',
    sourceLabel: '数益科技项目团队',
    featuredEyebrow: '精选',
    featuredTitle: '精选客户案例',
    listEyebrow: '全部案例',
    listTitle: '更多实际部署',
    noArticles: '此分类暂无案例。',
  },
  cta: {
    title: '与数益科技讨论您的电源与冷却需求',
    buttonLabel: '联系我们',
  },
};
