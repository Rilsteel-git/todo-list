const { Group } = require("../../models/associations.js");

exports.getAllGroupsForUser = async (userId) => {
  return await Group.findAll({
    where: { UserID: userId },
  });
};

exports.getGroupById = async (id) => {
  return await Group.findByPk(id);
};

exports.createGroup = async (groupData) => {
  return await Group.create(groupData);
};

exports.updateGroup = async (id, updateData) => {
  const group = await Group.findByPk(id);
  if (group) {
    return await group.update(updateData);
  }
  throw new Error("Group not found");
};

exports.deleteGroup = async (id) => {
  const group = await Group.findByPk(id);
  if (group) {
    return await group.destroy();
  }
  throw new Error("Group not found");
};
