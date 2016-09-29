
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lists').del()
    .then(function () {
      return Promise.all([
        knex('lists').insert({user_id: 1, list_kind: 'MOVIES'}),
        knex('lists').insert({user_id: 1, list_kind: 'BOOKS'}),
        knex('lists').insert({user_id: 1, list_kind: 'RESTAURANTS'}),
        knex('lists').insert({user_id: 2, list_kind: 'MOVIES'}),
        knex('lists').insert({user_id: 2, list_kind: 'BOOKS'}),
        knex('lists').insert({user_id: 2, list_kind: 'RESTAURANTS'}),
        knex('lists').insert({user_id: 3, list_kind: 'MOVIES'}),
        knex('lists').insert({user_id: 3, list_kind: 'BOOKS'}),
        knex('lists').insert({user_id: 3, list_kind: 'RESTAURANTS'})
      ])
    });
};
