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
const cookieParser = require('cookie-parser');

const pg = require("pg");

const searchAPI   = require('./routes/searchAPI')

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(cookieParser());

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

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/items/watch", (req, res) => {
  knex.select()
  .from('items')
  .where('type', 'WATCH')
  .then((result) => {
    res.json(result);
  })
});

app.get("/items/read", (req, res) => {
  knex.select()
  .from('items')
  .where('type', 'READ')
  .then((result) => {
    res.json(result);
  })
});

app.get("/items/eat", (req, res) => {
  knex.select()
  .from('items')
  .where('type', 'EAT')
  .then((result) => {
    res.json(result);
  })
});



app.get("/categories", (req, res) => {
  res.render("buttons");
});

app.get("/categories/eat", (req, res) => {
  res.render("restaurants_list");
});

app.get("/categories/read", (req, res) => {
  res.render("books_list");
});

app.get("/categories/watch", (req, res) => {
  res.render("movies_list");
});



app.use('/login', usersRoutes(knex));


app.post("/item_names", (req, res) => {

  console.log(req.cookies.username);

  var todoInput = req.body.text;

  Promise.all([searchAPI.searchRestauraunt(todoInput), searchAPI.searchMovie(todoInput), /*searchAPI.searchTVshow(todoInput),*/ searchAPI.searchBooks(todoInput)]).then(result => {

    result.forEach(function(searchResult){

      var category = Object.keys(searchResult);

      if(category == 'restauraunt'){

        knex('items').insert({user_id: req.cookies.username, name: searchResult.restauraunt, type: 'EAT'})
        .finally(function() {
          console.log(searchResult.restauraunt + " was sorted into restauraunts");
          knex.destroy();
        });

      }

      if(category == 'movie'){

        knex('items').insert({user_id: req.cookies.username, name: searchResult.movie, type: 'WATCH'})
        .finally(function() {
          console.log(searchResult.restauraunt + " was sorted into movies");
          knex.destroy();
        });

      }

      if(category == 'book'){

        knex('items').insert({user_id: req.cookies.username, name: searchResult.book, type: 'READ'})
        .finally(function() {
          console.log(searchResult.restauraunt + " was sorted into books");
          knex.destroy();
        });
      }

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
