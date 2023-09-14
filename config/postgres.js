require("dotenv").config();
const { Client } = require("pg");
const client = new Client({
  host: process.env.PSQL_HOST,
  port: process.env.PSQL_PORT,
  database: process.env.PSQL_DBNAME,
  user: process.env.PSQL_USER,
  password: process.env.PSQL_PWD,
});

client.connect((err) => {
  if (err) {
    console.log('There was a problem', err.message);
  } else {
    console.log('Connected to Postgres');
  }
});

module.exports = client;