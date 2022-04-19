var express = require("express");
var router = express.Router();

router.get('/',(req,res) => {
    //handle action
    res.render('users.ejs')
})

router.get( '/new', ( req, res )=>{
    res.render( "userForm.ejs" );
});

router.post('/', (req,res) => {
    //capture the data
})

router.get('/:id',(req,res) => {
 //single user details
 res.render('singleUser.ejs')
})

router.get('/:id/edit', (req,res) => {
    //edit form
})

router.put('/:id',(req,res) => {
    //capture the data from the update form 
})

router.delete('/:id',(req,res) => {
    //delete that user
})

module.exports = router;