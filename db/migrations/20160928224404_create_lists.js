
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lists', function (table) {
    table.increments('id');
    table.integer('user_id').unsigned()
    table.string('list_kind')
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('lists')
  ])
};
