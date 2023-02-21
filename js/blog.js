// const blogName = document.querySelector(".blog-name");
// const blogDate = document.querySelector(".blog-date");
// const blogTitle = document.querySelector(".blog-title_title");
// const blogSummary = document.querySelector(".blog-des");

blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// console.log(`THE USER ID ${users.forEach()}`);

const blogContainer = document.querySelector(".blogs-cont");
// blogContainer.innerHTML = "";
console.log(blogs.length);
if (blogs.length > 0) {
  blogs.forEach((blog) => {
    const blogBox = document.createElement("div");
    blogBox.classList.add("blogz-col-1");
    blogContainer.innerHTML +=
      `<div class="blogz-col-1">
      <a href="#">
      <img src="${blog.blogImage}" class="blog-img" />
       </a>
    <div class="padd-2">
      <a href="#" class="blog-title">
        <span class="blog-name">` +
      blog.blogMainTitle +
      `</span><span class="blog-date">/` +
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
    // blogContainer.append(blogBox);
  });
} else {
  console.log("no blog found");
  blogContainer.innerHTML = `<h1 style='color:red'>NO BLOG FOUND </h1>`;
}
