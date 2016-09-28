var MovieDB = require('moviedb')('52dad72bf26388015351167d297a03b5');

MovieDB.searchMovie({query: 'house of cards' }, function(err, res){
  console.log(res);
});



// total_results
