/**
 * Solutions hub — code-embedded content (English base + type definitions).
 *
 * Landing page for the top-level /solutions/ navigation item.
 * Structure:
 *   hero         — dark banner (unchanged)
 *   stats        — data-trust strip under the hero
 *   sectionIntro — Section A intro (matches on-disk DC-grid template)
 *   solutions    — Section A cards (all 7; template renders 2×3 grid + AI wide card)
 *   industries   — Section B: data center solutions by industry (entry cards)
 *   cta          — unchanged bottom CTA
 *
 * Each language variant (solutions-hub-content-{zh,ru,pt,es}.ts) exports
 * a SolutionsHubContent object with the same shape.
 *
 * NOTE: solution `path` values are stored WITHOUT the language prefix
 * (e.g. `/solutions/liquid-cooling-solutions/...`); components prefix with `/${lang}`.
 * Card images fall back to the code constant; editors may override per-category
 * via the ACF `category_card_image` field (Content API `category.cardImage`).
 */

export interface SolutionsHubSolution {
  title: string;
  description: string;
  image: string;
  alt: string;
  /** Language-agnostic path (no /en/ prefix); prefix with `/${lang}` in template. */
  path: string;
}

export interface SolutionsHubStat {
  value: string;
  label: string;
}

export interface IndustryEntry {
  /** Icon slug (telecom | colocation | cloud | internet | finance | government | manufacturing | healthcare). */
  icon: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  /** Language-agnostic path; prefix with `/${lang}` in template. */
  path: string;
}

export interface IndustryExploreMore {
  title: string;
  description: string;
  cta: string;
  /** Language-agnostic path; prefix with `/${lang}` in template. */
  path: string;
}

export interface SolutionsHubHero {
  eyebrow: string;
  title: string;
  subtitle: string;
  bannerImage: string;
}

