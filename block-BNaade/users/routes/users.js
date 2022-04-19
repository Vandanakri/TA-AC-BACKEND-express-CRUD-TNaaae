var express = require('express');
var router = express();
var User = require('../models/user')

router.get('/', (req, res,next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('userList', { users: users });
  })
});

router.get('/:id', (req, res,next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('userDetails', { user: user });
  })
})


router.get('/new', (req, res) => {
  res.render("addUser")
});

router.post('/', (req, res) => {
  let data = req.body;
  console.log(data);
  User.create(data, (err, createdUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});


module.exports = router;

