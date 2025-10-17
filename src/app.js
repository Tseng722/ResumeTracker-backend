const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const app = express();
const analyzeRoutes = require('./routes/analyze');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const applicationRoutes = require('./routes/applicationRoutes');


app.use(cors({
    origin: 'http://localhost:3000', // 前端的來源
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-Type', "Authorization"]
  }));
app.use(express.json());

process.on('uncaughtException', err => {
    console.error('Uncaught Exception:', err);
  });
  process.on('unhandledRejection', err => {
    console.error('Unhandled Rejection:', err);
  });

app.use('/api/analyze', analyzeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/application', applicationRoutes);

module.exports = app;