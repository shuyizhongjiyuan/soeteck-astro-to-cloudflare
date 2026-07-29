// AICoolit Liquid Cooling Data Center solution content data

export const AICOOLIT_NAV_SECTIONS = [
  { id: 'aicoolit-why', label: 'Why AICoolit' },
  { id: 'aicoolit-models', label: 'Models' },
  { id: 'aicoolit-components', label: 'Components' },
  { id: 'aicoolit-faq', label: 'FAQ' },
  { id: 'aicoolit-contact', label: 'Contact' },
];

export const AICOOLIT_STATS = [
  { value: '100', unit: 'kW', label: 'Max Rack Density' },
  { value: '1.15', unit: '', label: 'Extreme PUE' },
  { value: '4', unit: 'Weeks', label: 'Typical Lead Time' },
  { value: 'IP65', unit: '', label: 'Industrial Rating' },
];

export const AICOOLIT_COMPARISON_CARDS = [
  {
    title: 'VS. Traditional Air-Cooled Containers',
    description: 'Standard air-cooled containers are limited by airflow physics, capping rack density at 10-15kW—insufficient for NVIDIA H100 clusters.',
    features: [
      { title: 'Density Breakthrough', text: 'Liquid cooling shatters thermal limits, enabling 100kW+ per rack in a standard ISO footprint.' },
      { title: 'Environmental Resilience', text: 'Fully sealed liquid loop design. Immune to dust, humidity, or 50°C ambient heat.' },
    ],
  },
  {
    title: 'VS. Brick-and-Mortar Data Centers',
    description: 'Traditional builds face zoning issues, slow permits, and 12-24 month timelines, failing to keep pace with AI business expansion.',
    features: [
      { title: 'Rapid Time-to-Market', text: 'Factory prefabricated. Just connect power & water on-site. Compress delivery from "Years" to "Weeks".' },
      { title: 'Scalable CAPEX', text: 'No massive upfront build. Scale capacity modularly as your compute demand grows.' },
    ],
  },
];

export const AICOOLIT_PRODUCT_SERIES = [
  {
    label: 'SERIES I (40FT)',
    title: 'High-Density Cluster Module',
    description: 'Engineered for large-scale LLM training clusters. By decoupling UPS and batteries to an external unit, we maximize internal space for compute. Combined with total 900kW in-rack liquid cooling CDU, a single container supports a 1MW supercomputing cluster.',
    image: '/resources/1-40-Foot-AI-Container-Data-Center-100kW-per-Rack.webp',
    specs: [
      { label: 'Total Load', value: '1 MW' },
      { label: 'Rack Density', value: '100 kW' },
      { label: 'Cooling Source', value: 'In-Rack CDU x8' },
      { label: 'Config', value: 'External Power' },
    ],
    features: [
      'Liquid/Air Ratio 9:1 for extreme efficiency.',
      'Supports 3+1 redundant In-Row AC to eliminate hotspots.',
    ],
  },
  {
    label: 'SERIES II (40FT)',
    title: 'Integrated Standard Module',
    description: 'The "Plug & Play" champion. We fully integrate UPS, Lithium batteries, and liquid cooling systems into a single 40ft shell. This is the definition of rapid deployment—perfect for scenarios with limited external power infrastructure or urgent compute needs.',
    image: '/resources/2-40-Foot-AI-Container-Data-Center-60kW-per-Rack.webp',
    specs: [
      { label: 'Total Load', value: '480 kW' },
      { label: 'Rack Density', value: '60 kW' },
      { label: 'Cooling Source', value: 'In-Row CDU x1' },
      { label: 'Config', value: 'Internal Power' },
    ],
    features: [
      'Liquid/Air Ratio 8:2 balanced cooling solution.',
      'Built-in 600kVA Modular UPS + Battery Backup.',
    ],
  },
  {
    label: 'SERIES III (20FT)',
    title: 'Edge Compact Module',
    description: 'Small footprint, massive power. This 20ft module is built for Edge Computing, Smart Cities, or Research Labs where space is constrained. Deploy 200kW of high-performance liquid-cooled compute anywhere—from parking lots to rooftops.',
    image: '/resources/3-20-Foot-AI-Container-Data-Center-50kW-per-Rack.webp',
    specs: [
      { label: 'Total Load', value: '200 kW' },
      { label: 'Rack Density', value: '50 kW' },
      { label: 'Cooling Source', value: 'In-Rack CDU x4' },
      { label: 'Config', value: 'Internal Power' },
    ],
    features: [
      'Highly Integrated: All subsystems within 20ft.',
      'Includes 300kVA UPS + 15min Backup Battery.',
    ],
  },
  {
    label: 'SERIES IV (40FT)',
    title: 'Immersion Cooling Module',
    description: 'The ultimate solution for harsh environments. Servers are submerged directly in dielectric fluid, eliminating fans, dust, and noise. This is the only choice for deserts, mining sites, or tropical regions, achieving extreme PUE and stability for high-performance compute.',
    image: '/resources/4-40-Foot-AI-Container-Data-Center-50kW-per-Rack-Immersion-Cooling.webp',
    specs: [
      { label: 'Total Load', value: '~700 kW' },
      { label: 'Rack Density', value: '50 kW' },
      { label: 'Cooling Source', value: '400kW CDU x2' },
      { label: 'Config', value: 'External Power' },
    ],
    features: [
      '100% Heat Removal via Liquid (No fans required), Ultra-Quiet.',
      'Ideal for Crypto Mining or Extreme HPC.',
    ],
  },
];

