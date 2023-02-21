const form = document.getElementById("addFormBlog");
const blogTitle = document.getElementById("blogTitle");
const blogAuthor = document.getElementById("blogAuthor");
const blogImage = document.getElementById("blogImage");
const blogDate = document.getElementById("blogDate");
const blogSummary = document.getElementById("blogSummary");
const blogDescription = document.getElementById("blogDescription");
const blogMainTitle = document.getElementById("blogMainTitle");
const blog = document.getElementById("blog");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplayMessage = inputControl.querySelector(".error");
  errorDisplayMessage.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplayMessage = inputControl.querySelector(".error");
  errorDisplayMessage.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const validateInputs = () => {
  const blogTitleValue = blogTitle.value;
  const blogMainTitleValue = blogMainTitle.value;
  const blogAuthorValue = blogAuthor.value;
  const blogImageValue = blogImage.value;
  const blogDateValue = blogDate.value;
  const blogSummaryValue = blogSummary.value;
  const blogDescriptionValue = blogDescription.value;
  if (blogTitleValue == "") {
    setError(blogTitle, "blog Title is required");
  } else {
    setSuccess(blogTitle);
  }
  if (blogMainTitleValue == "") {
    setError(blogMainTitle, "blog Main Title is required");
  } else {
    setSuccess(blogMainTitle);
  }
  if (blogAuthorValue == "") {
    setError(blogAuthor, "(blog Author is required");
  } else {
    setSuccess(blogAuthor);
  }
  if (blogImageValue == "") {
    setError(blogImage, "(blog Image is required");
  } else {
    let Extension = blogImageValue
      .substring(blogImageValue.lastIndexOf(".") + 1)
      .toLowerCase();
    if (
      Extension == "gif" ||
      Extension == "png" ||
      Extension == "bmp" ||
      Extension == "jpeg" ||
      Extension == "jpg"
    ) {
      setSuccess(blogImage);
    } else {
      alert("Photo only allows file types of GIF, PNG, JPG, JPEG and BMP. ");
    }
  }

  if (blogDateValue == "") {
    setError(blogDate, "blog Date is required");
  } else {
    setSuccess(blogDate);
  }
  if (blogSummaryValue == "") {
    setError(blogSummary, "blog Short description is required");
  } else {
    setSuccess(blogSummary);
  }
  if (blogDescriptionValue == "") {
    setError(blogDescription, "blog Description is required");
  } else {
    setSuccess(blogDescription);
  }
};
let Image;
document.querySelector("#blogImage").addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem("image", reader.result);
  });

  reader.readAsDataURL(this.files[0]);
});

const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function saveBlogs() {
  Image = localStorage.getItem("image");
  let blog = {};
  blog.blogImage = Image;
  blog.blogTitle = blogTitle.value;
  blog.blogMainTitle = blogMainTitle.value;
  blog.blogAuthor = blogAuthor.value;
  blog.blogDate = blogDate.value;
  // blog.blogImage = blogImage.value;
  // console.log(this.files);

  blog.blogSummary = blogSummary.value;
  blog.blogDescription = blogDescription.value;

  blogs.push(blog);
  alert("Blogs Successfuly Created!");
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

blog.onclick = saveBlogs;
