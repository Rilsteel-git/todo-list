const express = require("express");
const taskController = require("../controllers/taskController.js");
const { authenticateToken } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", authenticateToken, taskController.getAllTasks);
router.get("/:id", authenticateToken, taskController.getTaskById);
router.post("/create", authenticateToken, taskController.addTask);
router.put("/update/:id", authenticateToken, taskController.updateTask);
router.delete("/:id", authenticateToken, taskController.deleteTask);

module.exports = router;
