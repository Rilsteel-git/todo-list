module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tasks", {
      TaskID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Description: {
        type: Sequelize.TEXT,
      },
      PriorityID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "priorities",
          key: "PriorityID",
        },
        onDelete: "CASCADE",
      },
      StatusID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "statuses",
          key: "StatusID",
        },
        onDelete: "CASCADE",
      },
      IsCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      DueDate: {
        type: Sequelize.DATEONLY,
      },
      CreatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      UpdatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      GroupID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "groups",
          key: "GroupID",
        },
        onDelete: "CASCADE",
      },
      UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "UserID",
        },
        onDelete: "CASCADE",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tasks");
  },
};
