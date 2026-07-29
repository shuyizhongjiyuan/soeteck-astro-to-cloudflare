// Cabinet Modular Data Center solution content data

export const CABINET_HERO_SUBTITLE =
  'Enhancing IT Infrastructure with SOETECK\'s Modular Data Center Solution. Delivering Unmatched Scalability and Performance Anytime, Anywhere.';

export const CABINET_OVERVIEW_IMAGE = '/resources/cabinet-dc-1-1024x798.webp';

export const CABINET_OVERVIEW_PARAGRAPHS = [
  '<p>In today\'s data-driven world, the demand for efficient data processing is rapidly growing with the rise of <strong>5G</strong>, <strong>IoT</strong>, and <strong>AI</strong>. To meet this need, SOETECK has developed the <strong>Cabinet Modular Data Center</strong>, which addresses common challenges in traditional data centers, including long setup times and high operational costs. Our modular design allows for flexible configurations ranging from 1 to 10 cabinets, features high seismic resistance, and can be installed in just one hour thanks to its plug-and-play design.</p>',
  '<p>The SOETECK Cabinet Modular Data Center delivers exceptional value with an intelligent monitoring system that tracks temperature, humidity, and power usage in real time, enhancing safety and reliability. Its fully sealed <strong>IP5X</strong> design effectively separates hot and cold airflows while keeping noise levels below <strong>49 decibels</strong>, creating a comfortable working environment. With high-efficiency UPS systems and variable-speed cooling, it achieves a low Power Usage Effectiveness (PUE) of <strong>1.4</strong> for significant energy savings.</p>',
  '<p>Widely used in banking, education, healthcare, manufacturing, and government sectors, SOETECK\'s solutions are designed to meet diverse data processing needs. Compared to traditional setups, they can reduce construction costs by <strong>30%</strong>, cut setup times by <strong>90%</strong>, and save up to <strong>80%</strong> in space. Our unified management platform allows for seamless remote monitoring and maintenance, enhancing overall user experience.</p>',
];

export const CABINET_HOTSPOT_IMAGE = '/resources/cabinet-modular-data-center-2.webp';

// Hotspot positions from Bricks data (desktop values)
export const CABINET_HOTSPOTS = [
  { label: 'Monitoring System', x: '16%', y: '31%' },
  { label: 'Security System', x: '8%', y: '45%' },
  { label: 'Cabinet System', x: '51.5%', y: '35%' },
  { label: 'Power Distribution Module', x: '71%', y: '62%' },
  { label: 'UPS', x: '64%', y: '66%' },
  { label: 'Battery', x: '70%', y: '69%' },
  { label: 'Rack Cooling System', x: '68%', y: '76%' },
  { label: 'IT Space', x: '68%', y: '25%' },
];

export const CABINET_KEY_FEATURES = [
  'Safety and Reliability: Built to high safety standards with multiple protective measures, including fire resistance, water resistance, and enhanced security features.',
  'Rapid Deployment: The design enables quick setup and installation, allowing for operational readiness in a short timeframe.',
  'Flexible Scalability: Modular architecture supports easy expansion to accommodate changing requirements.',
  'High Density and Efficiency: Efficient use of space allows for high computing power while minimizing resource consumption.',
  'Intelligent Management: Equipped with monitoring and management systems for effective oversight and maintenance.',
];

export const CABINET_FEATURED_MODELS = [
  {
    hotspotLabel: 'Packaged Rack Cooling',
    image: '/resources/cabinet-data-center-7.webp',
    accordionTitle: 'with Top-mounted Rack Cooling',
    hotspotPin: { x: '47%', y: '10%' },
    integrated_systems: ['3-6 kVA UPS', 'Power distribution', 'Battery backup', 'Monitoring & security'],
    key_advantages: ['True plug-and-play (no outdoor unit)', 'Space-efficient all-in-one design', 'Quick deployment'],
  },
  {
    hotspotLabel: 'Split Rack Cooling',
    image: '/resources/cabinet-data-center-5.webp',
    accordionTitle: 'with Rack Cooling',
    hotspotPin: { x: '48%', y: '83%' },
    integrated_systems: ['3-10 kVA UPS', 'Power distribution', 'Battery backup', 'Monitoring & security'],
    key_advantages: ['Split design reduces U-space occupancy', 'Low-noise operation', 'Modular scalability'],
  },
  {
    hotspotLabel: 'In-Row Cooling',
    image: '/resources/cabinet-data-center-6.webp',
    accordionTitle: 'with in-Row Cooling',
    hotspotPin: { x: '33%', y: '40%' },
    integrated_systems: ['6-20 kVA UPS', 'Power distribution', 'Battery backup', 'Monitoring & security'],
    key_advantages: ['In-row cooling saves U-space', 'Enhanced thermal performance', 'Enterprise-grade density'],
  },
];

