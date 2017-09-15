var express = require('express');
var router = express.Router();
var messages = [
  { title: "Lektier til imorgen", msg: "Til imorgen skal i spise 4 flødeboller fra netto samt 1/2 liter mælk", sender: "Leo Messi", date: new Date(2017,09,02,12,02,0,0)},
  { title: "Lektier til på tirsdag", msg: "Læs bogen Sapien - en kort historie om menneskeheden ", sender: "Thiago", date: new Date(2017,09,13,12,02,0,0)},
  { title: "Aflyst time", msg: "Barcelona spiller imorgen og timen er defor selvfølgelig aflyst", sender: "Xavi", date: new Date(2017,09,02,14,02)}
  

];
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'LektApp' });

res.json(messages);
});

module.exports = router;
