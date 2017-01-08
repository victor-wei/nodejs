var mongoose = require('mongoose');
var config = require('./config.js');
var MongoClient = require('mongodb').MongoClient;


// module.exports = function(){
// 	var db = mongoose.connect(config.mongodb);
// 	require('../models/user.server.model.js');
// 	require('../models/location.server.model.js');
// 	return db;
// };

module.exports = function(){
	
	require('../models/user.server.model.js');
	require('../models/location.server.model.js');

	var db = mongoose.connect(config.mongodb);
	return db;

};





