const { User, Post, Comment } = require("../models");

// This is a function that will display the home page
const displayHome = (req, res) => {
  res.render("home", {
    nav: true,
    logged_in: req.session.logged_in,
    header: "Tech Blog",
  });
};

// This is a function that will display the login page
const displayLogin = (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
};

// This is a function that will display the signup page
const displaySignup = (req, res) => {
  res.render("signup");
};

// This is a function that will display the dashboard page
const displayDashboard = async (req, res) => {
  res.render("dashboard", {
    nav: true,
    logged_in: req.session.logged_in,
    header: "Dashboard",
  });
};

module.exports = {
  displayHome,
  displayLogin,
  displaySignup,
  displayDashboard,
};
