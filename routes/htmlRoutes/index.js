const router = require("express").Router();
const withAuth = require("../../utils/auth.js");
const {
  displayHome,
  displayLogin,
  displaySignup,
  displayDashboard,
  displayPost,
} = require("../../controllers/htmlControllers");

// This route will display the home page
router.get("/", displayHome);

// This route will display the login page
router.get("/login", displayLogin);

// This route will display the signup page
router.get("/signup", displaySignup);

// This route will display the dashboard page
router.get("/dashboard", displayDashboard);

// This route will display a single Post and its Comments to its own page
router.get("/post/:id", displayPost);

module.exports = router;
