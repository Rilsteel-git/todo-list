// src/test/testModel.js
const sequelize = require("../../config/sequelize");
const User = require("../../models/user"); // Pastikan jalur ini sesuai

// Test model synchronization
sequelize
  .sync({ force: true }) // Gunakan { force: true } untuk membuat ulang tabel
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Error creating database & tables:", err);
  });
