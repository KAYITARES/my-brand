const form = document.getElementById("formSignUp");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fullName = document.getElementById("name");
const passwordTwo = document.getElementById("passwordTwo");
const submit = document.getElementById("signUp");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // validateInputs();
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
  let isValidated = false;
  if (fullNameValue != "") {
    setSuccess(fullName);
    isValidated = true;
  } else {
    setError(fullName, "fullName is required");
    isValidated = false;
  }
  if (emailValue != "") {
    setSuccess(email);
    isValidated = true;
    if (!isValidEmail(emailValue)) {
      setError(email, "Provide a valid email address");
      isValidated = false;
    } else {
      setSuccess(email);
      isValidated = true;
    }
  } else {
    setError(email, "email is required");
    isValidated = false;
  }

  if (passwordValue != "") {
    setSuccess(password);
    isValidated = true;
    if (passwordValue.length < 8) {
      setError(password, "Password must be at least 8 characters");
      isValidated = false;
    } else {
      setSuccess(password);
      isValidated = true;
    }
  } else {
    setError(password, "Passwprd is required");
  }

  if (passwordTwoValue != "") {
    setSuccess(passwordTwo);
    isValidated = true;
    if (passwordValue !== passwordTwoValue) {
      setError(passwordTwo, "Password doesn't match");
      isValidated = false;
    } else {
      setSuccess(passwordTwo);
      isValidated = true;
    }
  } else {
    setError(passwordTwo, "Please confirm your password");
    isValidated = false;
  }

  return isValidated;
};
const saveUser = () => {
  const isValid = validateInputs();
  if (isValid) {
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
      localStorage.setItem("users", JSON.stringify(users));
      alert("user successfully created");
    }
  } else {
    alert("fill well the form");
  }
};
submit.onclick = saveUser;
