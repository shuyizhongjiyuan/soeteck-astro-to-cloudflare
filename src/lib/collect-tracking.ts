// src/lib/collect-tracking.ts

export interface TrackingData {
  gclid: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  keyword: string;
  source_url: string;
  referrer: string;
}

/**
 * 从当前页面 URL 采集所有追踪参数
 * 应在页面加载后尽早调用
 */
export function collectTracking(): TrackingData {
  if (typeof window === 'undefined') {
    return {
      gclid: '', utm_source: '', utm_medium: '', utm_campaign: '',
      utm_term: '', utm_content: '', keyword: '',
      source_url: '', referrer: '',
    };
  }
  const params = new URLSearchParams(window.location.search);
  const gclid = params.get('gclid') ?? '';
  const gbraid = params.get('gbraid') ?? '';
  const wbraid = params.get('wbraid') ?? '';
  const q = params.get('q') ?? params.get('keyword') ?? params.get('kwd') ?? '';

  return {
    gclid: gclid || gbraid || wbraid || '',
    utm_source: params.get('utm_source') ?? '',
    utm_medium: params.get('utm_medium') ?? '',
    utm_campaign: params.get('utm_campaign') ?? '',
    utm_term: params.get('utm_term') ?? '',
    utm_content: params.get('utm_content') ?? '',
    keyword: q,
    source_url: window.location.href,
    referrer: document.referrer || '',
  };
}
