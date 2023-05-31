const router = require("express").Router();
const {
  displayHome,
  displayLogin,
} = require("../../controllers/htmlControllers");

// This route will display the home page
router.get("/", displayHome);

// This route will display the login page
router.get("/login", displayLogin);

module.exports = router;
