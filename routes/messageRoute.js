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
  var sender = '59f1d039a5d7553b1884935f';//req.body.sender; TODO: get sender
  var msg = req.body.msg;
  var title = req.body.title;
  var team = req.body.team;
  var newMessage = {title: title, msg: msg,sender: sender};
  var returned = Team.findOneAndUpdate(
    {name:team},
    {$push: {"messages": newMessage}},
    {safe: true, upsert: false},
    function(err, model) {
      console.log(model);      
     if(model === null){
     
      res.status(507).send("Failed!");
      console.log("Failed")
    
    }else{  res.status(200).send("Success!");
    console.log("success")
  }
    }
);

});
   /*

         
  console.log("Post Received: "+ title+sender+msg);
  
*/


/* GET all messages for that team. */
router.get('/:teamID', function(req, res, next) {
  var teamID = req.params.teamID;
  console.log(teamID);
  

  Team.
  findOne({ name: teamID }).
  populate('messages.sender').
  exec(function(err, team) {
  
      console.log(team);

      if(team===null){res.send("failed ")}
      else res.send(team.messages);  
    });
 
 
 
 
      });


  


  



module.exports = router;
/*

router.get('/:ts(\\d+)/', function(req, res, next) {//get messages that is newer than the given timestamp



  res.send('Your timestamp is: '+req.params.ts);
});
*/