/**
 * Soeteck Lightbox — Astro port of WordPress theme lightbox
 *
 * Features:
 * - Click triggers: [data-soeteck-lightbox] or links inside .gallery / .wp-block-gallery
 * - Group navigation: data-lightbox-group="..." links share next/prev nav
 * - Keyboard: ESC to close, ArrowLeft/ArrowRight to navigate
 * - Touch: swipe to switch images, pinch to zoom (multi-pointer)
 * - Zoom: +/- buttons (1x to 2.5x), pan after zoom
 * - Scroll lock when open (preserves scroll position)
 * - WCAG: role=dialog, aria-modal, focus management
 *
 * Usage:
 *   import { initLightbox } from '@/lib/lightbox';
 *   initLightbox();
 *
 * Element markers:
 *   <a data-soeteck-lightbox data-lightbox-src="/big.jpg" data-lightbox-group="set1" aria-label="...">
 *     <img src="/thumb.jpg" alt="...">
 *   </a>
 */

interface LightboxItem {
  href: string;
  caption: string;
  trigger: HTMLAnchorElement;
}

const imageExtensionPattern = /\.(jpe?g|png|gif|webp|avif)(\?.*)?$/i;

let lightbox: HTMLDivElement | null = null;
let lightboxItems: LightboxItem[] = [];
let lightboxIndex = 0;
let lightboxScrollY = 0;
let lightboxSwipeStartX = 0;
let lightboxSwipeStartY = 0;
let lightboxSwipePointerId: number | null = null;
let lightboxScale = 1;
let lightboxPanX = 0;
let lightboxPanY = 0;
let lightboxPanStartX = 0;
let lightboxPanStartY = 0;
let lightboxPanBaseX = 0;
let lightboxPanBaseY = 0;
let lightboxIgnoreClickUntil = 0;
let lightboxHadMultiTouch = false;
const lightboxActivePointers = new Map<number, PointerEvent>();

function getLightboxTrigger(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null;
  const link = target.closest('a');
  if (!link) return null;

  if (link.matches('[data-soeteck-lightbox]')) return link as HTMLAnchorElement;

  const anchor = link as HTMLAnchorElement;
  if (
    anchor.dataset.lightboxSrc ||
    ((anchor.closest('.gallery, .wp-block-gallery') || anchor.querySelector('img')) &&
      imageExtensionPattern.test(anchor.href))
  ) {
    return anchor;
  }

  return null;
}

function getLightboxGroupItems(trigger: HTMLAnchorElement): LightboxItem[] {
  const group = trigger.dataset.lightboxGroup;
  const scope = group ? document : trigger.closest('.gallery, .wp-block-gallery') || document;
  const candidates = group
    ? [...scope.querySelectorAll<HTMLAnchorElement>('[data-lightbox-group]')].filter(
        (link) => link.dataset.lightboxGroup === group,
      )
    : [...scope.querySelectorAll<HTMLAnchorElement>('a')];

  const items: LightboxItem[] = candidates
    .filter((link) => link instanceof HTMLAnchorElement)
    .filter(
      (link) =>
        link.matches('[data-soeteck-lightbox]') ||
        link.dataset.lightboxSrc ||
        imageExtensionPattern.test(link.href),
    )
    .map((link) => {
      const image = link.querySelector('img');
      return {
        href: link.dataset.lightboxSrc || link.href,
        caption:
          link.dataset.lightboxCaption || image?.alt || link.getAttribute('aria-label') || '',
        trigger: link,
      };
    });

  return items.length
    ? items
    : [{ href: trigger.dataset.lightboxSrc || trigger.href, caption: '', trigger }];
}

