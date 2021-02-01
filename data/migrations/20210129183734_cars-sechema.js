exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.string("VIN").unique().notNullable();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.string("mileage").notNullable();
    table.string("transmition");
    table.string("title");
  });
};

exports.down = function (knex) {
  return knex.dropTableIfExists("cars");
};
