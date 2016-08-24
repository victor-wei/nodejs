var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
	uid:Number,
	latitude:Number,
	longitude:Number,
	datetime:Number
});

mongoose.model('Location',LocationSchema);