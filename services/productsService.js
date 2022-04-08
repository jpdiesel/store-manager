const {
  getAllProducts, 
  getProductById,
  createNewProduct,
  verifyProductExistence,
  updateProduct,
} = require('../models/products');

const listAllProducts = async () => {
  const products = await getAllProducts();
  return products;
};

const listProductById = async (id) => {
  const product = await getProductById(id);
  if (!product) return null;
  return product;
};

const createProduct = async (name, quantity) => {
  const productExistence = await verifyProductExistence(name);
  if (productExistence) return null;
  const product = await createNewProduct(name, quantity);
  return product;
};

const attProduct = async (name, quantity, id) => {
  const productValid = await getProductById(id);
  if (!productValid) return null;
  const product = await updateProduct(name, quantity, id);
  return product;
};

module.exports = {
  listAllProducts,
  listProductById,
  createProduct,
  attProduct,
};
