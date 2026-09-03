// Header 导航辅助函数（从 Header.astro frontmatter 提取,供 Header + 子菜单组件共用）
// 纯函数,不含 Astro 全局;lang 参数显式传入,getLanguageUrl 兼容传入当前路径。
import type { MenuItem } from '@/lib/content-api';
import { getUITranslation } from '@/lib/translations';

// 基于当前语言,把 API 的 /en/ 路径转为当前语言路径
export function localizePath(apiPath: string, lang: string): string {
  if (lang === 'en') return apiPath;
  return apiPath.replace(/^\/en\//, `/${lang}/`);
}

// 翻译导航顶层标签
const navMap: Record<string, string> = {
  'Products': 'nav.products',
  'Solutions': 'nav.solutions',
  'News & Insights': 'nav.news',
  'About Soeteck': 'nav.about',
  'Contact Us': 'nav.contact',
  'Home': 'nav.home',
};
export function translateNav(title: string, lang: string): string {
  if (lang === 'en') return title;
  const key = navMap[title];
  return key ? getUITranslation(lang, key) : title;
}

// 翻译 Mega Menu 中的分类标题
export const categoryMap: Record<string, string> = {
  'Critical Power': 'category.criticalPower',
  'Thermal Management': 'category.thermalManagement',
  'Racks & Enclosures': 'category.racksEnclosures',
  'Monitoring & Management': 'category.monitoringManagement',
  'Prefabricated Data Center': 'category.prefabDC',
  'Colocation Data Center': 'category.colocationDC',
  'Edge Computing': 'category.edgeComputing',
  'News Releases': 'category.newsReleases',
  'Blogs': 'category.blogs',
  'Client Case Studies': 'category.caseStudies',
  'Liquid Cooling Data Center': 'solutions.liquidCoolingDC',
  'Liquid Cooling DC': 'solutions.liquidCoolingDC',
  'Prefabricated Container Data Center': 'solutions.prefabContainerDC',
  'Prefab Container DC': 'solutions.prefabContainerDC',
  'Cabinet Modular Data Center': 'solutions.cabinetModularDC',
  'Cabinet Modular DC': 'solutions.cabinetModularDC',
  'Row Modular Data Center': 'solutions.rowModularDC',
  'Row Modular DC': 'solutions.rowModularDC',
  'Aisle Modular Data Center': 'solutions.aisleModularDC',
  'Aisle Modular DC': 'solutions.aisleModularDC',
  'AI Data Center Infrastructure': 'solutions.aiDataCenter',
  'AI Data Center': 'solutions.aiDataCenter',
  'Data Center Cooling Solutions': 'solutions.dataCenterCooling',
  'Data Center Cooling': 'solutions.dataCenterCooling',
  'Uninterruptible Power Supplies': 'products.uninterruptiblePowerSupplies',
  'DC Power Systems': 'products.dcPowerSystems',
  'Power Distribution': 'products.powerDistribution',
  'Static Transfer Switches': 'products.staticTransferSwitches',
  'Busway and Busduct': 'products.buswayAndBusduct',
  'Battery': 'products.battery',
  'Liquid Cooling Solutions': 'products.liquidCoolingSolutions',
  'Precision Air Conditioning': 'products.precisionAirConditioning',
  'Room Cooling': 'products.roomCooling',
  'In-Row Cooling': 'products.inRowCooling',
  'Rack Cooling': 'products.rackCooling',
  'Pumped Refrigerant Cooling': 'products.pumpedRefrigerantCooling',
  'Telecom Enclosure Air Conditioner': 'products.telecomEnclosureAirConditioner',
  'Heat Rejection': 'products.heatRejection',
  'Evaporative Free Cooling': 'products.evaporativeFreeCooling',
  'Free Cooling Chillers': 'products.freeCoolingChillers',
  'Integrated Containments': 'products.integratedContainments',
  'Outdoor Enclosures': 'products.outdoorEnclosures',
  'Racks & Cabinets': 'products.racksAndCabinets',
  'Monitoring Host': 'products.monitoringHost',
  'Battery Monitoring System': 'products.batteryMonitoringSystem',
  'Environmental Sensor': 'products.environmentalSensor',
  'Rack Asset Management': 'products.rackAssetManagement',
  'KVM': 'products.kvm',
};
export function translateCategoryTitle(title: string, lang: string): string {
  if (lang === 'en') return title;
  const key = categoryMap[title];
  return key ? getUITranslation(lang, key) : title;
}

// 解决方案卡片描述映射：title → shared.json key
const solutionDescMap: Record<string, string> = {
  'Liquid Cooling Data Center': 'solutions.liquidCoolingDCDesc',
  'Liquid Cooling DC': 'solutions.liquidCoolingDCDesc',
  'Prefabricated Container Data Center': 'solutions.prefabContainerDCDesc',
  'Prefab Container DC': 'solutions.prefabContainerDCDesc',
  'Cabinet Modular Data Center': 'solutions.cabinetModularDCDesc',
  'Cabinet Modular DC': 'solutions.cabinetModularDCDesc',
  'Row Modular Data Center': 'solutions.rowModularDCDesc',
  'Row Modular DC': 'solutions.rowModularDCDesc',
  'Aisle Modular Data Center': 'solutions.aisleModularDCDesc',
  'Aisle Modular DC': 'solutions.aisleModularDCDesc',
  'AI Data Center Infrastructure': 'solutions.aiDataCenterDesc',
  'AI Data Center': 'solutions.aiDataCenterDesc',
  'Data Center Cooling Solutions': 'solutions.dataCenterCoolingDesc',
  'Data Center Cooling': 'solutions.dataCenterCoolingDesc',
};

// 解决方案图标映射：title → AidcIcon name
export const solutionIconMap: Record<string, string> = {
  'AI Data Center Infrastructure': 'ai',
  'AI Data Center': 'ai',
  'Liquid Cooling Data Center': 'liquid',
  'Liquid Cooling DC': 'liquid',
  'Prefabricated Container Data Center': 'prefab',
  'Prefab Container DC': 'prefab',
  'Cabinet Modular Data Center': 'cabinet',
  'Cabinet Modular DC': 'cabinet',
  'Row Modular Data Center': 'row',
  'Row Modular DC': 'row',
  'Aisle Modular Data Center': 'aisle',
  'Aisle Modular DC': 'aisle',
  'Data Center Cooling Solutions': 'ac',
  'Data Center Cooling': 'ac',
};

// Detect menu variant type from URL path (fallback when API type is 'default')
export function detectMenuType(item: { path?: string; type?: string; children?: unknown[] }): string {
  if (item.type && item.type !== 'default') return item.type;
  const p = (item.path || '').toLowerCase();
  if (p.includes('/products')) return 'product';
  if (p.includes('/solutions')) return 'solution';
  if (p.includes('/news')) return 'news';
  return 'default';
}

// 生成目标语言的当前页面链接（currentPath 从组件 Astro.url.pathname 传入）
export function getLanguageUrl(targetLang: string, currentPath: string): string {
  const pathWithoutLang = currentPath.replace(/^\/(en|zh|ru|pt|es)/, '') || '/';
  return `/${targetLang}${pathWithoutLang}`;
}

// 从 API 预计算 featured/other 方案（桌面 megamenu solution 分支需用）
export function computeSolutionCards(item: MenuItem) {
  const solutionChildren = item.children ?? [];
  const normPath = (p: string) => p.replace(/^\/[a-z]{2}\//, '/');
  const featured =
    solutionChildren.find((c) =>
      normPath((c as { path?: string }).path ?? '').endsWith('/solutions/data-center-solutions/ai-data-center/')
    ) ?? solutionChildren[0];
  const featuredIsAidc =
    !!featured &&
    normPath((featured as { path?: string }).path ?? '').endsWith('/solutions/data-center-solutions/ai-data-center/');
  const others = solutionChildren.filter((c) => c !== featured);
  return { featured, featuredIsAidc, others };
}

export { solutionDescMap };
export type { MenuItem };