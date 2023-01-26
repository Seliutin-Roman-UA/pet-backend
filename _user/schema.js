const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  name: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  avatarURL: String,
  phone: String,
  verify: {
      type: Boolean,
      default: false,
    },
  verificationToken: {
    type: String,
    default: '',
  },
});


module.exports = {
  userSchema
  
}