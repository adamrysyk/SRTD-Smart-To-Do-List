
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert({list_id: 1, list_kind: 'MOVIES', items: 'Mr. Bean'}),
        knex('items').insert({list_id: 1, list_kind: 'BOOKS', items: 'Harry Potter'}),
        knex('items').insert({list_id: 1, list_kind: 'RESTAURANTS', items: 'Georges Diner'}),
        knex('items').insert({list_id: 2, list_kind: 'MOVIES', items: 'Star Wars'}),
        knex('items').insert({list_id: 2, list_kind: 'BOOKS', items: 'Lord of the Rings'}),
        knex('items').insert({list_id: 2, list_kind: 'RESTAURANTS', items: 'Subway'}),
        knex('items').insert({list_id: 3, list_kind: 'MOVIES', items: 'Ironman'}),
        knex('items').insert({list_id: 3, list_kind: 'BOOKS', items: 'Watchmen'}),
        knex('items').insert({list_id: 3, list_kind: 'RESTAURANTS', items: 'Black Canary Cafe'})
      ]);
    });
};
