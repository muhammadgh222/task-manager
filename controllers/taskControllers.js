const asyncHandler = require("../utils/asyncHandler");
const CustomError = require("../utils/customError");
const Task = require("./../models/taskModel");

exports.getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});

  res.status(200).json({
    status: "success",
    tasks,
  });
});

exports.getTask = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  console.log(task);
  if (!task) {
    return next(new CustomError("No Task is found", 404));
  }
  res.status(200).json({
    status: "success",
    task,
  });
});
exports.createTask = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const task = await Task.create({ name });

  res.status(201).json({
    status: "success",
    message: "Task created succeffully",
    task,
  });
});
exports.editTask = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const upadtedTask = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!upadtedTask) {
    return next(new CustomError("No Task is found", 404));
  }

  res.status(201).json({
    status: "success",
    upadtedTask,
  });
});
exports.deleteTask = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findByIdAndDelete(id);

  if (!task) {
    return next(new CustomError("No task is found", 404));
  }
  res.status(200).json({
    status: "success",
    message: "Task deleted successfully",
  });
});
