//after window is loaded completly
window.onload = function () {
  //hide the preloader
  const preloader = document.querySelector(".preloader");

  setTimeout(() => {
    preloader.classList.add("preloader-end");
    document.querySelector(".home-page").style.display = "block";
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
const x = window.matchMedia("(max-width:870px)");
// const y = window.matchMedia("(min-width:871px)");
hamburgerWrapper.addEventListener("click", () => {
  // hamburgerWrapper.classList.toggle("active");
  // hamburgerWrapper.classList.toggle("active");
  hamburgerWrapper.classList.toggle("active");
  navLinks.classList.toggle("active");
});

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
      hamburgerWrapper.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// let login = document.querySelector(".loginFunctDisplay");
// let modal = document.querySelector(".modal");
// let homecont = document.querySelector("#home");
// let close = document.querySelector(".close-icon");
// login.addEventListener("click", () => {
//   homecont.classList.add("hidden");
//   modal.classList.add("show");
// });
// close.addEventListener("click", () => {
//   homecont.classList.remove("hidden");
//   modal.classList.remove("show");
// });

const queryfullName = document.querySelector("#name");
const queryEmail = document.querySelector("#email");
const queryMessage = document.querySelector("#message");
const contactButton = document.querySelector("#contactButton");
const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function saveContacts() {
  let contact = {};

  contact.queryfullName = queryfullName.value;
  contact.queryEmail = queryEmail.value;
  contact.queryMessage = queryMessage.value;

  contacts.push(contact);
  alert("Message Successfuly Sent!");
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

contactButton.onclick = saveContacts;
