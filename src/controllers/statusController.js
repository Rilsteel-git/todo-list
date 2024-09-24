const statusService = require("../services/statusService.js");

exports.getAllStatus = async (req, res, next) => {
  try {
    const status = await statusService.getAll();
    res.status(200).json({
      message: "Success",
      data: status,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.addStatus = async (req, res, next) => {
  try {
    console.log(req);
    const { StatusName } = req.body;

    if (!StatusName) {
      return res.status(400).json({ message: "Status is required" });
    }

    const statusData = { ...req.body };
    const newStatus = await statusService.addStatus(statusData);

    res.status(201).json({
      message: "Status successfully created",
      data: newStatus,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const status = await statusService.update(req.params.id, req.body);
    res.status(200).json({
      message: "Status updated successfully",
      data: status,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.deleteStatus = async (req, res, next) => {
  try {
    await statusService.delete(req.params.id);
    res.status(200).json({
      message: "Status successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};
