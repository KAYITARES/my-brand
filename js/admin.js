const viewBlogs = document.querySelector(".recent-blog-blog");
const addArticleLinks = document.querySelector(".addArticleLink");
const viewArticleLinks = document.querySelector(".viewArticleLink");
const query = document.querySelector(".recent-queries");
const addArticles = document.querySelector(".addArticles");
const queryLinks = document.querySelector(".queryLink");
window.onload = function () {
  addArticles.style.display = "none";
  query.style.display = "none";
};
addArticleLinks.addEventListener("click", () => {
  addArticles.style.display = "block";
  viewBlogs.style.display = "none";
  query.style.display = "none";
});
viewArticleLinks.addEventListener("click", () => {
  viewBlogs.style.display = "block";
  addArticles.style.display = "none";
  query.style.display = "none";
});
queryLinks.addEventListener("click", () => {
  query.style.display = "block";
  viewBlogs.style.display = "none";
  addArticles.style.display = "none";
});
