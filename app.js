const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug"); // Replace 'pug' with your chosen engine
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  if (req.cookies.username) {
    res.render("index", { name: req.cookies.username });
  } else {
    res.render("hello");
  }

  console.log("INDEX PAGE");
});

app.get("/cards", (req, res) => {
  res.render("card", { prompt: "test card" });
});

app.get("/hello", (req, res) => {
  res.render("hello", { name: req.cookies.username });
  console.log("HELLO PAGE");
});

app.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`server is running listening on port ${port}`);
});
