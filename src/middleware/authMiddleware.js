const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "缺少 token" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // payload 內通常包含 userId
    next();
  } catch (err) {
    return res.status(403).json({ message: "無效或過期 token" });
  }
}

module.exports = authMiddleware;
