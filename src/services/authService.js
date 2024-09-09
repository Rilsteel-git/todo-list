const jwt = require("jsonwebtoken");
const authRepository = require("../repositories/authRepository.js");
const { hashPassword, comparePassword } = require("../lib/bcrypt");
const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

exports.register = async (userData) => {
  const { Email, Password, ...restOfUserData } = userData;

  // Check if email already exists
  const existingUser = await authRepository.findUserByEmail(Email);
  if (existingUser) {
    const error = new Error("Email already registered");
    error.name = "EmailAlreadyRegistered";
    throw error;
  }

  const hashedPassword = await hashPassword(Password);
  const newUser = {
    ...restOfUserData,
    Email,
    PasswordHash: hashedPassword,
  };
  return await authRepository.createUser(newUser);
};

exports.login = async (loginData) => {
  const { Email, Password } = loginData;

  // Find the user by email
  const user = await authRepository.findUserByEmail(Email);

  if (!user) {
    const error = new Error("Email not registered");
    error.name = "EmailNotRegistered";
    throw error;
  }

  // Check if the password is valid
  const isPasswordValid = await comparePassword(Password, user.PasswordHash);

  if (!isPasswordValid) {
    const error = new Error("Invalid password");
    error.name = "InvalidPassword";
    throw error;
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user.UserID }, SECRET_KEY, {
    expiresIn: "24h",
  });

  return { token };
};
