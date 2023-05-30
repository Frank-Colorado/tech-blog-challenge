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
