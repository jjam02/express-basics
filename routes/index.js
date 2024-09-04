const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.cookies.username) {
    res.render("index", { name: req.cookies.username });
  } else {
    res.render("hello");
  }

  console.log("INDEX PAGE");
});

router.get("/hello", (req, res) => {
  res.render("hello", { name: req.cookies.username });
  console.log("HELLO PAGE");
});

router.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/hello");
});

module.exports = router;
