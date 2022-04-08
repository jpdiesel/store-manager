const { connection } = require('./connection');

const getAllSales = async () => {
  const query = `
  SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity 
  FROM StoreManager.sales AS s 
  JOIN StoreManager.sales_products AS sp ON sp.sale_id = s.id;
  `;
  const [sales] = await connection
    .execute(query);

  return sales;
};

const getSalesById = async (id) => {
  const [salesData] = await connection
    .execute(`
    SELECT s.date, sp.product_id AS productId, sp.quantity 
    FROM StoreManager.sales AS s 
    JOIN StoreManager.sales_products AS sp ON sp.sale_id = s.id
    WHERE sp.sale_id = ?
    ORDER BY s.id, sp.product_id; `, [id]);

  if (salesData.length === 0) return null;

  return salesData;
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

const updateSale = async (saleId, productId, quantity) => {
  await connection.execute(
    'UPDATE sales_products SET quantity = ?, product_id = ? WHERE sale_id = ?;',
    [quantity, productId, saleId],
  );
};

module.exports = { getAllSales, getSalesById, createNewSale, createSaleProduct, updateSale };
