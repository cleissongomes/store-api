import ProductService from '../services/product.service.js';

async function createProduct(req, res, next) {
  try {
    let product = req.body;
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
    logger.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    res.send(await ProductService.getProducts());
    logger.info('GET /product');
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    res.send(await ProductService.getProduct(req.params.id));
    logger.info('GET /product/:id');
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    let product = req.body;
    if (
      !product.product_id ||
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplier_id
    ) {
      throw new Error(
        'Product_id, Name, Description, Value, Stock e Supplier_id são obrigatórios.'
      );
    }
    product = await ProductService.updateProduct(product);
    res.send(product);
    logger.info(`PUT /product - ${JSON.Stringfy(product)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    await ProductService.deleteProduct(req.params.id);
    res.send('O produto foi excluído com sucesso!');
    logger.info('DELETE /product');
  } catch (err) {
    next(err);
  }
}

export default {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
