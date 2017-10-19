var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('test login ');
    console.log("prinbting console");
  });


/* GET users listing. */
router.get('/:mail', function(req, res, next) {
  res.send('your email is '+req.params.mail);
  console.log("prinbting console");
});


module.exports = router;
