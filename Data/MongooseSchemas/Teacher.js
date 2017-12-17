var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Teacher schema. Represents the Teacher document in the database.
var teacherSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  mail: String,
  imgUrl: String,
});

let Teacher = mongoose.model('Teacher', teacherSchema);
// make this available to our users in our Node applications
module.exports = Teacher;

