const data = require("./data/trips");

exports.seed = function(knex, Promise) {
  return knex("trip")
    .del()
    .then(function() {
      return knex("trip").insert(data);
    });
};
