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

const createNewProduct = async (name, quantity) => {
  const [product] = await connection.execute(`
  INSERT INTO StoreManager.products (name, quantity)
  VALUES (?, ?);`,
  [name, quantity]);

  return product;
};

const verifyProductExistence = async (name) => {
  const [product] = await connection.execute(`
  SELECT * FROM StoreManager.products WHERE name = ?;
  `, [name]);

  return product;
};

const updateProduct = async (name, quantity, id) => {
  const [product] = await connection.execute(`
  UPDATE products SET name = ?, quantity = ? WHERE id = ?;`,
  [name, quantity, id]);

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  verifyProductExistence,
  updateProduct,
};
