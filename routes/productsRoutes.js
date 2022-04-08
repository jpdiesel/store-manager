const express = require('express');

const {
  listAllProducts,
  listProductById,
} = require('../controllers/productsController');

const validations = require('../middlewares/productsMid');

const routes = express.Router();

routes.get('/', listAllProducts);
routes.get('/:id', listProductById);
routes.post('/', validations);
routes.put('/:id', validations);

module.exports = routes;