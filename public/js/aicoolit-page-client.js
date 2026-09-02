/**
 * AICoolit Liquid Cooling Data Center — client interactions.
 *
 * Moved to public/ because Astro 7's Rust compiler silently drops the
 * <script> block inside AICoolitPage.astro (same bug as the <style is:global>
 * drop, see commit a16fc32). Public assets are copied verbatim → no Rust
 * parsing, guaranteed to load.
 *
 * Two features:
 *   1. CDU component tabs (stage panel switching + panel height sync)
 *   2. CTA inquiry form → POST to /soeteck/v1/inquiry → thank-you redirect
 *
 * Plain IIFE, no module imports. API base read from the form's data-api-base.
 */
(function () {
  var root = document.querySelector('[data-aicoolit-solution]');
  if (!root) return;

  /* ── CDU Component Tabs ── */
  var tabContainer = root.querySelector('[data-aicoolit-tabs]');
  if (tabContainer) {
    var tabButtons = tabContainer.querySelectorAll('[data-tab-target]');
    var tabPanels = tabContainer.querySelectorAll('[data-tab-panel]');
    var panelsWrap = tabContainer.querySelector('.aicoolit-cdu__panels');

    /* Fix panel height: measure tallest panel, apply as min-height */
    function syncPanelHeight() {
      if (!panelsWrap) return;
      var maxH = 0;
      tabPanels.forEach(function (panel) {
        panel.style.minHeight = '';
        panel.hidden = false;
        panel.classList.add('is-active');
        var h = panel.offsetHeight;
        if (h > maxH) maxH = h;
        panel.hidden = true;
        panel.classList.remove('is-active');
      });
      /* Re-activate the current active tab (no scroll — initial sizing only) */
      var activeBtn = tabContainer.querySelector('[data-tab-target].is-active');
      if (activeBtn) activateTab(activeBtn.getAttribute('data-tab-target'), false);
      if (maxH > 0) panelsWrap.style.minHeight = maxH + 'px';
    }

    function activateTab(tabId, shouldScroll) {
      tabButtons.forEach(function (btn) {
        var isActive = btn.getAttribute('data-tab-target') === tabId;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        if (isActive && shouldScroll) {
          btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      });
      tabPanels.forEach(function (panel) {
        var isActive = panel.getAttribute('data-tab-panel') === tabId;
        panel.classList.toggle('is-active', isActive);
        panel.hidden = !isActive;
      });
    }

    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activateTab(this.getAttribute('data-tab-target'), true);
      });
    });

    /* Measure after fonts/images settle */
    if (document.readyState === 'complete') {
      syncPanelHeight();
    } else {
      window.addEventListener('load', syncPanelHeight);
    }
    /* Re-measure on resize */
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(syncPanelHeight, 200);
    });
  }

  /* ── CTA Inquiry Form ── */
  var inquiryForm = root.querySelector('[data-aicoolit-inquiry]');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var btn = inquiryForm.querySelector('[type="submit"]');
      var note = inquiryForm.querySelector('#aicoolit-form-note');
      var formData = new FormData(inquiryForm);
      var qs = new URLSearchParams(window.location.search);
      var payload = {
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        company: formData.get('company') || '',
        phone: formData.get('phone') || '',
        subject: formData.get('subject') || '',
        message: formData.get('message') || '',
        product_name: formData.get('product_name') || '',
        product_url: formData.get('product_url') || '',
        language: document.documentElement.lang || 'en',
        source_url: window.location.href,
        referrer: document.referrer || '',
        gclid: qs.get('gclid') || '',
        utm_source: qs.get('utm_source') || '',
        utm_medium: qs.get('utm_medium') || '',
        utm_campaign: qs.get('utm_campaign') || '',
        utm_term: qs.get('utm_term') || '',
        utm_content: qs.get('utm_content') || ''
      };
      var apiBase = inquiryForm.getAttribute('data-api-base') || 'https://cms.soeteck.com/wp-json';
      btn.disabled = true;
      if (note) {
        note.hidden = false;
        note.textContent = inquiryForm.getAttribute('data-i18n-sending') || 'Sending…';
      }
      fetch(apiBase + '/soeteck/v1/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (resp) {
          if (!resp.ok) throw new Error('Submission failed');
          return resp.json();
        })
        .then(function (result) {
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'inquiry_submitted',
              inquiry_id: result.id,
              inquiry_channel: result.channel || 'direct',
              inquiry_product: payload.product_name || ''
            });
          }
          var lang = document.documentElement.lang || 'en';
          window.location.href = '/' + lang + '/thank-you/';
        })
        .catch(function () {
          btn.disabled = false;
          if (note) note.textContent = inquiryForm.getAttribute('data-i18n-error') || 'Submission failed. Please try again or contact us directly.';
        });
    });
  }
})();