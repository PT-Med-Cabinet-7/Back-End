const db = require("../database/dbConfig.js")

module.exports = {
  add,
  getAll,
  find,
  findBy,
  findById,
  update,
  remove
};

function add(user) {
  return db("users").insert(user)
}

function getAll() {
  return db("users")
}

function find() {
  return db("users").select("id", "username", "email")
}

function findBy(username) {
  return db("users").where(username)
}

function findById(id) {
  return db("users").where({ id }).first();
}

function findBy(filter) {
  return db("users")
    .select("id", "username", "password")
    .where(filter)
}

async function update(changes, id) {
  return db("users")
    .where({ id })
    .update(changes, "*")
}

function remove(id) {
  return db('users')
    .where({ id: id })
    .del()
}

