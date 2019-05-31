var express = require('express');
var app = express();

// STEP 23
app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
    console.log("I received a GET request");
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