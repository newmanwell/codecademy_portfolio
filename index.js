// adding the current year to the footer
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;

// mobile hamburger nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-ul');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('nav-ul--open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      navMenu.classList.remove('nav-ul--open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}