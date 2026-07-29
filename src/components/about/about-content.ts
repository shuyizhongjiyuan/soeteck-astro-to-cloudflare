/**
 * About page content — English base + type definition.
 *
 * Image/path constants are shared across all languages.
 * Language-specific text files (about-content-zh.ts, etc.) export the same
 * AboutContent shape.
 *
 * @package Soeteck\Astro
 */

// ---------------------------------------------------------------------------
// Shared asset constants (not language-dependent)
// ---------------------------------------------------------------------------

export const ABOUT_HERO_FALLBACK = {
  path: '/resources/soeteck-factory-about-banner.webp',
  alt: 'SOETECK factory and critical infrastructure manufacturing',
};

export const ABOUT_WORLD_MAP = {
  path: '/resources/world.svg',
  alt: 'SOETECK global network map',
};

export const FACTORY_IMAGES = [
  { path: '/resources/soeteck-factory-1.jpg', alt: 'SOETECK factory in Hefei China' },
  { path: '/resources/soeteck-factory-2.jpg', alt: 'SOETECK manufacturing facility' },
  { path: '/resources/soeteck-factory-3.jpg', alt: 'SOETECK production and testing area' },
  { path: '/resources/soeteck-factory-4.jpg', alt: 'SOETECK factory proof photo' },
  { path: '/resources/soeteck-factory-5.jpg', alt: 'SOETECK critical infrastructure equipment factory' },
];

export const CERTIFICATE_IMAGES = [
  { path: '/resources/Soeteck-ISO9001-1.webp', alt: 'SOETECK ISO9001 certificate' },
  { path: '/resources/Soeteck-ISO14001-1.webp', alt: 'SOETECK ISO14001 certificate' },
  { path: '/resources/Soeteck-ISO45001-1.webp', alt: 'SOETECK ISO45001 certificate' },
  { path: '/resources/Soeteck-CE-Certificates-for-PAC-1.webp', alt: 'SOETECK CE certificate for precision air conditioning' },
  { path: '/resources/Soeteck-CE-Certificates-for-PAC-2.webp', alt: 'SOETECK CE certificate for precision air conditioning' },
  { path: '/resources/Soeteck-CE-Certificates-for-UPS.webp', alt: 'SOETECK CE certificate for UPS' },
];

// ---------------------------------------------------------------------------
// Text content type
// ---------------------------------------------------------------------------

export interface IntroProofs {
  proofs: string[];
}

export interface SolutionScope {
  title: string;
  text: string;
}

export interface TrustMetric {
  value: string;
  label: string;
  text: string;
}

export interface ServiceCard {
  eyebrow: string;
  title: string;
  text: string;
}

export interface ProjectStep {
  eyebrow: string;
  title: string;
  text: string;
}

export interface NetworkNode {
  eyebrow: string;
  title: string;
  text: string;
}

export interface Milestone {
  year: string;
  event: string;
}

export interface AboutContent {
  heroEyebrow: string;
  lead: string;
  introEyebrow: string;
  introTitle: string;
  introP1: string;
  introP2: string;
  introProofs: string[];
  deliverEyebrow: string;
  deliverTitle: string;
  deliverText: string;
  deliverCards: SolutionScope[];
  proofEyebrow: string;
  proofTitle: string;
  trustCards: TrustMetric[];
  serviceEyebrow: string;
  serviceTitle: string;
  serviceCards: ServiceCard[];
  factoryEyebrow: string;
  factoryTitle: string;
  factoryP1: string;
  factoryP2: string;
  factoryCapabilities: string[];
  processEyebrow: string;
  processTitle: string;
  processText: string;
  processCards: ProjectStep[];
  networkCards: NetworkNode[];
  milestones: Milestone[];
  timelineEyebrow: string;
  timelineTitle: string;
  timelineText: string;
  visionLabel: string;
  visionText: string;
  missionLabel: string;
  missionText: string;
  certificatesEyebrow: string;
  certificatesTitle: string;
  certificatesText: string;
  certificatesPoints: string[];
  networkEyebrow: string;
  networkTitle: string;
  networkText: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  ctaChecks: string[];
  ctaButton: string;
}

// ---------------------------------------------------------------------------
// English text
// ---------------------------------------------------------------------------

