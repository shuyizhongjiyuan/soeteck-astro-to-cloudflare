/**
 * 地理分层检测（ADR-023 / spec 2026-08-20-consent-tracking-design §4）
 *
 * 生产环境由 Cloudflare Worker 提供 `/_geo`，返回 { country: "CN" }。
 * 前端本地缓存国家码，超时/无 Worker 时兜底按 EEA 严格档（deny）处理。
 *
 * 三级地区：
 *   - eea   —— GDPR opt-in，需弹横幅，默认 deny 直到用户选择
 *   - us    —— CCPA opt-out，不主动弹，默认 grant，识别 GPC 作为退出请求
 *   - rest  —— 无同意要求，默认 grant，全量
 */

export type GeoRegion = 'eea' | 'us' | 'rest';
export type GeoSource = 'worker' | 'cache' | 'fallback';

export interface GeoResult {
  region: GeoRegion;
  country: string | null;
  source: GeoSource;
}

const GEO_CACHE_KEY = 'soeteck_geo';
const GEO_TIMEOUT_MS = 2500;

/**
 * 解析 geoTiers 三级地区。
 * @param country 由 Worker 返回的国家码（ISO 3166-1 alpha-2），可为空
 * @param eeaCodes Consent 配置里的 EEA/UK 国家码清单
 * @returns eea | us | rest
 */
export function regionForCountry(country: string | null | undefined, eeaCodes: string[]): GeoRegion {
  const c = (country || '').trim().toUpperCase();
  // 未知/缺失 → 严格档 EEA（保守 deny），宁可多问不错过
  if (!c) return 'eea';
  if (eeaCodes.some((code) => code.trim().toUpperCase() === c)) return 'eea';
  if (c === 'US' || c === 'USA') return 'us';
  return 'rest';
}

/**
 * 检测当前访问者所在地区。
 * 优先级：localStorage 缓存 → /_geo（带超时）→ 兜底 EEA（严格档）。
 */
export async function detectGeoRegion(eeaCodes: string[]): Promise<GeoResult> {
  // ① 本地缓存（存在且为本会话内即可，避免每页重复请求）
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const cachedRaw = localStorage.getItem(GEO_CACHE_KEY);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw) as { country: string };
        return { region: regionForCountry(cached.country, eeaCodes), country: cached.country, source: 'cache' };
      }
    } catch {
      /* 忽略损坏缓存 */
    }
  }

  // ② /_geo Worker（带超时兜底）
  try {
    const geo = await fetchGeoWithTimeout();
    const country = geo?.country ?? null;
    if (country) {
      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem(GEO_CACHE_KEY, JSON.stringify({ country }));
        } catch {
          /* localStorage 不可用时忽略 */
        }
      }
      return { region: regionForCountry(country, eeaCodes), country, source: 'worker' };
    }
  } catch {
    /* 网络异常走兜底 */
  }

  // ③ 兜底：无 Worker / 超时 / 失败 → 默认 EEA 严格档（deny）
  return { region: 'eea', country: null, source: 'fallback' };
}

function fetchGeoWithTimeout(): Promise<{ country?: string } | null> {
  return new Promise((resolve) => {
    let settled = false;
    const done = (value: { country?: string } | null) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(value);
    };
    const timer = setTimeout(() => done(null), GEO_TIMEOUT_MS);
    fetch('/_geo', { credentials: 'omit' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => done(d || null))
      .catch(() => done(null));
  });
}

/**
 * 识别 Global Privacy Control（浏览器退出一键信号）。
 * 仅对 usize 地区有意义：GPC 为真 → 视为退出请求，营销类 deny。
 */
export function hasGPC(): boolean {
  if (typeof navigator === 'undefined') return false;
  const nav = navigator as { globalPrivacyControl?: boolean };
  return nav.globalPrivacyControl === true;
}