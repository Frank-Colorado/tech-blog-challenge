const { Comment } = require("../../models");

// This is a function called createComment that will be called with the POST /api/comments route
const createComment = async (req, res) => {
  try {
    // We destructure the content and post_id from the req.body
    const { content, post_id } = req.body;
    // We create a new comment
    const newComment = await Comment.create({
      content,
      post_id,
      // We get the author from the session
      author: req.session.username,
      // We get the user_id from the session
      user_id: req.session.user_id,
    });
    // We send a response to the client with the new comment
    res.status(200).json(newComment);
  } catch (err) {
    // If there is an error, we log the error and send a response with a 500 status code and an error message
    console.error({ err });
    res.status(500).json({ error: "Failed to create comment" });
  }
};

module.exports = {
  createComment,
};
