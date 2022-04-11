const salesModel = require('../models/sales');

const listAllSales = async () => {
  const sales = await salesModel.getAllSales();
  console.log(sales);
  return sales;
};

const listSalesById = async (id) => {
  const sale = await salesModel.getSalesById(id);
  if (!sale) return null;
  return sale;
};

const createSale = async (sales) => {
  const sale = await salesModel.createNewSale();
  await Promise.all(sales.map(async (param) => {
    await salesModel.createSaleProduct(sale.insertId, param.productId, param.quantity);
  }));
 
  return { id: sale.insertId, itemsSold: sales };
};

const update = async (id, productId, quantity) => {
  await salesModel.updateSale(id, productId, quantity);

  return { saleId: id, itemUpdated: [{ productId, quantity }] };
};

module.exports = {
  listAllSales,
  listSalesById,
  createSale,
  update,
};
