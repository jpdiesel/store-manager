const express = require('express');

const {
  listAllProducts,
  listProductById,
} = require('../controllers/productsController');

const routes = express.Router();

routes.get('/', listAllProducts);
routes.get('/:id', listProductById);

module.exports = routes;