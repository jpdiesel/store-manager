const validations = (req, res, next) => {
  const invalidQuantity = '"quantity" must be greater than or equal to 1';
  const undefQuantity = '"quantity" is required'; 
  if (!req.body[0].productId) return res.status(400).json({ message: '"productId" is required' });
  if (req.body[0].quantity === undefined) return res.status(400).json({ message: undefQuantity });
  if (req.body[0].quantity <= 0) return res.status(422).json({ message: invalidQuantity });
  next();
};
//
module.exports = { validations };
