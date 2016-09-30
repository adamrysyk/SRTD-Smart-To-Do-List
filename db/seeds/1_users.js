exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, username: 'AMNA', email: 'we_can_do_this@gmail.com', password: '1234'}),
        knex('users').insert({id: 2, username: 'ADAM', email: 'good_work_everyone@yahoo.com', password: '4321'}),
        knex('users').insert({id: 3, username: 'BEN', email: 'ilovecoding@hotmail.com', password: '0000'})
      ])
    })
};
