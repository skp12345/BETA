const mongoose = require("../connection");

const schema = new mongoose.Schema({
  // users: [{ type: mongoose.Types.ObjectId, ref: "Users" }],
  form: Array,
  answers: [Object],
  endDate: Date,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("forms", schema);

module.exports = model;
