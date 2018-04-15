//loading express, body parser and mongoose into the file
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//const to store the port given by the environment or 5000 as the fallback or when working localy
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

//connect to mongodb
// using the environmental settings from heroku which stores our protected credentials --> db_uri
mongoose.connect(process.env.DB_URI);
mongoose.Promise = global.Promise;

//parsing the body of the request -- middleware between the request and the express routes
app.use(bodyParser.json());

//telling express to use the specified routes
app.use("/api", require("./routes/api"));

//errorhandling middleware
// from the .catch(next) in the api.js file
app.use(function(error, req, res, next) {
    // console.log(error);
    res.status(422).send({
        error: error.message
    });
});

// How this all works is like this:
// There is the index.js where the express app gets invoked, which uses
// the routes folder where the api routes are stored. Those define how the different
// html request should be handled and what should be sent to the database and so on.
// For the database there is the folder models where the structure of the db is stored.
// Currently when a http request is invoked it first goes through the body parser
