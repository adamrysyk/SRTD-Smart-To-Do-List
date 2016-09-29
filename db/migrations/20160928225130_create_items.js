
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function (table) {
    table.increments('items_id');
    table.integer('list_id').unsigned()
    table.foreign('list_id').references('lists.list_id')
    table.string('list_kind')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
