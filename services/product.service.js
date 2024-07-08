import ProductRepository from '../repositories/product.repository.js';

async function createProduct(product) {
  return await ProductRepository.insertProduct(product);
}

export default {
  createProduct,
};
