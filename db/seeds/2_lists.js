
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lists').del()
    .then(function () {
      return Promise.all([
        knex('lists').insert({list_id: 1, user_id: 1, list_kind: 'MOVIES'}),
        knex('lists').insert({list_id: 2, user_id: 1, list_kind: 'BOOKS'}),
        knex('lists').insert({list_id: 3, user_id: 1, list_kind: 'RESTAURANTS'}),
        knex('lists').insert({list_id: 4, user_id: 2, list_kind: 'MOVIES'}),
        knex('lists').insert({list_id: 5, user_id: 2, list_kind: 'BOOKS'}),
        knex('lists').insert({list_id: 6, user_id: 2, list_kind: 'RESTAURANTS'}),
        knex('lists').insert({list_id: 7, user_id: 3, list_kind: 'MOVIES'}),
        knex('lists').insert({list_id: 8, user_id: 3, list_kind: 'BOOKS'}),
        knex('lists').insert({list_id: 9, user_id: 3, list_kind: 'RESTAURANTS'})
      ])
    });
};
