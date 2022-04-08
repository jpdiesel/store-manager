const validations = (req, res) => {
  const { name, quantity } = req.body;
  const nameNotLongEnough = '"name" length must be at least 5 characters long';
  const invalidQuantity = '"quantity" must be greater than or equal to 1';
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 5) return res.status(422).json({ message: nameNotLongEnough });
  if (!quantity) return res.status(400).json({ message: '"quantity" is required' });
  if (quantity <= 0) return res.status(422).json({ message: invalidQuantity });
};

module.exports = { validations };
