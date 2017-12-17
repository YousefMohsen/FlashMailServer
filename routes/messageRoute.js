var express = require('express');
var router = express.Router();
var DatabaseFacade = require('../Data/DatabaseFacade');
var NotificationHandler = require('../pushNotifications/NotificationHandler')
//var tc = new testClass();

/**
 * Creates a new message
 * Returns status code 200 if success.    
 * Returns staus code 500 if failed to delete the student
 */
router.post('/new', async (req, res, next) => {
  let sender = '5a36d680e08d3329d43e7b9e';//req.body.sender; TODO: get sender
  let msg = req.body.msg;
  let title = req.body.title;
  let team = req.body.team;
  let dateSent = new Date();
  let date = new Date();
  let ts = String(Math.round(date.getTime() / 1000) + date.getTimezoneOffset() * 60);
  console.log("new date", Date.now())
  let newMessage = { title: title, msg: msg, sender: sender, dateSent: dateSent };
  let result = [];
  try {
    result = await DatabaseFacade.addNewMessage(newMessage, team);
  }

  catch (r) {
    result = null;
  }

  if (result !== null) {
    await NotificationHandler.newMessagePush(team, newMessage);
    res.status(200).send("Success!");
  }
  else {
    res.status(500).send("The mail does not match!");
  }
});

/**
 * GET messages for that student.
 * Returns a list with all teams if success,                                                        
 * Returns status code 500 if failed to retrive teams
 *
 */
router.get('/:studentMail/:timeStamp', async (req, res, next) => {
  var timeStamp = req.params.timeStamp;
  var studentMail = req.params.studentMail;
  try {
    result = await DatabaseFacade.getMessagesFromEmail(studentMail);
  }
  catch (r) {
    result = null;
  }
  if (result !== null) {
    let sorted = result.slice(timeStamp, result.length).sort((a, b) => {
      return b.dateSent - a.dateSent;
    });
    res.json(sorted);
  }
  else {
    res.status(500).send("The mail does not match!");
  }
});


module.exports = router;
