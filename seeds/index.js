const seedUsers = require("./seeders/seedUsers.js");
const seedPosts = require("./seeders/seedPosts.js");
const seedComments = require("./seeders/seedComments.js");

const sequelize = require("../config/connection.js");

const seedDb = async () => {
  try {
    // We sync the database
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");

    // We seed the database with users
    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");

    // We seed the database with posts
    await seedPosts();
    console.log("\n----- POSTS SEEDED -----\n");

    // We seed the database with comments
    await seedComments();
    console.log("\n----- COMMENTS SEEDED -----\n");

    // We exit the process
    process.exit(0);
  } catch (err) {
    console.log({ err });
  }
};

seedDb();
