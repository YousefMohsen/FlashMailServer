var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in path message ');
  console.log("prinbting console");
});

router.get('/1', function(req, res, next) {
  res.send('Yousef');
});
router.get('/2', function(req, res, next) {
  res.send('Janus');
});
module.exports = router;
