import SaleRepository from '../repositories/sale.repository.js';

async function createSale(sale) {
  return await SaleRepository.insertSale(sale);
}

export default {
  createSale,
};
