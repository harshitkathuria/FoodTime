const axios = require("axios");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  let user = await User.findOne({ email });
  try {
    if (user) {
      res.status(400).json({ status: "error", msg: "User already exists" });
    }
    user = await User.create({ name, email, password, role });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 3600
    });
    res.status(201).json({ status: "success", data: { user, token } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 3600
      });
      res.status(200).json({ status: "success", data: { token } });
    } else {
      res.status(400).json({ status: "fail", msg: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", msg: "Server Error" });
  }
};
