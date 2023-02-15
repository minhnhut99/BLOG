const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Your username"],
    trim: true,
    unique: true,
  },
  role: {
    type: Number,
    default: 1,
  },
  email: {
    type: String,
    required: [true, "Your email"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  avatar: {
    type: String,
    default: "",
  },
  cover: {
    type: String,
  },
  token: { type: String },
});

module.exports = mongoose.model("modelUser", userSchema);
