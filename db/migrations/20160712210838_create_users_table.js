exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('user_id');
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
