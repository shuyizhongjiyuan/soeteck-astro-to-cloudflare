// Prefabricated Container Data Center solution content data

export const PREFAB_OVERVIEW_PARAGRAPHS = [
  '<strong>Container data centers</strong> get compute in place faster than a conventional build does. Because the architecture is prefabricated and modular, a deployment can be sized and customized for the site, then adapted as needs change.',
  'SOETECK\'s prefabricated containerized data centers keep operating costs down through tighter power management and thermal control. Units are flexible and scalable, and because we engineer each one with the customer, it is shaped to the actual workload rather than a generic spec.',
  'For SMBs this approach is also cost-effective: our service-led model lets us beat Huawei on price without sacrificing support. When a project grows, our supply chain still handles large-scale builds. See the <a href="/{lang}/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/">DR project for Saudi Telecom</a>, where we refined the design in close dialogue with the client.',
];

export const PREFAB_HOTSPOTS = [
  { label: 'Outdoor Condenser', x: '13%', y: '50%' },
  { label: 'Monitoring Module', x: '29%', y: '30%' },
  { label: 'Temperature and Humidity Sensor', x: '31%', y: '55%' },
  { label: 'Leak Detection', x: '35%', y: '60%' },
  { label: 'Smoke Sensor', x: '38%', y: '36%' },
  { label: 'In-Row Cooling', x: '43.5%', y: '50%' },
  { label: 'Server Cabinet', x: '54%', y: '52%' },
  { label: 'Power Distribution', x: '63%', y: '40%' },
  { label: 'UPS', x: '68%', y: '60%' },
  { label: 'Battery', x: '73%', y: '49%' },
];

export const PREFAB_CORE_MODULES = [
  { title: 'Efficient Cooling Module', text: 'Thermal Management and heat dissipation', icon: 'snowflake' },
  { title: 'Intelligent Power Distribution', text: 'Power supply distribution and management', icon: 'bolt' },
  { title: 'Safety Protection System', text: 'Fire protection and physical security', icon: 'shield' },
  { title: 'Intelligent Monitoring System', text: 'Operational status monitoring', icon: 'chart' },
];

export const PREFAB_HOTSPOT_IMAGE: string = '/resources/container-data-center-3-1024x683.webp';

export const PREFAB_MODEL_VIEWS_20FT = [
  {
    title: 'Front View',
    image: '/resources/20ft-prefabricated-container-data-center-front-view-3-1024x683.webp',
    items: [
      { label: 'AC Outdoor Unit', text: 'Responsible for bringing in or expelling outdoor air, providing cooling and ventilation.', x: '15%', y: '45%' },
      { label: 'Hot Aisle', text: 'Serves as the area where hot air expelled from server equipment is concentrated.', x: '31%', y: '45%' },
      { label: 'Cold Aisle', text: 'The server faces the cold aisle, allowing cold air to flow directly to the equipment.', x: '60%', y: '40%' },
      { label: 'Fire System', text: 'Monitors and detects potential fire hazards.', x: '91%', y: '40%' },
    ],
  },
  {
    title: 'Top View',
    image: '/resources/20ft-prefabricated-container-data-center-top-view-3-1024x683.webp',
    items: [
      { label: 'IT Cabinet', text: 'Used to house and protect servers and other IT equipment.', x: '43%', y: '28%' },
      { label: 'In-Row Cooling', text: 'Cooling units positioned directly between server racks.', x: '77%', y: '28%' },
      { label: 'UPS', text: 'Provides temporary power during outages.', x: '77%', y: '47%' },
      { label: 'Battery Cabinet', text: 'Stores backup power, usually in conjunction with the UPS.', x: '77%', y: '60%' },
    ],
  },
];

