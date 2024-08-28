exports.up = function (knex) {
  return knex.schema.createTable("colors", function (table) {
    table.increments("id");
    table.string("red", 255).notNullable();
    table.string("green", 255).notNullable();
    table.string("blue", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("colors");
};
