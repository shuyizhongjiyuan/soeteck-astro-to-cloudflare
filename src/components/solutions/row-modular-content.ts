// Row Modular Data Center solution content data

export const ROW_HERO_SUBTITLE =
  'SOETECK row modular data center solutions deliver integrated, efficient, and reliable options tailored for modern IT deployments.';

export const ROW_OVERVIEW_PARAGRAPHS = [
  '<p>In the rapidly evolving digital infrastructure landscape, the demand for efficient and scalable data center solutions is growing due to advancements in <strong>AI</strong>, <strong>IoT</strong>, and high-speed connectivity. SOETECK addresses this need with its <strong>Row Modular Data Center</strong>, designed to overcome traditional data center challenges like limited scalability and lengthy setup times. This modular architecture allows for configurations like building with LEGO, enabling organizations to scale easily by adding or removing components. The plug-and-play design ensures operational readiness in a few hours.</p>',
  '<p>The <strong>SOETECK Row Modular Data Center</strong> is built for reliability, featuring an intelligent monitoring system that tracks temperature, humidity, and power consumption. Its <strong>IP55</strong>-rated enclosure protects sensitive equipment from dust and moisture, while advanced thermal management and high-efficiency UPS systems achieve a Power Usage Effectiveness (PUE) as low as <strong>1.2</strong>, ensuring significant energy savings.</p>',
  '<p>Widely used across finance, healthcare, manufacturing, and education, this solution reduces construction costs by <strong>30%</strong>, cuts installation times by <strong>90%</strong>, and optimizes space utilization by up to <strong>80%</strong>. Additionally, SOETECK\'s unified management platform provides seamless remote monitoring and control, enhancing the overall user experience.</p>',
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
