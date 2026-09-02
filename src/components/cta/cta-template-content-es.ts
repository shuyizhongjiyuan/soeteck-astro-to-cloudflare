import type { CtaTemplateContent } from './cta-template-content';

export const CTA_TEMPLATE_ES: CtaTemplateContent = {
  eyebrow: 'Hable con un Ingeniero',
  title: 'Comparta sus requisitos y obtenga una ruta de solución práctica.',
  text: 'Informe el tipo de instalación, carga y región. Nuestro equipo ayudará a identificar la configuración ideal.',
  checks: [
    { icon: 'manufacturing', label: 'Fabricación propia' },
    { icon: 'turnkey', label: 'Implementación llave en mano' },
    { icon: 'global', label: 'Red global de soporte' },
  ],
  buttons: [
    // 精简短译（2026-09-02）：避免 min-width 200px 按钮内折行，勿扩长
    { label: 'Contáctenos', href: '/es/contact-us/' },
    { label: 'Ver Productos', href: '/es/products/' },
    { label: 'Ver soluciones', href: '/es/solutions/' },
  ],
};