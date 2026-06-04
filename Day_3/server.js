const express = require("express");

const app = express();

const logger = require("./middleware/logger");

const studentRoutes = require("./Routes/studentRoutes");

app.use(express.json());

app.use(logger);

app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server Started");
});
