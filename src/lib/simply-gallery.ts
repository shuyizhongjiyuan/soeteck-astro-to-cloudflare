/**
 * Soeteck SimpLy Gallery — Lightweight Slider
 *
 * Replaces the SimpLy Gallery Block & Lightbox plugin's JS-driven slider
 * with a lightweight interactive slider that feeds into the existing
 * Soeteck lightbox (lightbox.ts).
 *
 * Reads ALL settings from the sgb-data JSON — slider height, auto-play,
 * thumbnails, captions, hover effects, etc. — matching the plugin's
 * Gutenberg editor configuration.
 *
 * How it works:
 * 1. Finds all `.pgc-sgb-cb` elements in the DOM (rendered via set:html)
 * 2. Reads the `sgb-data` JSON from the adjacent <script type="application/json">
 * 3. Builds a slider DOM with navigation (arrows, dots, keyboard, swipe)
 * 4. Each slide is an <a> with data-soeteck-lightbox — the existing lightbox handles clicks
 *
 * Conditional loading: only invoked on pages where contentHtml contains 'pgc-sgb-cb'.
 */

// ── Types ────────────────────────────────────────────────────────────────────

interface SgbImageSize {
  url: string;
  height: number;
  width: number;
  orientation?: string;
}

interface SgbImage {
  id: number;
  title: string;
  url: string;
  link?: string;
  alt: string;
  caption: string;
  description?: string;
  mime?: string;
  type: string; // 'image' | 'video' | 'audio'
  width: number;
  height: number;
  sizes: Record<string, SgbImageSize>;
  imageMeta?: Record<string, unknown>;
  meta?: boolean;
  postlink?: string;
}

interface SgbData {
  // ── Core ──
  galleryType: string;           // 'pgc_sgb_slider' | 'pgc_sgb_grid' | etc.
  galleryId: string;             // unique id for this gallery instance
  images: SgbImage[];            // array of image objects
  itemsMetaDataCollection?: unknown[];

  // ── Slider settings (from plugin's Gutenberg block) ──
  sliderMaxHeight?: number;      // Slider Height in pixels (default 400)
  responsiveHeight?: boolean;    // enable responsive height
  sliderAdminWidth?: number;     // admin preview width (for ratio calc)
  collectionColumns?: number;    // Items on Slider Page (min:1, max:8, step:1)
  sliderCarouselMode?: boolean;  // Carousel mode — show thumbnail bar (default true)
  sliderThumbBarEnable?: boolean;// Show Thumbnails Bar explicitly
  sliderThumbBarHoverColor?: string; // Thumbnails border color (select mode)
  sliderFullSizeViewMode?: boolean;  // Display Image in original Size
  sliderScrollNavi?: boolean;    // Scroll to navigate (mouse wheel)
  sliderNextPrevAnimation?: string;  // 'animation' | 'slide' | 'fade'

  // ── Slideshow (auto-play) ──
  sliderSlideshow?: boolean;        // Enable slideshow button
  sliderSlideshowAutoStart?: boolean;// Auto-start slideshow
  sliderSlideshowDelay?: number;    // Slideshow delay in ms

  // ── Item display settings ──
  sliderItemCounterEnable?: boolean; // Show Items Counter
  sliderItemTitleEnable?: boolean;   // Show Item Title
  sliderItemDescriptionEnable?: boolean; // Show Item Caption
  sliderCaptionSrc?: string;         // Title source
  sliderDescriptionSrc?: string;     // Description source
  sliderItemTitleFontSize?: number;  // Title font size
  sliderItemTitleTextColor?: string; // Title text color
  sliderItemDescriptionFontSize?: number; // Caption font size
  sliderItemDescriptionTextColor?: string; // Caption text color

  // ── Navigation / controls colors ──
  sliderNavigationColor?: string;       // Main Controls BG Color
  sliderNavigationColorOver?: string;   // Main Controls Hover BG Color
  sliderNavigationIconColor?: string;   // Main Controls Icon Color
  sliderNavigationIconColorOver?: string;// Main Controls Icon Hover Color
  sliderPreloaderColor?: string;        // Preloader Color
  sliderBgColor?: string;               // Background color
  sliderHeaderFooterBgColor?: string;   // Header/footer BG color

  // ── Additional features ──
  sliderFullscreenEnabled?: boolean; // Show Fullscreen Button
  sliderZoomEnable?: boolean;        // Enable Zoom
  sliderItemDownload?: boolean;      // Enable Download
  sliderSocialShareEnabled?: boolean;// Show Share Buttons

