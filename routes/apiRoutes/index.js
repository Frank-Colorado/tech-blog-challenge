const router = require("express").Router();

// This route is for the /api/users endpoint
const userRoutes = require("./userRoutes");
router.use("/users", userRoutes);

// This route is for the /api/posts endpoint
const postRoutes = require("./postRoutes");
router.use("/posts", postRoutes);

// This route is for the /api/comments endpoint
const commentRoutes = require("./commentRoutes");
router.use("/comments", commentRoutes);

module.exports = router;
