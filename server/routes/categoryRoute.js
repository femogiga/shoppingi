const {
  categoryproduct,
  getAll,
} = require('../controllers/categoryController');

const router = require('express').Router();
router.get('/all', getAll);
router.get('/', categoryproduct);

module.exports = router;
