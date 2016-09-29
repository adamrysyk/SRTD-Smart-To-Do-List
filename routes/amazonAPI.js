'use strict'

require('dotenv').config({path: '../.env'});

const request = require('request');
const amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: process.env.amazonID,
  awsSecret: process.env.amazonSECRET,
  awsTag: process.env.amazonTAG
});
console.log(process.env.amazonID)

client.itemSearch({
  SearchIndex: "Books",
  Title: "harry potter"

}, function(err, results, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('hello')
    console.log(results);  // products (Array of Object)
    // console.log(response); // response (Array where the first element is an Object that contains Request, Item, etc.)
  }
});
