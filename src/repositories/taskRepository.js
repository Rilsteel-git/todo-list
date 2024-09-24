const { Task } = require("../../models/associations.js");

exports.getAllTasks = async (filters) => {
  return await Task.findAll({
    where: filters,
  });
};

exports.getTaskById = async (id) => {
  return await Task.findByPk(id);
};

exports.createTask = async (taskData) => {
  return await Task.create(taskData);
};

exports.updateTask = async (id, updateData) => {
  const task = await Task.findByPk(id);
  if (task) {
    return await task.update(updateData);
  }
  throw new Error("Task not found");
};

exports.deleteTask = async (id) => {
  const task = await Task.findByPk(id);
  if (task) {
    return await task.destroy();
  }
  throw new Error("Task not found");
};
