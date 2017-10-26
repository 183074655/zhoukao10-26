var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*");
  fs.readFile('gqq.txt','utf-8',function(err,data){
    fs.writeFile('gqq.txt',a1+a2,function(err){
      res.send({name1:a1},{name2:a2})
    })
  })
});

module.exports = router;
