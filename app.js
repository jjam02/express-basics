const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.listen(port, () => {
  console.log(`server is running listening on port ${port}`);
});
