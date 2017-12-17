
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var Team = require("./MongooseSchemas/Team");
var Student = require("./MongooseSchemas/Student");
var Teacher = require("./MongooseSchemas/Teacher");

mongoose.connect('mongodb://readWriteUser:carlsbergsport500ml@yousefmohsen.dk:27017/flashmailDB');
/**
 * All Database Manipulations goes through the DatabaseFacade
 */
class DatabaseFacade {

  constructor(){
  }

  /**
   * creates
   * @param students - list of student object to be added to database
   * @param team -  teamID to a team the sudents will be linked to
   */



  async createNewTeam(students, team) {//creates new student document for each student object in the array, and pushes student ids to the given team
    let savedTeam = await this._saveTeam(team);
    let studentFormated = await this._formatStudentList(students, savedTeam._id);//first set mails to lowercase
    let savedStudents = await Student.insertMany(studentFormated); //save all students
    let savedStudentsIds = savedStudents.map((student) => student._id); //get an array of student ids
    Team.findOneAndUpdate(
      { name: team },
      { $push: { "students": { $each: savedStudentsIds } } },
      { safe: true, upsert: false },
      function (err, model) {
        if (model === null) {

          console.log("Failed to add student")

        } else {
          //console.log(model); 

          console.log("Added student successfully")
        }
      }
    );

  }
  //params: listOfStudents
  async _formatStudentList(listOfStudents, teamID) {//converts students emails to lowercase
    return listOfStudents.map((student) => {
      student.mail = student.mail.toLowerCase();

      return { ...student, mail: student.mail.toLowerCase(), teams: [teamID] }


    })

  }

  //adds new message to the team
  async addNewMessage(newMessage, teamName) {
    // console.log("FROM DATABASEFACADE:",newMessage,teamName)
    return await Team.findOneAndUpdate(
      { name: teamName },
      { $push: { "messages": newMessage } },
      { safe: true, upsert: false })
      .then((model) => {
        if (model === null) { return false }
        else { return true }
      })
  }


  /**
   * sets the students push token
   * @param {String} studentEmail - email of a student 
   * @param {String} newToken - push token form expo
   */

  async setStudentToken(studentMail, newToken) {
    let mailInLowerCase = studentMail.toLowerCase();
    console.log(mailInLowerCase)
    return await Student.findOneAndUpdate({ mail: mailInLowerCase }, { pushToken: newToken })
  }
  /**
   * Returns all messages linked to the given mail
   * @param {String} studentEmail - email of a student 
   */
  async getMessagesFromEmail(studentEmail) {
    let mailInLowerCase = studentEmail.toLowerCase();
    let foundStudent = await Student.findOne({ mail: mailInLowerCase }).select('teams');
    let studentTeams = foundStudent.teams;
    return new Promise((resolve, reject) => {
      Team.
        find({
          '_id': { $in: studentTeams }
        }, { _id: 0, messages: 1 })
        .where('messages').
        populate({ path: 'messages.sender', }).
        exec(function (err, messages) {

          if (messages === null) {
            return "failed";

            console.log("failed")

            reject()
          }

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

  /**
   * Adds a student to a team
   * @param {String} studentEmail - Email of a student 
   * @param {String} team - name of a team
   */
  async addStudentToTeam(studentMail, team) {
    let mailInLowerCase = studentMail.toLowerCase();
    let teamID = await Team.findOne({ name: team }, { _id: 1 });

    return await Student.findOneAndUpdate(
      { mail: mailInLowerCase },
      { $push: { "teams": teamID._id } },
      { safe: true, upsert: false })
  }
  find(team) {
    var sender = "59f0a5b7e5274f3808c8bd88";
    var msg = "This is a new Messages content2";
    var title = "msg title2";
    var teamName = "Hold1";
    var newMessage = { title: title, msg: msg, sender: sender };
    Team.
      findOne({ name: team }).
      populate('messages.sender').
      exec(function (error, doc) {
      });
  }
  async _saveTeam(name) {
    return await new Team({ name: name }).save((er, model) => {
      if (er) { return null }
      else {
        return model._id;
      }
    })
  }
/**
 * returns an array with all team names
 */
  async getAllTeams() {
    let teams = await Team.find({}, { name: 1 });
    var teamList = [];
    teams.forEach(function (team) {
    teamList.push(team.name);
    });
    return teamList;
  }
/**
 * Returns team object for a given team
 * @param {String} teamName - name of a team
 */
  async getTeamByName(teamName) {
    return Team.findOne({ name: teamName }, {}).where('messages').populate('messages.sender').populate('students');
  }

/**
 * Deletes a student 
 * @param {String} studentID - ID of a student 
 */
  async deleteStudentByID(studentID) {
    return Student.findByIdAndRemove(studentID).then((res) => {
      for (let team of res.teams) {
        Team.findByIdAndUpdate(team,
          { $pull: { "students": new ObjectId(studentID) } })
          .catch((err) => console.log(err))
      }
    })
  }
  /**
   * Returns detailed infro about a student with the given email 
   * @param {String} studentEmail - email of a student 
   */
  async getStudentByMail(studentMail) {
    return Student.findOne({ mail: studentMail }, {}).populate('teams', { name: 1 });
  }

/**
 * Returns a list with all students in a team that have push tokens
 * @param {String} teamName - name of a team 
 */
  async getStudentsTokens(teamName) {
    let team = await Team.findOne({ name: teamName }, { students: 1 }).populate('students', { pushToken: 1 })
    let tokenList = [];
    for (let student of team.students) {
      if (student.pushToken) { tokenList.push(student.pushToken) }
    }
    return tokenList;
  }

/**
 * Adds mock data. Delete this method in deployment
 */
initTeachers() {
  var kasper = new Teacher({
    _id: new mongoose.Types.ObjectId(),
    name: "Kasper Oesterbye",
    mail: "koe@cphbusiness.dk",
    imgUrl: "http://yousefmohsen.dk:4000/images/kasper.jpg",

  });

  kasper.save(function (err) {
    if (err) throw err;

    console.log('Kasper created!');
  });



  var larsM = new Teacher({
    _id: new mongoose.Types.ObjectId(),

    name: "Lars Mortensen",
    mail: "lam@cphbusiness.dk",
    imgUrl: "http://yousefmohsen.dk:4000/images/lars.png",

  });

  larsM.save(function (err) {
    if (err) throw err;

    console.log('Lars created!');
  });

}







}

module.exports = new DatabaseFacade();
