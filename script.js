function goToLoginPage() {
  window.location.href = "login.html"; // Replace 'login.html' with the actual URL of your login page
}
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;

    // Example fetch to send the form data to the server
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.includes("successfully logged in")) {
          alert(data); // Show success message
          window.location.href = "/index"; // Redirect to index.html on successful login
        } else {
          alert("Incorrect Username or Password!"); // Show error message
        }
      })
      .catch((error) => console.error("Error:", error));
  });
