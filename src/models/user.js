'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  }
  );
  user.beforeCreate(async(user)=>{
    const SALT = bcrypt.genSalt(10);
    const encryptedPassword = bcrypt.hashSync(user.password , SALT);
    user.password = encryptedPassword;  
  })
  return user;
};