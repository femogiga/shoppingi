// const prisma = require('./prismaClient');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB
// use `prisma` in your application to read and write data in your DB
/*
* *  getCategories find or create the category

*/
const getCategories = async (categoryName) => {
  const result = await prisma.category.upsert({
    where: {
      category_name: categoryName,
    },
    create: { category_name: categoryName },
    update: {},
  });
  // console.log('====>', result);
  return result.id;
};

const allProducts = async (req, res, next) => {
  const result = await prisma.product.findMany({});

  res.status(200).json(result);
};

const addProduct = async (req, res) => {
  try {
    // console.log(req.body);
    const { category_name, product_name, note, imageUrl } = req.body;

    const forCat = await getCategories(category_name);
    // console.log('======>for cat', forCat);
    const productAdded = await prisma.product.create({
      data: {
        catId: parseInt(forCat),
        product_name: product_name,
        imageUrl: imageUrl,
        note: note,
      },
    });
    // console.log(forCat);
    res.status(200).json({ message: 'Product added successfully' });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });
    // console.log(product)
    res.status(200).json({ message: 'Successfully deleted' });
  } catch (err) {
    // console.error(err);
    res.status(500).json(err);
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = { allProducts, addProduct, deleteProduct };
