'use strict';
require('dotenv').config({path: '../.env'});
const fetch = require("fetch").fetchUrl;
const movieAPI = require('node-movie');

const options = {
  headers: {
    'user-key': process.env.userkey
  }
}

// const searchAll = function(todo, movie, rest){
//   let resultObj = {}
//   resultObj['movie'] = movie(todo)
//   resultObj['restaurant'] = rest(todo)
//   return resultObj;
// }

movieAPI('Terminator', (err, data)=> {
  return data.Title
})







// let movie = function(input){
//   let result
//   movieAPI(input, (err, data)=> {
//     result = data.Title;
//   });
//   return result
// };

// console.log(movie('Ghostbusters'))



// let restaurant = function(input){
//   let result
//   fetch(`https://developers.zomato.com/api/v2.1/search?q=${input}`, options, function(err, response, body) {
//     if (err) {
//       throw err
//     }
//     return
//     result = JSON.parse(body.toString()).restaurants[0].restaurant.name
//   })
//   console.log(result)
// }

// restaurant('Subway')
// console.log(restaurant('Subway'))







