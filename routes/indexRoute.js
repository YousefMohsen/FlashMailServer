var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'LektApp' });

res.send("Welcome to the Flash Mail Server");
});

module.exports = router;
