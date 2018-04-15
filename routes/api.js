//loading express into the file and setting up the router function of express
const express = require("express");
const router = express.Router();
const Novel = require("../models/novel");
var ObjectId = require('mongodb').ObjectID;
var cors = require('cors')

//get a list of novels from the database
router.get('/novels', cors(), function (req, res, next) {
    //thats how you can access the parameter in a api request ?name=max

    //sorting function taking in the query from user
    var mySort = sorting(req.query.sort);

    var myFind = {};
    if (req.query.find !== undefined) {
        //finding only the corresponding novels from the following: japanese, chinese, korean
        myFind = {origin:req.query.find};
    }

    //.find retrieves all the data in the database and .sort is sorting them by asc or desc 1/-1
    Novel.find(myFind).sort(mySort).then(function(novels){
            res.send(novels);
    });
});

router.get('/novel', cors(), function (req, res, next) {
    var myId = {};
    if (req.query.id !== undefined) {
        //finding only the corresponding novels from the following: japanese, chinese, korean
        myId = ObjectId(req.query.id);
        Novel.findOne(myId).then(function(novel){
            res.send(novel);
        });
    }
});

router.get('/novels/ranking/:rank', cors(), function (req, res, next) {
    //sorting function taking in the query from user
    var mySort = sorting(req.query.sort);

    var myRank = {};
    if (req.params.rank !== undefined) {
        //taking the input and converting it tp an number and using it as a search paramter --> myRank
        var number = Number(req.params.rank);
        console.log(req.params.rank);
        myRank = {ranking:number};
        //finding only the corresponding novels with following rankings: 1 to 5
        Novel.find(myRank).sort(mySort).then(function(novels){
                res.send(novels);
        }).catch(next);
    }
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
