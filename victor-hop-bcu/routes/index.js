
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};
exports.findtudou = function(req,res){
  res.render('mymap',{title:'tudou'})
};
