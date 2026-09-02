import type { CtaTemplateContent } from './cta-template-content';

export const CTA_TEMPLATE_PT: CtaTemplateContent = {
  eyebrow: 'Fale com um Engenheiro',
  title: 'Compartilhe seus requisitos e obtenha um caminho prático de solução.',
  text: 'Informe o tipo de instalação, carga e região. Nossa equipe ajudará a identificar a configuração ideal.',
  checks: [
    { icon: 'manufacturing', label: 'Fabricação própria' },
    { icon: 'turnkey', label: 'Entrega turnkey' },
    { icon: 'global', label: 'Rede global de suporte' },
  ],
  buttons: [
    // 精简短译（2026-09-02）：避免 min-width 200px 按钮内折行，勿扩长
    { label: 'Falar Engenharia', href: '/pt/contact-us/' },
    { label: 'Ver Produtos', href: '/pt/products/' },
    { label: 'Explorar Soluções', href: '/pt/solutions/' },
  ],
};