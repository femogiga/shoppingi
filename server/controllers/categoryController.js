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
module.exports = { categoryproduct };
