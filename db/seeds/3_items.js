
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert({id: 1, list_id: 1, name: 'Mr. Bean'}),
        knex('items').insert({id: 2, list_id: 1, name: 'Harry Potter'}),
        knex('items').insert({id: 3, list_id: 1, name: 'Georges Diner'}),
        knex('items').insert({id: 4, list_id: 2, name: 'Star Wars'}),
        knex('items').insert({id: 5, list_id: 2, name: 'Lord of the Rings'}),
        knex('items').insert({id: 6, list_id: 2, name: 'Subway'}),
        knex('items').insert({id: 7, list_id: 3, name: 'Ironman'}),
        knex('items').insert({id: 8, list_id: 3, name: 'Watchmen'}),
        knex('items').insert({id: 9, list_id: 3, name: 'Black Canary Cafe'})
      ]);
    });
};
