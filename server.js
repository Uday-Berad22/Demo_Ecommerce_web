const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//to set the view engine
const template_path = path.join(__dirname, "/templates/views");
// app.set("view engine", "hbs");
app.set("view engine", "hbs");
app.set("views", template_path);
// hbs.registerPartials(partials_path);

// Serve static files (assuming your HTML, CSS, images are in a folder named 'public')

// Route to Homepage
app.use(express.static("public"));

//templete engine root
app.get("/", (req, res) => {
  console.log("Heyy there");
  res.render("index", {
    Login: "Login",
  });
});

app.get("/loginIndex", (req, res) => {
  res.render("index", {
    Login: "Uday",
  });
});
app.get("/index", (req, res) => {
  res.render("index", {
    Login: "Login",
  });
});
app.get("/successlogin", (req, res) => {
  res.render("index", {
    Login: "Uday",
  });
});
// Route to Login Page
app.get("/login", (req, res) => {
  console.log(__dirname + "/public/login.html");
  res.sendFile(__dirname + "/public/login.html");
});

// Handle login form submission
app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log("Username: " + username);
  console.log("Password: " + password);
  if (username === "Uday" && password === "1234") {
    res.sendFile(__dirname + "/public/successLogin.html");
  } else {
    res.sendFile(__dirname + "/public/incorrectLogin.html");
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
