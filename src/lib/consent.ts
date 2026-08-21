/**
 * Cookie 同意运行时模块（Consent Mode v2，ADR-023）
 *
 * 职责：
 *   - localStorage 记录用户选择（key: soeteck_consent）
 *   - 暴露 consent:default / consent:update 信号封装（写入同一个 GTM dataLayer）
 *   - 根据 geo 档 + 已存偏好 计算每类别 grant/deny
 *   - 类别 → Consent Mode v2 信号映射
 *
 * 信号映射（spec §3.3）：
 *   necessary → security_storage / functionality_storage（固定开，不可关）
 *   analytics → analytics_storage
 *   marketing → ad_storage + ad_user_data + ad_personalization
 */

import { hasGPC, type GeoRegion } from './geo';

export type ConsentMode = 'granted' | 'denied';

export type SignalKey =
  | 'ad_storage'
  | 'ad_user_data'
  | 'ad_personalization'
  | 'analytics_storage'
  | 'functionality_storage'
  | 'security_storage';

export type Category = 'necessary' | 'analytics' | 'marketing';

/** 类别 → Consent Mode v2 信号映射（spec §3.3） */
export const CATEGORY_SIGNALS: Record<Category, SignalKey[]> = {
  necessary: ['security_storage', 'functionality_storage'],
  analytics: ['analytics_storage'],
  marketing: ['ad_storage', 'ad_user_data', 'ad_personalization'],
};

export const CONSENT_KEY = 'soeteck_consent';

/** 已存偏好（analytics/marketing 是否开启；true=接受，false=拒绝） */
export interface StoredConsent {
  analytics: boolean;
  marketing: boolean;
  updatedAt: number;
}

function getDataLayer(): unknown[] {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  return w.dataLayer;
}

/**
 * 向 GTM dataLayer 推入 gtag 命令数组。
 * 无论全局 gtag 是否已定义（dev 未加载 GTM 时也安全），
 * GTM 加载后都会按标准队列回放。
 */
function pushCommand(args: unknown[]): void {
  if (typeof window === 'undefined') return;
  getDataLayer().push(args);
}

/** consent:default —— 必须在 GTM snippet 之前注入（由 BaseLayout head 调用） */
export function consentDefault(mapping: Record<SignalKey, ConsentMode>): void {
  pushCommand(['consent', 'default', { wait_for_update: 500, ...mapping }]);
}

/** consent:update —— 用户改动/geo 解析后调用 */
export function consentUpdate(mapping: Record<SignalKey, ConsentMode>): void {
  pushCommand(['consent', 'update', mapping]);
}

export function readStoredConsent(): StoredConsent | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (typeof parsed !== 'object' || parsed === null) return null;
    return {
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      updatedAt: typeof parsed.updatedAt === 'number' ? parsed.updatedAt : Date.now(),
    };
  } catch {
    return null;
  }
}

function writeStoredConsent(stored: StoredConsent): void {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(stored));
  } catch {
    /* localStorage 不可用时忽略（退化为每次询问） */
  }
}

/**
 * 保存用户选择并触发 consent:update + consent:update 信号。
 * @param opts 用户对 analytics/marketing 的接受与否（false=拒绝）
 */
export function saveConsent(opts: { analytics: boolean; marketing: boolean }): void {
  writeStoredConsent({ analytics: opts.analytics, marketing: opts.marketing, updatedAt: Date.now() });
  const mapping = categoryModesToSignals({
    necessary: 'granted',
    analytics: opts.analytics ? 'granted' : 'denied',
    marketing: opts.marketing ? 'granted' : 'denied',
  });
  consentUpdate(mapping);
}

/**
 * 根据 geo 档 + 已存偏好 + GPC 计算每类别默认 grant/deny（spec §3/§4）。
 *
 * 地区语义：
 *   - eea（opt-in）：analytics/marketing 默认 deny，直到用户明确选择
 *   - us（opt-out） ：默认 grant；preference.of(true)=false 或 GPC → 退出（marketing deny）
 *   - rest（allow） ：默认 grant
 * necessary 恒 granted（不可关）。
 */
export function resolveCategoryModes(
  region: GeoRegion,
  stored: StoredConsent | null,
  gpc: boolean
): Record<Category, ConsentMode> {
  const necessary: ConsentMode = 'granted';
  if (region === 'eea') {
    return {
      necessary,
      analytics: stored?.analytics ? 'granted' : 'denied',
      marketing: stored?.marketing ? 'granted' : 'denied',
    };
  }
  if (region === 'us') {
    return {
      necessary,
      // opt-out：默认 grant，用户明确拒绝或 GPC 时拒
      analytics: stored?.analytics === false ? 'denied' : 'granted',
      marketing: stored?.marketing === false || gpc ? 'denied' : 'granted',
    };
  }
  // rest：无同意要求，全量 grant
  return { necessary, analytics: 'granted', marketing: 'granted' };
}

/** 类别 grant/deny → 平铺到所有信号的映射 */
export function categoryModesToSignals(modes: Record<Category, ConsentMode>): Record<SignalKey, ConsentMode> {
  const map = {} as Record<SignalKey, ConsentMode>;
  (Object.keys(CATEGORY_SIGNALS) as Category[]).forEach((cat) => {
    CATEGORY_SIGNALS[cat].forEach((sig) => {
      map[sig] = modes[cat];
    });
  });
  return map;
}

/** 便捷：一次解析出信号级映射（含 GPC 判定） */
export function resolveSignals(region: GeoRegion, stored: StoredConsent | null, gpc: boolean): Record<SignalKey, ConsentMode> {
  return categoryModesToSignals(resolveCategoryModes(region, stored, hasGPC() || gpc));
}

/** 供组件做展示级判断：该地区是否仍视为 opt-out（用于 US 显示 chip/退出项） */
export function isOptOutRegion(region: GeoRegion): boolean {
  return region === 'us';
}