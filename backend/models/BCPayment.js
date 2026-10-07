const mongoose = require("mongoose");

const bcPaymentSchema = new mongoose.Schema(
  {
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BCMember",
      required: true
    },

    paymentDate: {
      type: Date,
      required: true
    },

    paymentMonth: {
      type: Number,
      required: true
    },

    paymentYear: {
      type: Number,
      required: true
    },

    monthNumber: {
      type: Number,
      required: true
    },

    monthlyAmount: {
      type: Number,
      required: true
    },

    interestAmount: {
      type: Number,
      default: 0
    },

    penaltyAmount: {
      type: Number,
      default: 0
    },

    totalAmount: {
      type: Number,
      required: true
    },

    balanceAfterPayment: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

bcPaymentSchema.index(
  {
    memberId: 1,
    paymentMonth: 1,
    paymentYear: 1
  },
  {
    unique: true
  }
);


module.exports = mongoose.model(
  "BCPayment",
  bcPaymentSchema
);