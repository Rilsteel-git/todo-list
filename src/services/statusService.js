const statusRepository = require("../repositories/statusRepository.js");

exports.getAll = async (userId) => {
  const statuses = await statusRepository.getAllStatus(userId);
  return statuses;
};

exports.findByName = async (name) => {
  const status = await statusRepository.findByName(name);
  if (!status) {
    throw new Error("Status is not found!");
  }
  return status;
};

exports.getById = async (id) => {
  const status = await statusRepository.getStatusById(id);
  if (status) {
    return status;
  }
  throw new Error("Status not found");
};

exports.addStatus = async (statusData) => {
  return await statusRepository.createStatus(statusData);
};

exports.update = async (id, updateData) => {
  const status = await statusRepository.updateStatus(id, updateData);
  return status;
};

exports.delete = async (id) => {
  const status = await statusRepository.deleteStatus(id);
  return status;
};
