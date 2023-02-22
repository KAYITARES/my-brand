"use strict";
//loginForm validation
const formLogin = document.getElementById("formLogin");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const login = document.getElementById("loginButton");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  // signIn();
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
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const loginValidInput = () => {
  const email = emailLogin.value;
  const password = passwordLogin.value;
  let isValidated = false;

  if (password != "") {
    setSuccess(passwordLogin);
    isValidated = true;
  } else {
    setError(passwordLogin, "the password field is empty");
    isValidated = false;
  }
  if (email != "") {
    console.log("the email field is not empty");
    setSuccess(emailLogin);
    isValidated = true;
    if (!isValidEmail(email)) {
      setError(emailLogin, "Provide a valid email address");
      isFinite = false;
    } else {
      setSuccess(emailLogin);
      isValidated = true;
    }
  } else {
    console.log("the email field is empty");
    setError(emailLogin, "the email field is empty");
    isValidated = false;
  }
  return isValidated;
};

const users = JSON.parse(localStorage.getItem("users")) || [];
function signIn() {
  const isValid = loginValidInput();
  if (isValid) {
    const targetUser = users.find((user) => user.email == emailLogin.value);
    if (targetUser && targetUser.password == passwordLogin.value) {
      localStorage.setItem("currentUser", JSON.stringify(targetUser));
      window.location.href = "./adminDashboard.html";
    } else if (targetUser && targetUser.password != passwordLogin.value) {
      alert("Invalid email or password!");
    }
  } else {
    alert("fill well your form");
  }
}

login.onclick = signIn;
