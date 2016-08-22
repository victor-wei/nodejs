var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
	uid:Number,
	latitude:String,
	longitude:String,
	locationTime:Date
});

mongoose.model('Location',LocationSchema);