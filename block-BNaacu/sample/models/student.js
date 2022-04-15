var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name: String
})

var Student = mongoose.model( "Book",   studentSchema );

module.exports = Student;