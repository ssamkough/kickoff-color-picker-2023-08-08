exports.up = function (knex) {
  return knex.schema.createTable("palettes", function (table) {
    table.increments("id");
    table.string("name", 255).notNullable().unique();

    table.string("color_one", 255).notNullable();
    table.string("color_two", 255).notNullable();
    table.string("color_three", 255).notNullable();
    table.string("color_four", 255).notNullable();
    table.string("color_five", 255).notNullable();

    // TODO: figure out how to have colors be a foreign key to colors table
    // table.integer("color_one_id").notNullable();
    // table.foreign("color_one_id").references("colors.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("palettes");
};
