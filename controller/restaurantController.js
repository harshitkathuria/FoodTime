const Restaurant = require("../models/Restaurant");

// Create Restaurant
exports.create = async (req, res, next) => {
  try {
    const { name, address, cuisine, description, contactNumber } = req.body;
    const user = req.user;
    const restaurant = await Restaurant.create({
      name,
      address,
      cuisine,
      description,
      contactNumber,
      user
    });
    res.status(200).json({ status: "success", data: { restaurant } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "fail", msg: err.message });
  }
};

// Get All Restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({ status: "success", data: { restaurants } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

// Get Restaurant
exports.getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.status(200).json({ status: "success", data: { restaurant } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

// Get Restaurant by user
exports.getResOfUser = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById({ user: req.user });
    res.status(200).json({ status: "success", data: { restaurant } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
