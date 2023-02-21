const viewBlogs = document.querySelector(".recent-blog-blog");
const addArticleLinks = document.querySelector(".addArticleLink");
const viewArticleLinks = document.querySelector(".viewArticleLink");
const query = document.querySelector(".recent-queries");
const addArticles = document.querySelector(".addArticles");
const queryLinks = document.querySelector(".queryLink");
const userLinks = document.querySelector(".users");
const user = document.querySelector(".user-dash");
// window.onload = function () {
//   addArticles.remove();
//   query.style.display = "none";
// };
addArticleLinks.addEventListener("click", () => {
  addArticles.style.display = "block";
  viewBlogs.style.display = "none";
  query.style.display = "none";
  user.style.display = "none";
});
viewArticleLinks.addEventListener("click", () => {
  viewBlogs.style.display = "block";
  addArticles.style.display = "none";
  query.style.display = "none";
  user.style.display = "none";
});
queryLinks.addEventListener("click", () => {
  query.style.display = "block";
  viewBlogs.style.display = "none";
  addArticles.style.display = "none";
  user.style.display = "none";
});
userLinks.addEventListener("click", () => {
  user.style.display = "block";
  query.style.display = "none";
  viewBlogs.style.display = "none";
  addArticles.style.display = "none";
});

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//change theme

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
blogs = JSON.parse(localStorage.getItem("blogs")) || [];
blogs.forEach((blog, index) => {
  const tr = document.createElement("tr");
  const trContent = `<td>${index + 1}</td>
                     <td>${blog.blogAuthor}</td>
                     <td>${blog.blogTitle}</td>
                     <td>${blog.blogDate}</td>
                     <td style="color: var(--color-primary)">view</td>
                     <td style="color: var(--color-success)">update</td>
                     <td style="color: var(--color-danger)">Delete</td>
                    `;
  tr.innerHTML = trContent;
  document.querySelector("table .blogu").appendChild(tr);
});
const publisherCount = (document.querySelector(".publisher-count").innerHTML =
  blogs.length);

const recentAuth = document.querySelectorAll(".recentAuth");
const recently = blogs.slice(-3).reverse();

recently.forEach((blog) => {
  recentAuth.innerText = blog.blogAuth;
  console.log(recentAuth);
});

recentAuth.forEach((rec) => {
  console.log(rec);
});
const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
contacts.forEach((query, index) => {
  document.querySelector("table .quer-message").appendChild(tr);
  const tr = document.createElement("tr");
  const trContent = `
  <td>${index + 1}</td>
  <td>${query.queryfullName}</td>
  <td>${query.queryEmail}</td>
  <td>${query.queryMessage}</td>

                  `;
  tr.innerHTML = trContent;
});
const queryCount = document.querySelectorAll(".queryCount");
queryCount.forEach((query) => {
  query.innerHTML = contacts.length;
});
users = JSON.parse(localStorage.getItem("users")) || [];
// console.log(`THE USER ID ${users.forEach()}`);

users.forEach((user, index) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${index + 1}</td>
    <td>${user?.firstName}</td>
    <td>${user?.lastName}</td>
    <td>${user?.email}</td>
    `;

  tr.innerHTML = trContent;
  document.querySelector("table .user-signup").appendChild(tr);
});
