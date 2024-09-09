const authService = require("../services/authService");

// Register Controller
exports.register = async (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = await authService.register(userData);
    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    if (error.name === "EmailAlreadyRegistered") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
      next(error);
    }
  }
};

// Login Controller
exports.login = async (req, res, next) => {
  try {
    const loginData = req.body;
    const { token } = await authService.login(loginData);
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    if (error.name === "EmailNotRegistered") {
      res.status(404).json({ error: error.message });
    } else if (error.name === "InvalidPassword") {
      res.status(401).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
      next(error);
    }
  }
};
