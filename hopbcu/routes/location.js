var express = require('express');
var router = express.Router();

var querystring = require('querystring');
var util = require('util');

var mongoose = require('mongoose');
var Location = mongoose.model('Location');

router.post('/hopbcu/location',function(req,res,next){
	var jsoninfo = eval('(' + req.body.data + ')');

	console.log(jsoninfo+" jsoninfo");

	var post = '';

	req.on('data',function(chunk){
		post += chunk;
		console.log("on!"+post);
	});
	req.on('end',function(){

		post = querystring.parse(post);
		post = JSON.stringify(post);
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
	//res.end();
});

module.exports = router;