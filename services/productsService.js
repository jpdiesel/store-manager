const productsModel = require('../models/products');

const listAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const listProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) return null;
  return product;
};

const createProduct = async (name, quantity) => {
  const productExistence = await productsModel.verifyProductExistence(name);
  if (productExistence.length >= 1) return null;
  const product = await productsModel.createNewProduct(name, quantity);
  return product;
};

const attProduct = async (name, quantity, id) => {
  const productValid = await productsModel.getProductById(id);
  if (!productValid) return null;
  const product = await productsModel.updateProduct(name, quantity, id);
  return product;
};

const delProduct = async (id) => {
  const validDeletion = await productsModel.getProductById(id);
  if (!validDeletion) return null;
  const product = await productsModel.deleteProduct(id);
  return product;
};

module.exports = {
  listAllProducts,
  listProductById,
  createProduct,
  attProduct,
  delProduct,
};
