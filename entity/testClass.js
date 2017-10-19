
var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

var Teacher = require("./Teacher");
mongoose.connect('mongodb://readWriteUser:carlsbergsport500ml@yousefmohsen.dk:27017/lektAppDB');



class testClass  {
    constructor() {
     // this.initTeachers();










console.log(this.findAllTeachers());



    }



   findAllTeachers(){
  
      
     Teacher.find({}, (err, users)=> {
           //if (err) throw err;
           this.findAllTeachers.result = users;
           // object of all the users
         //  console.log(users);
         });

return this.findAllTeachers.result ;
   }

    
initMeassages(){


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


