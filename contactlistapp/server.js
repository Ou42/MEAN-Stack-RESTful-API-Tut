var express = require('express');
var app = express();

// STEP 28
var mongojs = require('mongojs'); // require mongojs module
var db = mongojs('contactlist', ['contactlist']); // database & collection we'll be using

// STEP 23
app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
    console.log("I received a GET request");

// STEP 29: Get data from mongodb with a GET request
//  so, no longer need dummy data:
    // person1 = {
    //     name: 'NewTim',
    //     email: "tim@email1.com",
    //     number: '(111) 111-1111'
    // };
    
    // person2 = {
    //   name: 'NewEmily',
    //   email: "emily@email2.com",
    //   number: '(222) 222-2222'
    // };
    
    // person3 = {
    //   name: 'NewJohn',
    //   email: "john@email3.com",
    //   number: '(333) 333-3333'
    // };
  
    // var contactlist = [person1, person2, person3];
    // res.json(contactlist);

  // STEP 29 continued: Get data from mongodb with a GET request
    db.contactlist.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.listen(3000);
console.log("Server running on port 3000");

/*
 * // STEP 10 - 22
 *
 *  app.use(express.static(__dirname + "/public"));
 * 
 *  app.listen(3000);
 *  console.log("Server running on port 3000");
 ************************************************/

/* 
 * // STEP 9
 * 
 * app.get('/', function(req, res) {
 *      res.send("Hello world from server.js");
 * });
 * 
 *  app.listen(3000);
 *  console.log("Server running on port 3000");
 ************************************************/