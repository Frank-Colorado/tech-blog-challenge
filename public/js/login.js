const $loginForm = document.getElementById("loginForm");
const $username = document.getElementById("username");
const $password = document.getElementById("password");
const $loginBtn = document.getElementById("loginBtn");
const $alert = document.getElementById("alert");

// This is a function called alertDisplay
// It has 1 parameter: 'message'
// It will display the message in the alert box
const alertDisplay = (message) => {
  $alert.textContent = message;
};

// This is an event listener for the login button
$loginBtn.addEventListener("click", (e) => {
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
    // We return false to stop the function
    return false;
  }
  // We create a new object called 'user'
  // It has 2 properties: username and password
  const user = {
    username,
    password,
  };
  // We call the sendLogin function
  // We pass it the user object
  sendLogin(user);
});
