const { User, Post, Comment } = require("../models");

// This is a function that will display the home page
const displayHome = (req, res) => {
  res.render("home");
};

// This is a function that will display the login page
const displayLogin = (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
};

// This is a function that will display the signup page
const displaySignup = (req, res) => {
  res.render("signup");
};

module.exports = {
  displayHome,
  displayLogin,
  displaySignup,
};
