import SupplierService from '../services/supplier.service.js';

async function createSupplier(req, res, next) {
  try {
    let supplier = req.body;
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
      throw new Error('Name, CNPJ, Phone, Email e Address são obrigatórios.');
    }
    supplier = await SupplierService.createSupplier(supplier);
    res.send(supplier);
    logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
  } catch (err) {
    next(err);
  }
}

async function getSuppliers(req, res, next) {
  try {
    res.send(await SupplierService.getSuppliers());
    logger.info('GET /supplier');
  } catch (err) {
    next(err);
  }
}

export default {
  createSupplier,
  getSuppliers,
};
