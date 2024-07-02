import SupplierRepository from '../repositories/supplier.repository.js';

async function createSupplier(supplier) {
  return await SupplierRepository.insertSupplier(supplier);
}

async function getSuppliers() {
  return await SupplierRepository.getSuppliers();
}

export default {
  createSupplier,
  getSuppliers,
};
