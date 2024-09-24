const express = require("express");
const statusController = require("../controllers/statusController.js");
const { authenticateToken } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", authenticateToken, statusController.getAllStatus);
router.post("/create", authenticateToken, statusController.addStatus);
router.put("/update/:id", authenticateToken, statusController.updateStatus);
router.delete("/:id", authenticateToken, statusController.deleteStatus);

module.exports = router;
