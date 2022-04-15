var express = require("express");
const router = express.Router();

router.get( '/new', ( req, res )=>{
    res.render( "userForm" );
} );

router.post( '/', ( req, res )=>{
    console,log(req.body);
} );


module.exports = router;