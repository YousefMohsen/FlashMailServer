var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema

var teamSchema = new Schema({
name: String,
students: [{mail:String, token: String}],
messages:[{title: String,
    msg: String,
    senderMail: String,
    date: Date,
    timeStamp: String}]


});


var Team = mongoose.model('Team', teamSchema);
module.exports = Team;