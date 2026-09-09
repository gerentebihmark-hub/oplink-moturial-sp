/* ==========================================================================
   MAIN JAVASCRIPT — MOTURIAL SÃO PAULO (OPLINK OFICIAL)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAnalyticsTracking();
});

/**
 * GA4 / Analytics CTA Click Event Tracking
 */
function initAnalyticsTracking() {
  const trackableLinks = document.querySelectorAll('a[id^="btn-"]');
  
  trackableLinks.forEach(link => {
    link.addEventListener('click', () => {
      const linkId = link.getAttribute('id');
      const linkLabel = link.querySelector('.btn-title')?.textContent?.trim() || linkId;
      
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'cta_click', {
          'cta_id': linkId,
          'cta_label': linkLabel,
          'page_location': window.location.href
        });
      }
    });
  });
}
