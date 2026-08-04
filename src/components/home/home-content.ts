/**
 * Home page content - English base + type definition.
 *
 * Image/path constants are shared across all languages.
 * Language-specific text files (home-content-zh.ts, etc.) export the same
 * HomeContent shape.
 *
 * @package Soeteck\Astro
 */

// ---------------------------------------------------------------------------
// Text content type definitions
// ---------------------------------------------------------------------------

export interface HeroSlide {
  image: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryLink: string;
  ctaSecondary: string;
  ctaSecondaryLink: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface TimelineStep {
  num: string;
  icon: string;
  title: string;
  text: string;
}

export interface ProjectCard {
  title: string;
  location: string;
  metric: string;
  metricLabel: string;
  text: string;
  image: { path: string; alt: string };
  cta: string;
  ctaLink: string;
}

export interface Differentiator {
  icon: string;
  title: string;
  text: string;
}

export interface CtaCard {
  icon: string;
  title: string;
  text: string;
  cta: string;
  ctaLink: string;
}

// --- New types for redesigned homepage ---

export interface IndustryItem {
  icon: string;
  title: string;
  image: { path: string; alt: string };
  ctaLink?: string;
}

export interface SolutionCard {
  title: string;
  short?: string;
  text: string;
  image: { path: string; alt: string };
  features: string[];
  cta: string;
  ctaLink: string;
}

export interface ProductLine {
  icon: string;
  title: string;
  ctaLink: string;
}

export interface ProductCategory {
  title: string;
  image: { path: string; alt: string };
  hoverImage: { path: string; alt: string };
  ctaLink: string;
}

export interface ServiceStep {
  num: string;
  title: string;
  text: string;
}

export interface AiInsightsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  points: { title: string; text: string }[];
  cta: string;
  ctaLink: string;
}

export interface ScenarioItem {
  title: string;
  text: string;
  image: { path: string; alt: string };
  tags: string[];
}

// --- Variant-specific content types ---

export interface ChallengePoint {
  value: string;
  label: string;
  text: string;
}

export interface ChallengeContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  points: ChallengePoint[];
  soeteckAnswer: {
    title: string;
    items: string[];
  };
}

export interface StatsBarContent {
  stats: StatItem[];
}

