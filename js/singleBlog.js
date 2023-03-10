// let blogs = JSON.parse(localStorage.getItem("blogs"));

// let index = localStorage.getItem("blogIndex");
// let blogDetailmaintitle = document.querySelector(".blogDetail-main--title");

// blogDetailmaintitle.innerHTML = blogs[index].blogTitle;
const id = window.location.href.split("?id=")[1];

fetch(`https://long-blue-firefly-vest.cyclic.app/api/v1/blog/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("single", data, id);
    const mainTitle = data.data.blogMainTitle;
    const sumary = data.data.blogDescription;
    const title = data.data.blogTitle;
    const sum = data.data.blogSummary;
    const img = data.data.blogImage;
    console.log(sumary);
    let blogDetailmaintitle = document.querySelector(".blogDetail-main--title");
    let blogDes = document.querySelector(".blogDescription");
    let blgH = document.querySelector(".detail-h3");
    let sumH = document.querySelector(".detail-two-p");
    let imgDis = document.querySelector(".img-3-1");
    blogDetailmaintitle.innerHTML = mainTitle;
    blogDes.innerHTML = sumary;
    blgH.innerHTML = title;
    sumH.innerHTML = sum;
    imgDis.innerHTML = `<img src='${img}'/>`;
  });

// function singleBlogs() {
//   fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog")
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
