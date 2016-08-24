var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
	uid:Number,
	latitude:String,
	longitude:String,
	datetime:String
});

mongoose.model('Location',LocationSchema);