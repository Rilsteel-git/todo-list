const { Priority } = require("../../models/associations");

exports.getAllPriority = async () => {
  return await Priority.findAll();
};

exports.findByName = async (name) => {
  return await Priority.findOne({ where: { PriorityName: name } });
};

exports.createPriority = async (priorityData) => {
  return await Priority.create(priorityData);
};

exports.updatePriority = async (id, updateData) => {
  const priority = await Priority.findByPk(id);
  if (priority) {
    return await priority.update(updateData);
  }
  throw new Error("Priority not found");
};

exports.deletePriority = async (id) => {
  const priority = await Priority.findByPk(id);
  if (priority) {
    return await priority.destroy();
  }
  throw new Error("Priority not found");
};
