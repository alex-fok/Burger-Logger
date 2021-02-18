const mysql = require("mysql2");

const config = process.env.jawsDB || (() => {
    require('dotenv').config();
    return {
        port: process.env.BURGER_PORT,
        host: process.env.BURGER_HOST,
        user: process.env.BURGER_USER,
        password: process.env.BURGER_PASS,
        database: process.env.BURGER_DB
    }
})();
const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connection: connected as id " + connection.threadId);
})

module.exports = connection.promise();