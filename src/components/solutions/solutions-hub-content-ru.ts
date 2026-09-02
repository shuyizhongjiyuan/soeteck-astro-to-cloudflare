/**
 * Solutions hub — Русский。
 * @see solutions-hub-content.ts for type definitions.
 */

import type { SolutionsHubContent } from './solutions-hub-content';

export const SOLUTIONS_HUB_RU: SolutionsHubContent = {
  hero: {
    eyebrow: 'Решения для дата-центров',
    title: 'Комплексные решения для дата-центров',
    subtitle:
      'От жидкостного охлаждения и модульных дата-центров до прецизионного охлаждения — SOETECK создаёт полную масштабируемую инфраструктуру, которая питает ваши данные — где бы вы ни находились.',
    bannerImage: '/resources/soeteck-data-center-banner-1.webp',
  },
  sectionIntro: {
    eyebrow: 'Наши решения',
    title: 'Изучите решения SOETECK для дата-центров',
    subtitle:
      'Каждое решение спроектировано для быстрого развёртывания, высокой плотности и измеримой эффективности — при поддержке собственного OEM/ODM-производства и глобальной проектной поддержки.',
  },
  solutions: [
    {
      title: 'ЦОД с жидкостным охлаждением',
      description:
        'Жидкостное охлаждение уровня AI в стандартном ISO-контейнере — до 100+ кВт на стойку, полностью герметичный контур, развёртывание за недели, а не годы.',
      image: '/resources/1-40-Foot-AI-Container-Data-Center-100kW-per-Rack.webp',
      alt: 'Контейнер дата-центра с жидкостным охлаждением SOETECK',
      path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
    },
    {
      title: 'Контейнерный ЦОД',
      description:
        'Заводские контейнерные дата-центры, развёртываемые за недели — идеально для edge, colocation и быстрого наращивания мощностей.',
      image: '/resources/20ft-prefabricated-container-data-center-front-view-3-1024x683.webp',
      alt: 'Префабрикационный контейнерный дата-центр SOETECK',
      path: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    {
      title: 'Модульный ЦОД в шкафу',
      description:
        'Компактные шкафные дата-центры «всё в одном» с интегрированным питанием, охлаждением и мониторингом — идеально для небольших серверных и микромодулей.',
      image: '/resources/cabinet-data-center-7.webp',
      alt: 'Модульный ЦОД в шкафу SOETECK',
      path: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    {
      title: 'Рядный модульный ЦОД',
      description:
        'Масштабируемые рядные модульные дата-центры, растущие вместе с вашими вычислениями — от стоечного до рядного охлаждения.',
      image: '/resources/cabinet-modular-data-center-31.webp',
      alt: 'Рядный модульный ЦОД SOETECK',
      path: '/solutions/data-center-solutions/row-modular-data-center/',
    },
    {
      title: 'Микромодульный ЦОД',
      description:
        'Холодные/горячие коридоры модульных дата-центров для высокоплотных и высокоэффективных развёртываний.',
      image: '/resources/cabinet-modular-data-center-41.webp',
      alt: 'Микромодульный ЦОД SOETECK',
      path: '/solutions/data-center-solutions/aisle-modular-data-center/',
    },
    {
      title: 'Решения для охлаждения ЦОД',
      description:
        'Портфолио прецизионного кондиционирования — от комнатного и рядного охлаждения до фэн-волов и стоечного охлаждения для любой плотности.',
      image: '/resources/Soeteck-chilled-water-room-cooling-system-38.2-265.8kW-4.webp',
      alt: 'Прецизионные решения охлаждения SOETECK',
      path: '/solutions/data-center-cooling-solutions/',
    },
    {
      title: 'ЦОД для ИИ',
      description:
        'Специализированные решения AI-дата-центров, спроектированные для высокоплотных GPU-кластеров и готовности к жидкостному охлаждению.',
      image: '/resources/2-40-Foot-AI-Container-Data-Center-60kW-per-Rack.webp',
      alt: 'Решение AI дата-центра SOETECK',
      path: '/solutions/data-center-solutions/ai-data-center/',
    },
  ],
  industries: {
    eyebrow: 'По отраслям',
    title: 'ЦОД для каждой отрасли',
    subtitle:
      'От телекома до AI-гиперскейлеров — правильная плотность, охлаждение и надёжность для ключевых отраслей.',
    items: [
      {
        icon: 'telecom',
        name: 'Телеком',
        description: 'Быстрая периферийная инфраструктура в любой точке.',
        image: '/resources/industry-telecom.webp',
        alt: 'Телеком-инфраструктура ЦОД',
        path: '/solutions/telecom/',
      },
      {
        icon: 'colocation',
        name: 'Колокация',
        description: 'Модульные мощности для операторов и IDC-провайдеров.',
        image: '/resources/industry-colocation.webp',
        alt: 'Инфраструктура колокации',
        path: '/solutions/colocation/',
      },
      {
        icon: 'cloud',
        name: 'Облако и гиперскейл',
        description: 'Быстрое масштабирование для облаков и платформ.',
        image: '/resources/industry-cloud.webp',
        alt: 'Облачная инфраструктура',
        path: '/solutions/cloud-hyperscale/',
      },
      {
        icon: 'internet',
        name: 'Интернет',
        description: 'Собственные ЦОД для интернет-платформ.',
        image: '/resources/industry-internet.webp',
        alt: 'ЦОД интернет-платформы',
        path: '/solutions/internet/',
      },
      {
        icon: 'finance',
        name: 'Финансы',
        description: 'Высокодоступные вычисления для транзакционных систем.',
        image: '/resources/industry-finance.webp',
        alt: 'Надёжность финансового ЦОД',
        path: '/solutions/finance/',
      },
      {
        icon: 'government',
        name: 'Госсектор',
        description: 'Защищённые среды для госуслуг и данных.',
        image: '/resources/industry-government.webp',
        alt: 'Защищённая госинфраструктура',
        path: '/solutions/government/',
      },
      {
        icon: 'manufacturing',
        name: 'Промышленность',
        description: 'Отказоустойчивые вычисления для производства и IIoT.',
        image: '/resources/industry-manufacturing.webp',
        alt: 'Промышленный ЦОД',
        path: '/solutions/manufacturing/',
      },
      {
        icon: 'healthcare',
        name: 'Медицина',
        description: 'Высокодоступные вычисления для больниц и отраслевых облаков.',
        image: '/resources/industry-healthcare.webp',
        alt: 'Инфраструктура здравоохранения',
        path: '/solutions/healthcare/',
      },
    ],
    exploreMore: {
      title: 'Узнать больше',
      description: 'Работаете в другой отрасли? Расскажите о задачах — подберём решение.',
      cta: 'Связаться с нами',
      path: '/contact-us/',
    },
  },
  cta: {
    eyebrow: 'Связаться с экспертом',
    title: 'Готовы построить решение для вашего дата-центра?',
    text: 'Расскажите о ваших требованиях к питанию, охлаждению и плотности — наши инженеры помогут выбрать оптимальное решение.',
    buttonLabel: 'Связаться с нами',
  },
};