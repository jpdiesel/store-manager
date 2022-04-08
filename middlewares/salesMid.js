const validations = (req, res) => {
  const { productId, quantity } = req.body;
  const invalidQuantity = '"quantity" must be greater than or equal to 1';
  if (!productId) return res.status(400).json({ message: '"productId" is required' });
  if (!quantity) return res.status(400).json({ message: '"quantity" is required' });
  if (quantity <= 0) return res.status(422).json({ message: invalidQuantity });
};

module.exports = { validations };