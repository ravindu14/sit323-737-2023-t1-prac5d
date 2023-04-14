const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware");

const calculatorController = require("../controller/calculator");
const authController = require("../controller/user");

router.post("/calculator", authMiddleware, calculatorController);
router.post("/login", authController);

module.exports = router;
