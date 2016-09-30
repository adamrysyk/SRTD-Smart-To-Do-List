exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('username');
    table.string('email');
    table.string('password');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
