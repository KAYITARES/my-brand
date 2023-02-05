//after window is loaded completly
window.onload = function () {
  //hide the preloader
  const preloader = document.querySelector(".preloader");

  setTimeout(() => {
    preloader.classList.add("preloader-end");
    document.querySelector(".home-page").style.display = "block";
    document.querySelector(".blog-page").style.display = "block";
  }, 3000);
};
const d = new Date();
let year = d.getFullYear();
let date = (document.querySelector(".year").innerHTML = year);
let nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("nav-sticky");
  } else {
    nav.classList.remove("nav-sticky");
  }
});

const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
const navLinks = document.querySelector(".nav-links");
const headerEl = document.querySelector(".nav");
hamburgerWrapper.addEventListener("click", () => {
  if (x.matches) {
    if (hamburgerWrapper.classList.toggle("active")) {
      navLinks.style.display = "flex";
    } else if (hamburgerWrapper) {
      navLinks.style.display = "none";
    }
  }
});

var x = window.matchMedia("(max-width: 870px)");
//////////////////////////////////////////////////////////
// sroll smooth
///////////////////////////////////////////////////////////
const allLinks = document.querySelectorAll(".navz");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    //Scroll to thre top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scroll to other link
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //close mobile navigation
    if (link.classList.contains("nav-link"))
      hamburgerWrapper.classList.toggle("active");
  });
});
