const User = require("./user.js");
const Group = require("./group");
const Task = require("./task.js");
const Status = require("./status");
const Priority = require("./priority");

User.hasMany(Group, { foreignKey: "UserID" });
Group.belongsTo(User, { foreignKey: "UserID" });

User.hasMany(Task, { foreignKey: "UserID" });
Task.belongsTo(User, { foreignKey: "UserID" });

Group.hasMany(Task, { foreignKey: "GroupID" });
Task.belongsTo(Group, { foreignKey: "GroupID" });

Task.belongsTo(Status, { foreignKey: "StatusID" });
Status.hasMany(Task, { foreignKey: "StatusID" });

Task.belongsTo(Priority, { foreignKey: "PriorityID" });
Priority.hasMany(Task, { foreignKey: "PriorityID" });

module.exports = { User, Group, Task, Status, Priority };
