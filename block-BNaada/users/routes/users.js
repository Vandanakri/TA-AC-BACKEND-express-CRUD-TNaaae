var express = require("express");
var router = express.Router();
var User = require('../models/userModel')

router.get('/',(req,res,next) => {
    //handle action
    User.find({}, (err,users) => {
        if(err) return next(err);
        res.render('users.ejs', { users: users})
    })
})

router.get( '/new', ( req, res )=>{
    res.render( "userForm.ejs" );
});


router.post('/', (req,res) => {
    //capture the data
   User.create(req.body, (err,users) => {
       if(err) return res.redirect('/users/new');
       res.redirect('/');
   })
})

router.get('/:id',(req,res,next) => {
 //single user details
 var id = req.params.id;
 User.findById(id,(err,user) => {
     if(err) return next(err);
     res.render('singleUser.ejs', { user })
 })
 
})

router.get('/:id/edit', (req,res) => {
    //edit form
    res.render('singleUser.ejs')
})

router.put('/:id',(req,res) => {
    //capture the data from the update form 
})

router.delete('/:id',(req,res) => {
    //delete that user
})

module.exports = router;