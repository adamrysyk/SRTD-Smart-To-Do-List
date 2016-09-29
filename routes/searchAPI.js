'use strict';

require('dotenv').config({path: '../.env'});
// npm install node-movie --save

const fetch = require("fetch").fetchUrl;
const movie = require('node-movie');

const searchMovie = (todo) => {

  movie(media, function (err, data) {
      console.log(data);
  });

}

const searchRestauraunt = (todo) => {
  var options = {
  headers: {
    'user-key': process.env.userkey
    }
  }


  fetch(`https://developers.zomato.com/api/v2.1/search?q=${restName}`, options, function(err, response, body) {
    if (err) {
      throw err
    }
    console.log(JSON.parse(body.toString()).restaurants[0].restaurant);
  })
}


