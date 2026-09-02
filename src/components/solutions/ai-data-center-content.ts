/**
 * AI Data Center Infrastructure solution — code-embedded content.
 * Converted from the raw-HTML WP page post-35944 (migrated from legacy Bricks post 35093).
 *
 * English-only for now (matches the sibling solution pages: AISLE / Row / Cabinet / Prefab / DCC).
 * When multilingual coverage is added, split files follow the `*-content-{lang}.ts` convention.
 *
 * Copy preserved verbatim from the original page; market-positioning messaging retained.
 */

// Brochure not published yet. Leave null → component hides the brochure CTA (no dead link).
// sunwei to supply the real resource path (e.g. `/resources/Soeteck-AI-Data-Center.pdf`).
export const BROCHURE_URL: string | null = null;

export const AIDC_HERO = {
  eyebrow: 'AI Data Center Infrastructure',
  title: 'Purpose-Built for the GPU Era',
  titlePrefix: 'AI Data Center Infrastructure',
  subtitle:
    'From edge inference to hyperscale GPU clusters — prefabricated, liquid-cooled, globally shipped, and operational in 120 days.',
  bannerImage: '/resources/ai-data-center/ai-data-center-hero.webp',
  ctaPrimary: { label: 'Get Your Custom Quote', href: '/contact-us/' },
  ctaSecondary: { label: 'Download Technical Brochure', href: BROCHURE_URL },
};

export const AIDC_PROBLEM = {
  eyebrow: 'The Challenge',
  title: 'Your AI Infrastructure Shouldn’t Be the Bottleneck',
  intro:
    'The GPU revolution has outpaced traditional data center design. H100 and B200 GPUs demand power densities that break conventional cooling limits — and construction timelines that can’t keep up with AI’s speed of innovation.',
  points: [
    { icon: 'calendar', stat: '2–3', unit: 'Years to Build', text: 'Traditional data centers require 24–36 months from planning to commissioning. By the time your facility is ready, your GPU architecture is already a generation behind.' },
    { icon: 'temp', stat: '25', unit: 'kW — Air Wall', text: 'Forced-air cooling simply cannot remove heat fast enough beyond 25kW per rack. NVIDIA H100 clusters routinely exceed 40kW — and B200 pushes past 100kW. Air cooling is no longer an option.' },
    { icon: 'cost', stat: '$50M+', unit: 'Capital Before First GPU', text: 'Conventional construction demands massive upfront capital — land acquisition, permits, civil works, MEP infrastructure — all before you rack a single server. This delays ROI and ties up capital for years.' },
  ],
};

export const AIDC_PLATFORM = {
  eyebrow: 'The Platform',
  title: 'The Soeteck AI Infrastructure Platform',
  intro:
    'One integrated platform that delivers the total AI data center — thermal, power, structure and control — purpose-built around your GPU workload.',
  pillars: [
    { icon: 'container', title: 'Prefabricated & Containerized', text: 'Every Soeteck AI data center is factory-built inside standard ISO shipping containers. 95% pre-assembled, tested at our factory, then shipped worldwide. Plug in power, network, and water — compute starts.' },
    { icon: 'cool', title: 'Integrated Liquid Cooling', text: 'Direct-to-chip cold plate technology removes heat at the source. Integrated Coolant Distribution Units (CDUs) handle up to 1.5MW of thermal load per module. PUE as low as 1.08.' },
    { icon: 'power', title: 'High-Density Power Distribution', text: 'From medium-voltage switchgear to intelligent rack PDUs — engineered for 40–120kW per rack. Modular Li-Ion UPS, 800A busway, per-outlet metering.' },
    { icon: 'gpu', title: 'GPU-Agnostic Architecture', text: 'No vendor lock-in. Full support for NVIDIA H100/H200/B200, AMD MI300X, Huawei Ascend 910B/C, and Intel Gaudi. Choose the GPU that fits your workload and budget.' },
  ],
};

export interface AIDCConfig {
  id: string;
  name: string;
  tagline: string;
  bestFor: string;
  specs: { label: string; value: string }[];
  inquireLabel: string;
}

