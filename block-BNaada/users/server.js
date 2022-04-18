var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var logger = require('morgan');
var indexRoute = require('./routes/index');
var userRoute = require('./routes/user');

mongoose.connect("mongodb://localhost/users", (err) => {
  console.log(err ? err : "connected:true");
})

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/users', userRoute);

app.use((req, res, next) => {
  res.statusCode(404).send("Page not found");
})

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log("server is listening on port 3k");
})