var express = require('express');
var router = express();
var User = require('../models/user')

router.get('/', (req, res,next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('users.ejs', { users: users });
  })
});

// router.get('/new', (req, res) => {
//   res.render("form.ejs")
// });

// router.post('/', (req, res) => {
//   console.log(req.body);
//   User.create(req.body, (err, data) => {
//     if (err) return res.redirect('/users/new');
//     if (data) return res.redirect('/');
//   });
// });

// router.get('/', (req, res) => {
//   User.find({}, (err, user) => {
//     if (err) return next(err);
//     res.render('allUsers', { user: user });
//   })
// });

router.get('/:id', (req, res,next) => {
  var id = req.params.id;
  console.log(id)
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser.ejs', { user });
  })
})

module.exports = router;

