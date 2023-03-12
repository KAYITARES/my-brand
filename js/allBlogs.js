// const blogTable = document.querySelector("#blogTable");
// const token = window.localStorage.getItem("x-auth-token") || "";
// fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog")
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     // console.log("the data is ...." + data.data.map((dat) => dat._id));
//     blogTable.innerHTML = "";
//     document.querySelector(".publisher-count").innerHTML = data.data.length;
//     data.data.map((blog, index) => {
//       blogTable.innerHTML += `
//       <tr index='${index}'>
//       <td>${index + 1}</td>

//                         <td>${blog.blogMainTitle}</td>
//                         <td>${blog.blogAuthor}</td>

//                         <td>${blog.publishedDate}</td>

//                         <td><img src="${
//                           blog.blogImage
//                         }" height='40' width='60'/></td>

//                          <td ><a class="edit-btn" href='#' style="color: var(--color-success)">update</a></td>
//                          <td ><a class="delbtn" href='./adminDashboard.html?id=${
//                            blog._id
//                          }' style="color: var(--color-danger)">Delete</a></td>
//                         </tr>

//                         `;
//       //   console.log(blog._id);
//       let i;
//       deltbtn = document.querySelectorAll(".delbtn");
//       for (i = 0; i < deltbtn.length; i++) {
//         deltbtn[i].onclick = function () {
//           //   alert(_id);
//           //   alert(`https://long-blue-firefly-vest.cyclic.app/api/v1/blog/${id}`);
//           const paramsId = new URLSearchParams(window.location.search);
//           const _id = paramsId.get("id");
//           alert(_id);
//           fetch(`http://localhost:3030/api/v1/blog/${_id}`, {
//             method: "DELETE",
//             headers: {
//               "x-auth-token": token,
//             },
//           })
//             .then((resp) => {
//               resp.json();
//               console.log("this is the response" + resp);
//             })
//             .then((data) => {
//               alert(data.message);
//             })
//             .catch((error) => console.log(error));
//         };
//       }
//     });
//   })
//   .catch((error) => console.log(error));
const paramsId = new URLSearchParams(window.location.search);
const _id = paramsId.get("id");

const blogTable = document.querySelector("#blogTable");
const token = window.localStorage.getItem("x-auth-token") || "";
blogs = JSON.parse(localStorage.getItem("blogs")) || [];

let Images;
document.querySelector("#blogImages").addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem("image", reader.result);
  });

  reader.readAsDataURL(this.files[0]);
});

fetch(`https://long-blue-firefly-vest.cyclic.app/api/v1/blog/${_id}`, {
  method: "DELETE",
  headers: {
    "x-auth-token": token,
  },
})
  .then((resp) => {
    resp.json();
    // console.log("this is the response" + resp);
  })
  .then((data) => {
    alert(data.message);
  })
  .catch((error) => console.log(error));

fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    blogTable.innerHTML = "";
    document.querySelector(".publisher-count").innerHTML = data.data.length;
    data.data.map((blog, index) => {
      blogTable.innerHTML += `
      <tr index='${index}'>
      <td>${index + 1}</td>
      
    
                        <td>${blog.blogMainTitle}</td>
                        <td>${blog.blogAuthor}</td>
                        <td>${blog.blogTitle}</td>
                        
                        <td>${blog.blogSummary}</td>
                        
                        <td>${blog.publishedDate}</td>
                        <td>${blog.blogDescription}</td>
                        <td><img src="${
                          blog.blogImage
                        }" height='40' width='80'/></td>
                        
                         <td ><button class="edit-btn" id=${
                           blog._id
                         } style="color: var(--color-success)">update</button></td>
                         <td ><a class="delbtn" href='./adminDashboard.html?id=${
                           blog._id
                         }' style="color: var(--color-danger)">Delete</a></td>
                        </tr>

                        `;
    });

    deltbtn = document.querySelectorAll(".delbtn");
    for (i = 0; i < deltbtn.length; i++) {
      deltbtn[i].onclick = function () {
        //   alert(_id);
        //   alert(`https://long-blue-firefly-vest.cyclic.app/api/v1/blog/${id}`);

        alert(_id);
      };
    }
    let allEdit = document.querySelectorAll(".edit-btn");
    console.log(allEdit[0]);
    for (let i = 0; i < allEdit.length; i++) {
      allEdit[i].onclick = function () {
        console.log("all edit ", allEdit[i]);
        let id = allEdit[i].getAttribute("id");
        console.log(id);
        localStorage.setItem("id", id);
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

        publishedDate.value = blogDat;
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

            publishedDate: publishedDate.value,
            blogDescription: blogDescriptions.value,
            blogImage: blogImages == "" ? blogim : Images,
          };
          localStorage.setItem("blogs", JSON.stringify(blogs));
          // let author = document.getElementById("blogAuthors");

          let editObject = {
            blogMainTitle: blogMainTitles.value,
            blogAuthor: blogAuthors.value,
            blogTitle: blogTitles.value,
            blogSummary: blogSummarys.value,

            publishedDate: publishedDate.value,
            blogDescription: blogDescriptions.value,
            blogImage: blogImages == "" ? blogim : Images,
          };

          console.log(editObject);
          let _id = localStorage.getItem("id");
          console.log(_id);
          fetch(
            `https://long-blue-firefly-vest.cyclic.app/api/v1/blog/${_id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": token,
              },
              body: JSON.stringify(editObject),
            }
          )
            .then((resp) => {
              return resp.json();
            })
            .then((data) => {
              alert(data.message);
            })
            .catch((error) => alert(error));
          // alert("blog successfuly updated!");
        };
      };
    }
  })
  .catch((error) => console.log(error));

function updateBlog() {
  const closeModal = document.querySelector(".close-btn-update");
  const modal = document.querySelector(".modal-update-blogs");
  modal.style.display = "block";

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
