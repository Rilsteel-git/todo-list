const { Status } = require("../../models/associations");

exports.getAllStatus = async () => {
  return await Status.findAll();
};

exports.findByName = async (name) => {
  return await Status.findOne({ where: { StatusName: name } });
};

exports.createStatus = async (statusData) => {
  return await Status.create(statusData);
};

exports.updateStatus = async (id, updateData) => {
  const status = await Status.findByPk(id);
  if (status) {
    return await status.update(updateData);
  }
  throw new Error("Status not found");
};

exports.deleteStatus = async (id) => {
  const status = await Status.findByPk(id);
  if (status) {
    return await status.destroy();
  }
  throw new Error("Status not found");
};
