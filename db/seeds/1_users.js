exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({user_id: 1, first_name: 'AMNA', last_name: 'ZLETNI', email: 'we_can_do_this@gmail.com', password: '1234'}),
        knex('users').insert({user_id: 2, first_name: 'ADAM', last_name: 'RYSYK', email: 'good_work_everyone@yahoo.com', password: '4321'}),
        knex('users').insert({user_id: 3, first_name: 'BEN', last_name: 'CHU', email: 'ilovecoding@hotmail.com', password: '0000'})
      ])
    })
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
    })
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
