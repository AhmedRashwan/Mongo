"use strict";
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var db = "mongodb://localhost/mongo2";
var Player = require("./player.model");

var port = 9090;
mongoose.connect(db);

app.get("/players", function (req, res) {
    Player.find().exec((reject, resolve) => { res.json((resolve)) });
});

app.get("/player/:id", function (req, res) {
    Player.findOne({ _id: req.params.id }).exec((err, result) => { res.json(result) });
});

app.put("/player/update/:id",function(req,res){
    Player.findOneAndUpdate({_id:req.params.id},{$set:{name:"Mohamed"}},function(err,result){
        (result)?console.log("Player Updated Successfully"):console.log("err",err);
    });
});
app.get("/player/add/name=:name&age=:age&tall=:tall", function (req, res) {
    // new Player({
    //     name: req.params.name,
    //     age: req.params.age,
    //     tall: req.params.tall
    // }).save(function (err, success) {
    //     if (success) { res.send("inserted Succesfully") }
    // });
    Player.create(req.params, function (err, success) {
        if (success) { res.send("Created Succesfully") }
    });
});

app.listen(port, function (req, res) {
    console.log("Server Created Successfully");
    Player.find().exec((err,result)=>{console.log(result)});
})
