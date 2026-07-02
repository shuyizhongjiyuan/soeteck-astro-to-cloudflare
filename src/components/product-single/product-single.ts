/**
 * Product single page client-side interactions.
 * 从 new-soeteck-wp/wp-content/themes/soeteck/assets/js/product.js 1:1 移植。
 * 交互：Gallery 轮播（点击/触摸滑动）+ Tabs 切换（含滚动指示条）+ Spec 折叠 +
 *      Inquiry 表单占位提交 + UTM 参数捕获 + Anchor 链接映射到 Tab。
 */

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

  // -------- Inquiry form placeholder submission --------
  document.querySelectorAll<HTMLFormElement>('[data-product-inquiry-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const note = form.querySelector<HTMLElement>('.soeteck-product-inquiry-form__note');
      const submitBtn = form.querySelector<HTMLButtonElement>('[data-form-pending-message]');
      const message = submitBtn?.getAttribute('data-form-pending-message')
        ?? 'Inquiry submission will be connected in the native contact system phase.';
      if (note) {
        note.textContent = message;
      }
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
