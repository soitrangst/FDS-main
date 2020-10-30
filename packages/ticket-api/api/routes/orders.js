const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth')

const Order_Controller = require("../controller/order-controller")

router.post('/',Order_Controller.create_new )
router.get('/ticket/:code',Order_Controller.get_specific )
router.get('/all',Order_Controller.get_all_order )

module.exports = router