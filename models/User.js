const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  // This is an instance method called 'checkPassword'
  // It has 1 parameter: 'userPw'
  async checkPassword(userPw) {
    try {
      return await bcrypt.compare(userPw, this.password);
    } catch (err) {
      console.log({ err });
    }
  }
}

User.init(
  {
    // columns
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { len: [3, 20] },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [8, 20] },
    },
  },
  {
    // hooks
    hooks: {
      // This is a hook that will automatically run before a new user is created
      beforeCreate: async (newUserData) => {
        try {
          const { password, username } = newUserData;
          password = await bcrypt.hash(newUserData.password, 10);
          username = username.toLowerCase().trim();
          return newUserData;
        } catch (err) {
          console.log({ err });
        }
      },
      // This is a hook that will automatically run before a user is updated
      beforeUpdate: async (updatedUserData) => {
        try {
          const { password, username } = updatedUserData;
          password = await bcrypt.hash(password, 10);
          username = username.toLowerCase().trim();
          return updatedUserData;
        } catch (err) {
          console.log({ err });
        }
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "user",
  }
);

module.exports = User;
