"use strict";

require('dotenv').config();

const fetch = require("fetch").fetchUrl;
const request = require('request');
const amazon = require('amazon-product-api');
const express = require('express');
const router  = express.Router();
const movie = require('node-movie');


module.exports = (knex) => {

  router.post("/", (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    knex
      .select("*")
      .from("users")
      .where("username", username)
      .andWhere("password", password)
      .then((results) => {

        if(results[0]){

          res.cookie("userID", results[0].id);
          res.cookie("username", username)
          res.redirect("/");
        }else{
          res.redirect("/login")
        }
    });
  });

  return router;
}

