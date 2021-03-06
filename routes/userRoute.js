const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authController = require("../controller/authController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);

module.exports = router;
