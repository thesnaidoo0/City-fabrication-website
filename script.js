
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = document.body.classList.contains('menu-open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu-open')));
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
