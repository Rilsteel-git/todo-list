const express = require("express");
const authRoutes = require("./authRoute");
const userRoutes = require("./userRoute");
const groupRoutes = require("./groupRoute");
const taskRoutes = require("./taskRoute");
const statusRoutes = require("./statusRoute");
const priorityRoutes = require("./priorityRoute");

const router = express.Router();

router.use("/api/auth/v1", authRoutes);
router.use("/api/users/v1", userRoutes);
router.use("/api/groups/v1", groupRoutes);
router.use("/api/tasks/v1", taskRoutes);
router.use("/api/status/v1", statusRoutes);
router.use("/api/priority/v1", priorityRoutes);

module.exports = router;
