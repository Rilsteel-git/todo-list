const groupRepository = require("../repositories/groupRepository.js");

exports.getAllGroups = async () => {
  const groups = await groupRepository.getAllGroups();
  return groups;
};

exports.findByName = async (groupName) => {
  const group = await groupRepository.findByName(groupName);
  if (!group) {
    throw new Error("Group not found");
  }
  return group;
};

exports.addGroup = async (groupData) => {
  return await groupRepository.createGroup(groupData);
};

exports.update = async (id, updateData) => {
  const group = await groupRepository.updateGroup(id, updateData);
  return group;
};

exports.delete = async (id) => {
  const group = await groupRepository.deleteGroup(id);
  return group;
};
