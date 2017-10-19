var express = require('express');
var router = express.Router();
var url = 'http://yousefmohsen.dk:3000/images/';
var messages = [
  { title: "Opsummering på aftalte ændringer af skema og fagindhold ", msg: "Her alle Her en hurtig opsummering på ændringer vi aftalte i klassen i går (onsdag d. 13) \n Skema ændres, så vi inddrager flere fredage tidligt, men så til gengæld har sidste lektion 1/12. \n	NoSQL + Security nedtones i forhold til oprindeligt oplæg \n•	GraphQL kommer nu med som et separat periode-emne \n Jeg ændrer snarest muligt TimeEdit, Periode-2 læringsmål, samt Moodle med disse ændringer. Indtil da, brug dette dokument for at se skema\n Mange hilsner\n Lars :-)", sender: "Lars Åke Mortensen", date: new Date(2017,09,02,12,02,0,0),"iconUrl":url+"lars.png"},
  { title: "Lektier til på tirsdag", msg: "Lektier til næste gang. Skal sendes til borg@cphbusiness.dk på fronter inden 19/9-2017 kl 12.00:\n 1) Lav et logo / ikon til jeres app.  \n2) Aflever en minirapport (ca. 1 A4 side) med to afsnit:\n2A) Skriv et lille afsnit hvor I beskriver lidt om logoets / ikonets opbygning, farvevalg osv. Husk kilder.\n2B) Lav et afsnit hvor I beskriver tanker om farvevalg i jeres app generelt. Vis jeres farvevalg, og og hvilket farveskema i har valgt. I må selv bestemme om I vil fokusere mere på jeres app eller generel teori eller en blanding, bare begge dele er nævnt. Husk kildehenvisninger.", sender: "Kasper Østerbye ", date: new Date(2017,09,13,12,02,0,0),"iconUrl":url+"kasper.jpg"},
  { title: "Javascript FullStack holdet ", msg: "Hej alle deltagere på FullStack JavaScript Moodle bliver indgangen til alt info for faget, men den er endnu ikke sat korrekt op. Så for at I kan komme i gang, får I her et direkte link: https://github.com/CphbusFall2017FullStackJS/fullStackJsFall2017/blob/master/period-1.md\n Kig primært på første dags afsnit Before this lesson you should og sørg for at gøre det før første lektion. Den bliver rimelig kompakt, så jeg går ud fra at alt software er installeret før vi starter.\n Vi ses næste onsdag (23/8) til et forhåbentligt fantastisk semester :-) Lars", sender: "Lars Åke Mortensen" , date: new Date(2017,09,02,14,02),"iconUrl":url+"lars.png"},
  { title: "CA3 i næste uge. ", msg: "CA3 i næste uge. Hvis du har haft svært ved react i de sidste uger, laver vi en react workshop, hvor du kan optjene de nødvendige studypoints for at komme videre. Mød op hver dag i næste uge til workshop eller lav den fulde forchromede CA3 hvis du og din gruppe har mod på det. Mød op på mandag og få mere info når vi starter CA3 op.", sender: "Jens Egholm Pedersen " , date: new Date(2017,09,02,14,02),"iconUrl":url+"jens.jpg"},
  { title: "Opsummering på aftalte ændringer af skema og fagindhold ", msg: "Her alle Her en hurtig opsummering på ændringer vi aftalte i klassen i går (onsdag d. 13) \n Skema ændres, så vi inddrager flere fredage tidligt, men så til gengæld har sidste lektion 1/12. \n	NoSQL + Security nedtones i forhold til oprindeligt oplæg \n•	GraphQL kommer nu med som et separat periode-emne \n Jeg ændrer snarest muligt TimeEdit, Periode-2 læringsmål, samt Moodle med disse ændringer. Indtil da, brug dette dokument for at se skema\n Mange hilsner\n Lars :-)", sender: "Lars Åke Mortensen", date: new Date(2017,09,02,12,02,0,0),"iconUrl":url+"lars.png"},
  { title: "Lektier til på tirsdag", msg: "Lektier til næste gang. Skal sendes til borg@cphbusiness.dk på fronter inden 19/9-2017 kl 12.00:\n 1) Lav et logo / ikon til jeres app.  \n2) Aflever en minirapport (ca. 1 A4 side) med to afsnit:\n2A) Skriv et lille afsnit hvor I beskriver lidt om logoets / ikonets opbygning, farvevalg osv. Husk kilder.\n2B) Lav et afsnit hvor I beskriver tanker om farvevalg i jeres app generelt. Vis jeres farvevalg, og og hvilket farveskema i har valgt. I må selv bestemme om I vil fokusere mere på jeres app eller generel teori eller en blanding, bare begge dele er nævnt. Husk kildehenvisninger.", sender: "Kasper Østerbye ", date: new Date(2017,09,13,12,02,0,0),"iconUrl":url+"kasper.jpg"},
  { title: "Javascript FullStack holdet ", msg: "Hej alle deltagere på FullStack JavaScript Moodle bliver indgangen til alt info for faget, men den er endnu ikke sat korrekt op. Så for at I kan komme i gang, får I her et direkte link: https://github.com/CphbusFall2017FullStackJS/fullStackJsFall2017/blob/master/period-1.md\n Kig primært på første dags afsnit Before this lesson you should og sørg for at gøre det før første lektion. Den bliver rimelig kompakt, så jeg går ud fra at alt software er installeret før vi starter.\n Vi ses næste onsdag (23/8) til et forhåbentligt fantastisk semester :-) Lars", sender: "Lars Åke Mortensen" , date: new Date(2017,09,02,14,02),"iconUrl":url+"lars.png"},
  { title: "CA3 i næste uge. ", msg: "CA3 i næste uge. Hvis du har haft svært ved react i de sidste uger, laver vi en react workshop, hvor du kan optjene de nødvendige studypoints for at komme videre. Mød op hver dag i næste uge til workshop eller lav den fulde forchromede CA3 hvis du og din gruppe har mod på det. Mød op på mandag og få mere info når vi starter CA3 op.", sender: "Jens Egholm Pedersen " , date: new Date(2017,09,02,14,02),"iconUrl":url+"jens.jpg"}
  

];
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'LektApp' });

res.json(messages);
});

module.exports = router;