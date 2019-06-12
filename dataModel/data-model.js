const knex = require('knex')

// setup config for knex
const config = {
    client: 'sqlite3',
    connection: {
        filename: '.data/something'
    },
    useNullAsDefault: true
}

const db = knex(config)

module.exports = {
    find,
    findById,
    update,
    add,
    remove
}

function find(){
    return db('something')
}

function findById(id){
    return db('something')
    .where({id})
}

function add(newPost){
    return db('something')
    .where({id})
}

function update(id, change){
    return db('something')
    .where({id})
    .update(change)
}

function remove(id){
    return db('something')
    .where({id})
    .del()
}