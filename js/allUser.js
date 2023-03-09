const blogTable = document.querySelector("#blogTable");

fetch("https://long-blue-firefly-vest.cyclic.app/api/v1/blog")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    data.data.forEach((blog) => {
      console.log(blog.blogMainTitle);
    });
  })
  .catch((error) => alert(error));
