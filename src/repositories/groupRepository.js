const { Group } = require("../../models/associations.js");

exports.getAllGroups = async () => {
  return await Group.findAll();
};

exports.findByName = async (groupName) => {
  return await Group.findOne({ where: { GroupName: groupName } });
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
