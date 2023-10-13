import prisma from '../prisma';

const createShoppingList = async (req, res) => {
  const { data } = req.body;
  const result = await prisma.shoppingListOnProduct.create({
    data: {
      data: data,
    },
  });
  res.status(200).json(result);
};
