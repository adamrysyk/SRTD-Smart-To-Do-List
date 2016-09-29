var books = require('google-books-search');

books.search('asfjasf', function(error, results) {
    if (results[0].authors) {
        console.log(results);
    } else {
        console.log(error);
    }
});
