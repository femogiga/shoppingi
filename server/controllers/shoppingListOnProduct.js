const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const allList = async (req, res) => {
  try {
    const result = await prisma.shoppingListOnProduct.findMany({
      include: {
        product: true,
        shoppingList: true,

      },
     
    });
    console.log('result=', result);

    const groupedData = {};
    result.forEach((entry) => {
      const shoppingListId = entry.shoppingListId;
      if (groupedData[shoppingListId]) {
        groupedData[shoppingListId].push(entry);
      } else {
        groupedData[shoppingListId] = [entry];
      }
    });
    console.log('groupedData=', groupedData);
    res.status(200).json(groupedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = { allList };
