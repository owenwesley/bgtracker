const mysql = require('mysql');
//require('dotenv').config();

const connection = mysql.createPool({
  connectionLimit: 10000000,
  host: process.env.DB_HOST,// || `74.208.32.246`,
  user: process.env.DB_USER,// || `owenwesley1976`,
  password: process.env.DB_PASSWORD,// || `wesleyTeresa@200120`,
  port: process.env.DB_PORT,// || 3306,
  database: process.env.DB,// || `bgtracker`,
  multipleStatements: true,
});

connection.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  } else {
    console.log('MySql connected successfully');
  }
  if (connection) connection.release();
  return;
});

module.exports = connection;