export const PREFAB_MODEL_VIEWS_40FT = [
  {
    title: 'Front View',
    image: '/resources/20ft-prefabricated-container-data-center-front-view-3-1024x683.webp',
    items: [
      { label: 'AC Outdoor Unit', text: 'Responsible for bringing in or expelling outdoor air.', x: '15%', y: '45%' },
      { label: 'Hot Aisle', text: 'Serves as the area where hot air is concentrated.', x: '31%', y: '45%' },
      { label: 'Cold Aisle', text: 'The server faces the cold aisle.', x: '60%', y: '40%' },
      { label: 'Fire System', text: 'Monitors and detects potential fire hazards.', x: '91%', y: '40%' },
    ],
  },
  {
    title: 'Top View',
    image: '/resources/40ft-container-data-center-5-1024x683.webp',
    items: [
      { label: 'IT Cabinet', text: 'Used to house and protect servers and other IT equipment.', x: '30%', y: '43%' },
      { label: 'Hot Aisle', text: 'Serves as the area where hot air is concentrated.', x: '60%', y: '43%' },
      { label: 'Battery Cabinet', text: 'Stores backup power.', x: '78%', y: '42%' },
    ],
  },
];

export const PREFAB_SPEC_COLUMNS = [
  { model: 'SY-ICDC-10', image: '/resources/soeteck-container-dc-10ft.webp' },
  { model: 'SY-ICDC-20', image: '/resources/soeteck-container-dc-20ft.webp' },
  { model: 'SY-ICDC-40', image: '/resources/soeteck-container-dc-40ft.webp' },
  { model: 'SY-ICDC-X', image: '/resources/soeteck-container-dc-customized.webp' },
];

export const PREFAB_SPEC_ROWS = [
  ['Container Size', '10ft HQ', '20ft HQ', '40ft HQ', 'Customized'],
  ['Rack Specification', '600*1100*2000', '600*1100*2000', '600*1100*2000', 'Customized'],
  ['Single Rack Capacity', '42U', '42U', '42U', 'Customized'],
  ['Rack Quantity', '2+pcs', '4+pcs', '9+pcs', 'Customized'],
  ['Single Rack Max. Capacity', '6kW', '6kW', '6kW', 'Customized'],
  ['IT Equipment Total Capacity', '12+kW', '24+kW', '54+kW', 'Customized'],
  ['Cooling Pattern', 'In-Row Air Conditioner', 'In-Row Air Conditioner', 'In-Row Air Conditioner', 'In-Row Air Conditioner'],
  ['UPS', 'N+1 Modular UPS', 'N+1 Modular UPS', 'N+1 Modular UPS', 'Customized'],
];

export const PREFAB_SCENARIOS = [
  {
    title: 'Emergency Response',
    image: '/resources/Emergency-Response.webp',
    pain_points: ['Communication gaps', 'Time-critical needs', 'Infrastructure destruction'],
    benefits: ['Rapid deployment', 'Self-sufficient', 'Disaster-resistant'],
    problem: 'Natural disasters often cause complete paralysis of local infrastructure, and rescue command requires immediate restoration of IT and communication capabilities.',
    solution: 'Standardized containers transport rapidly via truck, train, or helicopter, deploying in 24-48 hours.',
    application: 'Natural disaster recovery, emergency relief',
  },
  {
    title: 'Oil & Gas Exploration',
    image: '/resources/Oil-Gas-Exploration.webp',
    pain_points: ['No grid access', 'Harsh weather', 'Remote locations'],
    benefits: ['Extreme weather proof', 'Off-grid capable', 'High Mobility'],
    problem: 'Exploration areas are usually located in remote deserts or offshore platforms, lacking power grid and municipal support.',
    solution: 'Integrated solar-diesel hybrid systems deliver fully off-grid power. The -40°C to 55°C ruggedized design with IP54 protection withstands extreme environments.',
    application: 'Remote drilling sites, mining operations',
  },
  {
    title: 'Large-scale Events',
    image: '/resources/Large-scale-Events.webp',
    pain_points: ['Temporary capacity surge', 'Tight deadlines', 'No fixed facilities'],
    benefits: ['Event-ready', 'Scalable capacity', 'Temporary deployment'],
    problem: 'Large events such as sports competitions and music festivals cause short-term IT demand surges that traditional infrastructure struggles to handle.',
    solution: 'IT capacity scales flexibly to match event size, deploying within hours on-site. Units dismantle and relocate post-event.',
    application: 'Sports events, festivals, conferences',
  },
  {
    title: 'Military Deployments',
    image: '/resources/Military-Deployments.webp',
    pain_points: ['Tactical mobility needs', 'Security risks', 'Adverse conditions'],
    benefits: ['Secure design', 'Military-grade', 'Rapid deployment'],
    problem: 'Military deployments require IT infrastructure to have rapid mobility to adapt to battlefield changes.',
    solution: 'Military-grade construction withstands impacts and extreme weather. End-to-end encryption and tamper-proof physical safeguards ensure data integrity.',
    application: 'Field operations, military bases, defense installations',
  },
  {
    title: 'Edge Computing',
    image: '/resources/Edge-Computing.webp',
    pain_points: ['Latency problems', 'High data costs', 'Scattered sites'],
    benefits: ['Low latency', 'Edge deployment', 'Cloud-connected'],
    problem: 'With IoT and 5G development, massive data from terminal devices requires real-time processing.',
    solution: 'Our containerized data centers deploy near data sources, delivering millisecond response times and reducing remote data transfers by 90%.',
    application: 'IoT networks, smart cities, industrial edge',
  },
  {
    title: 'Data Center Expansion',
    image: '/resources/Data-Center-Expansion.webp',
    pain_points: ['Slow construction', 'Capacity limits', 'Disruptive expansion'],
    benefits: ['Plug-and-play', 'Rapid scaling', 'Non-disruptive'],
    problem: 'Traditional data center expansion requires 6-12 month construction cycles, failing to meet sudden business growth needs.',
    solution: 'Prefabricated DC containers are factory-preinstalled and ready within 1-2 weeks. They integrate seamlessly with existing data centers.',
    application: 'Cloud data centers, enterprise IT expansion',
  },
];