export const AIDC_CONFIGS: AIDCConfig[] = [
  {
    id: 'edge',
    name: 'AI-Edge',
    tagline: 'Edge Inference',
    inquireLabel: 'Inquire About AI-Edge',
    bestFor: 'Edge AI inference, smart manufacturing, telecom 5G edge, retail AI',
    specs: [
      { label: 'Container', value: '20ft ISO Standard' },
      { label: 'Power', value: '80–200 kW total' },
      { label: 'GPU Capacity', value: '8–16 GPUs (L40S, A10, A100)' },
      { label: 'Cooling', value: 'Air-cooled standard, liquid-cooling optional' },
      { label: 'Rack Density', value: 'Up to 30 kW/rack' },
      { label: 'PUE', value: '1.15–1.25' },
      { label: 'Deployment', value: '60–90 days' },
    ],
  },
  {
    id: 'core',
    name: 'AI-Core',
    tagline: 'Training & Fine-Tuning',
    inquireLabel: 'Inquire About AI-Core',
    bestFor: 'Enterprise LLM training, AI model fine-tuning, university research clusters',
    specs: [
      { label: 'Container', value: '40ft High-Cube ISO Standard' },
      { label: 'Power', value: '300–600 kW total' },
      { label: 'GPU Capacity', value: '32–64 GPUs (H100, H200, B200, MI300X)' },
      { label: 'Cooling', value: 'Direct-to-chip liquid cooling (CDU integrated)' },
      { label: 'Rack Density', value: 'Up to 100 kW/rack' },
      { label: 'PUE', value: '1.08–1.15' },
      { label: 'Deployment', value: '90–120 days' },
    ],
  },
  {
    id: 'flex',
    name: 'AI-Flex',
    tagline: 'Hyperscale Clusters',
    inquireLabel: 'Inquire About AI-Flex',
    bestFor: 'Hyperscale AI training, AI cloud service providers, national AI computing centers',
    specs: [
      { label: 'Configuration', value: '4–20+ interconnected 40ft modules' },
      { label: 'Power', value: '2–20 MW total' },
      { label: 'GPU Capacity', value: '256–2,048+ GPUs' },
      { label: 'Cooling', value: 'Centralized liquid cooling with distributed CDUs + optional immersion modules' },
      { label: 'Rack Density', value: 'Up to 120 kW/rack' },
      { label: 'PUE', value: '< 1.10 (1.03 with immersion)' },
      { label: 'Deployment', value: '120–180 days' },
    ],
  },
];

// Table header = [cfw column label, AI-Edge, AI-Core, AI-Flex]
export const AIDC_CONFIG_TABLE = {
  title: 'One Platform. Three Configurations. Infinite Scale.',
  subtitle: 'A single AI infrastructure platform that scales from edge inference to hyperscale clusters.',
  headers: ['Specification', 'AI-Edge', 'AI-Core', 'AI-Flex'],
  rows: [
    { label: 'Container', values: ['20ft ISO Standard', '40ft High-Cube ISO Standard', '4–20+ interconnected 40ft modules'] },
    { label: 'Power', values: ['80–200 kW', '300–600 kW', '2–20 MW'] },
    { label: 'GPU Capacity', values: ['8–16 GPUs', '32–64 GPUs', '256–2,048+ GPUs'] },
    { label: 'Cooling', values: ['Air-cooled standard, liquid optional', 'Direct-to-chip CDU integrated', 'Centralized liquid + optional immersion'] },
    { label: 'Rack Density', values: ['Up to 30 kW', 'Up to 100 kW', 'Up to 120 kW'] },
    { label: 'PUE', values: ['1.15–1.25', '1.08–1.15', '< 1.10 (1.03 immersion)'] },
    { label: 'Deployment', values: ['60–90 days', '90–120 days', '120–180 days'] },
    { label: 'Best For', values: ['Edge inference, smart manufacturing, 5G edge', 'LLM training, fine-tuning, research clusters', 'Hyperscale AI, AI clouds, national computing'] },
  ],
};

