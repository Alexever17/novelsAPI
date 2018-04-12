//loading express into the file and setting up the router function of express
const express = require('express');
const router = express.Router();
const Novel = require('../models/novel');


//get a list of novels from the database
router.get('/novels', function(req, res){
  res.send({type:'GET'});
});

//post a new novel to the database
router.post('/novels', function(req, res){
  //creating a new novel instance using the body of the request which is parsed by body parser
  //saving the data to the db by a mongoose method
  //the then tag on is based on promises, it stops the further execution of the code and waits unti the saving process
  //is actually completed and everything worked. When finished fires the response of the request.
  Novel.create(req.body).then(function(novel){
    //response of the request
    res.send(novel);
  });

});

//update a novel in the db
router.put('/novels/:id', function(req, res){
  res.send({type:'PUT'});
});

//delete an entry from db
router.delete('/novels/:id', function(req, res){
  res.send({type:'DELETE'});
});

//export the code on top to use in other files, like the index.js
module.exports = router;
