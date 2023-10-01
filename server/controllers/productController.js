const prisma = require('./prismaClient');

const allProducts = async (req, res) => {
  const result = await prisma.product.findMany({});

  res.status(200).json(result);
};

const addProduct = async (req, res) => {
  try {
    const { catId, product_name } = req.body;
    const productAdded = await prisma.product.create({
      data: {
        catId: parseInt(catId),
        product_name: product_name,
      },
    });
    res.status(200).json({ message: 'Product added successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { allProducts, addProduct };
