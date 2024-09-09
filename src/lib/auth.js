const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

if (!SECRET_KEY) {
  throw new Error(
    "ACCESS_TOKEN_SECRET is not defined in environment variables"
  );
}

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ error: "Forbidden" });
    }
    req.userId = user.userId;
    next();
  });
};

module.exports = { authenticateToken };
