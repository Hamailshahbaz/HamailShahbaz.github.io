/* ================================================================
   nav.js — Mobile hamburger menu + active nav link on scroll
   ================================================================ */


/* ── MOBILE MENU ── */

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close the mobile menu when any nav link is clicked
document.querySelectorAll('#navLinks a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('open');
  });
});


/* ── ACTIVE SECTION HIGHLIGHT ── */
// Watches which section is on screen and highlights
// the matching nav link with the .active class.

var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-links a');

var sectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // Remove active from all links
      navLinks.forEach(function(a) { a.classList.remove('active'); });
      // Add active to the matching link
      var activeLink = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.35 });

sections.forEach(function(section) {
  sectionObserver.observe(section);
});
