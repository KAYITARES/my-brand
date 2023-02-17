const blogName = document.querySelector(".blog-name");
const blogDate = document.querySelector(".blog-date");
const blogTitle = document.querySelector(".blog-title_title");
const blogSummary = document.querySelector(".blog-des");
const blogContainer = document.querySelector(".blogs-cont");
blogs = JSON.parse(localStorage.getItem("blogs")) || [];
// console.log(`THE USER ID ${users.forEach()}`);

blogs.forEach((blog) => {
  blogContainer.innerHTML +=
    `<div class="blogz-col-1">
  <a href="#">
 
  </a>
  <div class="padd-2">
    <a href="#" class="blog-title">
      <span class="blog-name">` +
    blog.blogMainTitle +
    `</span><span class="blog-date">` +
    blog.blogDate +
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
});