export const CABINET_MODELS_INTRO =
  'Our integrated cabinet system for data centers comprises three modular solutions: the Top-mounted AC Version (3-6 kVA), Rack-Mounted AC Version (3-10 kVA), and Row-Based AC Version (6-20 kVA). Each system unifies UPS, power distribution, and intelligent monitoring, delivering efficient, scalable infrastructure tailored to data centers of all sizes.';

export const CABINET_MODELS_OUTRO =
  'Like LEGO bricks, these cabinets are designed for rapid deployment. Our solutions can be customized to meet specific requirements, achieving a PUE as low as 1.4 and deploying in just 10 minutes. The IP5X-rated sealed cabinet features an emergency pop-open door, three-in-one access control (fingerprint, card, password), a touchscreen monitoring interface, and support for multiple northbound protocols.';

export const CABINET_CORE_MODULES = [
  { title: 'Efficient Cooling Module', text: 'Thermal Management and heat dissipation', icon: 'snowflake' },
  { title: 'Intelligent Power Distribution', text: 'Power supply distribution and management', icon: 'bolt' },
  { title: 'Safety Protection System', text: 'Fire protection and physical security', icon: 'shield' },
  { title: 'Intelligent Monitoring System', text: 'Operational status monitoring', icon: 'chart' },
];

export const CABINET_CRITICAL_POWER_TEXT =
  'The SOETECK cabinet data center solution incorporates an efficient power distribution system, featuring a range of rack-mounted UPS units and custom-designed distribution modules. Customers can choose from either rack-mounted lithium batteries or lead-acid batteries to suit their needs. We also offer tailored UPS selection services, along with comprehensive distribution design and manufacturing. Furthermore, based on your required backup duration, we provide a variety of battery options, including battery packs, battery cabinets, and battery racks.';

export const CABINET_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'SY-RT Series (1-3kVA) UPS',
    subtitle: 'Online High-frequency UPS, 1kVA-3kVA, PF1',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-high-frequency-online-ups-1kva-3kva-rack-tower-mounted-pf1',
    excerpt: 'The SY-RT Series UPS, 1-3kVA, delivers reliable online double-conversion protection with PF1 output, wide input voltage range, and compact rack/tower design.',
    specs: ['PF1 efficiency', '0ms transfer time', '110-300VAC range', '96% efficiency in ECO mode'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF11.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF12.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF13.webp',
    ],
  },
  {
    title: 'SY-RT Series (1-10kVA) UPS',
    subtitle: 'Online High-frequency UPS, 1kVA-10kVA, PF0.8',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted',
    excerpt: 'The SY-RT Series UPS, 1-10kVA, offers reliable online UPS protection with PF0.8, up to 93% efficiency, and flexible rack/tower mounting for versatile deployment.',
    specs: ['PF0.8', 'Up to 93% efficiency', 'Rack & tower mounted', 'Flexible configuration'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-4.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-2.webp',
    ],
  },
  {
    title: 'ST-RT Series (10-60kVA) UPS',
    subtitle: 'Online High-Frequency UPS, 10kVA-60kVA, 3-Phase',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-st-rt-series-high-frequency-online-ups-10kva-60kva-rack-tower-mounted-3-phase-in-out',
    excerpt: 'The ST-RT Series UPS, offering 10-60kVA, provides true double-conversion online protection with PF1 efficiency. Rack/tower convertible, 3-phase in/out, 95.5% ECO mode saving energy.',
    specs: ['True double-conversion', '3 Phase In / 3 Phase Out', 'PF1 efficiency', '95.5% ECO mode'],
    images: [
      '/resources/online-High-Frequency-UPSR.webp',
      '/resources/online-High-Frequency-UPSR-20KVA.webp',
      '/resources/online-High-Frequency-UPSR-40KVA.webp',
      '/resources/online-High-Frequency-UPSR-60KVA.webp',
    ],
  },
];

