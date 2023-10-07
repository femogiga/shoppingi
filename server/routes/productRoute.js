const {
  allProducts,
  addProduct,
  deleteProduct,
} = require('../controllers/productController');

const express = require('express');
const router = express.Router();
router.delete('/:id', deleteProduct);
router.get('/', allProducts);
router.post('/', addProduct);


module.exports = router;
