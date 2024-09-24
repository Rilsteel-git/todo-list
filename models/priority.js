const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Priority = sequelize.define(
  "Priority",
  {
    PriorityID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    PriorityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "priorities",
    timestamps: false,
  }
);

module.exports = Priority;