export const AIDC_COOLING = {
  eyebrow: 'Cooling',
  title: 'Cooling That Keeps Pace With GPUs',
  intro:
    'The physics is simple: liquid coolants offer over 3,000× more heat removal capacity per unit volume than air. Every hyperscaler is transitioning to liquid cooling. The only question is how fast.',
  tabs: [
    {
      id: 'cold-plate',
      label: 'Direct-to-Chip Cold Plate',
      image: '/resources/ai-data-center/ai-cold-plate-gpu-diagram.webp',
      text: 'Direct-to-chip liquid cooling is the workhorse of modern AI infrastructure. Cold plates mount directly onto GPU and CPU heat spreaders, circulating a dielectric coolant through micro-channel fins to remove heat at the source.',
      bullets: [
        'Removes 85–90% of GPU heat at the cold plate — fans handle the remaining 10–15%',
        'Supports rack densities up to 120 kW in a standard 42U enclosure',
        'Uses PG25 propylene glycol coolant — non-conductive, non-toxic, freeze-protected',
        'Proven technology: deployed in Top500 supercomputers and hyperscale AI clusters',
        'Retrofittable: existing air-cooled racks can be upgraded with minimal downtime',
        'In-Row CDU: 300 kW/unit · Room-Level CDU: 800–1,500 kW/unit',
        'Redundant pump configurations (N+1 or 2N) with SNMP/Modbus remote monitoring',
      ],
    },
    {
      id: 'immersion',
      label: 'Immersion Cooling',
      image: '/resources/ai-data-center/ai-cooling-methods-comparison.webp',
      text: 'For the highest-density deployments, single-phase immersion cooling submerges entire GPU servers in a dielectric fluid that absorbs heat 1,200× more efficiently than air.',
      bullets: [
        'PUE as low as 1.03 — the most efficient cooling method available',
        'Eliminates all server fans — reduces server power consumption by 10–15%',
        'Uniform cooling across all components — no hot spots',
        'Silent operation — no fan noise',
        'Dielectric fluid is non-corrosive and lasts 10+ years without replacement',
        'Available as a dedicated immersion module within the AI-Flex platform',
      ],
    },
    {
      id: 'air-fails',
      label: 'Why Air Falls Short',
      image: '/resources/ai-data-center/ai-cooling-methods-comparison.webp',
      text: 'Air has a volumetric heat capacity of ~1.2 kJ/m³·K. Liquid coolants offer 3,500–4,200 kJ/m³·K — over 3,000× more heat removal capacity per unit volume.',
      bullets: [
        'Air cooling: practical ceiling at 20–25 kW per rack with hot-aisle containment',
        'Direct-to-chip liquid: comfortable at 60–120 kW per rack',
        'Immersion cooling: capable of 100+ kW per rack with no derating',
        'GPU power trajectory: H100 (700W) → B200 (1,000W) → Rubin (1,500W+) makes the decision clear',
      ],
    },
  ],
};

export const AIDC_POWER = {
  eyebrow: 'Power',
  title: 'Power Delivery Engineered for GPU Density',
  intro:
    'GPU clusters don’t just need more power — they need power delivered differently. Our integrated power distribution chain is designed from the ground up for high-density, mission-critical AI workloads.',
  image: '/resources/ai-data-center/ai-power-flow-diagram.webp',
  modules: [
    { icon: 'ups', title: 'Modular UPS', text: 'Li-Ion battery technology, N+1 or 2N redundancy, 98% efficiency in eco-mode. Scalable from 100kW to 2MW per module. Hot-swappable battery modules with integrated Battery Management System (BMS).' },
    { icon: 'busway', title: 'Plug-In Busway', text: '160A–800A overhead busway with tap-off boxes every 600mm. Eliminates under-floor cabling complexity. Hot-swappable tap-offs allow adding or relocating GPU racks without shutdowns.' },
    { icon: 'pdu', title: 'Intelligent Rack PDU', text: 'Per-outlet power metering (±1% accuracy), remote outlet switching, integrated environmental sensors (temperature, humidity, door contact). SNMP v3 + REST API for integration with DCIM and BMS platforms.' },
  ],
};

