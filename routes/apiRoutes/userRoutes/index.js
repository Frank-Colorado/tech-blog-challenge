const router = require("express").Router();
const {
  createUser,
  loginUser,
  logoutUser,
} = require("../../../controllers/apiControllers/userController");

// This route will be called with /api/users/signup
router.post("/signup", createUser);

// This route will be called with /api/users/login
router.post("/login", loginUser);

// This route will be called with /api/users/logout
router.post("/logout", logoutUser);

module.exports = router;
