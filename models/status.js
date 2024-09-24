const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Status = sequelize.define(
  "Status",
  {
    StatusID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    StatusName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "statuses",
    timestamps: false,
  }
);

module.exports = Status;
