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

module.exports = { getAllSales, getSalesById };
