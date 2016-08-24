var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
	uid:Number,
	latitude:String,
	longitude:String,
	datetime:Date
});

mongoose.model('Location',LocationSchema);