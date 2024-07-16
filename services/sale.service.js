import SaleRepository from '../repositories/sale.repository.js';

async function createSale(sale) {
  return await SaleRepository.insertSale(sale);
}

async function getSales() {
  return await SaleRepository.getSales();
}

export default {
  createSale,
  getSales,
};
