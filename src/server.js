// minimal Express server: ATS + Gemini integration

// const axios = require('axios');
require('dotenv').config();
const sequelize = require('./db');
const app = require('./app');
  
const PORT = process.env.BACKEND_PORT || 5001;

// sequelize.sync().then(() => {
//     console.log('Database synced');
//   });
// app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));


sequelize.sync({ alter: true })  // 或 force: true  alter
  .then(() => {
    console.log('資料表同步完成');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('同步失敗:', err));