export const PREFAB_CLIENT_CASES = [
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
  {
    imgSrc: '/resources/100KW-Cooling-System-Solution-In-Malaysia-0-768x768.webp',
    title: 'Open DC Malaysia Deploys Modular 100KW Air-cooled Precision Cooling for Data Center Retrofit',
    slug: 'open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit',
    desc: 'Open DC Malaysia is a prominent cloud service network technology company specializing in server storage services. The company undertook a retrofit of its existing…',
  },
  {
    imgSrc: '/resources/a-project-of-Telecom-Fiji-1.webp',
    title: 'Telecom Fiji Enhances Network Stability With SOETECK\'s Precision Cooling Solutions Featuring Anti-Corrosion Design',
    slug: 'telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design',
    desc: 'Telecom Fiji Limited, a leading provider of fixed-line communication and networking services in Fiji, faced critical operational risks due to inadequate cooling systems in…',
  },
  {
    imgSrc: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp',
    title: 'Sinus-Dochi LLC Reduces PUE and Enhances Cooling Efficiency With SOETECK\'s Smart Precision Cooling System',
    slug: 'sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system',
    desc: 'Sinus-Dochi LLC, a prominent HVAC service company in Mongolia, specializes in refrigeration and boasts a team of expert engineers. The company sought to improve…',
  },
];

// Critical Power & Thermal Management (used by both prefab and cabinet pages)
export const PREFAB_CRITICAL_POWER_TEXT: string =
  'The SOETECK solution incorporates an efficient power distribution system, featuring a range of rack-mounted UPS units and custom-designed distribution modules. Customers can choose from either rack-mounted lithium batteries or lead-acid batteries to suit their needs. We also offer tailored UPS selection services, along with comprehensive distribution design and manufacturing. Furthermore, based on your required backup duration, we provide a variety of battery options, including battery packs, battery cabinets, and battery racks.';

