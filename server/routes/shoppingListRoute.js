const { createList } = require('../controllers/shoppingListController');

const router = require('express').Router();




router.post('/', createList);




module.exports =router
