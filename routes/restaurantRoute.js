const express = require("express");
const router = express.Router();
const restaurantController = require("../controller/restaurantController");
const authController = require("../controller/authController");

router.use(authController.protect);

router.get("/", restaurantController.getAllRestaurants);

router.get(
  "/my",
  authController.roles(["admin", "restaurant"]),
  restaurantController.getMyRes
);
router.post(
  "/",
  authController.roles(["admin", "restaurant"]),
  restaurantController.create
);

module.exports = router;
