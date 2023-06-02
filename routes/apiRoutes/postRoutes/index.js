const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
} = require("../../../controllers/apiControllers/postController");

// This route will be called with /api/posts
router.post("/", createPost);

// These route will be called with /api/posts/:id
router.route("/:id").put(updatePost).delete(deletePost);

module.exports = router;
