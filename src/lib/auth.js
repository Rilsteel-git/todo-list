const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

if (!SECRET_KEY) {
  throw new Error(
    "ACCESS_TOKEN_SECRET is not defined in environment variables"
  );
}

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

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
