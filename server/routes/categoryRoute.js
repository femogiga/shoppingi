const { categoryproduct } = require('../controllers/categoryController');

const router = require('express').Router();

router.get('/', categoryproduct);

module.exports = router;
