const formSignUp = document.querySelector("#formSignUp");
formSignUp.addEventListener("submit", (event) => {
  event.preventDefault();

  //get data from user
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fullName = document.getElementById("name").value;
  const repeatPassword = document.getElementById("passwordTwo").value;
  const data = { fullName, email, password, repeatPassword };
  console.log(data);
  //interacy with endpoint
  fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      alert(data.message);
    })
    .catch((error) => alert(error));
});
