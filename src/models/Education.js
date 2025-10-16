const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Education = sequelize.define("Education", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: true, // 必填
    },
    university: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    major: {
      type: DataTypes.STRING,
      allowNull: true, // 可以選填
    },
    startMonthYear: {
      type: DataTypes.STRING, // 例如 "06/2024"
      allowNull: true,
    },
    endMonthYear: {
      type: DataTypes.STRING, // 例如 "06/2024"
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // 要跟你使用者的 table 名稱對應
        key: "id",
      },
      onDelete: "CASCADE", // 如果使用者刪掉，教育資料也一起刪
    },
  }, {
    tableName: "educations", // 資料表名稱
    timestamps: true,        // 自動加上 createdAt / updatedAt
  });

module.exports = Education;