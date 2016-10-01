exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(function () {
    return Promise.all([
      knex('users').returning('id').insert({username: 'AMNA', email: 'we_can_do_this@gmail.com', password: '1234'}),
      knex('users').returning('id').insert({username: 'ADAM', email: 'good_work_everyone@yahoo.com', password: '4321'}),
      knex('users').returning('id').insert({username: 'BEN', email: 'ilovecoding@hotmail.com', password: '0000'})
    ]);
  })
  .then(function(results){
    results = results.map(function(i){
      return i[0];
    });
    return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert({user_id: results[0], name: 'Mr. Bean', type: "WATCH"}),
        knex('items').insert({user_id: results[0], name: 'Harry Potter', type: "READ"}),
        knex('items').insert({user_id: results[0], name: 'Georges Diner', type: "EAT"}),
        knex('items').insert({user_id: results[1], name: 'Star Wars', type: "WATCH"}),
        knex('items').insert({user_id: results[1], name: 'Lord of the Rings', type: "READ"}),
        knex('items').insert({user_id: results[1], name: 'Subway', type: "EAT"}),
        knex('items').insert({user_id: results[2], name: 'Ironman', type: "WATCH"}),
        knex('items').insert({user_id: results[2], name: 'Watchmen', type: "READ"}),
        knex('items').insert({user_id: results[2], name: 'Black Canary Cafe', type: "EAT"})
      ]);
    })
  })
};
