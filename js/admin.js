const viewBlogs = document.querySelector(".recent-blog-blog");
const addArticleLinks = document.querySelector(".addArticleLink");
const viewArticleLinks = document.querySelector(".viewArticleLink");
const query = document.querySelector(".recent-queries");
const addArticles = document.querySelector(".addArticles");
const queryLinks = document.querySelector(".queryLink");
const userLinks = document.querySelector(".users");
const user = document.querySelector(".user-dash");
const blogIds = document.querySelector("#blogIds");
const blogIdo = document.getAnimations("blogIdo");
const blogTitles = document.getElementById("blogTitles");
const blogAuthors = document.getElementById("blogAuthors");
const blogImages = document.getElementById("blogImages");
const blogDates = document.getElementById("blogDates");
const blogSummarys = document.getElementById("blogSummarys");
const blogDescriptions = document.getElementById("blogDescriptions");
const blogMainTitles = document.getElementById("blogMainTitles");
const btnUpdate = document.getElementById("blog-updates");
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

// blogs.forEach((blog, index) => {
//   const tr = document.createElement("tr");
//   const trContent = `<td>${index + 1}</td>
//                      <td>${blog.blogAuthor}</td>

//                      <td>${blog.blogTitle}</td>
//                      <td>${blog.blogId}</td>
//                      <td>${blog.blogDate}</td>
//                      <td ><a href='#' onclick='viewBlog()' style="color: var(--color-primary)">view</a></td>
//                      <td ><a href='#' onclick='updateBlog()' style="color: var(--color-success)">update</a></td>
//                      <td ><a class="del-btn" href='#'  style="color: var(--color-danger)">Delete</a></td>
//                     `;
//   tr.innerHTML = trContent;
//   document.querySelector("table .blogu").appendChild(tr);
//   let i;
//   let allDelBtn = document.querySelector(".del-btn");
//   allDelBtn.onclick = alert("hahiye");
//   for (i = 0; i < allDelBtn.length; i++) {
//     allDelBtn[i].onclick = function () {
//       let tr = this.parentElement;
//       console.log(tr);
//     };
//   }
// });
let Images;
document.querySelector("#blogImages").addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem("image", reader.result);
  });

  reader.readAsDataURL(this.files[0]);
});

blogs = JSON.parse(localStorage.getItem("blogs")) || [];
let tableData = document.querySelector(".blogu");
const getDataFromLocal = () => {
  tableData.innerHTML = "";
  blogs.forEach((blog, index) => {
    tableData.innerHTML += `
    <tr index='${index}'>
    <td>${index + 1}</td>
    
  
                      <td>${blog.blogMainTitle}</td>
                      <td>${blog.blogAuthor}</td>
                      <td>${blog.blogTitle}</td>
                      
                      <td>${blog.blogSummary}</td>
                      
                      <td>${blog.blogDate}</td>
                      <td>${blog.blogDescription}</td>
                      <td><img src="${
                        blog.blogImage
                      }" height='40' width='80'/></td>
                      
                       <td ><a class="edit-btn" href='#' style="color: var(--color-success)">update</a></td>
                       <td ><a class="del-btn" href='#'  style="color: var(--color-danger)">Delete</a></td>
                      </tr>
                       `;
  });
  let i;
  let allDelBtn = document.querySelectorAll(".del-btn");
  for (i = 0; i < allDelBtn.length; i++) {
    allDelBtn[i].onclick = function () {
      let tr = this.parentElement.parentElement;
      let id = tr.getAttribute("index");
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this blog!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          blogs.splice(id, 1);
          localStorage.setItem("blogs", JSON.stringify(blogs));
          tr.remove();
          swal("Poof! Your blog has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your blog is safe!");
        }
      });
    };
  }

  let allEdit = document.querySelectorAll(".edit-btn");
  for (i = 0; i < allEdit.length; i++) {
    allEdit[i].onclick = function () {
      let tr = this.parentElement.parentElement;
      let td = tr.getElementsByTagName("TD");
      let index = tr.getAttribute("index");
      // let blogid = td[1].innerHTML;
      let blogMainTitl = td[1].innerHTML;

      let blogAuth = td[2].innerHTML;
      let blogTitl = td[3].innerHTML;

      let blogSum = td[4].innerHTML;

      let blogDat = td[5].innerHTML;
      let blogDes = td[6].innerHTML;
      let imTag = td[7].getElementsByTagName("IMG");
      let blogim = imTag[0].src;

      updateBlog();

      blogMainTitles.value = blogMainTitl;
      blogAuthors.value = blogAuth;
      blogTitles.value = blogTitl;
      blogSummarys.value = blogSum;

      blogDates.value = blogDat;
      blogDescriptions.value = blogDes;
      blogImages.src = blogim;

      btnUpdate.onclick = function (e) {
        Images = localStorage.getItem("image");
        e.preventDefault();
        blogs[index] = {
          blogMainTitle: blogMainTitles.value,
          blogAuthor: blogAuthors.value,
          blogTitle: blogTitles.value,
          blogSummary: blogSummarys.value,

          blogDate: blogDates.value,
          blogDescription: blogDescriptions.value,
          blogImage: blogImages == "" ? blogim : Images,
        };
        localStorage.setItem("blogs", JSON.stringify(blogs));
        alert("blog successfuly updated!");
      };
    };
  }
};
getDataFromLocal();

function viewBlog() {
  const modal = document.querySelector(".modal-view-blogs");
  const closeModal = document.querySelector(".close-blog");
  modal.style.display = "block";
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function updateBlog() {
  const closeModal = document.querySelector(".close-btn-update");
  const modal = document.querySelector(".modal-update-blogs");
  modal.style.display = "block";

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

const publisherCount = (document.querySelector(".publisher-count").innerHTML =
  blogs.length);

const recentAuth = document.querySelectorAll(".recentAuth");
const recently = blogs.slice(-3).reverse();
const recentlyUpdateContainer = document.querySelector(".updates");
recently.forEach((blog) => {
  const updateBox = document.createElement("div");
  updateBox.classList.add("update");
  recentlyUpdateContainer.innerHTML +=
    `
  <div class="update">
              <div class="profile-photo">
                <img src="${blog.blogImage}" alt="" class="prof-img">
              </div>
              <div class="message">
                <p>
                  <b class="recentAuth">` +
    blog.blogAuthor +
    `</b> published 
                </p>
                <small class="text-muted">` +
    blog.blogDate +
    `</small>
              </div>
            </div>
  `;
  console.log("the recent block is " + blog.blogAuthor);
});

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
contacts.forEach((query, index) => {
  const tr = document.createElement("tr");
  const trContent = `
  <td>${index + 1}</td>
  <td>${query.queryfullName}</td>
  <td>${query.queryEmail}</td>
  <td>${query.queryMessage}</td>

                  `;
  tr.innerHTML = trContent;
  document.querySelector("table .quer-message").appendChild(tr);
});
const queryCount = document.querySelectorAll(".queryCount");
queryCount.forEach((query) => {
  query.innerHTML = contacts.length;
});
const users = JSON.parse(localStorage.getItem("users")) || [];
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
const usersCount = (document.querySelector(".usersCount").innerHTML =
  users.length);
