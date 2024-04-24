const express = require('express');
const router = express.Router();
const  { create_cart , add_to_cart , remove_from_cart  , get_cart  }  = require('./controller.js');

router.post('/get_cart', get_cart); 
router.post('/create_cart', create_cart); 
router.post('/add_to_cart', add_to_cart); 
router.post('/remove_from_cart', remove_from_cart); 
 
module.exports = router;
