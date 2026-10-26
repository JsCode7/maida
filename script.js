const toggle = document.querySelector('.motion-toggle');
const journey = document.querySelector('.journey');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let userPaused = false;

function syncMotion() {
  toggle.hidden = reducedMotion.matches;
  journey.classList.toggle('is-paused', userPaused || reducedMotion.matches);
  toggle.setAttribute('aria-pressed', String(userPaused));
  toggle.querySelector('.motion-label').textContent = userPaused ? 'Reanudar animación' : 'Pausar animación';
  toggle.querySelector('.motion-symbol').textContent = userPaused ? '▷' : 'Ⅱ';
}
toggle.addEventListener('click', () => { userPaused = !userPaused; syncMotion(); });
reducedMotion.addEventListener('change', syncMotion);
syncMotion();
