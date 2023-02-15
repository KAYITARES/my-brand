const form = document.getElementById("addFormBlog");
const blogTitle = document.getElementById("blogTitle");
const blogAuthor = document.getElementById("blogAuthor");
const blogImage = document.getElementById("blogImage");
const blogDate = document.getElementById("blogDate");
const blogSummary = document.getElementById("blogSummary");
const blogDescription = document.getElementById("blogDescription");

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

function fileValidation() {
  var fileInput = document.getElementById("file");

  var filePath = fileInput.value;
  if (filePath == "") {
    alert("fill blogImage");
  }
  // Allowing file type
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  if (!allowedExtensions.exec(filePath)) {
    alert("Invalid file type");
    fileInput.value = "";
    return false;
  } else {
    // Image preview
    if (fileInput.files && fileInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("imagePreview").innerHTML =
          '<img src="' + e.target.result + '"/>';
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}

const validateInputs = () => {
  const blogTitleValue = blogTitle.value;
  const blogAuthorValue = blogAuthor.value;

  const blogDateValue = blogDate.value;
  const blogSummaryValue = blogSummary.value;
  const blogDescriptionValue = blogDescription.value;
  if (blogTitleValue == "") {
    setError(blogTitle, "blogTitle is required");
  } else {
    setSuccess(blogTitle);
  }
  if (blogAuthorValue == "") {
    setError(blogAuthor, "(blogAuthor is required");
  } else {
    setSuccess(blogAuthor);
  }

  if (blogDateValue == "") {
    setError(blogDate, "blogDate is required");
  } else {
    setSuccess(blogDate);
  }
  if (blogSummaryValue == "") {
    setError(blogSummary, "blogSummary is required");
  } else {
    setSuccess(blogSummary);
  }
  if (blogDescriptionValue == "") {
    setError(blogDescription, "blogDescription is required");
  } else {
    setSuccess(blogDescription);
  }
};
