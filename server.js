const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (assuming your HTML, CSS, images are in a folder named 'public')
app.use(express.static("public"));

// Route to Homepage
app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Route to Login Page
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

// Handle login form submission
app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (username === "Uday" && password === "1234") {
    res.send(`Hello ${username}, you have successfully logged in!`);
  } else {
    res.status(401).send("Incorrect Username or Password!");
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
