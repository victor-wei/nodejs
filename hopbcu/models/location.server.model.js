var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
	uid:Number,
	latDegree:String,
	latMin:String,
	lonDegree:String,
	lonMin:String,
	year:String,
	month:String,
	day:String,
	hour:String,
	minute:String,
	second:String,
	dataNumber:String,
	bdLat:String,
	bdLon:String
});

mongoose.model('Location',LocationSchema);