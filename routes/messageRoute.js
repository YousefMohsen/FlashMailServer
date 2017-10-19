var express = require('express');
var router = express.Router();
//var testClass = require('../entity/testClass');
var DBFacade = require("../dbFacade");


//var tc = new testClass();
var dbf = new DBFacade();


/* GET users listing. */
router.get('/', function(req, res, next) {
  //tc.getTeam()
  res.send(dbf.findAllTeachers());

  
});
router.post('/new', function(req, res, next) {
  var sender = req.body.sender;
  var msg = req.body.msg;
  var title = req.body.title;
  console.log("Post Received: "+ title+sender+msg);
  
res.send('test login '+title);
});
router.get('/:ts(\\d+)/', function(req, res, next) {//get messages that is newer than the given timestamp



  res.send('Your timestamp is: '+req.params.ts);
});

module.exports = router;
