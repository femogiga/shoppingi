const prisma = require('./prismaClient');

const categoryproduct = async (req, res) => {
  try {
    const result = await prisma.category.findMany({
      select: {
        category_name: true,
        products: true,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

const getAll = async (req, res) => {
  try {
    const results = await prisma.category.findMany({});
    // console.log(results)
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ err: error });
  } finally {
    await prisma.$disconnect();
  }
};
module.exports = { categoryproduct, getAll };
