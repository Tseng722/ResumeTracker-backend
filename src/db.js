require('dotenv').config();
const { Sequelize } = require('sequelize');
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
console.log(DB_USER);
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false,
});

// const testConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('PostgreSQL connected');
//   } catch (err) {
//     console.error('Unable to connect to the database:', err);
//   }
// };
// module.exports = { sequelize, testConnection };
// sequelize.authenticate()
//   .then(() => console.log('✅ Database connected!'))
//   .catch(err => console.error('❌ Unable to connect:', err));
module.exports = sequelize;