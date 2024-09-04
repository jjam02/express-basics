const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const port = 3000;
const routes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug"); // Replace 'pug' with your chosen engine
app.set("views", path.join(__dirname, "views"));

app.use(routes);

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