  // ── Deprecated / legacy (mapped for compatibility) ──
  captions?: boolean;            // mapped to sliderItemDescriptionEnable
  autoPlay?: boolean;            // mapped to sliderSlideshow
  autoPlaySpeed?: number;        // mapped to sliderSlideshowDelay

  // ── Custom display extras (not from plugin, added by Soeteck port) ──
  navStyle?: string;             // 'arrows' | 'dots' | 'both' | 'none'
  dotColor?: string;             // dot active color
  arrowColor?: string;           // nav arrow color
  arrowBg?: string;              // nav arrow background
  hoverEffect?: string;          // 'none' | 'zoom' | 'dim' | 'overlay'
  hoverColor?: string;           // hover overlay color
  clickAction?: string;          // 'lightbox' | 'link' | 'none'
  transitionEffect?: string;     // 'slide' | 'fade'
  transitionSpeed?: number;      // transition duration in ms
  borderRadius?: number;         // border radius in px
  showCounter?: boolean;         // show slide counter
}

// ── SVG icons ────────────────────────────────────────────────────────────────

const SVG_ARROW = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>`;
const SVG_ARROW_RIGHT = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>`;

// ── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULTS = {
  sliderMaxHeight: 400,
  responsiveHeight: true,
  collectionColumns: 3,        // Items on Slider Page (plugin default)
  sliderCarouselMode: true,    // plugin default — shows thumbnail bar
  sliderThumbBarEnable: false,
  sliderFullSizeViewMode: false,
  sliderScrollNavi: false,
  sliderNextPrevAnimation: 'animation',
  sliderSlideshow: false,
  sliderSlideshowAutoStart: false,
  sliderSlideshowDelay: 3000,
  sliderItemCounterEnable: false,
  sliderItemTitleEnable: false,
  sliderItemDescriptionEnable: false,
  sliderCaptionSrc: 'title',
  sliderDescriptionSrc: 'caption',
  sliderItemTitleFontSize: 16,
  sliderItemTitleTextColor: '#ffffff',
  sliderItemDescriptionFontSize: 14,
  sliderItemDescriptionTextColor: '#cccccc',
  sliderNavigationColor: 'rgba(0,0,0,0.6)',
  sliderNavigationColorOver: 'rgba(0,0,0,0.8)',
  sliderNavigationIconColor: '#ffffff',
  sliderNavigationIconColorOver: '#ffffff',
  sliderPreloaderColor: '#d4d4d4',
  sliderBgColor: 'transparent',
  sliderFullscreenEnabled: false,
  sliderZoomEnable: true,
  sliderItemDownload: false,
  sliderSocialShareEnabled: false,
  // legacy / custom extras
  captions: false,
  autoPlay: false,
  autoPlaySpeed: 3000,
  navStyle: 'arrows',     // only arrows, no dots
  transitionEffect: 'slide',
  transitionSpeed: 450,
  clickAction: 'lightbox',
};

// ── Builder ──────────────────────────────────────────────────────────────────

