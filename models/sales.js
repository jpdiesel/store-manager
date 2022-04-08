const connection = require('./connection');

const getAllSales = async () => {
  const query = `
  SELECT s.id, s.date, sp.product_id, sp.quantity 
  FROM StoreManager.sales AS s 
  JOIN StoreManager.product_sales AS sp ON sp.sale_id = s.id;
  `;
  const [sales] = await connection
    .execute(query);

  return sales;
};

const getSalesById = async (id) => {
  const [salesData] = await connection
    .execute(`
    SELECT s.id, s.date, sp.product_id, sp.quantity 
    FROM StoreManager.sales AS s 
    JOIN StoreManager.product_sales AS sp ON sp.sale_id = s.id
    WHERE s.id = ?
    ORDER BY s.id ASC;`, [id]);

  if (salesData.length === 0) return null;

  return salesData[0];
};

const createNewSale = async () => {
  const [sale] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );

  return sale;
};

const createSaleProduct = async (saleId, productId, quantity) => {
  const [sale] = await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`,
    [saleId, productId, quantity],
  );

  return sale;
};

module.exports = { getAllSales, getSalesById, createNewSale, createSaleProduct };
