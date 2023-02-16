const blogName = document.querySelector(".blog-name");
const blogDate = document.querySelector(".blog-date");
const blogTitle = document.querySelector(".blog-title_title");
const blogSummary = document.querySelector(".blog-des");

blogs = JSON.parse(localStorage.getItem("blogs")) || [];
// console.log(`THE USER ID ${users.forEach()}`);

blogs.map((blog) => {
  blogName.innerHTML = blog.blogMainTitle;

  blogDate.innerHTML = blog.blogDate;
  blogTitle.innerHTML = blog.blogTitle;
  blogSummary.innerHTML = blog.blogSummary;
});
