// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) return res.status(401).json({ message: 'No token provided' });

//   jwt.verify(token, process.env.JWT_SECRET || 'secret_key', (err, user) => {
//     if (err) return res.status(403).json({ message: 'Invalid token' });
//     req.user = user; // 把解碼的使用者資訊放到 req
//     next();
//   });
// };

// function authMiddleware(req, res, next) {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1]; // Bearer xxx
  
//     if (!token) return res.status(401).json({ message: "缺少 token" });
  
//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//       if (err) return res.status(403).json({ message: "無效或過期 token" });
  
//       req.user = user; // user 內含 payload (ex: email)
//       next();
//     });
//   }
  