"use strict";
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var db = "mongodb://localhost/mongo2";
var Player = require("./player.model");
var newPlayer = new Player({
        name : "Ahmed",
        age : 20,
        tall : 15,
});
var port = 9090;
mongoose.connect(db);
app.get("/player",function(req,res){
    Player.find().exec((reject,resolve)=>{res.json(resolve)});
});

app.listen(port,function(req,res){
    Player.find().exec((reject,resolve)=>{console.log(resolve)});
})
