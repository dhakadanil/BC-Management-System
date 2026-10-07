const mongoose = require("mongoose");

const bcMemberSchema = new mongoose.Schema({

  clientName: {
    type: String,
    required: true,
    trim: true
  },

  fatherName: {
    type: String,
    required: true,
    trim: true
  },

  startDate: {
    type: Date,
    required: true
  },

  interestRate: {
    type: Number,
    required: true
  },

  monthlyAmount: {
    type: Number,
    required: true
  },

  duration: {
    type: Number,
    default: 36
  },

  status: {
    type: String,
    enum: ["Active", "Completed"],
    default: "Active"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("BCMember",bcMemberSchema);