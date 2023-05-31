const router = require("express").Router();
const {
  displayHome,
  displayLogin,
  displaySignup,
} = require("../../controllers/htmlControllers");

// This route will display the home page
router.get("/", displayHome);

// This route will display the login page
router.get("/login", displayLogin);

// This route will display the signup page
router.get("/signup", displaySignup);

module.exports = router;
