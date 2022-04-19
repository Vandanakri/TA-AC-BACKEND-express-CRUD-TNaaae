var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

//Requiring routes
var indexRoute = require('./routes/index');
var userRoute = require('./routes/users');

//connected to database

mongoose.connect("mongodb://localhost/users", (err) => {
  console.log(err ? err : "connected:true");
})

//instantiating the app

var app = express();

//middleware

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/assets'));

//handling routing middleware
app.use('/', indexRoute);
app.use('/users', userRoute);

//error handling middleware

app.use((req, res, next) => {
  res.statusCode(404).send("Page not found");
})

app.use((err, req, res, next) => {
  res.send(err);
});

//connecting to server

app.listen(3000, () => {
  console.log('server is listening on port 3k');
})

