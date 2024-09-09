const taskService = require("../services/taskService.js");

exports.getAllTaks = async (req, res, next) => {
  try {
    const userId = req.userId;
    const taks = await taskService.getAll(userId);
    res.status(200).json({
      message: "Success",
      data: taks,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};
exports.getTaskById = async (req, res, next) => {
  try {
    const task = await taskService.getById(req.params.id);
    res.status(200).json({
      message: "Success",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.addTask = async (req, res, next) => {
  try {
    const taskData = {
      ...req.body,
      UserID: req.userId,
    };
    const newTask = await taskService.addTask(taskData);
    res.status(201).json({
      message: "Task successfully created",
      data: newTask,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const task = await taskService.update(req.params.id, req.body);
    res.status(200).json({
      message: "Task updated successfully",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    await taskService.delete(req.params.id);
    res.status(200).json({
      message: "Task successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};
