const { PrismaClient } = require('@prisma/client/edge');

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

const createList = async (req, res, next) => {
  const listArray = [];
  if (Object.values(req.body).length <= 0) {
    // console.log(req.body);
    // console.log(Object.key(req.body).length <= 0);
    // console.log('nothings sent');
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
      // console.log(count);
      listArray.push({ productId: id, count: count, shoppingListId: list.id });
    }
    const addToShoppingList = await prisma.shoppingListOnProduct.createMany({
      data: listArray,
    });
    return res.status(201).json(addToShoppingList);

    // console.log(listArray);
    // res.status(201).json(list);
  } catch (err) {
    // console.log(err.statusCode);
    // console.log('====>', err.message);
    res.status(500).json(err);
  } finally {
    await prisma.$disconnect();
  }
};

const updateShoppingState = async (req, res) => {
  // const { id } = req.params;
  const { id, progress } = req.body;
  try {
    // console.log('progress', progress);

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
    // console.log(err);
    res.status(500).json(err);
  }
};

const getActiveList = async (req, res) => {
  try {
    const activeList = await prisma.shoppingList.findMany({
      where: {
        progress: 'Active',
      },
      include: {
        products: {
          include: {
            product: {
              include: {
                cat: true,
              },
            },
          },
        },
      },
    });

    // console.log(activeList);
    res.status(200).json(activeList);
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
};

// const countByMonth = async (req, res) => {
//   const result = await prisma.shoppingList.groupBy({
//     by: 'createdAt'
//     //   include: {
//     //     shoppingListOnProduct: true,
//     //   },
//     // });
//   })
//   // // console.log('chartData=====>', result);
//   res.status(200).json(result);
// };

const countByMonth = async (req, res) => {
  const result = await prisma.shoppingList.findMany({
    select: {
      id: true,
      listName: true,
      createdAt: true,
      products: {
        select: {
          count: true,
          product: {
            select: {
              product_name: true,
              cat: {
                select: {
                  category_name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const groupedData = {};
  result.forEach((item) => {
    const createdDate = new Date(item.createdAt);
    const month = createdDate.toLocaleString('default', { month: 'long' });
    if (!groupedData[month]) {
      groupedData[month] = 0;
    }
    groupedData[month] += item.products.reduce(
      (acc, curr) => acc + curr.count,
      0
    );
  });

  const data = [];
  for (const key in groupedData) {
    data.push({ name: key, items: groupedData[key] });
  }

  const sortedData = data.sort((a, b) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames.indexOf(a.name) - monthNames.indexOf(b.name);
  });

  // console.log(sortedData);
  res.status(200).json(sortedData);
};

// Perform grouping and summing here (JavaScript code).
// You can use your result data to group and sum as required.

module.exports = {
  createList,
  updateShoppingState,
  getActiveList,
  countByMonth,
};
