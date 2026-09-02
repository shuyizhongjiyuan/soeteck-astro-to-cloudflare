import type { CtaTemplateContent } from './cta-template-content';

export const CTA_TEMPLATE_RU: CtaTemplateContent = {
  eyebrow: 'Связаться с инженером',
  title: 'Расскажите о требованиях к объекту и получите практическое решение.',
  text: 'Сообщите тип объекта, нагрузку, требования к охлаждению и регион. Наша команда поможет определить подходящую конфигурацию.',
  checks: [
    { icon: 'manufacturing', label: 'Собственное производство' },
    { icon: 'turnkey', label: 'Сдача под ключ' },
    { icon: 'global', label: 'Глобальная сеть поддержки' },
  ],
  buttons: [
    // 精简短译（2026-09-02）：避免 min-width 200px 按钮内折行，勿扩长
    { label: 'Вопрос инженеру', href: '/ru/contact-us/' },
    { label: 'Смотреть каталог', href: '/ru/products/' },
    { label: 'Изучить решения', href: '/ru/solutions/' },
  ],
};