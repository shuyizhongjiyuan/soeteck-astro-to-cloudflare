// Row Modular Data Center solution content data

export const ROW_HERO_SUBTITLE =
  'SOETECK row modular data center solutions deliver integrated, efficient, and reliable options tailored for modern IT deployments.';

export const ROW_OVERVIEW_PARAGRAPHS = [
  '<p>The <strong>SOETECK Row Modular Data Center</strong> scales the way building blocks do: you add or remove components as compute grows, and the plug-and-play setup is ready in a few hours rather than weeks. That makes it a practical answer when capacity needs to move quickly.</p>',
  '<p>Each row is built for reliability. An IP55 enclosure keeps out dust and moisture, intelligent monitoring tracks temperature, humidity, and power, and high-efficiency UPS plus thermal management hold PUE to 1.2 or lower.</p>',
  '<p>The design is in service across finance, healthcare, manufacturing, and education. Against a conventional build it lowers construction cost by 30%, shortens installation by 90%, and uses up to 80% less space, with a unified platform handling remote monitoring and control.</p>',
];

// Hotspot image for Rack Cooling DC (same as cabinet)
export const ROW_RACK_HOTSPOT_IMAGE = '/resources/cabinet-modular-data-center-2.webp';
// Hotspot image for In-Row Cooling DC
export const ROW_INROW_HOTSPOT_IMAGE = '/resources/row-modular-data-center-unit-2.webp';

export const ROW_RACK_HOTSPOTS = [
  { label: 'Monitoring System', x: '29.75%', y: '32.95%' },
  { label: 'Security System', x: '24.25%', y: '46.95%' },
  { label: 'Cabinet System', x: '52.75%', y: '36.95%' },
  { label: 'Power Distribution Module', x: '64.25%', y: '63.95%' },
  { label: 'UPS', x: '60.25%', y: '67.95%' },
  { label: 'Battery', x: '63.75%', y: '70.95%' },
  { label: 'Rack Cooling System', x: '62.25%', y: '77.95%' },
  { label: 'IT Space', x: '62.25%', y: '26.95%' },
];

export const ROW_INROW_HOTSPOTS = [
  { label: 'PDU', x: '38%', y: '11%' },
  { label: 'IP55 Cabinet System', x: '45%', y: '20%' },
  { label: 'In-Row Cooling System', x: '32%', y: '35%' },
  { label: 'Ambient Light', x: '52%', y: '33%' },
  { label: 'Monitoring Display', x: '43%', y: '47%' },
  { label: 'Borderless Glass Front Door', x: '63.5%', y: '55%' },
  { label: 'Security System', x: '40.5%', y: '60%' },
  { label: 'Power Distribution', x: '48%', y: '77%' },
  { label: 'UPS', x: '51%', y: '81%' },
  { label: 'Battery', x: '54%', y: '85%' },
];

export const ROW_EVOLVE_RACK = {
  title: 'Evolve from Rack-Cooling Cabinet DC',
  images: [
    { image: '/resources/cabinet-modular-data-center-31.webp', hotspots: [{ label: 'Rack Cooling', x: '42%', y: '77%' }] },
    { image: '/resources/cabinet-modular-data-center-41.webp', hotspots: [{ label: 'Rack Cooling System', x: '20%', y: '77%' }, { label: 'IT Cabinet', x: '45%', y: '25%' }, { label: 'IT Cabinet', x: '71%', y: '25%' }] },
    { image: '/resources/cabinet-modular-data-center-51.webp', hotspots: [{ label: 'Rack Cooling System', x: '30%', y: '77%' }, { label: 'IT Cabinet', x: '47%', y: '25%' }, { label: 'IT Cabinet', x: '64%', y: '77%' }, { label: 'Rack Cooling System', x: '81%', y: '25%' }] },
  ],
};

