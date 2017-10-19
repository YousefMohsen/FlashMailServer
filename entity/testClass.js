
var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

var Teacher = require("./Teacher");
var Team = require("./Team");

mongoose.connect('mongodb://readWriteUser:carlsbergsport500ml@yousefmohsen.dk:27017/lektAppDB');



class testClass  {
    constructor() {
     // this.initTeachers();




      
     Team.find( (err, users)=> {
      //if (err) throw err;
      // object of all the users
     console.log(users);
    });




    Teacher.find({mail: "koe@cphbusiness.dk"}, function(err, teacher) {
      console.log("Teacher: "+teacher);
          });



//this.initMeassages();
//console.log(this.findAllTeachers());



    }



   findAllTeachers(){
  
      
     Teacher.find({}, (err, users)=> {
           //if (err) throw err;
           this.findAllTeachers.result = users;
           // object of all the users
          console.log(users);
         });

return this.findAllTeachers.result ;
   }



    
initMeassages(){
    
  
    
    
var teamA = new Team({
  name:"HoldA",
  students: [{mail:"elev1@live.dk", token: "elev1Token"},{mail:"elev2@live.dk", token: "elev2Token"}],
  messages:[
    { title: "Lektier til på tirsdag", msg: "HEJ HOLDA, Lektier til næste gang. Skal sendes til borg@cphbusiness.dk på fronter inden 19/9-2017 kl 12.00:\n 1) Lav et logo / ikon til jeres app.  \n2) Aflever en minirapport (ca. 1 A4 side) med to afsnit:\n2A) Skriv et lille afsnit hvor I beskriver lidt om logoets / ikonets opbygning, farvevalg osv. Husk kilder.\n2B) Lav et afsnit hvor I beskriver tanker om farvevalg i jeres app generelt. Vis jeres farvevalg, og og hvilket farveskema i har valgt. I må selv bestemme om I vil fokusere mere på jeres app eller generel teori eller en blanding, bare begge dele er nævnt. Husk kildehenvisninger.", senderMail: "Kasper Østerbye "},
    { title: "Javascript FullStack holdet ", msg: "Hej HOLDA, Moodle bliver indgangen til alt info for faget, men den er endnu ikke sat korrekt op. Så for at I kan komme i gang, får I her et direkte link: https://github.com/CphbusFall2017FullStackJS/fullStackJsFall2017/blob/master/period-1.md\n Kig primært på første dags afsnit Before this lesson you should og sørg for at gøre det før første lektion. Den bliver rimelig kompakt, så jeg går ud fra at alt software er installeret før vi starter.\n Vi ses næste onsdag (23/8) til et forhåbentligt fantastisk semester :-) Lars", senderMail: "Lars Åke Mortensen" },
    { title: "CA3 i næste uge. ", msg: "HEJ HOLDA, CA3 i næste uge. Hvis du har haft svært ved react i de sidste uger, laver vi en react workshop, hvor du kan optjene de nødvendige studypoints for at komme videre. Mød op hver dag i næste uge til workshop eller lav den fulde forchromede CA3 hvis du og din gruppe har mod på det. Mød op på mandag og få mere info når vi starter CA3 op.", senderMail: "Jens Egholm Pedersen " }
]
  
});

teamA.save(function(err) {
  if (err) throw err;

  console.log('teamA created!');
});

    

    
    
var teamB = new Team({
  name:"HoldB",
  students: [{mail:"elev1@live.dk", token: "elev1Token"},{mail:"elev2@live.dk", token: "elev2Token"}],
  messages:[
    { title: "Lektier til på tirsdag", msg: "HEJ HOLDB, Lektier til næste gang. Skal sendes til borg@cphbusiness.dk på fronter inden 19/9-2017 kl 12.00:\n 1) Lav et logo / ikon til jeres app.  \n2) Aflever en minirapport (ca. 1 A4 side) med to afsnit:\n2A) Skriv et lille afsnit hvor I beskriver lidt om logoets / ikonets opbygning, farvevalg osv. Husk kilder.\n2B) Lav et afsnit hvor I beskriver tanker om farvevalg i jeres app generelt. Vis jeres farvevalg, og og hvilket farveskema i har valgt. I må selv bestemme om I vil fokusere mere på jeres app eller generel teori eller en blanding, bare begge dele er nævnt. Husk kildehenvisninger.", senderMail: "Kasper Østerbye "},
    { title: "Javascript FullStack holdet ", msg: "Hej HOLDB, Moodle bliver indgangen til alt info for faget, men den er endnu ikke sat korrekt op. Så for at I kan komme i gang, får I her et direkte link: https://github.com/CphbusFall2017FullStackJS/fullStackJsFall2017/blob/master/period-1.md\n Kig primært på første dags afsnit Before this lesson you should og sørg for at gøre det før første lektion. Den bliver rimelig kompakt, så jeg går ud fra at alt software er installeret før vi starter.\n Vi ses næste onsdag (23/8) til et forhåbentligt fantastisk semester :-) Lars", senderMail: "Lars Åke Mortensen" },
    { title: "CA3 i næste uge. ", msg: "HEJ HOLDB, CA3 i næste uge. Hvis du har haft svært ved react i de sidste uger, laver vi en react workshop, hvor du kan optjene de nødvendige studypoints for at komme videre. Mød op hver dag i næste uge til workshop eller lav den fulde forchromede CA3 hvis du og din gruppe har mod på det. Mød op på mandag og få mere info når vi starter CA3 op.", senderMail: "Jens Egholm Pedersen " }
]
  
});

teamB.save(function(err) {
  if (err) throw err;

  console.log('teamB created!');
});


}



initTeachers(){
  var kasper = new Teacher({
    name: "Kasper Oesterbye",
    mail: "koe@cphbusiness.dk",
    imgUrl: "http://yousefmohsen.dk:3000/images/kasper.jpg",

  });

  kasper.save(function(err) {
    if (err) throw err;

    console.log('Kasper created!');
  });



  var larsM = new Teacher({
    name: "Lars Mortensen",
    mail: "lam@cphbusiness.dk",
    imgUrl: "http://yousefmohsen.dk:3000/images/lars.png",

  });  

  larsM.save(function(err) {
    if (err) throw err;

    console.log('Lars created!');
  });

}
    
}
new testClass();






module.exports = testClass;


