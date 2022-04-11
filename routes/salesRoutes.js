const express = require('express');

const {
  allSales,
  salesById,
  createSalesController,
  editSaleController,
} = require('../controllers/salesController');

const { validations } = require('../middlewares/salesMid');

const routes = express.Router();

routes.get('/', allSales);
routes.get('/:id', salesById);

routes.post('/', validations, createSalesController);
routes.put('/:id', validations, editSaleController);

module.exports = routes;