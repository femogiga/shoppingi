const {
  createList,
  updateShoppingState,
  getActiveList,
  countByMonth,
} = require('../controllers/shoppingListController');
const { allList } = require('../controllers/shoppingListOnProduct');

const router = require('express').Router();

router.get('/activelist', getActiveList);
router.get('/countbymonth', countByMonth)
router.post('/', createList);
router.put('/:id', updateShoppingState);

router.get('/', allList);

module.exports = router;
