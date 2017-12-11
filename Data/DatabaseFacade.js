







var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var Teacher = require("./MongooseSchemas/Teacher");
var Team = require("./MongooseSchemas/Team");
var Student = require("./MongooseSchemas/Student");



mongoose.connect('mongodb://readWriteUser:carlsbergsport500ml@yousefmohsen.dk:27017/lektAppDB');





 class DatabaseFacade  {



    constructor() {
        //this.getTeamByName("HoldA").then((res)=>console.log(JSON.stringify(res)));
//this.initTeachers();

//this.deleteStudentByID("5a1f1c6964109f51e8114b84");
let listOfStudents = [{name:"Leo Messi", mail:"meSsi@mail.com",teams:["HoldB"]},
{name:"Xavi", mail:"Xavi@mail.com",teams:["HoldB"]},
{name:"Iniesta ", mail:"InieSta@Mail.com",teams:["HoldB"]},
{name:"Thiago", mail:"ThiaGo@MAil.com",teams:["HoldB"]},
]
let newMsg = {
    title: "message four",
    msg: "this is msg four",
   sender: "5a159a97ff41983cd88f0cfe",
    date: new Date(),
    timeStamp: "2"}


 //this.addNewMessage(newMsg, "HoldA").then((re)=>console.log(re));

//this.addStudentToTeam("messi@mail.dk","HoldA")
//this.getMessagesFromEmail("Xavi@mail.com")
//this.setStudentToken("thiago@mail.com","newPushToken").then((r)=>console.log(r)).catch((er)=>console.log(er))
//this.createNewTeam(listOfStudents,"blsaBlah");
//this._saveTeam("HoldMondgsdol").then((t)=>console.log(t._id)).catch((r)=>console.log(r));
///this.getAllTeams().then((r)=>console.log(r));
//this.addStudentToTeam("Messi@mail.com","HoldA").then((res)=>console.log(res));

//this.find('Hold1');            

//new team
/*let teamList = [{
    name:"HoldA",
    students: [],
    messages:[]
    
  },{
    name:"HoldB",
    students: [],
    messages:[]
    
  },{
    name:"HoldC",
    students: [],
    messages:[]
    
  }];

  Team.insertMany(teamList).then((res)=>console.log("S:",res)).catch((er)=>console.log("R:",er));




  */
    }






//save

    


/*
params 
students: list of student object to be added to database
team: teamID to a team the sudents will be linked to
*/
 async createNewTeam (students,team){//creates new student document for each student object in the array, and pushes student ids to the given team
let savedTeam = await this._saveTeam(team);
console.log(savedTeam._id)
  let studentFormated =  await this._formatStudentList(students,savedTeam._id);//first set mails to lowercase
console.log(students)
console.log("AFTER!")
console.log(studentFormated)

let savedStudents = await Student.insertMany(studentFormated); //save all students
let savedStudentsIds = savedStudents.map((student)=>student._id); //get an array of student ids
//console.log(savedStudentsIds);

   Team.findOneAndUpdate(
      {name:team},
      {$push: {"students": {$each: savedStudentsIds}}},
      {safe: true, upsert: false},
      function(err, model) {
       if(model === null){
       
        console.log("Failed to add student")
      
      }else{  
        //console.log(model); 
        
      console.log("Added student successfully")
    }
      }
  );

}
//params: listOfStudents
async _formatStudentList(listOfStudents,teamID){//converts students emails to lowercase
  return listOfStudents.map((student)=>{
        student.mail = student.mail.toLowerCase();

          return {...student, mail:student.mail.toLowerCase(), teams:[teamID]}


  })

}

//adds new message to the team
async addNewMessage(newMessage, teamName){
 // console.log("FROM DATABASEFACADE:",newMessage,teamName)
   return await Team.findOneAndUpdate(
        {name:teamName},
        {$push: {"messages": newMessage}},
        {safe: true, upsert: false})
        .then((model)=>{
            if (model===null){return false}  
        else{return true}      
    })
}




async setStudentToken(studentMail, newToken){
  let mailInLowerCase = studentMail.toLowerCase();
  console.log(mailInLowerCase)
return await Student.findOneAndUpdate({mail:mailInLowerCase},{pushToken: newToken})


  
}

async getMessagesFromEmail(studentEmail){
let mailInLowerCase = studentEmail.toLowerCase();
let foundStudent = await Student.findOne({ mail: mailInLowerCase }).select('teams');
let studentTeams = foundStudent.teams;

return new Promise((resolve, reject)=>{

  

 Team.
find({
    '_id': { $in: studentTeams}},{_id:0,messages:1})
.where('messages').
populate({path:'messages.sender', }).
exec(function(err, messages) {

    if(messages===null){
      return "failed";
        
console.log("failed")   

reject()}

else {
var result = [];

for (let i = 0; i < messages.length; i++) {

result = result.concat(messages[i].messages);
    
}
resolve(result);
   }
  });

});

}


async addStudentToTeam(studentMail,team){
  let mailInLowerCase = studentMail.toLowerCase();
  let teamID = await Team.findOne({name: team},{_id:1});

 return await Student.findOneAndUpdate(
    {mail: mailInLowerCase},
    {$push: {"teams": teamID._id}},
    {safe: true, upsert: false})
}

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
async _saveTeam(name){

   return await new Team({name:name}).save((er,model)=>{
  if (er){return null}
  else{
    return model._id;
   // console.log(model)
      console.log(name,' created!');
    }
})
}
async getAllTeams(){

    
    let teams =  await Team.find({},{name:1});
  var teamList = [];
  
  teams.forEach(function(team) {
   teamList.push(team.name);
  });


return teamList;
}


async getTeamByName(teamName){
return Team.findOne({name: teamName}, {}).where('messages').populate('messages.sender').populate('students');
}


async deleteStudentByID(studentID){

  return Student.findByIdAndRemove(studentID).then((res)=>{

      console.log("TO delete: "+res);
 
          for (let team of res.teams) {
            Team.findByIdAndUpdate(team,
            {$pull: { "students" :  new ObjectId(studentID) } })
            .catch((err)=>console.log(err))         
           }




  })
  }
  async getStudentByMail(studentMail){
    return Student.findOne({mail: studentMail}, {});
    }
  /*
     Team.update({
        '_id': team._id
      },
    {"$pull": { "students": studentID}})
  */


initTeachers(){
    var kasper = new Teacher({
    _id: new mongoose.Types.ObjectId(),
      name: "Kasper Oesterbye",
      mail: "koe@cphbusiness.dk",
      imgUrl: "http://yousefmohsen.dk:4000/images/kasper.jpg",
  
    });
  
    kasper.save(function(err) {
      if (err) throw err;
  
      console.log('Kasper created!');
    });
  
  
  
    var larsM = new Teacher({
    _id: new mongoose.Types.ObjectId(),
        
      name: "Lars Mortensen",
      mail: "lam@cphbusiness.dk",
      imgUrl: "http://yousefmohsen.dk:4000/images/lars.png",
  
    });  
  
    larsM.save(function(err) {
      if (err) throw err;
  
      console.log('Lars created!');
    });
  
  }








}

module.exports = new DatabaseFacade();
