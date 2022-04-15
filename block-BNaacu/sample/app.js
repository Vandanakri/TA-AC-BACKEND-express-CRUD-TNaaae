var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var Student = require('./models/student');

var app = express();

mongoose.connect( "mongodb://localhost/sample", (err)=>{
    console.log( err ? err : "connected : true" );
})

app.set( "view engine", "ejs" );
app.set( "views", path.join( __dirname, "views" ) );

app.use( express.json() );
app.use( express.urlencoded() );

// student new Get request
app.get( "/students/new", ( req, res )=>{
    res.render("form")
} )

// student Post request
app.post( "/students", ( req, res )=>{
    console.log(req.body);
    Student.create( req.body, ( err, student )=>{
        console.log( err, student );
    } );
    res.send(`student ${req.body.name} is added successfully`);
});

// display all student
app.get( "/students", ( req, res )=>{
    Student.find( {}, (err,students)=>{
      console.log(err);
        let list = students.map((student)=>student.name);
        console.log(list);
        res.render( "students", {list:list} )
    }) 
});

// display particular student
app.get( "/students/:id", ( req, res, next )=>{
    var id = req.params.id;
    // Student.findOneAndUpdate()
    Student.find({"name":id},(err,students)=>{
        console.log(err,students[0].name)
        var name = { name:students[0].name, email:`${id}@altCampus.io` };
        res.render( "studentDetails", {name: name}  );
    })
});


app.use( ( req, res, next )=>{
    res.send("Page Not Found");
} );

app.listen( 3000, ()=>{
    console.log("server listening on port 3000");
} );

console.log("hello")