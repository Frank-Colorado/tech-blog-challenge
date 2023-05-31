const router = require("express").Router();
const { displayHome } = require("../../controllers/htmlControllers");

// This route will display the home page
router.get("/", displayHome);

module.exports = router;
