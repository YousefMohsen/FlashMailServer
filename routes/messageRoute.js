var express = require('express');
var router = express.Router();
var DatabaseFacade = require('../Data/DatabaseFacade');
var NotificationHandler  = require('../pushNotifications/NotificationHandler')
//var tc = new testClass();


/* GET users listing. */
router.get('/', async(req, res, next) =>{
  //tc.getTeam()
  NotificationHandler.testMethod();


 
  res.send("Hi yohu");

  
});
router.post('/new', async(req, res, next)=> {
  var sender = '5a1f1bcf8bffa42e9c5c3e56';//req.body.sender; TODO: get sender
  var msg = req.body.msg;
  var title = req.body.title;
  var team = req.body.team;
  var dateSent = new Date();
  var date = new Date();
  var ts = String(Math.round(date.getTime() / 1000) + date.getTimezoneOffset() * 60);
  console.log("new date",Date.now())
  var newMessage = {title: title, msg: msg,sender: sender, dateSent:dateSent};
let result=[];


  try{
    result = await DatabaseFacade.addNewMessage(newMessage,team);
    console.log("in try")


  }
    
    catch(r){
  console.log("error!")
      result = null;
  
    }
    
  
    
    if(result!==null){
      await NotificationHandler.newMessagePush(team,newMessage);
      
    res.status(200).send("Success!");   }
    else{ 
      
      res.status(500).send("The mail does not match!");
      console.log("Failed")
    }
  
  
   
/*
 Team.findOneAndUpdate(
    {name:team},
    {$push: {"messages": newMessage}},
    {safe: true, upsert: false},
    function(err, model) {
      console.log(model);      
     if(model === null){
     
      res.status(500).send("Failed!");
      console.log("Failed")
    
    }else{  res.status(200).send("Success!");
    console.log("success")
  }
    }
);
*/

});
   /*

         
  console.log("Post Received: "+ title+sender+msg);
  
*/


/* GET all messages for that team. */
router.get('/:studentMail/:timeStamp', async(req, res, next)=> {
  var timeStamp = req.params.timeStamp;
  var studentMail = req.params.studentMail;
  
try{
  console.log(studentMail);
  result = await DatabaseFacade.getMessagesFromEmail(studentMail);
console.log(result)}
  catch(r){
console.log("error!")
    result = null;

  }


  if(result!==null){  
    
    let sorted = result.slice(timeStamp, result.length).sort((a, b) => {
      return b.dateSent - a.dateSent;
    });


    res.json (sorted);
    
  
  }
  else{ 
    res.status(500).send("The mail does not match!");
    console.log("Failed")}


 
      });


  


  



module.exports = router;
/*

router.get('/:ts(\\d+)/', function(req, res, next) {//get messages that is newer than the given timestamp



  res.send('Your timestamp is: '+req.params.ts);
});
*/