const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
  // user: "postgres",
  // password: "postgres",
  // host: "localhost",
  // port: 5432,
  // database: "optiplan",
  user: "postgres.ywesugobnkedylbyfppg",
  password: process.env.DB_P,
  host: "aws-0-ap-southeast-1.pooler.supabase.com",
  port: 6543,
  database: "postgres"
});

module.exports = pool;
