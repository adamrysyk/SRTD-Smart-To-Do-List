// 'use strict'

// require('dotenv').config({path: '../.env'});

// var fetch = require('node-fetch');


// const request = require('request');
// const amazon = require('amazon-product-api');

// var client = amazon.createClient({
//   awsId: process.env.amazonID,
//   awsSecret: process.env.amazonSECRET,
//   awsTag: process.env.amazonTAG
// });

// // var bookName = process.argv[2];


// fetch(`http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=AKIAIHE3LZULZGA6YVFQ&AssociateTag=testing123456&SearchIndex=FashionMen&Sort=price&Keywords=lacoste%20polo&ResponseGroup=Accessories%2CImages%2CItemAttributes&Timestamp=[2016-09-28T20:01:67Z]&Signature=ouTb0NBnBYk3krcrvVUxRKcPPLhvLEUmjrq+73Gu&Operation=ItemSearch`)
// .then(function(response) {
//   debugger;
//   console.log("error is: " + response);
// }).catch(function(err){
//   console.log("error")
// });

'use strict'

 const request = require('request');
 const amazon = require('amazon-product-api');

 var client = amazon.createClient({
   awsId: "AKIAJZXEI7DRL3LFXGHQ",
   awsSecret: "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",
   awsTag: 'testing123456'
 });

 client.itemSearch({
   SearchIndex: "Books",
   Title: "Harry Potter "

 }, function(err, results, response) {
   if (err) {
     console.log(err);
   } else {
     console.log(results[0].ItemAttributes[0]);  // products (Array of Object)
     // console.log(response); // response (Array where the first element is an Object that contains Request, Item, etc.)
   }
 });

// client.itemSearch({
//   SearchIndex: "Books",
//   Title: "Harry Potter"

// }).then(function(results){
//   console.log("results are: " + results);
// }).catch(function(err){
//   console.log("errors are: " + err.Error);
// });

// }, function(err, results, response) {
//   console.log("hi")
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results[0].ItemAttributes[0].Title);  // products (Array of Object)
//     // console.log(response); // response (Array where the first element is an Object that contains Request, Item, etc.)
//   }
// });
