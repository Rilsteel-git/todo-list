const express = require("express");
const priorityController = require("../controllers/priorityController.js");
const { authenticateToken } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", authenticateToken, priorityController.getAllPriority);
router.post("/create", authenticateToken, priorityController.addPriority);
router.put("/update/:id", authenticateToken, priorityController.updatePriority);
router.delete("/:id", authenticateToken, priorityController.deletePriority);

module.exports = router;
