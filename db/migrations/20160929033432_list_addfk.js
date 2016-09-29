
exports.up = function(knex, Promise) {
  return knex.schema.table('lists', function (table) {
    table.foreign('user_id').references('users.user_id').onDelete('cascade')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('lists', function(table) {
    table.dropForeign('user_id');
  });
};
