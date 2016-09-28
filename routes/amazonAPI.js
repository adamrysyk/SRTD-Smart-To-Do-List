'use strict'

const request = require('request');
const amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: "AKIAJPF73MSQ4VL6JQ7Q",
  awsSecret: "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",
  awsTag: 'testing123456'
});

client.itemSearch({
  SearchIndex: "Books",
  Title: "Pizza Pizza"

}, function(err, results, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(results[0].ItemAttributes[0]);  // products (Array of Object)
    // console.log(response); // response (Array where the first element is an Object that contains Request, Item, etc.)
  }
});
