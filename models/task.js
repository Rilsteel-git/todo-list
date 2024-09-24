const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Task = sequelize.define(
  "Task",
  {
    TaskID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    GroupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "groups",
        key: "GroupID",
      },
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "UserID",
      },
    },
    Title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    PriorityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "priorities",
        key: "PriorityID",
      },
    },
    StatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "statuses",
        key: "StatusID",
      },
    },
    DueDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    IsCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "tasks",
    timestamps: false,
  }
);

module.exports = Task;
