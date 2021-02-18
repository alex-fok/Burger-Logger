const connection = require('./connection');
const BURGER_TABLE = "burgers";

const orm = {
    selectAll: () => {
        const query = `SELECT * FROM ${BURGER_TABLE};`;
        return connection.query(query);
    },
    addOne: name => {
        const query = `INSERT INTO ${BURGER_TABLE} SET ?;`
        return connection.query(query, {burger_name: name});
    },
    updateOne: id => {
        const query = `UPDATE ${BURGER_TABLE} SET devoured = ? WHERE id = ?;`;
        return connection.query(query, [1, id.toString()])
    }
}

module.exports = orm;