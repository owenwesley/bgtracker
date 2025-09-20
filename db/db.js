const mysql = require('mysql');
//require('dotenv').config();

const connection = {
    connectionLimit: 10000000,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB,
    multipleStatements: true,
}

const bgtracker = mysql.createPool({
    ...connection,
    database: 'bgtracker',
})

bgtracker.getConnection((err, connection) => {
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
        console.log('bgtracker connected successfully');
    }
    if (connection) connection.release();
    return;
});

module.exports = { bgtracker }