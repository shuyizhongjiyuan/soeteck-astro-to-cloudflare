/**
 * Soeteck UI 翻译工具（CPT 改造 Phase 1）
 *
 * 页面内容翻译现在由 Content API 返回（?lang=zh）。
 * 本文件只保留跨页面的 UI 标签翻译（导航、按钮、filter labels 等），
 * 从共享翻译数据读取。
 *
 * Phase 2 会将此数据迁移到 Content API global endpoint 的 config.labels 中。
 */

import shared from '../translations/shared.json';

export function getUITranslation(lang: string, key: string): string {
  const keys = key.split('.');
  let value: any = shared.ui;

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) return key;
  }

  // 查找当前语言的翻译，英文优先用 shared.json 中的 'en' 值，否则 fallback 到 key
  if (typeof value === 'object' && value !== null) {
    return (value as Record<string, string>)[lang] ?? (value as Record<string, string>)['en'] ?? key;
  }

  return key;
}
