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

// This is an event listener for the signup button
$signupBtn.addEventListener("click", (e) => {
  // we prevent the default behaviour of the form
  e.preventDefault();
  // We set the alert box to be empty
  $alert.textContent = "";
  // We get the values of the username and password fields
  const username = $username.value;
  const password = $password.value.trim();
  // We check if the username and password are empty
  if (!username || !password) {
    // If they are, we call the alertDisplay function
    // We pass it the message "Please enter a username and password"
    alertDisplay("Please enter a username and password");
  }

  // We create a user object
  const user = {
    username,
    password,
  };
  // We call the signUpUser function
  // We pass it the user object
  signUpUser(user);
});
