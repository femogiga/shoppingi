const { allProducts } = require('../controllers/productController');

const express = require('express');
const router = express.Router()

router.get('/', allProducts);

module.exports = router;
