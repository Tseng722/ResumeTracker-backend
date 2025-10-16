const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const JobBoards = sequelize.define("JobBoards", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  }, {
    tableName: "jobBoards", 
    timestamps: true,        
  });

module.exports = JobBoards;