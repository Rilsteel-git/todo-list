const taskRepository = require("../repositories/taskRepository.js");

exports.getAllTasks = async (filters) => {
  const tasks = await taskRepository.getAllTasks(filters);
  return tasks;
};

exports.getById = async (id) => {
  const task = await taskRepository.getTaskById(id);
  if (!task) {
    throw new Error("Task not found");
  }
  return task;
};

exports.addTask = async (taskData) => {
  const { GroupID, PriorityID, StatusID } = taskData;
  if (!GroupID || !PriorityID || !StatusID) {
    throw new Error(
      "GroupID, PriorityID, and StatusID are required to create a task."
    );
  }
  return await taskRepository.createTask(taskData);
};

exports.update = async (id, updateData) => {
  const task = await taskRepository.updateTask(id, updateData);
  if (!task) {
    throw new Error("Task not found");
  }
  return task;
};

exports.delete = async (id) => {
  await taskRepository.deleteTask(id);
};
