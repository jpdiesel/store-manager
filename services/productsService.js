const {
  getAllProducts, 
  getProductById,
  createNewProduct,
  verifyProductExistence,
  updateProduct,
  deleteProduct,
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
  if (productExistence.length >= 1) return null;
  const product = await createNewProduct(name, quantity);
  return product;
};

const attProduct = async (name, quantity, id) => {
  const productValid = await getProductById(id);
  if (!productValid) return null;
  const product = await updateProduct(name, quantity, id);
  return product;
};

const delProduct = async (id) => {
  const validDeletion = await getProductById(id);
  if (!validDeletion) return null;
  const product = await deleteProduct(id);
  return product;
};

module.exports = {
  listAllProducts,
  listProductById,
  createProduct,
  attProduct,
  delProduct,
};
