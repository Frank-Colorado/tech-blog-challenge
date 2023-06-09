const { User, Post } = require("../../models");
const { faker } = require("@faker-js/faker");

// This is a function that will seed the database with posts
const seedPosts = async () => {
  try {
    // Find all users and return only the id and username
    const users = await User.findAll({
      attributes: ["username"],
    });
    // Array.from create an array of 5 elements
    // .map() will iterate over the array and create a new object for each element
    const posts = Array.from({ length: 5 }).map(() => ({
      // The object will have a title and content property with random values generated by faker
      title: faker.lorem.words({ min: 1, max: 5 }),
      content: faker.lorem.paragraph({ min: 5, max: 10 }),
      // The object will also have an author property with a random username grabbed from the users array
      author: faker.helpers.arrayElement(users).username,
    }));
    // bulkCreate will create the posts in the database
    const postData = await Post.bulkCreate(posts);
    // return the posts
    return postData;
  } catch (err) {
    console.log({ err });
  }
};

module.exports = seedPosts;