export interface HomeContent {
  hero: {
    slides: HeroSlide[];
  };
  aiInsights: AiInsightsContent;
  industries: {
    eyebrow: string;
    title: string;
    text: string;
    items: IndustryItem[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    text: string;
    cards: SolutionCard[];
  };
  productLines: {
    eyebrow: string;
    title: string;
    items: ProductLine[];
  };
  productCategories: {
    eyebrow: string;
    title: string;
    groups: { label: string; items: ProductCategory[] }[];
  };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    image: { path: string; alt: string };
    steps: ServiceStep[];
  };
  scenarios: {
    eyebrow: string;
    title: string;
    text: string;
    items: ScenarioItem[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    text: string;
    steps: TimelineStep[];
  };
  projects: {
    eyebrow: string;
    title: string;
    text: string;
    cards: ProjectCard[];
  };
  whySoeteck: {
    eyebrow: string;
    title: string;
    text: string;
    items: Differentiator[];
    stats: StatItem[];
    certs: string[];
  };
  news: {
    eyebrow: string;
    title: string;
    viewAllLabel: string;
    viewAllLink: string;
    text?: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    text: string;
    cards: CtaCard[];
  };

  // Variant-specific (optional)
  challenge?: ChallengeContent;     // Variant B only
  statsBar?: StatsBarContent;       // Variant C only
  globalPresence?: {
    eyebrow: string;
    title: string;
    text: string;
    stats: StatItem[];
    regions: string[];
  };                                // Variant B only
  transition?: {
    eyebrow: string;
    title: string;
    text: string;
  };                                // Variant C only — solutions head intro
  productsIntro?: {
    eyebrow: string;
    title: string;
    text: string;
  };                                // Variant C only — products showcase intro
  newsC?: {
    newsLabel: string;
    newsLink: string;
    blogLabel: string;
    blogLink: string;
    viewAllNews: string;
    viewAllBlogs: string;
    newsEyebrow: string;
    newsTitle: string;
    blogEyebrow: string;
    blogTitle: string;
  };                                // Variant C only — news section labels
}

// ---------------------------------------------------------------------------
// English content
// ---------------------------------------------------------------------------

export const HOME_EN: HomeContent = {
  hero: {
    slides: [
      {
        image: '/hero/hero-slide-1.png',
        eyebrow: 'Turnkey Solutions',
        title: 'Factory-Built.',
        titleAccent: 'Site-Ready.',
        subtitle: 'Complete prefabricated container data centers — power, cooling, fire suppression, and monitoring — all integrated, all factory-tested, delivered as a single turnkey unit in weeks, not months.',
        ctaPrimary: 'Explore Solutions',
        ctaPrimaryLink: '/en/solutions/',
        ctaSecondary: 'Talk to an Expert',
        ctaSecondaryLink: '/en/contact-us/',
      },
      {
        image: '/hero/hero-slide-2.png',
        eyebrow: 'AI-Ready Cooling',
        title: 'Liquid Cooling for',
        titleAccent: 'AI Workloads',
        subtitle: 'Direct-to-chip liquid cooling eliminates thermal throttling at 100kW+ rack density. Purpose-built for GPU training clusters.',
        ctaPrimary: 'View AICoolit',
        ctaPrimaryLink: '/en/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
        ctaSecondary: 'Request a Quote',
        ctaSecondaryLink: '/en/contact-us/',
      },
      {
        image: '/hero/hero-slide-3.png',
        eyebrow: 'Global Delivery',
        title: 'Factory-Tested.',
        titleAccent: 'Plug-and-Play.',
        subtitle: 'From our factory floor to your site in weeks — not months. Deployed across 50+ countries, every climate, every grid standard.',
        ctaPrimary: 'View Products',
        ctaPrimaryLink: '/en/products/',
        ctaSecondary: 'Contact Sales',
        ctaSecondaryLink: '/en/contact-us/',
      },
    ],
  },

  aiInsights: {
    eyebrow: 'The AI Shift',
    title: 'AI Is Rewriting the Rules of Infrastructure',
    subtitle: 'The data centers built for yesterday\'s workloads cannot handle tomorrow\'s AI demands. Power densities have tripled. Thermal loads have fundamentally changed. The industry needs a new approach — and SOETECK is building it.',
    points: [
      { title: '100kW+ Rack Density', text: 'AI training clusters demand power densities that conventional infrastructure was never designed to handle.' },
      { title: 'Liquid Cooling Imperative', text: 'Air cooling has hit its physical limits. Direct-to-chip liquid cooling is no longer optional — it is a prerequisite for AI viability.' },
      { title: 'Speed to Deploy', text: 'AI capacity demand doubles faster than construction cycles. Prefabricated, factory-tested modules compress timelines from years to weeks.' },
    ],
    cta: 'Explore Our AI Solutions',
    ctaLink: '/en/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
  },

  industries: {
    eyebrow: 'Who We Serve',
    title: 'Trusted Across Critical Industries',
    text: 'From telecom operators to AI hyperscalers, the world\'s most demanding organizations rely on SOETECK for mission-critical power and cooling infrastructure.',
    items: [
      { icon: 'telecom', title: 'Telecom & Operators', image: { path: '/home/industry-telecom.png', alt: 'Telecom data center infrastructure' }, ctaLink: '/en/solutions/' },
      { icon: 'finance', title: 'Finance & Banking', image: { path: '/home/industry-finance.png', alt: 'Financial data center reliability' }, ctaLink: '/en/solutions/' },
      { icon: 'government', title: 'Government & Public Sector', image: { path: '/home/industry-government.png', alt: 'Government secure infrastructure' }, ctaLink: '/en/solutions/' },
      { icon: 'cloud', title: 'Cloud & Internet', image: { path: '/home/industry-cloud.png', alt: 'Cloud service provider infrastructure' }, ctaLink: '/en/solutions/' },
      { icon: 'ai', title: 'AI & Large Models', image: { path: '/home/industry-gpu.png', alt: 'AI computing infrastructure' }, ctaLink: '/en/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
      { icon: 'manufacturing', title: 'Manufacturing', image: { path: '/home/industry-manufacturing.png', alt: 'Industrial manufacturing data center' }, ctaLink: '/en/solutions/' },
      { icon: 'submarine', title: 'Submarine Cable Landing Stations', image: { path: '/home/industry-submarine.png', alt: 'Submarine cable landing station infrastructure' }, ctaLink: '/en/solutions/' },
    ],
  },

  solutions: {
    eyebrow: 'Turnkey Solutions',
    title: 'Complete Data Center Solutions',
    text: 'From single cabinets to multi-megawatt campuses — pre-engineered, factory-tested, and delivered as complete integrated units.',
    cards: [
      {
        title: 'Containerized Data Center',
        short: 'Containerized',
        text: 'A complete data center sealed inside a 20ft or 40ft ISO container. Power, cooling, fire suppression, and monitoring — all integrated, all factory-tested.',
        image: { path: '/resources/prefabricated-container-data-center-solution-home.webp', alt: 'Containerized data center' },
        features: ['8–12 week delivery', 'Outdoor & indoor rated', 'N+1 redundancy standard'],
        cta: 'View Details',
        ctaLink: '/en/solutions/data-center-solutions/prefabricated-container-data-center/',
      },
      {
        title: 'Micro Module Data Center',
        short: 'Micro Module',
        text: 'Modular, expandable architecture for medium-density indoor deployments. Prefabricated modules ship with integrated cooling and power distribution.',
        image: { path: '/resources/cabinet-data-center-solution-home.webp', alt: 'Micro module data center' },
        features: ['Flexible indoor placement', 'Modular stepwise expansion', 'Integrated monitoring'],
        cta: 'View Details',
        ctaLink: '/en/solutions/data-center-solutions/cabinet-modular-data-center/',
      },
      {
        title: 'Row Modular Solutions',
        short: 'Row Modular',
        text: 'Purpose-built single-cabinet and row-cabinet systems for edge computing, small IT rooms, and distributed infrastructure.',
        image: { path: '/resources/row-modular-data-center-solution-1.webp', alt: 'Row modular data center' },
        features: ['Ultra-compact footprint', 'Energy-efficient cooling', 'Remote 24/7 management'],
        cta: 'View Details',
        ctaLink: '/en/solutions/data-center-solutions/row-modular-data-center/',
      },
    ],
  },

  productLines: {
    eyebrow: 'Product Categories',
    title: 'What We Manufacture',
    items: [
      { icon: 'ups', title: 'UPS Systems', ctaLink: '/en/products/critical-power/' },
      { icon: 'cooling', title: 'Precision Cooling', ctaLink: '/en/products/thermal-management/' },
      { icon: 'pdu', title: 'Power Distribution', ctaLink: '/en/products/critical-power/' },
      { icon: 'monitoring', title: 'DCIM & Monitoring', ctaLink: '/en/products/' },
      { icon: 'enclosure', title: 'Racks & Enclosures', ctaLink: '/en/products/' },
      { icon: 'battery', title: 'Energy Storage', ctaLink: '/en/products/critical-power/' },
    ],
  },

  productCategories: {
    eyebrow: 'What We Sell',
    title: 'Products',
    groups: [
      {
        label: 'Precision Cooling',
        items: [
          { title: 'Room Precision AC', image: { path: '/resources/room-chilled-water-cooling-home-11-768x768.webp', alt: 'Room mounted precision air conditioner' }, hoverImage: { path: '/resources/room-chilled-water-cooling-home-3-768x768.webp', alt: 'Room chilled water cooling' }, ctaLink: '/en/products/thermal-management/precision-air-conditioning/room-cooling/' },
          { title: 'Row Precision AC', image: { path: '/resources/Inrow-cooling-split-DX-home-2-768x768.webp', alt: 'In-row precision air conditioner' }, hoverImage: { path: '/resources/Inrow-cooling-split-DX-home-1-768x768.webp', alt: 'In-row cooling' }, ctaLink: '/en/products/thermal-management/precision-air-conditioning/in-row-cooling/' },
          { title: 'Rack Precision AC', image: { path: '/resources/rack-cooling-1.webp', alt: 'Rack precision air conditioner' }, hoverImage: { path: '/resources/rack-cooling-4-768x768.webp', alt: 'Rack cooling' }, ctaLink: '/en/products/thermal-management/precision-air-conditioning/rack-cooling/' },
          { title: 'Enclosure Precision AC', image: { path: '/resources/outdoor-enclosure-cooling-home-2-768x768.webp', alt: 'Outdoor enclosure precision air conditioner' }, hoverImage: { path: '/resources/outdoor-enclosure-cooling-home-1-768x768.webp', alt: 'Enclosure cooling' }, ctaLink: '/en/products/thermal-management/precision-air-conditioning/telecom-enclosure-air-conditioner/' },
        ],
      },
      {
        label: 'Critical Power',
        items: [
          { title: 'Uninterruptible Power Supplies', image: { path: '/resources/UPS-homepage-1-768x768.webp', alt: 'UPS system' }, hoverImage: { path: '/resources/UPS-homepage-2-768x768.webp', alt: 'UPS system' }, ctaLink: '/en/products/critical-power/uninterruptible-power-supplies/' },
          { title: 'DC Power System', image: { path: '/resources/dc-power-system-1-768x768.webp', alt: 'DC power system' }, hoverImage: { path: '/resources/dc-power-system-2-768x768.webp', alt: 'DC power system' }, ctaLink: '/en/products/critical-power/dc-power-systems/' },
          { title: 'PDUs', image: { path: '/resources/PDU-home-1-768x768.webp', alt: 'Power distribution unit' }, hoverImage: { path: '/resources/PDU-home-2-768x768.webp', alt: 'PDU' }, ctaLink: '/en/products/critical-power/power-distribution/' },
          { title: 'Battery', image: { path: '/resources/SOETECK-Gel-Battery-home-1-768x768.png', alt: 'Battery energy storage' }, hoverImage: { path: '/resources/SOETECK-Gel-Battery-home-2-768x768.webp', alt: 'Battery' }, ctaLink: '/en/products/critical-power/battery/' },
        ],
      },
    ],
  },

  services: {
    eyebrow: 'End-to-End Delivery',
    title: 'From Blueprint to Commissioning',
    text: 'One partner, one contract, one team. SOETECK owns the entire delivery — from collaborative design through factory testing to on-site commissioning.',
    image: { path: '/resources/soeteck-factory-1.jpg', alt: 'SOETECK manufacturing facility' },
    steps: [
      { num: '01', title: 'Design', text: 'Collaborative engineering with 3D modeling and CFD thermal simulation.' },
      { num: '02', title: 'Manufacture', text: 'In-house production of UPS, cooling, PDUs, and enclosures.' },
      { num: '03', title: 'Integrate', text: 'System-level assembly and configuration in our factory.' },
      { num: '04', title: 'Test', text: 'Full-load testing, thermal validation, and failover verification.' },
      { num: '05', title: 'Ship', text: 'Secure global logistics with door-to-door oversight.' },
      { num: '06', title: 'Commission', text: 'On-site installation, commissioning, and operator training.' },
    ],
  },

  scenarios: {
    eyebrow: 'Application Scenarios',
    title: 'Built for the Most Demanding Environments',
    text: 'Whether it is the humidity of a submarine cable landing station or the heat of a desert edge site, SOETECK delivers reliable infrastructure wherever it is needed.',
    items: [
      { title: 'Submarine Cable Landing Stations', text: 'High-reliability, corrosion-resistant infrastructure for critical undersea cable junctions.', image: { path: '/home/scenario-submarine.png', alt: 'Submarine cable landing station' }, tags: ['High Reliability', 'Corrosion Resistant'] },
      { title: 'Edge Computing & 5G', text: 'Compact, rapidly deployable micro data centers for low-latency edge inference.', image: { path: '/home/scenario-edge.png', alt: 'Edge computing deployment' }, tags: ['Compact', 'Rapid Deploy'] },
      { title: 'Extreme Climate', text: 'Desert-proof, tropical-proof, arctic-proof — engineered for every environment on Earth.', image: { path: '/home/scenario-climate.png', alt: 'Extreme climate data center' }, tags: ['Desert', 'Tropical', 'Arctic'] },
      { title: 'Emergency & Disaster Recovery', text: 'Factory-tested modules deployed in weeks, not months, when downtime is not an option.', image: { path: '/home/scenario-emergency.png', alt: 'Emergency disaster recovery data center' }, tags: ['Fast Recovery', 'Pre-tested'] },
      { title: 'Space-Constrained Sites', text: 'Rooftop, urban, and indoor solutions that maximize capacity in minimal footprint.', image: { path: '/home/scenario-rooftop.png', alt: 'Space-constrained data center' }, tags: ['Rooftop', 'Urban', 'Compact'] },
      { title: 'Remote & Off-Grid', text: 'Self-contained infrastructure for mining, oil & gas, and remote operations.', image: { path: '/home/scenario-remote.png', alt: 'Remote off-grid data center' }, tags: ['Off-grid', 'Self-contained'] },
    ],
  },

  timeline: {
    eyebrow: 'End-to-End Delivery',
    title: 'One Partner. From Blueprint to Commissioning.',
    text: 'Design, manufacture, integrate, test, ship, install — every stage owned by SOETECK. No finger-pointing between vendors.',
    steps: [
      { num: '01', icon: 'design', title: 'Design', text: 'Collaborative engineering with 3D modeling and CFD thermal simulation.' },
      { num: '02', icon: 'manufacture', title: 'Manufacture', text: 'In-house production of UPS, cooling, PDUs, and enclosures.' },
      { num: '03', icon: 'integrate', title: 'Integrate', text: 'System-level assembly and configuration in our factory.' },
      { num: '04', icon: 'test', title: 'Test', text: 'Full-load testing, thermal validation, and failover verification.' },
      { num: '05', icon: 'ship', title: 'Ship', text: 'Secure global logistics with door-to-door oversight.' },
      { num: '06', icon: 'install', title: 'Commission', text: 'On-site installation, commissioning, and operator training.' },
    ],
  },

  projects: {
    eyebrow: 'Global Track Record',
    title: 'Trusted Where Uptime Is Non-Negotiable',
    text: 'From the deserts of the Middle East to the tropics of Southeast Asia, SOETECK data centers keep critical infrastructure running around the clock.',
    cards: [
      {
        title: 'Saudi Telecom Disaster Recovery',
        location: 'Riyadh, Saudi Arabia',
        metric: '10',
        metricLabel: 'Weeks to Deploy',
        text: 'A fully containerized disaster-recovery data center for Saudi Telecom\'s critical operations. 400kW IT load with N+1 redundancy.',
        image: { path: '/resources/prefab-modular-data-center-of-Saudi-Telecom-0.webp', alt: 'Saudi Telecom disaster recovery data center' },
        cta: 'View Case Study',
        ctaLink: '/en/case-studies/',
      },
      {
        title: 'Regional Edge Network',
        location: 'Southeast Asia',
        metric: '12',
        metricLabel: 'Sites Deployed',
        text: 'Distributed micro-module data centers across 12 sites for a regional telecommunications carrier.',
        image: { path: '/resources/soeteck-racks-and-cabinets.webp', alt: 'Southeast Asia edge computing deployment' },
        cta: 'View Case Study',
        ctaLink: '/en/case-studies/',
      },
      {
        title: 'Submarine Cable Landing Station',
        location: 'Singapore',
        metric: '99.99%',
        metricLabel: 'Uptime SLA',
        text: 'Corrosion-resistant containerized infrastructure for a critical undersea cable junction, deployed in a humid coastal environment with zero tolerance for downtime.',
        image: { path: '/home/industry-submarine.png', alt: 'Submarine cable landing station infrastructure' },
        cta: 'View Case Study',
        ctaLink: '/en/case-studies/',
      },
      {
        title: 'AI Training Facility',
        location: 'Northern Europe',
        metric: '100kW+',
        metricLabel: 'Per Rack Density',
        text: 'Direct-to-chip liquid cooling deployment supporting 100kW+ GPU rack density for an AI research cluster — delivered turnkey in one factory-tested unit.',
        image: { path: '/home/industry-gpu.png', alt: 'AI training facility with liquid cooling' },
        cta: 'View Case Study',
        ctaLink: '/en/case-studies/',
      },
      {
        title: 'Remote Off-Grid Site',
        location: 'Central Australia',
        metric: '28',
        metricLabel: 'Days to Deploy',
        text: 'Self-contained off-grid container data center with integrated power and cooling for a remote mining operation, shipped and commissioned in under a month.',
        image: { path: '/home/scenario-remote.png', alt: 'Remote off-grid container data center' },
        cta: 'View Case Study',
        ctaLink: '/en/case-studies/',
      },
    ],
  },

  whySoeteck: {
    eyebrow: 'The SOETECK Difference',
    title: 'Why the World\'s Most Demanding Operators Choose Us',
    text: 'It is not just what we build — it is how we build it, and who stands behind it.',
    items: [
      { icon: 'factory', title: 'Manufacturer, Not Middleman', text: 'We design and build the critical components ourselves. No opaque supply chains, no markup layers.' },
      { icon: 'accountability', title: 'Single-Point Accountability', text: 'One contract, one team, one throat to choke. From design to commissioning, SOETECK owns the entire delivery.' },
      { icon: 'global', title: 'Global Deployment DNA', text: '50+ countries, every climate, every grid standard. We have solved the challenges that sink other projects.' },
      { icon: 'speed', title: 'Speed Without Compromise', text: 'Factory pre-assembly and testing compress years of on-site construction into weeks.' },
    ],
    stats: [
      { value: '2000', suffix: '+', label: 'Projects Delivered' },
      { value: '50', suffix: '+', label: 'Countries Served' },
      { value: '20', suffix: '+', label: 'Years of Innovation' },
      { value: '8', suffix: '–12W', label: 'Delivery Lead Time' },
    ],
    certs: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'CE Certified', '20+ Patents'],
  },

  news: {
    eyebrow: 'News & Insights',
    title: 'Company News & Industry Insights',
    viewAllLabel: 'View All Articles',
    viewAllLink: '/en/news-and-insights/',
    text: 'Stay informed with the latest company announcements, product updates, and expert insights on data center infrastructure.',
  },

  cta: {
    eyebrow: 'Start Your Project',
    title: 'Ready to Build Your AI-Ready Data Center?',
    text: 'Tell us your requirements — power, cooling, footprint, timeline. We will engineer the optimal solution and deliver it turnkey.',
    cards: [
      { icon: 'products', title: 'Browse Our Catalog', text: 'Explore the full range of power, cooling, and enclosure products we manufacture in-house.', cta: 'View Products', ctaLink: '/en/products/' },
      { icon: 'solutions', title: 'Get a Custom Solution', text: 'Receive a tailored recommendation for your specific workload, site, and capacity requirements.', cta: 'Consult an Expert', ctaLink: '/en/contact-us/' },
      { icon: 'engineering', title: 'Talk to Engineering', text: 'Engage our engineering team directly for complex custom integration and design-build projects.', cta: 'Submit Inquiry', ctaLink: '/en/contact-us/' },
    ],
  },

  // Variant B: AI Infrastructure Challenge
  challenge: {
    eyebrow: 'The AI Shift',
    title: 'AI Is Rewriting the Rules of Infrastructure',
    subtitle: 'The data centers built for yesterday\'s workloads cannot handle tomorrow\'s AI demands.',
    points: [
      { value: '3×', label: 'Power Density', text: 'AI training clusters demand power densities that conventional infrastructure was never designed to handle.' },
      { value: '100kW+', label: 'Per Rack', text: 'Air cooling has hit its physical limits. Liquid cooling is no longer optional — it is a prerequisite.' },
      { value: '2×', label: 'Demand Growth', text: 'AI capacity demand doubles faster than construction cycles. Speed is survival.' },
    ],
    soeteckAnswer: {
      title: 'The SOETECK Answer',
      items: [
        'Prefabricated modules compress delivery from years to weeks',
        'Direct-to-chip liquid cooling handles 100kW+ rack density',
        'Factory testing eliminates on-site integration risks',
      ],
    },
  },

  // Variant C: Stats Bar
  statsBar: {
    stats: [
      { value: '2000', suffix: '+', label: 'Projects Delivered' },
      { value: '50', suffix: '+', label: 'Countries Served' },
      { value: '20', suffix: '+', label: 'Years of Innovation' },
      { value: '8', suffix: '–12W', label: 'Delivery Lead Time' },
    ],
  },

  // Variant B: Global Presence
  globalPresence: {
    eyebrow: 'Global Footprint',
    title: 'Engineered in China. Deployed Worldwide.',
    text: 'From the deserts of the Middle East to the tropics of Southeast Asia, SOETECK prefabricated data centers keep critical infrastructure running in 50+ countries — every climate, every grid standard.',
    stats: [
      { value: '2000', suffix: '+', label: 'Projects Delivered' },
      { value: '50', suffix: '+', label: 'Countries Served' },
      { value: '20', suffix: '+', label: 'Years of Innovation' },
      { value: '8', suffix: '–12W', label: 'Delivery Lead Time' },
    ],
    regions: ['Middle East', 'Southeast Asia', 'Europe', 'Africa', 'Latin America', 'North America'],
  },

  // Variant C: Solutions head intro (merged from the old transition band)
  transition: {
    eyebrow: 'The Solution',
    title: 'Three Turnkey Architectures',
    text: 'Every SOETECK data center ships factory-built and site-ready. Pick the deployment model that fits your site, density, and timeline — containerized, micro-module, or row modular.',
  },

  // Variant C: Products showcase intro
  productsIntro: {
    eyebrow: 'Built In-House',
    title: 'Power & Cooling, Engineered by SOETECK',
    text: 'UPS systems, precision cooling, power distribution, and enclosures — designed and manufactured in our own factory, so every component meets spec.',
  },

  // Variant C: News section labels
  newsC: {
    newsLabel: 'News Releases',
    newsLink: '/en/news-and-insights/news-releases/',
    blogLabel: 'Blogs',
    blogLink: '/en/news-and-insights/blogs/',
    viewAllNews: 'View All News →',
    viewAllBlogs: 'View All Blogs →',
    newsEyebrow: 'Latest News',
    newsTitle: 'Company News & Announcements',
    blogEyebrow: 'Expert Insights',
    blogTitle: 'Technical Blogs & Thought Leadership',
  },
};