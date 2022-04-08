const {
  listAllProducts,
  listProductById,
  createProduct,
  attProduct,
  delProduct,
} = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  try {
    const data = await listAllProducts();
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await listProductById(id);
    if (!data) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).end;
  }
};

const createProductController = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const result = await createProduct(name, quantity);
    if (!result) return res.status(409).json({ message: 'Product already exists' });
    return res.status(201).json(result);
  } catch (e) {
    console.log(e);
    return res.status(500).end;
  }
};

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const result = await attProduct(name, quantity, id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json({ name, quantity, id });
  } catch (e) {
    console.log(e);
    return res.status(500).end;
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await delProduct(id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(204).end;
  } catch (e) {
    console.log(e);
    return res.status(500).end;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProductController,
  updateProductController,
  deleteProductController,
};
