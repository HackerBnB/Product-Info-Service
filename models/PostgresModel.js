const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'ricardo',
  password: null,
  database: 'postgres',
  port: 5432,
});

pool.connect();

module.exports = {
  pool,
};
