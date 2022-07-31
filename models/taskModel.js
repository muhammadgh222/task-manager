const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A task must have a name"],
    trim: true,
    minLength: [5, "A task must be more than 5 chars"],
    maxLength: [20, "A task must be less than 20 chars"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
