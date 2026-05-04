const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

const sections = document.querySelectorAll("main section, header.hero");
const navLinks = document.querySelectorAll(".nav-link");

const setActiveLink = () => {
  let currentId = "home";

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    const height = section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < top + height) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentId}`,
    );
  });
};

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);
