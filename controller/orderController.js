const Order = require("../models/Order");

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const { amount, resName, dishData } = req.body;
    const user = req.user;
    const order = await Order.create({
      amount,
      resName,
      user,
      dishData
    });
    res.status(200).json({ status: "success", data: { order } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "fail", msg: err.message });
  }
};

// Get Orders of the user
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user }).populate(
      "dishData.dish"
    );
    res.status(200).json({ status: "success", data: { orders } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
