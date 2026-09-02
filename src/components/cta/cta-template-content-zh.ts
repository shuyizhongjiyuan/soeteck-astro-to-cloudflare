import type { CtaTemplateContent } from './cta-template-content';

export const CTA_TEMPLATE_ZH: CtaTemplateContent = {
  eyebrow: '咨询工程师',
  title: '告诉我们您的设施需求，获取实用的解决方案路径。',
  text: '请提供您的设施类型、负载、冷却需求、项目时间表及目标区域。我们的团队将帮助确定合适的电源、冷却或模块化数据中心配置。',
  checks: [
    { icon: 'manufacturing', label: '自有工厂制造' },
    { icon: 'turnkey', label: '交钥匙部署' },
    { icon: 'global', label: '全球服务网络' },
  ],
  buttons: [
    { label: '对接工程团队', href: '/zh/contact-us/' },
    { label: '浏览产品', href: '/zh/products/' },
    { label: '探索解决方案', href: '/zh/solutions/' },
  ],
};