const express = require("express");
const groupController = require("../controllers/groupController.js");
const { authenticateToken } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", authenticateToken, groupController.getAllGroups);
router.get("/:id", authenticateToken, groupController.getGroupById);
router.post("/create", authenticateToken, groupController.addGroup);
router.put("/update/:id", authenticateToken, groupController.updateGroup);
router.delete("/:id", authenticateToken, groupController.deleteGroup);

module.exports = router;
