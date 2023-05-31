const $signupForm = document.getElementById("signupForm");
const $username = document.getElementById("username");
const $password = document.getElementById("password");
const $signupBtn = document.getElementById("signupBtn");
const $alert = document.getElementById("alert");

// This is a function called alertDisplay
// It has 1 parameter: 'message'
// It will display the message in the alert box
const alertDisplay = (message) => {
  $alert.textContent = message;
};
