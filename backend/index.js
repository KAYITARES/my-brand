const express = require("express");

const hostname = "127.0.0.1";

const port = 3030;

const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    message: "welcome to our home  page",
  });
});

app.all("*", (req, res) => {
  res.status(404);
  res.json({
    message: "page not found",
  });
});
app.listen(port, () => {
  console.log(`server running on http://${hostname}:${port}`);
});
