const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  eligibility: String,
  users: [{ type: mongoose.Types.ObjectId, ref: "Users" }],
  forms: [{ type: mongoose.Types.ObjectId, ref: "forms" }],
  thumbnail: String,
  startDate: { type: Date, default: new Date() },
  link: String,
  endDate: Date,
  company: { type: mongoose.Types.ObjectId, ref: "companies" },
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("beta", schema);

module.exports = model;
