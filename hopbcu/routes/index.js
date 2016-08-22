var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/findtudou',function(req,res,next){
	res.render('mymap',{title:'Findtudou'})
});

module.exports = router;
