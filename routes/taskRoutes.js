const express = require("express");
const {
  getAllTasks,
  createTask,
  editTask,
  deleteTask,
  getTask,
} = require("./../controllers/taskControllers");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(editTask).delete(deleteTask);

module.exports = router;
