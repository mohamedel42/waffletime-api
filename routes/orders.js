const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/OrderController");

router.post("/payment", OrderController.newPayment);

module.exports = router;
