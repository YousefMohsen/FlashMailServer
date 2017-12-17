var express = require('express');
var router = express.Router();

/** Index route
*Test if the server is running
*/
router.get('/', function(req, res, next) {
res.send("Welcome to the Flash Mail Server");
});

module.exports = router;
