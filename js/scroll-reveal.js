/**
 * scroll-reveal.js
 * Lightweight IntersectionObserver scroll reveal for [data-aos] elements.
 * No external library needed.
 */
(function () {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        obs.unobserve(e.target);
      }
    }),
    { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-aos]').forEach(el => obs.observe(el));
})();
