const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  value: {
    type: Number,
  },
  last_contact: {
    type: Date,
  },
  birthday: {
    type: Date,
  },
});

module.exports = Customer = mongoose.model("customer", CustomerSchema);
