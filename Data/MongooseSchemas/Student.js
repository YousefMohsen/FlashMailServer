var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema

var studentSchema = new Schema({
  id: Schema.Types.ObjectId,  
  name: String,
  pushToken: String,
  imgUrl: String,  
  mail: String,
  teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],


});


var Student = mongoose.model('Student', studentSchema);

// make this available to our users in our Node applications
module.exports = Student;

