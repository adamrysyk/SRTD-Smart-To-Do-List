"use strict";

require('dotenv').config({path: '../.env'});
var fetch = require("fetch").fetchUrl;

// console.log(process.env.userkey)


const restName = process.argv[2]

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

// app.get("/search", (req, res) => {

//   const restName = process.argv[2]
//   const options = {
//     headers: {
//     'user-key': process.env.zomatoPass
//     }
//   }

//   fetch(`https://developers.zomato.com/api/v2.1/search?q=${restName}`, options, function(err, response, body) {
//     if (err) {
//       throw err
//     }
//     console.log(JSON.parse(body.toString()).restaurants[0]);
//   })
// });

