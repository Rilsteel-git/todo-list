const errorHandler = (err, req, res, next) => {
  console.log(err);

  if (res.headersSent) {
    return next(err);
  }

  // Handle custom errors
  if (err.name === "EmailAlreadyRegistered") {
    // error handler auth (register and login)
    return res.status(400).json({ message: "Email already registered" });
  } else if (err.name === "EmailNotRegistered") {
    return res.status(404).json({ message: "Email not registered" });
  } else if (err.name === "InvalidPassword") {
    return res.status(401).json({ message: "Invalid password" });
  }

  // Default error handling
  return res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
