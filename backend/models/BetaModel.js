const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  category: String,
  thumbnail: String,
  link: String,
  company: { type: mongoose.Types.ObjectId, ref: "companies" },
  feedbacks: [{ type: mongoose.Types.ObjectId, ref: "feedbacks" }],
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("beta", schema);

module.exports = model;
