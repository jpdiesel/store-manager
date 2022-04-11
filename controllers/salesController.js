const salesServices = require('../services/salesService');

const allSales = async (_req, res) => {
  try {
    const data = await salesServices.listAllSales();
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};

const salesById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await salesServices.listSalesById(id);
    if (!data) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};

const createSalesController = async (req, res) => {
  try {
    const result = await salesServices.createSale(req.body);
    return res.status(201).json(result);
  } catch (e) {
    console.log(e);
  }
};

const editSaleController = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId, quantity } = req.body[0];
    const result = await salesServices.update(id, productId, quantity);
    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { allSales, salesById, createSalesController, editSaleController };