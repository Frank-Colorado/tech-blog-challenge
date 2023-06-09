const { User } = require("../../models");
const { faker } = require("@faker-js/faker");

// This is a function that will seed the database with 5 users
const seedUsers = async () => {
  try {
    // Array.from create an array of 5 elements
    // .map() will iterate over the array and create a new object for each element
    const users = Array.from({ length: 5 }).map(() => ({
      // The object will have a username and password property with random values generated by faker
      username: faker.internet.userName(),
      password: faker.internet.password(),
    }));
    // bulkCreate will create the users in the database
    const userData = await User.bulkCreate(users);
    // return the users
    return userData;
  } catch (err) {
    console.log({ err });
  }
};

module.exports = seedUsers;
