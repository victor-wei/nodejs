var express = require('express');
var router = express.Router();

var querystring = require('querystring');
var util = require('util');

var mongoose = require('mongoose');
var Location = mongoose.model('Location');

router.post('/hopbcu/location',function(req,res,next){
	var jsoninfo =  req.body.data ;

	console.log(jsoninfo+" jsoninfo");

	Location.save(jsoninfo,function(err){
		if(err){
			res.end('Error');
			return next();
		}
		res.end();
	});

	
	
});

module.exports = router;