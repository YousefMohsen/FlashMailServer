var express = require('express');
var router = express.Router();
//var Teacher = require('../MongooseSchemas/Teacher');
var DatabaseFacade = require('../Data/DatabaseFacade');

router.get('/', function(req, res, next) {//get all teachers
res.send("hey there");
});


/* GET users listing. */
router.get('/all', function(req, res, next) {//get all teachers
  /*  Teacher.find({}, function(err, users) {
  
    
        res.send(users);  
 
      });*/
  });


/* GET users listing. */
router.get('/:mail', function(req, res, next) {//get teacher by mail
  var mail = req.params.mail;

/*Teacher.findOne({mail: mail}, function(err, teacher) {
  console.log("Teacher: "+teacher);
  res.send(teacher);

});*/

  
});


module.exports = router;
