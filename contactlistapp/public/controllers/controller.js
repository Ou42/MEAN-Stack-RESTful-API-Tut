// Step 19: Create controller
// Step 20: Connect controller.js file with index.html file -- did NOT work!
// function AppCtrl() {
//     console.log("Hello world from controller");
// }

// Step 20b: Attempt 2: Connect controller.js file with index.html file -- this WORKS!
// Step 20b continued: also changed <html> tag in index.html: <html ng-app="myApp">
var app = angular.module('myApp', []);

app.controller('AppCtrl', function ($scope) {
    console.log("Hello world from controller");
});