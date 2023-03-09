const formLogin = document.querySelector("#formLogin");
formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;
  const data = { email, password };
  console.log(data);
  fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.message === "Invalid email or Passowrd") {
        alert(data.message);
        // alert(data.message)
      } else {
        localStorage.setItem("x-auth-token", data.data.token);
        let token = data.data.token;
        const verifyToken = JSON.parse(atob(token.split(".")[1]));
        if (verifyToken.role == "admin") {
          location.href = "/adminDashboard.html";
        } else {
          location.href = "/blogs.html";
        }
      }
      //   alert(data.message);
    })
    .catch((error) => alert(error));
});
