
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function (table) {
    table.increments('id');
    table.integer('user_id')
    table.string('name')
    table.string('type')

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items');
};

