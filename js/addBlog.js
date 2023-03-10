const addBlogForm = document.querySelector("#addFormBlog");
let blogImage = document.getElementById("blogImage");
let Image;
document.querySelector("#blogImage").addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem("image", reader.result);
  });

  reader.readAsDataURL(this.files[0]);
});

addBlogForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const blogMainTitle = document.querySelector("#blogMainTitle").value;
  const blogTitle = document.querySelector("#blogTitle").value;
  const blogAuthor = document.querySelector("#blogAuthor").value;
  Image = localStorage.getItem("image");
  const blogSummary = document.querySelector("#blogSummary").value;
  const blogDescription = document.querySelector("#blogDescription").value;
  const publishedDate = document.querySelector(".publishedDate").value;
  blogImage = Image;

  const data = {
    blogMainTitle,
    blogTitle,
    blogAuthor,
    blogImage,
    blogSummary,
    blogDescription,
    publishedDate,
  };
  console.log(data);
  const token = window.localStorage.getItem("x-auth-token");

  console.log(token);
  //interacy with endpoint
  fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify(data),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (data.message == "blog successfully created") {
        alert(data.message);
        location.href = "/blogs.html";
      } else {
        alert(data.message);
      }
    })
    .catch((error) => alert(error));
});
