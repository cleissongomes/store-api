import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      'postgres://xdlezwnr:R7olnOB9UOIMoQDoYmBTeIeYXjHgIlvd@castor.db.elephantsql.com/xdlezwnr',
  });
  global.connection = pool;
  return pool.connect();
}

export default connect;
