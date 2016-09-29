"use strict";

require('dotenv').config();

const fetch = require("fetch").fetchUrl;
const request = require('request');
const amazon = require('amazon-product-api');
const express = require('express');
const router  = express.Router();
const movie = require('node-movie');

var client = amazon.createClient({
  awsId: process.env.amazonID,
  awsSecret: process.env.amazonSECRET,
  awsTag: process.env.amazonTAG
});

var options = {
  headers: {
    'user-key': process.env.userkey
  }
}


module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });
  });


  router.get("/searchMovie", (req, res) => {

    movie("Harry Potter", function (err, data) {

        console.log(data);

        res.json(data);
    });
  });

  router.get("/search", (req, res) => {

  fetch(`https://developers.zomato.com/api/v2.1/search?q=Mcdonalds`, options, function(err, response, body) {
    if (err) {
      throw err
    }
    console.log(JSON.parse(body.toString()).restaurants[0].restaurant);

    res.json(JSON.parse(body.toString()).restaurants[0].restaurant);
    });
  });

  return router;
}

