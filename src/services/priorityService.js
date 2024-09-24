const priorityRepository = require("../repositories/priorityRepository.js");

exports.getAll = async (userId) => {
  const priorities = await priorityRepository.getAllPriority(userId);
  return priorities;
};

exports.findByName = async (name) => {
  const priority = await priorityRepository.findByName(name);
  if (!priority) {
    throw new Error("Priority is not found!");
  }
  return priority;
};

exports.addPriority = async (priorityData) => {
  return await priorityRepository.createPriority(priorityData);
};

exports.update = async (id, updateData) => {
  const priority = await priorityRepository.updatePriority(id, updateData);
  return priority;
};

exports.delete = async (id) => {
  const priority = await priorityRepository.deletePriority(id);
  return priority;
};
