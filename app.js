const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/home", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/features", function(req, res) {
  res.render("features");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.get("/demo", function(req, res) {
  res.render("demo");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully");
});
