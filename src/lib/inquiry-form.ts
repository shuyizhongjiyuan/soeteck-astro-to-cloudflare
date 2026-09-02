/**
 * 表单提交模块
 *
 * 提供表单提交、GTM dataLayer 事件推送和便捷提交函数。
 * 支持 JSON（无文件）和 multipart（有文件）两种模式。
 * 验证错误自动转换为用户友好提示。
 *
 * @package Soeteck\Astro
 */

import { collectTracking } from './collect-tracking';

export interface InquiryPayload {
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  whatsapp?: string;
  subject?: string;
  message?: string;
  product_id?: string;
  product_name?: string;
  product_url?: string;
  language: string;
  source_url: string;
  referrer: string;
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export interface InquiryResult {
  success: boolean;
  id: string;
  post_id?: number;
  channel?: string;
  product_name?: string;
}

/**
 * 字段验证错误 → 用户友好提示
 */
type FormLang = 'en' | 'zh' | 'ru' | 'pt' | 'es';

const FIELD_ERRORS: Record<string, Record<FormLang, string>> = {
  name:    { en: 'Please enter your name.', zh: '请输入您的姓名。', ru: 'Пожалуйста, введите ваше имя.', pt: 'Por favor, informe seu nome.', es: 'Por favor, ingrese su nombre.' },
  email:   { en: 'Please enter a valid email address.', zh: '请输入有效的邮箱地址。', ru: 'Пожалуйста, введите корректный адрес электронной почты.', pt: 'Por favor, informe um e-mail válido.', es: 'Por favor, ingrese un correo electrónico válido.' },
  company: { en: 'Please enter your company name.', zh: '请输入公司名称。', ru: 'Пожалуйста, введите название вашей компании.', pt: 'Por favor, informe o nome da sua empresa.', es: 'Por favor, ingrese el nombre de su empresa.' },
  country: { en: 'Please select your country.', zh: '请选择您所在的国家。', ru: 'Пожалуйста, выберите вашу страну.', pt: 'Por favor, selecione seu país.', es: 'Por favor, seleccione su país.' },
  phone:   { en: 'Please enter a valid phone number.', zh: '请输入有效的电话号码。', ru: 'Пожалуйста, введите корректный номер телефона.', pt: 'Por favor, informe um telefone válido.', es: 'Por favor, ingrese un número de teléfono válido.' },
  message: { en: 'Please enter your message.', zh: '请输入留言内容。', ru: 'Пожалуйста, введите текст сообщения.', pt: 'Por favor, escreva sua mensagem.', es: 'Por favor, ingrese su mensaje.' },
};

const GENERIC: Record<FormLang, string> = {
  en: 'Submission failed. Please try again or contact us directly.',
  zh: '提交失败，请重试或直接联系我们。',
  ru: 'Не удалось отправить. Попробуйте ещё раз или свяжитесь с нами напрямую.',
  pt: 'Falha no envio. Tente novamente ou entre em contato conosco diretamente.',
  es: 'Error al enviar. Inténtelo de nuevo o contáctenos directamente.',
};

function friendlyError(errBody: any, lang: string): string {
  const l: FormLang = (['zh', 'ru', 'pt', 'es'] as string[]).includes(lang) ? (lang as FormLang) : 'en';
  const params = errBody?.data?.params;
  const msg: string = errBody?.message || '';

  // WP REST API: { data: { params: { email: "..." } } }
  if (params && typeof params === 'object' && !Array.isArray(params)) {
    const field = Object.keys(params)[0];
    if (FIELD_ERRORS[field]) return FIELD_ERRORS[field][l];
  }

  // Extract field name from message text
  for (const [field, msgs] of Object.entries(FIELD_ERRORS)) {
    if (msg.toLowerCase().includes(field.toLowerCase())) {
      return msgs[l];
    }
  }

  return GENERIC[l];
}

/**
 * 提交询盘表单到 WordPress REST API
 */
export async function submitInquiry(
  payload: InquiryPayload,
  files?: FileList | null
): Promise<InquiryResult> {
  const apiBase = import.meta.env.PUBLIC_API_BASE || 'https://cms.soeteck.com/wp-json';
  const url = `${apiBase}/soeteck/v1/inquiry`;
  const lang = payload.language || 'en';

  const fetchOpts = (): RequestInit => {
    if (files && files.length > 0) {
      const fd = new FormData();
      Object.entries(payload).forEach(([k, v]) => { if (v !== undefined && v !== '') fd.append(k, v); });
      for (let i = 0; i < files.length; i++) fd.append('files[]', files[i]);
      return { method: 'POST', body: fd };
    }
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };
  };

  const resp = await fetch(url, fetchOpts());
  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(friendlyError(err, lang));
  }
  return resp.json();
}

/**
 * 向 GTM dataLayer 推送询盘事件
 */
export function pushInquiryToDataLayer(inquiry: {
  id: string;
  channel: string;
  product_name?: string;
}): void {
  if (typeof window === 'undefined') return;
  const dl = (window as any).dataLayer || [];
  dl.push({
    event: 'inquiry_submitted',
    inquiry_id: inquiry.id,
    inquiry_channel: inquiry.channel,
    inquiry_product: inquiry.product_name || '',
  });
  if (inquiry.channel === 'google_ads') {
    dl.push({
      event: 'inquiry_success',
      inquiry_id: inquiry.id,
      channel: 'google_ads',
    });
  }
}

/**
 * 便捷函数：采集 → 提交 → dataLayer → 跳转
 */
export async function submitContactForm(
  form: HTMLFormElement,
  fileInput?: HTMLInputElement | null
): Promise<void> {
  const tracking = collectTracking();
  const formData = new FormData(form);
  const lang = document.documentElement.lang || 'en';

  const payload: InquiryPayload = {
    name:        (formData.get('name') as string) || '',
    email:       (formData.get('email') as string) || '',
    company:     (formData.get('company') as string) || '',
    country:     (formData.get('country') as string) || '',
    phone:       (formData.get('phone') as string) || '',
    whatsapp:    (formData.get('whatsapp') as string) || '',
    subject:     (formData.get('subject') as string) || '',
    message:     (formData.get('message') as string) || '',
    language:    lang,
    source_url:  tracking.source_url,
    referrer:    tracking.referrer,
    gclid:       tracking.gclid,
    utm_source:  tracking.utm_source,
    utm_medium:  tracking.utm_medium,
    utm_campaign: tracking.utm_campaign,
    utm_term:    tracking.utm_term,
    utm_content: tracking.utm_content,
  };

  const productId = formData.get('product_id');
  if (productId) payload.product_id = productId as string;
  const productName = formData.get('product_name');
  if (productName) payload.product_name = productName as string;
  const productUrl = formData.get('product_url');
  if (productUrl) payload.product_url = productUrl as string;

  const result = await submitInquiry(payload, fileInput?.files ?? null);

  pushInquiryToDataLayer({
    id: result.id,
    channel: result.channel || (tracking.gclid ? 'google_ads' : 'direct'),
    product_name: payload.product_name,
  });

  const lang2 = document.documentElement.lang || 'en';
  window.location.href = `/${lang2}/thank-you/`;
}
