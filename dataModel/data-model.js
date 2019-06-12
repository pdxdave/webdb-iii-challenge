const knex = require('knex')

// bring in knex file
const knexConfig = require('../knexfile.js')

// bring in model
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    update,
    add,
    remove
}

function find(){
    return db('cohorts')
}

function findById(id){
    return db('cohorts')
    .where({id})
}

function add(newPost){
    return db('cohorts')
    .insert(newPost)
}

function update(id, change){
    return db('cohorts')
    .where({id})
    .update(change)
}

function remove(id){
    return db('cohorts')
    .where({id})
    .del()
}