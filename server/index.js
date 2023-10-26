const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const productRoute = require('./routes/productRoute');
const categoryRoute = require('./routes/categoryRoute');
const shoppingListRoute = require('./routes/shoppingListRoute');
const { shoppingList } = require('./controllers/prismaClient');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/products', productRoute);
app.use('/category', categoryRoute);
app.use('/shoppingList',shoppingListRoute);
const port = process.env.PORT || 8000;

app.use('/', (req, res) => {
  res.json('Welcometo my app');
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

