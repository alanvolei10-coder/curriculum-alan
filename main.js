document.getElementById('anio').textContent = new Date().getFullYear();

const menu = document.getElementById('menu');
document.querySelectorAll('#menu .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

const saludo = 'Hola Alan, vi tu portafolio y me gustaría ponerme en contacto contigo.';
document.querySelectorAll('[data-contacto]').forEach((el) => {
  const armar = () => {
    const dato = atob(el.dataset.v);
    el.href = el.dataset.contacto === 'wa'
      ? 'https://wa.me/' + dato + '?text=' + encodeURIComponent(saludo)
      : 'mailto:' + dato;
    if (el.dataset.contacto === 'wa') { el.target = '_blank'; el.rel = 'noopener'; }
  };
  ['pointerenter', 'focus', 'touchstart'].forEach((ev) =>
    el.addEventListener(ev, armar, { once: true, passive: true })
  );
  el.addEventListener('click', armar);
});
