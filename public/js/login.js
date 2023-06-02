const $loginForm = document.getElementById("loginForm");
const $username = document.getElementById("username");
const $password = document.getElementById("password");
const $loginBtn = document.getElementById("loginBtn");

// This is a function called sendLogin
// It has 1 parameter: 'user'
// It will send the user object to the server
const signInUser = async (user) => {
  try {
    // We destructure the username and password from the user object
    const { username, password } = user;
    // We send a POST request to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    // We wait for the response from the server
    // We convert the response to JSON and store it in a variable called 'data'
    const data = await response.json();
    // If the response is ok, we redirect the user to the dashboard page
    if (response.ok) {
      const { user, message } = data;
      console.log({ user, message });
      location.href = "/dashboard";
    } else {
      const { error } = data;
      // If the login fails, we call the alertDisplay function
      // We pass it the error message
      alertDisplay(error);
    }
  } catch (err) {
    // This will handle any errors on the server side
    console.error({ err });
  }
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
    return alertDisplay("Please enter a username and password");
  }
  // We create a new object called 'user'
  // It has 2 properties: username and password
  const user = {
    username,
    password,
  };
  // We call the signInUser function
  // We pass it the user object
  signInUser(user);
});
