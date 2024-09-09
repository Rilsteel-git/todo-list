const { User } = require("../../models/associations.js");
const { comparePassword } = require("../lib/bcrypt");

exports.findUserByEmail = async (email) => {
  return await User.findOne({ where: { Email: email } });
};

exports.createUser = async (userData) => {
  return await User.create(userData);
};
