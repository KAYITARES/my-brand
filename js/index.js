//after window is loaded completly
window.onload = function () {
  //hide the preloader
  const preloader = document.querySelector(".preloader");

  setTimeout(() => {
    preloader.classList.add("preloader-end");
    document.querySelector(".home-page").style.display = "block";
  }, 3000);
};

let nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("nav-sticky");
  } else {
    nav.classList.remove("nav-sticky");
  }
});

const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
hamburgerWrapper.addEventListener("click", () => {
  hamburgerWrapper.classList.toggle("active");
});
