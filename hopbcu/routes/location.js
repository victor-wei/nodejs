var express = require('express');
var router = express.Router();

var querystring = require('querystring');
var util = require('util');

var mongoose = require('mongoose');
var Location = mongoose.model('Location');

router.post('/hopbcu/location',function(req,res,next){
	var json = req.body.json;

	console.log(json+"  json");

	var post = '';

	req.on('data',function(chunk){
		post += chunk;
	});
	req.on('end',function(){

		post = querystring.parse(post);

		var location = new Location(post);

		console.log("OK!"+post);

		location.save(function(err){
			if(err){
				res.end('Error');
				return next();
			}
		});

		res.end(util.inspect(post));
	});
});

module.exports = router;