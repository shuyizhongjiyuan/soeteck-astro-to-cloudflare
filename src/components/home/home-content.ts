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
  icon: string;
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
    ctaAll?: string;
    projectsAllLink?: string;
    cards: (ProjectCard & {
      testimonial?: {
        quote: string;
        author: string;
        role: string;
      };
    })[];
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
        // ① 身份 —— 品牌+身份进 eyebrow；lead 按"四类预制类型→集成→到站即上线→应用场景"排布
        image: '/hero/hero-slide-1.webp',
        eyebrow: 'SOETECK · Prefab Data Center Provider',
        title: 'Delivered in weeks,',
        titleAccent: 'not years.',
        subtitle: 'Prefabricated Container, aisle-containment, row and single-cabinet data centers from SOETECK, with power, cooling and fire suppression factory-integrated and every unit ready to go live the day it arrives, for AI training clusters, edge sites and disaster recovery worldwide.',
        ctaPrimary: 'Explore Solutions',
        ctaPrimaryLink: '/en/solutions/',
        ctaSecondary: 'Talk to an Expert',
        ctaSecondaryLink: '/en/contact-us/',
      },
      {
        // ② AI Data Center —— eyebrow 显性 Prefab；title 密度热词；lead=热点+全栈集成+隐性 prefab/turnkey
        image: '/hero/hero-slide-2.webp',
        eyebrow: 'Full-Stack Prefab AI Infrastructure',
        title: 'AI data centers,',
        titleAccent: 'engineered as one.',
        subtitle: 'GPU cabinets now push past 100kW, so air cooling cannot keep up. We design power, liquid cooling, racks and monitoring as one integrated AI stack, then ship it prefabricated and turnkey, live the day it arrives.',
        ctaPrimary: "See How It's Built",
        ctaPrimaryLink: '/en/solutions/data-center-solutions/ai-data-center/',
        ctaSecondary: 'Request a Quote',
        ctaSecondaryLink: '/en/contact-us/',
      },
      {
        // ③ 服务优势 —— 单一交钥匙责任人（图片为占位）
        image: '/hero/hero-slide-1.webp',
        eyebrow: 'Turnkey Partner',
        title: 'End-to-end delivery,',
        titleAccent: 'single responsibility.',
        subtitle: 'One team owns everything, engineering, factory production, global shipping, commissioning and after-sales, so you hand over the keys with a single accountable partner.',
        ctaPrimary: 'Talk to an Expert',
        ctaPrimaryLink: '/en/contact-us/',
        ctaSecondary: 'Contact Sales',
        ctaSecondaryLink: '/en/contact-us/',
      },
      {
        // ④ 全球证据（图片为占位）
        image: '/hero/hero-slide-3.webp',
        eyebrow: 'Global Proof',
        title: 'Deployed across',
        titleAccent: '50+ countries.',
        subtitle: 'From desert heat to arctic cold, on every common grid standard, our units keep AI training platforms, edge nodes and critical sites running around the clock.',
        ctaPrimary: 'Read Case Studies',
        ctaPrimaryLink: '/en/news-and-insights/client-case-studies/',
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
      { icon: 'telecom', title: 'Telecom & Operators', image: { path: '/home/industry-telecom.png', alt: 'Telecom data center infrastructure' }, ctaLink: '/en/solutions/telecom/' },
      { icon: 'colocation', title: 'Colocation', image: { path: '/home/industry-colocation.png', alt: 'Colocation data center infrastructure' }, ctaLink: '/en/solutions/colocation/' },
      { icon: 'cloud', title: 'Cloud & Internet', image: { path: '/home/industry-cloud.png', alt: 'Cloud service provider infrastructure' }, ctaLink: '/en/solutions/cloud-hyperscale/' },
      { icon: 'internet', title: 'Internet', image: { path: '/home/industry-internet.png', alt: 'Internet platform data center infrastructure' }, ctaLink: '/en/solutions/internet/' },
      { icon: 'finance', title: 'Finance & Banking', image: { path: '/home/industry-finance.png', alt: 'Financial data center reliability' }, ctaLink: '/en/solutions/finance/' },
      { icon: 'government', title: 'Government & Public Sector', image: { path: '/home/industry-government.png', alt: 'Government secure infrastructure' }, ctaLink: '/en/solutions/government/' },
      { icon: 'manufacturing', title: 'Manufacturing', image: { path: '/home/industry-manufacturing.png', alt: 'Industrial manufacturing data center' }, ctaLink: '/en/solutions/manufacturing/' },
      { icon: 'healthcare', title: 'Healthcare', image: { path: '/home/industry-healthcare.png', alt: 'Healthcare data center infrastructure' }, ctaLink: '/en/solutions/healthcare/' },
    ],
  },

  solutions: {
    eyebrow: 'Prefab & Turnkey Solutions',
    title: 'Complete Data Center Solutions',
    text: 'From single cabinets to multi-megawatt campuses — pre-engineered, factory-tested, and delivered as complete integrated units.',
    cards: [
      {
        title: 'AI Data Center',
        short: 'AI Data Center',
        text: 'Prefabricated AI infrastructure for GPU workloads. Container modules ship with integrated liquid cooling and high-density power — factory-tested and ready for compute on arrival.',
        image: { path: '/resources/ai-data-center/ai-data-center-hero.webp', alt: 'AI data center' },
        features: ['Live in 90–120 days', 'Up to 120 kW/rack', 'PUE as low as 1.08'],
        cta: 'View Details',
        ctaLink: '/en/solutions/data-center-solutions/ai-data-center/',
      },
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
          { title: 'Enclosure Precision AC', image: { path: '/resources/outdoor-enclosure-cooling-home-2-768x768.webp', alt: 'Outdoor enclosure precision air conditioner' }, hoverImage: { path: '/resources/outdoor-enclosure-cooling-home-1-768x768.webp', alt: 'Enclosure cooling' }, ctaLink: '/en/products/thermal-management/telecom-enclosure-air-conditioner/' },
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
    eyebrow: 'Our Services',
    title: 'What We Deliver for You',
    text: 'From the first conversation to years of operation — SOETECK owns the full lifecycle. Here is what that means for your project.',
    image: { path: '/resources/soeteck-factory-1.jpg', alt: 'SOETECK manufacturing facility' },
    steps: [
      { num: '01', icon: 'design', title: 'Free Solution Design', text: 'Tell us your power, cooling, and site requirements. We deliver a tailored data center solution with 3D layout and thermal simulation — at no cost.' },
      { num: '02', icon: 'manufacture', title: 'In-House Manufacturing', text: 'UPS, precision cooling, PDUs, enclosures — all designed and built in our own factory. No middlemen, no markups, full quality control.' },
      { num: '03', icon: 'test', title: 'Factory Acceptance Test', text: 'Every unit undergoes full-load testing before shipment. You are invited to witness — onsite or via live video — before a single crate leaves the factory.' },
      { num: '04', icon: 'ship', title: 'Global Logistics & Customs', text: 'FOB, CIF, or DDP — we handle shipping, documentation, and customs clearance. 50+ countries delivered, every grid standard covered.' },
      { num: '05', icon: 'install', title: 'On-Site Installation & Training', text: 'Our engineers commission the system on your site and train your local team. No third-party contractors, no handoff gaps.' },
      { num: '06', icon: 'support', title: 'After-Sales & Spare Parts', text: '2-year warranty, 7×24 technical support, remote monitoring, and emergency spare parts dispatch. One contract, one team, one throat to choke.' },
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
    ctaAll: 'View All Case Studies',
    projectsAllLink: '/en/news-and-insights/client-case-studies/',
    cards: [
      {
        title: 'Saudi Telecom',
        location: 'Riyadh, Saudi Arabia',
        metric: '2',
        metricLabel: '40ft Container DCs',
        text: 'Two 40-foot mobile OLT container data centers for Saudi Telecom, built to carrier grade — with dual DC power, battery backup, and seven OLTs per unit for uninterrupted operation.',
        image: { path: '/resources/prefab-modular-data-center-of-Saudi-Telecom-0.webp', alt: 'Saudi Telecom container data center' },
        cta: 'Read Full Story',
        ctaLink: '/en/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/',
        testimonial: {
          quote: 'Our client expressed satisfaction with the results, believing that the container data center project laid a solid foundation for their long-term development.',
          author: 'Saudi Telecom',
          role: 'DR Project, Middle East',
        },
      },
      {
        title: 'GRD Qatar',
        location: 'Qatar',
        metric: '24/7',
        metricLabel: 'Stable Operation',
        text: 'A custom containerized data center for GRD, keeping mission-critical data stable around the clock as part of the company\'s full digital transformation.',
        image: { path: '/resources/soeteck-racks-and-cabinets.webp', alt: 'GRD Qatar containerized data center' },
        cta: 'Read Full Story',
        ctaLink: '/en/news-and-insights/client-case-studies/grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center/',
        testimonial: {
          quote: 'The containerized data center was deployed quickly and runs our operations around the clock, even under extreme heat and dust.',
          author: 'GRD',
          role: 'Qatar Branch Operations',
        },
      },
      {
        title: 'Telecom Fiji',
        location: 'Fiji',
        metric: '45',
        metricLabel: 'kW Anti-Corrosion ACs',
        text: 'Coastal telecom stations upgraded with 20kW and 45kW anti-corrosion precision air conditioners, replacing underpowered household units in Fiji\'s salty, humid environment.',
        image: { path: '/home/industry-submarine.png', alt: 'Telecom Fiji coastal site precision cooling' },
        cta: 'Read Full Story',
        ctaLink: '/en/news-and-insights/client-case-studies/telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design/',
        testimonial: {
          quote: 'The anti-corrosion precision air conditioners restored stable, efficient cooling at our coastal stations — equipment that used to fail in the salt air.',
          author: 'Telecom Fiji',
          role: 'Network Operations',
        },
      },
      {
        title: 'Open DC Malaysia',
        location: 'Malaysia',
        metric: '100',
        metricLabel: 'kW Modular Cooling',
        text: 'Two sets of 100kW modular air-cooled precision units retrofit Open DC Malaysia\'s cramped server rooms — a space-efficient upgrade where conventional units could not fit.',
        image: { path: '/home/industry-gpu.png', alt: 'Open DC Malaysia data center retrofit' },
        cta: 'Read Full Story',
        ctaLink: '/en/news-and-insights/client-case-studies/open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit/',
        testimonial: {
          quote: 'SOETECK\'s modular units fit where conventional systems could not, giving our retrofitted server rooms reliable 100kW-class cooling.',
          author: 'Open DC Malaysia',
          role: 'Facility Engineering',
        },
      },
      {
        title: 'WebSat Media',
        location: 'Singapore',
        metric: 'N+1',
        metricLabel: 'Cooling Redundancy',
        text: 'Five 70kW precision air conditioners in N+1 redundancy keep WebSat Media\'s satellite and broadcast infrastructure online for a global client base.',
        image: { path: '/home/scenario-remote.png', alt: 'WebSat Media data center cooling' },
        cta: 'Read Full Story',
        ctaLink: '/en/news-and-insights/client-case-studies/websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions/',
        testimonial: {
          quote: 'With N+1 redundancy across five precision units, our satellite and broadcast platforms stay online for clients on every continent.',
          author: 'WebSat Media',
          role: 'Data Center Infrastructure',
        },
      },
      {
        title: 'Sinus-Dochi LLC',
        location: 'Mongolia',
        metric: 'In-Row',
        metricLabel: 'Precision Cooling',
        text: 'A row-mounted In-Row precision cooling system for a Mongolian HVAC engineering leader — DC inverter compressors, EC fans and N+1 redundancy cut data center PUE, with smart controls bringing cooling right to the heat source.',
        image: { path: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp', alt: 'Sinus-Dochi LLC in-row precision cooling' },
        cta: 'Read Full Story',
        ctaLink: '/en/news-and-insights/client-case-studies/sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system/',
        testimonial: {
          quote: 'The smart In-Row precision cooling system lowered our data center PUE and kept temperatures precise — efficiency and reliability in one solution.',
          author: 'Sinus-Dochi LLC',
          role: 'HVAC Engineering, Mongolia',
        },
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
      { icon: 'solutions', title: 'Get a Custom Solution', text: 'Receive a tailored recommendation for your specific workload, site, and capacity requirements.', cta: 'Explore Solutions', ctaLink: '/en/solutions/' },
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
    title: 'Four Turnkey Architectures',
    text: 'Every SOETECK data center ships factory-built and site-ready. From turnkey AI infrastructure to containerized, micro-module, and row modular deployments — pick the model that fits your site, density, and timeline.',
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