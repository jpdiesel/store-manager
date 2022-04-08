const express = require('express');

const {
  listAllSales,
  listSalesById,
  createSalesController,
  editSaleController,
} = require('../controllers/salesController');

const validations = require('../middlewares/salesMid');

const routes = express.Router();

routes.get('/', listAllSales);
routes.get('/:id', listSalesById);

routes.post('/', validations, createSalesController);
routes.put('/:id', validations, editSaleController);

module.exports = routes;