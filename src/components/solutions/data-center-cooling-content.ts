/**
 * Data Center Cooling Solutions — code-embedded content.
 * Migrated from the legacy Bricks page (soeteck.com/en/solutions/data-center-cooling-solutions/).
 *
 * Multilingual (Batch 3): per-language mirrors live in
 * `data-center-cooling-content-{zh,ru,pt,es}.ts` — export names identical to EN;
 * DataCenterCoolingPage.astro picks the namespace by `lang`.
 * Terminology authority: tmp/translation-batch3/TERMINOLOGY-AND-RULES.md.
 */

export const DCC_HERO = {
  eyebrow: 'Data Center Precision ACs',
  // 页面名（hero H1）按术语包 §一 CMS display_title：Data Center Cooling Solutions
  title: 'Data Center Cooling Solutions',
  subtitle:
    'Soeteck provides you with cost-efficient thermal management solutions for data centers, telecom stations, labs, and all critical facilities.',
  bannerImage: '/resources/soeteck-data-center-banner-1.webp',
  bannerAlt: 'Data Center Precision Cooling',
};

export const DCC_SECTION_INTRO = {
  title: 'Precision Air Conditioners',
  subtitle:
    'Covering a full range of precision cooling units, our mission-critical cooling solutions are committed to addressing your varied cooling requirements.',
};

/** 区头标题（模板原先写死的 4 个 h2） */
export const DCC_SECTION_HEADINGS = {
  applications: 'Applications',
  services: 'Services',
  cases: 'Featured Case Studies',
  moments: 'Moments with Clients',
};

export interface DccProductCard {
  name: string;
  capacity: string;
  description: string;
  image: string;
  /** 生产站真实跳转（对齐旧 Bricks 卡片 href；Astro 渲染时按 lang 前缀） */
  link: string;
}

export const DCC_PAC_PRODUCTS: DccProductCard[] = [
  {
    name: 'Room Precision ACs',
    capacity: '7.5 – 265.8 kW',
    description:
      'DataCool Series Precision Air Conditioners (PACs) are engineered to deliver the massive cooling capacity (7.5kW-265.8kW) required by large-scale computer rooms and data centers, with multi-cooling options including air-cooled, water-cooled and chilled-water cooled. Boasting EER ≥ 3.0 for cost efficiency and flexible scalability (supports single/dual systems), they can reduce your initial investment and seamlessly expand in future.',
    image: '/resources/Soeteck-chilled-water-room-cooling-system-38.2-265.8kW-4.webp',
    link: '/products/thermal-management/precision-air-conditioning/room-cooling/',
  },
  {
    name: 'In-Row Precision ACs',
    capacity: '7.5 – 93.2 kW',
    description:
      'DataRow Series Precision Air Conditioners (PACs) are designed for placement between cabinets of row modular data centers or aisle modular data centers. Featuring advanced intelligent control and flexible cooling capacity (adjustable from 20-100%), they boost the energy efficiency of standard air-cooled units by 33.3%-50%.',
    image: '/resources/SOETECK-Row-Mounted-Pumped-Refrigerant-Cooling-System-1.webp',
    link: '/products/thermal-management/precision-air-conditioning/in-row-cooling/',
  },
  {
    name: 'Rack Precision ACs',
    capacity: '2.5 – 12.5 kW',
    description:
      'DataRack Series Precision Air Conditioners (PACs) are tailored for direct integration into standard server racks in cabinet modular data centers, with a 3.5kW-12.5kW cooling capacity range and compact 6U-12U height. Equipped with R410A green refrigerant and precision controllers, they optimize cooling efficiency for high-density IT equipment while cutting unnecessary energy consumption.',
    image: '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
    link: '/products/thermal-management/precision-air-conditioning/rack-cooling/',
  },
  {
    name: 'Wall-Mounted Precision ACs',
    capacity: '12.5 – 21.2 kW',
    description:
      'Soeteck Wall-Mounted Precision ACs offers high-efficiency cooling for indoor and outdoor packaged applications. Advanced components, including an inverter refrigerant pump and smart controller, ensure precise performance, making it an ideal choice for prefabricated container data centers. It reduces PUE while supporting dual-mode operation for optimized energy efficiency.',
    image: '/resources/SOETECK-Wall-Mounted-Hybrid-Refrigerant-Green-Cooling-3.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-wall-mounted-pumped-refrigerant-cooling-system-indoor-and-outdoor-packaged/',
  },
  {
    name: 'Enclosure Precision ACs',
    capacity: '12.5 – 21.2 kW',
    description:
      'Soeteck Enclosure Precision ACs delivers high-efficiency cooling for enclosed and packaged applications. Advanced components, including an inverter refrigerant pump and smart controller, ensure precise performance, making it an ideal choice for prefabricated container data centers. It reduces PUE while supporting dual-mode operation for optimized energy efficiency.',
    image: '/resources/DC-Powered-TEC-Air-Conditioner-3.webp',
    link: '/products/thermal-management/telecom-enclosure-air-conditioner/',
  },
  {
    name: 'Outdoor Units',
    capacity: '12.5 – 21.2 kW',
    description:
      'Soeteck Outdoor Units offer high-efficiency heat rejection for precision cooling systems. Advanced components, including an inverter refrigerant pump and smart controller, ensure precise performance, making it an ideal choice for prefabricated container data centers. It reduces PUE while supporting dual-mode operation for optimized energy efficiency.',
    image: '/resources/SOETECK-Outdoor-Air-Cooled-Condenser-UprightHorizontal-Installation-8.webp',
    link: '/products/thermal-management/heat-rejection/',
  },
];

