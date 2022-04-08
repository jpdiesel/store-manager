const express = require('express');

const {
  listAllSales,
  listSalesById,
} = require('../controllers/salesController');

const routes = express.Router();

routes.get('/', listAllSales);
routes.get('/:id', listSalesById);

module.exports = routes;