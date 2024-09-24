const taskService = require("../services/taskService.js");
const groupService = require("../services/groupService.js");
const statusService = require("../services/statusService.js");
const userService = require("../services/userService.js");
const priorityService = require("../services/priorityService.js");

exports.getAllTasks = async (req, res, next) => {
  try {
    const { GroupName, StatusName, Email, PriorityName } = req.query;

    const filters = {};

    if (GroupName) {
      const group = await groupService.findByName(GroupName);
      if (group) filters.GroupID = group.GroupID;
    }

    if (StatusName) {
      const status = await statusService.findByName(StatusName);
      if (status) filters.StatusID = status.StatusID;
    }

    if (Email) {
      console.log("task controller >>", Email);
      const user = await userService.findByEmail(Email);
      if (user) filters.UserID = user.UserID;
    }

    if (PriorityName) {
      const priority = await priorityService.findByName(PriorityName);
      if (priority) filters.PriorityID = priority.PriorityID;
    }

    const tasks = await taskService.getAllTasks(filters);

    if (tasks.length === 0) {
      return res.status(404).json({
        message: "Task not found!",
      });
    }

    res.status(200).json({
      message: "Success",
      data: tasks,
    });
  } catch (error) {
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
    next(error);
  }
};

exports.addTask = async (req, res, next) => {
  try {
    const taskData = {
      ...req.body,
      UserID: req.userId,
      GroupID: req.body.GroupID,
      PriorityID: req.body.PriorityID,
      StatusID: req.body.StatusID,
      IsCompleted: req.body.IsCompleted || false,
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
    const updateData = {
      ...req.body,
      PriorityID: req.body.PriorityID,
      StatusID: req.body.StatusID,
      isCompleted: req.body.isCompleted,
    };
    const task = await taskService.update(req.params.id, updateData);
    res.status(200).json({
      message: "Task updated successfully",
      data: task,
    });
  } catch (error) {
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
    next(error);
  }
};
