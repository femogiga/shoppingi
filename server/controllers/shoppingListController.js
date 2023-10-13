const prisma = require('./prismaClient');

const createList = async (req, res, next) => {
  const listArray = [];
  if (Object.values(req.body).length <= 0) {
    console.log(Object.values(req.body).length <= 0);
    console.log('nothings sent');
    return;
  }
  const { listName, ...rest } = req.body;
  try {
    // console.log(req.body);
    // console.log('listName',listName);
    // console.log('rest=', rest)

    const list = await prisma.shoppingList.create({
      data: {
        listName: listName,
      },
    });

    for (keys in rest) {
      // console.log('keys', rest[keys])
      const { id, count } = rest[keys];
      console.log(count);
      listArray.push({ productId: id, count: count, shoppingListId: list.id });
    }
    const addToShoppingList = await prisma.shoppingListOnProduct.createMany({
      data: listArray,
    });
    return res.status(201).json(addToShoppingList);

    console.log(listArray);
    // res.status(201).json(list);
  } catch (err) {
    console.log(err.statusCode);
    console.log('====>', err.message);
    res.status(500).json(err);
  }
};

module.exports = { createList };