function updateLightboxTransform(): void {
  if (!lightbox) return;
  const image = lightbox.querySelector<HTMLImageElement>('.soeteck-lightbox__image');
  if (!image) return;

  image.style.setProperty('--soeteck-lightbox-scale', String(lightboxScale));
  image.style.setProperty('--soeteck-lightbox-pan-x', `${lightboxPanX}px`);
  image.style.setProperty('--soeteck-lightbox-pan-y', `${lightboxPanY}px`);
  lightbox.classList.toggle('is-zoomed', lightboxScale > 1.01);
  lightbox
    .querySelector<HTMLButtonElement>('[data-lightbox-zoom-out]')
    ?.toggleAttribute('disabled', lightboxScale <= 1.01);
  lightbox
    .querySelector<HTMLButtonElement>('[data-lightbox-zoom-in]')
    ?.toggleAttribute('disabled', lightboxScale >= 2.5);
}

function resetLightboxInteraction(): void {
  lightboxActivePointers.clear();
  lightboxSwipePointerId = null;
  lightboxIgnoreClickUntil = 0;
  lightboxHadMultiTouch = false;
  lightbox?.classList.remove('is-panning');
}

function resetLightboxZoom(): void {
  lightboxScale = 1;
  lightboxPanX = 0;
  lightboxPanY = 0;
  updateLightboxTransform();
}

function resetLightboxState(): void {
  resetLightboxInteraction();
  resetLightboxZoom();
}

function setLightboxZoom(scale: number): void {
  lightboxScale = Math.min(Math.max(scale, 1), 2.5);
  if (lightboxScale <= 1.01) {
    lightboxPanX = 0;
    lightboxPanY = 0;
  }
  updateLightboxTransform();
}

function captureLightboxPointer(pointerId: number): void {
  try {
    lightbox?.setPointerCapture(pointerId);
  } catch {
    return;
  }
}

