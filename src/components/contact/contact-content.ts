/**
 * Contact page content — English base + type definition.
 *
 * Language-specific files (contact-content-zh.ts, etc.) export the same shape.
 *
 * @package Soeteck\Astro
 */

export interface ContactContent {
  heroDesc: string;
  formTitle: string;
  emailLabel: string;
  wechatLabel: string;
  addressLabel: string;
}

export const CONTACT_EN: ContactContent = {
  heroDesc:
    '24/7 customer service, quotes, consultations, and expert advice on product selection.',
  formTitle: 'Tell Us What You Want.',
  emailLabel: 'Email:',
  wechatLabel: 'Wechat:',
  addressLabel: 'Address:',
};

/**
 * Country list for the contact form dropdown.
 * Re-exported from the canonical source for backward compatibility.
 */
export { COUNTRIES } from '@/lib/countries';