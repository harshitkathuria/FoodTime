const axios = require("axios");
const Dish = require("../models/Dish");

// Get All Dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json({ status: "success", data: { dishes } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

// Get Dish
exports.getDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    res.status(200).json({ status: "success", data: { dish } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

// Update Dish
exports.updateDish = async (req, res) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(201).json({ status: "success", data: { dish } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

// Delete Dish
exports.deleteDish = async (req, res) => {
  try {
    await Dish.findByIdAndDelete(req.params.id);
    res
      .status(204)
      .json({ status: "success", msg: "Dish successfully deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
