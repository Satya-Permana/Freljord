const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? 'Tutup' : 'Menu';
});

document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu';
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