export const DCC_SECTION_FANWALL = {
  title: 'Fan Wall Precision Cooling System',
  subtitle:
    'For medium-to-large cooling needs, our fan wall system provides more reliable and energy-efficient precision solutions for addressing new & old data centers’ load-adaptive cooling',
};

export const DCC_FANWALL_PRODUCTS: DccProductCard[] = [
  {
    name: 'Modular Fan Wall',
    capacity: '150.1 – 300.1 kW',
    description:
      'Soeteck FO.GBE Series Fan Wall Units are energy-saving precision cooling system, suitable for computer room environments such as data centers, communication centers, computer centers, and control centers. Not only energy efficiency, but also they are low noise, modular prefabrication, fan redundancy design and other functions.',
    image: '/resources/SOETECK-FO.GBE-Modular-Fanwall-Cooling-2.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-fo-gbe-modular-fanwall-cooling-150-1kw-300-1kw-capacity/',
  },
  {
    name: 'Integrated Fan Wall',
    capacity: '30.2 – 60.1 kW',
    description:
      'Soeteck FO.WL Series Fan Wall Units are medium-to-large precision environmental control systems with an integrated structure, scalable cooling capacity and small footprint. Server hot air enters directly for cooling; they suit equipment rooms or data centers, ensuring reliable, safe operation of precision devices.',
    image: '/resources/SOETECK-FO.WL-Fan-Wall-4.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-fo-wl-fan-wall-cooling-units/',
  },
];

// 注：顶层字符串导出显式注 `: string`——避免 const 字面量类型让 `Record<string, typeof C_EN>`
// 拒收语言镜像文件（术语包 §四：优先结构一致，保住模板类型安全）。
export const DCC_APPLICATIONS_INTRO: string =
  'Our PAC solutions are used as CRAC, server room cooling, data center cooling units and all types of HVAC in data centers, telecom, laboratories and museums.';

export interface DccApplication {
  title: string;
  description: string;
  image: string;
}

export const DCC_APPLICATIONS: DccApplication[] = [
  {
    title: 'Data Centers',
    description:
      'Continuous server heat loads demand high-airflow precision cooling, holding ±1 °C, ±5 %RH, preventing hotspots and ensuring 24×7 digital availability.',
    image: '/resources/soeteck-data-center-cooling-1.webp',
  },
  {
    title: 'Telecom Facilities',
    description:
      'Switch centers and 5G equipment rely on precision air conditioners maintaining tight climate control, dust filtration, guaranteeing uninterrupted network service.',
    image: '/resources/soeteck-telecom-facilities-2.webp',
  },
  {
    title: 'Laboratories',
    description:
      'Analytical labs need stable ±1 °C, controlled humidity and cleanliness; precision systems avoid thermal drift, protect reagents, ensure repeatable experiments.',
    image: '/resources/Soeteck-Laboratories-2.webp',
  },
  {
    title: 'Museums & Archives',
    description:
      'Rare books and artworks survive decades when precision cooling keeps 20 °C, 50 %RH, gentle filtration, stopping mold, acidity, warping.',
    image: '/resources/Soeteck-Museums-Archives-Cooling-2.webp',
  },
];

