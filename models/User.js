const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"]
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  password: {
    type: String,
    required: [true, "PLease provide a password"]
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "restaurant", "admin"]
  }
});

const User = mongoose.model("User", userSchema);

export default User;
