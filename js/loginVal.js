"use strict";
//loginForm validation
const formLogin = document.getElementById("formLogin");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  loginValidInput();
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
  if (email === "") {
    setError(emailLogin, "Email is required");
  } else if (!isValidEmail(email)) {
    setError(emailLogin, "Provide a valid email address");
  } else {
    setSuccess(emailLogin);
  }

  if (password == "") {
    setError(passwordLogin, "Passwprd is required");
  }
};
