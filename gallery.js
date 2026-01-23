// Navbar background change on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const hamburgerBtn = document.querySelector('.nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuBtn = document.querySelector('.close-mobile-menu');

// Open menu
hamburgerBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // prevent background scroll
});

// Close menu
closeMobileMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Close if clicking outside the menu content
mobileMenu.addEventListener('click', e => {
  if(e.target === mobileMenu) {
    mobileMenu.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
