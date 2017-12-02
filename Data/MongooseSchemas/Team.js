var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema

var teamSchema = new Schema({
    name:  { type: String, unique: true },
//    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],

    messages:[{
        title: String,
        msg: String,
       sender: { type: Schema.Types.ObjectId, ref: 'Teacher' },
        dateSent: Date,
        timeStamp: String}]

});


var Team = mongoose.model('Team', teamSchema);




module.exports = Team;


