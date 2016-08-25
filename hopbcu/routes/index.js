var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/findtudou',function(req,res,next){
	res.render('mymap',{title:'Findtudou',latitude:103.864527777778,longitude: 30.78425})
});

module.exports = router;
