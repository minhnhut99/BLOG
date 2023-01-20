const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Your fullname"],
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Your username"],
    trim: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
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
