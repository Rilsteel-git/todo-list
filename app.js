const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const router = require("./src/routes/index.js");
const errorHandler = require("./src/middlewares/errorHandlers.js");

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

console.log("Server is about to start...");
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
