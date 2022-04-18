var express = require('express');

var router = express();

router.get( '/', ( req, res )=>{
    res.render("index")
})

module.exports = router;