const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of the dish"]
  },
  address: {
    type: String,
    required: [true, "Please enter the address of the restaurant"]
  },
  cuisine: {
    type: String,
    default: "Multi-Cuisine"
  },
  description: {
    type: String,
    required: [true, "Please provide description about the dish"]
  },
  contactNumber: {
    type: Number,
    required: [true, "Please enter the contact number of the restaurant"]
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  dishes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Dish"
    }
  ]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
