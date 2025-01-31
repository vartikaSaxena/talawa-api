const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
  deadline: { type: Date },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