export const PREFAB_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'SY-M Series (150-300kVA) UPS',
    subtitle: 'Modular Online UPS, 25/30kVA Power Module',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-m-series-ups-modular-online-ups-150kva-300kva-25-30kva-power-module',
    excerpt: 'Modular Online UPS with 25/30kVA power modules, scalable from 150kVA to 300kVA. Hot-swappable modules provide N+1 redundancy and true online double-conversion.',
    specs: ['N+1 Redundancy', 'Hot-swappable modules', 'True double-conversion', 'Modular scalable design'],
    images: [
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-150kVA-300kVA-25-30kVA-Power-Module-1.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-150kVA-300kVA-25-30kVA-Power-Module-2.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-150kVA-300kVA-25-30kVA-Power-Module-3.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-150kVA-300kVA-25-30kVA-Power-Module-4.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-150kVA-300kVA-25-30kVA-Power-Module-5.webp',
    ],
  },
  {
    title: 'SY-M Series (400-1600kVA) UPS',
    subtitle: 'Modular Online UPS, 100kVA Power Module',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-m-series-ups-modular-online-ups-400kva-1600kva-100kva-power-module',
    excerpt: 'High-capacity Modular Online UPS with 100kVA power modules, scalable from 400kVA to 1600kVA. Hot-swappable modules, N+1 redundancy, and true online double-conversion.',
    specs: ['N+1 Redundancy', '100kVA hot-swappable', 'True double-conversion', 'Scalable to 1600kVA'],
    images: [
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-400kVA-1600kVA-100kVA-Power-Module-2.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-400kVA-1600kVA-100kVA-Power-Module-4.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-400kVA-1600kVA-100kVA-Power-Module-3.webp',
      '/resources/Soeteck-Online-Cabinet-Modular-UPS-400kVA-1600kVA-100kVA-Power-Module-1.webp',
    ],
  },
  {
    title: 'SY-T Series (400-2000kVA) UPS',
    subtitle: 'High-frequency Online UPS, Tower, PF1',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-t-series-ups-high-frequency-online-ups-400kva-2000kva-tower-pf1-true-double-conversion',
    excerpt: 'High-frequency Online Tower UPS with 400-2000kVA capacity, PF1 efficiency, and true double-conversion technology. Designed for large-scale data center applications.',
    specs: ['PF1 efficiency', 'True double-conversion', 'Tower design', 'Scalable to 2000kVA'],
    images: [
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-2.webp',
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-4.webp',
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-5.webp',
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-1.webp',
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-7.webp',
      '/resources/Soeteck-SY-T-Online-High-frequency-UPS-PF1-400-2000kVA-6.webp',
    ],
  },
];

export const PREFAB_THERMAL_MANAGEMENT_TEXT: string =
  'SOETECK offers comprehensive cooling solutions tailored for data centers and base stations, including room-level, row-level, and rack-level precision air conditioning systems. To effectively address the cooling demands of high-density computing applications within individual cabinets, our rack-level and row-level precision air conditioning systems are designed for efficiency and cost-effectiveness.';

