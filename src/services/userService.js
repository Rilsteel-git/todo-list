const userRepository = require("../repositories/userRepository.js");

exports.getAll = async () => {
  const users = await userRepository.getAllUsers();
  return users.map((user) => {
    const { PasswordHash, ...rest } = user.dataValues;
    return rest;
  });
};

exports.findByEmail = async (email) => {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new Error("Email is not found!");
  }
  return user;
};

exports.getById = async (id) => {
  const user = await userRepository.getUserById(id);
  if (user) {
    const { PasswordHash, ...rest } = user.dataValues;
    return rest;
  }
  throw new Error("User not found");
};

exports.update = async (id, updateData) => {
  const user = await userRepository.updateUser(id, updateData);
  const { PasswordHash, ...rest } = user.dataValues;
  return rest;
};

exports.delete = async (id) => {
  const user = await userRepository.deleteUser(id);
  return user;
};
