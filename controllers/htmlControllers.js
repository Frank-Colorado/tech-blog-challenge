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
    res.status(500).json({ err });
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
  try {
    // Grab all the users posts from the Post model
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    // Serialize the data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // render the dashboard template and pass the posts in as an object
    res.render("dashboard", {
      posts,
      nav: true,
      logged_in: req.session.logged_in,
      header: "Your Dashboard",
    });
  } catch (err) {
    console.log("Problem with displayDashboard function");
    console.log({ err });
    res.status(500).json({ err });
  }
};

// This is a function that will display the create post page
const displayCreatePost = (req, res) => {
  res.render("createPost", {
    nav: true,
    logged_in: req.session.logged_in,
    header: "Create a Post",
  });
};

// This is a function that will display the edit post page
const displayEditPost = async (req, res) => {
  try {
    // Grab the post with the id passed in as a parameter
    const postData = await Post.findByPk(req.params.id);
    // Serialize the data so the template can read it
    const post = postData.get({ plain: true });
    // Render the editPost template with the post data
    res.render("editPost", {
      post,
      nav: true,
      logged_in: req.session.logged_in,
      header: "Edit Post",
    });
  } catch (err) {
    console.log("Problem with displayEditPost function");
    console.log({ err });
    res.status(500).json({ err });
  }
};

// This is a function that will display a single Post and its Comments to its own page
const displayPost = async (req, res) => {
  try {
    // Grab the post with the id passed in as a parameter
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            ["content", "commentContent"],
            ["author", "commentAuthor"],
            "post_id",
            "user_id",
            "createdAt",
          ],
        },
      ],
    });
    // Serialize the data so the template can read it
    const post = postData.get({ plain: true });
    // Render the post template with the post data
    res.render("post", {
      post,
      nav: true,
      logged_in: req.session.logged_in,
      username: req.session.username,
      header: "Tech Blog",
    });
  } catch (err) {
    console.log("Problem with displayPost function");
    console.log({ err });
    res.status(500).json({ err });
  }
};

module.exports = {
  displayHome,
  displayLogin,
  displaySignup,
  displayDashboard,
  displayCreatePost,
  displayEditPost,
  displayPost,
};
