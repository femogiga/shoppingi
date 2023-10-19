const {
  createList,
  updateShoppingState,
  getActiveList,
} = require('../controllers/shoppingListController');
const { allList } = require('../controllers/shoppingListOnProduct');

const router = require('express').Router();

router.get('/activelist', getActiveList);
router.post('/', createList);
router.put('/:id', updateShoppingState);

router.get('/', allList);

module.exports = router;
