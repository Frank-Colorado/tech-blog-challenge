const { User, Post, Comment } = require("../models");

// This is a function that will display the home page
const displayHome = (req, res) => {
  res.render("home");
};

module.exports = {
  displayHome,
};
