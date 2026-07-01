const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  console.log("Authorization Header:", req.headers.authorization);
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(" ")[1];

  console.log("Extracted Token:", token);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token required",
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Invalid Token",
      });
    }

    req.user = user;

    next();
  });
};

module.exports = authenticateToken;
