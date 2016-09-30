
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function (table) {
    table.increments('id');
    table.integer('list_id').unsigned()
    table.string('name')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items');
};