export const ROW_EVOLVE_INROW = {
  title: 'Evolve from In-Row-Cooling Cabinet DC',
  images: [
    { image: '/resources/cabinet-modular-data-center-61.webp', hotspots: [{ label: 'In-Row Cooling', x: '63%', y: '77%' }] },
    { image: '/resources/cabinet-modular-data-center-71.webp', hotspots: [{ label: 'In-Row Cooling', x: '55%', y: '77%' }, { label: 'IT Cabinet', x: '28%', y: '25%' }, { label: 'IT Cabinet', x: '43%', y: '25%' }, { label: 'IT Cabinet', x: '67%', y: '25%' }, { label: 'IT Cabinet', x: '67%', y: '25%' }] },
    { image: '/resources/cabinet-modular-data-center-81.webp', hotspots: [{ label: 'In-Row Cooling', x: '39.4%', y: '77%' }, { label: 'In-Row Cooling', x: '67.7%', y: '77%' }, { label: 'IT Cabinet', x: '20%', y: '25%' }, { label: 'IT Cabinet', x: '31%', y: '25%' }, { label: 'IT Cabinet', x: '48%', y: '25%' }, { label: 'IT Cabinet', x: '59%', y: '25%' }, { label: 'IT Cabinet', x: '76%', y: '25%' }, { label: 'IT Cabinet', x: '87.5%', y: '25%' }] },
  ],
};

export const ROW_CORE_MODULES = [
  { title: 'Efficient Cooling Module', text: 'Thermal Management and heat dissipation', icon: 'snowflake' },
  { title: 'Intelligent Power Distribution', text: 'Power supply distribution and management', icon: 'bolt' },
  { title: 'Safety Protection System', text: 'Fire protection and physical security', icon: 'shield' },
  { title: 'Intelligent Monitoring System', text: 'Operational status monitoring', icon: 'chart' },
];

export const ROW_CRITICAL_POWER_TEXT =
  'The SOETECK row modular data center solution incorporates an efficient power distribution system, featuring a range of rack-mounted UPS units and custom-designed distribution modules. Customers can choose from either rack-mounted lithium batteries or lead-acid batteries to suit their needs. We also offer tailored UPS selection services, along with comprehensive distribution design and manufacturing.';

export const ROW_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'SY-RT Series (1-3kVA) UPS',
    subtitle: 'Online High-frequency UPS, 1kVA-3kVA, PF1',
    slug: 'soeteck-sy-rt-series-high-frequency-online-ups-1kva-3kva-rack-tower-mounted-pf1',
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
    slug: 'soeteck-sy-rt-series-winner-pro-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted-pf0-9',
    excerpt: 'The SOETECK SY-RT Winner Pro Series UPS, 1-10kVA, offers reliable online protection with PF0.9 output, wide input voltage range, and flexible rack/tower mounting for versatile deployment in row modular data center applications.',
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
    slug: 'soeteck-sy-rt-series-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted',
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

export const ROW_THERMAL_MANAGEMENT_TEXT =
  'SOETECK offers comprehensive cooling solutions tailored for data centers and base stations, including room-level, row-level, and rack-level precision air conditioning systems. To effectively address the cooling demands of high-density computing applications within individual cabinets, our rack-level and row-level precision air conditioning systems are designed for efficiency and cost-effectiveness.';

