/**
 * Industry top-level solution pages — code-embedded content (EN only, Phase 1).
 * 8 industries share IndustryPage.astro; content keyed by route slug.
 * This is a basic design layer: hero + 3 pains + product mapping + need + CTA.
 * (Multilingual variants deferred to a later phase; zh/ru/pt/es not built yet.)
 */

export interface IndustryContent {
  hero: { eyebrow: string; title: string; subtitle: string; bannerImage: string; alt: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  pains: { eyebrow: string; title: string; text: string; items: { title: string; text: string }[] };
  products: { eyebrow: string; title: string; text: string; ctaLabel: string; items: { title: string; text: string; path: string }[] };
  need: { title: string; text: string; cta: string };
}

export const INDUSTRY_CONTENT: Record<string, IndustryContent> = {
  telecom: {
    hero: {
      eyebrow: 'Telecom & Network Infrastructure',
      title: 'Telecom Data Center & Edge Solutions',
      subtitle: 'Prefabricated, corrosion-resistant edge and OLT sites that deploy in weeks — built for carriers, tower companies and submarine cable landing stations.',
      bannerImage: '/industry/industry-telecom-1920.webp',
      alt: 'Telecom network infrastructure',
      ctaPrimary: 'Talk to an Expert',
      ctaSecondary: 'Explore Prefab Data Centers',
      ctaSecondaryLink: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    pains: {
      eyebrow: 'The Challenge',
      title: 'What Telecom Operators Face',
      text: 'Deploying and operating network sites brings three recurring challenges — each one we engineer against.',
      items: [
        { title: 'High Initial Investment', text: 'One-shot builds risk long payback. Phased prefabricated deployment cuts upfront CAPEX and grows with traffic.' },
        { title: 'Energy & Carbon Pressure', text: 'Regulators and ESG goals push operators toward green, efficient sites. High-efficiency cooling and smart DC power help.' },
        { title: 'Availability Is Non-Negotiable', text: 'Network uptime is the business. Factory-tested, N+1-ready infrastructure with remote monitoring keeps services online.' },
      ],
    },
    products: {
      eyebrow: 'What We Deliver',
      title: 'Telecom-Grade Products & Solutions',
      text: 'Purpose-built power, cooling and enclosure systems for network sites and edge data centers.',
      ctaLabel: 'View Details',
      items: [
        { title: 'Telecom Enclosure Air Conditioners', text: 'Corrosion-resistant precision cooling for outdoor cabinets and shelters — 30+ models.', path: '/products/thermal-management/telecom-enclosure-air-conditioner/' },
        { title: 'Containerized Edge DCs', text: 'Mobile OLT and edge containers with integrated power, cooling and fire suppression.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'DC Power & Batteries', text: '-48V DC power systems and battery backup engineered for carrier-grade reliability.', path: '/products/critical-power/dc-power-systems/' },
      ],
    },
    need: {
      title: 'Deploy Your Next Telecom Site in Weeks',
      text: 'Tell us your site requirements — power, cooling, footprint. Our engineers deliver a prefabricated, factory-tested solution ready to go live on arrival.',
      cta: 'Start Your Project',
    },
  },

  colocation: {
    hero: {
      eyebrow: 'Data Center Operators',
      title: 'Modular Capacity for Data Center Operators',
      subtitle: 'Rapid, phased capacity for colocation and IDC providers — prefabricated halls, edge modules and turnkey expansion without construction delays.',
      bannerImage: '/industry/industry-colocation-1920.webp',
      alt: 'Colocation data center campus',
      ctaPrimary: 'Talk to an Expert',
      ctaSecondary: 'View Containerized DC',
      ctaSecondaryLink: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    pains: {
      eyebrow: 'The Challenge',
      title: 'What Colocation Providers Face',
      text: 'Capacity demand moves faster than construction. These are the pressures every operator feels.',
      items: [
        { title: 'Speed to Market', text: 'Customer demand outpaces construction. Prefabricated modules deliver sellable capacity in weeks, not years.' },
        { title: 'Phased Expansion', text: 'One-shot builds over-commit capital. Modular, step-by-step expansion matches capacity to revenue.' },
        { title: 'Predictable CAPEX', text: 'Factory pricing and turnkey delivery remove on-site surprises and compress total cost of ownership.' },
      ],
    },
    products: {
      eyebrow: 'What We Deliver',
      title: 'Capacity Solutions for Operators',
      text: 'From single edge cabinets to multi-megawatt prefabricated halls — delivered as integrated, factory-tested units.',
      ctaLabel: 'View Details',
      items: [
        { title: 'Containerized Data Centers', text: '20ft/40ft ISO containers with integrated power, cooling and monitoring.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'Cabinet Modular DCs', text: 'Compact all-in-one modules for small IT rooms and micro capacity.', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: 'Precision Cooling', text: 'Room, row and rack cooling for every density tier.', path: '/solutions/data-center-cooling-solutions/' },
      ],
    },
    need: {
      title: 'Add Capacity Before Demand Arrives',
      text: 'Share your expansion plan — our prefabricated solutions scale with you, phasing CAPEX and cutting time-to-revenue.',
      cta: 'Plan Your Expansion',
    },
  },

  'cloud-hyperscale': {
    hero: {
      eyebrow: 'Cloud & Hyperscale',
      title: 'Cloud & Hyperscale Infrastructure',
      subtitle: 'AI-ready capacity for cloud providers and hyperscalers — liquid-cooled modules, high-density power and OEM supply of critical infrastructure.',
      bannerImage: '/industry/industry-cloud-1920.webp',
      alt: 'Cloud infrastructure visualization',
      ctaPrimary: 'Talk to an Expert',
      ctaSecondary: 'Explore AI Data Centers',
      ctaSecondaryLink: '/solutions/data-center-solutions/ai-data-center/',
    },
    pains: {
      eyebrow: 'The Challenge',
      title: 'What Cloud & Hyperscale Builders Face',
      text: 'AI workloads rewrite the rules of density, speed and supply — here is what builders face.',
      items: [
        { title: 'AI Density Demands', text: 'GPU clusters push past 100kW per rack. Air cooling is no longer enough — liquid cooling is a prerequisite.' },
        { title: 'Rapid Capacity Cycles', text: 'Capacity doubles faster than construction. Prefabricated, liquid-cooled modules compress timelines.' },
        { title: 'Supply Chain Certainty', text: 'OEM/ODM partners must deliver consistent, tested equipment at scale with predictable lead times.' },
      ],
    },
    products: {
      eyebrow: 'What We Deliver',
      title: 'AI-Ready Infrastructure',
      text: 'High-density power, liquid cooling and modular halls engineered for AI workloads.',
      ctaLabel: 'View Details',
      items: [
        { title: 'AI Data Centers', text: 'Prefabricated AI infrastructure with liquid cooling up to 120kW/rack.', path: '/solutions/data-center-solutions/ai-data-center/' },
        { title: 'AICoolit Liquid Cooling', text: 'Direct-to-chip and CDU liquid cooling solutions for GPU clusters.', path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
        { title: 'UPS & Power', text: 'High-efficiency UPS and power distribution for dense compute.', path: '/products/critical-power/uninterruptible-power-supplies/' },
      ],
    },
    need: {
      title: 'Build AI Capacity at Hyperscale Speed',
      text: 'Tell us your rack density and timeline — we engineer liquid-cooled, factory-tested capacity ready for compute on arrival.',
      cta: 'Request a Quote',
    },
  },

  internet: {
    hero: {
      eyebrow: 'Internet Platforms',
      title: 'Infrastructure for Internet Platforms',
      subtitle: 'Self-built data centers and edge nodes for internet and technology companies — fast, efficient and scalable.',
      bannerImage: '/industry/industry-internet-1920.webp',
      alt: 'Global internet connectivity',
      ctaPrimary: 'Talk to an Expert',
      ctaSecondary: 'View Row Modular DC',
      ctaSecondaryLink: '/solutions/data-center-solutions/row-modular-data-center/',
    },
    pains: {
      eyebrow: 'The Challenge',
      title: 'What Internet Platforms Face',
      text: 'Platform growth tests infrastructure every day. These are the constraints that bite.',
      items: [
        { title: 'Fast Scaling', text: 'User growth demands capacity on short cycles. Prefabricated modules deploy in weeks.' },
        { title: 'Operational Efficiency', text: 'Energy cost is the biggest lever. Efficient cooling and smart power cut OPEX.' },
        { title: 'Distributed Edge', text: 'Content and services move to the edge. Small-format modules fit POPs and regional nodes.' },
      ],
    },
    products: {
      eyebrow: 'What We Deliver',
      title: 'Platform Infrastructure',
      text: 'Modular data centers and edge solutions for internet companies building their own capacity.',
      ctaLabel: 'View Details',
      items: [
        { title: 'Row Modular DCs', text: 'Single-cabinet and row systems for edge and small IT rooms.', path: '/solutions/data-center-solutions/row-modular-data-center/' },
        { title: 'Containerized DCs', text: 'Rapidly deployable containers for capacity and POP expansion.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'Rack & Enclosures', text: 'Server racks and outdoor enclosures for every site type.', path: '/products/racks-enclosures/racks-cabinets/' },
      ],
    },
    need: {
      title: 'Scale Your Platform Without Construction Delays',
      text: 'Describe your capacity needs — we deliver modular, factory-tested infrastructure that goes live in weeks.',
      cta: 'Start Your Project',
    },
  },

  finance: {
    hero: {
      eyebrow: 'Financial Services',
      title: 'Resilient Infrastructure for Financial Services',
      subtitle: 'High-availability power and cooling for banks, exchanges and trading systems — where a second of downtime has a price.',
      bannerImage: '/industry/industry-finance-1920.webp',
      alt: 'Financial district skyline',
      ctaPrimary: 'Talk to an Expert',
      ctaSecondary: 'View UPS Systems',
      ctaSecondaryLink: '/products/critical-power/uninterruptible-power-supplies/',
    },
    pains: {
      eyebrow: 'The Challenge',
      title: 'What Financial Institutions Face',
      text: 'In financial services, infrastructure failure is measured in money. These are the stakes.',
      items: [
        { title: 'Zero Tolerance for Downtime', text: 'Transactions and trading run around the clock. N+1 redundancy and high-availability topology are baseline.' },
        { title: 'Regulatory Compliance', text: 'Audits demand documented, resilient infrastructure. Factory-tested systems simplify certification.' },
        { title: 'Latency & Density', text: 'Trading and AI analytics push density. Precision cooling keeps latency-sensitive workloads cool.' },
      ],
    },
    products: {
      eyebrow: 'What We Deliver',
      title: 'Mission-Critical Power & Cooling',
      text: 'Redundant, efficient infrastructure built for always-on financial workloads.',
      ctaLabel: 'View Details',
      items: [
        { title: 'UPS Systems', text: 'Double-conversion UPS with N+1 and 2N configurations.', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { title: 'Precision Cooling', text: 'Room and row cooling for predictable thermal environments.', path: '/solutions/data-center-cooling-solutions/' },
        { title: 'Monitoring & Management', text: 'DCIM and monitoring for full infrastructure visibility.', path: '/products/monitoring-management/' },
      ],
    },
    need: {
      title: 'Engineer for the Uptime Your Business Requires',
      text: 'Share your availability target — we configure redundant power and cooling that keeps your systems trading.',
      cta: 'Talk to an Engineer',
    },
  },

  government: {
    hero: {
      eyebrow: 'Government & Public Sector',
      title: 'Secure Infrastructure for Government',
      subtitle: 'Reliable, controlled data centers for public services and sensitive workloads — compliant, secure and dependable.',
      bannerImage: '/industry/industry-government-1920.webp',
      alt: 'Government administration building',
      ctaPrimary: 'Talk to an Expert',
      ctaSecondary: 'View Cabinet Modular DC',
      ctaSecondaryLink: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    pains: {
      eyebrow: 'The Challenge',
      title: 'What Public Sector Faces',
      text: 'Public services depend on infrastructure that simply does not fail. These are the requirements.',
      items: [
        { title: 'Security & Control', text: 'Sensitive data demands controlled environments and documented supply chains.' },
        { title: 'Reliability for Public Services', text: 'Citizen-facing services cannot go down. N+1 infrastructure and factory testing ensure continuity.' },
        { title: 'Budget Discipline', text: 'Public procurement favors predictable, compliant solutions with clear total cost.' },
      ],
    },
    products: {
      eyebrow: 'What We Deliver',
      title: 'Dependable Government Infrastructure',
      text: 'Compact, reliable data centers for public sector workloads.',
      ctaLabel: 'View Details',
      items: [
        { title: 'Cabinet Modular DCs', text: 'Self-contained modules for server rooms and small government DCs.', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: 'Containerized DCs', text: 'Phased, secure capacity for departments and agencies.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'UPS & Power', text: 'Redundant power for continuous public services.', path: '/products/critical-power/uninterruptible-power-supplies/' },
      ],
    },
    need: {
      title: 'Deliver Reliable Public Services',
      text: 'Tell us your requirements — we provide compliant, dependable infrastructure with predictable delivery.',
      cta: 'Start a Conversation',
    },
  },

  manufacturing: {
    hero: {
      eyebrow: 'Manufacturing',
      title: 'Edge Infrastructure for Manufacturing',
      subtitle: 'Resilient floor-level computing and industrial IoT infrastructure — built to run in the plant, not just the server room.',
      bannerImage: '/industry/industry-manufacturing-1920.webp',
      alt: 'Smart factory production line',
      ctaPrimary: 'Talk to an Expert',
      ctaSecondary: 'View Rack Cooling',
      ctaSecondaryLink: '/products/thermal-management/precision-air-conditioning/rack-cooling/',
    },
    pains: {
      eyebrow: 'The Challenge',
      title: 'What Manufacturers Face',
      text: 'The plant floor is the harshest environment for IT. These are the conditions to survive.',
      items: [
        { title: 'Harsh Environments', text: 'Dust, temperature swings and vibration demand rugged, protected IT enclosures.' },
        { title: 'Downtime Costs Production', text: 'Line stoppages cost money. Reliable power and cooling keep production data flowing.' },
        { title: 'Edge & AI Adoption', text: 'Industrial AI and IoT need local compute at the edge — compact and efficient.' },
      ],
    },
    products: {
      eyebrow: 'What We Deliver',
      title: 'Plant-Floor Infrastructure',
      text: 'Rugged power, cooling and enclosures engineered for industrial environments.',
      ctaLabel: 'View Details',
      items: [
        { title: 'Rack & Enclosure Cooling', text: 'Cooling for racks and outdoor enclosures in demanding conditions.', path: '/products/thermal-management/precision-air-conditioning/rack-cooling/' },
        { title: 'Outdoor Enclosures', text: 'Protected enclosures for edge compute in harsh sites.', path: '/products/racks-enclosures/outdoor-enclosures/' },
        { title: 'Row Modular DCs', text: 'Compact systems for plant-floor IT and edge.', path: '/solutions/data-center-solutions/row-modular-data-center/' },
      ],
    },
    need: {
      title: 'Keep Production Running',
      text: 'Share your plant environment — we deliver rugged, reliable edge infrastructure that survives the floor.',
      cta: 'Talk to an Engineer',
    },
  },

  healthcare: {
    hero: {
      eyebrow: 'Healthcare',
      title: 'Infrastructure for Healthcare',
      subtitle: 'Reliable edge and data center solutions for hospitals and regional health clouds — where availability protects patient care.',
      bannerImage: '/industry/industry-healthcare-1920.webp',
      alt: 'Modern hospital',
      ctaPrimary: 'Talk to an Expert',
      ctaSecondary: 'View Cabinet Modular DC',
      ctaSecondaryLink: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    pains: {
      eyebrow: 'The Challenge',
      title: 'What Healthcare Institutions Face',
      text: 'Clinical systems run around the clock. These are the realities of healthcare IT.',
      items: [
        { title: 'Patient Data Must Be Available', text: 'Clinical systems run 24/7. Reliable infrastructure is part of patient safety.' },
        { title: 'Data Governance', text: 'Health data demands local processing and controlled environments.' },
        { title: 'Space & Integration', text: 'Hospitals are space-constrained. Compact modules fit existing buildings without major construction.' },
      ],
    },
    products: {
      eyebrow: 'What We Deliver',
      title: 'Healthcare-Grade Infrastructure',
      text: 'Compact, reliable power and cooling for hospitals and regional health clouds.',
      ctaLabel: 'View Details',
      items: [
        { title: 'Cabinet Modular DCs', text: 'Compact data centers for hospital server rooms.', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: 'UPS Systems', text: 'Continuous power for clinical applications.', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { title: 'Precision Cooling', text: 'Predictable cooling for medical IT environments.', path: '/solutions/data-center-cooling-solutions/' },
      ],
    },
    need: {
      title: 'Protect the Care You Deliver',
      text: 'Tell us about your facility — we provide reliable, space-efficient infrastructure for your clinical systems.',
      cta: 'Start Your Project',
    },
  },
};
