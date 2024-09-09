const taskRepository = require("../repositories/taskRepository.js");

exports.getAll = async (userId) => {
  const Tasks = await taskRepository.getAllTaskByUser(userId);
  return Tasks;
};

exports.getById = async (id) => {
  const task = await taskRepository.getTaskById(id);
  if (task) {
    return task;
  }
  throw new Error("task not found");
};

exports.addTask = async (taskData) => {
  return await taskRepository.createTask(taskData);
};

exports.update = async (id, updateData) => {
  const task = await taskRepository.updateTask(id, updateData);
  return task;
};

exports.delete = async (id) => {
  const task = await taskRepository.deleteTask(id);
  return task;
};
