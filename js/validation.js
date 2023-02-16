const form = document.getElementById("formSignUp");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fullName = document.getElementById("name");
const passwordTwo = document.getElementById("passwordTwo");
const submit = document.getElementById("signUp");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  // saveUser();
});

users = JSON.parse(localStorage.getItem("users")) || [];

// const verifyData = () => {
//   const targetUser = users.find((user) => user.email == email.value);
//   if (targetUser) {
//     alert("User already exist");
//   } else if (!targetUser) {
//     saveUser();
//     alert("user successfuly created");
//   }
// };

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
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validateInputs = () => {
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordTwoValue = passwordTwo.value;
  if (fullNameValue == "") {
    setError(fullName, "fullName is required");
  } else {
    setSuccess(fullName);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue == "") {
    setError(password, "Passwprd is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8character");
  } else {
    setSuccess(password);
  }
  if (passwordTwoValue == "") {
    setError(passwordTwo, "Please confirm your password");
  } else if (passwordValue !== passwordTwoValue) {
    setError(password, "Password doesn't match");
  } else {
    setSuccess(passwordTwo);
  }
};
const saveUser = () => {
  let user = {};
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordTwoValue = passwordTwo.value;
  user.firstName = fullNameValue.split(" ")[0];
  user.lastName = fullNameValue.split(" ")[1];
  user.password = passwordValue;
  user.confirmPassword = passwordTwoValue;
  if (users.find((user) => user.email == emailValue)) {
    alert("user already exist");
  } else {
    user.email = emailValue;
    users.push(user);
    alert("user successfully created");
  }

  localStorage.setItem("users", JSON.stringify(users));
};
submit.onclick = saveUser;
