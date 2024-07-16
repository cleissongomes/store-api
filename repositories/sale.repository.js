import connect from './db.js';

async function insertSale(sale) {
  const conn = await connect();
  try {
    const sql =
      'INSERT INTO sales(value, date, client_id, product_id) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [sale.value, sale.date, sale.client_id, sale.product_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getSales() {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM sales');
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  insertSale,
  getSales,
};
