/**
 * News/archive page content — Русский.
 * @see news-releases-content.ts for type definitions.
 */

import type { ArchiveContent, HeroConfig, SidebarContent, SliderContent, PressListContent } from './news-releases-content';

const RU_NEWS_RELEASES_HERO: HeroConfig = {
  title: 'Новости',
  description: 'Официальные объявления SOETECK, обновления продуктов, новости мероприятий и вехи компании для партнёров, клиентов и СМИ.',
  panelLabel: 'Официальные новости',
  panelItems: ['Анонсы продуктов', 'Мероприятия и выставки', 'Вехи компании'],
  eyebrow: 'Новостной центр',
};

const RU_BLOGS_HERO: HeroConfig = {
  title: 'Блог',
  description: 'Технические статьи, отраслевые тренды и экспертные мнения о решениях для электропитания, охлаждения и инфраструктуры ЦОД.',
  panelLabel: 'Технические статьи',
  panelItems: ['Отраслевые тренды', 'Технические руководства', 'Лучшие практики'],
  eyebrow: 'Блог',
};

const RU_CASE_STUDIES_HERO: HeroConfig = {
  title: 'Кейсы клиентов',
  description: 'Реальные проекты и истории успеха, демонстрирующие, как решения SOETECK решают сложные задачи электропитания и охлаждения.',
  panelLabel: 'Истории успеха',
  panelItems: ['Глобальные проекты', 'Индивидуальные решения', 'Ключевые результаты'],
  eyebrow: 'Кейсы клиентов',
};

const RU_SIDEBAR: SidebarContent = {
  newsTopics: ['Обновления продуктов', 'Мероприятия', 'Новости компании', 'Партнёрства'],
  newsTopicsLabel: 'Темы новостей',
  inquiriesLabel: 'Медиа и бизнес-запросы',
  inquiriesTitle: 'Нужна официальная информация от SOETECK?',
  inquiriesText: 'Свяжитесь с нашей командой для запросов СМИ, обсуждения партнёрства, получения информации о продуктах или сотрудничества по проектам.',
  inquiriesCta: 'Связаться с SOETECK',
  companyLabel: 'О компании',
  companyFacts: [
    'Решения для электропитания и охлаждения ЦОД',
    'Глобальная поддержка проектов',
    'Возможности OEM/ODM',
    'Многоязычная поддержка бизнеса',
  ],
};

const RU_SLIDER: SliderContent = {
  headingEyebrow: 'Избранные новости',
  headingTitle: 'Официальные обновления SOETECK',
  badge: 'Избранные новости',
  cta: 'Читать далее',
};

const RU_PRESS_LIST: PressListContent = {
  sectionEyebrow: 'Последние публикации',
  sectionTitle: 'Архив новостей',
  actionLabel: 'Читать далее',
};

export const ARCHIVE_RU: ArchiveContent = {
  newsReleases: RU_NEWS_RELEASES_HERO,
  blogs: RU_BLOGS_HERO,
  caseStudies: RU_CASE_STUDIES_HERO,
  sidebar: RU_SIDEBAR,
  slider: RU_SLIDER,
  pressList: RU_PRESS_LIST,
  blogLabels: {
    featuredLabel: 'Избранная статья',
    readMoreLabel: 'Начать чтение',
    sourceLabel: 'Техническая команда SOETECK',
    noArticles: 'Статьи в этой категории не найдены.',
  },
  caseStudyLabels: {
    featuredLabel: 'Избранный кейс',
    readMoreLabel: 'Посмотреть кейс',
    sourceLabel: 'Проектная команда SOETECK',
    noArticles: 'Кейсы в этой категории не найдены.',
  },
  cta: {
    title: 'Обсудите с SOETECK ваши потребности в электропитании и охлаждении',
    buttonLabel: 'Связаться с нами',
  },
};
