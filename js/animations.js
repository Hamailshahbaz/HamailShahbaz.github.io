/* ================================================================
   animations.js — Scroll-triggered fade-up for section content

   Any element with the class `fade-up` starts invisible.
   When it scrolls into view, this script adds the class `visible`,
   which triggers the CSS transition defined in base.css.

   You can add `fade-up` to any new element in index.html and it
   will automatically animate without touching this file.
   ================================================================ */

var fadeElements = document.querySelectorAll('.fade-up');

var fadeObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop observing once visible — no need to re-trigger
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(function(el) {
  fadeObserver.observe(el);
});
