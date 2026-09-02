/**
 * Products page content — English base + type definition.
 *
 * Image/path constants are shared across all languages.
 * Language-specific text files (products-content-zh.ts, etc.) export the same
 * ProductsContent shape.
 *
 * @package Soeteck\Astro
 */

// ---------------------------------------------------------------------------
// Shared asset constants
// ---------------------------------------------------------------------------

export const CATEGORY_IMAGES: Record<string, { path: string; alt: string }> = {
  'critical-power': {
    path: '/resources/soeteck-critical-power.webp',
    alt: 'Soeteck Critical Power solutions — UPS, DC power, power distribution',
  },
  'thermal-management': {
    path: '/resources/soeteck-thermal-management.webp',
    alt: 'Soeteck Thermal Management solutions — precision cooling, liquid cooling',
  },
  'racks-enclosures': {
    path: '/resources/soeteck-racks-enclosures.webp',
    alt: 'Soeteck Racks & Enclosures — server racks, outdoor enclosures',
  },
  'monitoring-management': {
    path: '/resources/soeteck-monitoring-management.webp',
    alt: 'Soeteck Monitoring & Management solutions',
  },
};

// ---------------------------------------------------------------------------
// Content type
// ---------------------------------------------------------------------------

export interface SubcategoryLink {
  name: string;
  path: string;
  /** 第三层子分类（如 Precision Air Conditioning 下的 room/in-row/rack/pumped cooling） */
  children?: SubcategoryLink[];
}

export interface CategoryCard {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  subcategories: SubcategoryLink[];
  viewAllUrl: string;
  viewAllLabel: string;
}

export interface ProductsCta {
  eyebrow: string;
  title: string;
  text: string;
  buttonLabel: string;
}

export interface ProductsContent {
  heroTitle: string;
  heroDescription: string;
  categories: CategoryCard[];
  cta: ProductsCta;
}

// ---------------------------------------------------------------------------
// English text
// ---------------------------------------------------------------------------

export const PRODUCTS_EN: ProductsContent = {
  heroTitle: 'Products',
  heroDescription:
    'Soeteck offers reliable critical infrastructure technologies — from power and cooling to racks, enclosures, and intelligent monitoring — designed to safeguard mission-critical networks and data centers.',

  categories: [
    {
      slug: 'critical-power',
      title: 'Critical Power',
      description:
        'Uninterruptible power supplies, DC power systems, power distribution, static transfer switches, busway, and battery solutions to ensure continuous operation of critical equipment.',
      image: CATEGORY_IMAGES['critical-power'].path,
      imageAlt: CATEGORY_IMAGES['critical-power'].alt,
      viewAllUrl: '/products/critical-power/',
      viewAllLabel: 'View All Critical Power',
      subcategories: [
        { name: 'Uninterruptible Power Supplies', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { name: 'DC Power Systems', path: '/products/critical-power/dc-power-systems/' },
        { name: 'Power Distribution', path: '/products/critical-power/power-distribution/' },
        { name: 'Static Transfer Switches', path: '/products/critical-power/static-transfer-switches/' },
        { name: 'Busway and Busduct', path: '/products/critical-power/busway-and-busduct/' },
        { name: 'Battery', path: '/products/critical-power/battery/' },
      ],
    },
    {
      slug: 'thermal-management',
      title: 'Thermal Management',
      description:
        'Precision air conditioning, liquid cooling, heat rejection, and free cooling solutions for data centers, telecom rooms, and high-density computing environments.',
      image: CATEGORY_IMAGES['thermal-management'].path,
      imageAlt: CATEGORY_IMAGES['thermal-management'].alt,
      viewAllUrl: '/products/thermal-management/',
      viewAllLabel: 'View All Thermal Management',
      subcategories: [
        { name: 'Liquid Cooling Solutions', path: '/products/thermal-management/liquid-cooling-solutions/' },
        {
          name: 'Precision Air Conditioning',
          path: '/products/thermal-management/precision-air-conditioning/',
          children: [
            { name: 'Room Cooling', path: '/products/thermal-management/precision-air-conditioning/room-cooling/' },
            { name: 'In-Row Cooling', path: '/products/thermal-management/precision-air-conditioning/in-row-cooling/' },
            { name: 'Rack Cooling', path: '/products/thermal-management/precision-air-conditioning/rack-cooling/' },
            { name: 'Pumped Refrigerant Cooling', path: '/products/thermal-management/precision-air-conditioning/pumped-refrigerant-cooling/' },
          ],
        },
        { name: 'Telecom Enclosure Air Conditioner', path: '/products/thermal-management/telecom-enclosure-air-conditioner/' },
        { name: 'Heat Rejection', path: '/products/thermal-management/heat-rejection/' },
        { name: 'Free Cooling Chillers', path: '/products/thermal-management/free-cooling-chillers/' },
        { name: 'Evaporative Free Cooling', path: '/products/thermal-management/evaporative-free-cooling/' },
      ],
    },
    {
      slug: 'racks-enclosures',
      title: 'Racks & Enclosures',
      description:
        'Server racks, outdoor enclosures, and integrated solutions that provide modular support and protection for critical IT and facilities infrastructure.',
      image: CATEGORY_IMAGES['racks-enclosures'].path,
      imageAlt: CATEGORY_IMAGES['racks-enclosures'].alt,
      viewAllUrl: '/products/racks-enclosures/',
      viewAllLabel: 'View All Racks & Enclosures',
      subcategories: [
        { name: 'Racks & Cabinets', path: '/products/racks-enclosures/racks-cabinets/' },
        { name: 'Outdoor Enclosures', path: '/products/racks-enclosures/outdoor-enclosures/' },
      ],
    },
    {
      slug: 'monitoring-management',
      title: 'Monitoring & Management',
      description:
        'Infrastructure monitoring, intelligent controls, environmental sensors, and centralized management systems to increase equipment availability and efficiency.',
      image: CATEGORY_IMAGES['monitoring-management'].path,
      imageAlt: CATEGORY_IMAGES['monitoring-management'].alt,
      viewAllUrl: '/products/monitoring-management/',
      viewAllLabel: 'View All Monitoring & Management',
      subcategories: [
        { name: 'Monitoring Host', path: '/products/monitoring-management/monitoring-host/' },
        { name: 'Environmental Sensor', path: '/products/monitoring-management/environmental-sensor/' },
        { name: 'Battery Monitoring System', path: '/products/monitoring-management/battery-monitoring-system/' },
        { name: 'Rack Asset Management', path: '/products/monitoring-management/rack-asset-management/' },
        { name: 'KVM', path: '/products/monitoring-management/kvm/' },
      ],
    },
  ],

  cta: {
    eyebrow: 'Get in Touch',
    title: "Let's build your critical infrastructure together",
    text: 'Talk to a Soeteck specialist about power, cooling, racks, and monitoring solutions for your next project.',
    buttonLabel: 'Contact Us',
  },
};