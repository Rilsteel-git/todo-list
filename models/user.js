const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const User = sequelize.define(
  "User",
  {
    UserID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    PasswordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProfileImage: {
      // New column
      type: DataTypes.STRING,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "users",
    timestamps: false,
    createdAt: "CreatedAt",
    updatedAt: false,
  }
);

module.exports = User;
