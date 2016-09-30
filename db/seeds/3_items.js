
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert({items_id: 1, list_id: 1, list_kind: 'MOVIES', item_names: 'Mr. Bean'}),
        knex('items').insert({items_id: 2, list_id: 1, list_kind: 'BOOKS', item_names: 'Harry Potter'}),
        knex('items').insert({items_id: 3, list_id: 1, list_kind: 'RESTAURANTS', item_names: 'Georges Diner'}),
        knex('items').insert({items_id: 4, list_id: 2, list_kind: 'MOVIES', item_names: 'Star Wars'}),
        knex('items').insert({items_id: 5, list_id: 2, list_kind: 'BOOKS', item_names: 'Lord of the Rings'}),
        knex('items').insert({items_id: 6, list_id: 2, list_kind: 'RESTAURANTS', item_names: 'Subway'}),
        knex('items').insert({items_id: 7, list_id: 3, list_kind: 'MOVIES', item_names: 'Ironman'}),
        knex('items').insert({items_id: 8, list_id: 3, list_kind: 'BOOKS', item_names: 'Watchmen'}),
        knex('items').insert({items_id: 9, list_id: 3, list_kind: 'RESTAURANTS', item_names: 'Black Canary Cafe'})
      ]);
    });
};
