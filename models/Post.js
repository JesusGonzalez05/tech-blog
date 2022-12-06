const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
class Post extends Model {}

Post.init(
  {
        // id thats an integer, cant be null and auto increments, 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // title must be a sting
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // this is the acutal comment - must be a string (series)
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user id that references the user model object 
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);
// export Post model
module.exports = Post;