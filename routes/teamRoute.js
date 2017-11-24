var express = require('express');
var router = express.Router();
//var Team = require('../MongooseSchemas/Team');
var DatabaseFacade = require('../Data/DatabaseFacade');


/* GET users listing. */
router.get('/', function(req, res, next) {


    res.send('Team index ');
    console.log("prinbting console");
  });




  router.get('/all', async(req, res)=> {
    console.log("in teams")
    let result =[];
 try{
     result  = await DatabaseFacade.getAllTeams();
  }catch(er){
console.log("er")
result = null;
  }


if(result){
  
  res.json(result)
  
} else{ 
  res.status(500).send("Could not retrive any teams");
  console.log("Failed")}
});




  router.post('/new', async(req, res, next)=>{


    var teamName = req.body.newTeam.teamName;
    var students = req.body.newTeam.teamList;

DatabaseFacade.createNewTeam(students.slice(1,students.length),teamName)
.then((result)=>{
  console.log(result)
  console.log("in then")
 res.status(200).send("Success!");
})
.catch((er)=>{
  console.log("in error")
  console.log(er)
  res.status(500).send(er);
  
})
  /*

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

*/

  })

/* GET users listing. */
router.get('/:mail', function(req, res, next) {
  res.send('your email is '+req.params.mail);
  console.log("prinbting console");
});


module.exports = router;
