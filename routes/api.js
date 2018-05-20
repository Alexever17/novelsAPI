//loading express into the file and setting up the router function of express
const express = require("express");
const router = express.Router();
const Novel = require("../models/novel");
var ObjectId = require('mongodb').ObjectID;
var cors = require('cors')

//getting all of the database and sorting capabilities
router.get('/novels', cors(), function (req, res, next) {
    //sorting function taking in the query from user
    var mySort = sorting(req.query.sort);

    //find retrieves all the data in the database and .sort is sorting them by asc or desc 1/-1
    Novel.find().sort(mySort).then(function (novels) {
        res.send(novels);
    });
});

//getting one specific novel
router.get('/novel/:id', cors(), function (req, res, next) {
    //takes in the ID of the novels and formats it
    const myId = req.params.id ? ObjectId(req.params.id) : {};

    //takes in the formated id and retrievs the documents
    Novel.findOne(myId).then(function(novel){
        res.send(novel);
    });
});

//getting a collection of novel based on the origin provided
router.get('/novels/origin/:find', cors(), function (req, res, next) {
    // looks if the origin was specified and formats the input accordingly
    const myFind = req.params.find ? { origin: req.params.find } : {};

    //sorting function taking in the query from user
    var mySort = sorting(req.query.sort);

    //retrieves the data according to the myFind parameter and .sort is sorting them by asc or desc 1/-1
    Novel.find(myFind).sort(mySort).then(function (novels) {
        res.send(novels);
    });
});

//getting a collection of novels based on the ranking provided
router.get('/novels/ranking/:rank', cors(), function (req, res, next) {
    const number = Number(req.params.rank);
    const myRank = {ranking:number} || {};

    //sorting function taking in the query from user
    var mySort = sorting(req.query.sort);

    //finding only the corresponding novels with following rankings: 1 to 10
    Novel.find(myRank).sort(mySort).then(function(novels){
            res.send(novels);
    });
});

//getting a collection of novels which were dropped
router.get('/novels/ranking/dropped', cors(), function (req, res, next) {
    const myRank = { dropped: false }

    //sorting function taking in the query from user
    var mySort = sorting(req.query.sort);

    //finding only the corresponding novels which were dropped
    Novel.find(myRank).sort(mySort).then(function (novels) {
        res.send(novels);
    });
});

//function to process the query typed in the url to a sorting parameter
function sorting(input) {
    input = Number(input);
    switch (input) {
        case 1:
            return { ranking: -1 };
        case 2:
            return { ranking: 1 };
        case 3:
            return { name: 1 };
        case 4:
            return { name: -1 };
        default:
            return {};
    }
}

//post a new novel to the database
router.post("/novels", function(req, res, next) {
    //creating a new novel instance using the body of the request which is parsed by body parser
    //saving the data to the db by a mongoose method
    //the then tag on is based on promises, it stops the further execution of the code and waits unti the saving process
    //is actually completed and everything worked. When finished fires the response of the request.
    Novel.create(req.body).then(function(novel) {
            //response of the request
            res.send("You have created the following novel '" + novel.name + "'.");
        }).catch(next);
});

//update a novel in the db
router.put("/novels/:id", function(req, res, next) {
    //handy mongoose method
    Novel.findByIdAndUpdate({
        //id parameter of the api
        _id: req.params.id
    }, req.body).then(function(novel){
        //mongoose method --> find one record
        Novel.findOne({_id: req.params.id}).then(function(novel){
            res.send(novel);
        });
    });
});

//delete an entry from db
router.delete("/novels/:id", function(req, res, next) {
    //handy mongoose method
    Novel.findByIdAndRemove({
        //id parameter of the api
        _id: req.params.id
    }).then(function(novel){
        res.send(novel);
    });
});

//export the code on top to use in other files, like the index.js
module.exports = router;
