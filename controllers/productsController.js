const { getAllProducts, getProductById } = require('../services/productsService');

const listAllProducts = async (_req, res) => {
  try {
    const data = await getAllProducts();
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
};

const listProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getProductById(id);
    if (!data) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).end;
  }
};

module.exports = { listAllProducts, listProductById };
