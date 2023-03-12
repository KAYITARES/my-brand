const queryTable = document.querySelector("#queryTable");

// const token = window.localStorage.getItem("x-auth-token") || "";

fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/message/all", {
  method: "GET",
  headers: {
    "x-auth-token": token,
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.data.map((dat) => {
      dat;
    });
    queryTable.innerHTML = "";
    document.querySelector(".queryCount").innerHTML = data.data.length;

    data.data.map((query, index) => {
      queryTable.innerHTML += `
      <tr index='${index}'>

        <td>${index + 1}</td>
        <td>${query?.fullName}</td>

        <td>${query?.email}</td>
        <td>${query?.content}</td>

                       `;
    });
  })
  .catch((error) => console.log(error));
