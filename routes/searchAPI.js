'use strict';

require('dotenv').config({path: '../.env'});
// npm install node-movie --save

const fetch = require("fetch").fetchUrl;
const movie = require('node-movie');


// const searchAll = function(todo, searchMovie, searchRestauraunt){
//   return new Promise((resolve, reject) => {
//     let resultobj = {};

//     searchMovie(todo, (result) => {
//       resultobj['movie'] = result;
//       if ('restaurant' in resultobj) {
//         resolve(resultobj)
//       }
//     });

//     searchRestauraunt(todo, function(result) {
//       resultobj['restaurant'] = result;
//       // console.log(resultobj);
//       if ('movie' in resultobj) {
//         resolve(resultobj);
//       }
//     });

//   } );
// }



// let searchMovie = function(todo) {
//   return new Promise((resolve, reject) => {
//     let moviefound;
//     movie(todo, function (err, data) {
//       if (err) { reject("error");}
//       moviefound = data.Title;
//       resolve(data.Title);
//     });
//   });
// }

// Promise.all([searchMovie])
// // let searchMovie = function(todo, cb) {
// //   let moviefound;
// //   movie(todo, function (err, data) {
// //     moviefound = data.Title;
// //     cb(data.Title);
// //   });
// }

const searchRestauraunt = (todo) => {
  var options = {
  headers: {
    'user-key': process.env.userkey
    }
  }
  fetch(`https://developers.zomato.com/api/v2.1/search?q=${todo}`, options, function(err, response, body) {
    console.log(JSON.parse(body.toString()).restaurants[0].restaurant);
  })
}

searchRestauraunt("Applebys")




// console.log(searchAll("Terminator", searchMovie, searchRestauraunt));
