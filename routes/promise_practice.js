'use strict';
require('dotenv').config({path: '../.env'});
const fetch = require("fetch").fetchUrl;
const movieAPI = require('node-movie');
const options = {
  headers: {
    'user-key': process.env.userkey
  }
}

let resultObj = {}
let request = "Terminator"

var p = new Promise((resolve, reject) => {
  movieAPI(request, (err, data)=> {
    resultObj['movie'] = data.Title
    resolve(resultObj)
  })
})
.then((res) => {
  fetch(`https://developers.zomato.com/api/v2.1/search?q=${request}`, options, function(err, response, body) {
    res['restaurant'] = JSON.parse(body.toString()).restaurants[0].restaurant.name
    console.log(res)
  })
})
// .then((res) => {
//   console.log(res)
// })





// .then((res) => {
//   console.log(res)
// })



// .then((res) => {
//   fetch(`https://developers.zomato.com/api/v2.1/search?q=${request}`, options, function(err, response, body) {
//     result = JSON.parse(body.toString()).restaurants[0].restaurant.name
//     res['restaurant'] = result
//     resolve(res)
// })
// .then((res) => {
//   console.log(res)
// })

// p.then((res) => {
//    fetch(`https://developers.zomato.com/api/v2.1/search?q=${request}`, options, function(err, response, body) {
//     result = JSON.parse(body.toString()).restaurants[0].restaurant.name
//     res['restaurant'] = result
//     resolve(res)
//   })
// })
// .then((res) => {
//   console.log(res);
// })







// let restaurant = function(input){
//   let result
//   fetch(`https://developers.zomato.com/api/v2.1/search?q=${input}`, options, function(err, response, body) {
//     if (err) {
//       throw err
//     }
//     return JSON.parse(body.toString()).restaurants[0].restaurant.name
//     }
