// let blogs = JSON.parse(localStorage.getItem("blogs"));

// let index = localStorage.getItem("blogIndex");
// let blogDetailmaintitle = document.querySelector(".blogDetail-main--title");

// blogDetailmaintitle.innerHTML = blogs[index].blogTitle;
const id = window.location.href.split("?id=")[1];
const commentContainer = document.querySelector(".comment-container");

fetch(`https://long-blue-firefly-vest.cyclic.app/api/v1/blog/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("single", data, id);
    const mainTitle = data.data.blogMainTitle;
    const sumary = data.data.blogDescription;
    const title = data.data.blogTitle;
    const sum = data.data.blogSummary;
    const img = data.data.blogImage;
    const authName = data.data.blogAuthor;

    // console.log(comment.map((x) => x));

    // console.log(sumary);
    let blogDetailmaintitle = document.querySelector(".blogDetail-main--title");
    let blogDes = document.querySelector(".blogDescription");
    let blgH = document.querySelector(".detail-h3");
    let sumH = document.querySelector(".detail-two-p");
    let imgDis = document.querySelector(".img-3-1");
    let author = document.querySelector(".author-name");
    // const displayComment = document.querySelector(".commentDisplay");
    blogDetailmaintitle.innerHTML = mainTitle;
    blogDes.innerHTML = sumary;
    blgH.innerHTML = title;
    sumH.innerHTML = sum;
    author.innerHTML = `By: ${authName}`;
    imgDis.innerHTML = `<img src='${img}'/>`;

    const commentBox = document.createElement("div");
    commentBox.classList.add("commentDisplay");
    commentContainer.innerHTML = "";
    data.data.comment.map((com) => {
      commentContainer.innerHTML += `
      <div class='commentDisplay'>
      <p>${com.content}<span></span></p>
      </div>
      `;
    });
  });

const send = document.querySelector(".send");
let token = window.localStorage.getItem("x-auth-token") || "";

const user = JSON.parse(atob(token.split(".")[1]));

send.addEventListener("click", () => {
  const content = document.querySelector("#comment").value;
  const data = { content };
  console.log(data);

  fetch(`https://long-blue-firefly-vest.cyclic.app/api/v1/comment/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (!token) {
        alert("create account or login before commenting");
      } else {
        alert(data.message);
      }
    });
});
// function singleBlogs() {
//   fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog")
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
