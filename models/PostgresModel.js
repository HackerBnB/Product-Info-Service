const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTHOST,
  user: process.env.POSTUSER,
  password: process.env.POSTPASS,
  database: 'postgres',
  port: process.env.POSTPORT,
});

pool.connect();

module.exports = {
  pool,
};