export const ROW_THERMAL_PRODUCTS = [
  {
    title: 'DX Air-cooled In-Row Cooling',
    subtitle: '5.6kW – 90.1kW Capacity',
    slug: 'soeteck-dx-air-cooled-in-row-cooling-system-5-6kw-90-1kw-capacity',
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
    slug: 'soeteck-dx-air-cooled-room-cooling-system-32-5kw-120kw-capacity-up-down-flow',
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
    slug: 'soeteck-packaged-rack-cooling-system-3-5kw-capacity-8u-bottom-or-middle-mounted',
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

export const ROW_SPEC_COLUMNS = [
  { model: 'SY-RMDC-03', image: '/resources/cabinet-modular-data-center-31.webp' },
  { model: 'SY-RMDC-06', image: '/resources/cabinet-modular-data-center-41.webp' },
  { model: 'SY-RMDC-10', image: '/resources/cabinet-modular-data-center-51.webp' },
  { model: 'Customized', image: '/resources/cabinet-modular-data-center-61.webp' },
];

export const ROW_SPEC_ROWS = [
  ['Cooling Type', 'Rack-mounted AC', 'In-Row AC', 'In-Row AC', 'Customized'],
  ['Max Cooling Capacity', '3.5 kW', '6.5 kW', '12.5 kW', 'Customized'],
  ['UPS Capacity', '3 kVA', '6 kVA', '10 kVA', '3-20 kVA'],
  ['Cabinet Quantity', '1-3', '3-6', '6-10', 'Customized'],
  ['Redundancy', 'N', 'N', 'N', 'N, N+1, 2N'],
  ['Protection Rating', 'IP5X', 'IP5X', 'IP55', 'Customized'],
  ['Monitoring', 'Touchscreen', 'Touchscreen', 'Touchscreen + Remote', 'Customized'],
];

export const ROW_SCENARIOS = [
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

// Reuse client cases from prefab-content.ts

// ===== Batch 3 i18n: page chrome previously hardcoded in RowModularPage.astro =====

// Hero
export const ROW_HERO_TITLE = 'Row Modular Data Center';
export const ROW_HERO_IMAGE_ALT = 'Row modular data center';
export const ROW_VIDEO_ARIA_LABEL = 'Play Row Modular Data Center video';
// Injected into the client script via data-video-fallback-title (no hardcoded copy in <script>)
export const ROW_VIDEO_FALLBACK_TITLE = 'Soeteck solution video';

// Overview + CTA row
export const ROW_OVERVIEW_TITLE = 'Modular Data Centers, Built Block by Block';
export const ROW_CTA_BROCHURE = 'GET BROCHURE';
export const ROW_CTA_CONTACT = 'CONTACT US';

// Closer Look
export const ROW_INSIDE_TITLE = 'Inside the Row Modular Data Center';
export const ROW_UNITS_TITLE = 'Two Typical Units of RMDC';
export const ROW_TABLIST_ARIA = 'Select cooling type';
export const ROW_TAB_RACK = 'Rack-Cooling DC';
export const ROW_TAB_INROW = 'In-Row-Cooling DC';
export const ROW_RACK_DIAGRAM_ALT = 'Rack cooling DC diagram';
export const ROW_INROW_DIAGRAM_ALT = 'In-row cooling DC diagram';

// Lead paragraph with embedded product links. "{LANG}" is replaced with "/<lang>"
// by the template at render time (keeps the /${lang}/ prefix behavior of the original markup).
export const ROW_UNITS_LEAD_HTML =
  'SOETECK row&nbsp;<strong>modular data center</strong>&nbsp;solutions deliver integrated, efficient, and reliable options tailored for modern IT deployments. These solutions can be composed of either single cabinets with&nbsp;<a href="{LANG}/products/thermal-management/in-row-cooling/" target="_blank" rel="noopener"><strong>in-row cooling systems</strong></a>&nbsp;or single cabinets with integrated&nbsp;<a href="{LANG}/products/thermal-management/rack-cooling/" target="_blank" rel="noopener"><strong>rack-mounted cooling units</strong></a>, providing flexibility to accommodate a wide range of applications. Designed to ensure optimal performance and security for critical infrastructure, SOETECK offers tailored configurations to meet diverse customer needs.';

export const ROW_KEY_FEATURES_LABEL = 'Key Features:';
export const ROW_KEY_FEATURES = [
  '<strong>Safety and Reliability</strong>: Constructed to high safety standards, our cabinets feature robust fire resistance, water resistance, and advanced security measures, including a multi-faceted access control system for enhanced protection.',
  '<strong>Rapid Deployment</strong>: The modular architecture facilitates quick setup and installation, enabling businesses to achieve operational readiness within a short timeframe.',
  '<strong>Flexible Scalability</strong>: Our solutions support easy expansion to meet evolving demands, allowing organizations to scale up seamlessly as their needs grow.',
  '<strong>High Density and Efficiency</strong>: The design maximizes space utilization for high computing power, supporting configurations of up to 20kW per cabinet while minimizing energy consumption for operational efficiency.',
  '<strong>Intelligent Management</strong>: Equipped with comprehensive monitoring and management systems, our data centers provide effective oversight and maintenance capabilities, ensuring reliable operations through real-time alerts and fault localization.',
];

// Build Your Data Center Like LEGO
export const ROW_LEGO_TITLE = 'Build Your Data Center Like LEGO';
export const ROW_LEGO_INTRO =
  'At SOETECK, we believe in the power of modularity. Our row modular data center solutions allow you to build and expand your infrastructure effortlessly, much like assembling with LEGO bricks. Each component can be easily added or modified to fit your evolving needs.';

export const ROW_EVOLVE_RACK_TEXT =
  'The integrated rack cooling cabinet-based row modular data center provides a compact solution optimized for energy efficiency. With cooling capacities from 3.5 kW to 90 kW, it can handle high-power applications effectively. Featuring advanced security measures and comprehensive monitoring capabilities, this design ensures a secure and resilient operational environment.';
export const ROW_EVOLVE_INROW_TEXT =
  'The in-row cooling cabinet-based row modular data center supports high-density deployments with power capacities up to 20 kW per cabinet. Its modular design allows for easy scalability, adapting effortlessly to business growth. With IP55 protection and real-time monitoring, it enhances operational efficiency while minimizing energy consumption.';
export const ROW_EVOLVE_SUMMARY =
  'Our row modular data center solutions are designed with advanced modularity and flexibility in mind. Each cabinet incorporates expandable monitoring systems that communicate via bus-level protocols, allowing for seamless integration of additional critical equipment in the future. The modular cooling options offer various capacities, from 3.5 kW to 12 kW for rack cooling and 5 kW to 90 kW for row cooling, ensuring efficient thermal management. Additionally, the power system is modular, ranging from 3 kVA to 200 kVA, so you can easily adapt and expand your power capabilities as needed. With features like IP55 protection against dust and water and a robust design for high-density deployments of up to 20 kW per cabinet, your data center will maintain security, reliability, and efficiency as it grows.';

// Core Infrastructure Modules
export const ROW_MODULES_TITLE = 'Core Infrastructure Modules';
export const ROW_MODULES_LEAD =
  'The SOETECK row modular data center solution consists of several key components, including the cabinet system, thermal control system, critical power supply, security system and dynamic environment system.';

export const ROW_CRITICAL_POWER_HEADING = 'Critical Power';
export const ROW_THERMAL_HEADING = 'Thermal Management';
export const ROW_GALLERY_ARIA = 'gallery';

// Specs table
export const ROW_SPECS_TITLE = 'Featured Models';
export const ROW_SPEC_HEADER_MODELS = 'Models';
export const ROW_PDF_LINK_TEXT = 'SOETECK Row Modular Data Center Solution.pdf';

// Scenarios
export const ROW_SCENARIOS_TITLE = 'Who Needs a Row Modular Data Center?';
export const ROW_SCENARIOS_SUBTITLE =
  'Application Scenarios: An integration of Power, Cooling & Infrastructure Modules Supporting Reliable IT Operations – Where Row Modular DC Delivers Unique Value';
export const ROW_SCENARIO_DETAILS_ARIA = 'details';
export const ROW_TAB_BENEFITS = 'Solution Benefits';
export const ROW_TAB_PAIN = 'Critical Pain Points';

// Client cases section
export const ROW_CASES_TITLE = 'Row Modular Data Center Case Studies';

// Bottom contact CTA
export const ROW_CONTACT_EYEBROW = 'Talk to an Engineer';
export const ROW_CONTACT_TITLE = 'Get in Touch with SOETECK';
export const ROW_CONTACT_TEXT =
  'Share your facility requirements and get a practical solution path. Tell us your project type, capacity needs, and timeline — our team will help identify the right configuration.';
export const ROW_CONTACT_CHECKS = [
  'Project consultation',
  'Technical configuration support',
  'Regional follow-up',
];
export const ROW_CONTACT_BUTTON = 'Contact Us';
export const ROW_CONTACT_BROCHURE = 'Download Brochure';
