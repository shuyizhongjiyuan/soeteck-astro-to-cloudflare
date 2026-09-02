// Aisle Modular Data Center solution content data

export const AISLE_OVERVIEW_PARAGRAPHS = [
  '<strong>Aisle modular data centers</strong> are prefabricated, self-contained IT rooms. Power, cooling, and monitoring are integrated into a single unit, so the system runs enterprise workloads without a custom building. On-site setup is minimal because each module is factory-assembled and tested.',
  'SOETECK designs these rooms for incremental growth. You start with one aisle and extend it as demand climbs, adding racks and cooling without disturbing the existing footprint. Capacity stays close to real load, which keeps both spending and energy use under control.',
  'Against build-to-suit construction, an aisle modular data center stands up faster and costs less to deliver. It suits edge computing, enterprise expansion, and time-limited capacity. The plug-and-play design keeps reliability at data center grade, and monitoring is accessible remotely from any site.',
];

export const AISLE_HOTSPOTS = [
  { label: 'Outdoor Condenser', x: '14.4%', y: '51.8%' },
  { label: 'Monitoring Module', x: '30.4%', y: '31.8%' },
  { label: 'Temperature and Humidity Sensor', x: '32.4%', y: '56.8%' },
  { label: 'Leak Detection', x: '36.4%', y: '61.8%' },
  { label: 'Smoke Sensor', x: '39.4%', y: '37.8%' },
  { label: 'In-Row Cooling', x: '44.9%', y: '51.8%' },
  { label: 'Server Cabinet', x: '55.4%', y: '53.8%' },
  { label: 'Power Distribution', x: '64.4%', y: '41.8%' },
  { label: 'UPS', x: '69.4%', y: '61.8%' },
  { label: 'Battery', x: '74.4%', y: '50.8%' },
];

export const AISLE_HOTSPOT_IMAGE: string = '/resources/4-1024x768.png';

export const AISLE_CORE_MODULES = [
  { title: 'Efficient Cooling Module', text: 'Thermal Management and heat dissipation', icon: 'snowflake' },
  { title: 'Intelligent Power Distribution', text: 'Power supply distribution and management', icon: 'bolt' },
  { title: 'Safety Protection System', text: 'Fire protection and physical security', icon: 'shield' },
  { title: 'Intelligent Monitoring System', text: 'Operational status monitoring', icon: 'chart' },
];

export const AISLE_MODEL_VIEWS = [
  {
    title: 'Cold Aisle Modular Data Center',
    images: [
      '/resources/4-1024x768.png',
      '',  // 待上传图片
      '',  // 待上传图片
    ],
  },
  {
    title: 'Hot Aisle Modular Data Center',
    images: [
      '/resources/4-1024x768.png',
      '',  // 待上传图片
      '',  // 待上传图片
    ],
  },
];

// Critical Power & Thermal Management (reused from row-modular-content.ts)
// 顶层字符串显式标注 string：语言文件字面量不同，保证 Record<string, typeof C_EN> 可赋值
export const AISLE_CRITICAL_POWER_TEXT: string =
  'The SOETECK aisle modular data center solution incorporates an efficient power distribution system, featuring a range of rack-mounted UPS units and custom-designed distribution modules. Customers can choose from either rack-mounted lithium batteries or lead-acid batteries to suit their needs. We also offer tailored UPS selection services, along with comprehensive distribution design and manufacturing.';

export const AISLE_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'SY-RT Series (1-3kVA) UPS',
    subtitle: 'Online High-frequency UPS, 1kVA-3kVA, PF1',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-high-frequency-online-ups-1kva-3kva-rack-tower-mounted-pf1',
    excerpt: 'The SY-RT Series UPS, 1-3kVA, delivers reliable online double-conversion protection with PF1 output, wide input voltage range of 110-300VAC, and compact rack/tower design. It achieves 96% efficiency in ECO mode with 0ms transfer time.',
    specs: ['PF1 efficiency', '0ms transfer time', '110-300VAC range', '96% efficiency in ECO mode'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF11.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF12.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF13.webp',
    ],
  },
  {
    title: 'SY-RT Series (1-10kVA) UPS',
    subtitle: 'Online High-frequency UPS, 1kVA-10kVA, PF0.9',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-winner-pro-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted-pf0-9',
    excerpt: 'The SOETECK SY-RT Winner Pro Series UPS, 1-10kVA, offers reliable online protection with PF0.9 output, wide input voltage range, and flexible rack/tower mounting for versatile deployment in aisle modular data center applications.',
    specs: ['PF0.9 efficiency', 'Online double-conversion', 'Rack/tower mounting', 'Wide input range'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-2.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-4.webp',
    ],
  },
  {
    title: 'SY-RT Series (1-10kVA) UPS',
    subtitle: 'Online High-frequency UPS, 1kVA-10kVA, PF0.8',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted',
    excerpt: 'The SY-RT Series UPS, 1-10kVA, offers reliable online UPS protection with PF0.8, up to 93% efficiency, and flexible rack/tower mounting for versatile deployment. Ideal for protecting critical equipment in data center and enterprise environments.',
    specs: ['PF0.8', 'Up to 93% efficiency', 'Rack & tower mounted', 'Flexible configuration'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-4.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-2.webp',
    ],
  },
];

