var express = require('express');

var router = express();
var User = require('../models/user')

router.get('/new', (req, res) => {
  res.render("form")
});

router.post('/', (req, res) => {
  console.log(req.body);
  User.create(req.body, (err, data) => {
    if (err) return res.redirect('/users/new');
    if (data) return res.redirect('/');
  });
});

router.get('/', (req, res) => {
  User.find({}, (err, user) => {
    if (err) return next(err);
    res.render('allUsers', { user: user });
  })
});

router.get('/:id', (req, res) => {
  var id = req.params.id;
  console.log(id)
  User.findOne({ name: id }, (err, user) => {
    if (err) return res.send("User Not Found");
    res.render('singleUser', { user: user });
  })
})

module.exports = router;