export const ABOUT_EN: AboutContent = {
  heroEyebrow: 'Critical Infrastructure Manufacturer',
  lead: 'SOETECK is a professional manufacturer of critical infrastructure solutions in China, specializing in critical power and precision cooling systems for data centers and Telecom.',

  introEyebrow: 'Who We Are',
  introTitle: 'Power and cooling infrastructure built for critical environments.',
  introP1: 'SOETECK, also known as SHUYI in Chinese, is a professional manufacturer of critical infrastructure solutions in China, specializing in critical power and precision cooling systems for data centers and telecom.',
  introP2: 'We design and supply integrated data center solutions, including prefabricated containerized, micro modular, and rack data centers. Our products include precision air conditioners, UPS systems, PDUs, VRLA batteries, and other equipment used in critical environments.',
  introProofs: [
    'Hefei manufacturing base',
    'Critical power and precision cooling focus',
    'Data center and telecom applications',
    'Global project and partner support',
  ],

  deliverEyebrow: 'What We Deliver',
  deliverTitle: 'Critical infrastructure systems buyers can evaluate in one place.',
  deliverText: 'SOETECK helps customers combine power, cooling, data center, telecom, and supporting infrastructure into practical configurations for real project conditions.',
  deliverCards: [
    { title: 'Critical Power', text: 'UPS systems, DC power systems, batteries, PDUs, and power distribution for continuous operation.' },
    { title: 'Precision Cooling', text: 'Room, row, and rack cooling solutions for data centers, telecom rooms, and critical equipment spaces.' },
    { title: 'Modular Data Centers', text: 'Prefabricated containerized, micro modular, and rack data center solutions for fast deployment.' },
    { title: 'Telecom Infrastructure', text: 'Power and cooling systems configured for telecom sites, edge rooms, and distributed infrastructure.' },
    { title: 'Racks & Enclosures', text: 'Cabinets, racks, containment, and supporting equipment for organized critical infrastructure deployment.' },
    { title: 'OEM / ODM Configuration', text: 'Configured systems and manufacturing support for regional brands, channel partners, and project-specific requirements.' },
  ],

  proofEyebrow: 'Why Buyers Trust SOETECK',
  proofTitle: 'A manufacturing-backed partner for power, cooling, and data center infrastructure.',
  trustCards: [
    { value: '2012', label: 'Founded', text: 'Long-term focus on critical infrastructure equipment, manufacturing, and integrated solution delivery.' },
    { value: '50+', label: 'Countries', text: 'Branch, office, and partner coverage helps international buyers communicate requirements and coordinate projects.' },
    { value: '86', label: 'Markets', text: 'Project experience spans data center, telecom, industrial, and commercial critical environments.' },
    { value: 'Power + Cooling', label: 'Integrated Scope', text: 'Buyers can align UPS, precision cooling, power distribution, batteries, racks, and modular data center systems through one solution path.' },
  ],

  serviceEyebrow: 'How We Reduce Project Risk',
  serviceTitle: 'Support that helps buyers move from requirements to reliable operation.',
  serviceCards: [
    { eyebrow: '01 / Consultation', title: 'Clarify requirements before specifications are locked.', text: 'Solution specialists help review load, redundancy, cooling, installation, and project constraints early in the buying process.' },
    { eyebrow: '02 / Engineering', title: 'Configure systems around real site conditions.', text: 'Power, cooling, rack, and modular data center systems can be aligned with application, capacity, environment, and OEM/ODM needs.' },
    { eyebrow: '03 / Manufacturing', title: 'Control quality through factory testing and process discipline.', text: 'Manufacturing, inspection, and documented testing help reduce project risk before equipment leaves the factory.' },
    { eyebrow: '04 / Support', title: 'Support delivery, commissioning, and long-term operation.', text: 'Project teams receive technical documentation, responsive communication, and after-sales support for critical operating environments.' },
  ],

  factoryEyebrow: 'Manufacturing & Testing Capability',
  factoryTitle: 'Factory-backed production and validation for critical infrastructure systems.',
  factoryP1: 'At SOETECK, product innovation and research are supported by advanced facilities that include laboratories for electromagnetic compatibility, enthalpy difference analysis, environmental reliability, noise and vibration testing, power measurement, and IP protection.',
  factoryP2: 'These facilities help us verify that critical infrastructure products meet demanding performance and reliability standards before they enter the field.',
  factoryCapabilities: [
    'Electromagnetic compatibility testing',
    'Enthalpy difference laboratory validation',
    'Environmental reliability testing',
    'Noise and vibration testing',
    'Power measurement and verification',
    'IP protection testing support',
  ],

  processEyebrow: 'How We Support Your Project',
  processTitle: 'A clear path from inquiry to operation support.',
  processText: 'International infrastructure buyers need more than product names. SOETECK helps turn project requirements into a configuration, proposal, manufacturing plan, delivery coordination, and support path.',
  processCards: [
    { eyebrow: '01', title: 'Requirement review', text: 'Share facility type, load, cooling demand, redundancy target, site conditions, and project region.' },
    { eyebrow: '02', title: 'Solution configuration', text: 'Engineers align products, capacity, layout, environmental conditions, and integration requirements.' },
    { eyebrow: '03', title: 'Technical proposal', text: 'Receive configuration guidance, quotation support, technical documents, and project communication.' },
    { eyebrow: '04', title: 'Manufacturing & testing', text: 'Factory production, inspection, and validation help confirm performance before shipment.' },
    { eyebrow: '05', title: 'Delivery coordination', text: 'Project teams support documentation, delivery communication, and installation readiness.' },
    { eyebrow: '06', title: 'After-sales support', text: 'Technical support continues after delivery for commissioning, operation, and long-term service needs.' },
  ],

  networkCards: [
    { eyebrow: 'Hefei, China', title: 'Manufacturing Base', text: 'Industrial base supporting production, testing, and delivery of critical power and cooling equipment.' },
    { eyebrow: 'Shenzhen, China', title: 'Industry Base', text: 'Regional industry presence connected to power electronics and infrastructure solution development.' },
    { eyebrow: 'UAE', title: 'Regional Partner Presence', text: 'Partner ecosystem supporting Middle East project communication and market coverage.' },
    { eyebrow: 'Malaysia', title: 'Soteck Malaysia Sdn. Bhd.', text: 'Local network node supporting Southeast Asia communication and solution coordination.' },
    { eyebrow: 'Partner Brand', title: 'Fiber Ocean', text: 'Partner and brand ecosystem reference from SOETECK group and market presentation materials.' },
  ],

  milestones: [
    { year: '2024', event: 'Completion of Hefei Manufacturing Base' },
    { year: '2023', event: 'Supplier for Major Telecom Corp.' },
    { year: '2022', event: 'Joint Venture Formation in UAE' },
    { year: '2020', event: 'Exporting Data Center Solutions' },
    { year: '2018', event: 'Introduction of UPS Solutions' },
    { year: '2016', event: 'Power Solutions for Telecom' },
    { year: '2014', event: 'Launch of PAC Production and Sales' },
    { year: '2012', event: 'Foundation of SOETECK' },
  ],

  timelineEyebrow: 'Our Journey',
  timelineTitle: 'Milestones shaped by data center and telecom infrastructure demand.',
  timelineText: 'SOETECK has continued to expand from focused manufacturing into global infrastructure solutions, combining technical expertise with production capability and international service support.',
  visionLabel: 'Vision',
  visionText: 'Empowering global clients as the world\'s premier digital power infrastructure partner',
  missionLabel: 'Mission',
  missionText: 'Driving digital power innovation to build a green intelligent future for the Internet of Everything',

  certificatesEyebrow: 'Featured Certificates',
  certificatesTitle: 'Quality systems for safety, sustainability, and excellence.',
  certificatesText: 'We maintain rigorous quality and environmental management practices, including ISO9001, ISO14001, ISO45001, and product certifications such as CE, reinforcing our commitment to international standards.',
  certificatesPoints: [
    'Quality management systems',
    'Environmental management practice',
    'Occupational health and safety',
    'CE product compliance references',
  ],

  networkEyebrow: 'Global Network & Industrial Partners',
  networkTitle: 'Regional presence and partner coverage for international infrastructure projects.',
  networkText: 'With branches and offices in over 50 countries and a presence in 86 markets, SOETECK combines manufacturing capability with regional communication channels and partner relationships.',

  ctaEyebrow: 'Talk to an Engineer',
  ctaTitle: 'Get in Touch with SOETECK',
  ctaText: 'Share your facility requirements and get a practical solution path. Tell us your project type, capacity needs, and timeline — our team will help identify the right configuration.',
  ctaChecks: ['Project consultation', 'Technical configuration support', 'Regional follow-up'],
  ctaButton: 'Request Project Consultation',
};