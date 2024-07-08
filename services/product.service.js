import ProductRepository from '../repositories/product.repository.js';

async function createProduct(product) {
  return await ProductRepository.insertProduct(product);
}

async function getProducts() {
  return await ProductRepository.getProducts();
}

async function getProduct(id) {
  return await ProductRepository.getProduct(id);
}

export default {
  createProduct,
  getProducts,
  getProduct,
};
