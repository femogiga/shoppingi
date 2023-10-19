const prisma = require('./prismaClient');

const createList = async (req, res, next) => {
  const listArray = [];
  if (Object.values(req.body).length <= 0) {
    console.log(req.body);
    console.log(Object.key(req.body).length <= 0);
    console.log('nothings sent');
    return;
  }
  const { listName, ...rest } = req.body;
  try {
    // console.log(req.body);
    // console.log('listName',listName);
    // console.log('rest=', rest)

    if (req.body.length < 0) {
      return;
    }
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
  } finally {
    await prisma.$disconnect();
  }
};

const updateShoppingState = async (req, res) => {
  // const { id } = req.params;
  const { id, progress } = req.body;
  try {
    console.log('progress', progress);

    const result = await prisma.shoppingList.update({
      where: {
        id: parseInt(id),
      },
      data: {
        progress: progress,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getActiveList = async (req, res) => {
  try {
    const activeList = await prisma.shoppingList.findMany({
      where: {
        progress: 'Active',
      },
    });
    console.log(activeList);
    res.status(200).json(activeList);
  } catch (err) {
    res.status(500).json(activeList);
  }
};

module.exports = { createList, updateShoppingState, getActiveList };