export interface SolutionsHubSectionIntro {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface SolutionsHubIndustries {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: IndustryEntry[];
  /** 第 9 格占位卡（补满网格），可选：未配置则不渲染该卡。 */
  exploreMore?: IndustryExploreMore;
}

export interface SolutionsHubCta {
  eyebrow: string;
  title: string;
  text: string;
  buttonLabel: string;
}

export interface SolutionsHubContent {
  hero: SolutionsHubHero;
  /** Optional for now — English-only (sunwei): non-English files remain old-shape until translated. */
  stats?: SolutionsHubStat[];
  sectionIntro: SolutionsHubSectionIntro;
  solutions: SolutionsHubSolution[];
  /** Optional for now — English-only (sunwei): non-English files remain old-shape until translated. */
  industries?: SolutionsHubIndustries;
  cta: SolutionsHubCta;
}

export const SOLUTIONS_HUB_EN: SolutionsHubContent = {
  hero: {
    eyebrow: 'Data Center Solutions',
    title: 'End-to-End Data Center Solutions',
    subtitle:
      'From liquid cooling and modular data centers to precision cooling, Soeteck builds complete, scalable infrastructure that powers your data — wherever you need it.',
    bannerImage: '/resources/soeteck-data-center-banner-1.webp',
  },

  stats: [
    { value: '100kW+', label: 'Per-rack liquid cooling ceiling' },
    { value: 'Weeks', label: 'Not years — to go live' },
    { value: '120+', label: 'Countries on the map' },
    { value: 'OEM/ODM', label: 'Own manufacturing power' },
  ],

  sectionIntro: {
    eyebrow: 'Prefabricated Solutions',
    title: 'Featured Data Center Solutions',
    subtitle:
      'Factory-built, factory-tested modules that deploy in weeks — from a single liquid-cooled container to scalable modular halls. Choose your density, we do the rest.',
  },

  solutions: [
    {
      title: 'Liquid Cooling Data Center',
      description:
        'AI-grade liquid cooling in a standard ISO container — up to 100kW+ per rack, fully sealed loop, deployable in weeks not years.',
      image: '/resources/1-40-Foot-AI-Container-Data-Center-100kW-per-Rack.webp',
      alt: 'Soeteck liquid cooling data center container',
      path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
    },
    {
      title: 'Prefabricated Container Data Center',
      description:
        'Factory-built containerized data centers that deploy in weeks — ideal for edge, colocation, and fast capacity expansion.',
      image: '/resources/20ft-prefabricated-container-data-center-front-view-3-1024x683.webp',
      alt: 'Soeteck prefabricated container data center',
      path: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    {
      title: 'Cabinet Modular Data Center',
      description:
        'Compact all-in-one cabinet data centers with integrated power, cooling, and monitoring — perfect for small IT rooms and micro-modules.',
      image: '/resources/cabinet-data-center-7.webp',
      alt: 'Soeteck cabinet modular data center',
      path: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    {
      title: 'Row Modular Data Center',
      description:
        'Scalable row-based modular data centers that grow with your compute — from rack-cooling to in-row-cooling architectures.',
      image: '/resources/cabinet-modular-data-center-31.webp',
      alt: 'Soeteck row modular data center',
      path: '/solutions/data-center-solutions/row-modular-data-center/',
    },
    {
      title: 'Aisle Modular Data Center',
      description:
        'Cold and hot aisle containment modular data centers for high-density, high-efficiency deployments.',
      image: '/resources/cabinet-modular-data-center-41.webp',
      alt: 'Soeteck aisle modular data center',
      path: '/solutions/data-center-solutions/aisle-modular-data-center/',
    },
    {
      title: 'Data Center Cooling Solutions',
      description:
        'A precision air conditioning portfolio — from room and in-row cooling to fan walls and rack cooling for every density.',
      image: '/resources/Soeteck-chilled-water-room-cooling-system-38.2-265.8kW-4.webp',
      alt: 'Soeteck data center precision cooling solutions',
      path: '/solutions/data-center-cooling-solutions/',
    },
    {
      title: 'AI Data Center',
      description:
        'Purpose-built AI data center solutions engineered for high-density GPU clusters and liquid-cooling readiness.',
      image: '/resources/2-40-Foot-AI-Container-Data-Center-60kW-per-Rack.webp',
      alt: 'Soeteck AI data center solution',
      path: '/solutions/data-center-solutions/ai-data-center/',
    },
  ],

  industries: {
    eyebrow: 'By Industry',
    title: 'Data Center Solutions for Every Industry',
    subtitle:
      'From telecom operators to AI hyperscalers, Soeteck serves critical industries with the right density, cooling, and reliability — in every language.',
    items: [
      {
        icon: 'telecom',
        name: 'Telecom',
        description: 'Fast, reliable edge and mobile infrastructure to extend networks anywhere.',
        image: '/resources/industry-telecom.webp',
        alt: 'Telecom data center infrastructure',
        path: '/solutions/telecom/',
      },
      {
        icon: 'colocation',
        name: 'Colocation',
        description: 'Modular capacity for data center operators & edge colocation.',
        image: '/resources/industry-colocation.webp',
        alt: 'Colocation data center infrastructure',
        path: '/solutions/colocation/',
      },
      {
        icon: 'cloud',
        name: 'Cloud & Hyperscale',
        description: 'Rapid capacity scaling for cloud providers and internet platforms.',
        image: '/resources/industry-cloud.webp',
        alt: 'Cloud service provider infrastructure',
        path: '/solutions/cloud-hyperscale/',
      },
      {
        icon: 'internet',
        name: 'Internet',
        description: 'Self-built data centers for internet & technology platforms.',
        image: '/resources/industry-internet.webp',
        alt: 'Internet platform data center',
        path: '/solutions/internet/',
      },
      {
        icon: 'finance',
        name: 'Finance',
        description: 'High-availability compute and storage for always-on transaction systems.',
        image: '/resources/industry-finance.webp',
        alt: 'Financial data center reliability',
        path: '/solutions/finance/',
      },
      {
        icon: 'government',
        name: 'Government',
        description: 'Secure, controlled environments for public services and sensitive data.',
        image: '/resources/industry-government.webp',
        alt: 'Government secure infrastructure',
        path: '/solutions/government/',
      },
      {
        icon: 'manufacturing',
        name: 'Manufacturing',
        description: 'Resilient floor-level computing for production and industrial IoT.',
        image: '/resources/industry-manufacturing.webp',
        alt: 'Industrial manufacturing data center',
        path: '/solutions/manufacturing/',
      },
      {
        icon: 'healthcare',
        name: 'Healthcare',
        description: 'Edge & high-availability compute for hospitals and regional health clouds.',
        image: '/resources/industry-healthcare.webp',
        alt: 'Healthcare data center infrastructure',
        path: '/solutions/healthcare/',
      },
    ],
    // 第 9 格占位：邀请未覆盖行业的访客 → 联系定制（补满 3×3 网格）
    exploreMore: {
      title: 'Explore More',
      description:
        "Working in a different industry? Tell us your requirements — we'll tailor a solution to your site, scale and timeline.",
      cta: 'Contact us',
      path: '/contact-us/',
    },
  },

  cta: {
    eyebrow: 'Talk to an Expert',
    title: 'Ready to build your data center solution?',
    text: 'Tell us about your power, cooling, and density requirements — our engineers will help you choose the right solution.',
    buttonLabel: 'Contact Us',
  },
};