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
  if (req.cookies.userID){
    if (req.cookies.messages) {
      res.render("index", { user: req.cookies.username, messages: req.cookies.messages } );
    }
    res.render("index", { user: req.cookies.username, messages: false } );
  } else {
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
  .orderBy('id', 'desc')
  .andWhere('user_id', req.cookies.userID)
  .then((result) => {
    res.json(result);
  })
});

app.get("/items/read", (req, res) => {
  knex.select()
  .from('items')
  .where('type', 'READ')
  .orderBy('id', 'desc')
  .andWhere('user_id', req.cookies.userID)
  .then((result) => {
    res.json(result);
  })
});

app.get("/items/eat", (req, res) => {
  knex.select()
  .from('items')
  .where('type', 'EAT')
  .orderBy('id', 'desc')
  .andWhere('user_id', req.cookies.userID)
  .then((result) => {
    res.json(result);
  })
});

app.post("/categories/watch", (req, res) => {
  console.log(req.body.manual)
  knex('items')
  .insert({user_id:req.cookies.userID, name: req.body.manual, type: 'WATCH'})
  .then((result) => {
    res.redirect('watch')
  })
});

app.post("/categories/read", (req, res) => {
  knex('items')
  .insert({user_id:req.cookies.userID, name: req.body.manual, type: 'READ'})
  .then((results)=> {
  res.redirect("read")
  });
});

app.post("/categories/eat", (req, res) => {
  knex('items')
  .insert({user_id:req.cookies.userID, name: req.body.manual, type: 'EAT'})
  .then((results)=> {
    res.redirect("eat")
  });
});

app.get("/categories", (req, res) => {
  res.render("buttons", { user: req.cookies.username } );
});

app.get("/categories/eat", (req, res) => {
  res.render("restaurants_list", { user: req.cookies.username } );
});

app.get("/categories/read", (req, res) => {
  res.render("books_list", { user: req.cookies.username } );
});

app.get("/categories/watch", (req, res) => {
  res.render("movies_list", { user: req.cookies.username } );
});

app.delete("/del/items/:cat/:id", (req, res) => {
  knex('items')
  .where('id', req.params.id)
  .del().then(function () {
    res.redirect(`/categories/${req.params.cat}`);
  })
});

app.post('/logout', (req, res) => {
  res.clearCookie("username");
  res.clearCookie("userID");
  res.redirect("/login");

});


app.post("/item_names", (req, res) => {



  var todoInput = req.body.text;
  console.log('todoInput: ', todoInput)
  if (todoInput !== "") {

    Promise.all([searchAPI.searchRestauraunt(todoInput), searchAPI.searchMovie(todoInput), searchAPI.searchBooks(todoInput)]).then(result => {

      result.forEach(function(searchResult) {

        var category = Object.keys(searchResult);
        console.log(searchResult);
        console.log('category', category)

        if (category == 'restauraunt' && searchResult.restauraunt !== null){
          knex('items').insert({user_id: req.cookies.userID, name: searchResult.restauraunt, type: 'EAT'})
          .finally(function() {
            console.log(searchResult.restauraunt + " was sorted into restauraunts");
          });
        }

        if (category == 'movie' && searchResult.movie !== null){
          knex('items').insert({user_id: req.cookies.userID, name: searchResult.movie, type: 'WATCH'})
          .finally(function() {
            console.log(searchResult.movie + " was sorted into movies");
          });
        }

        if (category == 'book' && searchResult.book !== null){
          knex('items').insert({user_id: req.cookies.userID, name: searchResult.book, type: 'READ'})
          .finally(function() {
            console.log(searchResult.book + " was sorted into books");
          });
        }
      })
      res.cookie("messages", messages);
    })
  }
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});




