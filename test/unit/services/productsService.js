const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/products')

const allMockedProducts = [
  { id: 1, name: 'Martelo de Thor', quantity: 10 },
  { id: 2, name: 'Traje de encolhimento', quantity: 20 },
  { id: 3, name: 'Escudo do Capitão América', quantity: 30 }
];

const mockedIdProducts = { id: 1, name: 'Martelo de Thor', quantity: 10 };

const productResult = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 5,
  info: '',
  serverStatus: 2,
  warningStatus: 0
}

describe('no documento productsService', () => {
  describe('testando a função getAllProducts', () => {
    before(() => {
      sinon.stub(productsModel, 'getAllProducts').resolves(allMockedProducts);
    });
    after(() => {
      productsModel.getAllProducts.restore();
    });
    it('verifica se o retorno da função está correto', async () => {
      const result = await productsService.listAllProducts();

      expect(result).to.be.an('array');
      expect(result[0]).to.have.property('id');
      expect(result[0]).to.have.property('name');
      expect(result[0]).to.have.property('quantity');
      expect(result[0]).property('id').to.be.equals(1);
      expect(result[0]).property('name').to.be.equals('Martelo de Thor');;
      expect(result[0]).property('quantity').to.be.equals(10);
    });
  });
  describe('testando a função getProductById', () => {
    before(() => {
      sinon.stub(productsModel, 'getProductById').resolves(mockedIdProducts);
    });
    after(() => {
      productsModel.getProductById.restore();
    });
    it('verifica se o retorno da função está correto após passar um parametro válido', async () => {
      const result = await productsService.listProductById(1)

      expect(result).to.be.an('object');
      expect(result).to.have.property('id');
      expect(result).to.have.property('name');
      expect(result).to.have.property('quantity');
      expect(result.id).to.be.equals(1);
      expect(result.name).to.be.equals('Martelo de Thor');
      expect(result.quantity).to.be.equals(10);
    });
  });
  describe('testando a função getProductById', () => {
    before(() => {
      sinon.stub(productsModel, 'getProductById').resolves(null);
    });
    after(() => {
      productsModel.getProductById.restore();
    });
    it('verifica se o retorno da função está errado após passar um parametro inválido', async () => {
      const result = await productsService.listProductById(999);

      expect(result).to.be.equals(null);
    });
  });
  describe('testando a função attProduct', () => {
    before(() => {
      sinon.stub(productsModel, 'getProductById').resolves(null);
    });
    after(() => {
      productsModel.getProductById.restore();
    });
    it('verifica se a função retorna nulo ao tentar atualizar um produto inválido', async () => {
      const result = await productsService.attProduct('produto inexistente', 20, 999);

      expect(result).to.be.equals(null);
    });
  });
  describe('testando a função delProduct', () => {
    before(() => {
      sinon.stub(productsModel, 'getProductById').resolves(null);
    });
    after(() => {
      productsModel.getProductById.restore();
    });
    it('verifica se a função retorna nulo ao tentar deletar um produto inválido', async () => {
      const result = await productsService.delProduct(999);

      expect(result).to.be.equals(null);
    });
  });
});
