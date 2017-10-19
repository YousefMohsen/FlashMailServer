var express = require('express');
var router = express.Router();
var Team = require('../entity/Team');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('test login ');
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

/* GET users listing. */
router.get('/:mail', function(req, res, next) {
  res.send('your email is '+req.params.mail);
  console.log("prinbting console");
});


module.exports = router;