export const CABINET_THERMAL_MANAGEMENT_TEXT =
  'SOETECK offers comprehensive cooling solutions tailored for data centers and base stations, including room-level, row-level, and rack-level precision air conditioning systems. To effectively address the cooling demands of high-density computing applications within individual cabinets, our rack-level and row-level precision air conditioning systems are designed for efficiency and cost-effectiveness.';

export const CABINET_THERMAL_PRODUCTS = [
  {
    title: 'Top-mount Packaged Rack Cooling',
    subtitle: '2.5kW – 5.5kW Capacity',
    slug: 'soeteck-top-mount-packaged-rack-cooling-system-2-5kw-5-5kw-capacity-suitable-for-micro-mini-modular-data-center',
    excerpt: 'Top-mounted packaged rack cooling system, 2.5-5.5kW capacity. All-in-one design saves U-space with no outdoor unit required — ideal for micro data centers.',
    specs: ['2.5kW to 5.5kW cooling', 'R410A refrigerant', 'BMS integration', 'SNMP support'],
    images: [
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-4.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-5.webp',
    ],
  },
  {
    title: 'Packaged Rack Cooling',
    subtitle: '3.5kW Capacity, 8U',
    slug: 'soeteck-packaged-rack-cooling-system-3-5kw-capacity-8u-bottom-or-middle-mounted',
    excerpt: 'Packaged rack cooling system, 3.5kW capacity, 8U height. Compact bottom or middle-mounted design with R410A refrigerant and BMS integration.',
    specs: ['3.5kW cooling', 'Bottom or middle mounted', 'R410A refrigerant', 'BMS integration'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
  {
    title: 'Split-type Rack Cooling',
    subtitle: '3.5kW-12.5kW, Split-type',
    slug: 'soeteck-rack-cooling-system-3-5kw-12-5kw-capacity-split-type-cooling-unit',
    excerpt: 'Split-type rack cooling system with 3.9-12.8kW capacity range. Inverter compressor, EC fan, and outdoor compressor unit deliver efficient thermal management.',
    specs: ['3.9kW-12.8kW range', 'Inverter compressor', 'EC fan', 'Outdoor compressor unit'],
    images: [
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-1.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-4.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-2.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-5.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-3.webp',
    ],
  },
];

export const CABINET_SPEC_COLUMNS = [
  { model: 'SY-MDC-03N', image: '/resources/cabinet-data-center-8-734x1024.webp' },
  { model: 'SY-MDC-06T', image: '/resources/cabinet-data-center-9-734x1024.webp' },
  { model: 'SY-MDC-10R', image: '/resources/cabinet-data-center-8-734x1024.webp' },
  { model: 'Customized', image: '/resources/cabinet-data-center-9-734x1024.webp' },
];

export const CABINET_SPEC_ROWS = [
  ['Usable Space (U)', '18U', '31U', '27U', 'Customized'],
  ['Redundancy Type', 'N', 'N', 'N', 'N, N+1, 2N'],
  ['Cooling Type', 'Integrated AC', 'Split-type AC', 'Split-type AC', 'Integrated or Split'],
  ['AC Location', 'Top-mounted', 'Rack-mounted', 'Rack-mounted', 'As required'],
  ['Cooling Capacity (kW)', '3.5', '3.5', '6.5', 'Customized'],
  ['UPS Capacity (kVA)', '3', '6', '10', '3–20'],
  ['PDU Ports', 'Standard 8', 'Standard 16', 'Standard 16', 'Standard or Intelligent'],
  ['Emergency Ventilation', 'Auto-opening door', 'Auto-opening door', 'Auto-opening door', 'Auto-opening door'],
];

export const CABINET_TRANSPORT = [
  {
    title: 'Complete Unit Transportation',
    text: 'The entire product is factory pre-adjusted, with enhanced vibration resistance design. Except for the outdoor air conditioner, all other equipment is transported as a complete unit.',
  },
  {
    title: 'On-site Installation of Only PACs',
    text: 'Transportation costs and on-site construction and commissioning costs are significantly reduced, shortening the time and lowering the failure rate.',
  },
];

export const CABINET_TRANSPORT_IMAGES = [
  '/resources/cabinet-dc-1-1.webp',
  '/resources/transportation-package-1.webp',
];

export const CABINET_SCENARIOS = [
  {
    title: 'Bank Branches',
    image: '/resources/Bank-Branches.webp',
    pain_points: ['Unattended', 'High security', 'Limited space'],
    benefits: ['Secure enclosure', 'Remote monitoring', 'Space-saving'],
    problem: 'Bank branch server rooms are typically cramped, unable to fit standard data center equipment, while facing strict security demands. With no on-site professional IT staff, equipment failures risk business disruptions that harm customer experience and corporate reputation.',
    solution: 'Our integrated rack design combines servers, power, and cooling in standard rack space, saving 60% floor area. Equipped with fingerprint access control, video surveillance, and a remote operation platform, it enables 7×24 unattended operation with fault response times reduced to minutes.',
    application: 'Natural disaster recovery, emergency relief',
  },
  {
    title: 'Small Business Offices',
    image: '/resources/Small-Business-Offices.webp',
    pain_points: ['Simple management', 'Limited IT staff', 'Office environment'],
    benefits: ['Quiet operation', 'Plug & play', 'Low maintenance'],
    problem: 'Small businesses lack dedicated IT staff, struggling with complex server room maintenance. Office environments have strict noise limits, and limited budgets require reliable IT infrastructure at lower costs.',
    solution: 'The integrated design simplifies daily management, allowing easy operation by non-professionals. Optimized noise reduction keeps operation below 50 decibels, avoiding office disruptions. High integration cuts total ownership costs by over 40% compared to traditional setups.',
    application: 'Remote drilling sites, mining operations',
  },
  {
    title: 'Telecom Base Stations',
    image: '/resources/Telecom-Base-Stations.webp',
    pain_points: ['Extreme temperatures', 'Remote location', 'Outdoor/harsh'],
    benefits: ['Wide temperature range', 'Weatherproof', 'Remote management'],
    problem: 'Outdoor base stations face harsh conditions-extreme temperatures, dust, heavy rain-and unstable power. Scattered locations drive high manual inspection costs, with failures risking communication service outages.',
    solution: 'Our IP55-rated cabinets resist harsh weather. Dual power input plus lithium battery backup ensures 99.999% power reliability. A remote centralized platform monitors status in real-time, reducing on-site maintenance needs by 80%.',
    application: 'Sports events, festivals, conferences',
  },
  {
    title: 'Healthcare Facilities',
    image: '/resources/Healthcare-Facilities.webp',
    pain_points: ['Critical systems', 'Clean environment', 'High availability'],
    benefits: ['Redundant power', 'Low noise', 'Easy sanitization'],
    problem: 'Hospital server rooms support critical systems like diagnosis tools and patient records-any interruption endangers patient safety. Medical environments demand high cleanliness and low noise, while limited space restricts dedicated computer room areas.',
    solution: 'N+1 redundancy eliminates single points of failure in power and cooling, enabling online maintenance. Fully enclosed design with air filtration meets medical cleanliness standards, and compact size allows flexible deployment in nurse stations or department corners.',
    application: 'Field operations, military bases, defense installations',
  },
  {
    title: 'Smart Transportation Hubs',
    image: '/resources/Smart-Transportation-Hubs.webp',
    pain_points: ['Security critical', 'Public space', '24/7 operation'],
    benefits: ['Vandal-resistant', 'Continuous operation', 'Space-efficient'],
    problem: 'Airports, stations, and hubs require 24/7 IT operation-failures cause operational chaos. Public environments pose vandalism risks, while available server room space is scattered and limited.',
    solution: 'Industrial-grade redundancy ensures over 99.99% availability. Anti-pry cabinets and access control enhance physical security. Miniaturized racks deploy near functional areas, enabling centralized management via network collaboration.',
    application: 'IoT networks, smart cities, industrial edge',
  },
  {
    title: 'Emergency Command Centers',
    image: '/resources/Emergency-Command-Centers.webp',
    pain_points: ['Mission-critical', 'Temporary setup', 'Time Limited'],
    benefits: ['Rapid setup', 'Portable design', 'Backup power'],
    problem: 'Emergencies demand rapid temporary IT setup, which traditional equipment can\'t deliver. Command locations may shift, requiring system mobility, while field environments lack stable power.',
    solution: 'The integrated cabinet is ready-to-use out of the box, deploying within 15 minutes of power connection. Wheel design enables short-distance movement, and integrated batteries provide 4-8 hours of emergency power for continuous operation.',
    application: 'Cloud data centers, enterprise IT expansion',
  },
];

// Reuse client cases from prefab-content.ts - import via PREFAB_CLIENT_CASES