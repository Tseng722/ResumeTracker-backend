const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Applications = sequelize.define("Applications", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    companyTitle: {
      type: DataTypes.STRING,
      allowNull: true, // 必填
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    applicationDate: {
        type: DataTypes.DATE, 
        allowNull: true,
      },
    status: {
        type: DataTypes.ENUM('inProgress', '1stInterview','2ndInterview','3rdInterview','4thInterview','5thInterview', 'offer', 'rejected'),
        allowNull: true, 
    },
    resourceId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    applyById: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    howManyApplicant: {
        type: DataTypes.INTEGER, // 例如 "06/2024"
        allowNull: true,
    },
    jobDescription: {
        type: DataTypes.TEXT,
        allowNull: true, 
    },
    coverLetter: {
        type: DataTypes.TEXT,
        allowNull: true, 
    },
    qusetion: {
        type: DataTypes.TEXT,
        allowNull: true, 
    },
    analyzedJDResponse: {
        type: DataTypes.TEXT,
        allowNull: true, 
    },
    atsScoreResponse: {
        type: DataTypes.INTEGER, // 例如 "06/2024"
        allowNull: true,
    },
    atsDescriptionResponse: {
        type: DataTypes.TEXT,
        allowNull: true, 
    },
    resumeSuggestionResponse: {
        type: DataTypes.TEXT,
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
    tableName: "applications", // 資料表名稱
    timestamps: true,        // 自動加上 createdAt / updatedAt
  });

module.exports = Applications;