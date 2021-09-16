
(function () {
  "Menu";
  let navbar = document.getElementById("menu");
  window.addEventListener("scroll", function () {
    let altNavBar = navbar.clientHeight;
    if (window.scrollY >= altNavBar) {
      navbar.classList.remove("no-fixed-top");
      navbar.classList.toggle("fixed-top", true);
    } else {
      navbar.classList.replace("fixed-top", "no-fixed-top");
    }
  });
})();
