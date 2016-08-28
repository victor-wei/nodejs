var express = require('express');
var router = express.Router();

var querystring = require('querystring');
var util = require('util');

var mongoose = require('mongoose');
var Location = mongoose.model('Location');

router.post('/hopbcu/location',function(req,res,next){
	

    function callback(data)
    {
    	if(data.status !=0){
    		return;
    	}
    	// var points = data.result;
    	// var transresult = points[0];
    	//var point = new BMap.Point(transresult.x,transresult.y);
  //   	var location = new Location({

		// latDegree:transresult.y,
		// latMin:req.body.latMin,
		// lonDegree:transresult.x,
		// lonMin:req.body.lonMin,
		// year:req.body.year,
		// month:req.body.month,
		// day:req.body.day,
		// hour:req.body.hour,
		// minute:req.body.minute,
		// second:req.body.second,
		// dataNumber:req.body.datanumber
		// });

		// location.save(function(err){
		// if(err){
		// 	res.end('Error');
		// 	//return next();
		// }
		// res.end("save success ");
	
  //   });
    }
	var send = function(){
		var positionUrl = "http://api.map.baidu.com/geoconv/v1/?coords="+
		(req.body.lonDegree+req.body.lonMin/1000/60)+','+(req.body.latDegree+req.body.latMin/1000/60)
		+"&from=1&to=5&ak=yTdOFtxX6c7mOnPNcCKCNn9XYrKz7XGQ&callback=callback";
        var script = document.createElement('script');
        script.src = positionUrl;
        document.getElementsByTagName("head")[0].appendChild(script);
	}

	send();
 //    var location = new Location({

	// 	latDegree:req.body.latDegree,
	// 	latMin:req.body.latMin,
	// 	lonDegree:req.body.lonDegree,
	// 	lonMin:req.body.lonMin,
	// 	year:req.body.year,
	// 	month:req.body.month,
	// 	day:req.body.day,
	// 	hour:req.body.hour,
	// 	minute:req.body.minute,
	// 	second:req.body.second,
	// 	dataNumber:req.body.datanumber
 //    });
	

	// location.save(function(err){
	// 	if(err){
	// 		res.end('Error');
	// 		//return next();
	// 	}
	// 	res.end("save success ");
	// });

	
	
});

module.exports = router;