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

	// var db = MongoClient.connect(config.mongodb);
	// return db;
	// MongoClient.connect(config.mongodb, function(err, db) {

 //    if(!err){ //如果连接未出错
 //   	 console.log('连接成功');

 //   	 return db;
 //    }
});
	
};





