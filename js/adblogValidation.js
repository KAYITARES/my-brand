const form = document.getElementById("addFormBlog");
// const blogId = document.querySelector("#blogId");
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
});
const setSuccess = (element) => {
  const inputControl = element.parentElement;

  console.log("my element ..." + element.parentElement);
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
  // const idValue = blogId.value;
  const blogTitleValue = blogTitle.value;
  const blogMainTitleValue = blogMainTitle.value;
  const blogAuthorValue = blogAuthor.value;
  const blogImageValue = blogImage.value;
  const blogDateValue = blogDate.value;
  const blogSummaryValue = blogSummary.value;
  const blogDescriptionValue = blogDescription.value;
  let isValidated = false;
  // if (idValue != "") {
  //   setSuccess(blogId);
  //   isValidated = true;
  // } else {
  //   setError(blogId, "ID is requires");
  //   isValidated = false;
  // }
  if (blogTitleValue != "") {
    console.log("blog title is not empty");
    setSuccess(blogTitle);

    isValidated = true;
  } else {
    console.log("blog title is empty");
    setError(blogTitle, "blog Title is required");
    isValidated = false;
  }
  if (blogMainTitleValue != "") {
    console.log("blog main title is not empty");
    setSuccess(blogMainTitle);

    isValidated = true;
  } else {
    console.log("blog title is empty");
    setError(blogMainTitle, "blog Main Title is required");
    isValidated = false;
  }
  if (blogAuthorValue != "") {
    console.log("blog Author is not empty");
    setSuccess(blogAuthor);

    isValidated = true;
  } else {
    console.log("blog title is empty");
    setError(blogAuthor, "blog Author is required");
    isValidated = false;
  }
  if (blogDateValue != "") {
    console.log("blog Date is not empty");
    setSuccess(blogDate);

    isValidated = true;
  } else {
    console.log("blog Date is empty");
    setError(blogDate, "blog Date is required");
    isValidated = false;
  }
  if (blogSummaryValue != "") {
    console.log("blog Summary Value is not empty");
    setSuccess(blogSummary);

    isValidated = true;
  } else {
    console.log("blog Summary is empty");
    setError(blogSummary, "blog Summary is required");
    isValidated = false;
  }
  if (blogDescriptionValue != "") {
    console.log("blogDescription Value is not empty");
    setSuccess(blogDescription);

    isValidated = true;
  } else {
    console.log("blogDescription is empty");
    setError(blogDescription, "blog Description is required");
    isValidated = false;
  }

  if (blogImageValue != "") {
    console.log("blog Image is not empty");
    // setSuccess(blogImage);

    // isValidated = true;
    let Extension = blogImageValue
      .substring(blogImageValue.lastIndexOf(".") + 1)
      .toLowerCase();
    if (
      Extension == "gif" ||
      Extension == "png" ||
      Extension == "bmp" ||
      Extension == "jpeg" ||
      Extension == "jpg" ||
      Extension == "webp"
    ) {
      setSuccess(blogImage);

      isValidated = true;
    } else {
      setError(
        blogImage,
        "Photo only allows file types of WEBP, GIF, PNG, JPG, JPEG and BMP."
      );

      isValidated = false;
    }
  } else {
    console.log("blog title is empty");
    setError(blogImage, "blog Image is required");
    isValidated = false;
  }

  if (isValidated) {
    console.log(`blog title has no error ${blogTitle}`);
    // saveBlogs();
  }

  return isValidated;
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
  const isValid = validateInputs();
  if (isValid) {
    Image = localStorage.getItem("image");
    let blog = {};
    // blog.blogId = blogId.value;

    blog.blogTitle = blogTitle.value;
    blog.blogMainTitle = blogMainTitle.value;
    blog.blogAuthor = blogAuthor.value;
    blog.blogDate = blogDate.value;

    blog.blogSummary = blogSummary.value;
    blog.blogDescription = blogDescription.value;
    blog.blogImage = Image;
    blogs.push(blog);

    localStorage.setItem("blogs", JSON.stringify(blogs));
    alert("Blogs Successfuly Created!");
  } else {
    alert("fill well your form");
  }
}

blog.onclick = function (e) {
  e.preventDefault();
  saveBlogs();
  form.reset("");
};
