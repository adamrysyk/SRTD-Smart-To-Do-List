'use strict';

require('dotenv').config({path: '../.env'});
// npm install node-movie --save

const fetch = require("fetch").fetchUrl;
const movie = require('node-movie');


movie(todo, function (err, data) {
  moviefound = data.Title;
  cb(data.Title);
});

const searchRestauraunt = (todo) => {
  var options = {
  headers: {
    'user-key': process.env.userkey
    }
  }
  fetch(`https://developers.zomato.com/api/v2.1/search?q=${todo}`, options, function(err, response, body) {
    cb(JSON.parse(body.toString()).restaurants[0].restaurant.name);
  })
}
