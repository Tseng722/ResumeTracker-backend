const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require("../middleware/authMiddleware");

router.post('/register', authController.register);
router.post('/login', authController.login);

// router.get("/verify", authMiddleware, (req, res) => {
//     res.status(200).json({ message: "JWT 驗證成功", user: req.user });
//   });
// router.get("/verify", (req, res) => {
//   const authHeader = req.headers["authorization"];
//   if (!authHeader) return res.status(401).json({ message: "缺少 token" });

//   const token = authHeader.split(" ")[1];
//   jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
//     if (err) return res.status(403).json({ message: "無效或過期 token" });
//     res.json({ message: "驗證成功", userId: payload.id });
//   });
// });
router.get("/verify", authController.verifyToken);

module.exports = router;
