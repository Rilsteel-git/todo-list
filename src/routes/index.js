const express = require("express");
const authRoutes = require("./authRoute");
const userRoutes = require("./userRoute");
const groupRoutes = require("./groupRoute");
const taskRoutes = require("./taskRoute");

const router = express.Router();

router.use("/api/auth/v1", authRoutes);
router.use("/api/users/v1", userRoutes);
router.use("/api/groups/v1", groupRoutes);
router.use("/api/tasks/v1", taskRoutes);

module.exports = router;
