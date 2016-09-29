exports.seed = function(knex, Promise) {
  return knex('users', 'lists', 'items').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({first_name: 'AMNA', last_name: 'ZLETNI', email: 'we_can_do_this@gmail.com', password: '1234'}),
        knex('users').insert({first_name: 'ADAM', last_name: 'RYSYK', email: 'good_work_everyone@yahoo.com', password: '4321'}),
        knex('users').insert({first_name: 'BEN', last_name: 'CHU', email: 'ilovecoding@hotmail.com', password: '0000'}),

        knex('lists').insert({user_id: '16', list_kind: 'MOVIES'}),
        knex('lists').insert({user_id: '16', list_kind: 'BOOKS'}),
        knex('lists').insert({user_id: '16', list_kind: 'RESTAURANTS'}),
        knex('lists').insert({user_id: '17', list_kind: 'MOVIES'}),
        knex('lists').insert({user_id: '17', list_kind: 'BOOKS'}),
        knex('lists').insert({user_id: '17', list_kind: 'RESTAURANTS'}),
        knex('lists').insert({user_id: '18', list_kind: 'MOVIES'}),
        knex('lists').insert({user_id: '18', list_kind: 'BOOKS'}),
        knex('lists').insert({user_id: '18', list_kind: 'RESTAURANTS'}),

        knex('items').insert({list_id: '16', list_kind: 'MOVIES', items: 'Mr. Bean'}),
        knex('items').insert({list_id: '16', list_kind: 'BOOKS', items: 'Harry Potter'}),
        knex('items').insert({list_id: '16', list_kind: 'RESTAURANTS', items: 'Georges Diner'}),
        knex('items').insert({list_id: '17', list_kind: 'MOVIES', items: 'Star Wars'}),
        knex('items').insert({list_id: '17', list_kind: 'BOOKS', items: 'Lord of the Rings'}),
        knex('items').insert({list_id: '17', list_kind: 'RESTAURANTS', items: 'Subway'}),
        knex('items').insert({list_id: '18', list_kind: 'MOVIES', items: 'Ironman'}),
        knex('items').insert({list_id: '18', list_kind: 'BOOKS', items: 'Watchmen'}),
        knex('items').insert({list_id: '18', list_kind: 'RESTAURANTS', items: 'Black Canary Cafe'})
      ]);
    });
};
