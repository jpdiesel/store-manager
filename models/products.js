const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection
    .execute('SELECT * FROM StoreManager.products;');

  return products;
};

const getProductById = async (id) => {
  const [productsData] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ? ORDER BY id ASC;', [id]);

  if (productsData.length === 0) return null;

  return productsData[0];
};

module.exports = { getAllProducts, getProductById };
