const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const port = 3000;
const mainRoutes = require("./routes");
const cardRoutes = require("./routes/cards");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug"); // Replace 'pug' with your chosen engine
app.set("views", path.join(__dirname, "views"));

app.use(mainRoutes);
app.use("/cards", cardRoutes);
app.use("/static", express.static("public"));

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error", { error: err });
});

app.listen(port, () => {
  console.log(`server is running listening on port ${port}`);
});
