const { expect } = require('chai');
const sinon = require('sinon');

const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/sales');

const mockAllSales = [
  {
    saleId: 1,
    date: '2022-04-11T01:41:21.000Z',
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: '2022-04-11T01:41:21.000Z',
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: '2022-04-11T01:41:21.000Z',
    productId: 3,
    quantity: 15
  }
];

const mockedIdSales = [
  {
    saleId: 1,
    date: '2022 - 04 - 11T03: 03: 40.000Z',
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: '2022 - 04 - 11T03: 03: 40.000Z',
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: '2022 - 04 - 11T03: 03: 40.000Z',
    productId: 3,
    quantity: 15
  }
]

describe('no arquivo salesService', () => {
  describe('testando a função listAllSales', async () => {
    before(() => {
      sinon.stub(salesModel, 'getAllSales').resolves(mockAllSales);
    });
    after(() => {
      salesModel.getAllSales.restore();
    });
    it('verifica se o retorno da função está correto', async () => {
      const result = await salesService.listAllSales();

      expect(result).to.be.an('array');
      expect(result[0]).to.be.an('object');
      expect(result[0]).to.have.property('saleId');
      expect(result[0]).to.have.property('date');
      expect(result[0]).to.have.property('productId');
      expect(result[0]).to.have.property('quantity');
    });
  });
  describe('testando a função getSalesById', async () => {
    before(() => {
      sinon.stub(salesModel, 'getSalesById').resolves(mockedIdSales);
    });
    after(() => {
      salesModel.getSalesById.restore();
    });
    it('verifica se o retorno da função está correto após passar um parametro válido', async () => {
      const result = await salesService.listSalesById(1)

      expect(result).to.be.an('array');
      expect(result[0]).to.have.property('saleId');
      expect(result[0]).to.have.property('date');
      expect(result[0]).to.have.property('productId');
      expect(result[0]).to.have.property('quantity');
    });
  });
});
