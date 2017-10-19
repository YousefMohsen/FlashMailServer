var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema

var teamSchema = new Schema({

mails: [{mail:string, token: string}],
messages:[{title: String,
    msg: String,
    senderMail: String,
    timeStamp: String}]


});


var Team = mongoose.model('Team', teacherSchema);
