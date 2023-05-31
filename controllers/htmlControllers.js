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

module.exports = {
  displayHome,
  displayLogin,
};