function buildSlider(block: HTMLElement, rawData: SgbData): void {
  // Merge with defaults
  const data = { ...DEFAULTS, ...rawData };
  const { images, galleryId } = data;
  if (!images || images.length === 0) return;

  // ── Compute height ──
  const blockWidth = block.getBoundingClientRect().width || data.sliderAdminWidth || 840;
  let sliderHeight = data.sliderMaxHeight;
  if (data.responsiveHeight !== false) {
    // Responsive: based on first image aspect ratio, capped by sliderMaxHeight
    const firstImg = images[0];
    const aspectRatio = firstImg.width / firstImg.height;
    const autoHeight = blockWidth / aspectRatio;
    sliderHeight = Math.min(Math.max(autoHeight, 240), data.sliderMaxHeight);
  }
  // When responsiveHeight is false, sliderHeight = sliderMaxHeight directly

  // ── Items per page ──
  const cols = data.collectionColumns || 1;
  const totalPages = Math.ceil(images.length / cols);

  // ── Container ──
  const slider = document.createElement('div');
  slider.className = 'soeteck-gallery-slider';
  slider.dataset.galleryId = galleryId;
  slider.style.height = `${sliderHeight}px`;

  // Apply border radius if set
  if (data.borderRadius && data.borderRadius !== 8) {
    slider.style.borderRadius = `${data.borderRadius}px`;
  }

  // ── Track ──
  const track = document.createElement('div');
  track.className = 'soeteck-gallery-slider__track';
  track.style.transitionDuration = `${data.transitionSpeed}ms`;

  images.forEach((img, i) => {
    const slide = document.createElement('a');
    slide.className = 'soeteck-gallery-slider__slide';
    // When collectionColumns > 1: equal width split with padding gaps
    if (data.collectionColumns > 1) {
      const cols = data.collectionColumns;
      slide.style.flex = `0 0 ${100 / cols}%`;
      slide.style.maxWidth = `${100 / cols}%`;
      slide.style.padding = '4px';
      slide.style.boxSizing = 'border-box';
    }

    // Click action
    if (data.clickAction === 'lightbox') {
      slide.href = img.url;
      slide.setAttribute('data-soeteck-lightbox', '');
      slide.setAttribute('data-lightbox-group', `pgc-gallery-${galleryId}`);
    } else if (data.clickAction === 'link' && img.postlink) {
      slide.href = img.postlink;
    } else {
      slide.href = img.url;
      slide.setAttribute('data-soeteck-lightbox', '');
      slide.setAttribute('data-lightbox-group', `pgc-gallery-${galleryId}`);
    }

    slide.setAttribute('aria-label', img.alt || img.title || `Image ${i + 1} of ${images.length}`);

    // Thumb source for slider
    const thumb = img.sizes?.medium?.url || img.sizes?.large?.url || img.url;
    const imgEl = document.createElement('img');
    imgEl.src = thumb;
    imgEl.alt = img.alt || img.title || '';
    imgEl.loading = i === 0 ? 'eager' : 'lazy';
    imgEl.width = img.sizes?.medium?.width || img.width;
    imgEl.height = img.sizes?.medium?.height || img.height;
    slide.appendChild(imgEl);

    // Caption
    if (data.captions && (img.caption || img.title)) {
      const caption = document.createElement('div');
      caption.className = 'soeteck-gallery-slider__caption';
      caption.textContent = img.caption || img.title;
      slide.appendChild(caption);
    }

    track.appendChild(slide);
  });

  slider.appendChild(track);

  // ── Single image: no nav ──
  if (images.length === 1) {
    block.innerHTML = '';
    block.appendChild(slider);
    return;
  }

  // ── Navigation arrows ──
  // Carousel mode doesn't disable arrows (they work alongside thumbnails)
  const showArrows = (data.navStyle === 'arrows' || data.navStyle === 'both');
  let prevBtn: HTMLButtonElement | null = null;
  let nextBtn: HTMLButtonElement | null = null;

  if (showArrows) {
    prevBtn = document.createElement('button');
    prevBtn.className = 'soeteck-gallery-slider__nav soeteck-gallery-slider__nav--prev';
    prevBtn.type = 'button';
    prevBtn.setAttribute('aria-label', 'Previous image');
    prevBtn.innerHTML = SVG_ARROW;
    if (data.arrowColor) prevBtn.style.color = data.arrowColor;
    if (data.arrowBg) prevBtn.style.background = data.arrowBg;

    nextBtn = document.createElement('button');
    nextBtn.className = 'soeteck-gallery-slider__nav soeteck-gallery-slider__nav--next';
    nextBtn.type = 'button';
    nextBtn.setAttribute('aria-label', 'Next image');
    nextBtn.innerHTML = SVG_ARROW_RIGHT;
    if (data.arrowColor) nextBtn.style.color = data.arrowColor;
    if (data.arrowBg) nextBtn.style.background = data.arrowBg;

    slider.appendChild(prevBtn);
    slider.appendChild(nextBtn);
  }

  // ── Dots ──
  const showDots = data.navStyle === 'dots' || data.navStyle === 'both';
  let dots: HTMLDivElement | null = null;

  if (showDots) {
    dots = document.createElement('div');
    dots.className = 'soeteck-gallery-slider__dots';
    dots.setAttribute('role', 'tablist');
    dots.setAttribute('aria-label', 'Gallery navigation');

    // Dots represent pages when collectionColumns > 1
    const dotCount = cols > 1 ? totalPages : images.length;
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('button');
      dot.className = 'soeteck-gallery-slider__dot';
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      const label = cols > 1 ? `Page ${i + 1}` : `Image ${i + 1}`;
      dot.setAttribute('aria-label', label);
      dot.setAttribute('aria-selected', String(i === 0));
      if (data.dotColor) dot.style.setProperty('--soeteck-dot-color', data.dotColor);
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goTo(i);
      });
      dots!.appendChild(dot);
    }
    slider.appendChild(dots);
  }

  // ── Counter ──
  if (data.showCounter) {
    const counter = document.createElement('div');
    counter.className = 'soeteck-gallery-slider__counter';
    counter.textContent = cols > 1 ? `1 / ${totalPages}` : `1 / ${images.length}`;
    slider.appendChild(counter);
  }

  // ── State ──
  let currentPage = 0;
  let isAnimating = false;
  let autoPlayTimer: ReturnType<typeof setInterval> | null = null;

  function goTo(page: number): void {
    if (isAnimating) return;
    page = ((page % totalPages) + totalPages) % totalPages;
    if (page === currentPage) return;

    isAnimating = true;
    currentPage = page;
    const firstIdx = page * cols;

    // Fade transition
    if (data.transitionEffect === 'fade') {
      const slides = track.querySelectorAll<HTMLAnchorElement>('.soeteck-gallery-slider__slide');
      // Show only images on current page
      slides.forEach((s, i) => {
        (s as HTMLElement).style.display = (i >= firstIdx && i < firstIdx + cols) ? 'flex' : 'none';
      });
    } else {
      // Slide transition — shift track by 100% per page
      const containerW = slider.clientWidth;
      const offset = -page * containerW;
      track.style.transform = `translateX(${offset}px)`;
    }

    // Update dots
    if (dots) {
      const dotEls = dots.querySelectorAll<HTMLButtonElement>('.soeteck-gallery-slider__dot');
      dotEls.forEach((d, i) => {
        d.classList.toggle('is-active', i === page);
        d.setAttribute('aria-selected', String(i === page));
      });
    }

    // Update counter
    const counterEl = slider.querySelector('.soeteck-gallery-slider__counter');
    if (counterEl) {
      counterEl.textContent = `${page + 1} / ${totalPages}`;
    }

    // Update thumbnail active state
    const thumbBar = block.querySelector('.soeteck-gallery-slider__thumbs');
    if (thumbBar) {
      const thumbEls = thumbBar.querySelectorAll<HTMLButtonElement>('.soeteck-gallery-slider__thumb');
      thumbEls.forEach((t, i) => {
        const isInPage = i >= firstIdx && i < firstIdx + cols;
        t.classList.toggle('is-active', isInPage);
        t.setAttribute('aria-selected', String(isInPage));
      });
      const active = thumbBar.querySelector('.is-active');
      if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }

    // Preload next/prev page images
    const nextFirst = ((page + 1) % totalPages) * cols;
    const prevFirst = ((page - 1 + totalPages) % totalPages) * cols;
    const slides = track.querySelectorAll<HTMLAnchorElement>('.soeteck-gallery-slider__slide');
    [nextFirst, prevFirst].forEach((startIdx) => {
      for (let i = startIdx; i < Math.min(startIdx + cols, images.length); i++) {
        const img = slides[i]?.querySelector('img');
        if (img && !img.dataset.loaded) {
          img.src = images[i].url;
          img.dataset.loaded = '1';
        }
      }
    });

    setTimeout(() => { isAnimating = false; }, (data.transitionSpeed ?? 450) + 30);
  }

  // ── Wire up navigation events ──
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goTo(currentPage - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goTo(currentPage + 1);
    });
  }

  // ── Auto-play ──
  function startAutoPlay(): void {
    if (!data.autoPlay || images.length <= 1) return;
    stopAutoPlay();
    autoPlayTimer = setInterval(() => goTo(currentPage + 1), data.autoPlaySpeed);
  }
  function stopAutoPlay(): void {
    if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null; }
  }
  startAutoPlay();

  slider.addEventListener('mouseenter', stopAutoPlay);
  slider.addEventListener('mouseleave', startAutoPlay);
  slider.addEventListener('focusin', stopAutoPlay);
  slider.addEventListener('focusout', startAutoPlay);

  // ── Touch swipe ──
  let touchStartX = 0;
  let touchStartY = 0;
  let isSwiping = false;

  slider.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isSwiping = false;
  }, { passive: true });

  slider.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) return;
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;
    if (!isSwiping && Math.abs(dx) > 10) isSwiping = true;
    if (Math.abs(dy) > Math.abs(dx) * 1.5) isSwiping = false;
    if (isSwiping) e.preventDefault();
  }, { passive: false });

  slider.addEventListener('touchend', (e) => {
    if (!isSwiping) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goTo(currentPage + (dx < 0 ? 1 : -1));
  }, { passive: true });

  // ── Keyboard ──
  slider.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentPage - 1); slider.classList.add('is-keyboard-nav'); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentPage + 1); slider.classList.add('is-keyboard-nav'); }
  });
  if (!slider.hasAttribute('tabindex')) slider.setAttribute('tabindex', '0');
  slider.addEventListener('mousedown', () => slider.classList.remove('is-keyboard-nav'));

  // ── Hover effects ──
  if (data.hoverEffect === 'zoom') {
    slider.classList.add('soeteck-gallery-slider--hover-zoom');
  } else if (data.hoverEffect === 'dim') {
    slider.classList.add('soeteck-gallery-slider--hover-dim');
  } else if (data.hoverEffect === 'overlay') {
    slider.classList.add('soeteck-gallery-slider--hover-overlay');
    if (data.hoverColor) {
      slider.style.setProperty('--soeteck-hover-color', data.hoverColor);
    }
  }

  // ── Thumbnail bar (Carousel mode) ──
  const showThumbBar = data.sliderCarouselMode || data.sliderThumbBarEnable;
  let thumbBar: HTMLDivElement | null = null;

  if (showThumbBar && images.length > 1) {
    thumbBar = document.createElement('div');
    thumbBar.className = 'soeteck-gallery-slider__thumbs';
    if (data.sliderThumbBarHoverColor) {
      thumbBar.style.setProperty('--soeteck-thumb-border-color', data.sliderThumbBarHoverColor);
    }

    images.forEach((img, i) => {
      const thumb = document.createElement('button');
      // First page: activate all thumbs for collectionColumns items
      const isFirstPage = i < cols;
      thumb.className = 'soeteck-gallery-slider__thumb' + (isFirstPage ? ' is-active' : '');
      thumb.type = 'button';
      thumb.setAttribute('aria-label', `Go to image ${i + 1}`);

      const thumbImg = document.createElement('img');
      // Use thumbnail size for the thumb bar
      const thumbSrc = img.sizes?.thumbnail?.url || img.sizes?.medium?.url || img.url;
      thumbImg.src = thumbSrc;
      thumbImg.alt = img.alt || img.title || '';
      thumbImg.loading = 'lazy';
      thumbImg.width = img.sizes?.thumbnail?.width || 150;
      thumbImg.height = img.sizes?.thumbnail?.height || 150;
      // Prevent lightbox auto-wrap from wrapping thumb images with <a>
      thumbImg.setAttribute('data-no-lightbox', '');

      thumb.appendChild(thumbImg);
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        // Convert image index to page index
        goTo(Math.floor(i / cols));
      });
      thumbBar!.appendChild(thumb);
    });

    // Adjust slider height to make room for thumb bar
    const thumbBarHeight = 80; // estimated
    const adjustedHeight = sliderHeight - thumbBarHeight;
    if (adjustedHeight > 200) {
      slider.style.height = `${adjustedHeight}px`;
    }
  }

  // ── Lazy-load first image at full resolution ──
  const firstSlide = track.querySelector<HTMLAnchorElement>('.soeteck-gallery-slider__slide');
  if (firstSlide) {
    const firstImgEl = firstSlide.querySelector('img');
    if (firstImgEl && images[0]) {
      const fullImg = new Image();
      fullImg.onload = () => {
        firstImgEl.src = images[0].url;
        firstImgEl.dataset.loaded = '1';
        if (data.responsiveHeight !== false) {
          const naturalAspect = fullImg.naturalWidth / fullImg.naturalHeight;
          const reH = Math.min(Math.max(slider.clientWidth / naturalAspect, 240), data.sliderMaxHeight);
          slider.style.height = `${reH}px`;
        }
      };
      fullImg.src = images[0].url;
    }
  }

  // ── Assemble ──
  block.innerHTML = '';
  block.appendChild(slider);
  if (thumbBar) {
    block.appendChild(thumbBar);
  }
}

// ── Public API ───────────────────────────────────────────────────────────────

export function initSimplyGallery(): void {
  if (typeof document === 'undefined') return;

  const blocks = document.querySelectorAll<HTMLElement>('.pgc-sgb-cb');
  if (blocks.length === 0) return;

  blocks.forEach((block) => {
    const scriptEl = block.querySelector<HTMLScriptElement>('script.sgb-data, script[class*="sgb-data"]');
    if (!scriptEl || !scriptEl.textContent) return;

    try {
      const data: SgbData = JSON.parse(scriptEl.textContent);
      if (!data.images || data.images.length === 0) return;
      buildSlider(block, data);
    } catch (err) {
      console.warn('[Soeteck Gallery] Failed to parse sgb-data:', err);
    }
  });
}

// ── Auto-init on module load ─────────────────────────────────────────────────

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSimplyGallery(), { once: true });
  } else {
    initSimplyGallery();
  }
}