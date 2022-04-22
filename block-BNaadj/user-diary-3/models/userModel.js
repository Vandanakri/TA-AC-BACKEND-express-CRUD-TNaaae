var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true },
    email: String,
    age: Number,
    bio: String,
    hobbies: String
}, { timestamps: true });

module.exports = mongoose.model( "User", userSchema );

