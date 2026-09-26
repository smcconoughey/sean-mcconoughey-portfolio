const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');

menuButton?.addEventListener('click', () => {
  const open = !navList.classList.contains('open');
  navList.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

navList?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open menu');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    navList?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open menu');
  }
});

const progress = document.querySelector('.reading-progress');
let scheduled = false;
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = scrollable > 0 ? `${Math.min(100, Math.max(0, window.scrollY / scrollable * 100))}%` : '0%';
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) {
    requestAnimationFrame(updateProgress);
    scheduled = true;
  }
}, { passive: true });
updateProgress();
