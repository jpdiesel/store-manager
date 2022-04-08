const validations = (req, res, next) => {
  const { productId, quantity } = req.body[0];
  const invalidQuantity = '"quantity" must be greater than or equal to 1';
  if (!productId) return res.status(400).json({ message: '"productId" is required' });
  if (quantity === undefined) return res.status(400).json({ message: '"quantity" is required' });
  if (quantity <= 0) return res.status(422).json({ message: invalidQuantity });
  next();
};

module.exports = { validations };
