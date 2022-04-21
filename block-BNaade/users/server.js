//requires
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");
var userRoutes = require("./routes/users");

//instantiate the app
var app = express();

app.use( logger("dev") );

//connecting the database

mongoose.connect( "mongodb://localhost/sample",
 (err)=>{
    console.log( err ? "connected false" : "connected: true" );
});

//middleware
app.set( "view engine", "ejs" );
app.set( "views", path.join( __dirname, "views" ) );

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.get('/', (req,res) => {
  res.render('index.ejs')
})

//handling routing middleware

app.use( "/users", userRoutes );


//error handling

app.use(( req, res, next )=>{
  res.status(404).send("Page Not Found");
})

app.use((error, req, res, next) => {
  res.send(error);
});


app.listen(4000, ()=>{
  console.log("server is listening on port 4k");
});