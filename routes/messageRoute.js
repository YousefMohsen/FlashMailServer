var express = require('express');
var router = express.Router();
var Team = require('../entity/Team');


//var tc = new testClass();


/* GET users listing. */
router.get('/', function(req, res, next) {
  //tc.getTeam()
  res.send("Hi yohu");

  
});
router.post('/new', function(req, res, next) {
  var sender = req.body.sender;
  var msg = req.body.msg;
  var title = req.body.title;
  console.log("Post Received: "+ title+sender+msg);
  
res.send('test login '+title);
});


/* GET all messages for that team. */
router.get('/:teamID', function(req, res, next) {
  var teamID = req.params.teamID;
  console.log(teamID);
  

  Team.find({}, function(err, team) {
      
          res.send(team);  
        });
  /*Team.find({teamID: teamID}, function(err, users) {
  res.send(users);  
        });
      */});

      



      /* GET all teams. */
router.get('/all', function(req, res, next) {
  console.log(teamID);
  

  Team.find({}, (err, users)=> {
    //if (err) throw err;
    // object of all the users
   console.log(users);
   res.send(users);
  });



  /*Team.find({teamID: teamID}, function(err, users) {
  res.send(users);  
        });
      */});





module.exports = router;
/*

router.get('/:ts(\\d+)/', function(req, res, next) {//get messages that is newer than the given timestamp



  res.send('Your timestamp is: '+req.params.ts);
});
*/