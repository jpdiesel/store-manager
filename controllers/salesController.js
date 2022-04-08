const { getAllSales, getSalesById } = require('../models/sales');
const { createSale } = require('../services/salesService');

const listAllSales = async (_req, res) => {
  try {
    const data = await getAllSales();
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
};

const listSalesById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getSalesById(id);
    if (!data) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
};

const createSalesController = async (req, res) => {
  try {
    const result = await createSale(req.body);
    return res.status(201).json(result);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { listAllSales, listSalesById, createSalesController };