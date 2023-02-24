let blogs = JSON.parse(localStorage.getItem("blogs"));
let index = localStorage.getItem("blogIndex");
let blogDetailmaintitle = document.querySelector(".blogDetail-main--title");

blogDetailmaintitle.innerHTML = blogs[index].blogTitle;
