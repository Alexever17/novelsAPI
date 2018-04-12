//loading express into the file
const express = require('express');
//loading in the body parser
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

//set up express app
const app = express();


//connect to mongodb
mongoose.connect('mongodb://localhost/novelgo');
mongoose.Promise = global.Promise;

//parsing the body of the request -- middleware between the request and the express routes
app.use(bodyParser.json());

//telling express to use the specified routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.PORT || 4000, function(){
  console.log("now listening for requests");
});


// How this all works is like this:
// There is the index.js where the express app gets invoked, which uses
// the routes folder where the api routes are stored. Those define how the different
// html request should be handled and what should be sent to the database and so on.
// For the database there is the folder models where the structure of the db is stored.
// Currently when a http request is invoked it first goes through the body parser
