const db = require("../database");

module.exports = {
  find,
};

function find() {
  return db("strains");
}
