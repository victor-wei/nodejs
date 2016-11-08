var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Location = mongoose.model('Location');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/findtudou',function(req,res,next){
// 	res.render('mymap',{title:'Findtudou',latitude:103.864527777778,longitude: 30.78425})
// });

router.get('/findtudou',function(req,res,next){

	Location.find({"bdLat":{"$gt":30}},function(err,docs){
		if(err){
				res.end('Error');
				return next();
		}
		//res.json(docs);

		res.render('mymap', {
 							items: docs
						  });
	}).sort({_id:-1}).limit(5000);
});


module.exports = router;
