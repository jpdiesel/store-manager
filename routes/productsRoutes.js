const express = require('express');

const {
  getAllProducts,
  getProductById,
  createProductController,
  updateProductController,
  deleteProductController,
} = require('../controllers/productsController');

const { validations } = require('../middlewares/productsMid');

const routes = express.Router();

routes.get('/', getAllProducts);
routes.get('/:id', getProductById);

routes.post('/', validations, createProductController);
routes.put('/:id', validations, updateProductController);

routes.delete('/:id', deleteProductController);

module.exports = routes;