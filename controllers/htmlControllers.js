const { User, Post, Comment } = require("../models");

// This is a function that will display the home page
const displayHome = async (req, res) => {
  try {
    // Grab all the posts from the Post model
    const postData = await Post.findAll();
    // Serialize the data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // render the home template and pass the posts in as an object
    res.render("home", {
      posts,
      nav: true,
      logged_in: req.session.logged_in,
      header: "Tech Blog",
    });
  } catch (err) {
    console.log("Problem with displayHome function");
    console.log({ err });
    res.status(500).json(err);
  }
};
// This is a function that will display the login page
const displayLogin = (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    header: "Login",
  });
};

// This is a function that will display the signup page
const displaySignup = (req, res) => {
  res.render("signup", {
    header: "Signup",
  });
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
