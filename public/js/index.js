window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
