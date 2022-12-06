const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config.js');
// user class that extends the model
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
User.init(
    {
        // id thats an integer, cant be null and auto increments, 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // username must be a string and cant be empty
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // email must be an email, unique, a string
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // validates the email is an email
            validate: {
                isEmail: true,
            },
        },
        // password must be a string and 8 chars in length 
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate the number of chars
            validate: {
                len: [8],
            },
        },
    },
);
module.exports = User;