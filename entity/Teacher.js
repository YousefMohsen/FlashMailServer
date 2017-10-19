var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema

var teacherSchema = new Schema({
  name: String,
  mail: String,
  imgUrl: String,

});


var Teacher = mongoose.model('Teacher', teacherSchema);

// make this available to our users in our Node applications
module.exports = Teacher;