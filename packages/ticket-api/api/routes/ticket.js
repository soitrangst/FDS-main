const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth')

const Product_Controller = require("../controller/order-controller")

router.post('/get_booked',Product_Controller.get_booked )

module.exports = router