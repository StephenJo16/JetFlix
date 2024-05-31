window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  if (window.pageYOffset > 0) {
    nav.style.backgroundColor = "black";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
