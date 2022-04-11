const { expect } = require('chai');
const sinon = require('sinon');

const salesServices = require('../../../services/salesService');
const salesController = require('../../../controllers/salesController');

describe('no arquivo salesService', () => {
  const res = {};
  const req = {};
  describe('na função allSales', async () => {
    before(() => {
      req.body = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesServices, 'listAllSales').resolves(true);
    });
    after(() => {
      salesServices.listAllSales.restore();
    });
    it('será testado se o retorno da função está correto', async () => {
      await salesController.allSales(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
  describe('na função salesById', () => {
    before(() => {
      req.body = {};
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesServices, 'listSalesById').resolves(true);
    });
    after(() => {
      salesServices.listSalesById.restore();
    });
    it('', async () => {
      await salesController.salesById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});
