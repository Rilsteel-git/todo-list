const { User } = require("../../models/associations.js");

exports.getAllUsers = async () => {
  return await User.findAll();
};

exports.findByEmail = async (email) => {
  return await User.findOne({ where: { Email: email } });
};

exports.getUserById = async (id) => {
  return await User.findByPk(id);
};

exports.updateUser = async (id, updateData) => {
  const user = await User.findByPk(id);
  if (user) {
    return await user.update(updateData);
  }
  throw new Error("User not found");
};

exports.deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    return await user.destroy();
  }
  throw new Error("User not found");
};
