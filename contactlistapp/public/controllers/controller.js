// Step 21: Create dummy Data for testing
var app = angular.module('myApp', []);

app.controller('AppCtrl', function ($scope, $http) {
  console.log("Hello world from controller");

  $http.get('/contactlist'); // route
  
  person1 = {
      name: 'Tim',
      email: "tim@email1.com",
      number: '(111) 111-1111'
  };
  
  person2 = {
    name: 'Emily',
    email: "emily@email2.com",
    number: '(222) 222-2222'
  };
  
  person3 = {
    name: 'John',
    email: "john@email3.com",
    number: '(333) 333-3333'
  };

  var contactlist = [person1, person2, person3];
  // Step 22: Put dummy data into table
  $scope.contactlist = contactlist;
});

/*
 * Step 21: Create dummy Data for testing
 * 
 * var app = angular.module('myApp', []);
 * 
 * app.controller('AppCtrl', function ($scope) {
 *   console.log("Hello world from controller");
 * 
 *   person1 = {
 *       name: 'Tim',
 *       email: "tim@email1.com",
 *       number: '(111) 111-1111'
 *   };
 * 
 *   person2 = {
 *     name: 'Emily',
 *     email: "emily@email2.com",
 *     number: '(222) 222-2222'
 *   };
 * 
 *   person3 = {
 *     name: 'John',
 *     email: "john@email3.com",
 *     number: '(333) 333-3333'
 *   };
 * 
 *   var contactlist = [person1, person2, person3];
 *   // Step 22: Put dummy data into table
 *   $scope.contactlist = contactlist;
 * });
 ***************************************************/ 

/*
 * Step 20b: Attempt 2: Connect controller.js file with index.html file -- this WORKS!
 * Step 20b continued: also changed <html> tag in index.html: <html ng-app="myApp">
 * special thanks to Alexandre Santos for his comment to Part 1 of the YT video tutorial!
 * 
 * var app = angular.module('myApp', []);
 *
 * app.controller('AppCtrl', function ($scope) {
 *   console.log("Hello world from controller");
 * });
 ***************************************************************************************/ 

/*
 * Step 20: Connect controller.js file with index.html file -- did NOT work!
 * function AppCtrl() {
 *     console.log("Hello world from controller");
 * }
 ****************************************************************************/

// Step 19: Create controller