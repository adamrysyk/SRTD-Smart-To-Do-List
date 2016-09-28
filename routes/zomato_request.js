"use strict";

<<<<<<< HEAD:public/scripts/zomato_request.js

require('dotenv').config( {path: '../../.env' } );
const fetch = require("fetch").fetchUrl;
=======
require('dotenv').config({path: '../.env'});
var fetch = require("fetch").fetchUrl;

// console.log(process.env.userkey)


const restName = process.argv[2]
>>>>>>> 08e7fa3be8521c11b488678b53d9ea549d323374:routes/zomato_request.js

const restName = process.argv[2]
const options = {
  headers: {
<<<<<<< HEAD:public/scripts/zomato_request.js
    'user-key': process.env.USERKEY
=======
    'user-key': process.env.userkey
>>>>>>> 08e7fa3be8521c11b488678b53d9ea549d323374:routes/zomato_request.js
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