export const DCC_SERVICES_INTRO: string =
  'Our dedicated team provides a range of tailored services to ensure you receive the highest quality of precision air conditioners for both today and the future.';

export interface DccService {
  title: string;
  description: string;
  icon: string;
}

export const DCC_SERVICES: DccService[] = [
  {
    title: 'OEM/ODM',
    description:
      'We provide OEM/ODM services, allowing you to customize products to align with your unique brand and design specifications.',
    icon: 'factory',
  },
  {
    title: 'Consultation',
    description:
      'Professional sales team will interface with your unique needs, consulting with our product support experts to provide you with tailored purchasing advice.',
    icon: 'chat',
  },
  {
    title: 'Design',
    description:
      'Experts collaborate with you during the product design phase to create innovative and efficient cooling solutions that meet your specific requirements.',
    icon: 'pen',
  },
  {
    title: 'Production',
    description:
      'Our state-of-the-art manufacturing processes ensure high-quality production of cooling systems that adhere to industry standards and your specifications.',
    icon: 'gear',
  },
  {
    title: 'Quality Assurance',
    description:
      'Stringent quality control measures throughout production guarantee product reliability. And quality report can be provided on demands.',
    icon: 'check',
  },
  {
    title: 'After-sales Support',
    description:
      'Experienced support team delivers worry-free after-sales services, and professional skill training keep your system running at all times.',
    icon: 'headset',
  },
];

export const DCC_WHY = {
  title: 'Why Choose Us',
  manufacturing: {
    title: 'Advanced Manufacturing Facility',
    description:
      'At SOETECK, we prioritize product innovation and research and development, supported by advanced facilities that include laboratories for electromagnetic compatibility, enthalpy difference analysis, environmental reliability, noise and vibration testing, power measurement, and IP protection. These state-of-the-art labs enable us to rigorously test our products, ensuring they meet the highest standards of performance and reliability.',
    statsAria: 'Soeteck at a glance',
    factoryAria: 'SOETECK manufacturing facility',
    icon: 'factory',
    stats: [
      { value: 11, suffix: '+', label: 'Year Experience' },
      { value: 500, suffix: '+', label: 'Million Revenue' },
      { value: 120, suffix: '+', label: 'National Employees' },
      { value: 80, suffix: '+', label: 'Covered Countries' },
    ],
    factoryImages: [
      '/resources/soeteck-factory-12-1.jpg',
      '/resources/soeteck-factory-3-1.jpg',
      '/resources/soeteck-factory-2-1.jpg',
      '/resources/soeteck-factory-7-1.jpg',
      '/resources/soeteck-factory-6-1.jpg',
      '/resources/soeteck-factory-9-1.jpg',
      '/resources/soeteck-factory-8-1.jpg',
      '/resources/soeteck-factory-10-1.jpg',
      '/resources/soeteck-factory-11-1.jpg',
      '/resources/soeteck-factory-4-1.jpg',
      '/resources/soeteck-factory-5-1.jpg',
      '/resources/soeteck-factory-1-1.jpg',
    ],
  },
  certificates: {
    title: 'Featured Certificates',
    description:
      'We are committed to maintaining rigorous quality and environmental management practices, as reflected in our certifications: ISO9001 for quality management, ISO14001 for environmental management, and ISO45001 for occupational health and safety. Additionally, our products comply with international standards and are certified by organizations such as CE, reinforcing our dedication to safety, sustainability, and excellence.',
    certsAria: 'Featured certificates',
    icon: 'award',
    items: [
      { image: '/resources/Soeteck-CE-Certificates-for-PAC-1.webp', label: 'Soeteck CE for PAC' },
      { image: '/resources/Soeteck-CE-Certificates-for-UPS.webp', label: 'Soeteck CE for UPS' },
      { image: '/resources/Soeteck-ISO9001-2.webp', label: 'Soeteck ISO9001' },
      { image: '/resources/Soeteck-ISO14001-12.webp', label: 'Soeteck ISO14001' },
      { image: '/resources/Soeteck-ISO45001-2.webp', label: 'Soeteck ISO45001' },
      { image: '/resources/Soeteck-UPS-IEC.webp', label: 'Soeteck UPS IEC' },
    ],
  },
};

