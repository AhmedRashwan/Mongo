var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var player = new Schema({
name : String,
age : Number,
tall : Number,
});
module.exports = mongoose.model("Player",player);