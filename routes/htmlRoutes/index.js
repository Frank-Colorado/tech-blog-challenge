const router = require("express").Router();
const withAuth = require("../../utils/auth.js");
const {
  displayHome,
  displayLogin,
  displaySignup,
  displayDashboard,
  displayCreatePost,
  displayEditPost,
  displayPost,
} = require("../../controllers/htmlControllers");

// This route will display the home page
router.get("/", displayHome);

// This route will display the login page
router.get("/login", displayLogin);

// This route will display the signup page
router.get("/signup", displaySignup);

// This route will display the dashboard page
router.get("/dashboard", withAuth, displayDashboard);

// This route will display a single Post and its Comments to its own page
router.get("/post/:id", withAuth, displayPost);

// This route will display the create post page
router.get("/createPost", withAuth, displayCreatePost);

// This route will display the edit page for a single Post
router.get("/edit/:id", withAuth, displayEditPost);

module.exports = router;
