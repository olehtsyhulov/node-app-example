const { Client } = require('pg');

const pgClient = new Client({
  user: 'username',
  host: 'localhost',
  database: 'users',
  password: 'password',
  port: 5432,
});

pgClient.connect().then(() => console.log('CONNECT TO DB'));

module.exports = pgClient;
