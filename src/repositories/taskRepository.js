const { Task } = require("../../models/associations.js");

exports.getAllTaskByUser = async (userId) => {
  return await Task.findAll({
    where: { UserID: userId },
  });
};

exports.getTaskById = async (id) => {
  return await Task.findByPk(id);
};

exports.createTask = async (taskData) => {
  return await Task.create(taskData);
};

exports.updateTask = async (id, updateData) => {
  const Task = await Task.findByPk(id);
  if (Task) {
    return await Task.update(updateData);
  }
  throw new Error("Task not found");
};

exports.deleteTask = async (id) => {
  const Task = await Task.findByPk(id);
  if (Task) {
    return await Task.destroy();
  }
  throw new Error("Task not found");
};
