const groupService = require("../services/groupService.js");

exports.getAllGroups = async (req, res, next) => {
  try {
    const userId = req.userId;
    const groups = await groupService.getAll(userId);
    res.status(200).json({
      message: "Success",
      data: groups,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};
exports.getGroupById = async (req, res, next) => {
  try {
    const group = await groupService.getById(req.params.id);
    res.status(200).json({
      message: "Success",
      data: group,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.addGroup = async (req, res, next) => {
  try {
    const groupData = {
      ...req.body,
      UserID: req.userId,
    };
    const newGroup = await groupService.addGroup(groupData);
    res.status(201).json({
      message: "Group successfully created",
      data: newGroup,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateGroup = async (req, res, next) => {
  try {
    const group = await groupService.update(req.params.id, req.body);
    res.status(200).json({
      message: "Group updated successfully",
      data: group,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.deleteGroup = async (req, res, next) => {
  try {
    await groupService.delete(req.params.id);
    res.status(200).json({
      message: "Group successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};
