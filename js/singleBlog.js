// let blogs = JSON.parse(localStorage.getItem("blogs"));

// let index = localStorage.getItem("blogIndex");
// let blogDetailmaintitle = document.querySelector(".blogDetail-main--title");

// blogDetailmaintitle.innerHTML = blogs[index].blogTitle;

fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog")
  .then((response) => response.json())
  .then(async (data) => {
    data.data.map((blog) => {
      const mainTitle = blog.blogMainTitle;
      const sumary = blog.blogDescription;
      const title = blog.blogTitle;
      const sum = blog.blogSummary;
      console.log(sumary);
      let blogDetailmaintitle = document.querySelector(
        ".blogDetail-main--title"
      );
      let blogDes = document.querySelector(".blogDescription");
      let blgH = document.querySelector(".detail-h3");
      let sumH = document.querySelector(".detail-two-p");
      blogDetailmaintitle.innerHTML = mainTitle;
      blogDes.innerHTML = sumary;
      blgH.innerHTML = title;
      sumH.innerHTML = sum;
    });
  });

// function singleBlogs() {
//   fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog")
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
