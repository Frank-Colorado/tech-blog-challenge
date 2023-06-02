const { Post } = require("../../models");

// This is a function called createPost that will be called with the POST /api/posts route
const createPost = async (req, res) => {
  try {
    // We destructure the title and content from the req.body
    const { title, content } = req.body;
    // We create a new post
    const newPost = await Post.create({
      title,
      content,
      // We get the author from the session
      author: req.session.username,
      // We get the user_id from the session
      user_id: req.session.user_id,
    });
    // We send a response to the client with the new post
    res.status(200).json(newPost);
  } catch (err) {
    // If there is an error, we log the error and send a response with a 500 status code and an error message
    console.error({ err });
    res.status(500).json({ error: "Failed to create post" });
  }
};

// This is a function called updatePost that will be called with the PUT /api/posts/:id route
const updatePost = async (req, res) => {
  try {
    // We destructure the title and content from the req.body
    const { title, content } = req.body;
    // We update the post with the matching id
    const updatedPost = await Post.update(
      { title, content },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // We send a response to the client with the updated post
    res.status(200).json(updatedPost);
  } catch (err) {
    // If there is an error, we log the error and send a response with a 500 status code and an error message
    console.error({ err });
    res.status(500).json({ error: "Failed to update post" });
  }
};

// This is a function called deletePost that will be called with the DELETE /api/posts/:id route
const deletePost = async (req, res) => {
  try {
    // We delete the post with the matching id
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    // We send a response to the client with the deleted post
    res.status(200).json(deletedPost);
  } catch (err) {
    // If there is an error, we log the error and send a response with a 500 status code and an error message
    console.error({ err });
    res.status(500).json({ error: "Failed to delete post" });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
};
