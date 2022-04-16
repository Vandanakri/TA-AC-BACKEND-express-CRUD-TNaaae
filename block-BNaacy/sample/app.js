var express = require('express')
var logger = require('morgan')
var path = require('path')
var mongoose = require('mongoose')
var indexRouter = require('./routes/index')

mongoose.connect( "mongodb://localhost/user", (err)=> {
  console.log( err ? err : "connected: true" );
})

//instantiating express app

var app = express();

//middleware
//setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routing middlewares
app.use('/',indexRouter)

//listening

app.listen(3000,() => {
  console.log('server listening on port 3k')
})