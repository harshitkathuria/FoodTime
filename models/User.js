const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

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
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "restaurant", "admin"]
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
