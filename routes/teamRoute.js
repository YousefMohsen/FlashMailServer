var express = require('express');
var router = express.Router();
//var Team = require('../MongooseSchemas/Team');
var DatabaseFacade = require('../Data/DatabaseFacade');
/**
 * Returns a list with all teams if success,                                                        
 * Returns status code 500 if failed to retrive teams
 */
router.get('/all', async (req, res) => {
  let result = [];
  try {
    result = await DatabaseFacade.getAllTeams();
  } catch (er) {
    result = null;
  }
  if (result) {
    res.json(result)
  } else {
    res.status(500).send("Could not retrive any teams");
  }
});


/**
 * Creates new team with the given data in body
 * Returns status code 200 if success.    
 * Returns staus code 500 if failed to delete the student
 * body: team object: {name: String, students: [Student]}
 */
router.post('/new', async (req, res, next) => {
  var teamName = req.body.newTeam.teamName;
  var students = req.body.newTeam.teamList;
  DatabaseFacade.createNewTeam(students.slice(1, students.length), teamName)
    .then((result) => {
      res.status(200).send("Success!");
    })
    .catch((er) => {
      res.status(500).send(er);
    })

})

/**
 * Returns Team object if sucees  
 * Retuns status code 500 if error
 * @param {String} - name of a team to retrive data of
 */
router.get('/:team', async (req, res, next) => {
  let teamName = timeStamp = req.params.team;
  try {
    result = await DatabaseFacade.getTeamByName(teamName)
  }
  catch (r) {
    result = null;
  }
  if (result !== null) {
    res.json(result);
  }
  else {
    res.status(500).send("No team was found!");
  }
});


module.exports = router;
