const { createList } = require('../controllers/shoppingListController');
const { allList } = require('../controllers/shoppingListOnProduct');

const router = require('express').Router();

router.post('/', createList);
router.get('/', allList);

module.exports = router;
