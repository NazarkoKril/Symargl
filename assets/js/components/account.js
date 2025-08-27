(function(){
  const root = document.getElementById('account');
  const sections = {
    personal: root.querySelector('.account__section--personal'),
    access: root.querySelector('.account__section--access'),
    orders: root.querySelector('.account__section--orders'),
    wishlist: root.querySelector('.account__section--wishlist'),
  };
  const navLinks = root.querySelectorAll('.account-nav__link');
  const backBtn = root.querySelector('.account__back');

  function show(name){
    Object.values(sections).forEach(s=>s.classList.remove('is-active'));
    sections[name].classList.add('is-active');
    navLinks.forEach(l=>l.classList.remove('is-active'));
    root.querySelector('.to-' + name).classList.add('is-active');
    // on mobile -> leave menu to content
    if(window.innerWidth <= 980){ root.classList.remove('is-menu'); }
    window.scrollTo({top: root.offsetTop - 24, behavior: 'smooth'});
  }

  // initial mobile state: menu first
  function applyInitial(){ if(window.innerWidth <= 980){ root.classList.add('is-menu'); } else { root.classList.remove('is-menu'); } }
  applyInitial();
  window.addEventListener('resize', applyInitial);

  root.addEventListener('click', (e)=>{
    if(e.target.closest('.to-personal')) show('personal');
    else if(e.target.closest('.to-access')) show('access');
    else if(e.target.closest('.to-orders')) show('orders');
    else if(e.target.closest('.to-wishlist')) show('wishlist');
    else if(e.target.closest('.account-nav__logout')) window.location.href = '/';

    // back to menu (mobile)
    if(e.target.closest('.to-menu')){ root.classList.add('is-menu'); }

    // toggle password eyes in access section (reuse your icons)
    const t = e.target.closest('.auth-toggle');
    if(t){ const input = t.parentElement.querySelector('input'); const icon = t.querySelector('img'); if(input){ if(input.type==='password'){ input.type='text'; icon.src='/assets/img/icons/eye.svg'; t.classList.add('active'); } else { input.type='password'; icon.src='/assets/img/icons/hide_eye.svg'; t.classList.remove('active'); } } }
  });
})();