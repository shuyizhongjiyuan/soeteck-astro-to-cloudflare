/**
 * News/archive page content — Português.
 * @see news-releases-content.ts for type definitions.
 */

import type { ArchiveContent, HeroConfig, SidebarContent, SliderContent, PressListContent } from './news-releases-content';

const PT_NEWS_RELEASES_HERO: HeroConfig = {
  title: 'Notícias',
  description: 'Anúncios oficiais da SOETECK, atualizações de produtos, novidades de eventos e marcos da empresa para parceiros, clientes e imprensa.',
  panelLabel: 'Atualizações oficiais',
  panelItems: ['Anúncios de produtos', 'Eventos e exposições', 'Marcos da empresa'],
  eyebrow: 'Sala de imprensa Soeteck',
};

const PT_BLOGS_HERO: HeroConfig = {
  title: 'Blog',
  description: 'Insights técnicos, tendências do setor e perspectivas de especialistas sobre energia, refrigeração e soluções de infraestrutura para data centers.',
  panelLabel: 'Insights técnicos',
  panelItems: ['Tendências do setor', 'Guias técnicos', 'Melhores práticas'],
  eyebrow: 'Insights Soeteck',
};

const PT_CASE_STUDIES_HERO: HeroConfig = {
  title: 'Casos de Clientes',
  description: 'Implementações reais e histórias de sucesso que mostram como as soluções SOETECK resolvem desafios complexos de energia e refrigeração.',
  panelLabel: 'Histórias de sucesso',
  panelItems: ['Projetos globais', 'Soluções personalizadas', 'Destaques de ROI'],
  eyebrow: 'Histórias de sucesso Soeteck',
};

const PT_SIDEBAR: SidebarContent = {
  newsTopics: ['Atualizações de produtos', 'Eventos', 'Novidades da empresa', 'Parcerias'],
  newsTopicsLabel: 'Tópicos de notícias',
  inquiriesLabel: 'Consultas de Mídia e Negócios',
  inquiriesTitle: 'Precisa de informações oficiais da SOETECK?',
  inquiriesText: 'Entre em contato com nossa equipe para solicitações de imprensa, discussões de parcerias, informações sobre produtos ou cooperação em projetos.',
  inquiriesCta: 'Fale com a SOETECK',
  companyLabel: 'Visão Geral da Empresa',
  companyFacts: [
    'Soluções de energia e refrigeração para data centers',
    'Suporte global a projetos',
    'Capacidade OEM/ODM',
    'Suporte empresarial multilíngue',
  ],
};

const PT_SLIDER: SliderContent = {
  headingEyebrow: 'Notícias em destaque',
  headingTitle: 'Atualizações oficiais da SOETECK',
  badge: 'Notícias em destaque',
  cta: 'Ler mais',
};

const PT_PRESS_LIST: PressListContent = {
  sectionEyebrow: 'Últimas publicações',
  sectionTitle: 'Arquivo de notícias',
  actionLabel: 'Ler mais',
};

export const ARCHIVE_PT: ArchiveContent = {
  newsReleases: PT_NEWS_RELEASES_HERO,
  blogs: PT_BLOGS_HERO,
  caseStudies: PT_CASE_STUDIES_HERO,
  sidebar: PT_SIDEBAR,
  slider: PT_SLIDER,
  pressList: PT_PRESS_LIST,
  blogLabels: {
    featuredLabel: 'Artigo em destaque',
    readMoreLabel: 'Começar a ler',
    sourceLabel: 'Equipe Técnica SOETECK',
    featuredEyebrow: 'Escolha do editor',
    featuredTitle: 'Em destaque',
    listEyebrow: 'Mais insights',
    listTitle: 'Explore o arquivo',
    noArticles: 'Nenhum artigo encontrado nesta categoria.',
  },
  caseStudyLabels: {
    featuredLabel: 'Caso em destaque',
    readMoreLabel: 'Ver caso',
    sourceLabel: 'Equipe de Projetos SOETECK',
    featuredEyebrow: 'Destaque',
    featuredTitle: 'Caso de cliente em destaque',
    listEyebrow: 'Todos os casos',
    listTitle: 'Mais implantações reais',
    noArticles: 'Nenhum caso encontrado nesta categoria.',
  },
  cta: {
    title: 'Converse com a SOETECK sobre suas necessidades de energia e refrigeração',
    buttonLabel: 'Fale conosco',
  },
};
