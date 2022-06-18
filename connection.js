require('dotenv').config();
const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.DB_PORT || 3308,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// connection.connect(err => console.log(err || 'connected!'))

connection.query = util.promisify(connection.query);

module.exports = connection;