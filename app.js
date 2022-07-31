const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const CustomError = require("./utils/customError");
const { errorHandler } = require("./utils/errorHandler");
const app = express();

//Middlewares
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", taskRoutes);

// Unhandled routes
app.all("*", (req, res, next) => {
  next(new CustomError(`Cannot find ${req.originalUrl} on this server!`, 404));
});
app.use(errorHandler);

module.exports = app;
