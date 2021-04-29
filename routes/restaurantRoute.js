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

router.get("/:id", restaurantController.getRestaurant);

router.post(
  "/",
  authController.roles(["admin", "restaurant"]),
  restaurantController.create
);

router.patch(
  "/:id",
  authController.roles(["admin", "restaurant"]),
  restaurantController.updateRestaurant
);

// router.delete(
//   "/:id",
//   authController.roles(["admin"]),
//   restaurantController.deleteRestaurant
// );

module.exports = router;
