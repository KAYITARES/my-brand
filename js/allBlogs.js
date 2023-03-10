const blogTable = document.querySelector("#blogTable");

fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log("the data is ...." + data.data.map((dat) => dat._id));
    tableData.innerHTML = "";
    document.querySelector(".publisher-count").innerHTML = data.data.length;
    data.data.map((blog, index) => {
      tableData.innerHTML += `
      <tr index='${index}'>
      <td>${index + 1}</td>
      
    
                        <td>${blog.blogMainTitle}</td>
                        <td>${blog.blogAuthor}</td>
                        <td>${blog.blogTitle}</td>
                        
                        <td>${blog.blogSummary}</td>
                        
                        <td>${blog.blogDate}</td>
                        <td>${blog.blogDescription}</td>
                        <td><img src="${
                          blog.blogImage
                        }" height='40' width='80'/></td>
                        
                         <td ><a class="edit-btn" href='#' style="color: var(--color-success)">update</a></td>
                         <td ><a class="delbtn" href='#'  style="color: var(--color-danger)">Delete</a></td>
                        </tr>
       
       
                        `;

      console.log("............." + blog.blogMainTitle.length);
      const deleteButton = document.querySelector(".delbtn");
      deleteButton.addEventListener("click", () => {
        console.log(blog._id);

        deleteBlog(blog._id);
      });
    });
  })
  .catch((error) => alert(error));

const deleteBlog = () => {
  fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog", {
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data) {
        data.splice(_id, 1);

        tr.remove();
        swal("Poof! Your blog has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your blog is safe!");
      }
    });
};
