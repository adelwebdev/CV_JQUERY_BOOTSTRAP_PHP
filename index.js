// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// typed
var typed = new Typed(".typed", {
  strings: [" Programmeur", " Dévéloppeur", " Docteur"],
  typeSpeed: 34,
  backSpeed: 3,
  smartBackspace: true, // this is a default
  loop: true,
});
