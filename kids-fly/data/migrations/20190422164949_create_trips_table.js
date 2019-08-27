exports.up = function(knex, Promise) {
  return knex.schema.createTable("trip", table => {
    table
      .increments("id")
      .unique()
      .primary();
    table.integer("user_id").unsigned();
    table
      .foreign("user_id")
      .references("user.id")
      .onDelete("CASCADE");
    table.string("airport");
    table.string("airline");
    table.datetime("departure_time");
    table.integer("kids");
    table
      .boolean("is_arriving")
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("trip");
};
