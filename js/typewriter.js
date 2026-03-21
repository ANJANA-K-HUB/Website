/**
 * typewriter.js
 * Cycles through specialisation phrases in the hero section.
 * Edit WORDS array to change what appears.
 */
(function () {
  const WORDS = [
    'Machine Learning',
    'NLP & Text Analysis',
    'Financial Analytics',
    'Computer Vision',
    'Feature Engineering',
    'Data Visualisation',
    'Predictive Modelling',
  ];

  const el = document.getElementById('heroTypewriter');
  if (!el) return;

  let wi = 0, ci = 0, deleting = false;
  const TYPE_SPEED = 75, DEL_SPEED = 40, PAUSE = 1800;

  function tick() {
    const word = WORDS[wi];
    el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);

    let delay = deleting ? DEL_SPEED : TYPE_SPEED;

    if (!deleting && ci > word.length) {
      delay = PAUSE; deleting = true;
    } else if (deleting && ci < 0) {
      deleting = false;
      wi = (wi + 1) % WORDS.length;
      ci = 0;
      delay = 400;
    }
    setTimeout(tick, delay);
  }
  tick();
})();
