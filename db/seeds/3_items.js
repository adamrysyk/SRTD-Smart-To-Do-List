
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert({user_id: 1, name: 'Mr. Bean', type: "WATCH"}),
        knex('items').insert({user_id: 1, name: 'Harry Potter', type: "READ"}),
        knex('items').insert({user_id: 1, name: 'Georges Diner', type: "EAT"}),
        knex('items').insert({user_id: 2, name: 'Star Wars', type: "WATCH"}),
        knex('items').insert({user_id: 2, name: 'Lord of the Rings', type: "READ"}),
        knex('items').insert({user_id: 2, name: 'Subway', type: "EAT"}),
        knex('items').insert({user_id: 3, name: 'Ironman', type: "WATCH"}),
        knex('items').insert({user_id: 3, name: 'Watchmen', type: "READ"}),
        knex('items').insert({user_id: 3, name: 'Black Canary Cafe', type: "EAT"})
      ]);
    });
};
