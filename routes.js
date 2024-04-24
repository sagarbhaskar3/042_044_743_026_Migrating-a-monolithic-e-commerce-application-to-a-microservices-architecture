const express = require('express');
const router = express.Router();
const  {   addprod , get_product_id , get_products , filter_category    }  = require('./controller.js');


router.post('/addprod', addprod); 
router.get('/get_products', get_products); 
router.post('/get_product_id', get_product_id); 
router.post('/filter_category', filter_category); 
 
module.exports = router;
