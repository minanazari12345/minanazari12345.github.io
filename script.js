const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-details]').forEach(button => {
  button.addEventListener('click', () => {
    const details = document.getElementById(button.dataset.details);
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    details.hidden = expanded;
    button.innerHTML = expanded
      ? 'View project details <span aria-hidden="true">+</span>'
      : 'Hide project details <span aria-hidden="true">−</span>';
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
