const queryTable = document.querySelector("#queryTable");

const token = window.localStorage.getItem("x-auth-token");

fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/message/all", {
  headers: {
    "x-auth-token": token,
  },
})
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    // console.log("the message is " + data?.data);
    queryTable.innerHTML = "";
    document.querySelector(".queryCount").innerHTML = data.data.length;
    // document.querySelector(".publisher-count").innerHTML = data.data.length;
    data.data.map((query, index) => {
      queryTable.innerHTML += `
      <tr index='${index}'>
      
        <td>${index + 1}</td>
        <td>${query.fullName}</td>
        <td>${query.email}</td>
        <td>${query.message}</td>
      
                        `;
    });
  })
  .catch((error) => alert(error));
