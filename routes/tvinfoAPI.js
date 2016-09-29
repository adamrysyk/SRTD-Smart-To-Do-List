'use strict';
require('dotenv').config({path: '../.env'});
// npm install node-movie --save

const movie = require('node-movie');
let media = process.argv[2]

movie(media, function (err, data) {
    console.log(data.Type);
});

