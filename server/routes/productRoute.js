const { allProducts, addProduct } = require('../controllers/productController');

const express = require('express');
const router = express.Router();

router.get('/', allProducts);
router.post('/', addProduct);

module.exports = router;
