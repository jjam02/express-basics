const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "pug"); // Replace 'pug' with your chosen engine
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
  console.log("INDEX PAGE");
});

app.get("/cards", (req, res) => {
  res.render("card", { prompt: "chungus" });
});

app.get("/hello", (req, res) => {
  res.render("hello");
  console.log("HELLO PAGE");
});

app.post("/hello", (req, res) => {
  console.log(req.body.username);
  res.render("hello", { name: req.body.username });
});

app.listen(port, () => {
  console.log(`server is running listening on port ${port}`);
});
