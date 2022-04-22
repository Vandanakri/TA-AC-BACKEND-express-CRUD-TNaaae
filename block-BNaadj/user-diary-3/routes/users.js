var express = require("express");
var router = express.Router();
var User = require('../models/userModel')

router.get('/', (req, res, next) => {
    //handle action
    User.find({}, (err, users) => {
        if (err) return next(err);
        res.render('users.ejs', { users: users })
    })
})

router.get('/new', (req, res,next) => {
    res.render("userForm.ejs");
});


router.post('/', (req, res,next) => {
    //capture the data
    User.create(req.body, (err, users) => {
        if (err) return res.redirect('/users/new');
        res.redirect('/');
    })
})

router.get('/:id', (req, res, next) => {
    //single user details
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) return next(err);
        res.render('singleUser.ejs', { user })
    })
})


router.get('/:id/edit', (req, res,next) => {
    //edit form
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) return next(err);
        res.render('editUser.ejs', { user })
    });
});

router.post('/:id', (req, res,next) => {
    //capture the data from update form
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
        if (err) return next(err);
        res.redirect('/users/');
    });
});


router.get("/:id/delete", (req, res,next) => {
    //delete that user
    User.findByIdAndDelete(req.params.id, (err,user) => {
        if(err) return next(err);
        res.redirect('/users')
    })
})

module.exports = router;