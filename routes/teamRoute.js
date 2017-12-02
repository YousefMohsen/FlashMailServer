var express = require('express');
var router = express.Router();
//var Team = require('../MongooseSchemas/Team');
var DatabaseFacade = require('../Data/DatabaseFacade');


/* GET users listing. */
router.get('/', function(req, res, next) {


    res.send('Team index ');
  });




  router.get('/all', async(req, res)=> {
    let result =[];
 try{
     result  = await DatabaseFacade.getAllTeams();
  }catch(er){
result = null;
  }


if(result){
  
  res.json(result)
  
} else{ 
  res.status(500).send("Could not retrive any teams");
}
});




  router.post('/new', async(req, res, next)=>{


    var teamName = req.body.newTeam.teamName;
    var students = req.body.newTeam.teamList;

DatabaseFacade.createNewTeam(students.slice(1,students.length),teamName)
.then((result)=>{
  console.log("in then")
 res.status(200).send("Success!");
})
.catch((er)=>{
  console.log("in error")
  console.log(er)
  res.status(500).send(er);
  
})
 
  })

/* GET users listing. */
router.get('/:team', async(req, res, next) =>{
let teamName = timeStamp = req.params.team;
try{
  result = await DatabaseFacade.getTeamByName(teamName)
}
  catch(r){
console.log("error!")
    result = null;

  }


  if(result!==null){  
    
    
    res.json(result);
    
  
  }
  else{ 
    res.status(500).send("No team was found!");
    console.log("Failed")}



});


module.exports = router;
