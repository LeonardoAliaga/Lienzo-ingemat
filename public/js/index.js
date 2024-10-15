window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

function toggle() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}
