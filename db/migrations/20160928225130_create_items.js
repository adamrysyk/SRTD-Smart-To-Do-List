
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function (table) {
    table.increments('items_id');
    table.integer('list_id').unsigned()
    table.string('list_kind')
    table.string('items')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items');
};