export const PREFAB_THERMAL_PRODUCTS = [
  {
    title: 'DX Air-cooled In-Row Cooling',
    subtitle: '5.6kW – 90.1kW Capacity',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-in-row-cooling-system-5-6kw-90-1kw-capacity',
    excerpt: 'DX air-cooled in-row precision cooling system with 5.6kW to 90.1kW capacity. Designed for efficient row-level thermal management in data centers.',
    specs: ['5.6kW-90.1kW range', 'Air-cooled DX', 'In-row installation', 'Precision control'],
    images: [
      '/resources/SOETECK-air-cooled-in-row-cooling-system-5.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-6.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-3.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-4.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-1.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-2.webp',
    ],
  },
  {
    title: 'DX Air-cooled Room Cooling',
    subtitle: '32.5kW – 120kW Capacity',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-room-cooling-system-32-5kw-120kw-capacity-up-down-flow',
    excerpt: 'DX air-cooled room-level precision cooling system with 32.5kW to 120kW capacity. Supports both up-flow and down-flow configurations for flexible deployment.',
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
    excerpt: 'Packaged rack cooling system, 3.5kW capacity, 8U height. Compact bottom or middle-mounted design with R410A refrigerant and BMS integration.',
    specs: ['3.5kW cooling', 'Bottom or middle mounted', 'R410A refrigerant', 'BMS integration'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
];

// ---------------------------------------------------------------------------
// Page-level copy (moved from PrefabContainerPage.astro hardcode, Batch 3 i18n)
// `{lang}` inside content strings is replaced with the active language prefix
// at render time; slugs themselves stay untranslated (ADR-029 link policy).
// ---------------------------------------------------------------------------

export const PREFAB_PAGE_HERO = {
  title: 'Prefabricated Container Data Center',
  bannerAlt: 'Prefabricated container data center project',
  videoAriaLabel: 'Play Prefabricated Container Data Center video',
  videoThumbAlt: 'Prefab modular data center project video preview',
};

export const PREFAB_VIDEO_FALLBACK_TITLE: string = 'Soeteck solution video';

export const PREFAB_OVERVIEW_HEADING: string = 'Containerized Data Centers, Delivered Fast';

export const PREFAB_CTA_ROW = {
  getBrochure: 'GET BROCHURE',
  contactUs: 'CONTACT US',
};

export const PREFAB_CLOSER_HEADING: string = 'Inside the Container Data Center';

export const PREFAB_DETAIL_BLOCKS = {
  typical: {
    num: '1 - ',
    title: 'A typical design of PCDCs',
    imageAlt: 'Typical design of a prefabricated container data center',
    lead: 'The containerized data center provides an integrated solution for power distribution, cooling management, fire safety, and structured cabling. It is designed to offer safety, reliability, and efficiency in a compact format.',
    featuresLabel: 'Key Features:',
    features: [
      'Safety and Reliability: Built to high safety standards with multiple protective measures, including fire resistance, water resistance, and enhanced security features.',
      'Rapid Deployment: The design enables quick setup and installation, allowing for operational readiness in a short timeframe.',
      'Flexible Scalability: Modular architecture supports easy expansion to accommodate changing requirements.',
      'High Density and Efficiency: Efficient use of space allows for high computing power while minimizing resource consumption.',
      'Intelligent Management: Equipped with monitoring and management systems for effective oversight and maintenance.',
    ],
  },
  models: {
    num: '2 - ',
    title: 'Meet with two typical models',
    intro: 'SOETECK prefabricated container data centers come in various sizes to accommodate differing business needs. Here, we introduce two typical dimensions: the 20-foot and the 40-foot containers, each designed to deliver efficient and flexible computing solutions.',
    fullViewLabel: 'Full View',
    ft20Title: '20ft container data center',
    ft20Desc: 'The 20-foot container data center is a compact solution ideal for businesses with moderate computing requirements. Its small footprint allows for easy deployment in both urban and remote locations.',
    ft40Title: '40ft container data center',
    ft40Desc: 'The 40-foot container data center is designed for larger-scale deployments, offering expanded capacity for high-density computing while maintaining the same rapid deployment benefits.',
  },
  modules: {
    num: '3 - ',
    title: 'Core Infrastructure Modules',
    lead: 'The SOETECK containerized data center solution consists of several key components, including the cabinet system, thermal control system, critical power supply, security system and dynamic environment system. Here, you will find details about several core modules.',
  },
};

export const PREFAB_PRODUCT_GROUPS = {
  criticalPower: 'Critical Power',
  thermal: 'Thermal Management',
  galleryAria: '{title} gallery',
};

export const PREFAB_SPECS = {
  heading: 'Featured Models',
  modelsLabel: 'Models',
  pdfLinkText: 'SOETECK Prefabricated Container Data Center.pdf',
};

export const PREFAB_SCENARIOS_HEADING: string = 'Who Needs a Container Data Center?';

export const PREFAB_SCENARIOS_SUBTITLE: string = 'An integration of Power, Cooling & Infrastructure Modules Supporting Reliable IT Operations – Where Modular DC Delivers Unique Value';

export const PREFAB_SCENARIO_UI = {
  benefitsTab: 'Solution Benefits',
  painTab: 'Critical Pain Points',
  detailsAria: '{title} details',
};

export const PREFAB_CASES_HEADING: string = 'Container Data Center Case Studies';

export const PREFAB_CTA_SECTION = {
  eyebrow: 'Talk to an Engineer',
  title: 'Get in Touch with SOETECK',
  text: 'Share your facility requirements and get a practical solution path. Tell us your project type, capacity needs, and timeline — our team will help identify the right configuration.',
  checks: ['Project consultation', 'Technical configuration support', 'Regional follow-up'],
  contactButton: 'Contact Us',
  brochureButton: 'Download Brochure',
};