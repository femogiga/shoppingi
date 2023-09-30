const prisma = require('./prismaClient')


const allProducts = async (req, res) => {
    const result = await prisma.product.findMany({})
    
    res.status(200).json(result)
}



module.exports = { allProducts };
