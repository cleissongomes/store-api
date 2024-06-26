import SupplierRepository from '../repositories/supplier.repository.js';

async function createSupplier(supplier) {
  return await SupplierRepository.insertSupplier(supplier);
}

export default {
  createSupplier,
};
