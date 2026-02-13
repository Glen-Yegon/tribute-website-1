// Navbar background change on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".funeral-cta__inner");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  cta.style.opacity = "0";
  cta.style.transform = "translateY(40px)";
  cta.style.transition = "all 1s ease";

  observer.observe(cta);
});