export const AICOOLIT_LAYER_SPECS = [
  { label: 'PROTECTION', value: 'IP65 Rated', icon: 'shield' },
  { label: 'INSULATION', value: 'R-30 Wall', icon: 'temperature' },
  { label: 'LOGISTICS', value: 'CSC Certified', icon: 'globe' },
];

// 4th spec rendered separately after the Layer 01 image (matching production layout)
export const AICOOLIT_LAYER_EXTRA_SPEC = { label: 'STRUCTURAL INTEGRITY', value: '10 Year Lifecycle', icon: 'structure' };

export const AICOOLIT_CDU_TABS = [
  {
    id: 'intelligent-cdu',
    title: 'Intelligent CDU',
    subtitle: 'Core Cooling Unit',
    badge: 'CORE',
    description: 'The "heart" of the liquid cooling system. Our in-row CDUs feature 1+1 redundant pumps and smart VFD flow control. It dynamically balances pressure and flow based on real-time server load, ensuring 100% uptime and optimal thermal performance.',
    tags: ['Dual-Pump Redundancy', 'Auto-Balance Logic', 'Touchscreen HMI', '1.5x Pressure Tested'],
    products: [
      { image: '/resources/Soeteck-Rack-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'Soeteck Rack CDU Coolant Distribution Unit', title: 'In-Rack CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicooli-rack-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-In-Row-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'Soeteck In-Row CDU Coolant Distribution Unit', title: 'In-Row CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-in-row-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-Room-CDU-Coolant-Distribution-Unit-1.webp', alt: 'Soeteck Room CDU Coolant Distribution Unit', title: 'In-Room CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-room-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-Liquid-to-Air-In-Row-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'Soeteck Hybrid CDU', title: 'Hybrid CDU', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-hybrid-cdu-coolant-distribution-unit/' },
    ],
    contentTitle: 'Intelligent Coolant Distribution Unit',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/?category%5B%5D=coolant-distribution-units',
  },
  {
    id: 'orbital-manifolds',
    title: 'Orbital Manifolds',
    subtitle: '316L Stainless Steel',
    badge: 'DISTRIBUTION',
    description: 'Main distribution arteries fabricated from 316L Medical-Grade Stainless Steel. We utilize advanced orbital welding technology to guarantee zero-leak joints and superior corrosion resistance over a 10-year lifecycle.',
    tags: ['Leak Detection', 'Passivation Treatment', 'Orbital Welding', 'Chemical Resistance'],
    products: [
      { image: '/resources/Soeteck-Rack-Manifold-for-Liquid-Cooling-Solutions-4-1024x717.webp', alt: 'Soeteck Rack Manifold for Liquid Cooling Solutions', title: 'Manifolds', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-rack-manifold-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Orbital Welded Manifolds',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-rack-manifold-for-liquid-cooling-solutions/',
  },
  {
    id: 'uqd-connectors',
    title: 'UQD Connectors',
    subtitle: 'Blind-Mate Ready',
    badge: 'INTERFACE',
    description: 'Blind-mate Universal Quick Disconnects fully compliant with OCP standards. Designed for safe, spill-free hot-swapping of server blades, even while the system is under pressure.',
    tags: ['OCP Compliant', 'Blind-Mate Ready', 'Non-Spill Tech', 'High Cycle Life'],
    products: [
      { image: '/resources/Soeteck-Quick-Disconnect-Coupling-for-Liquid-Cooling-Solutions-1-1024x717.webp', alt: 'Soeteck Quick Disconnect Coupling', title: 'UQD Connectors', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-quick-disconnect-coupling-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'UQD Connectors',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-quick-disconnect-coupling-for-liquid-cooling-solutions/',
  },
  {
    id: 'secondary-loop',
    title: 'Secondary Loop',
    subtitle: 'EPDM / Copper',
    badge: 'TRANSPORT',
    description: 'Robust rack-level fluid transport. We offer flexible EPDM braided hoses for versatility or rigid copper tubing for permanence. Engineered for full chemical compatibility with PG25 and various dielectric fluids.',
    tags: ['EPDM / Copper Options', 'Kink-Proof Design', 'High Pressure Rating', 'Chemical Resistance'],
    products: [
      { image: '/resources/Soeteck-Secondary-Loop-for-Liquid-Cooling-Solutions-1-1024x717.webp', alt: 'Soeteck Secondary Loop', title: 'Secondary Loop', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-secondary-loop-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Secondary Loop',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-secondary-loop-for-liquid-cooling-solutions/',
  },
  {
    id: 'heat-rejection',
    title: 'Heat Rejection',
    subtitle: 'Dry Coolers / Cooling Tower',
    badge: 'EXTERNAL',
    description: 'Efficient outdoor heat rejection systems. Our Adiabatic Dry Coolers utilize smart spray assist to maintain high cooling capacity even during peak summer temperatures, while conserving water compared to traditional towers.',
    tags: ['Water Saving', 'Low Noise', 'Smart Controls', 'EC Fan Technology'],
    products: [
      { image: '/resources/SOETECK-V-Shaped-Integrated-Outdoor-Air-Cooled-Condenser-1.webp', alt: 'SOETECK V-Shaped Outdoor Air Cooled Condenser', title: 'Dry Coolers', url: '' },
    ],
    contentTitle: 'Dry Coolers & Cooling Towers',
    contentUrl: '',
  },
];

// DEPRECATED: merged into AICOOLIT_CDU_TABS above (now 5 tabs)
// Keep exports for backward compatibility but no longer rendered separately
export const AICOOLIT_HEAT_REJECTION = {
  title: 'Dry Coolers & Cooling Towers',
  subtitle: 'EXTERNAL',
  description: 'Efficient outdoor heat rejection systems. Our Adiabatic Dry Coolers utilize smart spray assist to maintain high cooling capacity even during peak summer temperatures, while conserving water compared to traditional towers.',
  tags: ['Water Saving', 'Low Noise', 'Smart Controls', 'EC Fan Technology'],
};

export const AICOOLIT_SECONDARY_LOOP = {
  title: 'Secondary Loop',
  subtitle: 'TRANSPORT',
  description: 'Robust rack-level fluid transport. We offer flexible EPDM braided hoses for versatility or rigid copper tubing for permanence. Engineered for full chemical compatibility with PG25 and various dielectric fluids.',
  tags: ['EPDM / Copper Options', 'Kink-Proof Design', 'High Pressure Rating', 'Chemical Resistance'],
};

export const AICOOLIT_TRUST_BADGES = [
  { icon: 'medal', label: 'OCP Member' },
  { icon: 'check', label: 'ISO 9001' },
  { icon: 'lightbulb', label: 'CE Certified' },
  { icon: 'trending', label: 'Uptime TIER III' },
];

export const AICOOLIT_SUPPLY_CHAIN = [
  { title: '50,000 m² Smart Factory', text: 'Automated production lines capable of delivering 500+ modules annually.' },
  { title: 'Global Logistics Network', text: 'Strategic partnerships with major shipping lines ensure rapid deployment to Americas, EMEA, and APAC.' },
  { title: 'Supply Chain Security', text: 'Vertical integration from sheet metal to precision liquid loop assembly guarantees capacity when you need it.' },
];

export const AICOOLIT_FAQ = [
  {
    question: 'What happens if a liquid leak occurs?',
    answer: 'We employ a "Defense-in-Depth" strategy. First, our <strong>Negative Pressure</strong> design ensures that if a micro-leak occurs, air is sucked in rather than fluid spraying out. Second, intelligent leak detection sensors (rope & spot) are deployed at every manifold joint and CDU. If moisture is detected, the system instantly isolates the affected loop and alerts operators, preventing damage to IT equipment.',
  },
  {
    question: 'Do I need specialized staff to maintain the liquid loop?',
    answer: 'No. The AICoolit system is designed to be "set and forget". Routine maintenance is minimal—primarily checking fluid levels and filters annually. Our CDUs feature self-diagnostic capabilities. For server maintenance, our non-spill <strong>UQD connectors</strong> allow IT staff to hot-swap blades just as easily as in air-cooled racks, with no special plumbing skills required.',
  },
  {
    question: 'Is it compatible with NVIDIA H100/Blackwell GPUs?',
    answer: 'Absolutely. Our liquid cooling architecture is specifically engineered for high-TDP chips (up to 1000W+ per socket). We support standard OCP cold plates that fit NVIDIA, AMD, and Intel accelerators. Whether you are running HGX H100 clusters or future Blackwell architectures, our 100kW/rack density provides ample thermal headroom.',
  },
  {
    question: 'Can these units operate in extreme climates?',
    answer: 'Yes. The container shell is IP65 rated and R-30 insulated, decoupling the internal environment from the outside. For heat rejection, our adiabatic dry coolers maintain cooling efficiency even in ambient temperatures up to <strong>50°C (122°F)</strong>. We have successful deployments in Middle Eastern deserts and tropical Southeast Asian regions.',
  },
  {
    question: 'How fast can we deploy a 1MW cluster?',
    answer: 'Traditional builds take 18-24 months. With AICoolit, we can deliver a factory-tested 1MW module in <strong>5-10 weeks</strong>. Once on-site, installation involves simple power and water hookups, typically taking less than a week to commission. This allows you to start training your models months ahead of the competition.',
  },
];

export const AICOOLIT_CTA_OFFERS = [
  { label: 'Free TCO Analysis Report' },
  { label: 'Custom 3D Layout Drawing' },
  { label: 'Technical Specification Sheet' },
];

export const AICOOLIT_GPU_BADGES = ['NVIDIA HGX', 'INTEL Gaudi', 'AMD Instinct'];
