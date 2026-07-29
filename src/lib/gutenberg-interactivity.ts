/**
 * Gutenberg Block Interactivity — Soeteck Astro Frontend
 *
 * Handles frontend interactivity for Gutenberg blocks that require JavaScript.
 * WordPress uses the Interactivity API (@wordpress/interactivity) for these blocks,
 * which is not available in the headless Astro setup. This file provides
 * equivalent vanilla JS behavior.
 *
 * Currently supported blocks:
 * - core/accordion (toggle, autoclose, keyboard nav, hash opening)
 *
 * @see docs/DECISIONS.md#adr-012
 * @see .claude/memory/gutenberg-block-styles.md
 */

export function initAccordions(): void {
  const accordions = document.querySelectorAll<HTMLElement>('.wp-block-accordion');

  accordions.forEach((accordion) => {
    // Skip if already initialized
    if (accordion.dataset.soeteckAccordionInit === 'true') return;
    accordion.dataset.soeteckAccordionInit = 'true';

    const items = accordion.querySelectorAll<HTMLElement>('.wp-block-accordion-item');
    const isAutoclose = accordion.classList.contains('is-autoclose');

    items.forEach((item) => {
      const toggle = item.querySelector<HTMLButtonElement>('.wp-block-accordion-heading__toggle');
      const panel = item.querySelector<HTMLElement>('.wp-block-accordion-panel');
      const icon = item.querySelector<HTMLElement>('.wp-block-accordion-heading__toggle-icon');

      if (!toggle || !panel) return;

      // Set initial state
      panel.setAttribute('aria-hidden', 'true');
      panel.setAttribute('inert', '');

      toggle.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        if (isOpen) {
          // Close this item
          item.classList.remove('is-open');
          panel.setAttribute('aria-hidden', 'true');
          panel.setAttribute('inert', '');
          if (icon) icon.textContent = '+';
        } else {
          // If autoclose, close all other items first
          if (isAutoclose) {
            items.forEach((sibling) => {
              if (sibling !== item) {
                sibling.classList.remove('is-open');
                const siblingPanel = sibling.querySelector<HTMLElement>('.wp-block-accordion-panel');
                const siblingIcon = sibling.querySelector<HTMLElement>('.wp-block-accordion-heading__toggle-icon');
                if (siblingPanel) {
                  siblingPanel.setAttribute('aria-hidden', 'true');
                  siblingPanel.setAttribute('inert', '');
                }
                if (siblingIcon) siblingIcon.textContent = '+';
              }
            });
          }

          // Open this item
          item.classList.add('is-open');
          panel.removeAttribute('aria-hidden');
          panel.removeAttribute('inert');
          if (icon) icon.textContent = '×';
        }
      });

      // Keyboard navigation
      toggle.addEventListener('keydown', (e) => {
        const allToggles = Array.from(
          accordion.querySelectorAll<HTMLButtonElement>('.wp-block-accordion-heading__toggle')
        );
        const currentIndex = allToggles.indexOf(toggle);

        let nextIndex: number | null = null;
        switch (e.key) {
          case 'ArrowUp':
            nextIndex = Math.max(0, currentIndex - 1);
            break;
          case 'ArrowDown':
            nextIndex = Math.min(currentIndex + 1, allToggles.length - 1);
            break;
          case 'Home':
            nextIndex = 0;
            break;
          case 'End':
            nextIndex = allToggles.length - 1;
            break;
        }

        if (nextIndex !== null && nextIndex !== currentIndex) {
          e.preventDefault();
          allToggles[nextIndex].focus();
        }
      });
    });

    // Hash opening: open panel containing the hash target
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.slice(1));
      if (targetElement && accordion.contains(targetElement)) {
        const panel = targetElement.closest<HTMLElement>('.wp-block-accordion-panel');
        if (panel) {
          const item = panel.closest<HTMLElement>('.wp-block-accordion-item');
          const toggle = item?.querySelector<HTMLButtonElement>('.wp-block-accordion-heading__toggle');
          if (toggle) toggle.click();
          setTimeout(() => targetElement.scrollIntoView(), 100);
        }
      }
    }
  });
}

// Initialize on DOM ready and after Astro page transitions
document.addEventListener('DOMContentLoaded', initAccordions);
// Also expose for manual re-initialization after dynamic content loads
(window as any).__soeteckInitAccordions = initAccordions;