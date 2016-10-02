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
const methodOverride = require('method-override');
const pg = require("pg");
const searchAPI   = require('./routes/searchAPI')

const usersRoutes = require("./routes/users");
const registerRoutes = require("./routes/register");

app.set("view engine", "ejs");

app.use(morgan('dev'));
app.use(knexLogger(knex));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));


// login and register user
app.use('/login', usersRoutes(knex));
app.use('/register', registerRoutes(knex));


// Home page
app.get("/", (req, res) => {
  if(req.cookies.userID){
    res.render("index");
  }else{
    res.redirect("login")
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/items/watch", (req, res) => {
  knex.select()
  .from('items')
  .where('type', 'WATCH')
  .andWhere('user_id', req.cookies.userID)
  .then((result) => {
    res.json(result);
  })
});

app.get("/items/read", (req, res) => {
  knex.select()
  .from('items')
  .where('type', 'READ')
  .andWhere('user_id', req.cookies.userID)
  .then((result) => {
    res.json(result);
  })
});

app.get("/items/eat", (req, res) => {
  knex.select()
  .from('items')
  .where('type', 'EAT')
  .andWhere('user_id', req.cookies.userID)
  .then((result) => {
    res.json(result);
  })
});

app.post("/items/watch", (req, res) => {
  knex('items')
  .insert({user_id:req.cookies.userID, name: req.body.manual, type: 'WATCH'})
  .then((results)=> {
    console.log(results);
    res.redirect("/categories/watch")
  });
});

app.post("/items/read", (req, res) => {
  knex('items')
  .insert({user_id:req.cookies.userID, name: req.body.manual, type: 'READ'})
  .then((results)=> {
   console.log('book inserted');
  res.redirect("/categories/read")
  });
});

app.post("/items/eat", (req, res) => {
  knex('items')
  .insert({user_id:req.cookies.userID, name: req.body.manual, type: 'EAT'})
  .then((results)=> {
     console.log('restaurant inserted');
    res.render("/categories/eat")
  });
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



app.post('/logout', (req, res) => {
  res.clearCookie("username");
  res.clearCookie("userID");
  res.redirect("/login");

});


app.post("/item_names", (req, res) => {



  var todoInput = req.body.text;

  Promise.all([searchAPI.searchRestauraunt(todoInput), searchAPI.searchMovie(todoInput), searchAPI.searchBooks(todoInput)]).then(result => {

    result.forEach(function(searchResult){

      var category = Object.keys(searchResult);

      if(category == 'restauraunt'){

        knex('items').insert({user_id: req.cookies.userID, name: searchResult.restauraunt, type: 'EAT'})
        .finally(function() {
          console.log(searchResult.restauraunt + " was sorted into restauraunts");
        });

      }

      if(category == 'movie'){

        knex('items').insert({user_id: req.cookies.userID, name: searchResult.movie, type: 'WATCH'})
        .finally(function() {
          console.log(searchResult.movie + " was sorted into movies");
        });

      }

      if(category == 'book'){

        knex('items').insert({user_id: req.cookies.userID, name: searchResult.book, type: 'READ'})
        .finally(function() {
          console.log(searchResult.book + " was sorted into books");
        });
      }

    })

  })

  res.redirect("/");
});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
