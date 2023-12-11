document.addEventListener("DOMContentLoaded", function () {
  var aboutImage = document.getElementById("about-image");

  window.addEventListener("scroll", function () {
    var scrollPosition =
      window.scrollY + window.innerHeight - aboutImage.clientHeight / 2;

    var aboutImagePosition = aboutImage.offsetTop;

    if (scrollPosition > aboutImagePosition) {
      aboutImage.classList.add("in-viewport");
    }
  });
});