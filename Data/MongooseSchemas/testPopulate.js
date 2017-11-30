
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Teacher = require("./Teacher");
var Team = require("./Team");


mongoose.connect('mongodb://readWriteUser:carlsbergsport500ml@yousefmohsen.dk:27017/lektAppDB');







class testClass  {
    constructor() {
        console.log("hejsa");
        
this.initTeachers();

     
//this.find('Hold1');            

//new team
/*
var HoldA = new Team({
    name:"HoldB",
    students: [{mail:"elev1@live.dk", token: "elev1Token"},{mail:"elev2@live.dk", token: "elev2Token"}],
    messages:[]
    
  });
  
  HoldA.save(function(err) {
    if (err) throw err;
  
    console.log('HoldA created!');
  });
          */  
    }






//save








find(team){
//find
var sender = "59f0a5b7e5274f3808c8bd88";
var msg = "This is a new Messages content2";
var title ="msg title2";
var teamName = "Hold1";
var newMessage = {title: title, msg: msg,sender: sender};


Team.
findOne({ name: team }).
populate('messages.sender').
exec(function(error, doc) {

    console.log(doc);
  // doc.connections[0].item is a User doc
  // doc.connections[1].item is an Organization doc
});
}


initTeachers(){
    var kasper = new Teacher({
    _id: new mongoose.Types.ObjectId(),
      name: "Kasper Oesterbye",
      mail: "koe@cphbusiness.dk",
      imgUrl: "http://yousefmohsen.dk:3000/images/kasper.jpg",
  
    });
  
    kasper.save(function(err) {
      if (err) throw err;
  
      console.log('Kasper created!');
    });
  
  
  
    var larsM = new Teacher({
    _id: new mongoose.Types.ObjectId(),
        
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
