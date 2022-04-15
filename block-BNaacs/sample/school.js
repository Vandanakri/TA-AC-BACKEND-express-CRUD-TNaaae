var express = require("express");
var app = express();
var path = require("path");

app.set( "view engine", "ejs" );
app.set( "views", path.join( __dirname, "views" ) );

app.get( '/', ( req, res )=>{
    res.render( "index" );
} );

app.use( ( req, res, next )=>{
    res.send("Page Not Found");
} );

app.listen( 3000, ()=>{
    console.log("server listening on port 3k");
} );