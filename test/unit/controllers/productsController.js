const { expect } = require('chai');
const sinon = require('sinon');

const productsServices = require('../../../services/productsService');
const productsController = require('../../../controllers/productsController');

describe('no arquivo productsController', () => {
  const res = {};
  const req = {};
  describe('na função allSales', async () => {
    before(() => {
      req.body = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'listAllProducts').resolves(true);
    });
    after(() => {
      productsServices.listAllProducts.restore();
    });
    it('será testado se o retorno da função está correto', async () => {
      await productsController.getAllProducts(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
  describe('na função salesById', () => {
    before(() => {
      req.body = {};
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'listProductById').resolves(true);
    });
    after(() => {
      productsServices.listProductById.restore();
    });
    it('', async () => {
      await productsController.getProductById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});
