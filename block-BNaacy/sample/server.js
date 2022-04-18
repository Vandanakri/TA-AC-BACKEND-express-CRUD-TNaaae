var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var userRouter = require('./routes/user');
var indexRoute = require('./routes/index');
const User = require('./models/user')

//connect to database

mongoose.connect( "mongodb://localhost/sample", (err)=> {
  console.log( err ? err : "connected: true" );
})

//instantiating express app

var app = express();

//middleware
//setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));


//routing middlewares
app.get('/',(req,res) => {
  res.render('index.ejs')
})

app.use('/user',userRouter);
app.use('/',indexRoute);

//handling of error

app.use( (req, res, next )=>{
  res.statusCode(404).send("Page not found");
})

app.use( ( err, req, res, next )=>{
  res.send(err);
});

//listening

app.listen(3000,() => {
  console.log('server listening on port 3k')
})