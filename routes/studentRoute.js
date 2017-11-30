var express = require('express');
var router = express.Router();
var DatabaseFacade = require('../Data/DatabaseFacade');

//var tc = new testClass();


router.get('/', function(req, res, next) {
  //tc.getTeam()
  res.send("Hi from student route");

  
});
router.delete('/delete/:studentID', async(req, res, next)=> {
  var studentID = req.params.studentID;
console.log("student to delete: ",studentID)  
  try{
 result = await DatabaseFacade.deleteStudentByID(studentID);
  }catch(r){
  console.log("error!")
  console.log(r)
      result = null;

    }
  
    
    if(result!==null){

    res.status(200).send("Success!");   }
    else{ 
      res.status(500).send("Failed to delete student ");
      console.log("Failed")
    }
  
  


});



module.exports = router;
