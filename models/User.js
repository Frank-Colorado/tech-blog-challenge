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
        // columns will go here
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
   