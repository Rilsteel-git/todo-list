const priorityService = require("../services/priorityService.js");

exports.getAllPriority = async (req, res, next) => {
  try {
    const priority = await priorityService.getAll();
    res.status(200).json({
      message: "Success",
      data: priority,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.addPriority = async (req, res, next) => {
  try {
    const { PriorityName } = req.body;

    if (!PriorityName) {
      return res.status(400).json({ message: "Priority is required" });
    }

    const priorityData = { ...req.body };
    const newPriority = await priorityService.addPriority(priorityData);

    res.status(201).json({
      message: "Priority successfully created",
      data: newPriority,
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePriority = async (req, res, next) => {
  try {
    const priority = await priorityService.update(req.params.id, req.body);
    res.status(200).json({
      message: "Priority updated successfully",
      data: priority,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.deletePriority = async (req, res, next) => {
  try {
    await priorityService.delete(req.params.id);
    res.status(200).json({
      message: "Priority successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};
