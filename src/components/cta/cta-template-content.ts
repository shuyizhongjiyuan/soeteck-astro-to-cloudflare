// 统一 CTA 模板默认内容（五语言）——「首页以外、无特殊需求页面一律采用 About 页 CTA 形态」的默认内容源（ADR-033 / component-library §12.1）
// 值镜像 about-content*.ts 的 cta 块（含 RU/PT/ES 精简短译，避免 200px 按钮折行，勿扩长）。
export interface CtaTemplateContent {
  eyebrow: string;
  title: string;
  text: string;
  checks: Array<string | { icon?: string; label: string }>;
  buttons: Array<{ label: string; href: string }>;
}

export const CTA_TEMPLATE_EN: CtaTemplateContent = {
  eyebrow: 'Talk to an Engineer',
  title: 'Get in Touch with SOETECK',
  text: 'Share your facility requirements and get a practical solution path. Tell us your project type, capacity needs, and timeline — our team will help identify the right configuration.',
  checks: [
    { icon: 'manufacturing', label: 'In-house Manufacturing' },
    { icon: 'turnkey', label: 'Turnkey Deployment' },
    { icon: 'global', label: 'Global Support Network' },
  ],
  buttons: [
    { label: 'Talk to Engineering', href: '/en/contact-us/' },
    { label: 'Browse Products', href: '/en/products/' },
    { label: 'Explore Solutions', href: '/en/solutions/' },
  ],
};