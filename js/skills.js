/**
 * skills.js
 * Tab switching and skill bar fill animation.
 */
(function () {
  const tabs   = document.querySelectorAll('.skill-tab');
  const panels = document.querySelectorAll('.skills-panel');

  function animateBars(panel) {
    panel.querySelectorAll('.sb-fill').forEach(bar => {
      bar.classList.remove('animated');
      const w = parseFloat(bar.style.getPropertyValue('--w') || 0);
      bar.style.transform = 'scaleX(0)';
      void bar.offsetWidth; // reflow
      bar.style.transform = `scaleX(${w})`;
      bar.style.transition = 'transform 1.1s cubic-bezier(0.4,0,0.2,1)';
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t   => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(`tab-${tab.dataset.tab}`);
      panel.classList.add('active');
      animateBars(panel);
    });
  });

  /* Auto-animate first panel on scroll into view */
  const skillSection = document.getElementById('skills');
  if (skillSection) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateBars(document.querySelector('.skills-panel.active'));
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(skillSection);
  }
})();
