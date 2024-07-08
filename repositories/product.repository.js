import connect from './db.js';

async function insertProduct(product) {
  const conn = await connect();
  try {
    const sql =
      'INSERT INTO products(name, description, value, stock, supplier_id) VALUES $1, $2, $3, $4, $5 RETURNING *';
    const values = [
      product.name,
      product.description,
      product.value,
      product.stock,
      product.supplier_id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  insertProduct,
};
