//loading express into the file and setting up the router function of express
const express = require("express");
const router = express.Router();
const Novel = require("../models/novel");

//get a list of novels from the database
router.get("/novels", function(req, res, next) {
    //thats how you can access the parameter in a api request ?name=max
    var mySort = {};
    if (req.query.sort == 1) {
        mySort = { ranking: -1 };
    }
    if (req.query.sort == 2) {
        mySort = { ranking: 1 };
    }
    if (req.query.sort == 3) {
        mySort = { name: 1 };
    }
    if (req.query.sort == 4) {
        mySort = { name: -1 };
    }

    //.find retrieves all the data in the database and .sort is sorting them by asc or desc 1/-1
    Novel.find().sort(mySort).then(function(novels){
            res.send(novels);
    });
});

//post a new novel to the database
router.post("/novels", function(req, res, next) {
    //creating a new novel instance using the body of the request which is parsed by body parser
    //saving the data to the db by a mongoose method
    //the then tag on is based on promises, it stops the further execution of the code and waits unti the saving process
    //is actually completed and everything worked. When finished fires the response of the request.
    Novel.create(req.body).then(function(novel) {
            //response of the request
            res.send("You have created the following novel " + novel.name);
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
        })
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
