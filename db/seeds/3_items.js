
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert({id: 1, user_id: 1, name: 'Mr. Bean', type: "WATCH"}),
        knex('items').insert({id: 2, user_id: 1, name: 'Harry Potter', type: "READ"}),
        knex('items').insert({id: 3, user_id: 1, name: 'Georges Diner', type: "EAT"}),
        knex('items').insert({id: 4, user_id: 2, name: 'Star Wars', type: "WATCH"}),
        knex('items').insert({id: 5, user_id: 2, name: 'Lord of the Rings', type: "READ"}),
        knex('items').insert({id: 6, user_id: 2, name: 'Subway', type: "EAT"}),
        knex('items').insert({id: 7, user_id: 3, name: 'Ironman', type: "WATCH"}),
        knex('items').insert({id: 8, user_id: 3, name: 'Watchmen', type: "READ"}),
        knex('items').insert({id: 9, user_id: 3, name: 'Black Canary Cafe', type: "EAT"})
      ]);
    });
};
