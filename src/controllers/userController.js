const userService = require("../services/userService.js");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.status(200).json({
      message: "Success",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await userService.getById(req.params.id);
    res.status(200).json({
      message: "Success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await userService.delete(req.params.id);
    res.status(200).json({
      message: "User successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};
