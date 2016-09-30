exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, first_name: 'AMNA', last_name: 'ZLETNI', email: 'we_can_do_this@gmail.com', password: '1234'}),
        knex('users').insert({id: 2, first_name: 'ADAM', last_name: 'RYSYK', email: 'good_work_everyone@yahoo.com', password: '4321'}),
        knex('users').insert({id: 3, first_name: 'BEN', last_name: 'CHU', email: 'ilovecoding@hotmail.com', password: '0000'})
      ])
    })
};
