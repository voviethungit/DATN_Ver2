const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
    minlength: 6,
    maxLength: 20,
  },
  phoneNumber: {
    type: Number,
    minlength: 10,
    unique: true,
  },
  email: {
    type: String,
    minlength: 5,
    maxLength: 40,
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: "false"
  },
  imagePath: {
    type: String,
    default: "https://wallpapercave.com/dwp1x/wp2301561.jpg"
  },
  location: {
    type:String,
    default: "Việt Nam"
  },
  status:{
    type: String,
    enum: ["banned", "active"],
    default: "active"
  },
  isVerified:{
    type: String,
    enum: ["Yes", "No"],
    default: "No"
  },
});

module.exports = mongoose.model("User", UserSchema);