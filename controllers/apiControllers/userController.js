const { User } = require("../../models");

// This is a function called createUser that will be called with the POST /api/users/signup route
const createUser = async (req, res) => {
  try {
    // We destructure the username and password properties from req.body
    const { username, password } = req.body;
    // We create a new user with the username and password that was entered in the signup form
    const newUser = await User.create({ username, password });
    // After we create a new user, we create a session for the user
    req.session.save(() => {
      // we save the users id
      req.session.user_id = newUser.id;
      // we save the users username
      req.session.username = newUser.username;
      // We create a logged_in property for the session and set it to true
      req.session.logged_in = true;
      // we send a response to the client with the new user and a message
      res.status(200).json({ user: newUser, message: "Sign up successful!" });
    });
  } catch (err) {
    // If there is an error, we log the error and send a response with a 500 status code and an error message
    console.error({ err });
    res.status(500).json({ error: "Failed to sign up" });
  }
};

// This is a function called signInUser that will be called with the POST /api/users/login route
const loginUser = async (req, res) => {
  try {
    // We destructure the username and password properties from req.body
    const { username, password } = req.body;
    // We search the User Model for a user with the username that was entered in the login form
    const user = await User.findOne({ where: { username } });
    // If the user is not found, we send a response with a 400 status code and an error message
    if (!user) {
      res
        .status(400)
        .json({ error: "Incorrect username or password. Please try again!" });
      return;
    }
    // If the user is found,
    // We check the password that the user sent us with the checkPassword isntance method that we created in the User model
    const validPassword = await user.checkPassword(password);
    // If the password is not valid, we send a response with a 400 status code and an error message
    if (!validPassword) {
      res
        .status(400)
        .json({ error: "Incorrect username or password. Please try again!" });
      return;
    }
    // If the password is valid, we create a session for the user
    req.session.save(() => {
      // we save the users id for the session
      req.session.user_id = user.id;
      // we save the users username for the session
      req.session.username = user.username;
      // We create a logged_in property for the session and set it to true
      req.session.logged_in = true;
      // we send a response to the client with the user and a message
      res.status(200).json({ user, message: "Login successful!" });
    });
  } catch (err) {
    // If there is an error, we log the error and send a response with a 500 status code and an error message
    console.error({ err });
    res.status(500).json({ error: "Failed to login" });
  }
};
