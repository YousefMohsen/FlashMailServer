var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'LektApp' });

res.send("Welcome to lektApp, Kasper");
});

module.exports = router;
