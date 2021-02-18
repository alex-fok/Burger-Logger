const {promisify} = require('es6-promisify');
const connection = require('./connection');
const pQuery = promisify(connection.query);

const BURGER_TABLE = "burger";

const orm = {
    addBurger: name => {
        const query = `INSERT INTO ${BURGER_TABLE} SET ?`
        return pQuery(query, {name});
    },
    devourBurger: id => {
        const query = `UPDATE ${BURGER_TABLE} SET status = ?`;
        return pQuery(query, id);
    },
    getBurgers: () => {
        const query = `SELECT * FROM ${BURGER_TABLE}`;
        return pQuery(query, id);
    },
    end: () => connection.end()
}

module.exports = orm;