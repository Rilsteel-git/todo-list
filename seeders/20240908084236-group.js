"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "groups",
      [
        {
          GroupName: "On development",
          Description: "This is the first group",
          UserID: 1,
          CreatedAt: new Date(),
        },
        {
          GroupName: "Done Dev",
          Description: "This is the second group",
          UserID: 2,
          CreatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Groups", null, {});
  },
};
