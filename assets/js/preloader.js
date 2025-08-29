//прелоадер

(() => {
  // Не показувати на сторінках з атрибутом <body data-no-preloader>
  if (document.body?.dataset?.noPreloader !== undefined) return;

  const html = `
    <div id="preloader" class="preloader" aria-hidden="true">
      <div class="preloader__inner">
        <div class="preloader__logo">
          <img src="/assets/img/logo_gray.svg" alt="Симаргл">
        </div>
        <div class="preloader__center">
          <div class="preloader__bar">
            <span class="preloader__bar-fill"></span>
          </div>
          <div class="preloader__percent">0%</div>
        </div>
        <div class="preloader__status sub_title">Завантаження</div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('afterbegin', html);

  const pre = document.getElementById('preloader');
  const percentEl = pre.querySelector('.preloader__percent');
  const fillEl = pre.querySelector('.preloader__bar-fill');

  let progress = 0;
  let loaded = false;
  let rafId;

  function setProgress(p) {
    progress = Math.max(0, Math.min(100, p));
    percentEl.textContent = Math.round(progress) + '%';
    pre.style.setProperty('--p', (progress / 100).toFixed(3));
  }

  function tick() {
    const target = loaded ? 100 : 90;          
    const speed  = loaded ? 0.20 : 0.035;  
    const step   = (target - progress) * speed + (loaded ? .8 : .3);
    if (progress < target) setProgress(progress + step);
    if (progress < 100) {
      rafId = requestAnimationFrame(tick);
    } else {
      pre.classList.add('preloader--done');
      setTimeout(() => pre.remove(), 650);
    }
  }

  window.addEventListener('load', () => {
    loaded = true;
    if (!rafId) tick();
  }, { once: true });


  setTimeout(() => { if (!loaded) loaded = true; }, 8000);

  setProgress(0);
  tick();
})();
