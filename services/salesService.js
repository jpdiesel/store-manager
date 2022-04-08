const {
  getAllSales,
  getSalesById,
  createNewSale,
  createSaleProduct,
  updateSale,
} = require('../models/sales');

const listAllSales = async () => {
  const sales = await getAllSales();
  return sales;
};

const listSalesById = async (id) => {
  const sale = await getSalesById(id);
  if (!sale) return null;
  return sale;
};

const createSale = async (sales) => {
  const [sale] = await createNewSale();

  sales.map(async ({ productId, quantity }) => {
    await createSaleProduct(sale, productId, quantity);
  });

  return { id: sale.insertId, itensSold: [...sales] };
};

const update = async (id, productId, quantity) => {
  await updateSale(id, productId, quantity);

  return { saleId: id, itemUpdated: [{ productId, quantity }] };
};

module.exports = {
  listAllSales,
  listSalesById,
  createSale,
  update,
};
