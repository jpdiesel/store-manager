const productsService = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  try {
    const data = await productsService.listAllProducts();
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await productsService.listProductById(id);
    if (!data) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};

const createProductController = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const result = await productsService.createProduct(name, quantity);
    if (!result) return res.status(409).json({ message: 'Product already exists' });
    const jsonResult = {
      id: result.insertId,
      name,
      quantity,
    };
    return res.status(201).json(jsonResult);
  } catch (e) {
    console.log(e);
  }
};

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const result = await productsService.attProduct(name, quantity, id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json({ name, quantity, id });
  } catch (e) {
    console.log(e);
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productsService.delProduct(id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(204).end();
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProductController,
  updateProductController,
  deleteProductController,
};
