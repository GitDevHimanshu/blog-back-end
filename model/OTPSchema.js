const mongoose = require('mongoose');

const OTPSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    OTP: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 600, 
    },
  },
);

const OTP = mongoose.model('OTP', OTPSchema);

module.exports = OTP;