export const AIDC_TIMELINE = {
  eyebrow: 'Speed to Compute',
  title: 'From Order to Online — In 120 Days',
  intro: 'From order to operational GPUs in 90–120 days, compared to 24–36 months for a traditional build.',
  steps: [
    { month: 'Month 1', title: 'Design Freeze', text: 'Requirements confirmed. GPU selection finalized. Power design signed off.' },
    { month: 'Month 2', title: 'Factory Build & FAT', text: 'Container fabricated. Cooling CDU integrated. Full system tested at our factory.' },
    { month: 'Month 3', title: 'Ocean Freight', text: 'Port-to-site logistics managed. Customs clearance handled by our global freight partners.' },
    { month: 'Month 4', title: 'Commission & Go Live', text: 'Plug in power, network, water. Acceptance testing. Operator training. Compute starts.' },
  ],
  compareTraditional: '24–36 months',
  compareSoeteck: '90–120 days',
};

export const AIDC_GLOBAL = {
  eyebrow: 'Global Logistics',
  title: 'Built in China. Deployed Worldwide.',
  text: 'Soeteck AI data centers are purpose-designed for global logistics. Built into standard ISO shipping containers, they travel on existing freight infrastructure — container ships, flatbed trucks, and cargo aircraft. Every unit undergoes full factory acceptance testing (FAT) before leaving our facility. When it arrives at your site, it’s ready to commission — not assemble.',
  image: '/resources/ai-data-center/ai-global-deployment-map.webp',
  facts: [
    { value: 'ISO 668', label: 'Standard container form factor — compatible with global shipping' },
    { value: '12.2×2.44×2.9m', label: 'Standard 40ft unit dimensions (L×W×H)' },
    { value: '18–25 t', label: 'Weight fully loaded — within standard crane limits' },
    { value: '30–45', label: 'Ocean freight days: Asia → Middle East / Europe / Africa' },
  ],
  deploymentFlags: ['Saudi Arabia', 'Qatar', 'Egypt', 'Nepal', 'Vanuatu', 'France'],
};

export interface AIDCClient {
  name: string;
  description: string;
  path: string;
}

export const AIDC_CLIENTS: AIDCClient[] = [
  {
    name: 'GRD Qatar',
    description: 'Custom containerized data center for 24/7 stable operations in Middle Eastern climate.',
    path: '/news-and-insights/client-case-studies/grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center/',
  },
  {
    name: 'Egyptian Government',
    description: 'Factory audit and major digital infrastructure project for government data center modernization.',
    path: '/news-and-insights/news-releases/egyptian-government-project-delegation-visits-soeteck-for-factory-audit/',
  },
  {
    name: 'Saudi Telecom',
    description: 'Mobile OLT container data center solution enabling rapid 5G infrastructure deployment.',
    path: '/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/',
  },
  {
    name: 'WebSat Media',
    description: 'Data center cooling infrastructure optimization delivering improved efficiency and reliability.',
    path: '/news-and-insights/client-case-studies/websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions/',
  },
];

export interface AIDCRelated {
  title: string;
  description: string;
  path: string;
  icon: string;
}

