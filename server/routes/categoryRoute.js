const {
  categoryproduct,
  getAll,
  createCategory,
} = require('../controllers/categoryController');

const router = require('express').Router();
router.get('/all', getAll);
router.get('/', categoryproduct);
router.post('/', createCategory);

module.exports = router;
