const { User, Post, Comment } = require("../../models");
const { faker } = require("@faker-js/faker");

// This is a function that will seed the database with comments
const seedComments = async () => {
  try {
    // We grab all the users and posts from the database
    const [users, posts] = await Promise.all([
      User.findAll({
        attributes: ["username"],
      }),
      Post.findAll({
        attributes: ["id"],
      }),
    ]);
    // We create comments for each post
    const comments = posts.map((post) => {
      // Array.from creates an array of 3 elements
      // so each post will have 3 comments
      const commentsPerPost = Array.from({ length: 3 }).map(() => ({
        // The object will have a content property with random values generated by faker
        content: faker.lorem.paragraph({ min: 1, max: 5 }),
        // The object will also have an author property with a random username
        author: faker.helpers.arrayElement(users),
        // The object will also have a post_id property with the id of the post
        post_id: post.id,
      }));
      // We return the comments for the post
      return commentsPerPost;
    });
    // bulkCreate will create the comments in the database
    // with the comments array flattened
    const commentsData = await Comment.bulkCreate(comments.flat());
    // return the comments
    return commentsData;
  } catch (err) {
    console.log({ err });
  }
};

module.exports = seedComments;
