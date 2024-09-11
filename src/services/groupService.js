const groupRepository = require("../repositories/groupRepository.js");

exports.getGroupsWithTasks = async (userId) => {
  const groups = await groupRepository.getGroupsWithTasks(userId);
  return groups;
};

exports.getAll = async (userId) => {
  const groups = await groupRepository.getAllGroupsForUser(userId);
  return groups;
};

exports.getById = async (id) => {
  const group = await groupRepository.getGroupById(id);
  if (group) {
    return group;
  }
  throw new Error("Group not found");
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
