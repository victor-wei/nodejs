var express = require('express');
var router = express.Router();

var querystring = require('querystring');
var util = require('util');

var mongoose = require('mongoose');
var Location = mongoose.model('Location');

router.post('/hopbcu/location',function(req,res,next){
	
    var location = new Location({

		latDegree:req.body.latDegree,
		latMin:req.body.latMin,
		lonDegree:req.body.lonDegree,
		lonMin:req.body.lonMin,
		year:req.body.year,
		month:req.body.month,
		day:req.body.day,
		hour:req.body.hour,
		minute:req.body.minute,
		second:req.body.second,
		dataNumber:req.body.datanumber,
		bdLat:req.body.bdLat,
		bdLon:req.body.bdLon,
		ew:req.body.ew,
		ns:req.body.ns,
		isPackLocation:req.body.isPackLocation
    });
	

	location.save(function(err){
		if(err){
			res.end('Error');
			//return next();
		}
		res.end("save success ");
	});

	
	
});

module.exports = router;