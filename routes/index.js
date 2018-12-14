var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/',function(req,res,next){
	res.render('index',{page:'home',menuId:'home'});
});
module.exports=function(app){
app.get('pages/about', function(req, res,next) {
   res.render('pages/about');
 });
};

module.exports = router;

