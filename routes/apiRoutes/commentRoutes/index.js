const router = require("express").Router();
const {
  createComment,
} = require("../../../controllers/apiControllers/commentController");

// This route will be called with /api/comments
router.post("/", createComment);

module.exports = router;
