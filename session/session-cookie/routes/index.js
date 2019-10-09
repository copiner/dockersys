var express = require('express');
var router = express.Router();

/* GET home page. */

router.post("/setcookie",function(req, res, next){
    var name = req.body.name;
    var age = req.body.age;
    //设置cookie，配置signed: true的话可以配置签名cookie
　　res.cookie("name", name, "age", age, {maxAge: 1000*60*60*24, httpOnly: true, signed: true});
    next();
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
