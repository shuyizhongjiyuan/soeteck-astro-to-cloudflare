/**
 * Solutions hub — Português。
 * @see solutions-hub-content.ts for type definitions.
 */

import type { SolutionsHubContent } from './solutions-hub-content';

export const SOLUTIONS_HUB_PT: SolutionsHubContent = {
  hero: {
    eyebrow: 'Soluções para Data Center',
    title: 'Soluções Completas para Data Center',
    subtitle:
      'Do resfriamento líquido e data centers modulares ao resfriamento de precisão, a SOETECK constrói infraestrutura completa e escalável que alimenta seus dados — onde quer que você precise.',
    bannerImage: '/resources/soeteck-data-center-banner-1.webp',
  },
  sectionIntro: {
    eyebrow: 'Nossas Soluções',
    title: 'Explore as Soluções para Data Center da SOETECK',
    subtitle:
      'Cada solução é projetada para implantação rápida, alta densidade e eficiência mensurável — com fabricação OEM/ODM própria e suporte global a projetos.',
  },
  solutions: [
    {
      title: 'Data Center com Resfriamento Líquido',
      description:
        'Resfriamento líquido de nível AI em contêiner ISO padrão — até 100kW+ por rack, loop totalmente selado, implantável em semanas, não anos.',
      image: '/resources/1-40-Foot-AI-Container-Data-Center-100kW-per-Rack.webp',
      alt: 'Contêiner de data center com resfriamento líquido SOETECK',
      path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
    },
    {
      title: 'Data Center Modular em Contêiner',
      description:
        'Data centers em contêiner pré-fabricados de fábrica, implantáveis em semanas — ideais para edge, colocation e expansão rápida de capacidade.',
      image: '/resources/20ft-prefabricated-container-data-center-front-view-3-1024x683.webp',
      alt: 'Data center pré-fabricado em contêiner SOETECK',
      path: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    {
      title: 'Data Center Modular em Armário',
      description:
        'Data centers compactos all-in-one com energia, resfriamento e monitoramento integrados — perfeitos para pequenas salas de TI e micro-módulos.',
      image: '/resources/cabinet-data-center-7.webp',
      alt: 'Data center modular em armário SOETECK',
      path: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    {
      title: 'Data Center Modular em Fileira',
      description:
        'Data centers modulares em fileira escaláveis que crescem com sua computação — do resfriamento em rack ao resfriamento em fileira.',
      image: '/resources/cabinet-modular-data-center-31.webp',
      alt: 'Data center modular em fileira SOETECK',
      path: '/solutions/data-center-solutions/row-modular-data-center/',
    },
    {
      title: 'Data Center Micromodular',
      description:
        'Data centers modulares com contenção de corredor frio/quente para implantações de alta densidade e alta eficiência.',
      image: '/resources/cabinet-modular-data-center-41.webp',
      alt: 'Data center modular em corredor SOETECK',
      path: '/solutions/data-center-solutions/aisle-modular-data-center/',
    },
    {
      title: 'Soluções de Resfriamento para Data Centers',
      description:
        'Portfólio de ar-condicionado de precisão — do resfriamento de sala e em fileira a fan walls e resfriamento em rack, para qualquer densidade.',
      image: '/resources/Soeteck-chilled-water-room-cooling-system-38.2-265.8kW-4.webp',
      alt: 'Soluções de resfriamento de precisão SOETECK',
      path: '/solutions/data-center-cooling-solutions/',
    },
    {
      title: 'Data Center de IA',
      description:
        'Soluções de data center AI projetadas especificamente para clusters GPU de alta densidade e prontidão para resfriamento líquido.',
      image: '/resources/2-40-Foot-AI-Container-Data-Center-60kW-per-Rack.webp',
      alt: 'Solução de data center AI SOETECK',
      path: '/solutions/data-center-solutions/ai-data-center/',
    },
  ],
  industries: {
    eyebrow: 'Por setor',
    title: 'Data centers para cada setor',
    subtitle:
      'Das operadoras de telecom aos hyperscalers de IA — a densidade, a refrigeração e a confiabilidade certas para setores críticos.',
    items: [
      {
        icon: 'telecom',
        name: 'Telecom',
        description: 'Infraestrutura de borda rápida, em qualquer lugar.',
        image: '/resources/industry-telecom.webp',
        alt: 'Infraestrutura data center telecom',
        path: '/solutions/telecom/',
      },
      {
        icon: 'colocation',
        name: 'Colocation',
        description: 'Capacidade modular para operadores de data center.',
        image: '/resources/industry-colocation.webp',
        alt: 'Infraestrutura de colocation',
        path: '/solutions/colocation/',
      },
      {
        icon: 'cloud',
        name: 'Cloud & Hyperscale',
        description: 'Escala rápida para provedores de nuvem e plataformas.',
        image: '/resources/industry-cloud.webp',
        alt: 'Infraestrutura de provedor de nuvem',
        path: '/solutions/cloud-hyperscale/',
      },
      {
        icon: 'internet',
        name: 'Internet',
        description: 'Data centers próprios para plataformas de internet.',
        image: '/resources/industry-internet.webp',
        alt: 'Data center de plataforma de internet',
        path: '/solutions/internet/',
      },
      {
        icon: 'finance',
        name: 'Finanças',
        description: 'Computação de alta disponibilidade para sistemas transacionais.',
        image: '/resources/industry-finance.webp',
        alt: 'Confiabilidade de data center financeiro',
        path: '/solutions/finance/',
      },
      {
        icon: 'government',
        name: 'Governo',
        description: 'Ambientes seguros para serviços públicos e dados sensíveis.',
        image: '/resources/industry-government.webp',
        alt: 'Infraestrutura segura de governo',
        path: '/solutions/government/',
      },
      {
        icon: 'manufacturing',
        name: 'Indústria',
        description: 'Computação resiliente para produção e IoT industrial.',
        image: '/resources/industry-manufacturing.webp',
        alt: 'Data center industrial',
        path: '/solutions/manufacturing/',
      },
      {
        icon: 'healthcare',
        name: 'Saúde',
        description: 'Computação de borda e alta disponibilidade para hospitais e nuvens de saúde regional.',
        image: '/resources/industry-healthcare.webp',
        alt: 'Infraestrutura de saúde',
        path: '/solutions/healthcare/',
      },
    ],
    exploreMore: {
      title: 'Explorar mais',
      description: 'Trabalha em outro setor? Conte-nos seus requisitos — criamos a solução ideal.',
      cta: 'Fale conosco',
      path: '/contact-us/',
    },
  },
  cta: {
    eyebrow: 'Fale com um Especialista',
    title: 'Pronto para construir sua solução de data center?',
    text: 'Conte-nos sobre seus requisitos de energia, resfriamento e densidade — nossos engenheiros ajudarão você a escolher a solução certa.',
    buttonLabel: 'Fale Conosco',
  },
};