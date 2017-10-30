var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema

var teamSchema = new Schema({
    name: String,
    students: [{
        name: String,
        mail:String,
         token: String}],

    messages:[{
        title: String,
        msg: String,
       sender: { type: Schema.Types.ObjectId, ref: 'Teacher' },
        date: Date,
        timeStamp: String}]

});


var Team = mongoose.model('Team', teamSchema);




module.exports = Team;


