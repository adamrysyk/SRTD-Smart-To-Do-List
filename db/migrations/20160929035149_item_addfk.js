
exports.up = function(knex, Promise) {
  return knex.schema.table('items', function (table) {
    table.foreign('list_id').references('lists.id').onDelete('cascade')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('items', function(table) {
    table.dropForeign('list_id');
  });
};

