var express = require('express');
var app = express();

// STEP 10
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000");

// STEP 9
// app.get('/', function(req, res) {
//     res.send("Hello world from server.js");
// });

// app.listen(3000);
// console.log("Server running on port 3000");