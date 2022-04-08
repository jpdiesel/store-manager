const express = require('express');

const {
  listAllSales,
  listSalesById,
} = require('../controllers/salesController');

const validations = require('../middlewares/salesMid');

const routes = express.Router();

routes.get('/', listAllSales);
routes.get('/:id', listSalesById);
routes.post('/', validations);
routes.put('/:id', validations);

module.exports = routes;