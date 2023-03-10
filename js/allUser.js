const userTable = document.querySelector("#userTable");

fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/user/all")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log("the data is ...." + data.data.map((dat) => dat._id));
    userTable.innerHTML = "";
    document.querySelector(".usersCount").innerHTML = data.data.length;
    // document.querySelector(".publisher-count").innerHTML = data.data.length;
    data.data.map((user, index) => {
      userTable.innerHTML += `
      <tr index='${index}'>
      <td>${index + 1}</td>
      
    
                        <td>${user.fullName}</td>
                        <td>${user.email}</td>
                        <td>${user.role}</td>
                        
                       
                        </tr>
       
       
                        `;
    });
  })
  .catch((error) => alert(error));
