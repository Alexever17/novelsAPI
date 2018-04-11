//loading express into the file and setting up the router function of express
const express = require('express');
const router = express.Router();

//get a list of novels from the database
router.get('/novels', function(req, res){
  res.send({type:'GET'});
});

//post a new novel to the database
router.post('/novels', function(req, res){
  res.send({type:'POST'});
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
