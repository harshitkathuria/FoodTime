const express = require("express");
const router = express.Router();
const dishController = require("../controller/dishController");
const authController = require("../controller/authController");

router.get("/", dishController.getAllDishes);
router.get("/:id", dishController.getDish);

router.use(authController.protect);

router.patch(
  "/:id",
  authController.roles(["admin"]),
  dishController.updateDish
);

router.delete(
  "/:id",
  authController.roles(["admin"]),
  dishController.deleteDish
);

module.exports = router;
