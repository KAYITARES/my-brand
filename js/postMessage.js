const contactForm = document.querySelector("#contactForm");
const sendMsg = document.querySelector("#contactButton");

sendMsg.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const name = document.getElementById("name").value;
  console.log("data", email, message, name);
  const data = { fullName: name, email, content: message };
  //   console.log(data);
  //interacy with endpoint
  fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/message", {
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
      console.log("message", data);
      alert(data?.message);
    })
    .catch((error) => alert(error));
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("contact form");
  //get data from user
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const name = document.getElementById("name").value;

  const data = { fullName: name, email, content: message };
  //   console.log(data);
  //interacy with endpoint
  fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/message", {
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
