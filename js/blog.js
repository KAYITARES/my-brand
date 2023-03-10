const blogContainer = document.querySelector(".blogs-cont");

fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(".........." + data.data.length);
    if (data.data.length > 0) {
      data.data.map((blog, index) => {
        const blogBox = document.createElement("div");
        blogBox.classList.add("blogz-col-1");
        blogContainer.innerHTML +=
          `<div class="blogz-col-1">
          <a href="./blogDetail.html?id=${blog._id}" class="readmore" id="${index}">
    <img src="${blog.blogImage}" class="blog-img" />
     </a>
  <div class="padd-2">
    <a href="#" class="blog-title">
      <span class="blog-name">` +
          blog.blogMainTitle +
          `</span><span class="blog-date">/` +
          blog.publishedDate +
          `</span>
    </a>
    <a href="#">
      <h3 class="blog-title_title">` +
          blog.blogTitle +
          `</h3>
    </a>
    <p class="blog-des">` +
          blog.blogSummary +
          `</p>
   
  </div>
  
</div>`;
        // blogContainer.append(blogBox);
      });
    } else {
      console.log("no blog found");
      blogContainer.innerHTML = `<h1 style='color:red'>NO BLOG FOUND </h1>`;
    }
  });

// blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// console.log(`THE USER ID ${users.forEach()}`);

// blogContainer.innerHTML = "";
// console.log(blogs.length);
// if (blogs.length > 0) {
//   blogs.forEach((blog, index) => {
//     const blogBox = document.createElement("div");
//     blogBox.classList.add("blogz-col-1");
//     blogContainer.innerHTML +=
//       `<div class="blogz-col-1">
//       <a href="./blogDetail.html" class="readmore" id="${index}">
//       <img src="${blog.blogImage}" class="blog-img" />
//        </a>
//     <div class="padd-2">
//       <a href="#" class="blog-title">
//         <span class="blog-name">` +
//       blog.blogMainTitle +
//       `</span><span class="blog-date">/` +
//       blog.blogDate +
//       `</span>
//       </a>
//       <a href="#">
//         <h3 class="blog-title_title">` +
//       blog.blogTitle +
//       `</h3>
//       </a>
//       <p class="blog-des">` +
//       blog.blogSummary +
//       `</p>

//     </div>

//   </div>`;
//   });
// } else {
//   console.log("no blog found");
//   blogContainer.innerHTML = `<h1 style='color:red'>NO BLOG FOUND </h1>`;
// }

let readmore = document.querySelectorAll(".readmore");
for (let i = 0; i < readmore.length; i++) {
  readmore[i].addEventListener("click", () => {
    let indexClicked = readmore[i].getAttribute("id");
    localStorage.setItem("blogIndex", indexClicked);
  });
}
