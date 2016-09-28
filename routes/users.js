"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/search", (req, res) => {
    client.itemSearch({
      SearchIndex: "Books",
      Title: bookName
    }, function(err, results, response) {
      if (err) {
       console.log(err);
     } else {
      console.log(results[0].ItemAttributes[0].Title);  // products (Array of Object)
      // console.log(response); // response (Array where the first element is an Object that contains Request, Item, etc.)
     }
   });
  });

  return router;
}

