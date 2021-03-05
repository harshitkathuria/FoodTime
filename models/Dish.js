const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of the dish"]
  },
  price: {
    type: Number,
    required: [true, "Please enter the price of the dish"]
  },
  type: {
    type: String
  },
  description: {
    type: String,
    required: [true, "Please provide description about the dish"]
  },
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: "Restaurant"
  }
});

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;
