const express = require('express');
const router = express.Router();
const  {    add_order ,get_orders ,add_payment   }  = require('./controller.js');


router.post('/add_order', add_order); 
router.post('/get_orders', get_orders); 
router.post('/add_payment', add_payment); 
 
module.exports = router;
