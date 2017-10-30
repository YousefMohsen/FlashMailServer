var express = require('express');
var router = express.Router();
var Team = require('../entity/Team');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Team index ');
    console.log("prinbting console");
  });

  router.get('/all', function(req, res) {
  
    Team.find({}, function(err, teams) {
      if(teams===null){ res.send("Failes")}    
      
      else{
      var teamList = [];
      
      teams.forEach(function(team) {
       teamList.push(team.name);
      });
  
     res.send(teamList)
    }
  });
  });




  router.post('/new', function(req, res, next){


    var teamName = req.body.newTeam.teamName;
    var students = req.body.newTeam.teamList;
console.log(teamName)
  

var newTeamModel = new Team({
      name: teamName,
      students: students
      
    });
    
    newTeamModel.save(function(err) {
      if(err ){
        
         res.status(500).send("Failed!");
         console.log("Failed")
       
       }else{  res.status(200).send("Success!");
       console.log("success")
     }
      console.log('HoldA created!');
    });



  })

/* GET users listing. */
router.get('/:mail', function(req, res, next) {
  res.send('your email is '+req.params.mail);
  console.log("prinbting console");
});


module.exports = router;
