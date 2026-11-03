(() => {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');

  if (!button || !nav) return;

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });
})();
