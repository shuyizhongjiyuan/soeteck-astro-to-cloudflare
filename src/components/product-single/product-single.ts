/**
 * Product single page client-side interactions.
 * 从 new-soeteck-wp/wp-content/themes/soeteck/assets/js/product.js 1:1 移植。
 * 交互：Gallery 轮播（点击/触摸滑动）+ Tabs 切换（含滚动指示条）+ Spec 折叠 +
 *      Inquiry 表单占位提交 + UTM 参数捕获 + Anchor 链接映射到 Tab。
 */

import { submitContactForm } from '@/lib/inquiry-form';
import { CountrySelect } from '@/lib/country-select';

const init = () => {
  // -------- Gallery --------
  const galleries = document.querySelectorAll<HTMLElement>('[data-product-gallery]');
  galleries.forEach((gallery) => {
    const items = gallery.querySelectorAll<HTMLElement>('[data-gallery-item]');
    const thumbs = gallery.querySelectorAll<HTMLElement>('[data-gallery-thumb]');
    const navButtons = gallery.querySelectorAll<HTMLElement>('[data-gallery-nav]');
    let activeIndex = 0;

    const activateGalleryItem = (index: number) => {
      activeIndex = (index + items.length) % items.length;
      const main = gallery.querySelector<HTMLElement>('.soeteck-product-gallery__main');

      if (main) {
        main.style.setProperty('--gallery-index', String(activeIndex));
        main.style.setProperty('--gallery-drag-offset', '0px');
      }

      items.forEach((item) => {
        item.classList.toggle('is-active', Number(item.getAttribute('data-gallery-item')) === activeIndex);
      });

      thumbs.forEach((button) => {
        button.classList.toggle('is-active', Number(button.getAttribute('data-gallery-thumb')) === activeIndex);
      });

      // 将 active thumb 滚入可视区域，避免被容器边缘遮挡
      const activeThumb = gallery.querySelector<HTMLElement>('[data-gallery-thumb].is-active');
      activeThumb?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        activateGalleryItem(Number(thumb.getAttribute('data-gallery-thumb')));
      });
    });

    navButtons.forEach((button) => {
      button.addEventListener('click', () => {
        activateGalleryItem(activeIndex + (button.getAttribute('data-gallery-nav') === 'next' ? 1 : -1));
      });
    });

    const main = gallery.querySelector<HTMLElement>('.soeteck-product-gallery__main');
    const track = gallery.querySelector<HTMLElement>('.soeteck-product-gallery__track');
    const mobileGalleryQuery = window.matchMedia('(max-width: 768px)');
    let touchStartX = 0;
    let touchStartY = 0;
    let dragOffset = 0;
    let dragging = false;
    let horizontalDrag = false;

    if (main && track && items.length > 1) {
      main.style.setProperty('--gallery-index', String(activeIndex));
      main.style.setProperty('--gallery-drag-offset', '0px');

      main.addEventListener('touchstart', (event) => {
        if (!mobileGalleryQuery.matches || event.touches.length !== 1) {
          return;
        }
        const touch = event.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        dragOffset = 0;
        dragging = true;
        horizontalDrag = false;
        main.classList.add('is-dragging');
        main.style.setProperty('--gallery-drag-offset', '0px');
      }, { passive: true });

      main.addEventListener('touchmove', (event) => {
        if (!dragging) {
          return;
        }
        const touch = event.touches[0];
        const distanceX = touch.clientX - touchStartX;
        const distanceY = touch.clientY - touchStartY;

        if (!horizontalDrag && Math.abs(distanceX) > 10) {
          horizontalDrag = Math.abs(distanceX) > Math.abs(distanceY);
        }
        if (!horizontalDrag) {
          return;
        }
        event.preventDefault();
        dragOffset = distanceX;
        main.style.setProperty('--gallery-drag-offset', `${dragOffset}px`);
      }, { passive: false });

      main.addEventListener('touchend', () => {
        if (!dragging) {
          return;
        }
        dragging = false;
        main.classList.remove('is-dragging');
        main.style.setProperty('--gallery-drag-offset', '0px');

        if (horizontalDrag && Math.abs(dragOffset) > 35) {
          activateGalleryItem(activeIndex + (dragOffset < 0 ? 1 : -1));
        } else {
          main.style.setProperty('--gallery-index', String(activeIndex));
        }
        dragOffset = 0;
        horizontalDrag = false;
      });

      main.addEventListener('touchcancel', () => {
        dragging = false;
        dragOffset = 0;
        horizontalDrag = false;
        main.classList.remove('is-dragging');
        main.style.setProperty('--gallery-index', String(activeIndex));
        main.style.setProperty('--gallery-drag-offset', '0px');
      });
    }
  });

  // -------- Tabs --------
  const updateProductTabIndicator = (tabsRoot: HTMLElement) => {
    const tabList = tabsRoot.querySelector<HTMLElement>('.soeteck-product-tabs__list');
    const activeTab = tabsRoot.querySelector<HTMLElement>('[data-product-tab].is-active');

    if (!tabList || !activeTab) {
      return;
    }
    const listRect = tabList.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    tabList.style.setProperty('--soeteck-tab-indicator-x', `${tabRect.left - listRect.left + tabList.scrollLeft}px`);
    tabList.style.setProperty('--soeteck-tab-indicator-width', `${tabRect.width}px`);
  };

  const animateProductTabScroll = (tabsRoot: HTMLElement, tabList: HTMLElement & { productTabScrollTimer?: number }, targetScroll: number) => {
    const startScroll = tabList.scrollLeft;
    const distance = targetScroll - startScroll;
    const duration = 320;
    const startedAt = Date.now();

    if (Math.abs(distance) < 1) {
      return;
    }
    if (tabList.productTabScrollTimer) {
      window.clearInterval(tabList.productTabScrollTimer);
    }
    tabList.productTabScrollTimer = window.setInterval(() => {
      const progress = Math.min((Date.now() - startedAt) / duration, 1);
      const eased = progress * progress * progress * (progress * (progress * 6 - 15) + 10);
      tabList.scrollLeft = startScroll + (distance * eased);
      updateProductTabIndicator(tabsRoot);

      if (progress >= 1) {
        window.clearInterval(tabList.productTabScrollTimer);
        tabList.scrollLeft = targetScroll;
        updateProductTabIndicator(tabsRoot);
      }
    }, 16);
  };

  const centerProductTab = (tabsRoot: HTMLElement, activeTab: HTMLElement) => {
    const tabList = tabsRoot.querySelector<HTMLElement>('.soeteck-product-tabs__list');
    if (!tabList || !activeTab || tabList.scrollWidth <= tabList.clientWidth) {
      return;
    }
    const maxScroll = tabList.scrollWidth - tabList.clientWidth;
    const targetScroll = Math.max(0, Math.min(maxScroll, activeTab.offsetLeft - ((tabList.clientWidth - activeTab.offsetWidth) / 2)));
    if (Math.abs(targetScroll - tabList.scrollLeft) > 1) {
      animateProductTabScroll(tabsRoot, tabList, targetScroll);
    }
  };

  const activateProductTab = (tabsRoot: HTMLElement, tabName: string | null): boolean => {
    if (!tabName) return false;
    const tabs = tabsRoot.querySelectorAll<HTMLElement>('[data-product-tab]');
    const panels = tabsRoot.querySelectorAll<HTMLElement>('[data-product-panel]');
    const nextTab = tabsRoot.querySelector<HTMLElement>(`[data-product-tab="${tabName}"]`);
    const nextPanel = tabsRoot.querySelector<HTMLElement>(`[data-product-panel="${tabName}"]`);
    if (!nextTab || !nextPanel) {
      return false;
    }
    tabs.forEach((tab) => {
      const active = tab === nextTab;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    panels.forEach((panel) => {
      const active = panel === nextPanel;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
    centerProductTab(tabsRoot, nextTab);
    updateProductTabIndicator(tabsRoot);
    return true;
  };

  document.querySelectorAll<HTMLElement>('[data-product-tabs]').forEach((tabsRoot) => {
    const tabList = tabsRoot.querySelector<HTMLElement>('.soeteck-product-tabs__list');

    tabsRoot.querySelectorAll<HTMLElement>('[data-product-tab]').forEach((tab) => {
      tab.addEventListener('click', () => {
        activateProductTab(tabsRoot, tab.getAttribute('data-product-tab'));
      });
    });

    updateProductTabIndicator(tabsRoot);
    window.addEventListener('resize', () => updateProductTabIndicator(tabsRoot));

    if (tabList) {
      tabList.addEventListener('scroll', () => updateProductTabIndicator(tabsRoot));
    }
  });

  // -------- Anchor → Tab mapping --------
  const anchorToTab: Record<string, string> = {
    '#product-overview': 'overview',
    '#product-features': 'overview',
    '#product-applications': 'overview',
    '#product-models': 'models',
    '#product-specifications': 'specifications',
    '#product-downloads': 'downloads',
    '#product-inquiry': 'inquiry',
  };

  document.querySelectorAll<HTMLAnchorElement>('.soeteck-product-hero__actions a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href') ?? '';
      const tabName = anchorToTab[hash];
      const tabsRoot = document.querySelector<HTMLElement>('[data-product-tabs]');

      if (!tabName || !tabsRoot || !activateProductTab(tabsRoot, tabName)) {
        return;
      }
      event.preventDefault();
      tabsRoot.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', hash);
    });
  });

  const initialTab = anchorToTab[window.location.hash];
  if (initialTab) {
    const tabsRoot = document.querySelector<HTMLElement>('[data-product-tabs]');
    if (tabsRoot) {
      activateProductTab(tabsRoot, initialTab);
      // 深链（分类页 Get Quotation → #product-inquiry）：激活询盘 tab 后滚动到 tab 区
      // 页面没有 id=#product-inquiry 的元素，浏览器原生锚点无效，需手动滚动；
      // 减 sticky header 高度避让遮挡（.site-header, top:0, z-index 1000）
      requestAnimationFrame(() => {
        const headerEl = document.querySelector<HTMLElement>('.site-header');
        const headerOffset = headerEl ? headerEl.offsetHeight : 0;
        const top = tabsRoot.getBoundingClientRect().top + window.scrollY - headerOffset - 12;
        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
      });
    }
  }

  // -------- Variations table drag scroll --------
  document.querySelectorAll<HTMLElement>('.variations-table').forEach((tableWrap) => {
    let dragging = false;
    let startX = 0;
    let scrollLeft = 0;

    tableWrap.addEventListener('mousedown', (event) => {
      dragging = true;
      startX = event.pageX - tableWrap.offsetLeft;
      scrollLeft = tableWrap.scrollLeft;
      tableWrap.classList.add('is-dragging');
    });
    tableWrap.addEventListener('mouseleave', () => {
      dragging = false;
      tableWrap.classList.remove('is-dragging');
    });
    tableWrap.addEventListener('mouseup', () => {
      dragging = false;
      tableWrap.classList.remove('is-dragging');
    });
    tableWrap.addEventListener('mousemove', (event) => {
      if (!dragging) {
        return;
      }
      event.preventDefault();
      const x = event.pageX - tableWrap.offsetLeft;
      tableWrap.scrollLeft = scrollLeft - (x - startX);
    });
  });

  // -------- Spec table group expand/collapse --------
  document.querySelectorAll<HTMLElement>('[data-spec-table]').forEach((specTable) => {
    const setGroup = (groupId: string, open: boolean) => {
      const group = specTable.querySelector<HTMLElement>(`[data-spec-group="${groupId}"]`);
      const toggle = specTable.querySelector<HTMLElement>(`[data-spec-toggle="${groupId}"]`);
      if (group) {
        group.classList.toggle('is-open', open);
      }
      if (toggle) {
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
      specTable.querySelectorAll<HTMLElement>(`[data-spec-row="${groupId}"]`).forEach((row) => {
        row.hidden = !open;
      });
    };

    specTable.querySelectorAll<HTMLElement>('[data-spec-toggle]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const groupId = toggle.getAttribute('data-spec-toggle') ?? '';
        setGroup(groupId, toggle.getAttribute('aria-expanded') !== 'true');
      });
    });

    const panel = specTable.closest<HTMLElement>('[data-product-panel="specifications"]');
    if (panel) {
      const expandAll = panel.querySelector<HTMLElement>('[data-spec-expand-all]');
      const collapseAll = panel.querySelector<HTMLElement>('[data-spec-collapse-all]');
      if (expandAll) {
        expandAll.addEventListener('click', () => {
          specTable.querySelectorAll<HTMLElement>('[data-spec-toggle]').forEach((toggle) => {
            setGroup(toggle.getAttribute('data-spec-toggle') ?? '', true);
          });
        });
      }
      if (collapseAll) {
        collapseAll.addEventListener('click', () => {
          specTable.querySelectorAll<HTMLElement>('[data-spec-toggle]').forEach((toggle) => {
            setGroup(toggle.getAttribute('data-spec-toggle') ?? '', false);
          });
        });
      }
    }
  });

  // -------- UTM capture into inquiry form hidden fields --------
  const params = new URLSearchParams(window.location.search);
  (['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const).forEach((key) => {
    const input = document.querySelector<HTMLInputElement>(`[data-inquiry-context="${key}"]`);
    if (input) {
      input.value = params.get(key) ?? '';
    }
  });

  // -------- Inquiry form submission --------
  document.querySelectorAll<HTMLFormElement>('[data-product-inquiry-form]').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const note = form.querySelector<HTMLElement>('.soeteck-product-inquiry-form__note');
      const submitBtn = form.querySelector<HTMLButtonElement>('[data-form-pending-message]');
      const fileInput = form.querySelector<HTMLInputElement>('input[type="file"][name="file_upload[]"]');

      submitBtn!.disabled = true;
      submitBtn!.classList.add('is-loading');
      if (note) {
        note.className = 'soeteck-product-inquiry-form__note';
        note.textContent = form.dataset.i18nPending || 'Submitting your inquiry...';
      }

      try {
        await submitContactForm(form, fileInput);
        // redirects to /thank-you/ on success
      } catch (err: any) {
        if (note) {
          note.textContent = err.message || form.dataset.i18nError || 'Submission failed. Please try again.';
          note.classList.add('soeteck-product-inquiry-form__note--error');
        }
        submitBtn!.disabled = false;
        submitBtn!.classList.remove('is-loading');
      }
    });
  });

  // -------- 国家选择器（共享 CountrySelect，contact 页同款） --------
  document.querySelectorAll<HTMLElement>('[data-country-select]').forEach((el) => new CountrySelect(el));

  // -------- Upload switch → 文件区展开 + 隐藏 radio 状态同步 --------
  const uploadToggle = document.querySelector<HTMLInputElement>('[data-upload-toggle]');
  const fileSectionSwitch = document.querySelector<HTMLElement>('.soeteck-product-inquiry__file');
  const uploadYes = document.querySelector<HTMLInputElement>('[data-upload-yes]');
  const uploadNo = document.querySelector<HTMLInputElement>('[data-upload-no]');
  uploadToggle?.addEventListener('change', function () {
    const checked = this.checked;
    if (fileSectionSwitch) {
      fileSectionSwitch.classList.toggle('is-visible', checked);
      fileSectionSwitch.setAttribute('aria-hidden', String(!checked));
    }
    if (uploadYes) uploadYes.checked = checked;
    if (uploadNo) uploadNo.checked = !checked;
  });

  // -------- 增强文件 chips：合并去重 + 单 chip 移除 + Clear all --------
  const fTrigger = document.querySelector<HTMLButtonElement>('[data-product-file-trigger]');
  const fInput = document.querySelector<HTMLInputElement>('input[type="file"][name="file_upload[]"]');
  const fList = document.querySelector<HTMLElement>('[data-product-file-list]');
  const fClear = document.querySelector<HTMLButtonElement>('[data-product-file-clear]');
  const fSection = document.querySelector<HTMLElement>('.soeteck-product-inquiry__file');
  let pendingFiles: File[] = [];

  const mergeFiles = (existing: File[], incoming: FileList | null): File[] => {
    const fresh = Array.from(incoming || []);
    const existingKeys = new Set(existing.map(f => `${f.name}-${f.size}`));
    return [...existing, ...fresh.filter(f => !existingKeys.has(`${f.name}-${f.size}`))];
  };
  const setFileInput = (all: File[]): void => {
    if (!fInput) return;
    const dt = new DataTransfer();
    all.forEach(f => dt.items.add(f));
    fInput.files = dt.files;
  };
  const renderChips = (): void => {
    const all = Array.from(fInput?.files || []);
    if (all.length === 0) {
      if (fList) fList.textContent = form.dataset.i18nNofiles || 'No files selected';
      if (fClear) fClear.hidden = true;
      fSection?.classList.remove('has-file');
      return;
    }
    const chips = all.map((f, i) =>
      `<span class="soeteck-contact-form__file-chip"><span class="soeteck-contact-form__file-chip-name">${f.name}</span><button type="button" class="soeteck-contact-form__file-remove" data-chip-remove="${i}" aria-label="Remove ${f.name}">×</button></span>`
    ).join('');
    if (fList) fList.innerHTML = chips;
    if (fClear) fClear.hidden = false;
    fSection?.classList.add('has-file');
    document.querySelectorAll<HTMLButtonElement>('[data-chip-remove]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-chip-remove') || '0', 10);
        setFileInput(Array.from(fInput?.files || []).filter((_, k) => k !== idx));
        renderChips();
      });
    });
  };
  fTrigger?.addEventListener('click', () => {
    pendingFiles = Array.from(fInput?.files || []);
    if (fInput) fInput.value = '';
    fInput?.click();
  });
  fInput?.addEventListener('change', () => {
    const merged = mergeFiles(pendingFiles, fInput?.files ?? null);
    setFileInput(merged);
    pendingFiles = [];
    renderChips();
  });
  fClear?.addEventListener('click', () => { setFileInput([]); renderChips(); });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
