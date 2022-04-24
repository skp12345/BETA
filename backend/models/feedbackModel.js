const mongoose = require("../connection");

const schema = new mongoose.Schema({
  beta: { type: mongoose.Types.ObjectId, ref: "beta" },
  category: String,
  thumbnail: String,
  link: String,
  data: Object,
  users: [{ type: mongoose.Types.ObjectId, ref: "users" }],
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("feedbacks", schema);

module.exports = model;
