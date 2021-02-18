const mysql = require("mysql");

const config = process.env.jawsDB || (() => {
    require('dotenv').config();
    return {
        port: BURGER_PORT,
        host: BURGER_HOST,
        user: BURGER_ROOT,
        password: BURGER_PASS,
        database: BURGER_DB
    }
})();

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connection: connected as id " + connection.threadId);
})

module.exports = connection;