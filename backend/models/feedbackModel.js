const mongoose = require("../connection");

const schema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  answers: Array,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("feedbacks", schema);

module.exports = model;
