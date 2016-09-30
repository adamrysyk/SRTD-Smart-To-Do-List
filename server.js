"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

const searchAPI   = require('./routes/searchAPI')

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/lists", (req, res) => {
  res.render("buttons");
});

app.post("/item_names", (req, res) => {

  var todoInput = req.body.text;

  Promise.all([searchAPI.searchRestauraunt(todoInput), searchAPI.searchMovie(todoInput), searchAPI.searchTVshow(todoInput), searchAPI.searchBooks(todoInput)]).then(result => {
    console.log(result)

    result.forEach(function(searchResult){

      var type = Object.keys(searchResult);

      // console.log(type)
      // if(type === 'movie'){
      //   INSERT INTO movies
      // }
      // if(type === 'restauraunt'){
      //   INSERT INTO restauraunt
      // }
      // if(type === 'book'){
      //   INSRT INTO books
      // }

    })

    //iterate through result
    //insert each into database AND THEN OR ALSO
    //render response to front end after database is finished
    //

  })

  res.redirect("/");
});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
