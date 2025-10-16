// backend/src/models/index.js
const User = require("./User");
const Education = require("./Education");
const Applications = require("./Applications");

// 關聯
User.hasMany(Education, { foreignKey: "userId", as: "educations" });
Education.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Applications, { foreignKey: "userId", as: "applications" });
Applications.belongsTo(User, { foreignKey: "userId", as: "user" });

module.exports = { User, Education, Applications };
