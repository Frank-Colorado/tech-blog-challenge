const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    // columns
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // foreign keys
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: "user",
        key: "id",
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "user",
        key: "username",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "post",
  }
);

module.exports = Post;
