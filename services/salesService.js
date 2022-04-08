const { getAllSales, getSalesById } = require('../models/sales');

const listAllSales = async () => {
  const sales = await getAllSales();
  return sales;
};

const listSalesById = async (id) => {
  const sale = await getSalesById(id);
  if (!sale) return null;
  return sale;
};

module.exports = {
  listAllSales,
  listSalesById,
};