// Market-positioning cross-links: the AI DC "platform" page deep-links into the ecosystem.
export const AIDC_RELATED: AIDCRelated[] = [
  { icon: 'cool', title: 'Data Center Precision Cooling', description: 'Full-range precision ACs, fan wall and room/row/rack cooling across the critical-cooling portfolio.', path: '/solutions/data-center-cooling-solutions/' },
  { icon: 'container', title: 'Prefabricated Container DC', description: 'Factory-built, ISO-shipped modular data centers delivered ready to commission.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
  { icon: 'grid', title: 'Modular Platform Family', description: 'Aisle, cabinet and row modular data centers for flexible, scalable on-premise capacity.', path: '/solutions/' },
  { icon: 'gpu', title: 'AICoolit Liquid Cooling Series', description: 'Liquid cooling containers and CDUs engineered for high-density GPU clusters.', path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
];

export interface AIDCFaq {
  q: string;
  a: string[];
}

export const AIDC_FAQ: AIDCFaq[] = [
  {
    q: 'What power density can your AI container data center support?',
    a: [
      'Our direct-to-chip liquid-cooled containers support up to 120 kW per rack. Immersion cooling modules support 100+ kW per rack with no derating. Air-cooled configurations are available up to 25 kW per rack for lighter workloads.',
    ],
  },
  {
    q: 'Which GPUs are compatible with Soeteck AI data centers?',
    a: [
      'Our infrastructure is GPU-agnostic by design. We support NVIDIA H100, H200, B200 (NVL72), AMD MI300X, Huawei Ascend 910B/C, and Intel Gaudi 3. Power shelves and cold plate mounting kits are customized to your chosen GPU platform.',
    ],
  },
  {
    q: 'How fast can you deliver a fully operational AI data center?',
    a: [
      '90–120 days from order to commissioning for standard configurations up to 5 MW. Custom configurations and hyperscale AI-Flex deployments may take 120–180 days. This compares to 24–36 months for traditional data center construction.',
    ],
  },
  {
    q: 'What safety measures protect against liquid cooling leaks?',
    a: [
      'We implement a defense-in-depth approach: (1) negative-pressure coolant loops (fluid is drawn back into the system on any breach), (2) rope-style leak detection cables along all pipe runs, (3) stainless steel drip trays under all connections, (4) 24/7 monitored conductivity sensors with automatic shutoff valves, (5) non-conductive PG25 propylene glycol coolant that won’t damage electronics on contact.',
    ],
  },
  {
    q: 'What is the typical PUE of your AI data centers?',
    a: [
      'Direct-to-chip liquid cooling: PUE 1.08–1.15 depending on climate. Immersion cooling: PUE as low as 1.03. Both figures assume free cooling with dry coolers where climate permits.',
    ],
  },
  {
    q: 'Can your AI data centers operate in extreme climates?',
    a: [
      'Yes. Our containers are rated for ambient temperatures from -40°C to +55°C (+131°F). We have deployed successfully in Middle Eastern desert environments (Saudi Arabia, Qatar, Egypt) and tropical island conditions (Vanuatu). Each deployment includes climate-specific cooling configurations.',
    ],
  },
  {
    q: 'Do you provide on-site installation and support?',
    a: [
      'Yes. Our global commissioning team travels to your site for installation supervision, system startup, acceptance testing, and operator training. We also offer optional annual maintenance contracts with remote monitoring (24/7 NOC), preventive maintenance visits, and emergency response SLAs.',
    ],
  },
];

// Template-level UI strings — previously hardcoded in AiDataCenterPage.astro.
// Added for 5-language coverage (Batch 3); language files mirror AIDC_UI verbatim.
export const AIDC_UI = {
  heroImageAlt: 'AI data center infrastructure',
  powerImageAlt: 'AI data center power distribution chain',
  globalImageAlt: 'Soeteck global AI data center deployment map',
  coolingTablistAria: 'Cooling solutions',
  bestForLabel: 'Best For:',
  compareTraditionalLabel: 'Traditional DC Construction',
  compareSoeteckLabel: 'Soeteck AI DC Deployment',
  clientsTitle: 'Trusted by Enterprises, Governments, and Telecoms Worldwide',
  readCaseStudy: 'Read the case study →',
  relatedTitle: 'Part of the Soeteck AI Data Center Ecosystem',
  relatedSubtitle:
    'Explore how Soeteck delivers the complete AI data center infrastructure — thermal, power, structure and control.',
  learnMore: 'Learn more →',
  faqTitle: 'AI Data Center — Frequently Asked Questions',
};

export const AIDC_CTA = {
  eyebrow: 'Talk to an Engineer',
  title: 'Ready to Power Your AI Infrastructure?',
  text: 'Tell us about your AI workload. We’ll design the infrastructure. Delivered in 120 days. Anywhere in the world.',
  actions: [
    { label: 'Request a Custom Quote', href: '/contact-us/', variant: 'primary' },
    { label: 'Book a 30-Min Consultation', href: '/contact-us/', variant: 'outline' },
  ],
};