const { getAllProducts, getProductById } = require('../models/products');

const listAllProducts = async () => {
  const products = await getAllProducts();
  return products;
};

const listProductById = async (id) => {
  const product = await getProductById(id);
  if (!product) return null;
  return product;
};

module.exports = {
  listAllProducts,
  listProductById,
};
