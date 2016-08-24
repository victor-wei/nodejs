var express = require('express');
var router = express.Router();

var querystring = require('querystring');
var util = require('util');

var mongoose = require('mongoose');
var Location = mongoose.model('Location');

router.post('/hopbcu/location',function(req,res,next){
	
	console.log(req.body+" body");
    var location = new Location({
    	

		latitude:req.body.latitude,
		longitude:req.body.longitude,
		datetime:req.body.datetime
    });
	

	location.save(function(err){
		if(err){
			res.end('Error');
			return next();
		}
		res.end();
	});

	
	
});

module.exports = router;