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
    var email = req.body.email;
    var password = req.body.password;
    var confirm = req.body.confirm;

    if(password === confirm && password !== "" && email !== ""){

      knex
        .select("*")
        .from("users")
        .where("username", username)
        .then((results) => {

          if(!results[0]){

            knex('users')
            .returning('id')
            .insert({username: username, email: email, password: password})
            .then((results)=> {

              res.cookie("userID", results[0]);
              res.cookie("username", username)
              res.redirect("/");

            });

          } else {
            res.redirect("/login");
          }

      });
    } else {
      res.redirect("/login");
    }


  });

  return router;
}
