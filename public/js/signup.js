const $signupForm = document.getElementById("signupForm");
const $username = document.getElementById("username");
const $password = document.getElementById("password");
const $signupBtn = document.getElementById("signupBtn");

// This is a function called signUpUser
// It has 1 parameter: 'user'
// It will send the user object to the server
const signUpUser = async (user) => {
  try {
    // We destructure the username and password from the user object
    const { username, password } = user;
    // We send a POST request to the server
    const response = await fetch("/api/users/signup", {
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
      // If the signup fails, we call the alertDisplay function
      // We pass it the error message
      alertDisplay(error);
    }
  } catch (err) {
    // This will handle any errors on the server side
    console.error({ err });
  }
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
  // We check if the username is between 3 and 20 characters and if the password is over 8 characters
  if (username.length < 3 || username.length > 20 || password.length < 8) {
    // If the username or password fails the length validation, we call the alertDisplay function
    // We pass it an error message
    alertDisplay("Username or password is too short!");
    return;
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
