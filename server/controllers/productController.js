const prisma = require('./prismaClient');

const allProducts = async (req, res) => {
  const result = await prisma.product.findMany({});

  res.status(200).json(result);
};

const addProduct = async (req, res) => {
  try {
    const { catId, product_name, note, imageUrl } = req.body;
    const productAdded = await prisma.product.create({
      data: {
        catId: parseInt(catId),
        product_name: product_name,
        imageUrl: imageUrl,
        note: note,
      },
    });
    res.status(200).json({ message: 'Product added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { allProducts, addProduct };