export const DCC_CASES_INTRO: string =
  'Discover how we deliver innovative PAC solutions through real-world success stories. These case studies highlight our expertise in overcoming complex challenges and driving measurable results for clients across industries.';

export interface DccCase {
  imgSrc: string;
  title: string;
  slug: string;
  desc: string;
}

export const DCC_CLIENT_CASES: DccCase[] = [
  {
    imgSrc: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp',
    title:
      'Sinus-Dochi LLC Reduces PUE and Enhances Cooling Efficiency With SOETECK’s Smart Precision Cooling System',
    slug: 'sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system',
    desc: 'Sinus-Dochi LLC, a prominent HVAC service company in Mongolia, specializes in refrigeration and boasts a team of expert engineers. The company sought to improve the energy efficiency and cooling performance of its data center facility. To achieve this, Sinus-Dochi partnered with SOETECK to design and implement a cutting-edge precision cooling system tailored to their needs.',
  },
  {
    imgSrc: '/resources/prefab-modular-data-center-of-Saudi-Telecom-6.webp',
    title:
      'Driving Innovation: SOETECK Provides Saudi Telecom with Advanced Mobile OLT Container Data Center Solutions',
    slug: 'driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions',
    desc: 'The DR project for Saudi Telecom was initiated to design and implement a fully customizable mobile OLT (Optical Line Terminal) container data center, enhancing operational capabilities for telecom operators across the Middle East. This innovative solution enables the swift deployment of advanced business applications while ensuring high efficiency and reliability.',
  },
  {
    imgSrc: '/resources/100KW-Cooling-System-Solution-In-Malaysia-0.webp',
    title:
      'Open DC Malaysia Deploys Modular 100KW Air-cooled Precision Cooling for Data Center Retrofit',
    slug: 'open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit',
    desc: 'Open DC Malaysia is a prominent cloud service network technology company specializing in server storage services. The company undertook a retrofit of its existing data center to upgrade cooling infrastructure to meet new operational demands.',
  },
  {
    imgSrc: '/resources/a-project-of-Telecom-Fiji-1.webp',
    title:
      'Telecom Fiji Enhances Network Stability With SOETECK’s Precision Cooling Solutions Featuring Anti-Corrosion Design',
    slug: 'telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design',
    desc: 'Telecom Fiji Limited, a leading provider of fixed-line communication and networking services in Fiji, faced critical operational risks due to inadequate cooling systems in its coastal telecom stations. Many facilities relied on undersized residential air conditioning units, which struggled to manage the heat generated by 24/7 telecom equipment and were vulnerable to corrosion from Fiji’s coastal environment.',
  },
];

export const DCC_MOMENTS_INTRO: string =
  'At Soeteck, we cherish every connection. From insightful visits to hands-on experiences, here are the stories that shape our future together. Want to be part of it? Reach out to schedule your visit and let’s create your moment!';

export const DCC_MOMENTS_IMAGES: { src: string; alt: string }[] = [
  { src: '/resources/Soeteck-and-Fiber-Ocean-3.webp', alt: 'Soeteck and Fiber Ocean team visit' },
  { src: '/resources/Soeteck-and-Russian-clients-16.webp', alt: 'Soeteck with Russian clients' },
  { src: '/resources/Soeteck-and-Russian-clients-15.webp', alt: 'Soeteck with Russian clients' },
  { src: '/resources/Soeteck-and-Russian-clients-14.webp', alt: 'Soeteck with Russian clients' },
  { src: '/resources/Soeteck-and-Russian-clients-13.webp', alt: 'Soeteck with Russian clients' },
  { src: '/resources/Soeteck-and-Russian-clients-12.webp', alt: 'Soeteck with Russian clients' },
  { src: '/resources/Soeteck-and-Russian-clients-11.webp', alt: 'Soeteck with Russian clients' },
  { src: '/resources/Soeteck-and-Russian-clients-10.webp', alt: 'Soeteck with Russian clients' },
];

export const DCC_CTA = {
  eyebrow: 'Talk to an Engineer',
  title: 'Get in Touch with SOETECK',
  text: 'We’re just a few clicks away! Complete the form below now to get our full support and lay the foundation for your future success.',
};