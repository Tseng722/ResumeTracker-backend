const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,   // 設為主鍵
        autoIncrement: true // 自動遞增
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    location: DataTypes.STRING,
    visa: DataTypes.STRING,
    linkedIn: DataTypes.STRING,
    github: DataTypes.STRING,
    selfIntro: DataTypes.TEXT,
  });
  
  module.exports = User;