function createLightbox(): HTMLDivElement {
  if (lightbox) return lightbox;

  lightbox = document.createElement('div');
  lightbox.className = 'soeteck-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Image preview');
  lightbox.innerHTML = `
    <div class="soeteck-lightbox__backdrop" data-lightbox-close></div>
    <button class="soeteck-lightbox__close" type="button" data-lightbox-close aria-label="Close image preview">×</button>
    <button class="soeteck-lightbox__nav soeteck-lightbox__nav--prev" type="button" data-lightbox-prev aria-label="Previous image"></button>
    <div class="soeteck-lightbox__dialog">
      <img class="soeteck-lightbox__image" alt="">
      <p class="soeteck-lightbox__caption"></p>
    </div>
    <div class="soeteck-lightbox__zoom-controls" aria-label="Image zoom controls">
      <button class="soeteck-lightbox__zoom-button" type="button" data-lightbox-zoom-out aria-label="Zoom out">−</button>
      <button class="soeteck-lightbox__zoom-button" type="button" data-lightbox-zoom-in aria-label="Zoom in">+</button>
    </div>
    <button class="soeteck-lightbox__nav soeteck-lightbox__nav--next" type="button" data-lightbox-next aria-label="Next image"></button>
  `;
  document.body.append(lightbox);

  lightbox.addEventListener('click', (event) => {
    if (Date.now() < lightboxIgnoreClickUntil) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const target = event.target as Element;
    if (target.closest('[data-lightbox-close]')) { closeLightbox(); return; }
    if (target.closest('[data-lightbox-prev]')) { showLightboxImage(lightboxIndex - 1, 'prev'); return; }
    if (target.closest('[data-lightbox-next]')) { showLightboxImage(lightboxIndex + 1, 'next'); return; }
    if (target.closest('[data-lightbox-zoom-in]')) { setLightboxZoom(lightboxScale + 0.5); return; }
    if (target.closest('[data-lightbox-zoom-out]')) { setLightboxZoom(lightboxScale - 0.5); return; }
    if (target.closest('.soeteck-lightbox__image')) { event.stopPropagation(); return; }
    if (target === lightbox || target.closest('.soeteck-lightbox__backdrop')) {
      closeLightbox();
    }
  });

  lightbox.addEventListener('pointerdown', (event) => {
    const target = event.target as Element;
    if (target.closest('button')) return;

    lightboxActivePointers.set(event.pointerId, event);
    if (target.closest('.soeteck-lightbox__image') && event.pointerType !== 'mouse') {
      event.preventDefault();
    }
    if (lightboxActivePointers.size > 1) {
      lightboxHadMultiTouch = true;
      lightboxSwipePointerId = null;
      lightbox!.classList.remove('is-panning');
      return;
    }
    if (lightboxScale > 1.01 && target.closest('.soeteck-lightbox__image')) {
      lightboxSwipePointerId = null;
      lightboxPanStartX = event.clientX;
      lightboxPanStartY = event.clientY;
      lightboxPanBaseX = lightboxPanX;
      lightboxPanBaseY = lightboxPanY;
      lightbox!.classList.add('is-panning');
      captureLightboxPointer(event.pointerId);
      return;
    }
    if (lightboxItems.length > 1 && event.pointerType !== 'mouse') {
      lightboxSwipePointerId = event.pointerId;
      lightboxSwipeStartX = event.clientX;
      lightboxSwipeStartY = event.clientY;
      captureLightboxPointer(event.pointerId);
    }
  });

  lightbox.addEventListener('pointermove', (event) => {
    if (!lightboxActivePointers.has(event.pointerId)) return;

    lightboxActivePointers.set(event.pointerId, event);
    if (lightboxActivePointers.size > 1) return;
    if (lightboxScale > 1.01 && lightbox!.classList.contains('is-panning')) {
      lightboxPanX = lightboxPanBaseX + event.clientX - lightboxPanStartX;
      lightboxPanY = lightboxPanBaseY + event.clientY - lightboxPanStartY;
      if (
        Math.abs(lightboxPanX - lightboxPanBaseX) > 4 ||
        Math.abs(lightboxPanY - lightboxPanBaseY) > 4
      ) {
        lightboxIgnoreClickUntil = Date.now() + 350;
      }
      updateLightboxTransform();
    }
  });

  lightbox.addEventListener('pointerup', (event) => {
    const startX = lightboxSwipeStartX;
    const startY = lightboxSwipeStartY;
    const isSwipePointer = lightboxSwipePointerId === event.pointerId;
    const wasPanning = lightbox!.classList.contains('is-panning');
    const panDeltaX = event.clientX - lightboxPanStartX;
    const panDeltaY = event.clientY - lightboxPanStartY;
    if (wasPanning && (Math.abs(panDeltaX) > 3 || Math.abs(panDeltaY) > 3)) {
      lightboxIgnoreClickUntil = Date.now() + 700;
    }
    lightboxActivePointers.delete(event.pointerId);
    lightboxSwipePointerId = null;
    lightbox!.classList.remove('is-panning');
    if (lightbox!.hasPointerCapture(event.pointerId)) {
      lightbox!.releasePointerCapture(event.pointerId);
    }
    if (wasPanning || lightboxHadMultiTouch || lightboxScale > 1.01 || !isSwipePointer) {
      if (lightboxActivePointers.size === 0) lightboxHadMultiTouch = false;
      return;
    }

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.35) return;

    showLightboxImage(lightboxIndex + (deltaX < 0 ? 1 : -1), deltaX < 0 ? 'next' : 'prev');
    if (lightboxActivePointers.size === 0) lightboxHadMultiTouch = false;
  });

  lightbox.addEventListener('pointercancel', (event) => {
    lightboxActivePointers.delete(event.pointerId);
    if (lightboxSwipePointerId === event.pointerId) lightboxSwipePointerId = null;
    lightbox!.classList.remove('is-panning');
  });

  return lightbox;
}

function showLightboxImage(index: number, direction: 'prev' | 'next' | '' = ''): void {
  if (!lightbox || lightboxItems.length === 0) return;

  resetLightboxState();
  lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
  const item = lightboxItems[lightboxIndex];
  const image = lightbox.querySelector<HTMLImageElement>('.soeteck-lightbox__image')!;
  const caption = lightbox.querySelector<HTMLParagraphElement>('.soeteck-lightbox__caption')!;
  const navButtons = lightbox.querySelectorAll<HTMLButtonElement>('.soeteck-lightbox__nav');

  image.classList.remove('is-switching-next', 'is-switching-prev');
  image.src = item.href;
  image.alt = item.caption;
  if (direction) {
    image.getBoundingClientRect();
    image.classList.add(direction === 'prev' ? 'is-switching-prev' : 'is-switching-next');
  }
  caption.textContent = item.caption;
  navButtons.forEach((button) => {
    button.hidden = lightboxItems.length < 2;
  });
}

