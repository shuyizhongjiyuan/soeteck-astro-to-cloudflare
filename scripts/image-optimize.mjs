// scripts/image-optimize.mjs — 清单驱动的图片批量优化（写操作，spec 2026-08-31 §9.2 配套）
// 用法：node scripts/image-optimize.mjs --manifest=<清单.json> [--dry-run] [--report-dir=tmp]
// 闸门：无 --manifest 拒绝执行；清单由 image-inventory.mjs 盘点 + 用户确认后生成。
// manifest 格式: [{ "src": "public/x/a.png", "out": "public/x/a.webp", "format": "webp", "quality": 82, "width": 960 }]
import { readFile, stat, mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import sharp from 'sharp';

const arg = (n, d) => { const m = process.argv.find(a => a.startsWith(`--${n}=`)); return m ? m.split('=')[1] : d; };
const manifestPath = arg('manifest', null);
const dryRun = process.argv.includes('--dry-run');
const reportDir = arg('report-dir', path.join(__dirname2(), '../../tmp'));

function __dirname2() { return path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')); }

if (!manifestPath) {
  console.error('GATE: 需要 --manifest=<清单.json>（由 image-inventory.mjs 盘点 + 用户确认后生成）');
  process.exit(1);
}

const FE = path.join(__dirname2(), '..');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const items = Array.isArray(manifest) ? manifest : manifest.items;
const kb = b => (b / 1024).toFixed(0);
const results = [];
let abort = false;

for (const it of items) {
  const src = path.resolve(FE, it.src);
  const out = path.resolve(FE, it.out);
  const s = await stat(src);
  let pipeline = sharp(src);
  if (it.width) pipeline = pipeline.resize({ width: it.width, withoutEnlargement: true });
  pipeline = pipeline[it.format]({ quality: it.quality ?? 82 });

  if (dryRun) {
    console.log(`[dry] ${it.src} -> ${it.out} (${it.format} q${it.quality}${it.width ? ' w' + it.width : ''})`);
    continue;
  }
  const info = await pipeline.toFile(out);
  const o = await stat(out);
  // 验证：尺寸断言 + 大小对比
  const okSize = !it.width || info.width <= it.width;
  const entry = { src: it.src, out: it.out, fromKB: kb(s.size), toKB: kb(info.size), saved: `${((1 - info.size / s.size) * 100).toFixed(0)}%`, width: info.width, height: info.height, sizeAssert: okSize };
  results.push(entry);
  console.log(`${okSize ? 'OK' : 'ASSERT-FAIL'} ${it.out}: ${entry.fromKB}KB -> ${entry.toKB}KB (${entry.saved}) ${info.width}x${info.height}`);
  if (!okSize) abort = true;
}

if (!dryRun) {
  await mkdir(reportDir, { recursive: true });
  const rp = path.join(reportDir, `image-optimize-${Date.now()}.json`);
  await (await import('node:fs/promises')).writeFile(rp, JSON.stringify({ results, abort }, null, 2));
  console.log(`\n报告: ${rp}`);
  console.log('⚠️ 视觉质量闸门 = 人工抽样（SSIM 自动门槛二期引入），请抽查对比后再切引用');
  if (abort) { console.error('存在尺寸断言失败项，检查清单 width 参数'); process.exit(2); }
}
