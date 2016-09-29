"use strict";

require('dotenv').config( {path: '../.env'});
var fetch = require("fetch").fetchUrl;

const restName = process.argv[2]
const options = {
  headers: {
    'user-key': process.env.userkey
  }
}


fetch(`https://developers.zomato.com/api/v2.1/search?q=${restName}`, options, function(err, response, body) {
  if (err) {
    throw err
  }
  console.log(JSON.parse(body.toString()).restaurants[0]);
})