function openLightbox(trigger: HTMLAnchorElement): void {
  createLightbox();
  resetLightboxState();
  lightboxItems = getLightboxGroupItems(trigger);
  lightboxIndex = Math.max(0, lightboxItems.findIndex((item) => item.trigger === trigger));
  showLightboxImage(lightboxIndex);
  lightboxScrollY = window.scrollY;
  document.documentElement.style.setProperty('--soeteck-lightbox-scroll-y', `${-lightboxScrollY}px`);
  lightbox!.classList.add('is-open');
  document.documentElement.classList.add('soeteck-lightbox-open');
  lightbox!.querySelector<HTMLButtonElement>('.soeteck-lightbox__close')?.focus();
}

function closeLightbox(): void {
  if (!lightbox) return;

  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  resetLightboxState();
  lightbox.classList.remove('is-open', 'is-zoomed', 'is-panning');
  document.documentElement.style.scrollBehavior = 'auto';
  document.documentElement.classList.remove('soeteck-lightbox-open');
  document.documentElement.style.removeProperty('--soeteck-lightbox-scroll-y');
  window.scrollTo(0, lightboxScrollY);
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
  lightboxItems[lightboxIndex]?.trigger?.focus({ preventScroll: true });
}

let initialized = false;

/**
 * 自动给指定容器内的裸 <img> 包装成可点击灯箱
 * 默认作用于：文章正文 .entry-content / .soeteck-single-post__content
 * 跳过：已被 <a> 包裹的图片、设置了 data-no-lightbox 的图片、小尺寸图标
 */
function autoWrapContentImages(): void {
  const containers = document.querySelectorAll('.entry-content, .soeteck-single-post__content, [data-lightbox-auto]');
  containers.forEach((container) => {
    const images = container.querySelectorAll<HTMLImageElement>('img');
    images.forEach((img) => {
      // 跳过已在 <a> 内的图片
      if (img.closest('a')) return;
      // 跳过显式禁用的图片
      if (img.hasAttribute('data-no-lightbox')) return;
      // 跳过过小图片（图标、装饰等，<100px）
      if (img.naturalWidth > 0 && img.naturalWidth < 100) return;
      // 跳过 SVG/装饰图标
      if (img.src.endsWith('.svg')) return;

      const link = document.createElement('a');
      link.href = img.currentSrc || img.src;
      link.setAttribute('data-soeteck-lightbox', '');
      link.setAttribute('data-lightbox-group', container.getAttribute('data-lightbox-group') || 'content-images');
      // 让 <a> 紧贴图片尺寸，避免父级宽度大于图片时产生可点击空白区域
      link.style.display = 'inline-block';
      link.style.lineHeight = '0';
      if (img.alt) link.setAttribute('aria-label', img.alt);
      img.parentNode?.insertBefore(link, img);
      link.appendChild(img);
    });
  });
}

export function initLightbox(): void {
  if (initialized || typeof document === 'undefined') return;
  initialized = true;

  // 文章正文图片自动包装
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoWrapContentImages, { once: true });
  } else {
    autoWrapContentImages();
  }
  // 图片懒加载完成后再次包装（处理首屏外的图片）
  window.addEventListener('load', autoWrapContentImages, { once: true });

  document.addEventListener('click', (event) => {
    const trigger = getLightboxTrigger(event.target);
    if (trigger) {
      event.preventDefault();
      openLightbox(trigger);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox?.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showLightboxImage(lightboxIndex - 1, 'prev');
    if (event.key === 'ArrowRight') showLightboxImage(lightboxIndex + 1, 'next');
  });
}
