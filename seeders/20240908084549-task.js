"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tasks",
      [
        {
          Title: "Slicing UI",
          Description: "This is the first task",
          Priority: "High",
          Status: "in progress",
          DueDate: new Date(),
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          GroupID: 1,
          UserID: 1,
        },
        {
          Title: "Create API User",
          Description: "This is the second task",
          Priority: "Medium",
          Status: "In Progress",
          DueDate: new Date(),
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          GroupID: 1,
          UserID: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tasks", null, {});
  },
};
