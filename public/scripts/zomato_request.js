"use strict";

var fetch = require("fetch").fetchUrl;

const restName = process.argv[2]

var options = {
  headers: {
    'user-key': zomatoPass
  }
}


fetch(`https://developers.zomato.com/api/v2.1/search?q=${restName}`, options, function(err, response, body) {
  if (err) {
    throw err
  }
  console.log(JSON.parse(body.toString()).restaurants[0]);
})

