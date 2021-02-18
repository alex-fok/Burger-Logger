const orm = require('../config/orm');

const burger = {
    all: () => orm.selectAll(),
    add: (name) => orm.addOne(name),
    devour: (id) => orm.updateOne(id),
    end: () => orm.end()
}

module.exports = burger;