var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	uid: Number,
	username :String,
	createTIme:Date,
	lastLOgin:Date
});

mongoose.model('User',UserSchema);