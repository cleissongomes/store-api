import SaleService from '../services/sale.service.js';

async function createSale(req, res, next) {
  try {
    let sale = req.body;
    if (!sale.value || !sale.date || !sale.client_id || !sale.product_id) {
      throw new Error('Value, date, client_id e product_id são obrigatórios!');
    }
    sale = await SaleService.createSale(sale);
    res.send(sale);
    logger.info(`POST /sale - ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}

async function getSales(req, res, next) {
  try {
    res.send(await SaleService.getSales());
    logger.info('GET /sale');
  } catch (err) {
    next(err);
  }
}

export default {
  createSale,
  getSales,
};
