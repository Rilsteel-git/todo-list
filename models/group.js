const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Group = sequelize.define(
  "Group",
  {
    GroupID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    GroupName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "groups",
    timestamps: false,
  }
);

module.exports = Group;
