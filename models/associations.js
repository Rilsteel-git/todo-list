const User = require("./user.js");
const Group = require("./group");
const Task = require("./task.js");

// Defining associations
User.hasMany(Group, { foreignKey: "UserID" });
Group.belongsTo(User, { foreignKey: "UserID" });

User.hasMany(Task, { foreignKey: "UserID" });
Task.belongsTo(User, { foreignKey: "UserID" });

Group.hasMany(Task, { foreignKey: "GroupID" });
Task.belongsTo(Group, { foreignKey: "GroupID" });

module.exports = { User, Group, Task };