export const AISLE_THERMAL_MANAGEMENT_TEXT: string =
  'SOETECK offers comprehensive cooling solutions tailored for data centers and base stations, including room-level, row-level, and rack-level precision air conditioning systems. To effectively address the cooling demands of high-density computing applications within individual cabinets, our rack-level and row-level precision air conditioning systems are designed for efficiency and cost-effectiveness.';

export const AISLE_THERMAL_PRODUCTS = [
  {
    title: 'DX Air-cooled In-Row Cooling',
    subtitle: '5.6kW – 90.1kW Capacity',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-in-row-cooling-system-5-6kw-90-1kw-capacity',
    excerpt: 'In-row precision cooling system for efficient row-level thermal management.',
    specs: ['5.6kW-90.1kW range', 'Air-cooled DX', 'In-row installation', 'Precision control'],
    images: [
      '/resources/SOETECK-air-cooled-in-row-cooling-system-5.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-6.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-3.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-4.webp',
    ],
  },
  {
    title: 'DX Air-cooled Room Cooling',
    subtitle: '32.5kW – 120kW Capacity',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-room-cooling-system-32-5kw-120kw-capacity-up-down-flow',
    excerpt: 'Room-level precision cooling with up/down flow configurations.',
    specs: ['32.5kW-120kW range', 'Up/Down flow config', 'Air-cooled DX', 'Room-level precision'],
    images: [
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-1.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-2.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-5.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-6.webp',
    ],
  },
  {
    title: 'Packaged Rack Cooling',
    subtitle: '3.5kW Capacity, 8U',
    slug: 'thermal-management/precision-air-conditioning/soeteck-packaged-rack-cooling-system-3-5kw-capacity-8u-bottom-or-middle-mounted',
    excerpt: 'Compact rack cooling system with R410A refrigerant and BMS integration.',
    specs: ['3.5kW cooling', 'Bottom or middle mounted', 'R410A refrigerant', 'BMS integration'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
];

export const AISLE_SPEC_COLUMNS = [
  { model: 'SY-AMDC-10', image: '/resources/cabinet-modular-data-center-31.webp' },
  { model: 'SY-AMDC-20', image: '/resources/cabinet-modular-data-center-41.webp' },
  { model: 'SY-AMDC-40', image: '/resources/cabinet-modular-data-center-51.webp' },
  { model: 'Customized', image: '/resources/cabinet-modular-data-center-61.webp' },
];

export const AISLE_SPEC_ROWS = [
  ['Configuration', '10 Racks', '20 Racks', '40 Racks', 'Customized'],
  ['Rack Size', '600×1000mm', '600×1000mm', '600×1000mm', 'Customized'],
  ['Rack Capacity', '42U', '42U', '42U', 'Customized'],
  ['Max Power per Rack', '8kW', '10kW', '12kW', 'Customized'],
  ['Total IT Capacity', '80kW', '200kW', '480kW', 'Customized'],
  ['Cooling Type', 'In-Row DX/Chilled Water', 'In-Row DX/Chilled Water', 'In-Row DX/Chilled Water', 'Customized'],
  ['Containment', 'Hot/Cold Aisle', 'Hot/Cold Aisle', 'Hot/Cold Aisle', 'Customized'],
  ['PUE', '≤1.4', '≤1.35', '≤1.3', 'Customized'],
];

export const AISLE_SCENARIOS = [
  {
    title: 'Small Server Rooms',
    image: '/resources/enterprise-small-computer-room-1.webp',
    pain_points: ['Space constraints', 'Understaffed IT', 'Complex maintenance'],
    benefits: ['Compact design', 'Integrated monitoring', 'Gradual expansion'],
    problem: 'Small enterprise server rooms suffer from space constraints that limit new equipment addition. Understaffed IT teams struggle with complex maintenance, while scattered devices and tangled cables reduce management efficiency.',
    solution: 'Our compact design maximizes space use. An integrated monitoring system centralizes device management to cut manual work. Supporting gradual expansion from a few cabinets, it avoids large upfront investments.',
    application: 'Enterprise IT rooms, branch offices',
  },
  {
    title: 'Edge Computing Sites',
    image: '/resources/Edge-Computing.webp',
    pain_points: ['Remote location', 'Harsh environment', 'Limited on-site staff'],
    benefits: ['Wide-temp design', 'Remote monitoring', 'Energy efficient'],
    problem: 'Edge sites in remote areas have poor infrastructure, with large temperature/humidity fluctuations causing frequent device failures. Limited on-site technicians delay issue responses.',
    solution: 'Our wide-temperature design ensures stability between -10℃ and 40℃. Built-in remote monitoring enables unmanned operation. Optimized cooling cuts energy use by 30% and supports solar power.',
    application: 'Remote drilling sites, mining operations',
  },
  {
    title: 'Data Center Expansion',
    image: '/resources/Data-Center-Expansion.webp',
    pain_points: ['Long planning cycles', 'Deployment downtime', 'Compatibility issues'],
    benefits: ['Plug-and-play', 'Parallel expansion', 'Auto-balancing'],
    problem: 'Traditional expansion involves lengthy planning and construction. New equipment installation often requires downtime, risking business continuity.',
    solution: 'Factory-prefabricated modules enable plug-and-play deployment, slashing setup time by over 70%. Parallel expansion avoids disrupting existing operations.',
    application: 'Cloud data centers, enterprise IT expansion',
  },
  {
    title: 'Multi-branch Offices',
    image: '/resources/branch-office-1.webp',
    pain_points: ['No dedicated IT', 'Remote monitoring', 'Scattered locations'],
    benefits: ['Multi-level alarms', 'Remote platform', 'Redundant design'],
    problem: 'Branch server rooms lack dedicated IT staff, making real-time equipment monitoring difficult. Faults go unaddressed promptly, risking business disruptions.',
    solution: 'Comprehensive monitoring triggers multi-level alarms for abnormalities. Remote platforms handle most daily management and troubleshooting.',
    application: 'Bank branches, retail chains',
  },
  {
    title: 'Temporary Events',
    image: '/resources/Temporary-Deployment-Needs-1.webp',
    pain_points: ['Rapid setup needed', 'No on-site infra', 'Post-event teardown'],
    benefits: ['Hour-level setup', 'Self-contained', 'Reusable'],
    problem: 'Temporary scenarios demand rapid IT setup, but traditional equipment installation is complex and slow. Venues often lack stable power/cooling.',
    solution: 'Modular design allows system setup within hours. Integrated power and cooling units operate independently of on-site infrastructure.',
    application: 'Exhibitions, emergency response',
  },
  {
    title: 'R&D Laboratories',
    image: '/resources/Laboratory-RD-Environments.webp',
    pain_points: ['Frequent reconfiguration', 'Varying power needs', 'Cable management'],
    benefits: ['Flexible modules', 'Pre-integrated cabling', 'Standardized interfaces'],
    problem: 'R&D labs need frequent equipment/layout adjustments, which fixed traditional rooms can\'t accommodate. Varying power/cooling needs across test scenarios.',
    solution: 'Modular components support flexible reconfiguration and mode switching for testing needs. Pre-integrated cabling keeps the environment organized.',
    application: 'Research labs, test facilities',
  },
];

export const AISLE_CLIENT_CASES = [
  {
    imgSrc: '/resources/Qatar-containerized-data-center-768x385.webp',
    title: 'GRD Qatar Gets 24/7 Stable Data via Soeteck\'s Custom Containerized Data Center',
    slug: 'grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center',
    desc: 'Background Amid the global digitalization wave, GRD Company—an enterprise advancing full digital transformation—views data as a core strategic asset. To…',
  },
  {
    imgSrc: '/resources/prefab-modular-data-center-of-Saudi-Telecom-6-768x512.webp',
    title: 'Driving Innovation: SOETECK Provides Saudi Telecom with Advanced Mobile OLT Container Data Center Solutions',
    slug: 'driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions',
    desc: 'The DR project for Saudi Telecom was initiated to design and implement a fully customizable mobile OLT (Optical Line Terminal) container data center, enhancing…',
  },
  {
    imgSrc: '/resources/Data-center-for-Satellite-Solutions-in-Singapore-1-768x441.webp',
    title: 'WebSat Media Optimizes Data Center Infrastructure with SOETECK\'s Cooling Solutions',
    slug: 'websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions',
    desc: 'WebSat, founded in 2000 and headquartered in Singapore, is a global leader in providing satellite, broadcast, fixed, and wireless telecommunication infrastructure, software solutions, and…',
  },
];

// ---- Page chrome & section copy (moved from AisleModularPage.astro hardcode, Batch 3 i18n) ----

export const AISLE_PAGE_HERO = {
  title: 'Aisle Modular Data Center',
  imageAlt: 'Aisle modular data center',
};

export const AISLE_OVERVIEW_HEADING: string = 'Modular IT Rooms, Ready to Scale';

export const AISLE_VIDEO = {
  playAriaLabel: 'Play Aisle Modular Data Center video',
  imageAlt: 'Aisle modular data center video preview',
  fallbackTitle: 'Soeteck solution video',
};

export const AISLE_ACTIONS = {
  getBrochure: 'GET BROCHURE',
  contactUs: 'CONTACT US',
};

export const AISLE_CLOSER_HEADING: string = 'Inside the Aisle Modular Data Center';

export const AISLE_TYPICAL_DESIGN = {
  title: 'Typical Aisle Containment Design',
  imageAlt: 'Typical aisle modular data center design',
  intro: 'The aisle modular data center utilizes hot/cold aisle containment to optimize airflow and cooling efficiency. This design separates hot exhaust air from cold intake air, significantly reducing energy consumption and improving overall system performance.',
  keyFeaturesLabel: 'Key Features:',
  features: [
    'Hot/Cold Aisle Containment: Separates hot and cold air streams for maximum cooling efficiency.',
    'Scalable Architecture: Modular design allows capacity to grow with demand.',
    'High Density Support: Accommodates high-power computing equipment up to 15kW+ per rack.',
    'Energy Efficient: PUE ratings as low as 1.3 with proper configuration.',
    'Intelligent Monitoring: Real-time environmental and power monitoring for optimal operations.',
  ],
};

export const AISLE_MODELS_SECTION = {
  title: 'Meet with two typical models',
  intro: 'SOETECK aisle modular data centers are available in various configurations to match different capacity requirements. From cold aisle containment for standard deployments to hot aisle containment for high-density environments, we offer flexible solutions for every need.',
};

export const AISLE_MODULES_SECTION = {
  title: 'Core Infrastructure Modules',
  lead: 'The SOETECK aisle modular data center solution consists of several key components, including the cabinet system, thermal control system, critical power supply, security system and dynamic environment system.',
};

export const AISLE_PRODUCT_GROUPS = {
  criticalPower: 'Critical Power',
  thermalManagement: 'Thermal Management',
  galleryAria: 'gallery',
};

export const AISLE_SPECS_SECTION = {
  heading: 'Featured Models',
  modelsColumn: 'Models',
  pdfLinkLabel: 'SOETECK Aisle Modular Data Center.pdf',
};

export const AISLE_SCENARIOS_SECTION = {
  heading: 'Who Needs a Modular Data Center?',
  subtitle: 'Application Scenarios: An integration of Power, Cooling & Infrastructure Modules Supporting Reliable IT Operations – Where Aisle Modular DC Delivers Unique Value',
  benefitsTab: 'Solution Benefits',
  painPointsTab: 'Critical Pain Points',
  detailsAria: 'details',
};

export const AISLE_CASES_HEADING: string = 'Aisle Modular Data Center Case Studies';

export const AISLE_CTA = {
  eyebrow: 'Talk to an Engineer',
  title: 'Get in Touch with SOETECK',
  text: 'Share your facility requirements and get a practical solution path. Tell us your project type, capacity needs, and timeline — our team will help identify the right configuration.',
  checks: ['Project consultation', 'Technical configuration support', 'Regional follow-up'],
  contactUs: 'Contact Us',
  downloadBrochure: 'Download Brochure',
};
