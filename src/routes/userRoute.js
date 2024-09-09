const express = require("express");
const userController = require("../controllers/userController.js");
const { authenticateToken } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", authenticateToken, userController.getAllUsers);
router.get("/:id", authenticateToken, userController.getUserById);
router.put("/update/:id", authenticateToken, userController.updateUser);
router.delete("/:id", authenticateToken, userController.deleteUser);

module.exports = router;
