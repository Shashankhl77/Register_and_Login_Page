document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("regUsername").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;
      const confirmPassword =
        document.getElementById("regConfirmPassword").value;

      if (
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        alert("All fields are required.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      alert("Registration successful!");
      location.href = "Login.html";
      // document.getElementById("registrationForm").reset();
    });

  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;

      if (username === "" || password === "") {
        alert("Both fields are required.");
        return;
      }
      alert("Login successful!");
      document.getElementById("loginForm").reset();
    });
});
