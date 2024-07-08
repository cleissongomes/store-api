import ProductService from '../services/product.service.js';

async function createProduct(req, res, next) {
  try {
    const product = req.body;
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplier_id
    ) {
      throw new Error(
        'Name, Description, Value, Stock e Supplier_id são obrigatórios.'
      );
    }
    product = await ProductService.createProduct(product);
    res.send(product);
    loggers.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createProduct,
};
